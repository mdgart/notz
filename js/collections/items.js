define(function(require){
    var // Libraries
        _ = require('underscore'),
        Backbone = require('backbone'),

        // Model
        Item = require('models/item');

    return Backbone.Collection.extend({
        model: Item,
        url: '/items'
    });
});