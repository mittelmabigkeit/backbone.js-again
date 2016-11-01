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

var PersonView = Backbone.View.extend({
    tagName: 'div',
    className: 'TOP',
    id: 'STAN',
    render: function () {
        this.$el.html(this.model.get('words'));
    }
});

var person = new Person;
var personView = new PersonView({model: person});


//CONSOLE COMMANDS
//personView;
//personView.el;
//personView.render();
//personView.el;