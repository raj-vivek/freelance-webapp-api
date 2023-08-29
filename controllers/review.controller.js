import gigModel from "../models/gig.model.js";
import reviewModel from "../models/review.model.js";
import createError from "../utils/createError.js";

export const createReview = async (req, res, next) => {
  if (req.isSeller)
    return next(createError(403, "Sellers cant create a review!"));
  const review = new reviewModel({
    gigId: req.body.gigId,
    userId: req.userId,
    star: req.body.star,
    desc: req.body.desc,
  });

  try {
    if (
      await reviewModel.findOne({ gigId: req.body.gigId, userId: req.userId })
    )
      return next(createError(403, "You cant create 2 reviews for same gig!"));

    const savedReview = await review.save();
    await gigModel.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });
    res.status(201).json(savedReview);
  } catch (error) {
    next(error);
  }
};

export const getReviews = async (req, res, next) => {
  try {
    const reviews = await reviewModel.find({ gigId: req.params.gigId });
    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
};

export const deleteReview = (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};