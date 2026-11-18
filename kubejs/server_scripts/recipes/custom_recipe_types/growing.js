ServerEvents.recipes(event=>{

    const BaseTime = 20*120

    function insolator(output,input)
    {

        event.recipes.mbd2.growing()
        .inputAura(50)
        .duration(BaseTime)
        .inputFluids("minecraft:water 1000")
        .chance(0.01, builder => builder
            .inputItems(input)
        )
        .outputItems(output)
        .chance(0.02, builder => builder
            .outputItems(input)
        )
        .light(0,15,0,15,true)
        .dayTime(true)

        event.recipes.mbd2.growing()
        .inputAura(50)
        .duration(BaseTime*0.75)
        .inputItems("bone_meal")
        .inputFluids("minecraft:water 1000")
        .chance(0.01, builder => builder
            .inputItems(input)
        )
        .outputItems(output)
        .chance(0.02, builder => builder
            .outputItems(input)
        )
        .light(0,15,0,15,true)
        .dayTime(true)

        event.recipes.mbd2.growing()
        .inputAura(50)
        .duration(BaseTime*0.05)
        .inputItems("create:tree_fertilizer")
        .inputFluids("minecraft:water 1000")
        .chance(0.01, builder => builder
            .inputItems(input)
        )
        .outputItems(output)
        .chance(0.02, builder => builder
            .outputItems(input)
        )
        .light(0,15,0,15,true)
        .dayTime(true)

        event.recipes.mbd2.growing()
        .inputAura(50)
        .duration(BaseTime*0.1)
        .inputItems("thermal:phytogro")
        .inputFluids("minecraft:water 1000")
        .chance(0.01, builder => builder
            .inputItems(input)
        )
        .outputItems(output)
        .chance(0.02, builder => builder
            .outputItems(input)
        )
        .light(0,15,0,15,true)
        .dayTime(true)

        event.recipes.mbd2.growing()
        .inputAura(50)
        .duration(BaseTime*0.5)
        .inputItems("thermal:compost")
        .inputFluids("minecraft:water 1000")
        .chance(0.01, builder => builder
            .inputItems(input)
        )
        .outputItems(output)
        .chance(0.02, builder => builder
            .outputItems(input)
        )
        .light(0,15,0,15,true)
        .dayTime(true)
    }

    Ingredient.of("#minecraft:saplings").itemIds.forEach(sapling=>{

        let log = sapling.replace("sapling","log")
        
        if(sapling=="vintagedelight:magic_peanut")
            return;

        switch(sapling){
            case "quark:red_blossom_sapling":
            case "quark:blue_blossom_sapling":
            case "quark:orange_blossom_sapling":
            case "quark:yellow_blossom_sapling":
            case "quark:lavender_blossom_sapling":
                log = "quark:blossom_log"
                break;
            case "twilightforest:darkwood_sapling":
                log = "twilightforest:dark_log"
                break;
            case "fruitsdelight:orange_sapling":
            case "fruitsdelight:apple_sapling":
            case "fruitsdelight:fig_sapling":
            case "fruitsdelight:mangosteen_sapling":
            case "fruitsdelight:durian_sapling":
            case "fruitsdelight:lychee_sapling":
            case "fruitsdelight:peach_sapling":
            case "fruitsdelight:mango_sapling":
            case "fruitsdelight:kiwi_sapling":
                log = "minecraft:jungle_log"
                break;
            case "fruitsdelight:hawberry_sapling":
            case "fruitsdelight:persimmon_sapling":
            case "fruitsdelight:bayberry_sapling":
                log = "minecraft:spruce_log"
                break;
            case "fruitsdelight:pear_sapling":
                log = "minecraft:birch_log"
                break;
            case "minecraft:mangrove_propagule":
                log = "minecraft:mangrove_log"
                break;
            case "minecraft:azalea":
            case "minecraft:flowering_azalea":
                log = "quark:azalea_log"
                break;
            case "deep_aether:blue_roseroot_sapling":
                log = "deep_aether:roseroot_log"
                break;
            case "ancient_aether:crystal_skyroot_sapling":
            case "ancient_aether:enchanted_skyroot_sapling":
            case "ancient_aether:skyroot_pine_sapling":
                log = "aether:skyroot_log"
                break;
            case "twilightforest:hollow_oak_sapling":
            case "twilightforest:rainbow_oak_sapling":
                log = "twilightforest:twilight_oak_log"
                break;
            
        }
		insolator(log,sapling)	
        
    })
    //insolator("spruce_log","spruce_sapling")
})