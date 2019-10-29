export default {
  trailAccess: (parent, args, { trails }) =>
    parent.trails.map(id => trails.find(t => id === t.id)),
  trailNames: (parent, args, { trails }) =>
  	parent.trails.map(id => {
  		const trail = trails.find(t => id === t.id)
  		if (trail) {
  			return trail.name
  		}
  		return null
  	})
};
