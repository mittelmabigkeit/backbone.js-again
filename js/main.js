/**
 * Created by html on 31.10.2016.
 */

var Person = Backbone.Model.extend({
    defaults: {
        name: 'Evgeniy',
        age: 19,
        job: 'president',
        words: 'Hello,World'
    }
});

//var PersonView = Backbone.View.extend({
//    tagName: 'div',
//    className: 'TOP',
//    id: 'STAN',
//    render: function () {
//        this.$el.html(this.model.get('words'));
//    }
//});
//
//var person = new Person;
//var personView = new PersonView({model: person});

var PersonView = Backbone.View.extend({
    tagName: 'li',

    template: _.template('<%=name%> (<%=age%>) - <%=job%>'),

    initialize: function() {
        this.render();
    },

    render: function() {
        //this.$el.html(this.model.get('name') + ' (' + this.model.get('age') + ') - ' + this.model.get('job'));
        this.$el.html(this.template({age:40, job:'слесарь'}));
        //this.$el.html(this.template(this.model.toJSON()));
    }
});

var person = new Person;
var personView = new PersonView({model: person});

//CONSOLE COMMANDS
//personView;
//personView.el;
//personView.render();
//personView.el;