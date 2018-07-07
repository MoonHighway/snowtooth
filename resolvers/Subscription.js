module.exports = {
    liftStatusChange: {
        subscribe: (root, data, { pubsub }) => pubsub.asyncIterator('lift-status-change')
    },
    trailStatusChange: {
        subscribe: (root, data, { pubsub }) => pubsub.asyncIterator('trail-status-change')
    }
}