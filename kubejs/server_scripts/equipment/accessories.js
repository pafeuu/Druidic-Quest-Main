ServerEvents.recipes(event => {

    event.shaped("immersiveengineering:earmuffs",[
        " S ",
        "S S",
        "W W"
    ],
    {
        S: "#forge:string",
        W: "#minecraft:wool"
    }
    ).id("immersiveengineering:crafting/earmuffs")

    event.shaped("kubejs:sturdy_boots_cover",[
        "S S",
        "P P",
        "D D"
    ],
    {
        S: "#forge:ropes",
        P: "#forge:plates/lead",
        D: "kubejs:sturdy_deepslate",
    }
    )

    event.shaped("kubejs:fall_boots_cover",[
        "S S",
        "P P",
        "D D"
    ],
    {
        S: "ars_nouveau:air_essence",
        P: "immersiveengineering:cushion",
        D: "#handcrafted:cushions"
    }
    )

    event.shaped("enigmaticlegacy:super_magnet_ring",
        [
            "GEG",
            "EXE",
            "GEG"
        ],
        {
            X: "enigmaticlegacy:magnet_ring",
            E: "ender_pearl",
            G: "#forge:plates/gold"
        }
    ).id("enigmaticlegacy:super_magnet_ring")

    event.shaped("simplemagnets:advancedmagnet",
        [
            "GEG",
            "EXE",
            "GEG"
        ],
        {
            X: "simplemagnets:basicmagnet",
            E: "ender_pearl",
            G: "#forge:plates/gold"
        }
    ).id("simplemagnets:advancedmagnet")

    event.shapeless("irons_spellbooks:silver_ring",["ars_nouveau:ring_of_potential","#forge:plates/silver"])
    
    event.recipes.naturesaura.tree_ritual("kubejs:gravity_boots_cover", [
        "thermal:ruby", 
        "kubejs:fall_boots_cover",
        "thermal:sapphire",
        "thermal:sapphire",
        "#forge:plates/source_alloy",
        "#forge:plates/source_alloy",
        "#forge:plates/source_alloy",
        "#forge:plates/source_alloy"],
        "quark:ancient_sapling",200)
    
    event.recipes.naturesaura.tree_ritual("kubejs:bouncy_boots_cover", [
        "kubejs:infused_emerald", 
        "kubejs:fall_boots_cover",
        "kubejs:infused_emerald",
        "kubejs:infused_emerald",
        "slime_block",
        "slime_block",
        "slime_block",
        "slime_block"],
        "quark:ancient_sapling",200)
})