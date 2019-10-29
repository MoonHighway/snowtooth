export default {
  setLiftStatus: (parent, { id, status }, { lifts, pubsub }) => {
    let updatedLift = lifts.find(lift => id === lift.id);
    updatedLift.status = status;
    pubsub.publish("lift-status-change", { liftStatusChange: updatedLift });
    return updatedLift;
  },
  setTrailStatus: (parent, { id, status }, { trails, pubsub }) => {
    let updatedTrail = trails.find(trail => id === trail.id);
    updatedTrail.status = status;
    pubsub.publish("trail-status-change", { trailStatusChange: updatedTrail });
    return updatedTrail;
  },
  setTrailLift: (parent, { id, lift }, { trails, pubsub }) => {
    let updatedTrail = trails.find(trail => id === trail.id);
    updatedTrail.lift = lift;
    pubsub.publish("trail-lift-change", { trailStatusChange: updatedTrail });
    return updatedTrail;
  }
};
