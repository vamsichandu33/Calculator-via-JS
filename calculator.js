function number(num){
    let result = document.getElementById("input");
    result.value += num;  //it is for getting number   or  result.value += num // it is for getting number side by side
}


function result(){       // for getting the result
    let result = document.getElementById("input");
    result.value = eval(result.value);
}

function clearResult(){
    let result = document.getElementById("input");
    result.value = "";
}

function deleteChar(){
    let number = document.getElementById("input");
    let remove = number.value; 
    remove = remove.slice(0,-1); // removes the last character from a Strings.
}