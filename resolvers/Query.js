module.exports = {
    allLifts: (root, { status }, { lifts }) => {
        if (!status) {
            return lifts
        } else {
            var filteredLifts = lifts.filter(lift => lift.status === status)
            return filteredLifts
        }
    },
    allTrails: (root, { status }, { trails }) => {
        if (!status) {
            return trails
        } else {
            var filteredTrails = trails.filter(trail => trail.status === status)
            return filteredTrails
        }
    },
    Lift: (root, { id }, { lifts }) => {
        var selectedLift = lifts.filter(lift => id === lift.id)
        return selectedLift[0]
    },
    Trail: (root, { id }, { trails }) => {
        var selectedTrail = trails.filter(trail => id === trail.id)
        return selectedTrail[0]
    },
    liftCount: (root, { status }, { lifts }) => {
        var i = 0
        lifts.map(lift => {
            lift.status === status ?
                i++ :
                null
        })
        return i
    },
    trailCount: (root, { status }, { trails }) => {
        var i = 0
        trails.map(trail => {
            trail.status === status ?
                i++ :
                null
        })
        return i
    }
}