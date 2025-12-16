

ServerEvents.recipes(event=>{

	function Fuel(input, HowManyItemsItSmelts)
	{
		event.recipes.mbd2.alloying().duration(HowManyItemsItSmelts*205).inputItems(input).isFuel(true)
	}

	Fuel("blaze_powder",0.25)
	Fuel("blaze_rod",0.5)
	Fuel("ars_nouveau:fire_essence",4)
	Fuel("kubejs:sunbird_feather",16)
	

	function spellstone(element,output)
	{
		event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			base_ingredient: {
				item: "ars_nouveau:"+element+"_essence"
			},
			count: 16
		  },
		  "input1": {
            base_ingredient: {
			item: "kubejs:elemental_core"
            },
            count: 1
		  },
		  "result": {
			"base_ingredient": {
			  item: "enigmaticlegacy:"+output
			},
			"count": 1
		  },
		  "time": 600
		})
	}

	spellstone("fire","blazing_core")
	spellstone("earth","golem_heart")
	spellstone("water","ocean_stone")
	spellstone("air","angel_blessing")

	function kiln(Output,OutputAmount,Input1,InputAmount1,Input2,InputAmount2)
	{
		event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			base_ingredient: {
				item: Input1
			},
			count: InputAmount1
		  },
		  "input1": {
            base_ingredient: {
			item: Input2
            },
            count: InputAmount2
		  },
		  "result": {
			"base_ingredient": {
			  item: Output
			},
			"count": OutputAmount
		  },
		  "time": 600
		})
	}

	event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			base_ingredient: {
				item: "kubejs:ender_essence"
			},
			count: 16
		  },
		  "input1": {
            base_ingredient: {
			item: "kubejs:elemental_core"
            },
            count: 1
		  },
		  "result": {
			"base_ingredient": {
			  item: "enigmaticlegacy:eye_of_nebula"
			},
			"count": 1
		  },
		  "time": 600
		})
	
	kiln("wizards_reborn:arcane_gold_ingot",2,
			"ars_nouveau:abjuration_essence",4,
			"naturesaura:tainted_gold",2
	)

	
	event.remove({id:"thermal:machines/smelter/smelter_alloy_enderium"})
	event.remove({id:"thermal:machines/smelter/smelter_alloy_lumium"})

	kiln("thermal:enderium_ingot",2,
			"thermal:lead_ingot",2,
			"kubejs:ender_essence",4
	)

	kiln("thermal:lumium_ingot",1,
		"thermal:enderium_ingot",1,
		"kubejs:light_essence",4
	)
	
	kiln("twilightforest:fiery_tears",2,
		"twilightforest:fiery_tears",1,
		"ars_nouveau:fire_essence",4
	)

	kiln("twilightforest:fiery_blood",2,
		"twilightforest:fiery_blood",1,
		"ars_nouveau:fire_essence",4
	)

	kiln("kubejs:source_alloy_ingot",2,
		"minecraft:gold_ingot",2,
		"ars_nouveau:source_gem",3
	)

    kiln("kubejs:arcanum_alloy_ingot",2,
		"minecraft:iron_ingot",2,
		"wizards_reborn:arcanum",3
	)

	kiln("create:andesite_alloy",2,
		"kubejs:natural_clay_blend",1,
		"minecraft:andesite",1
	)

    event.remove({output:'create:andesite_alloy'})
	
	kiln("kubejs:aquatic_ingot",2,
		"ars_nouveau:water_essence",2,
		"kubejs:arcanum_alloy_ingot",1
	)

	kiln("twilightforest:fiery_ingot",1,
		"kubejs:arcanum_alloy_ingot",1,
		"twilightforest:fiery_blood",2
	)

	kiln("twilightforest:fiery_ingot",1,
		"kubejs:arcanum_alloy_ingot",1,
		"twilightforest:fiery_tears",2
	)

    event.remove({id:"twilightforest:equipment/fiery_ingot_crafting"})
	
	kiln("kubejs:storm_ingot",1,
		"kubejs:arcanum_alloy_ingot",1,
		"ars_nouveau:air_essence",4
	)

	kiln("netherite_ingot",1,
		"wizards_reborn:arcane_gold_ingot",4,
		"netherite_scrap",4
	)
	

})