ServerEvents.recipes(event => {

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

    event.shaped("twilightforest:naga_chestplate", ["SLS", "SSS", "SSS"], {
        S: "twilightforest:naga_scale",
        L: "leather_chestplate",
    }).modifyResult((grid, result) => {
        let input = grid.find("minecraft:leather_chestplate");
        return result.withNBT(input.nbt)
    }).id("twilightforest:equipment/naga_chestplate");

    event.shaped("twilightforest:naga_leggings", ["SSS", "SLS", "S S"], {
        S: "twilightforest:naga_scale",
        L: "leather_leggings",
    }).modifyResult((grid, result) => {
        let input = grid.find("minecraft:leather_leggings");
        return result.withNBT(input.nbt)
    }).id("twilightforest:equipment/naga_leggings");


    global.armorSlots.forEach(slot => {

        event.shaped(`twilightforest:yeti_${slot}`, [" S ", "SLS", " S "], {
            S: "twilightforest:alpha_yeti_fur",
            L: `twilightforest:arctic_${slot}`,
        }).modifyResult((grid, result) => {
            let input = grid.find(`twilightforest:arctic_${slot}`);
            return result.withNBT(input.nbt)
        }).id(`twilightforest:equipment/yeti_${slot}`);

        event.shaped(`twilightforest:arctic_${slot}`, [" S ", "SLS", " S "], {
            S: "twilightforest:arctic_fur",
            L: `minecraft:leather_${slot}`,
        }).modifyResult((grid, result) => {
            let input = grid.find(`minecraft:leather_${slot}`);
            return result.withNBT(input.nbt)
        }).id(`twilightforest:equipment/arctic_${slot}`);

    });


})