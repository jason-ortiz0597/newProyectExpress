import mongoose from "mongoose";

const providerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim:true

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

    image: {

        public_id: String,
        secure_url: String
    },

},
    {
        timestamps: true,
        versionKey: false
    }
);


export default mongoose.model("Provider", providerSchema);