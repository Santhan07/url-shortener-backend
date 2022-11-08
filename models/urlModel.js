import mongoose from "mongoose";

const URLSchema = new mongoose.Schema({
      urlCode: String,
      longUrl: String,
      shortUrl: String,
      date: {
        type: String,
        default: Date.now
      }
})

var UrlModel = mongoose.model('urls', URLSchema)
export default UrlModel;