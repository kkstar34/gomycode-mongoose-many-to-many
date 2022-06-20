import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
    { 
    name:       { type: String, required: true },
    posts:   [{ type: mongoose.Types.ObjectId, ref: 'posts' }],
    }
)

export const Category = mongoose.model('categories', categorySchema);