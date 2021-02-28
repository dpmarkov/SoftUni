(function() {
    Object.assign(String.prototype, {
        ensureStart(str) {
            if (this.substring(0, str.length) != str){
                return str + this;
            } else {
                return this + '';
            }
        },
        ensureEnd(str) {
            if (this.slice(-str.length) != str){
                return this + str;
            } else {
                return this + '';
            }
        },
        isEmpty() {
            if (this == ''){
                return true;
            }

            return false;
        },
        truncate(n) {
            if (this.length <= n) {
                return this + '';
            } else {
                const words = this.split(' ');

                if (words.length > 1){
                    let z = words.length-1; //index of end word
                    let charsSum = calcChars(z);

                    while (charsSum > n){
                        z--;
                        charsSum = calcChars(z);
                    }

                    let result = '';
                    for (let i=0; i<=z; i++){
                        result += ' ' + words[i];
                    }
                    result += '...';

                    return result.trim();
                    
                    function calcChars(k) { //k - index of word to count to
                        let chars = 3; //(...) +3
                        chars += k-1
                        for (let i=0; i<=k; i++){
                            chars += words[i].length;
                        }

                        return chars;
                    }
                } else if (n < 4){
                    return '.'.repeat(n);
                } else {
                    return words[0].substring(0, n-3) + '...';
                }
            }
        }
    });

    String.format = (string, ...params) => {
        let i=0;

        for (let word of params){
            string = string.replace(`{${i}}`, word);
            i++;
        }

        return string + '';
    }
})();

// console.log('House'.ensureStart('White'));
// console.log('White House'.ensureStart('White'));
// console.log('Black Cat'.ensureEnd('Cat'));
// console.log('Black '.ensureEnd('Cat'));
// console.log(''.isEmpty());
// console.log('a'.isEmpty());

// let str = 'my string';
// str = str.ensureStart('my');
// console.log(str);
// str = str.ensureStart('hello ');
// console.log(str);
// str = str.truncate(16);
// console.log(str);
// str = str.truncate(14);
// console.log(str);
// str = str.truncate(8);
// console.log(str);
// str = str.truncate(4);
// console.log(str);
// str = str.truncate(2);
// console.log(str);
// str = String.format('The {0} {1} fox', 'quick', 'brown');
// console.log(str);
// str = String.format('jumps {0} {1}', 'dog');
// console.log(str);

console.log('the quick brown fox jumps over the lazy dog'.truncate(43));