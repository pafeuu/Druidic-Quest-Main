MoreJSEvents.structureLoad(event=>{

    if(!event.id.startsWith("dungeons_arise:heavenly_"))
        return;
        
    
    const heavenlySlabsReplacements = [
        ["minecraft:acacia_slab","deep_aether:conberry_slab"],
        ["minecraft:birch_slab","deep_aether:sunroot_slab"],
        ["minecraft:spruce_slab","ancient_aether:highsproot_slab"],
        ["minecraft:jungle_slab","deep_aether:yagroot_slab"],
        ["minecraft:dark_oak_slab","ancient_aether:sakura_slab"],
        ["minecraft:stone_slab","aether:holystone_slab"],
        ["minecraft:sandstone_slab","twigs:yellow_silt_shingle_slab"]
    ]

    const heavenlyStairsReplacements = [
        ["minecraft:acacia_stairs","deep_aether:conberry_stairs"],
        ["minecraft:birch_stairs","deep_aether:sunroot_stairs"],
        ["minecraft:dark_oak_stairs","ancient_aether:sakura_stairs"],
        ["minecraft:oak_stairs","aether:skyroot_stairs"],
        ["minecraft:spruce_stairs","ancient_aether:highsproot_stairs"],
        ["minecraft:jungle_stairs","deep_aether:yagroot_stairs"],
        ["minecraft:sandstone_stairs","twigs:yellow_silt_shingle_stairs"],
        ["minecraft:smooth_red_sandstone_stairs","twigs:orange_silt_shingle_stairs"],
        
    ]

    const heavenlyFencesReplacements = [
        ["minecraft:acacia_fence","deep_aether:conberry_fence"],
        ["minecraft:birch_fence","deep_aether:sunroot_fence"],
        ["minecraft:dark_oak_fence","ancient_aether:sakura_fence"],
        ["minecraft:spruce_fence","ancient_aether:highsproot_fence"],
        ["minecraft:jungle_fence","deep_aether:yagroot_fence"],
        ["minecraft:sandstone_wall","twigs:yellow_silt_shingle_wall"]
    ]

    const heavenlyWoodReplacements = [
        ["minecraft:stripped_acacia_wood","deep_aether:stripped_conberry_wood"],
        ["minecraft:acacia_wood","deep_aether:conberry_wood"],
        ["minecraft:spruce_wood","ancient_aether:highsproot_wood"],
        ["minecraft:stripped_birch_wood","deep_aether:stripped_sunroot_wood"],
        ["minecraft:stripped_oak_wood","aether:stripped_skyroot_wood"],
        ["minecraft:stripped_jungle_wood","deep_aether:stripped_yagroot_wood"],
        ["minecraft:oak_log","aether:skyroot_log"]
    ]
    const heavenlyBlocksReplacements = [
        ["minecraft:shroomlight","minecraft:ochre_froglight"],
        ["minecraft:magma_block","aether:icestone"],
        ["minecraft:dark_prismarine","twigs:green_silt_shingles"],
        ["minecraft:clay","ancient_aether:valkyrie_clay"],
        ["minecraft:birch_planks","deep_aether:sunroot_planks"],
        ["minecraft:dark_oak_planks","ancient_aether:sakura_planks"],
        ["minecraft:spruce_planks","ancient_aether:highsproot_planks"],
        ["minecraft:oak_planks","aether:skyroot_planks"],
        ["minecraft:acacia_planks","deep_aether:conberry_planks"],
        ["minecraft:white_wool","aether:cold_aercloud"],
        ["minecraft:light_gray_wool","aether:blue_aercloud"],
        ["minecraft:gray_wool","ancient_aether:fluffalo_wool"],
        ["minecraft:light_gray_concrete","twigs:light_blue_packed_silt"],
        ["minecraft:gray_concrete","twigs:blue_packed_silt"],
        ["minecraft:cyan_terracotta","twigs:light_blue_packed_silt"],
        ["minecraft:pink_terracotta","twigs:magenta_packed_silt"],
        ["minecraft:yellow_terracotta","twigs:yellow_packed_silt"],
        ["minecraft:smooth_red_sandstone","twigs:orange_silt_shingles"],
        ["minecraft:bookshelf","everycomp:q/deep_aether/sunroot_bookshelf"],
        ["minecraft:cut_sandstone","twigs:yellow_packed_silt"],
        ["minecraft:end_stone_bricks","twigs:yellow_silt_shingles"],
        ["minecraft:coal_block","aether:ambrosium_block"],
        ["minecraft:gold_block","deep_aether:skyjade_block"],
        
    
    ]

    const heavenlyLaddersReplacements = [
        ["minecraft:ladder","everycomp:q/deep_aether/conberry_ladder"]
    ]

    heavenlyWoodReplacements.forEach(([oldBlock,newBlock])=>{
        event.forEachPalettes((palette)=>{
                palette.forEach((blockInfo) => {
                    if (`${blockInfo.id}`==oldBlock) {
                        blockInfo.setBlock(newBlock,{axis:`${blockInfo.properties.axis}`})
                    }
                });
            })
    })

    heavenlyBlocksReplacements.forEach(([oldBlock,newBlock])=>{
        event.forEachPalettes((palette)=>{
                palette.forEach((blockInfo) => {
                    if (`${blockInfo.id}`==oldBlock) {
                        blockInfo.setBlock(newBlock)
                    }
                });
            })
    })

    heavenlySlabsReplacements.forEach(([oldBlock,newBlock])=>{
        event.forEachPalettes((palette)=>{
                palette.forEach((blockInfo) => {
                    if (`${blockInfo.id}`==oldBlock) {
                        blockInfo.setBlock(newBlock,{type:`${blockInfo.properties.type}`})
                    }
                });
            })
    })

    heavenlyStairsReplacements.forEach(([oldBlock,newBlock])=>{
        event.forEachPalettes((palette)=>{
                palette.forEach((blockInfo) => {
                    if (`${blockInfo.id}`==oldBlock) {
                        blockInfo.setBlock(newBlock,{facing:`${blockInfo.properties.facing}`,half:`${blockInfo.properties.type}`,shape:`${blockInfo.properties.type}`})
                    }
                });
            })
    })

    heavenlyFencesReplacements.forEach(([oldBlock,newBlock])=>{
        event.forEachPalettes((palette)=>{
                palette.forEach((blockInfo) => {
                    if (`${blockInfo.id}`==oldBlock) {
                        blockInfo.setBlock(newBlock,{east:`${blockInfo.properties.east}`,west:`${blockInfo.properties.west}`,north:`${blockInfo.properties.north}`,south:`${blockInfo.properties.south}`})
                    }
                });
            })
    })

    heavenlyLaddersReplacements.forEach(([oldBlock,newBlock])=>{
        event.forEachPalettes((palette)=>{
                palette.forEach((blockInfo) => {
                    if (`${blockInfo.id}`==oldBlock) {
                        blockInfo.setBlock(newBlock,{facing:`${blockInfo.properties.facing}`})
                    }
                });
            })
    })

})
