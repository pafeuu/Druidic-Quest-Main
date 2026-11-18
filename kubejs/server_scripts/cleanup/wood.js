ServerEvents.recipes(event => {

	function SlabsAndStairs(mod, woodtype) {
		event.custom({
			type: "sawmill:woodcutting",
			count: 2,
			ingredient: {
				item: mod + ":" + woodtype + "_planks"
			},
			result: mod + ":" + woodtype + "_slab"
		})

		event.shaped(mod + ":" + woodtype + "_planks", ["S", "S"], { S: mod + ":" + woodtype + "_slab" })

		event.custom({
			type: "sawmill:woodcutting",
			count: 1,
			ingredient: {
				item: mod + ":" + woodtype + "_planks"
			},
			result: mod + ":" + woodtype + "_stairs"
		})

		event.remove({ output: mod + ":" + woodtype + "_stairs", type: "minecraft:crafting_shaped" })
		event.remove({ output: mod + ":" + woodtype + "_slab", type: "minecraft:crafting_shaped" })

		event.shaped("3x " + mod + ":" + woodtype + "_stairs",
			[
				"SP",
				"PP"
			],
			{
				P: mod + ":" + woodtype + "_planks",
				S: "#forge:tools/saws"
			}
		).damageIngredient("#forge:tools/saws", 1)

		event.shaped("2x " + mod + ":" + woodtype + "_slab",
			[
				"S",
				"P"
			],
			{
				P: mod + ":" + woodtype + "_planks",
				S: "#forge:tools/saws"
			}
		).damageIngredient("#forge:tools/saws", 1)
	}

	function QuarkSlabsAndStairs(mod, woodtype) {
		event.custom({
			type: "sawmill:woodcutting",
			count: 2,
			ingredient: {
				item: mod + ":" + woodtype + "_planks"
			},
			result: mod + ":" + woodtype + "_planks_slab"
		})

		event.shaped(mod + ":" + woodtype + "_planks", ["S", "S"], { S: mod + ":" + woodtype + "_planks_slab" })

		event.custom({
			type: "sawmill:woodcutting",
			count: 1,
			ingredient: {
				item: mod + ":" + woodtype + "_planks"
			},
			result: mod + ":" + woodtype + "_planks_stairs"
		})

		event.remove({ output: mod + ":" + woodtype + "_planks_stairs", type: "minecraft:crafting_shaped" })
		event.remove({ output: mod + ":" + woodtype + "_planks_slab", type: "minecraft:crafting_shaped" })

		event.shaped("3x " + mod + ":" + woodtype + "_planks_stairs",
			[
				"SP",
				"PP"
			],
			{
				P: mod + ":" + woodtype + "_planks",
				S: "#forge:tools/saws"
			}
		).damageIngredient("#forge:tools/saws", 1)

		event.shaped("2x " + mod + ":" + woodtype + "_planks_slab",
			[
				"S",
				"P"
			],
			{
				P: mod + ":" + woodtype + "_planks",
				S: "#forge:tools/saws"
			}
		).damageIngredient("#forge:tools/saws", 1)
	}

	function CuttingLogs(planks, log)// Ghost Recipes just for EMI display real recipes in WoodCutting.js
	{
		event.custom({
			"type": "lychee:block_interacting",
			"ghost": true,
			"post": [
				{
					"type": "place",
					"block": "minecraft:air"
				},
				{
					"type": "damage_item",
					"damage": 1
				},
				{
					"type": "drop_item",
					"item": planks,
					"count": 1
				}
			],
			"item_in": [
				{
					"tag": "forge:tools/axes"
				},
				{
					"item": log
				}
			],
			"block_in": "air"
		})// Adds recipe for planks > Clicking stripped logs with an axe will drop 1 plank and remove the block

		event.custom({
			"type": "lychee:block_interacting",
			"ghost": true,
			"post": [
				{
					"type": "place",
					"block": "minecraft:air"
				},
				{
					"type": "damage_item",
					"damage": 1
				},
				{
					"type": "drop_item",
					"item": planks,
					"count": 3
				},
			],
			"item_in": [
				{
					"tag": "forge:tools/saws"
				},
				{
					"item": log
				}
			],
			"block_in": "air"
		})// Adds recipe for planks > Clicking stripped logs with a sam will drop 3 planks and remove the block

		const NonStrippedLog = log.replace("stripped_", "");

		event.custom({
			type: "sawmill:woodcutting",
			count: 3,
			ingredient: {
				item: log
			},
			result: planks
		})

		event.custom({
			type: "sawmill:woodcutting",
			count: 3,
			ingredient: {
				item: NonStrippedLog
			},
			result: planks
		})

		event.recipes.farmersdelight.cutting(log, "#minecraft:axes", Item.of(planks, 2))

		event.remove({ output: planks, type: "minecraft:crafting_shapeless" }) // Removes default shapeless recipe recipe
	}
	CuttingLogs("minecraft:pale_oak_planks", "minecraft:stripped_pale_oak_log")
	CuttingLogs("minecraft:oak_planks", "minecraft:stripped_oak_log")
	CuttingLogs("minecraft:spruce_planks", "minecraft:stripped_spruce_log")
	CuttingLogs("minecraft:birch_planks", "minecraft:stripped_birch_log")
	CuttingLogs("minecraft:jungle_planks", "minecraft:stripped_jungle_log")
	CuttingLogs("minecraft:acacia_planks", "minecraft:stripped_acacia_log")
	CuttingLogs("minecraft:dark_oak_planks", "minecraft:stripped_dark_oak_log")
	CuttingLogs("minecraft:crimson_planks", "minecraft:stripped_crimson_stem")
	CuttingLogs("minecraft:warped_planks", "minecraft:stripped_warped_stem")
	CuttingLogs("minecraft:mangrove_planks", "minecraft:stripped_mangrove_log")
	CuttingLogs("minecraft:cherry_planks", "minecraft:stripped_cherry_log")
	CuttingLogs("minecraft:bamboo_planks", "minecraft:stripped_bamboo_block")
	CuttingLogs("ancient_aether:highsproot_planks", "ancient_aether:stripped_highsproot_log")
	CuttingLogs("ancient_aether:sakura_planks", "ancient_aether:stripped_sakura_log")
	CuttingLogs("deep_aether:yagroot_planks", "deep_aether:stripped_yagroot_log")
	CuttingLogs("deep_aether:cruderoot_planks", "deep_aether:stripped_cruderoot_log")
	CuttingLogs("deep_aether:conberry_planks", "deep_aether:stripped_conberry_log")
	CuttingLogs("deep_aether:sunroot_planks", "deep_aether:stripped_sunroot_log")
	CuttingLogs("deep_aether:roseroot_planks", "deep_aether:stripped_roseroot_log")
	CuttingLogs("mynethersdelight:powdery_planks", "mynethersdelight:stripped_powdery_block")
	CuttingLogs("quark:ancient_planks", "quark:stripped_ancient_log")
	CuttingLogs("quark:azalea_planks", "quark:stripped_azalea_log")
	CuttingLogs("quark:blossom_planks", "quark:stripped_blossom_log")
	CuttingLogs("aether:skyroot_planks", "aether:stripped_skyroot_log")
	CuttingLogs("twilightforest:twilight_oak_planks", "twilightforest:stripped_twilight_oak_log")
	CuttingLogs("twilightforest:canopy_planks", "twilightforest:stripped_canopy_log")
	CuttingLogs("twilightforest:mangrove_planks", "twilightforest:stripped_mangrove_log")
	CuttingLogs("twilightforest:dark_planks", "twilightforest:stripped_dark_log")
	CuttingLogs("twilightforest:transformation_planks", "twilightforest:stripped_transformation_log")
	CuttingLogs("twilightforest:mining_planks", "twilightforest:stripped_mining_log")
	CuttingLogs("twilightforest:sorting_planks", "twilightforest:stripped_sorting_log")
	CuttingLogs("twilightforest:time_planks", "twilightforest:stripped_time_log")
	CuttingLogs("thermal:rubberwood_planks", "thermal:stripped_rubberwood_log")
	CuttingLogs("ars_nouveau:archwood_planks", "ars_nouveau:stripped_blue_archwood_log")
	CuttingLogs("ars_nouveau:archwood_planks", "ars_nouveau:stripped_green_archwood_log")
	CuttingLogs("ars_nouveau:archwood_planks", "ars_nouveau:stripped_red_archwood_log")
	CuttingLogs("ars_nouveau:archwood_planks", "ars_nouveau:stripped_purple_archwood_log")
	CuttingLogs("wizards_reborn:innocent_wood_planks", "wizards_reborn:stripped_innocent_wood_log")
	CuttingLogs("wizards_reborn:arcane_wood_planks", "wizards_reborn:stripped_arcane_wood_log")
	
	let naturesSpiritWoodTypes = [
		"redwood",
		"joshua",
		"sugi",
		"wisteria",
		"fir",
		"willow",
		"aspen",
		"maple",
		"cypress",
		"olive",
		"ghaf",
		"palo_verde",
		"coconut",
		"cedar",
		"larch",
		"mahogany",
		"saxaul"
	]
	naturesSpiritWoodTypes.forEach(woodType => {
		CuttingLogs(`natures_spirit:${woodType}_planks`,`natures_spirit:stripped_${woodType}_log`)
		if(woodType=="joshua")
			return;
		CuttingLogs(`natures_spirit:${woodType}_planks`,`natures_spirit:stripped_${woodType}_wood`)
	});



	CuttingLogs("minecraft:oak_planks", "minecraft:stripped_oak_wood")
	CuttingLogs("minecraft:spruce_planks", "minecraft:stripped_spruce_wood")
	CuttingLogs("minecraft:birch_planks", "minecraft:stripped_birch_wood")
	CuttingLogs("minecraft:jungle_planks", "minecraft:stripped_jungle_wood")
	CuttingLogs("minecraft:acacia_planks", "minecraft:stripped_acacia_wood")
	CuttingLogs("minecraft:dark_oak_planks", "minecraft:stripped_dark_oak_wood")
	CuttingLogs("minecraft:crimson_planks", "minecraft:stripped_crimson_stem")
	CuttingLogs("minecraft:warped_planks", "minecraft:stripped_warped_stem")
	CuttingLogs("mangrove_planks", "stripped_mangrove_wood")
	CuttingLogs("cherry_planks", "stripped_cherry_wood")
	CuttingLogs("ancient_aether:highsproot_planks", "ancient_aether:stripped_highsproot_wood")
	CuttingLogs("ancient_aether:sakura_planks", "ancient_aether:stripped_sakura_wood")
	CuttingLogs("deep_aether:yagroot_planks", "deep_aether:stripped_yagroot_wood")
	CuttingLogs("deep_aether:cruderoot_planks", "deep_aether:stripped_cruderoot_wood")
	CuttingLogs("deep_aether:conberry_planks", "deep_aether:stripped_conberry_wood")
	CuttingLogs("deep_aether:sunroot_planks", "deep_aether:stripped_sunroot_wood")
	CuttingLogs("deep_aether:roseroot_planks", "deep_aether:stripped_roseroot_wood")

	CuttingLogs("quark:ancient_planks", "quark:stripped_ancient_wood")
	CuttingLogs("quark:azalea_planks", "quark:stripped_azalea_wood")
	CuttingLogs("quark:blossom_planks", "quark:stripped_blossom_wood")
	CuttingLogs("aether:skyroot_planks", "aether:stripped_skyroot_wood")
	CuttingLogs("twilightforest:twilight_oak_planks", "twilightforest:stripped_twilight_oak_wood")
	CuttingLogs("twilightforest:canopy_planks", "twilightforest:stripped_canopy_wood")
	CuttingLogs("twilightforest:mangrove_planks", "twilightforest:stripped_mangrove_wood")
	CuttingLogs("twilightforest:dark_planks", "twilightforest:stripped_dark_wood")
	CuttingLogs("twilightforest:transformation_planks", "twilightforest:stripped_transformation_wood")
	CuttingLogs("twilightforest:mining_planks", "twilightforest:stripped_mining_wood")
	CuttingLogs("twilightforest:sorting_planks", "twilightforest:stripped_sorting_wood")
	CuttingLogs("twilightforest:time_planks", "twilightforest:stripped_time_wood")
	CuttingLogs("thermal:rubberwood_planks", "thermal:stripped_rubberwood_wood")
	CuttingLogs("ars_nouveau:archwood_planks", "ars_nouveau:stripped_blue_archwood_wood")
	CuttingLogs("ars_nouveau:archwood_planks", "ars_nouveau:stripped_green_archwood_wood")
	CuttingLogs("ars_nouveau:archwood_planks", "ars_nouveau:stripped_red_archwood_wood")
	CuttingLogs("ars_nouveau:archwood_planks", "ars_nouveau:stripped_purple_archwood_wood")
	CuttingLogs("wizards_reborn:innocent_wood_planks", "wizards_reborn:stripped_innocent_wood")
	CuttingLogs("wizards_reborn:arcane_wood_planks", "wizards_reborn:stripped_arcane_wood")
	CuttingLogs("naturesaura:ancient_planks", "naturesaura:stripped_ancient_log")
	CuttingLogs("naturesaura:ancient_planks", "naturesaura:stripped_ancient_bark")
	CuttingLogs("wizards_reborn:cork_bamboo_planks", "wizards_reborn:cork_bamboo_block")

	SlabsAndStairs("minecraft","pale_oak")
	SlabsAndStairs("minecraft", "oak")
	SlabsAndStairs("minecraft", "spruce")
	SlabsAndStairs("minecraft", "birch")
	SlabsAndStairs("minecraft", "jungle")
	SlabsAndStairs("minecraft", "acacia")
	SlabsAndStairs("minecraft", "dark_oak")
	SlabsAndStairs("minecraft", "crimson")
	SlabsAndStairs("minecraft", "warped")
	SlabsAndStairs("minecraft", "mangrove")
	SlabsAndStairs("minecraft", "cherry")
	SlabsAndStairs("minecraft", "bamboo")
	SlabsAndStairs("ancient_aether", "highsproot")
	SlabsAndStairs("ancient_aether", "sakura")
	SlabsAndStairs("deep_aether", "yagroot")
	SlabsAndStairs("deep_aether", "cruderoot")
	SlabsAndStairs("deep_aether", "conberry")
	SlabsAndStairs("deep_aether", "sunroot")
	SlabsAndStairs("deep_aether", "roseroot")
	SlabsAndStairs("mynethersdelight", "powdery")
	QuarkSlabsAndStairs("quark", "ancient")
	QuarkSlabsAndStairs("quark", "azalea")
	QuarkSlabsAndStairs("quark", "blossom")
	SlabsAndStairs("aether", "skyroot")
	SlabsAndStairs("twilightforest", "twilight_oak")
	SlabsAndStairs("twilightforest", "canopy")
	SlabsAndStairs("twilightforest", "mangrove")
	SlabsAndStairs("twilightforest", "dark")
	SlabsAndStairs("twilightforest", "transformation")
	SlabsAndStairs("twilightforest", "mining")
	SlabsAndStairs("twilightforest", "sorting")
	SlabsAndStairs("twilightforest", "time")
	SlabsAndStairs("thermal", "rubberwood")
	SlabsAndStairs("ars_nouveau", "archwood")
	SlabsAndStairs("wizards_reborn", "innocent_wood")
	SlabsAndStairs("wizards_reborn", "arcane_wood")
	SlabsAndStairs("natures_spirit", "redwood")
	SlabsAndStairs("natures_spirit", "sugi")
	SlabsAndStairs("natures_spirit", "wisteria")
	SlabsAndStairs("natures_spirit", "fir")
	SlabsAndStairs("natures_spirit", "willow")
	SlabsAndStairs("natures_spirit", "aspen")
	SlabsAndStairs("natures_spirit", "maple")
	SlabsAndStairs("natures_spirit", "cypress")
	SlabsAndStairs("natures_spirit", "olive")
	SlabsAndStairs("natures_spirit", "joshua")
	SlabsAndStairs("naturesaura", "ancient")
	SlabsAndStairs("wizards_reborn", "cork_bamboo")
	SlabsAndStairs("wizards_reborn", "cork_bamboo_chiseled")


	// WR torches and campfires

	function WizardsTorch(type, plank) {
		event.shaped("6x wizards_reborn:" + type + "_salt_torch",
			[
				"S",
				"C",
				"P"
			],
			{
				P: "wizards_reborn:" + plank,
				C: "#minecraft:coals",
				S: "#forge:salt"
			}
		)

		event.shaped("12x wizards_reborn:" + type + "_salt_torch",
			[
				"S",
				"C",
				"P"
			],
			{
				P: "wizards_reborn:" + plank,
				C: "#forge:coal_coke",
				S: "#forge:salt"
			}
		)

		event.shaped("wizards_reborn:" + type + "_salt_campfire",
			[
				"S",
				"C",
				"P"
			],
			{
				P: "wizards_reborn:" + plank,
				C: "campfire",
				S: "#forge:salt"
			}
		)

		event.remove({ id: "wizards_reborn:shaped/" + type + "_salt_torch" })
		event.remove({ id: "wizards_reborn:shaped/" + type + "_salt_campfire" })
		event.replaceInput({ id: "wizards_reborn:shaped/" + type + "_salt_lantern" }, "wizards_reborn:arcane_gold_nugget", "gold_nugget")
	}

	

	WizardsTorch("arcane", "arcane_wood_planks")
	WizardsTorch("innocent", "innocent_wood_planks")
	WizardsTorch("cork_bamboo", "cork_bamboo_planks")
	WizardsTorch("wisestone", "wisestone")


	const wizardwood = ["arcane_wood", "innocent_wood", "cork_bamboo"]

	wizardwood.forEach(id => {

		event.shaped("wizards_reborn:" + id + "_frame",
			[
				"SNS",
				"N N",
				"SNS"
			],
			{
				S: "wizards_reborn:" + id + "_slab",
				N: "#forge:nuggets/gold"

			}
		).id("wizards_reborn:arcane_workbench/" + id + "_frame")

		event.shaped("6x wizards_reborn:"+id+"_planks_baulk",
			[
				"  S",
				" S ",
				"S  "
			],
			{
				S: "wizards_reborn:" + id + "_planks"

			}
		).id("wizards_reborn:shaped/"+id+"_planks_baulk")

		event.shapeless("wizards_reborn:" + id + "_casing", ["wizards_reborn:" + id + "_frame", "wizards_reborn:" + id + "_planks"]).id("wizards_reborn:arcane_workbench/" + id + "_casing")

		event.shapeless("wizards_reborn:" + id + "_glass_frame", ["wizards_reborn:" + id + "_frame", "wizards_reborn:alchemy_glass"]).id("wizards_reborn:arcane_workbench/" + id + "_glass_frame")

		event.shaped("wizards_reborn:" + id + "_wissen_casing",
			[
				" N ",
				"NXN",
				" N "
			],
			{
				X: "wizards_reborn:" + id + "_casing",
				N: "wizards_reborn:wissen_translator"

			}
		).id("wizards_reborn:arcane_workbench/" + id + "_wissen_casing")

		event.shaped("wizards_reborn:" + id + "_light_casing",
			[
				" N ",
				"NXN",
				" N "
			],
			{
				X: "wizards_reborn:" + id + "_casing",
				N: "wizards_reborn:light_transfer_lens"

			}
		).id("wizards_reborn:arcane_workbench/" + id + "_light_casing")

		event.shaped("wizards_reborn:" + id + "_steam_casing",
			[
				" N ",
				"NXN",
				" N "
			],
			{
				X: "wizards_reborn:" + id + "_casing",
				N: "wizards_reborn:steam_pipe"

			}
		).id("wizards_reborn:arcane_workbench/" + id + "_steam_casing")


		event.shaped("wizards_reborn:" + id + "_fluid_casing",
			[
				" N ",
				"NXN",
				" N "
			],
			{
				X: "wizards_reborn:" + id + "_casing",
				N: "wizards_reborn:fluid_pipe"

			}
		).id(`wizards_reborn:arcane_workbench/${id}_fluid_casing`)
	});

	event.shaped("wizards_reborn:wisestone_fluid_casing",
			[
				" N ",
				"NXN",
				" N "
			],
			{
				X: "wizards_reborn:wisestone_casing",
				N: "wizards_reborn:fluid_pipe"

			}
		).id(`wizards_reborn:arcane_workbench/wisestone_fluid_casing`)

	//event.shaped("6x wizards_reborn:arcane_salt_torch")

	event.forEachRecipe({ input: "#minecraft:planks", output: "#minecraft:wooden_trapdoors", type: "minecraft:crafting_shaped" }, r => {

		const archwoodColors = ["blue", "purple", "red"]
		let ingredients = r.originalRecipeIngredients

		//console.log("trapdoor ingredients:"+ingredients[0].itemIds[0])

		let plank = ingredients[0].itemIds[0]
		let slab = plank.replace("_planks", "_slab")

		let trapdoor = r.originalRecipeResult.id
		let door = trapdoor.replace("_trapdoor", "_door")
		let log = plank.replace("_planks", "_log")

		if (slab == "quark:ancient_slab" || slab == "quark:azalea_slab" || slab == "quark:blossom_slab")
			slab = slab.replace("_slab", "_planks_slab")

		event.shaped(trapdoor,
			[
				"S",
				"P"
			],
			{
				S: "#forge:tools/saws",
				P: slab
			}
		).damageIngredient("#forge:tools/saws", 1).id(trapdoor + "_from_slabs")

		event.shapeless("2x " + trapdoor, door)

		event.shaped(door,
			[
				"P",
				"P",
			],
			{
				P: trapdoor
			}
		).damageIngredient("#forge:tools/saws", 1).id(door + "_from_trapdoors")
		if (log == "minecraft:warped_log" || log == "minecraft:crimson_log")
			log = log.replace("_log", "_stem")
		if (log == "minecraft:bamboo_log" || log == "mynethersdelight:powdery_log" || log == "wizards_reborn:cork_bamboo_log")
			log = log.replace("_log", "_block")

		if (log == "ars_nouveau:archwood_log") {

			archwoodColors.forEach(color => {
				log = log.replace("archwood", color + "_archwood")
				event.custom({
					type: "sawmill:woodcutting",
					count: 6,
					ingredient_count: 2,
					ingredient: {
						item: log
					},
					result: trapdoor
				})

				event.custom({
					type: "sawmill:woodcutting",
					count: 3,
					ingredient_count: 2,
					ingredient: {
						item: log
					},
					result: door
				})

				log = log.replace(color + "_archwood", "archwood")
			});
		}
		else {
			event.custom({
				type: "sawmill:woodcutting",
				count: 6,
				ingredient_count: 1,
				ingredient: {
					item: log
				},
				result: trapdoor
			})

			event.custom({
				type: "sawmill:woodcutting",
				count: 3,
				ingredient_count: 1,
				ingredient: {
					item: log
				},
				result: door
			})
		}


		event.custom({
			type: "sawmill:woodcutting",
			count: 2,
			ingredient: {
				item: plank
			},
			result: trapdoor
		})

		event.custom({
			type: "sawmill:woodcutting",
			count: 1,
			ingredient: {
				item: plank
			},
			result: door
		})

		event.custom({
			type: "sawmill:woodcutting",
			count: 1,
			ingredient: {
				item: slab
			},
			result: trapdoor
		})

		event.custom({
			type: "sawmill:woodcutting",
			count: 2,
			ingredient: {
				item: slab
			},
			result: door
		})

		event.remove({ output: door })
		event.remove({ output: trapdoor })

	})

	const aetherPlanks = [
		"aether:skyroot_planks",
		"deep_aether:roseroot_planks",
		"deep_aether:yagroot_planks",
		"ancient_aether:highsproot_planks",
		"ancient_aether:sakura_planks",
		"deep_aether:sunroot_planks",
		"deep_aether:cruderoot_planks",
		"deep_aether:conberry_planks"
	]

	aetherPlanks.forEach(id => {

		const fence = id.replace("planks", "fence")
		const fenceGate = id.replace("planks", "fence_gate")

		event.shaped(fenceGate,
			[
				"SPS",
				"SPS"
			],
			{
				P: id,
				S: "#c:rods/wooden"
			}).id(fenceGate)

		event.shaped("3x " + fence,
			[
				"PSP",
				"PSP"
			],
			{
				P: id,
				S: "#c:rods/wooden"
			}).id(fence)



	});

	event.shaped("naturesaura:ancient_stick",["L "," L"],{L:"#forge:ancient_wood"})
	event.shaped("naturesaura:ancient_stick",["L","L"],{L:"#forge:ancient_wood"}).id("naturesaura:ancient_stick")
	
	const goldKegMaterials = ["cork_bamboo","innocent_wood","arcane_wood"]

	goldKegMaterials.forEach(woodType => {

		event.shaped(`wizards_reborn:${woodType}_keg`,
			[
				"PSP",
				"PGP",
				"PSP"
			],
			{
				G: "#forge:nuggets/gold",
				P: `wizards_reborn:${woodType}_planks`,
				S: `wizards_reborn:${woodType}_slab`
			}
		).id(`wizards_reborn:arcane_workbench/${woodType}_keg`)
		
	});


})