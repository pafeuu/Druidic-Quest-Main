MoreJSEvents.structureLoad((event) => {

    const replacementsKeepOrientation = [
        ["create:mechanical_drill","supplementaries:bamboo_spikes"],
        ["create:encased_fan","supplementaries:bellows"],
        ["create:windmill_bearing","supplementaries:bellows"],
        ["create:mechanical_bearing","supplementaries:bellows",]
    ]

    replacementsKeepOrientation.forEach(([oldBlock,newBlock])=>{
        event.forEachPalettes((palette)=>{
            palette.forEach((blockInfo) => {
                if (`${blockInfo.id}`==oldBlock) {
                    blockInfo.setBlock(newBlock,{facing:`${blockInfo.properties.facing}`})
                }
            });
        })
    });

    const replacementsWithProperties = [
        ["create:mechanical_press","piston",{facing: "down"}],
        //["waystones:waystone","waystones:waystone",{origin: "village"}]
    ]

    const waystoneVariantsInStructures = [
        "",
        "sandy_",
        "mossy_"

    ].forEach(type=>{
        event.forEachPalettes((palette)=>{
            palette.forEach((blockInfo) => {
                if (`${blockInfo.id}`==`waystones:${type}waystone`) {
                    blockInfo.setBlock("waystones:blackstone_waystone",{origin:"village",half:`${blockInfo.properties.half}`})
                }
            });
        })
    })
    

    replacementsWithProperties.forEach(([oldBlock,newBlock,properties])=>{
        event.forEachPalettes((palette)=>{
            palette.forEach((blockInfo) => {
                if (`${blockInfo.id}`==oldBlock) {
                    blockInfo.setBlock(newBlock,properties)
                }
            });
        })
    });

    const replacements = [
        ["quark:charcoal_block","thermal:charcoal_block"],
        ["quark:carrot_crate","farmersdelight:carrot_crate"],
        ["quark:potato_crate","farmersdelight:potato_crate"],
        ["quark:apple_crate","fruitsdelight:apple_crate"]
        ["create:blaze_burner","supplementaries:fire_pit"],
        ["create:empty_blaze_burner","supplementaries:fire_pit"],
        ["create:lit_blaze_burner","supplementaries:fire_pit"],
        ["create:mechanical_arm","kubejs:primitive_machine"],
        ["create:mechanical_crafter","kubejs:primitive_machine"],
        ["create:crushing_wheel","kubejs:primitive_machine"],
        ["create:mechanical_mixer","kubejs:primitive_machine"],
        ["create:mechanical_saw","sawmill:sawmill"],
        ["minecraft:enchanting_table","ars_nouveau:arcane_core"],
        ["quark:matrix_enchanter","ars_nouveau:arcane_core"],
        ["create:andesite_alloy_block","minecraft:iron_block"],
        ["netherite_block","minecraft:ancient_debris"],
        ["anvil","damaged_anvil"],
        ["chipped_anvil","damaged_anvil"]
    ]
    
    replacements.forEach(([oldBlock,newBlock])=>{
        event.forEachPalettes((palette)=>{
            palette.forEach((blockInfo) => {
                if (`${blockInfo.id}`==oldBlock) {
                    blockInfo.setBlock(newBlock)
                }
            });
        })
    });


    
}); 