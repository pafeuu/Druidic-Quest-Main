ServerEvents.recipes(event=>{

    event.shaped("irons_spellbooks:infernal_sorcerer_chestplate",
        [
            "GSG",
            "MXM",
            "GMG"
        ],
        {
            G: "#forge:ingots/gold",
            M: "irons_spellbooks:mithril_weave",
            S: "irons_spellbooks:divine_soulshard",
            X: "irons_spellbooks:pyromancer_chestplate"
        }
    ).modifyResult((grid, result) => {
        let input = grid.find("irons_spellbooks:pyromancer_chestplate");
        return result.withNBT(input.nbt)
    }).id("irons_spellbooks:infernal_sorcerer_chestplate")

    event.shaped("irons_spellbooks:paladin_chestplate",
        [
            "GSG",
            "MXM",
            "GMG"
        ],
        {
            G: "#forge:ingots/gold",
            M: "irons_spellbooks:mithril_weave",
            S: "irons_spellbooks:divine_soulshard",
            X: "irons_spellbooks:priest_chestplate"
        }
    ).modifyResult((grid, result) => {
        let input = grid.find("irons_spellbooks:priest_chestplate");
        return result.withNBT(input.nbt)
    }).id("irons_spellbooks:paladin_chestplate")


})