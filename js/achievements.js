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
        rows: 4,
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
            tooltip: "Purchase the second ??? Upgrade.",
            doneTooltip: "Purchase the second Layer Upgrade",
            onComplete() {
                addPoints('a', 1)
            },
        },
        21: {
            name: "Another Powerful Upgrade!",
            done() {
                return (hasUpgrade('l', 15))
            },
            tooltip: "Purchase the Fifth ??? Upgrade.",
            doneTooltip: "Purchase the Fifth Layer Upgrade.",
            onComplete() {
                addPoints('a', 1)
            },
        },
        22: {
            name: "Layers upon Layers.",
            done() {
                return (hasUpgrade('l', 21))
            },
            tooltip: "Unlock another Layer from ???'s. This is getting more confusing to say every second...",
            doneTooltip: "Unlock another Layer from Layers. This is getting more confusing to say every second...",
            onComplete() {
                addPoints('a', 1)
            },
        },
        23: {
            name: "Me when pow(1.1)",
            done() {
                return (hasUpgrade('lf', 12))
            },
            tooltip: "Get the second upgrade in the ??? Layer. Reward: 1.5x ??? Points",
            doneTooltip: "Get the second upgrade in the Layer Fragments Layer. Reward: 1.5x Layer Points",
            onComplete() {
                addPoints('a', 1)
            },
        },
        24: {
            name: "OH NO THE INFLATION!",
            done() {
                return (hasUpgrade('p', 14))
            },
            tooltip: "Purchase the Fourth Prestige upgrade in the First Row. Reward: 2.5x ??? Points",
            doneTooltip: "Purchase the Fourth Prestige upgrade in the First Row. Reward: 2.5x Layer Points",
            onComplete() {
                addPoints('a', 1)
            },
        },
        25: {
            name: "Slowing Down, Finally",
            done() {
                return (hasUpgrade('lf', 13))
            },
            tooltip: "Third ??? Upgrade, Inflation is slowing down.",
            doneTooltip: "Third Layer Fragments Upgrade, Inflation is slowing down.",
            onComplete() {
                addPoints('a', 1)
            },
        },
        31: {
            name: "The heck is this?",
            done() {
                return player.w.points.gte(3)
            },
            tooltip: "We aren't powering ANYTHING are we? Moreover, WHERE ARE WE GETTING THIS POWER???",
            onComplete() {
                addPoints('a', 1)
            },
        },
        32: {
            name: "What have you done.",
            done() {
                return (hasUpgrade('w', 15))
            },
            tooltip: "We might be doomed if we get a uncapped boost based on ???.",
            doneTooltip: "We might be doomed if we get a uncapped boost based on layer fragments.",
            onComplete() {
                addPoints('a', 1)
            },
        },
        33: {
            name: "Lossless Resets",
            done() {
                return (hasUpgrade('lf', 14))
            },
            tooltip: "Never lose ??? and Prestige Upgrades on any reset not related to ???",
            doneTooltip: "Yeah, so i dont know how to fix it so you get to keep Watt and Prestige Upgrades for every reset. have fun! i might need to rebalance *SOME* things because of this.",
            onComplete() {
                addPoints('a', 1)
            },
        },
        34: {
            name: "MORE",
            done() {
                return (hasUpgrade('lf', 15))
            },
            tooltip: "ARE WE SURE THIS IS SAFE? this isn't gonna, inflate ??? points or anything... RIGHT?",
            doneTooltip: "ARE WE SURE THIS IS SAFE? this isn't gonna, inflate Layer points or anything... RIGHT?",
            onComplete() {
                addPoints('a', 1)
            },
        },
        35: {
            name: "oh dear.",
            done() {
                return (hasUpgrade('w', 25))
            },
            tooltip: "the ???'s are mega now :fearful:",
            doneTooltip: "the watts are mega now :fearful:",
            onComplete() {
                addPoints('a', 1)
            },
        },
        41: {
            name: "Further Fragmentation",
            done() {
                return (hasUpgrade('lf', 21))
            },
            tooltip: "This... Doesn't even make Sense? Reward: 2x ???'s",
            doneTooltip: "This... Doesn't even make Sense? Reward: 2x Watts",
            onComplete() {
                addPoints('a', 1)
            },
        },
        42: {
            name: "Power On",
            done() {
                return (hasUpgrade('lf', 23))
            },
            tooltip: "Well... I got my answer, this is what we're Powering.",
            onComplete() {
                addPoints('a', 1)
            },
        },
        43: {
            name: "Buttons :)",
            done() {
                return (hasUpgrade('s', 15))
            },
            tooltip: "ok but seriously, what do these buttons do? Reward: 5x ???'s",
            doneTooltip: "ok but seriously, what do these buttons do? Reward: 5x Watts",
            onComplete() {
                addPoints('a', 1)
            },
        },
        44: {
            name: "wha- MORE?!",
            done() {
                return (hasUpgrade('s', 25))
            },
            tooltip: "are we serious?!",
            doneTooltip: "More... Layer Fragment Upgrades... This layer is SO annoying...",
            onComplete() {
                addPoints('a', 1)
            },
        },
        45: {
            name: "THE LAYERS ARE EXPANDING",
            done() {
                return (hasUpgrade('lf', 35))
            },
            tooltip: "NOOOO",
            doneTooltip: "WHY DOES THIS KEEP HAPPENING WE CANT KEEP GETTING AWAY WITH THIS",
            onComplete() {
                addPoints('a', 1)
            },
        },
    }
})