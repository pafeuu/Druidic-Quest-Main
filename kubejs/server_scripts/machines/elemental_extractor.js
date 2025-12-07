ServerEvents.recipes(event=>{

    function Extracting(element,amount,chance,block)
    {
        event.recipes.mbd2.extracting()
        .chance(chance, builder => builder
            .inputItemsDurability("kubejs:elemental_pump")
        )
        .outputFluids("kubejs:"+element+"_element_fluid "+amount)
        .duration(400)
        .blocksInStructure(1,1,block)
        //.id("kubejs:"+amount+"_"+element)
    }

    Extracting("air",2,0.8,"aether:cold_aercloud")
    Extracting("air",3,1,"aether:blue_aercloud")
    Extracting("air",4,1,"aether:golden_aercloud")
    Extracting("air",6,0,"deep_aether:sterling_aercloud")
    Extracting("air",10,0.5,"deep_aether:chromatic_aercloud")

    Extracting("air",1,0.1,"twilightforest:rainy_cloud")
    Extracting("air",4,0.6,"twilightforest:snowy_cloud")
    Extracting("air",3,0.4,"twilightforest:wispy_cloud")
    Extracting("air",5,0.8,"twilightforest:fluffy_cloud")

    Extracting("earth",3,1,"farmersdelight:rich_soil")
    Extracting("earth",2,0.8,"deepslate")
    Extracting("earth",5,1,"bedrock")
    Extracting("earth",5,0,"minecraft:reinforced_deepslate")

    Extracting("water",5,0.2,"twilightforest:aurora_block")
    Extracting("water",2,1,"water")
    Extracting("water",3,1,"minecraft:wet_sponge")

    Extracting("fire",2,1,"lava")
    Extracting("fire",2,1,"minecraft:magma_block")
    Extracting("fire",3,0,"minecraft:end_portal_frame")
    
    
})