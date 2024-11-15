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
    color: "#F0FF2D",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Watts", // Name of prestige currency
    baseResource: "Prestige Points", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.25, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
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
            cost: new Decimal(1),
        },
        12: {
            title: "Isn't this, just Layers again?",
            description: "2x Prestige Points and 1.25x Watts",
            cost: new Decimal(3),
        },
    },
})
