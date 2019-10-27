export default {
  sweet: () => "sweet",
  gnar: () => "gnarly",
  allLifts: (parent, { status }, { lifts }) =>
    !status ? lifts : lifts.filter(lift => lift.status === status),
  allTrails: (parent, { status }, { trails }) =>
    !status ? trails : trails.filter(trail => trail.status === status),
  Lift: (parent, { id }, { lifts }) => lifts.find(lift => id === lift.id),
  Trail: (parent, { id }, { trails }) => trails.find(trail => id === trail.id),
  liftCount: (parent, { status }, { lifts }) =>
    !status
      ? lifts.length
      : lifts.filter(lift => lift.status === status).length,
  trailCount: (parent, { status }, { trails }) =>
    !status
      ? trails.length
      : trails.filter(trail => trail.status === status).length
};
