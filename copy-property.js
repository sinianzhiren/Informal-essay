Object.defineProperty(Object.prototype,'extend',{
        writable: true,
        enumerable: false,
        configurable: true,
        value: function (obj) {
            var names = Object.getOwnPropertyNames(obj);
            for (var i = 0;i<names.length;i++){
                if (names[i] in this) continue;
                var doc = Object.getOwnPropertyDescriptor(obj,names[i]);
                Object.defineProperty(this,names[i],doc);
            }
        }
    });