function matchFullName(input) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    
    let arr = pattern.exec(input);
    let resultArr = []

    while (arr != null){
        resultArr.push(arr[0]);
        arr = pattern.exec(input);
    }

    console.log(resultArr.join(' '));
}

matchFullName(["Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"])