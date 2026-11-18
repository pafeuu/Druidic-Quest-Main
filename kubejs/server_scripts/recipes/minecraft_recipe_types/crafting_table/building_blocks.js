ServerEvents.recipes(event=>{

    event.shaped("twigs:paper_lantern",
        [
            " P ",
            "PTP",
            " P "
        ],
        {
            P: "paper",
            T: "torch"
        }
    ).id("twigs:paper_lantern")

    let Mosaic = [
        "natures_spirit:wisteria",
        "natures_spirit:sugi",
        "natures_spirit:joshua",
        "natures_spirit:mahogany",
        "natures_spirit:coconut",
        "mynethersdelight:powdery",
        "minecraft:bamboo"
    ]
    Mosaic.forEach(woodtype => {
        event.shaped(`${woodtype}_mosaic`,
            [
                "PP"
            ],
            {
                P: `${woodtype}_slab`
            }
        ).id(`${woodtype}_mosaic`)
    });

    event.shaped(`wizards_reborn:cork_bamboo_chiseled_planks`,
            [
                "PP"
            ],
            {
                P: `wizards_reborn:cork_bamboo_slab`
            }
        ).id(`wizards_reborn:shaped/cork_bamboo_chiseled_planks`)
        
    event.remove({id:"mynethersdelight:crafting/powdery_mosaic"})

    event.shaped("10x twigs:azalea_flowers",
            [
                "PP"
            ],
            {
                P: "minecraft:flowering_azalea"
            }
    ).id("twigs:azalea_flowers_from_flowering_azalea")

    event.shapeless("copycats:copycat_vertical_stairs","copycats:copycat_stairs").id("copycats:crafting/copycat_vertical_stairs_from_conversion")
    
})