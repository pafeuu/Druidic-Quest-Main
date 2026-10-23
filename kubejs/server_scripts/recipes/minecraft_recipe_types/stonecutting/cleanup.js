

ServerEvents.recipes(event => {

	event.replaceInput({ input: "minecraft:stick" }, "minecraft:stick", "#c:rods/wooden")
	event.replaceInput({ input: "aether:skyroot_stick" }, "aether:skyroot_stick", "#c:rods/wooden")
	event.replaceInput({ input: "#aether:skyroot_stick" }, "#aether:skyroot_stick", "#c:rods/wooden")


	event.stonecutting("farmersdelight:potato_crate", "thermal:potato_block")
	event.stonecutting("farmersdelight:potato_crate", "quark:potato_crate")

	event.stonecutting("thermal:potato_block", "farmersdelight:potato_crate")
	event.stonecutting("thermal:potato_block", "quark:potato_crate")

	event.stonecutting("quark:potato_crate", "farmersdelight:potato_crate")
	event.stonecutting("quark:potato_crate", "thermal:potato_block")

	event.stonecutting("quark:beetroot_crate", "thermal:beetroot_block")
	event.stonecutting("quark:beetroot_crate", "farmersdelight:beetroot_crate")

	event.stonecutting("thermal:beetroot_block", "quark:beetroot_crate")
	event.stonecutting("thermal:beetroot_block", "farmersdelight:beetroot_crate")

	event.stonecutting("farmersdelight:beetroot_crate", "quark:beetroot_crate")
	event.stonecutting("farmersdelight:beetroot_crate", "thermal:beetroot_block")

	event.stonecutting("quark:apple_crate", "fruitsdelight:apple_crate")
	event.stonecutting("quark:apple_crate", "thermal:apple_block")

	event.stonecutting("thermal:apple_block", "fruitsdelight:apple_crate")
	event.stonecutting("thermal:apple_block", "quark:apple_crate")

	event.stonecutting("fruitsdelight:apple_crate", "quark:apple_crate")
	event.stonecutting("fruitsdelight:apple_crate", "thermal:apple_block")

	event.stonecutting("quark:carrot_crate", "farmersdelight:carrot_crate")
	event.stonecutting("quark:carrot_crate", "thermal:carrot_block")

	event.stonecutting("thermal:carrot_block", "farmersdelight:carrot_crate")
	event.stonecutting("thermal:carrot_block", "quark:carrot_crate")

	event.stonecutting("farmersdelight:carrot_crate", "quark:carrot_crate")
	event.stonecutting("farmersdelight:carrot_crate", "thermal:carrot_block")

	event.stonecutting("quark:sugar_cane_block", "thermal:sugar_cane_block")
	event.stonecutting("thermal:sugar_cane_block", "quark:sugar_cane_block")


	event.remove({ id: "quark:building/crafting/compressed/potato_crate" })
	event.remove({ id: "quark:tweaks/crafting/utility/misc/easy_sticks" })
	event.remove({ id: "thermal:storage/potato_block" })

	event.stonecutting("create:rose_quartz_block", "create:rose_quartz_tiles")
	event.stonecutting("create:rose_quartz_block", "create:small_rose_quartz_tiles")
	event.stonecutting("create:rose_quartz_tiles", "create:rose_quartz_block")
	event.stonecutting("create:small_rose_quartz_tiles", "create:rose_quartz_block")

	const WR_Pies = ["pitcher_turnip", "carrot", "mor", "elder_mor"]
	WR_Pies.forEach(id => {
		event.shapeless(`wizards_reborn:${id}_pie`, `4x wizards_reborn:${id}_pie_slice`).id(`wizards_reborn:shapeless/${id}_pie`)
	});

	event.shaped("9x biomeswevegone:tall_allium",
		[
			"B",
			"B"
		],
		{
			B: "biomeswevegone:allium_petal_block"
		}
	)

	event.shaped("9x biomeswevegone:tall_white_allium",
		[
			"B",
			"B"
		],
		{
			B: "biomeswevegone:white_allium_petal_block"
		}
	)

	event.shaped("9x biomeswevegone:tall_pink_allium",
		[
			"B",
			"B"
		],
		{
			B: "biomeswevegone:pink_allium_petal_block"
		}
	)

	event.custom({
		"type": "patchouli:shapeless_book_recipe",
		"ingredients": [
			{
				"item": "book"
			},
			{
				"item": "minecraft:rotten_flesh"
			}
		],
		"book": "patchouli:druidic_beastiary"
	})

	event.shaped("aether:nature_staff",
		[
			"G",
			"S"
		],
		{
			S: "#c:rods/wooden",
			G: "aether:zanite_gemstone"
		}
	).id("aether:nature_staff")

	event.shaped("4x aether:ambrosium_torch",
		[
			"G",
			"S"
		],
		{
			S: "#c:rods/wooden",
			G: "aether:ambrosium_shard"
		}
	).id("aether:ambrosium_torch")

	event.shaped("4x aether:golden_dart",
		[
			"G",
			"S",
			"F"
		],
		{
			S: "#c:rods/wooden",
			G: "aether:golden_amber",
			F: "feather"
		}
	).id("aether:golden_dart")



	//============================= Dusts

	global.thermalMetals.forEach(id => {
		event.custom(
			{
				"type": "create:milling",
				"ingredients": [
					{
						"tag": "forge:raw_materials/" + id
					}
				],
				"results": [
					{
						"item": "thermal:" + id + "_dust",
						"count": 1
					}
				],
				"processingTime": 100
			})/// Adds Dusts crafting recipes to the create machines

	});

	function metal(material) {

		event.custom(
			{
				"type": "create:milling",
				"ingredients": [
					{
						"tag": "forge:ingots/" + material
					}
				],
				"results": [
					{
						"item": "thermal:" + material + "_dust",
						"count": 1
					}
				],
				"processingTime": 100
			})/// Adds Dusts crafting recipes to the create machines
	}
	//-------------------Keys---------------------

	event.recipes.create.milling('kubejs:infused_diamond', 'kubejs:broken_key')
	event.recipes.create.milling(['kubejs:broken_key', "2x kubejs:infused_diamond"], 'kubejs:overworld_key')
	event.recipes.create.milling(['kubejs:broken_key', "2x thermal:sapphire"], 'kubejs:twilight_key')
	event.recipes.create.milling(['kubejs:broken_key', "2x thermal:ruby"], 'kubejs:nether_key')
	//-------------------Gears----------------------

	function CustomGears(material, id) {

		event.shaped(id,
			[
				"RPR",
				"PGP",
				"RPR"
			],
			{
				P: "#forge:plates/" + material,
				R: "#forge:rods/" + material,
				G: "druidic_quest_core:livingrock_gear"
			}
		)// Crafting Table recipe

	}

	function ThermalGears(material) {
		event.remove({ id: "thermal:parts/" + material + "_gear" })//removes original recipe
		event.shaped("thermal:" + material + "_gear",
			[
				"RPR",
				"PGP",
				"RPR"
			],
			{
				P: "#forge:plates/" + material,
				R: "#forge:rods/" + material,
				G: "druidic_quest_core:livingrock_gear"
			}
		)// Adds crafting recipes for gears from thermal
	}

	ThermalGears("iron")
	ThermalGears("gold")
	ThermalGears("copper")
	ThermalGears("netherite")
	ThermalGears("tin")
	ThermalGears("lead")
	ThermalGears("silver")
	ThermalGears("bronze")
	ThermalGears("nickel")
	CustomGears("steel", "druidic_quest_core:steel_gear")
	ThermalGears("electrum")
	ThermalGears("invar")
	ThermalGears("constantan")
	ThermalGears("signalum")
	ThermalGears("lumium")
	ThermalGears("enderium")
	ThermalGears("diamond")
	CustomGears("infused_iron", "kubejs:infused_iron_gear")
	CustomGears("manasteel", "druidic_quest_core:manasteel_gear")
	CustomGears("arcanum_alloy", "kubejs:arcanum_alloy_gear")
	CustomGears("platinum", "druidic_quest_core:platinum_gear")
	CustomGears("andesite_alloy", "kubejs:andesite_gear")
	CustomGears("zinc", "kubejs:zinc_gear")
	CustomGears("uranium", "druidic_quest_core:uranium_gear")
	CustomGears("ironwood", "kubejs:ironwood_gear")
	CustomGears("knightmetal", "kubejs:knightmetal_gear")
	CustomGears("arcane_gold", "kubejs:arcane_gold_gear")
	//CustomGears("drenched_iron","kubejs:drenched_iron_gear")
	//CustomGears("swift_alloy","kubejs:swift_alloy_gear")
	CustomGears("tainted_gold", "kubejs:tainted_gold_gear")
	CustomGears("sky", "kubejs:sky_gear")
	CustomGears("depth", "kubejs:depth_gear")
	CustomGears("brass", "kubejs:brass_gear")
	//CustomGears("fireite","kubejs:fireite_gear")
	CustomGears("fiery", "kubejs:fiery_gear")
	CustomGears("storm", "kubejs:storm_gear")


	

	//-------------------Plates---------------------

	



	//-------------------Coins---------------------
	event.shapeless('thermal:silver_coin', ['9x thermal:copper_coin'])
	event.shapeless('thermal:gold_coin', ['9x thermal:silver_coin'])
	event.shapeless('thermal:netherite_coin', ['9x thermal:gold_coin'])
	event.shapeless('thermal:enderium_coin', ['9x thermal:netherite_coin'])

	event.shapeless('9x thermal:copper_coin', ['thermal:silver_coin'])
	event.shapeless('9x thermal:silver_coin', ['thermal:gold_coin'])
	event.shapeless('9x thermal:gold_coin', ['thermal:netherite_coin'])
	event.shapeless('9x thermal:netherite_coin', ['thermal:enderium_coin'])

	metal('enderium')
	metal('invar')
	metal('bronze')
	metal('electrum')
	metal('constantan')
	metal('signalum')
	metal('lumium')
	event.remove({ output: 'thermal:press_coin_die' })


	///=======================================Building blocks=======================================///


	event.shaped("2x druidic_quest_core:polished_planks",
		[
			"PX",
			"XP"
		],
		{
			P: "#minecraft:planks",
			X: "#forge:rods/wooden"
		}
	)

	event.shaped("2x druidic_quest_core:stacked_planks",
		[
			"PP",
			"PP"
		],
		{
			P: "#minecraft:wooden_slabs",
		}
	)

	event.shaped("druidic_quest_core:packed_planks",
		[
			"SPS",
			"PPP",
			"SPS"
		],
		{
			P: "#minecraft:planks",
			S: "#forge:rods/wooden"
		})


	event.remove({ id: 'supplementaries:timber_frame' })
	event.shaped(
		Item.of('4x supplementaries:timber_frame'),
		[
			'CCC',
			'C C',
			'CCC',
		],
		{
			C: 'stick'
		}
	)

	wood_TF.forEach(type => {

		event.shaped("twilightforest:" + type + "_chest",
			[
				"XXX",
				"X X",
				"XXX"
			],
			{ X: "twilightforest:" + type + "_planks" }
		).id("twilightforest:wood/" + type + "_chest")
	});



	event.shaped("supplementaries:item_shelf",
		[
			"S S",
			"PPP"
		],
		{ S: "#forge:rods/wooden", P: "minecraft:planks" }
	).id("supplementaries:item_shelf")
	
	event.shapeless("twigs:mossy_bricks", "immersive_weathering:mossy_bricks")

	event.shaped("8x twigs:gravel_bricks",
		[
			"GGG",
			"GXG",
			"GGG"
		],
		{
			G: "#forge:gravel",
			X: "kubejs:brick_glue"
		}
	).damageIngredient("kubejs:brick_glue", 8).id("twigs:gravel_bricks")

	event.shapeless("quark:mossy_cobblestone_bricks", "twigs:mossy_cobblestone_bricks").id("quark:building/crafting/mossy_cobblestone_bricks")

	event.shapeless("twigs:cobblestone_bricks", "quark:cobblestone_bricks").id("twigs:cobblestone_bricks")
	event.shapeless("quark:cobblestone_bricks", "twigs:cobblestone_bricks")
	event.shapeless("twigs:gravel_bricks", "supplementaries:gravel_bricks")
	event.shapeless("supplementaries:gravel_bricks", "twigs:gravel_bricks").id("supplementaries:gravel_bricks")

	event.shapeless("minecraft:yellow_dye", ["naturesaura:aura_bloom"])

	event.shapeless("irons_spellbooks:wizard_hat", "irons_spellbooks:wizard_helmet").id("irons_spellbooks:wizard_helmet_hat")
	event.shapeless("irons_spellbooks:wizard_helmet", "irons_spellbooks:wizard_hat")

	//============================= Shapeshifting Root

	event.forEachRecipe({ output: "#wizards_reborn:luminal_glass" }, r => {

		let ingredients = r.originalRecipeIngredients
		let output = r.originalRecipeResult

		event.shaped("8x " + output.id,
			[
				"GGG",
				"GXG",
				"GGG"
			],
			{
				G: ingredients[0].itemIds[0],
				X: ingredients[4].itemIds[0]
			}
		).id(r.getId())
	})



})

