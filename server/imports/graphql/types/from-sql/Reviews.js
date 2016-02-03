import HatefulReview from './HatefulReview';
import UnbiasedReview from './UnbiasedReview';

const {
  GraphQLObjectType,
  GraphQLList,
} = GraphQL.types;

export default new GraphQLObjectType({
  name: 'Reviews',
  description: 'A list of reviews both good and bad',
  fields: () => ({
    unbiased: {
      type: new GraphQLList(UnbiasedReview),
      description: 'A list of reviews that seem neutral',
      resolve: reviews => reviews.unbiased
    },

    hateful: {
      type: new GraphQLList(HatefulReview),
      description: 'A list of reviews that seem neutral',
      resolve: reviews => reviews.hateful
    }
  })
});
