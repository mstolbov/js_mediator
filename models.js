var mWindowPart = function(options) { this.init(options); }
var mWindow = function(options) { this.init(options); }

$.extend(mWindowPart.prototype, {
    init: function(options) {
        this.type = options.type || "";
        this.material = options.material || "";
        this.width = options.width || 700;
        this.height = options.height || 1500;
    }
});

$.extend(mWindow.prototype, {
    init: function(options) {
        this.parts = options.parts || [];
        this.price = options.price || 0;
    }
});
