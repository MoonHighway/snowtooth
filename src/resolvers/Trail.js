export default {
  accessedByLifts: (parent, args, { lifts }) =>
    parent.lift.map(id => lifts.find(l => id === l.id))
};
