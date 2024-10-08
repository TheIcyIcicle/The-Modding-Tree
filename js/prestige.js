addLayer("p", {
    name: "Prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    hotkeys: [
        {
            key: "p", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
            description: "P: Reset your Points for Prestige Points", // The description of the hotkey that is displayed in the game's How To Play tab
            onPress() { if (player.p.unlocked) doReset("p") },
            unlocked() {return true} // Determines if you can use the hotkey, optional
        }
    ],
    color: "#38BDFE",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Prestige Points", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        // layer
        if (hasUpgrade('l', 11)) mult = mult.times(2)
        if (hasUpgrade('l', 12)) mult = mult.times(2.5)
        // prestige
        if (hasUpgrade('p', 13)) mult = mult.times(upgradeEffect('p', 13))
        if (hasUpgrade('p', 21)) mult = mult.times(upgradeEffect('p', 21))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        return exp
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    upgrades: {
        11: {
            title: "Newly Prestiged",
            description: "The First Upgrade, Point gain increased.",
            cost: new Decimal(1),
        },
        12: {
            title: "A Nice Boost.",
            description: "The Second Upgrade, Point gain increases as you gain more Prestige Points.",
            cost: new Decimal(2),
            effect() {
                return player[this.layer].points.add(1).pow(0.5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        13: {
            title: "Woah! More Prestige Points?",
            description: "The Third Upgrade, You gain more Prestige Points based off of Points.",
            cost: new Decimal(4),
            effect() {
                return player.points.add(1).pow(0.1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        21: {
            title: "Upgrader",
            description: "Doubles Prestige Point Gain, Useful for getting the other two Upgrades... Oh, thats why.",
            cost: new Decimal(7),
            effect() {
               if (!hasUpgrade('p', 21)) return(1); else if (!hasUpgrade('p', 22)) return (2); else return (5)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
        22: {
            title: "Upgrader+",
            description: "Upgrades the Upgrader Upgrade.",
            cost: new Decimal(50),
        },
        23: {
            title: "More Points!",
            description: "Unlocks a new layer and Increases point gain by Prestige Points, But slightly Weaker.",
            cost: new Decimal(250),
            effect() {
                return player[this.layer].points.add(1).pow(0.4)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
        },
    },
})
