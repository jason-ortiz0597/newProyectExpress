import mongoose, { version } from "mongoose";

const providerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },

    // typeProvider: [{
    //     name: {
    //         type: String,
    //         required: true
    //     },
    //     description: {
    //         type: String
    //     }
    // }],

    city: {
        type: String
    },

    address: {
        type: String
    },

},
    {
        timestamps: true,
        versionKey: false
    }
);


export default mongoose.model("Provider", providerSchema);