module.exports = {
    accessedByLifts: (root, args, {lifts}) => root.lift
        .map(id => lifts.find(l => id === l.id))
        .filter(x => x)
}
