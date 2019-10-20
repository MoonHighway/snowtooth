const fs = require('fs')
const path = require('path')

const filePath = fileName => path.join(__dirname, '..', 'data', fileName)

const save = (data, fileName) => {
    fs.writeFileSync(filePath(fileName), JSON.stringify(data, null, 2))
}

module.exports = {
    setLiftStatus: (root, { id, status }, { lifts, pubsub }) => {
        var updatedLift = lifts.find(lift => id === lift.id)
        updatedLift.status = status
        pubsub.publish('lift-status-change', { liftStatusChange: updatedLift })
        return updatedLift
    },
    setTrailStatus: (root, { id, status }, { trails, pubsub }) => {
        var updatedTrail = trails.find(trail => id === trail.id)
        updatedTrail.status = status
        pubsub.publish('trail-status-change', { trailStatusChange: updatedTrail })
        return updatedTrail
    }
}
