import mongoose,{Schema} from "mongoose";

const videoSchema = new Schema({
    videoFile:{
        type :String, // cloudnary url
        required :true,
    },
    thumbnail:{
        type:String, // cloudnary url
        required: true
    },
    title:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    duration:{
        type: Number, // cloudnary will provide durations
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished :{
        type:Boolean,
        default:true
    },
    owner:{
        type:{
            type: Schema.Types.ObjectId,
            ref:"User"
        }
    }
},{timestamps:true})

export const Video = mongoose.model("Video",videoSchema);