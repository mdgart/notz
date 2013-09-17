define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        defaults: {
            name: "New Task",
            percentage_done: 0,
            resource: undefined
        }
    });
});