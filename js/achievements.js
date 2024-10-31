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
        rows: 2,
        cols: 5,
        11: {
            name: "Prestige!",
            done() {
                return (hasUpgrade('p', 11))
            },
            tooltip: "Get the first Prestige Upgrade.",
            onComplete() {
                addPoints('a', 1)
            },
        },
        12: {
            name: "Second Row.",
            done() {
                return (hasUpgrade('p', 21))
            },
            tooltip: "Get the First, Second row Prestige Upgrade.",
            onComplete() {
                addPoints('a', 1)
            },
        },
        13: {
            name: "100 Prestige Points!",
            done() {
                return player.p.points.gte(100)
            },
            tooltip: "Get 100 Prestige Points. Reward: 2.5x Points",
            onComplete() {
                addPoints('a', 1)
            },
        },
        14: {
            name: "what",
            done() {
                return player.l.unlocked
            },
            tooltip: "what",
            doneTooltip: "Unlock the Layers Layer..?",
            onComplete() {
                addPoints('a', 1)
            },
        },
        15: {
            name: "Wait Wait, Isn't this a bit TOO strong?",
            done() {
                return (hasUpgrade('l', 12))
            },
            tooltip: "Purchase the second Layer Upgrade.",
            onComplete() {
                addPoints('a', 1)
            },
        },
        21: {
            name: "Another Powerful Upgrade!",
            done() {
                return (hasUpgrade('l', 15))
            },
            tooltip: "Purchase the Fifth Layer Upgrade.",
            onComplete() {
                addPoints('a', 1)
            },
        },
        22: {
            name: "Layers upon Layers.",
            done() {
                return (hasUpgrade('l', 21))
            },
            tooltip: "Unlock another Layer from Layers. This is getting more confusing to say every second...",
            onComplete() {
                addPoints('a', 1)
            },
        },
        23: {
            name: "Me when pow(1.1)",
            done() {
                return (hasUpgrade('lf', 12))
            },
            tooltip: "Get the second upgrade in the Layer Fragments Layer. Reward: 1.5x Layer Points",
            onComplete() {
                addPoints('a', 1)
            },
        },
        24: {
            name: "OH NO THE INFLATION!",
            done() {
                return (hasUpgrade('p', 14))
            },
            tooltip: "Purchase the Fourth Prestige upgrade in the First Row. Reward: 2.5x Layer Points",
            onComplete() {
                addPoints('a', 1)
            },
        },
        25: {
            name: "Slowing Down, Finally",
            done() {
                return (hasUpgrade('lf', 13))
            },
            tooltip: "Third Layer Fragments Upgrade, Inflation is slowing down. (ENDGAME)",
            onComplete() {
                addPoints('a', 1)
            },
        },
    }
})