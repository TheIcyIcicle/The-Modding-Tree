addLayer("a", {
    name: "achievements",
    symbol: "A",
    position: 0,
    startData() {
        return {
            unlocked: true,
        }
    },
    color: "#F1E41E",
    row: "side",
    layerShown() {
        return true
    },
    achievements: {
        rows: 1,
        cols: 5,
        11: {
            name: "Prestige!",
            done() {
                return (hasUpgrade('p', 11))
            },
            tooltip: "Get the first Prestige Upgrade.",
        },
        12: {
            name: "Second Row.",
            done() {
                return (hasUpgrade('p', 21))
            },
            tooltip: "Get the First, Second row Prestige Upgrade.",
        },
        13: {
            name: "100 Prestige Points!",
            done() {
                return player.p.points.gte(100)
            },
            tooltip: "Get 100 Prestige Points. Reward: 2.5x Points",
        },
    }
})