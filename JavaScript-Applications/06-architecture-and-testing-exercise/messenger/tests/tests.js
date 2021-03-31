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
        it('load messages', async () => {
            await page.goto(host);

            await page.click('text=Refresh');
            const content = await page.$eval('#messages', textarea => textarea.value);
            console.log(content);

            expect(content).to.contains('Spami: Hello, are you there?\nGarry: Yep, whats up :?\nSpami: How are you? Long time no see? :)\nGeorge: Hello, guys! :))\nSpami: Hello, George nice to see you! :)))');
        });

        it('send message', async () => {
            await page.goto(host);

            await page.fill('#author', 'John');
            await page.fill('#content', 'some message');
            await page.click('text=Send');

            await page.click('text=Refresh');
            const NewMsgs = await page.$eval('#messages', textarea => textarea.value);
            
            expect(NewMsgs).to.contains('John: some message');
        });
    });
});
