export default {
  liftStatusChange: {
    subscribe: (parent, data, { pubsub }) =>
      pubsub.asyncIterator("lift-status-change")
  },
  trailStatusChange: {
    subscribe: (parent, data, { pubsub }) =>
      pubsub.asyncIterator("trail-status-change")
  }
};
