import mongoose from "mongoose";

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  firstName: { type: String },
  lastName:   { type: String },
  password: { type: String, required: true },
  userName:   { type: String,  required: true, unique: true },
}, 
{ 
  collection: "users",
  timestamps: true
})

export default mongoose.model("Users", UserSchema);