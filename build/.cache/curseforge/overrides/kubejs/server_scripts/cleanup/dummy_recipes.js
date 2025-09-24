ServerEvents.recipes(event=>{
    event.custom(
        {
            "type": "wizards_reborn:arcanum_dust_transmutation",
            "from": {
                "tag": "wizards_reborn:arcane_wood_sapling_ingredient"
            },
            "to": {
                "item": "minecraft:grass_block"
            }
        }
    ).id("wizards_reborn:arcanum_dust_transmutation/arcane_wood_sapling")

    event.custom(
        {
            "type": "wizards_reborn:arcanum_dust_transmutation",
            "from": {
                "item": "minecraft:nether_gold_ore"
            },
            "to": {
                "item": "minecraft:nether_gold_ore"
            }
        }
    ).id("wizards_reborn:arcanum_dust_transmutation/nether_arcane_gold_ore")

    event.custom(
        {
            "type": "wizards_reborn:arcanum_dust_transmutation",
            "from": {
                "item": "minecraft:deepslate_gold_ore"
            },
            "to": {
                "item": "minecraft:deepslate_gold_ore"
            }
        }
    ).id("wizards_reborn:arcanum_dust_transmutation/deepslate_arcane_gold_ore")

    event.custom(
        {
            "type": "wizards_reborn:arcanum_dust_transmutation",
            "from": {
                "item": "minecraft:gold_ore"
            },
            "to": {
                "item": "minecraft:gold_ore"
            }
        }
    ).id("wizards_reborn:arcanum_dust_transmutation/arcane_gold_ore")

    event.smelting("wizards_reborn:arcane_gold_ore","#forge:ores/arcane_gold").id("wizards_reborn:smelting/arcane_gold_ingot")
    event.blasting("wizards_reborn:arcane_gold_ore","#forge:ores/arcane_gold").id("wizards_reborn:blasting/arcane_gold_ingot")

    event.smelting("wizards_reborn:raw_arcane_gold","wizards_reborn:arcane_gold_ore").id("wizards_reborn:smelting/arcane_gold_ingot_from_raw")
    event.blasting("wizards_reborn:raw_arcane_gold","wizards_reborn:arcane_gold_ore").id("wizards_reborn:blasting/arcane_gold_ingot_from_raw")

    event.recipes.ars_nouveau.enchanting_apparatus("kubejs:recipe_changed","kubejs:recipe_changed","kubejs:recipe_changed").id("ars_nouveau:dominion_wand")
    
    event.recipes.naturesaura.tree_ritual("kubejs:recipe_changed",["kubejs:recipe_changed"]).id("naturesaura:tree_ritual/conversion_catalyst")
    event.recipes.naturesaura.tree_ritual("kubejs:recipe_changed",["kubejs:recipe_changed"]).id("naturesaura:tree_ritual/crushing_catalyst")
    event.recipes.naturesaura.tree_ritual("kubejs:recipe_changed",["kubejs:recipe_changed"]).id("naturesaura:tree_ritual/furnace_heater")
    event.shaped('kubejs:recipe_changed',["R"],{R:"kubejs:recipe_changed"}).id('ars_nouveau:basic_spell_turret')
    event.shaped('kubejs:recipe_changed', ['kubejs:recipe_changed']).id("ars_nouveau:imbuement_chamber")

    event.recipes.ars_nouveau.imbuement("kubejs:recipe_changed","kubejs:recipe_changed",100,[]).id("ars_nouveau:imbuement_air_essence")
	event.recipes.ars_nouveau.imbuement("kubejs:recipe_changed","kubejs:recipe_changed",100,[]).id("ars_nouveau:imbuement_earth_essence")
	event.recipes.ars_nouveau.imbuement("kubejs:recipe_changed","kubejs:recipe_changed",100,[]).id("ars_nouveau:imbuement_fire_essence")
	event.recipes.ars_nouveau.imbuement("kubejs:recipe_changed","kubejs:recipe_changed",100,[]).id("ars_nouveau:imbuement_water_essence")

    event.shaped('kubejs:recipe_changed',["R"],{R:"kubejs:recipe_changed"}).id('ars_nouveau:rotating_spell_turret')
    event.recipes.ars_nouveau.enchanting_apparatus("kubejs:recipe_changed","kubejs:recipe_changed",'kubejs:recipe_changed').id('ars_nouveau:spell_turret')
    event.recipes.ars_nouveau.enchanting_apparatus("kubejs:recipe_changed","kubejs:recipe_changed",'kubejs:recipe_changed').id('ars_nouveau:timer_spell_turret')
    event.recipes.ars_nouveau.enchanting_apparatus(['kubejs:recipe_changed'],'kubejs:recipe_changed',"kubejs:recipe_changed").id("ars_nouveau:starbuncle_charm")
    event.recipes.ars_nouveau.enchanting_apparatus(['kubejs:recipe_changed'],'kubejs:recipe_changed',"kubejs:recipe_changed").id("ars_nouveau:whirlisprig_charm")
    event.recipes.ars_nouveau.enchanting_apparatus(['kubejs:recipe_changed'],'kubejs:recipe_changed',"kubejs:recipe_changed").id("ars_nouveau:drygmy_charm")
    event.recipes.ars_nouveau.enchanting_apparatus(['kubejs:recipe_changed'],'kubejs:recipe_changed',"kubejs:recipe_changed").id("ars_nouveau:wixie_charm")
    event.recipes.ars_nouveau.enchanting_apparatus(['kubejs:recipe_changed'],'kubejs:recipe_changed',"kubejs:recipe_changed").id("ars_nouveau:magebloom_crop")

    event.shaped("kubejs:recipe_changed",["   "," X ","   "],{X:"kubejs:recipe_changed"}).id("ars_nouveau:apprentice_spell_book_upgrade")
    event.shaped("kubejs:recipe_changed",["   "," X ","   "],{X:"kubejs:recipe_changed"}).id("ars_nouveau:enchanting_apparatus")
    
})