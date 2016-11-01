/**
 * Created by html on 31.10.2016.
 */

var Person = Backbone.Model.extend({
    defaults: {
        name: 'Evgeniy',
        age: 19,
        job: 'president'
    }
});

var PersonView = Backbone.View.extend({
    //initialize: function () {
    //  //console.log(this.model)
    //},
    tagName: 'li',
    render: function () {
        this.$el.html(this.model.get('name') + '(' + this.model.get('age') + ') - ' + this.model.get('job'));
    }
});

var person = new Person;
var personView = new PersonView({model: person});


//CONSOLE COMMANDS
//personView;
//personView.el;
//personView.render();
//personView.el;