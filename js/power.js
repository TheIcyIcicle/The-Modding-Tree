addLayer("w", {
    name: "Power", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "W", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    hotkeys: [
        {
            key: "w", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
            description: "W: Reset Prestige Points for some Watts", // The description of the hotkey that is displayed in the game's How To Play tab
            onPress() { if (player.w.unlocked) doReset("w") },
            unlocked() {return player.w.unlocked || hasUpgrade('lf', 13)} // Determines if you can use the hotkey, optional
        }
    ],
    doReset(resettingLayer) {
        let keep = [];
        if (hasUpgrade('lf', 14)) keep.push('upgrades')
        if (layers[resettingLayer].row > this.row && resettingLayer == "l") { 
            layerDataReset(this.layer, keep);
                
        }
        //anything u place here is for keeping specific things, like if(hasUpgrade('x',99))player.y.upgrades.push(11) if that makes sense
    },
    color: "#F0FF2D",
    branches: "s",
    requires: new Decimal('1000'), // Can be a function that takes requirement increases into account
    resource: "Watts", // Name of prestige currency
    baseResource: "Prestige Points", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.25, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        // Prestige Upgrade
        // Blank
        // Power Upgrades
        if (hasUpgrade('w', 12)) mult = mult.times('1.25')
        if (hasUpgrade('w', 21)) mult = mult.times(upgradeEffect('w', 21))
        if (hasUpgrade('w', 23)) mult = mult.times(upgradeEffect('w', 23))
        if (hasUpgrade('w', 25)) mult = mult.times(upgradeEffect('w', 25))
        // System Upgrades
        if (hasUpgrade('s', 11)) mult = mult.times('10')
        if (hasUpgrade('s', 22)) mult = mult.times('5')
        // Layer Upgrades
        // Blank
        // Layer Fragment Upgrades
        // Blank
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let exp = new Decimal(1)
        return exp
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return player.w.unlocked || hasUpgrade('lf', 13)},
    upgrades: {
        11: {
            title: "Another Layer!",
            description: "FINALLY! 1.25x Points and 1.5x Prestige Points",
            cost: new Decimal('1'),
        },
        12: {
            title: "Isn't this, just Layers again?",
            description: "2x Prestige Points and 1.25x Watts",
            cost: new Decimal('3'),
        },
        13: {
            title: "Maybe I Was Wrong.",
            description: "Keep Prestige Upgrades on <p><s>Layer</s></p> LAYER FRAGMENTS?????/Watt Resets",
            cost: new Decimal('10'),
        },
        14: {
            title: "Ooh more Layer Points?",
            description: "Boost Layer Points based on Layer Fragments",
            cost: new Decimal('50'),
            effect() {
                let effect = player.lf.points.add(1).pow(0.5).min(50)
                return (effect)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x"},
        },
        15: {
            title: "Boost Those Fragments!",
            description: "Boost Layer Fragments based on Layer Points",
            cost: new Decimal('250'),
            effect() {
                let effect = player.l.points.add(1).pow(0.5).min(10)
                return (effect)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x"},
        },
        21: {
            title: "Powered",
            description: "Watts boost Watts",
            unlocked(){if (hasUpgrade('lf', 15)) return true; else return false},
            cost: new Decimal('1250'),
            effect() {
                let effect = player.w.points.add(1).pow(0.45).min(50)
                return (effect)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x"},
        },
        22: {
            title: "Wattage",
            description: "Prestige points are boosted based on Watts",
            unlocked(){if (hasUpgrade('lf', 15)) return true; else return false},
            cost: new Decimal('10000'),
            effect() {
                let effect = player.w.points.add(1).pow(0.15).min(50)
                return (effect)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x"},
        },
        23: {
            title: "Watts in Watts in Watts.",
            description: "Watts are boosted by Layer Points",
            unlocked(){if (hasUpgrade('lf', 15)) return true; else return false},
            cost: new Decimal('20000'),
            effect() {
                let effect = player.l.points.add(1).pow(0.15).min(50)
                return (effect)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x"},
        },
        24: {
            title: "MegaWattage",
            description: "Prestige points are further boosted based on Watts",
            unlocked(){if (hasUpgrade('lf', 15)) return true; else return false},
            cost: new Decimal('1e6'),
            effect() {
                let effect = player.w.points.add(1).pow(0.2).min(500)
                return (effect)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x"},
        },
        25: {
            title: "Megawatts",
            description: "Watts boost everything, Unlock more upgrades in Layer Fragments.",
            unlocked(){if (hasUpgrade('lf', 15)) return true; else return false},
            cost: new Decimal('2.5e6'),
            effect() {
                let effect = player.w.points.add(1).pow(0.025).min(5)
                return (effect)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x"},
        },
    },
})
