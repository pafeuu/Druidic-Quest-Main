ServerEvents.recipes(event=>{

    event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			base_ingredient: {
				item: "forbidden_arcanus:mundabitur_dust"
			},
			count: 4
		  },
		  "input1": {
            base_ingredient: {
			item: "naturesaura:tainted_gold"
            },
            count: 2
		  },
		  "result": {
			"base_ingredient": {
			  item: "wizards_reborn:arcane_gold_ingot"
			},
			"count": 2
		  },
		  "time": 200
	}).id("forbidden_arcanus:deorum_ingot")

    event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			base_ingredient: {
				item: "kubejs:ender_essence"
			},
			count: 4
		  },
		  "input1": {
			tag: "forge:ingots/lead"
		  },
		  "result": {
			"base_ingredient": {
			  item: "thermal:enderium_ingot"
			},
			"count": 1
		  },
		  "time": 200
	}).id("thermal:machines/smelter/smelter_alloy_enderium")

	event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			base_ingredient: {
				item: "kubejs:light_essence"
			},
			count: 4
		  },
		  "input1": {
			tag: "forge:ingots/enderium"
		  },
		  "result": {
			"base_ingredient": {
			  item: "thermal:lumium_ingot"
			},
			"count": 1
		  },
		  "time": 200
	}).id("thermal:machines/smelter/smelter_alloy_lumium")

	event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			tag: "twilightforest:fiery_vial"
		  },
		  "input1": {
			item: "kubejs:inert_alloy_ingot"
		  },
		  "result": {
			"base_ingredient": {
			  item: "twilightforest:fiery_ingot"
			},
			"count": 1
		  },
		  "time": 200	
	}).id("twilightforest:equipment/fiery_ingot_crafting")

	event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			base_ingredient: {
				item: "ars_nouveau:fire_essence"
			},
			count: 4
		  },
		  "input1": {
			item: "twilightforest:fiery_tears"
		  },
		  "result": {
			"base_ingredient": {
			  item: "twilightforest:fiery_tears"
			},
			"count": 2
		  },
		  "time": 800	
	})

	event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			base_ingredient: {
				item: "ars_nouveau:fire_essence"
			},
			count: 4
		  },
		  "input1": {
			item: "twilightforest:fiery_blood"
		  },
		  "result": {
			"base_ingredient": {
			  item: "twilightforest:fiery_blood"
			},
			"count": 2
		  },
		  "time": 800	
	})

    event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			base_ingredient: {
				item: "ars_nouveau:source_gem"
			},
			count: 3
		  },
		  "input1": {
			base_ingredient: {
				tag: "forge:ingots/gold"
			},
			count: 2,
		  },
		   
		  "result": {
			"base_ingredient": {
			  item: "kubejs:source_alloy_ingot"
			},
			"count": 2
		  },
		  "time": 800	
	})

	event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			base_ingredient: {
				item: "wizards_reborn:arcanum"
			},
			count: 3
		  },
		  "input1": {
			base_ingredient: {
				tag: "forge:ingots/iron"
			},
			count: 2,
		  },
		   
		  "result": {
			"base_ingredient": {
			  item: "kubejs:arcanum_alloy_ingot"
			},
			"count": 2
		  },
		  "time": 800	
	})

    event.remove({output:'create:andesite_alloy'})
	event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			item: "kubejs:natural_clay_blend"
		  },
		  "input1": {
			item: "minecraft:andesite"
		  },
		  "result": {
			"base_ingredient": {
			  item: "create:andesite_alloy"
			},
			"count": 2
		  },
		  "time": 200
		
	})

	event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			item: "ars_nouveau:water_essence"
		  },
		  "input1": {
			item: "kubejs:arcanum_alloy_ingot"
		  },
		  "result": {
			"base_ingredient": {
			  item: "kubejs:aquatic_ingot"
			},
			"count": 2
		  },
		  "time": 200
	})

    event.custom({
		type: "immersiveengineering:alloy",
		  "input0": {
			base_ingredient: {
				tag: "twilightforest:fiery_vial"
			},
			count: 2
		  },
		  "input1": {
			base_ingredient: {
				item: "kubejs:arcanum_alloy_ingot"
			},
			count: 1,
		  },
		   
		  "result": {
			"base_ingredient": {
			  item: "twilightforest:fiery_ingot"
			},
			"count": 1
		  },
		  "time": 800	
	}).id("twilightforest:equipment/fiery_ingot_crafting")

})