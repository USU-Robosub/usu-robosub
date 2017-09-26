var $ = require("jquery-deferred");

module.exports = {
    Wait: function(duration) {
        return function(args){
            return new $.Deferred(function(deferred){
                setTimeout(function(){
                    deferred.resolve(args);
                }, duration)
            });
        };
    },
    Deferred: $.Deferred,
    WhenAll: $.when
};
