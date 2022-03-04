/* to import a module we need to use require and paas the filename
 with path*/
const mymodule = require("./mymodule");
console.log('Add : '+mymodule.add(8,9));
console.log('Sub : '+mymodule.sub(8,9));
console.log('Product : '+mymodule.mult(8,9));
console.log('Quotient : '+mymodule.divide(8,9));
console.log('Name : '+mymodule.name);
 