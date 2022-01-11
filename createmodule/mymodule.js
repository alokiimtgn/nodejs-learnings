/*by default all methods , variable of a node file/module are private and
accessible,within that scope only(private) , to make them accessible from anywhere else we need to export them.*/

const add = (a,b)=>{
    return a+b;
}

const sub = (a,b)=>{
    return a-b;
}

const mult = (a,b)=>{
    return a*b;
}

const divide = (a,b)=>{
    return a/b;
}

const name = "Vinod";
module.exports = {add,sub,mult,divide,name}