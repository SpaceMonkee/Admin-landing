//page header
var app = new Vue({
    el: '#app',
    data: {
        message: 'Home',
        messages: 'Notices',
        messages1: 'Emails',
        messages2: 'Map',
        messages3: 'Incomplete Tasks',
    }
})

//icon  update times

var app = new Vue({
  el: '#app-2',
  data: {
    messages: ' Last Updated at ' + new Date().toLocaleString()
  }
});