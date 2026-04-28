addLayer("s", {
    name: "Systems", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        clickables: {11: false, 12: false, 21: false, 22: false},
        SliderOne: 0,
        SliderTwo: 0,
    }},
    hotkeys: [
        {
            key: "s", // What the hotkey button is. Use uppercase if it's combined with shift, or "ctrl+x" for holding down ctrl.
            description: "S: Consume Watts and Power some Systems", // The description of the hotkey that is displayed in the game's How To Play tab
            onPress() { if (player.s.unlocked) doReset("s") },
            unlocked() {return player.s.unlocked || hasUpgrade('lf', 23)} // Determines if you can use the hotkey, optional
        }
    ],
    doReset(resettingLayer) {
        let keep = [];
        if (layers[resettingLayer].row > this.row) { 
            layerDataReset(this.layer, keep);
                
        }
        //anything u place here is for keeping specific things, like if(hasUpgrade('x',99))player.y.upgrades.push(11) if that makes sense
    },
    color: "#7D7D7D",
    branches: "",
    requires: new Decimal('5e6'), // Can be a function that takes requirement increases into account
    resource: "Systems", // Name of prestige currency
    baseResource: "Watts", // Name of resource prestige is based on
    baseAmount() {return player.w.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.35, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        // Prestige Upgrade
        // Blank
        // Power Upgrades
        // Blank
        // System Upgrades
        if (hasUpgrade('s', 21)) mult = mult.times('2')
        if (hasUpgrade('s', 23)) mult = mult.times('4')
        if (hasUpgrade('s', 24)) mult = mult.times('10')
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
    layerShown(){return player.s.unlocked || hasUpgrade('lf', 23)},
    clickables: {
        11: {
            title: "DEBUG",
            display(){if (getClickableState('s', 11) == true) return 'REGISTRY CORRUPTION DETECTED.'; else return 'SYSTEM FUNCTIONING AS USUAL.'},
            canClick(){if (getClickableState('s', 11) == true) return true; else return false},
            onClick(){setClickableState('s', 11, false)}
        },
        12: {
            title: "OVERRIDE",
            display(){if (getClickableState('s', 12) == true) return 'SYSTEM INFILTRATION DETECTED.'; else return 'SYSTEM FUNCTIONING AS USUAL.'},
            canClick(){if (getClickableState('s', 12) == true) return true; else return false},
            onClick(){setClickableState('s', 12, false)}
        },
        21: {
            title: "SCAN",
            display(){if (getClickableState('s', 21) == true) return 'POSSIBLE VIRUSES DETECTED.'; else return 'SYSTEM FUNCTIONING AS USUAL.'},
            canClick(){if (getClickableState('s', 21) == true) return true; else return false},
            onClick(){setClickableState('s', 21, false)}
        },
        22: {
            title: "RESTART",
            display(){if (getClickableState('s', 22) == true) return 'NEW SYSTEM UPDATE DETECTED.'; else return 'SYSTEM FUNCTIONING AS USUAL.'},
            canClick(){if (getClickableState('s', 22) == true) return true; else return false},
            onClick(){setClickableState('s', 22, false)}
        }
    },
    upgrades: {
        11: {
            title: "Power ON",
            description: "10x Watts",
            cost: new Decimal('1'),
        },
        12: {
            title: "Diagnostics CHECK",
            description: "50x Prestige Points",
            cost: new Decimal('5'),
        },
        13: {
            title: "Debug Mode ON",
            description: "25x Layer Points",
            cost: new Decimal('10'),
        },
        14: {
            title: "Viruses NONE",
            description: "^1.35 Points",
            cost: new Decimal('20'),
        },
        15: {
            title: "ALL SYSTEMS GREEN",
            description: "Intiate the Systems Minigame",
            cost: new Decimal('35'),
        },
        21: {
            title: "System Overdrive",
            description: "2x Systems",
            cost: new Decimal('125'),
        },
        22: {
            title: "Optimizations",
            description: "5x Watts",
            cost: new Decimal('275'),
        },
        23: {
            title: "New Processor",
            description: "4x Systems",
            cost: new Decimal('525'),
        },
        24: {
            title: "Maximum Overclock",
            description: "10x Systems",
            cost: new Decimal('1000'),
        },
        25: {
            title: "/:Generate\n"+"Fragments",
            description: "Boost your Currency Gains and unlock new upgrades in Layer Fragments.",
            cost: new Decimal('2500'),
        },
},
    tabFormat: {
        "Upgrades": {
            content: [
                "main-display",
                "prestige-button",
                "blank",
                "upgrades"],
            unlocked(){if (hasUpgrade('s', 15)) return true; else return false}
        },
        "SYSTEM:BOOT": {
            content: [
                ["display-text",
                    function(){if ([11,12,21,22].every(id => getClickableState('s', id) == false)) return 'SYSTEMS GREEN.'; else return 'WARNING SYSTEM INSTABILITY DETECTED'}],
                "blank",
                ["row", ["clickables",
                        "blank", "blank", "blank",
                        ["vert-slider", ["SlideOne", 0, 50]],
                        "blank", "blank", "blank",
                        ["vert-slider", ["SlideTwo", 0, 100]]]]
            ],
            unlocked(){if (hasUpgrade('s', 15)) return true; else return false}
        }
}})