import ReviewerFactory from './Reviewer';
import HatefulReviewFactory from './HatefulReview';
import UnbiasedReviewFactory from './UnbiasedReview';

export default deps => {
  const Reviewer = ReviewerFactory(deps),

    HatefulReview = HatefulReviewFactory(deps, {
      Reviewer
    }),

    UnbiasedReview = UnbiasedReviewFactory(deps, {
      Reviewer
    });

  return {
    Reviewer,
    HatefulReview,
    UnbiasedReview
  }
}
