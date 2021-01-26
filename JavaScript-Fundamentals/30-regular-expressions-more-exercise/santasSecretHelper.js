function santasSecretHelper(input) {
    let n = Number(input.shift());
    let line = input.shift();

    while (line != 'end'){
        let msg = '';

        for (i=0; i<line.length; i++){
            msg += String.fromCharCode(line.charCodeAt(i) - n);
        }

        let pattern = /@(?<name>[A-Za-z]+)[^@\-\!:>]+!(?<behavior>[GN])!/g

        if (msg.match(pattern) != null){
            let match = pattern.exec(msg);
            let name = match['groups']['name'];
            let behavior = match['groups']['behavior']
            
            if (behavior == "G"){
                console.log(name);
            }
        }

        line = input.shift();
    }
}

santasSecretHelper(
    [
        '3',
        'CNdwhamigyenumje$J$',
        'CEreelh-nmguuejn$J$',
        'CVwdq&gnmjkvng$Q$',
        'end'
    ]
)

console.log('---');

santasSecretHelper(
    [
        '4',
        '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
        '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
        ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
        "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
        'DReh}e=<4lhzj1%K%',
        'end'
    ]
)

console.log('---');

santasSecretHelper(
    [
        '3',
        "N}eideidmk$'(mnyenmCNlpamnin$J$",
        'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
        'ppqmkkkmnolmnnCEhq/vkievk$Q$',
        'yyegiivoguCYdohqwlqh/kguimhk$J$',
        'end'
    ]
)