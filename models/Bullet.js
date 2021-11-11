import mongoose from "mongoose";

const BulletSchema = mongoose.Schema({
    description: { type: String,  required: true },
    tags: [{ type: String, required: true }],
}, 
    { 
        collection: "bullets",
        timestamps: true
    }
)

export default mongoose.model("Bullets", BulletSchema);