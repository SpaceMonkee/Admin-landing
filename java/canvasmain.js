//sidenav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "#484848";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "#222";
}
//first email
var content = document.getElementById("text");
var button = document.getElementById("text");

button.onclick = function(){
    
    if(content.className == "open1"){
        //will shrink box
        content.className = "";
    } else{
        //expand the box
        content.className = "open1";
    }
};
//second email
var content1 = document.getElementById("text2");
var button1 = document.getElementById("text2");

button1.onclick = function(){
    
    if(content1.className == "open2"){
        //will shrink box
        content1.className = "";
    } else{
        //expand the box
        content1.className = "open2";
    }
};