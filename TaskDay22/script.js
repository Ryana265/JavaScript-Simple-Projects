function storerecords(){
    storerec={
        Carb:carbrand.value,
        Price:price.value,
        Key:key.value
    }
    if(storerec.Carb==""||storerec.Price==""||storerec.Key==""){
        alert("Please fill Missing Details");
    }
    else{
        if(storerec.Key in localStorage){
            alert("Already Exist");
        }
        else{
            localStorage.setItem(storerec.Key,JSON.stringify(storerec));
            alert("Car Details Added Sucessfully");
        }
    }
}
function retrieve(){
    let key = dataretrive.value;
    let storerec = localStorage.getItem(key);

    if(storerec){
        result.innerHTML = storerec;
    } else {
        result.innerHTML = "No record found for the provided key.";
    }
}

function delete2(){
    let key1=keydelete.value;
    localStorage.removeItem(key1);
}
function clearall(){
    localStorage.clear()
}