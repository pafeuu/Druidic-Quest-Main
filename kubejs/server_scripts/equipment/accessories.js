ServerEvents.recipes(event => {

    function ring(output,material)
    {
        event.shaped(`kubejs:${output}_ring`,[
            " M ",
            "MXM",
            " M "
        ],
        {
            M: material,
            X: "ars_nouveau:ring_of_potential"
        })
    }

    function ringExpensive(output,material)
    {
        event.shaped(`kubejs:${output}_ring`,[
            "MMM",
            "MXM",
            "MMM"
        ],
        {
            M: material,
            X: "ars_nouveau:ring_of_potential"
        })
    }

    ring("lapis","minecraft:lapis_block")
    ring("ruby","thermal:ruby")
    ringExpensive("ruby","rubinated_nether:ruby")
    ring("sapphire","thermal:sapphire")
    ringExpensive("sapphire","kubejs:sapphire")
    ring("diamond","kubejs:infused_diamond")
    ringExpensive("diamond","diamond")
    ring("emerald","kubejs:infused_emerald")
    ringExpensive("emerald","emerald")
    ring("amethyst","kubejs:infused_amethyst")
    ringExpensive("amethyst","amethyst_shard")
    ringExpensive("quartz","quartz_block")
    ringExpensive("zanite","aether:zanite_gemstone")
    ringExpensive("skyjade","deep_aether:skyjade")
    ring("lead","#forge:plates/lead")
    ring("silver","#forge:plates/silver")
    ring("tin","#forge:plates/tin")
    ring("nickel","#forge:plates/nickel")
    ringExpensive("steeleaf","twilightforest:steeleaf_ingot")
    ring("ironwood","#forge:plates/ironwood")
    ring("knightmetal","#forge:plates/knightmetal")
    ring("zinc","#forge:plates/zinc")
    ring("uranium","#forge:plates/uranium")
    ring("copper","#forge:plates/copper")

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