addLayer("lf", {
    name: "Layer Fragments", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "L", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
        fragments: new Decimal(0),
		points: new Decimal(0),
    }},
    update(diff) {
        let fragmentGain = tmp.lf.fragmentGain
        fragmentGain = fragmentGain.mul(diff)
        player.lf.fragments = player.lf.fragments.add(fragmentGain)
    },
    fragmentGain(){
        if (player.lf.fragments.lte(0) && !hasUpgrade('lf', 11)) return Decimal.dZero;
        let gain = player.lf.points.plus(1).pow(0.5);
        if (hasUpgrade('lf', 21))gain = gain.times('2');
        if (hasUpgrade('s', 25))gain = gain.times('10')
        return gain;
    },
    hotkeys: [
        {
            key: "f", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
            description: "F: Reset Layer Points for Layer Fragments.", // The description of the hotkey that is displayed in the game's How To Play tab
            onPress() { if (player.lf.unlocked) doReset("lf") },
            unlocked() {return player.lf.unlocked || hasUpgrade('l', 21)} // Determines if you can use the hotkey, optional
        }
    ],
    color: "#757575",
    requires: new Decimal('100'), // Can be a function that takes requirement increases into account
    resource: "Layer Fragments", // Name of prestige currency
    baseResource: "Layer Points", // Name of resource prestige is based on
    baseAmount() {return player.l.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.35, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        // Prestige Upgrades
        // Blank
        // Power Upgrades
        if (hasUpgrade('w', 15)) mult = mult.times(upgradeEffect('w', 15))
        if (hasUpgrade('w', 25)) mult = mult.times(upgradeEffect('w', 25)/2)
        // System Upgrades
        if (hasUpgrade('s', 25)) mult = mult.times('5')
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
    row: 11, // Row the layer is in on the tree (0 is the first row)
    displayRow: 'side',
    layerShown(){return player.lf.unlocked || hasUpgrade('l', 21)},
    buyables: {
        11: {
            cost(x){return new Decimal(5).pow(x)},
            title: 'Fragment Power',
            display(){if (!hasUpgrade('lf', 15)) return 'Increase Layer Point Gain by 1.1x'; else if (hasUpgrade('lf', 15)) return 'Increase Layer Point Gain by 1.25x'},
            unlocked(){if (hasUpgrade('lf', 11)) return true; else return false},
            canAfford(){return player.lf.fragments.gte(this.cost())},
            buy(){
                player.lf.fragments = player.lf.fragments.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
    },
    upgrades: {
        11: {
            title: "Fragmented Layers",
            description: "2x Layer Points Begin Fragment Generation",
            cost: new Decimal('1'),
        },
        12: {
            title: "Fragmented Points",
            description: "^1.1 Points, 2x Prestige Points More layer Upgrades, Inflate.",
            cost: new Decimal('2'),
        },
        13: {
            title: "Proper Layers",
            description: "Finally unlock a layer that ISN'T a Side Layer!",
            cost: new Decimal('25'),
        },
        14: {
            title: "Upgrades Kept",
            description: "Keep Watt Upgrades on Layer Resets",
            cost: new Decimal('1250'),
        },
        15: {
            title: "Careful with this.",
            description: "Boost Fragment Power to 1.25x per. Add more watt upgrades as well.",
            cost: new Decimal('6250'),
        },
        21: {
            title: "Fragmented Fragmented Layers",
            description: "uh... 5x Layer Points and 2x Fragment generation.",
            unlocked(){if (hasUpgrade('w', 25)) return true; else return false},
            cost: new Decimal('10000'),
        },
        22: {
            title: "Fragmented Fragmented Points",
            description: "is... this gonna continue? ^1.1 Points again, 2.5x Prestige Points.",
            unlocked(){if (hasUpgrade('w', 25)) return true; else return false},
            cost: new Decimal('20000'),
        },
        23: {
            title: "Layers upon Layers.",
            description: "Unlock another layer.",
            unlocked(){if (hasUpgrade('w', 25)) return true; else return false},
            cost: new Decimal('250000'),
        },
        24: {
            title: "Generating Currencies.",
            description: "Boost Prestige Points and Watts.",
            unlocked(){if (hasUpgrade('s', 25)) return true; else return false},
            cost: new Decimal('275000'),
        },
        25: {
            title: "Self-Sustaining Loop.",
            description: "Boost Systems and Watts based on Layer Fragments.",
            unlocked(){if (hasUpgrade('s', 25)) return true; else return false},
            cost: new Decimal('350000'),
            effect() {
                let effect = player[this.layer].points.add(1).pow(0.75).log(10).max(1).min(50)
                return (effect)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        31: {
            title: "Placeholder",
            description: "Placeholder",
            unlocked(){if (hasUpgrade('s', 25)) return true; else return false},
            cost: new Decimal('1e100'),
        },
        32: {
            title: "Placerholder",
            description: "Placeholder",
            unlocked(){if (hasUpgrade('s', 25)) return true; else return false},
            cost: new Decimal('1e100'),
        },
        33: {
            title: "Placerholder",
            description: "Placeholder",
            unlocked(){if (hasUpgrade('s', 25)) return true; else return false},
            cost: new Decimal('1e100'),
        },
        34: {
            title: "Placerholder",
            description: "Placeholder",
            unlocked(){if (hasUpgrade('s', 25)) return true; else return false},
            cost: new Decimal('1e100'),
        },
        35: {
            title: "Prestige Expansion",
            description: "Oh for goodness sake, we CANNOT keep doing this. Expand Prestige Upgrades by Two Rows.",
            unlocked(){if (hasUpgrade('s', 25)) return true; else return false},
            cost: new Decimal('5e7'),
        },
    },
    tabFormat: {
        "Upgrades": {
            content: [
                "main-display",
                "prestige-button",
                "blank",
                "upgrades"],
            unlocked(){if (hasUpgrade('lf', 11)) return true; else return false}
        },
        "FRAGMENTED": {
            content: [
                ["display-text",
                    function(){return "You have "+format(player.lf.fragments)+" Fragments"}],
                "blank",
                "buyables"
            ],
            unlocked(){if (hasUpgrade('lf', 11)) return true; else return false}
        }
}})
