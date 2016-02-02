import HatefulReviewsFactory from './models/hateful_reviews';
import UnbiasedReviewsFactory from './models/unbiased_reviews';
import ReviewersFactory from './models/reviewers';

export default ({

  // Deps
  sequelize,

  // Db Connection
  connection

}) => {

  const hatefulReviews = HatefulReviewsFactory({
      sequelize,
      connection
    }),
    unbiasedReviews = UnbiasedReviewsFactory({
      sequelize,
      connection
    }),
    reviewers = ReviewersFactory({
      sequelize,
      connection
    });

  reviewers.hasMany(hatefulReviews);
  hatefulReviews.belongsTo(reviewers);

  reviewers.hasMany(unbiasedReviews);
  unbiasedReviews.belongsTo(reviewers);

  return {
    reviewers,
    hatefulReviews,
    unbiasedReviews
  };
}
