export default {
  __resolveType: (parent) =>
    parent.elevationGain ? "Lift" : "Trail"
};
