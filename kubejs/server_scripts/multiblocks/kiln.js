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

})