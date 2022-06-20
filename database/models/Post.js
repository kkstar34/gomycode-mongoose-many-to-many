import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    { 
    name: { type: String, required: false},
    price: { type: Number, required: false, min: 0 },
    categories: [{ type: mongoose.Types.ObjectId, ref: 'categories' }],
    }
)

export const Post = mongoose.model('posts', postSchema);