import Category from "../models/category.model.js";

export const getCategory = async (req, res, next) => {
  try {
    const cats = await Category.find();
    res.status(200).json(cats);
  } catch (error) {
    next(error);
  }
};
