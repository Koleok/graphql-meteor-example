import ReviewerFactory from './Reviewer';
import HatefulReviewFactory from './HatefulReview';
import UnbiasedReviewFactory from './UnbiasedReview';

export default (collections, deps) => {
  const Reviewer = ReviewerFactory(deps),

    HatefulReview = HatefulReviewFactory(deps, collections, {
      Reviewer
    }),

    UnbiasedReview = UnbiasedReviewFactory(deps, collections, {
      Reviewer
    });

  return {
    Reviewer,
    HatefulReview,
    UnbiasedReview
  }
}
