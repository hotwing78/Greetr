(function(global, $) {

    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged In',
        es: 'Inicio sesion'
    };

    //These are the methods being placed on the Greetr prototype
    Greetr.prototype = {

        //Logs the supportedLangs on the console;
        supportedLangDisplay: function() {
            console.log(supportedLangs);
        },

        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        greetings: function() {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreetings: function() {
            return formalGreetings[this.language] + ', ' + this.fullName() + '.';
        },

        //To make the greeting formal, pass in the string "formal" lowercase;
        greet: function(formal) {
            var msg;

            if (formal === 'formal') {
                msg = this.formalGreetings();
            } else {
                msg = this.greetings();
            }
            if (console) {
                console.log(msg);
            }
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ":" + this.fullName());
            }
            return this;
        },

        loginGreet: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }
            if (!selector) {
                throw 'Missing jQuery selector';
            }

            var msg;

            if (formal === 'formal') {
                msg = this.formalGreetings();
            } else {
                msg = this.greetings();
            }
            if (selector.indexOf('#') !== 0) {
                $('#' + selector).html(msg);
            } else {
                $(selector).html(msg);
            }
            this.log();
            return this;
        },

        //Can change the language on the fly as long as it is supported
        setLang: function(lang) {
            this.language = lang;
            this.validate();
            return this;
        }
    };

    //Initializing Greetr;
    Greetr.init = function(firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || " ";
        self.lastName = lastName || " ";
        self.language = language || "en";
    }

    //Setting the Greetr.init.prototype to the Greetr.prototype so that Greetr.init has access to the Greetr methods;
    Greetr.init.prototype = Greetr.prototype;
    global.Greetr = global.G$ = Greetr;

}(window, jQuery)); //The Greetr library is self invoked with the window being passed in. also works with jQuery;
