const mongoose = require("mongoose");

const ErrorLogSchema = mongoose.Schema({
    message: { type: String, required: true },
    status: { type: String, required: true },
    user_id: { type: String },
    request_body: { type: Object },
    request_url: { type: String }
});
ErrorLogSchema.set("timestamps", true);
module.exports = mongoose.model("ErrorLog", ErrorLogSchema);
