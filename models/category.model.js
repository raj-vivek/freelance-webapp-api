import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  coverImg: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Category", CategorySchema);
