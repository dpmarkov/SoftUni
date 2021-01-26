function objectFactory(library, orders){
    let composedArr = [];

    for (let order of orders){
        let name = order.template.name;
        let composed = {
            name
        };
        let parts = order.parts;

        for (let part of parts){
            composed[part] = library[part];
        }

        composedArr.push(composed);
    }

    return composedArr;
}
const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    },
  ];
  
const products = objectFactory(library, orders);
console.log(products);