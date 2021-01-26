function generateReport(colNames) {
    let result = [];
    let checkedCols = [];
    let allColsElms = Array.from(document.querySelectorAll('input[type=checkbox]'));
    let allColsNames = [];
    
    for (let colElm of allColsElms){
        allColsNames.push(colElm.name);
    }
    
    for (let col of allColsElms){
        if (col.checked == true){
            checkedCols.push(col);
        }
    }

    let tableRows = document.querySelectorAll('table tbody tr');
    
    for (let i=0; i<tableRows.length; i++){
        let newObj = {};

        for (let col of checkedCols){
            let colName = col.name;

            let cellValue = tableRows[i].children[allColsNames.indexOf(colName)].textContent;
            
            newObj[colName] = cellValue;
        }

        result.push(newObj);
    }

    document.getElementById('output').value = JSON.stringify(result);
}