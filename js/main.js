//Vue
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
});