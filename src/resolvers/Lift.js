export default {
  trailAccess: (parent, args, { trails }) =>
    parent.trails.map(id => trails.find(t => id === t.id)),
  elevationGain: (parent, { metric }) => {
    const { elevationGain } = parent;
    if (typeof elevationGain === "number") {
      switch (metric) {
        case "FEET":
          return elevationGain; // NOTE: Assumes existing data is in feet.
        case "YARDS":
          return Math.round(elevationGain / 3.0);
        default:
          throw new Error("Unexpected metric type.");
      }
    }
    return elevationGain;
  }
};
