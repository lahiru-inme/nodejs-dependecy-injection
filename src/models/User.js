const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema({
   name: {
       type: Schema.Types.String
   },
    mobile: {
       type: Schema.Types.Number
    },
    email: {
       type: Schema.Types.String
    },
    isActive: {
       type: Schema.Types.Boolean,
       default: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
