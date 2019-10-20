export default {
  trailAccess: (parent, args, { trails }) =>
    parent.trails.map(id => trails.find(t => id === t.id))
};
