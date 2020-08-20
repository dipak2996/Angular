"use strict";
exports.__esModule = true;
exports.Post = void 0;
var Post = /** @class */ (function () {
    function Post(title, isPublic) {
        this._isPublic = isPublic;
        this.title = title;
        console.log("post is created");
    }
    Object.defineProperty(Post.prototype, "isPublic", {
        get: function () {
            return this._isPublic;
        },
        set: function (value) {
            this._isPublic = value;
        },
        enumerable: false,
        configurable: true
    });
    Post.prototype.displayPost = function () {
        if (this._isPublic === true) {
            console.log("post will display");
        }
        else {
            console.log("post will not going to display");
        }
    };
    return Post;
}());
exports.Post = Post;
