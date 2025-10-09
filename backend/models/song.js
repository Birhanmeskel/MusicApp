// song model
import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, "Song title is required"],
      trim: true,
    },
    artist: {
      type: String,
      required: [true, "Artist name is required"],
      trim: true,
    },
    album: {
      type: String,
      trim: true,
      default: "Single",
    },
    genre: {
      type: String,
      trim: true,
      default: "Unknown",
    },
  },
  { timestamps: true });

  export default mongoose.model("Song", songSchema);