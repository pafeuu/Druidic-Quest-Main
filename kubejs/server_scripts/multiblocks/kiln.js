

ServerEvents.recipes(event=>{

	const alloySmelter = event.recipes.thermal.smelter
	const arcFurnace = event.recipes.immersiveengineering.arc_furnace
	function Fuel(input, HowManyItemsItSmelts)
	{
		event.recipes.mbd2.alloying().duration(HowManyItemsItSmelts*205).inputItems(input).isFuel(true)
	}

	Fuel("blaze_powder",0.25)
	Fuel("blaze_rod",0.5)
	Fuel("quark:blaze_lantern",2)
	Fuel("ars_nouveau:fire_essence",4)
	Fuel("kubejs:sunbird_feather",16)
	

	
	event.remove({id:"thermal:machines/smelter/smelter_alloy_enderium"})
	event.remove({id:"thermal:machines/smelter/smelter_alloy_lumium"})

    event.remove({output:'create:andesite_alloy'})

    event.remove({id:"twilightforest:equipment/fiery_ingot_crafting"})
	
	
	
	
	function kilnWith2Ingredients(output,input1,input2)
	{
		event.recipes.mbd2.alloying()
		.inputItems(input1)
		.inputItems(input2)
		.outputItems(output)
		.duration(200)

		alloySmelter(output,[input1,input2])
		arcFurnace(output,input1,[input2])
	}

	function kilnWith3Ingredients(output,input1,input2,input3)
	{
		event.recipes.mbd2.alloying()
		.inputItems(input1)
		.inputItems(input2)
		.inputItems(input3)
		.outputItems(output)
		.duration(200)

		alloySmelter(output,[input1,input2,input3])

		arcFurnace(output,input1,[input2,input3])
	}

	

	kilnWith3Ingredients("wizards_reborn:arcane_gold_ingot",
		"naturesaura:tainted_gold",
		"4x ars_nouveau:abjuration_essence",
		"thermal:cinnabar")
		
	kilnWith3Ingredients("wizards_reborn:arcane_gold_ingot",
		"naturesaura:tainted_gold",
		"2x ars_nouveau:abjuration_essence",
		"rubinated_nether:ruby")

	kilnWith3Ingredients("2x wizards_reborn:arcane_gold_ingot",
		"2x naturesaura:tainted_gold",
		"2x ars_nouveau:abjuration_essence",
		"thermal:ruby")

	kilnWith2Ingredients("netherite_ingot",
		"4x wizards_reborn:arcane_gold_ingot",
		"4x netherite_scrap"
	)

	kilnWith2Ingredients("4x thermal:bronze_ingot",
		"1x thermal:tin_ingot",
		"3x copper_ingot"
	)

	kilnWith2Ingredients("kubejs:storm_ingot",
		"kubejs:arcanum_alloy_ingot",
		"4x ars_nouveau:air_essence"
	)
	kilnWith2Ingredients("kubejs:aquatic_ingot",
		"kubejs:arcanum_alloy_ingot",
		"4x ars_nouveau:water_essence"
	)

	kilnWith2Ingredients("twilightforest:fiery_ingot",
		"kubejs:arcanum_alloy_ingot",
		"2x #twilightforest:fiery_vial"
	)

	kilnWith3Ingredients("2x thermal:enderium_ingot",
		"2x thermal:lead_ingot",
		"4x kubejs:ender_essence",
		"8x diamond"
	)

	kilnWith3Ingredients("thermal:lumium_ingot",
		"thermal:enderium_ingot",
		"4x kubejs:light_essence",
		"8x aether:ambrosium_shard"
	)
	
	kilnWith2Ingredients("2x twilightforest:fiery_tears",
		"twilightforest:fiery_tears",
		"4x ars_nouveau:fire_essence"
	)

	kilnWith2Ingredients("2x twilightforest:fiery_blood",
		"twilightforest:fiery_blood",
		"4x ars_nouveau:fire_essence"
	)

	kilnWith2Ingredients("2x kubejs:source_alloy_ingot",
		"2x minecraft:gold_ingot",
		"3x ars_nouveau:source_gem"
	)

    kilnWith2Ingredients("2x kubejs:arcanum_alloy_ingot",
		"2x minecraft:iron_ingot",
		"3x wizards_reborn:arcanum"
	)

	kilnWith3Ingredients("2x create:andesite_alloy",
		"kubejs:natural_clay_blend",
		"ars_nouveau:earth_essence",
		"16x minecraft:andesite"
	)

	kilnWith2Ingredients("enigmaticlegacy:blazing_core",
		"kubejs:elemental_core",
		"16x ars_nouveau:fire_essence"
	)
	kilnWith2Ingredients("enigmaticlegacy:golem_heart",
		"kubejs:elemental_core",
		"16x ars_nouveau:earth_essence"
	)

	kilnWith2Ingredients("enigmaticlegacy:ocean_stone",
		"kubejs:elemental_core",
		"16x ars_nouveau:water_essence"
	)

	kilnWith2Ingredients("enigmaticlegacy:angel_blessing",
		"kubejs:elemental_core",
		"16x ars_nouveau:air_essence"
	)

	kilnWith2Ingredients("enigmaticlegacy:eye_of_nebula",
		"kubejs:elemental_core",
		"8x kubejs:ender_essence"
	)

	kilnWith2Ingredients("2x irons_spellbooks:arcane_ingot",
		"2x kubejs:arcanum_alloy_ingot",
		"8x irons_spellbooks:arcane_essence"
	)
	
	kilnWith3Ingredients("thermal:electrum_ingot",
		"4x kubejs:lightning_essence",
		"immersiveengineering:ingot_aluminum",
		"wizards_reborn:arcane_gold_ingot")

	kilnWith3Ingredients("immersiveengineering:ingot_steel",
		"thermal:steel_ingot",
		"immersiveengineering:ingot_aluminum",
		"8x kubejs:infused_amethyst")

	arcFurnace("kubejs:arcane_plating","4x wizards_reborn:arcane_gold_sheet",["4x netherite_ingot","8x thermal:ruby"])
	
	arcFurnace("ancient_aether:valkyrum","naturesaura:sky_ingot",["16x kubejs:life_essence","64x ars_nouveau:air_essence","16x thermal:sapphire"])

	arcFurnace("deep_aether:stratus_ingot","16x kubejs:gravitite_ingot",["8x thermal:ruby","8x thermal:sapphire"])

	arcFurnace("deep_aether:stratus_ingot","16x kubejs:infused_amethyst",["16x kubejs:infused_diamond","16x thermal:ruby","16x thermal:sapphire","16x kubejs:infused_emerald"])

	arcFurnace("2x immersiveengineering:ingot_steel","thermal:steel_ingot",[
		"immersiveengineering:ingot_aluminum",
		"8x kubejs:infused_amethyst",
		"thermal:nickel_ingot"
	])

})