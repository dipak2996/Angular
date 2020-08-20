"use strict";
exports.__esModule = true;
var post_module_1 = require("./post.module");
var post = new post_module_1.Post('new post', true);
console.log(post.isPublic);
post.displayPost();
