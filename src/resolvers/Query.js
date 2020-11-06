export default {
  allLifts: (parent, { status }, { lifts }) =>
    !status
      ? lifts
      : lifts.filter(
          (lift) => lift.status === status
        ),
  allTrails: (parent, { status }, { trails }) =>
    !status
      ? trails
      : trails.filter(
          (trail) => trail.status === status
        ),
  Lift: (parent, { id }, { lifts }) =>
    lifts.find((lift) => id === lift.id),
  Trail: (parent, { id }, { trails }) =>
    trails.find((trail) => id === trail.id),
  liftCount: (parent, { status }, { lifts }) =>
    !status
      ? lifts.length
      : lifts.filter(
          (lift) => lift.status === status
        ).length,
  trailCount: (parent, { status }, { trails }) =>
    !status
      ? trails.length
      : trails.filter(
          (trail) => trail.status === status
        ).length,
  search: (
    parent,
    { term, status },
    { lifts, trails }
  ) => {
    let liftsNTrails = [...lifts, ...trails];

    const byTerm = (t) => (item) =>
      t.toLowerCase() ===
      item.id.substr(0, t.length).toLowerCase();

    const byStatus = (status) => (item) =>
      status.toLowerCase() ===
      item.status.toLowerCase();

    if (term && status) {
      liftsNTrails = liftsNTrails.filter(
        byTerm(term)
      );
      liftsNTrails = liftsNTrails.filter(
        byStatus(status)
      );
    } else if (term) {
      liftsNTrails = liftsNTrails.filter(
        byTerm(term)
      );
    } else if (status) {
      liftsNTrails = liftsNTrails.filter(
        byStatus(status)
      );
    } else {
      liftsNTrails = [];
    }

    return liftsNTrails;
  }
};
