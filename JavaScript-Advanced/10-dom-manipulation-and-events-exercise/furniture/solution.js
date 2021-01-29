function solve() {
  const input = document.querySelector('textarea');
  const output = document.querySelectorAll('textarea')[1];
  const generateBtn = document.querySelector('button');
  const buyBtn = document.querySelectorAll('button')[1];
  const tableBody = document.querySelector('tbody');

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate() {
    const inputArr = JSON.parse(input.value);
    
    for (let obj of inputArr) {
      const newRow = document.createElement('tr');
      const nameCell = document.createElement('td');
      const imgCell = document.createElement('td');
      const imgElm = document.createElement('img');
      const priceCell = document.createElement('td');
      const decFactorCell = document.createElement('td');
      const markCell = document.createElement('td');
      const markElm = document.createElement('input');

      nameCell.textContent = obj.name;
      imgElm.src = obj.img;
      imgCell.appendChild(imgElm);
      priceCell.textContent = obj.price;
      decFactorCell.textContent = obj.decFactor;
      markElm.type = 'checkbox';
      markCell.appendChild(markElm);

      newRow.appendChild(imgCell);
      newRow.appendChild(nameCell);
      newRow.appendChild(priceCell);
      newRow.appendChild(decFactorCell);
      newRow.appendChild(markCell);

      tableBody.appendChild(newRow);
    }  
  }

  function buy (){
    const tableRows = Array.from(document.querySelectorAll('tbody tr')).filter(x => x.children[4].children[0].checked);
    let boughtItems = [];
    let totalPrice = 0;
    let avgDecFactor = 0;
    
    for (let row of tableRows){
      boughtItems.push(row.children[1].textContent);
      totalPrice += Number(row.children[2].textContent);
      avgDecFactor += Number(row.children[3].textContent);
    }

    if (tableRows.length > 0){
      avgDecFactor = avgDecFactor / tableRows.length;
    }

    output.value = `Bought furniture: ${boughtItems.join(', ')}\n`;
    output.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    output.value += `Average decoration factor: ${avgDecFactor}`;
  }
}