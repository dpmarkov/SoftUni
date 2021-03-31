//@ts-check
const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const host = 'http://localhost:8080'; // Application host (NOT service host - that can be anything)
const DEBUG = true;

let browser;
let page;

describe('E2E tests', function () {
    if (DEBUG) {
        this.timeout(120000);
    } else {
        this.timeout(6000);
    }

    before(async () => {
        if (DEBUG) {
            browser = await chromium.launch({ headless: false, slowMo: 1000 });
        } else {
            browser = await chromium.launch();
        }
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        await page.close();
    });

    describe('Tests', () => {
        it('load books', async () => {
            await page.goto(host);

            await page.click('#loadBooks');
            const tableContent = await page.$eval('table', el => el.textContent);

            expect(tableContent).to.contains('Harry Potter and the Philosopher\'s Stone');
            expect(tableContent).to.contains('C# Fundamentals');
        });

        it('validation check when try to add book with empty fields', async () => {
            await page.goto(host);
            
            page.on('dialog', dialog => dialog.dismiss());

            const [dialog] = await Promise.all([
                page.waitForEvent('dialog'),
                page.click('text=Submit')
            ]);
            
            let msg = dialog.message();
            
            expect(msg).to.equal('All fields are required!');
        });

        it('validation check when try to add book without title', async () => {
            await page.goto(host);

            await page.fill('[name="author"]', 'John');
            
            page.on('dialog', dialog => dialog.dismiss());

            const [dialog] = await Promise.all([
                page.waitForEvent('dialog'),
                page.click('text=Submit')
            ]);
            
            let msg = dialog.message();
            
            expect(msg).to.equal('All fields are required!');
        });

        it('validation check when try to add book without author', async () => {
            await page.goto(host);

            await page.fill('[name="title"]', 'CS:GO for Dummies');
            
            page.on('dialog', dialog => dialog.dismiss());

            const [dialog] = await Promise.all([
                page.waitForEvent('dialog'),
                page.click('text=Submit')
            ]);
            
            let msg = dialog.message();
            
            expect(msg).to.equal('All fields are required!');
        });

        it('add book', async () => {
            await page.goto(host);

            await page.fill('[name="author"]', 'John');
            await page.fill('[name="title"]', 'CS:GO for Dummies');

            page.click('text=Submit');
            await page.waitForRequest('http://localhost:3030/jsonstore/collections/books');
        });

        it('edit book', async () => {
            await page.goto(host);

            await page.click('#loadBooks');
            await page.click('.editBtn');

            const firstBookId = await page.$eval('tbody>tr', el => el.dataset.id);
            const firstBookTitle = await page.$eval('td', el => el.textContent);
            const firstBookAuthor = await page.$eval(':nth-match(td, 2)', el => el.textContent);
            //console.log(firstBookTitle, firstBookAuthor);
            
            const editBookTitle = await page.$eval('#editForm>input[name="title"]', el => el.value);
            const editBookAuthor = await page.$eval('#editForm>input[name="author"]', el => el.value);
            //console.log(editBookTitle, editBookAuthor);

            expect(firstBookTitle).to.be.equal(editBookTitle);
            expect(firstBookAuthor).to.be.equal(editBookAuthor);

            let query;

            page.on('request', request =>
            query = (request.method() + ' ' + request.url()));

            await page.click('text=Save'); 

            const compareQuery = 'PUT http://localhost:3030/jsonstore/collections/books/' + firstBookId;
            
            expect(query).to.be.equal(compareQuery);
        });

        it('delete book', async () => {
            await page.goto(host);

            await page.click('#loadBooks');

            const bookId = await page.$eval('tbody>tr', el => el.dataset.id);
            let query;

            page.on('request', request =>
            query = (request.method() + ' ' + request.url()));

            page.on('dialog', dialog => dialog.accept());

            const [dialog] = await Promise.all([
                page.waitForEvent('dialog'),
                page.click('.deleteBtn') //try to delete the first book
            ]);

            const compareQuery = 'DELETE http://localhost:3030/jsonstore/collections/books/' + bookId;
            
            expect(query).to.be.equal(compareQuery);
        });
    });
});
