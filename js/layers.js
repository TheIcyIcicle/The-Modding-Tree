addLayer("l", {
    name: "Layers", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "L", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    hotkeys: [
        {
            key: "l", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
            description: "L: Reset Prestige Points for Layer Points.", // The description of the hotkey that is displayed in the game's How To Play tab
            onPress() { if (player.l.unlocked) doReset("l") },
            unlocked() {if (hasUpgrade('p', 23))return true; else return false} // Determines if you can use the hotkey, optional
        }
    ],
    color: "#575757",
    requires: new Decimal(500), // Can be a function that takes requirement increases into account
    resource: "Layer Points", // Name of prestige currency
    baseResource: "Prestige Points", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.7, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        exp = new Decimal(1)
        return exp
    },
    row: 50, // Row the layer is in on the tree (0 is the first row)
    displayRow: 'side',
    layerShown(){return player.l.unlocked || hasUpgrade('p', 23)},
    upgrades: {
        11: {
            title: "Layers...",
            description: "What do they mean? 2x Prestige Points",
            cost: new Decimal(1),
        },
    },
})
