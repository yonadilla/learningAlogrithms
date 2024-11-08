function catAndMouse(x, y, z) { 
    let mouse = "";
    
    if ( Math.abs( x - z ) < Math.abs(y - z) ){
        mouse += "Cat A"
    } else if ( Math.abs(x - z) > Math.abs(y - z)){
        mouse += "Cat B"
    } else if (Math.abs(x - z) == Math.abs(y - z)) {
        mouse += "Mouse C"
    }

    return mouse
}


console.log(
    catAndMouse(1 ,2 ,3)
);