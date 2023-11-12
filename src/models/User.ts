import { model, Schema, Document } from 'mongoose';

export interface UserInterface extends Document {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  lastname: {
    type: String,
    required: [true, 'Lastname is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    trim: true,
  },
});

export default model<UserInterface>('User', userSchema);
