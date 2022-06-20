
import { Post } from './../database/models/Post.js';
import { Category } from './../database/models/Category.js';

export async function  postControllerCreate(req, res, next) {
    const post  = req.body;
    const newPost = await Post.create(post);
    await Category.updateMany({ '_id': newPost.categories }, { $push: { posts: newPost._id } });
    return res.send(newPost);
}

export async function  postControllerIndex(req, res, next) {
 const posts = await Post.find().populate("categories");
 return res.send(posts);
}