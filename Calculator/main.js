function hesab(){
    var bir = parseInt( document.getElementById(`ilkDeyer`).value);
    var iki =  parseInt( document.getElementById(`ikinciDeyer`).value);
    var emeliyyat = document.getElementById(`emeliyyat`).value;
    if (emeliyyat === `+`){
        document.getElementById(`cavab`).value= bir + iki;
    }else if (emeliyyat === `-`){
        document.getElementById(`cavab`).value= bir - iki;
    }else if (emeliyyat === `*`){
        document.getElementById(`cavab`).value= bir * iki;
    }else{
        document.getElementById(`cavab`).value= bir / iki;
    }
}