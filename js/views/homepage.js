define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        Item = require('models/item'),
        Items = require('collections/items'),
        ItemView = require('views/single_item');

    var ItemsList = window.items = new Items();

    return Backbone.View.extend({
        el: 'body',

        events: {
            "keypress #add-item"   : "createItem"
        },

        initialize: function() {
            this.input = this.$("#add-item");
            this.listenTo(ItemsList, 'add', this.addItem);
            this.render();
        },

        addItem: function(item) {
            new ItemView({model:item});
        },

        createItem: function(e) {
            if (e.keyCode != 13) return;
            if (!this.input.val()) return;
            ItemsList.create({name:this.input.val()});
            this.input.val('');
        },

        render: function() {
            ItemsList.each(function(todo){
                new ItemView({model:todo});
            }, this);
        }
    });
});