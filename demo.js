var greet = function(){
    console.log("Welcome to node");
}
greet();

function father(){
    return "father";
}

var mother = function(){
    return "mother";
}

function greeting(user){
    console.log("welcome", user());
}

greeting(father);
greeting(mother);