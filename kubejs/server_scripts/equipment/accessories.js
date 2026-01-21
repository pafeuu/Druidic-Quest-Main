ServerEvents.recipes(event => {

    function pendant(output,material)
    {
        event.shaped(`kubejs:${output}_pendant`,[
            " M ",
            "MXM",
            " M "
        ],
        {
            M: material,
            X: "ars_nouveau:dull_trinket"
        })
    }

    function pendantExpensive(output,material)
    {
        event.shaped(`kubejs:${output}_pendant`,[
            "MMM",
            "MXM",
            "MMM"
        ],
        {
            M: material,
            X: "ars_nouveau:dull_trinket"
        })
    }

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

    pendant("lapis","minecraft:lapis_block")
    pendant("ruby","thermal:ruby")
    pendantExpensive("ruby","rubinated_nether:ruby")
    pendant("sapphire","thermal:sapphire")
    pendantExpensive("sapphire","kubejs:sapphire")
    pendant("diamond","kubejs:infused_diamond")
    pendantExpensive("diamond","diamond")
    pendant("emerald","kubejs:infused_emerald")
    pendantExpensive("emerald","emerald")
    pendant("amethyst","kubejs:infused_amethyst")
    pendantExpensive("amethyst","amethyst_shard")
    pendantExpensive("quartz","quartz_block")
    pendantExpensive("zanite","aether:zanite_gemstone")
    pendantExpensive("skyjade","deep_aether:skyjade")
    pendant("lead","#forge:plates/lead")
    pendant("silver","#forge:plates/silver")
    pendant("tin","#forge:plates/tin")
    pendant("nickel","#forge:plates/nickel")
    pendantExpensive("steeleaf","twilightforest:steeleaf_ingot")
    pendant("ironwood","#forge:plates/ironwood")
    pendant("knightmetal","#forge:plates/knightmetal")
    pendant("zinc","#forge:plates/zinc")
    pendant("uranium","#forge:plates/uranium")
    pendant("copper","#forge:plates/copper")
    pendant("gravitite","aether:enchanted_gravitite")

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