var jam = {
    "packages": [
        {
            "name": "backbone",
            "location": "../jam/backbone",
            "main": "backbone.js"
        },
        {
            "name": "bootstrap",
            "location": "../jam/bootstrap"
        },
        {
            "name": "handlebars",
            "location": "../jam/handlebars",
            "main": "handlebars.js"
        },
        {
            "name": "jquery",
            "location": "../jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "text",
            "location": "../jam/text",
            "main": "text.js"
        },
        {
            "name": "underscore",
            "location": "../jam/underscore",
            "main": "underscore.js"
        }
    ],
    "version": "0.2.17",
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "handlebars": {
            "exports": "Handlebars"
        },
        "underscore": {
            "exports": "_"
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "backbone",
            "location": "../jam/backbone",
            "main": "backbone.js"
        },
        {
            "name": "bootstrap",
            "location": "../jam/bootstrap"
        },
        {
            "name": "handlebars",
            "location": "../jam/handlebars",
            "main": "handlebars.js"
        },
        {
            "name": "jquery",
            "location": "../jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "text",
            "location": "../jam/text",
            "main": "text.js"
        },
        {
            "name": "underscore",
            "location": "../jam/underscore",
            "main": "underscore.js"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "handlebars": {
            "exports": "Handlebars"
        },
        "underscore": {
            "exports": "_"
        }
    }
});
}
else {
    var require = {
    "packages": [
        {
            "name": "backbone",
            "location": "../jam/backbone",
            "main": "backbone.js"
        },
        {
            "name": "bootstrap",
            "location": "../jam/bootstrap"
        },
        {
            "name": "handlebars",
            "location": "../jam/handlebars",
            "main": "handlebars.js"
        },
        {
            "name": "jquery",
            "location": "../jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "text",
            "location": "../jam/text",
            "main": "text.js"
        },
        {
            "name": "underscore",
            "location": "../jam/underscore",
            "main": "underscore.js"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "handlebars": {
            "exports": "Handlebars"
        },
        "underscore": {
            "exports": "_"
        }
    }
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}