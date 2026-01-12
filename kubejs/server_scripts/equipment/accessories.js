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
    

})