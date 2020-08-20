import {Post} from './post.module'
import {move} from '../decorater/move'
let post:Post=new Post('new post',true);


console.log(post.isPublic);

post.displayPost();

