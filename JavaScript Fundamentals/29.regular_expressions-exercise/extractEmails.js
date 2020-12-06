function extractEmails([text]) {
    let pattern = /(^|(?<=\s))[a-z0-9]+([.\-_][a-z0-9]+)*@[a-z]+(\-[a-z]+)?(\.[a-z]+(\-[a-z]+)?)+/g

    if (pattern.test(text)){
        console.log(text.match(pattern).join('\n'));
    }
}

extractEmails(
    [ 'Please contact us at: support@github.com.']
)

console.log('\n-------------------------\n');

extractEmails(
    ['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.']
)

console.log('\n-------------------------\n');

extractEmails(
    ['Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.']
)