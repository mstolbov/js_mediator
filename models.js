var mWindow = function(options) { this.init(options); }

$.extend(mWindow.prototype, {
    init: function(options) {
        this.type = options.type;
        this.material = options.material;
    }
});
