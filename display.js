function display{
    console.log("display numbers")
}

function value(callback){
    callback();
}
value(display);