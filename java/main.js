//sidenav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "#484848";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "#d8d8d8";
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
//theme switch
/**-ar users = [
  {id: 1, first_name: 'John', last_name: 'Doe', email: 'jdoe@fuck.it'}
];
var templates = [
  { id: 1, name: 'Dark', value: 'css/dark.css'},
  { id: 2, name: 'Light', value: 'css/light.css'}
];

var app = new Vue({
  el: '#app',
  data: {
    title: "Hello, VueJS",
    users: users,
    templates: templates,
//    tableHeader: ['id', 'first_name', 'last_name'],
    default_template: 2,
    current_template: templates[0]
  },
  methods: {
    setTemplate: function(id){
      var selected_template = this.templates.filter(function(ele){
        return (ele.id == id)
      })[0];

      this.current_template = selected_template;
    },
    tableHeader: function(tableData) {
      var keys = [];
      for(key in tableData[0]){
        keys.push(key);
      }
      return keys;
    }
  }
});*/