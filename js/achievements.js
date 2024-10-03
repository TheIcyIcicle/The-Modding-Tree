addLayer("a", {
    name: "Achievements",
    symbol: "A",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0)
    }},
    color: "#F1E41E",
    resource: "Achievements",
    row: 'side',
    layerShown(){return true},
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
        14: {
            name: "what",
            done() {
                return player.l.unlocked
            },
            tooltip: "what",
            doneTooltip: "Unlock the Layers Layer..?",
        },
        15: {
            name: "Wait Wait, Isn't this a bit TOO strong?",
            done() {
                return (hasUpgrade('l', 12))
            },
            tooltip: "Purchase the second Layer Upgrade.",
        },
        21: {
            name: "Layers upon Layers.",
            done() {
                return (hasUpgrade('l', 23))
            },
            tooltip: "Unlock another layer INSIDE the layers layer. This is getting more confusing to say every second...",
        },
    }
})