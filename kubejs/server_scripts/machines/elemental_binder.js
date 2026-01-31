ServerEvents.recipes(event=>{

    function binding(output,element,amount,input1,input2,input3,input4,input5,input6,input7,input8,id){

        event.recipes.mbd2.elemental_binding()
        .inputFluids("kubejs:"+element+"_element_fluid "+amount)
        .slotName("1", builder=> builder.inputItems(input1))
        .slotName("2", builder=> builder.inputItems(input2))
        .slotName("3", builder=> builder.inputItems(input3))
        .slotName("4", builder=> builder.inputItems(input4))
        .slotName("5", builder=> builder.inputItems(input5))
        .slotName("6", builder=> builder.inputItems(input6))
        .slotName("7", builder=> builder.inputItems(input7))
        .slotName("8", builder=> builder.inputItems(input8))
        .slotName("output", builder=>builder.outputItems(output))
        .duration(200)
        .id(id)
        .priority(0)
    }

    function binding5ingredients(output,element,amount,input1,input2,input3,input4,input5,id){

        event.recipes.mbd2.elemental_binding()
        //.inputItems(input1,input2,input3,input4,input5,input6,input7,input8)
        .inputFluids("kubejs:"+element+"_element_fluid "+amount)
        //.outputItems(output)
        .slotName("1", builder=> builder.inputItems(input1))
        .slotName("2", builder=> builder.inputItems(input2))
        .slotName("3", builder=> builder.inputItems(input3))
        .slotName("4", builder=> builder.inputItems(input4))
        .slotName("5", builder=> builder.inputItems(input5))
        .slotName("output", builder=>builder.outputItems(output))
        .duration(100)
        .id(id)
        .priority(0)

    }

    function binding7ingredients(output,element,amount,input1,input2,input3,input4,input5,input6,input7,id){

        event.recipes.mbd2.elemental_binding()
        //.inputItems(input1,input2,input3,input4,input5,input6,input7,input8)
        .inputFluids("kubejs:"+element+"_element_fluid "+amount)
        //.outputItems(output)
        .slotName("1", builder=> builder.inputItems(input1))
        .slotName("2", builder=> builder.inputItems(input2))
        .slotName("3", builder=> builder.inputItems(input3))
        .slotName("4", builder=> builder.inputItems(input4))
        .slotName("5", builder=> builder.inputItems(input5))
        .slotName("6", builder=> builder.inputItems(input6))
        .slotName("7", builder=> builder.inputItems(input7))
        .slotName("output", builder=>builder.outputItems(output))
        .duration(100)
        .id(id)
        .priority(0)

    }

    event.remove({id:"vintageimprovements:sequenced_assembly/redstone_module"})

    binding("kubejs:light_essence","fire",1250,
        "quark:glowberry_sack",
        "#forge:froglights",
        "glow_ink_sac",
        "ars_nouveau:fire_essence",
        "ars_nouveau:air_essence",
        "ars_nouveau:fire_essence",
        "ars_nouveau:air_essence",
        "ars_nouveau:fire_essence",
        "light_essence")

    binding("kubejs:dark_essence","earth",1250,
        "quark:nether_wart_sack",
        "wither_skeleton_skull",
        "ink_sac",
        "ars_nouveau:earth_essence",
        "ars_nouveau:water_essence",
        "ars_nouveau:earth_essence",
        "ars_nouveau:water_essence",
        "ars_nouveau:earth_essence",
        "dark_essence")

    binding("kubejs:ender_essence","air",1250,
        "ars_nouveau:air_essence",
        "ender_pearl",
        "ars_nouveau:air_essence",
        "ender_pearl",
        "ars_nouveau:air_essence",
        "ender_pearl",
        "ars_nouveau:air_essence",
        "thermal:ruby",
        "ender_essence")

    binding("kubejs:lightning_essence","fire",1250,
        "thermal:lightning_tnt",
        "ars_nouveau:ritual_cloudshaping",
        "thermal:lightning_tnt",
        "minecraft:lightning_rod",
        "thermal:lightning_tnt",
        "ars_nouveau:fire_essence",
        "thermal:lightning_tnt",
        "thermal:ruby",
        "lightning_essence")

    binding("kubejs:life_essence","water",1250,
        "kubejs:light_essence",
        "vintagedelight:cheese_pizza",
        "kubejs:light_essence",
        "naturesaura:birth_spirit",
        "kubejs:light_essence",
        "naturesaura:birth_spirit",
        "kubejs:light_essence",
        "thermal:ruby",
        "life_essence")

    binding("kubejs:death_essence","fire",1250,
        "kubejs:dark_essence",
        "alexsdelight:maggot_salad",
        "kubejs:dark_essence",
        "kubejs:corrupted_soul",
        "kubejs:dark_essence",
        "kubejs:corrupted_soul",
        "kubejs:dark_essence",
        "thermal:ruby",
        "death_essence")

    binding("kubejs:rainbow_magic_feather","water",2500,
        "ars_nouveau:fire_essence",
        "ars_nouveau:water_essence",
        "ars_nouveau:air_essence",
        "ars_nouveau:earth_essence",
        "kubejs:lightning_essence",
        "kubejs:nature_essence",
        "kubejs:nature_essence",
        "kubejs:fiery_magic_feather",
        "rainbow_magic_feather"
    )

    binding("kubejs:elemental_cloth","water",2500,
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "kubejs:elemental_core",
        "cloth_water"
    )
    binding("kubejs:elemental_cloth","fire",2500,
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "kubejs:elemental_core",
        "cloth_fire"
    )
    binding("kubejs:elemental_cloth","earth",2500,
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "kubejs:elemental_core",
        "cloth_earth"
    )
    binding("kubejs:elemental_cloth","air",2500,
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "irons_spellbooks:magic_cloth",
        "kubejs:elemental_core",
        "cloth_air"
    )

    binding5ingredients("kubejs:arcane_gold_upgrade_parts","fire",5000,
        "#forge:plates/arcane_gold",
        "#forge:plates/arcane_gold",
        "#forge:plates/arcane_gold",
        "#forge:plates/arcane_gold",
        "bundle",
        "arcane_gold_parts"
    )

    binding5ingredients("kubejs:soulstrider_upgrade_parts","water",5000,
        "#forge:plates/depth",
        "#forge:plates/depth",
        "#forge:plates/depth",
        "#forge:plates/depth",
        "bundle",
        "soulstrider_parts"
    )

    binding5ingredients("kubejs:skyseeker_upgrade_parts","air",5000,
        "#forge:plates/sky",
        "#forge:plates/sky",
        "#forge:plates/sky",
        "#forge:plates/sky",
        "bundle",
        "skyseeker_parts"
    )

    binding5ingredients("kubejs:battlemage_cloth","fire",5000,
        "#forge:plates/netherite",
        "#forge:plates/netherite",
        "#forge:plates/netherite",
        "#forge:plates/netherite",
        "kubejs:elemental_cloth",
        "battlemage_cloth"
    )

    binding5ingredients("kubejs:etherium_upgrade_parts","earth",5000,
        "enigmaticlegacy:etherium_ingot",
        "enigmaticlegacy:etherium_ingot",
        "enigmaticlegacy:etherium_ingot",
        "enigmaticlegacy:etherium_ingot",
        "bundle",
        "etherium_gold_parts"
    )

    binding("immersiveengineering:component_iron","earth",2500,
        "create:electron_tube",
        "#forge:rods/iron",
        "piston",
        "immersiveengineering:connector_redstone",
        "#forge:rods/iron",
        "piston",
        "immersiveengineering:connector_redstone",
        "thermal:sapphire",
        "immersiveengineering:crafting/component_iron"
    )

    binding("immersiveengineering:component_steel","earth",2500,
        "create:electron_tube",
        "#forge:rods/steel",
        "piston",
        "immersiveengineering:connector_redstone",
        "#forge:rods/steel",
        "piston",
        "immersiveengineering:connector_redstone",
        "thermal:ruby",
        "immersiveengineering:crafting/component_steel"
    )

    event.remove([{id:"immersiveengineering:blueprint/component_iron"},{id:"immersiveengineering:blueprint/component_steel"}])

})