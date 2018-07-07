module.exports = {
    trailAccess: (root, args, { trails }) => root.trails
        .map(id => trails.find(t => id === t.id))
        .filter(x => x)
}