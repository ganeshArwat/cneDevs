import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    fname: string;
    lname: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date; 
    isVerified: boolean;
    profile_image: string;
    title: string;
    short_description: string;
    long_description: string;
    phone: string;
    address: string;
    linkedin: string;
    github: string;
    resume: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<IUser>({
    fname: { type: String, required: true },
    lname: {type: String},
    email: { type: String, required: true, unique: true, match: [/.+\@.+\..+/, "Please enter a valid e-mail address."] },
    password: { type: String, required: true },
    verifyCode: { type: String},
    verifyCodeExpiry: { type: Date},
    isVerified: { type: Boolean, default: false },
    profile_image: { type: String, required: true },
    title: { type: String, required: true },
    short_description: { type: String, required: true },
    long_description: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    linkedin: { type: String, required: true },
    github: { type: String, required: true },
    resume: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }, 
});


const UserModel = (mongoose.models.User as mongoose.Model<IUser>) || (mongoose.model<IUser>("User", userSchema));
export default UserModel;


