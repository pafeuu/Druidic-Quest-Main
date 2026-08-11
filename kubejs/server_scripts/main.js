const colors = ['red', 'blue', 'white', 'gray', 'light_gray', 'black', 'purple', 'magenta', 'yellow', 'green', 'lime', 'light_blue', 'cyan', 'orange', 'pink', 'brown']

const metals = ['tin', 'silver', 'lead', 'gold', 'iron', 'copper', 'nickel', 'zinc', 'aluminum']

const wood = ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', "crimson", "warped", "cherry", "bamboo", "mangrove"]

const wood_TF = ['canopy', 'mangrove', 'twilight_oak', 'time', 'transformation', 'mining', 'sorting', 'dark']

const wood_BWG = ['aspen', 'baobab', 'blue_enchanted', 'green_enchanted', 'cika', 'cypress', 'ebony', 'fir', 'florus', 'holly', 'ironwood', 'jacaranda', 'mahogany', 'maple', 'palm',
	'pine', 'rainbow_eucalyptus', 'redwood', 'sakura', 'skyris', 'white_mangrove', 'willow', 'witch_hazel', 'zelkova'
]

const wood_DA = ["sunroot", "conberry", "yagroot", "cruderoot", "roseroot"]

const wood_AA = ["sakura", "highsproot"]

const wood_quark = ["blossom", "ancient", "azalea"]

const wood_WR = ["arcane_wood", "innocent_wood"]

const alloys = ['bronze', 'enderium', 'brass', 'invar', 'rose_gold', 'constantan', 'signalum', 'lumium']

ServerEvents.recipes(event => {

	event.remove({ id: "enigmaticlegacy:thicc_scroll" });
	event.remove({ id: "explorerscompass:explorers_compass" });
	event.remove({ id: 'ars_nouveau:potion_flask' })
	event.remove({ mod: 'waystones' })
	/*event.remove({output:'#minecraft:axes'})
	event.remove({output:'#minecraft:pickaxes'})
	event.remove({output:'#minecraft:shovels'})
	event.remove({output:'#minecraft:hoes'})
	event.remove({output:'#minecraft:swords'})*/

	event.replaceInput({ mod: 'ars_nouveau', not: [{ type: "minecraft:stonecutting" }, { id: "ars_nouveau:sourcestone_sconce" }] }, 'ars_nouveau:sourcestone', 'kubejs:source_alloy_ingot')

	event.replaceInput({ id: "immersiveengineering:crafting/gunpowder_from_dusts" }, "immersiveengineering:dust_saltpeter", "bone_meal")
	event.replaceInput({ mod: 'crafting_on_a_stick' }, 'minecraft:stick', 'kubejs:zinc_tool_handle')
	event.shapeless("2x minecraft:rooted_dirt", ["minecraft:dirt", "minecraft:mangrove_roots"])
	event.shapeless("minecraft:rooted_dirt", ["minecraft:dirt", "minecraft:hanging_roots"])


	event.custom({
		type: "lychee:block_interacting",
		item_in: { tag: "forge:tools/knives" },
		block_in: "farmersdelight:onion_crate",
		post: [
			{ type: "place", block: "air" },
			{ type: "drop_item", item: "kubejs:cut_onions", "count": 3 },
			{ type: "damage_item", damage: 9 },
			{ type: "hurt", damage: 2, hide: true },
			{ type: "execute", command: "playsound farmersdelight:block.cutting_board.knife neutral @p", hide: true }
		]
	})

	event.custom({
		type: "lychee:block_interacting",
		item_in: { tag: "forge:tools/knives" },
		block_in: "minecraft:bone_block",
		post: [
			{ type: "place", block: "minecraft:skeleton_skull" },
			{ type: "damage_item", damage: 1 },
			{ type: "execute", command: "playsound farmersdelight:block.cutting_board.knife neutral @p", hide: true }
		]
	})

	/// ======================================================================= Tier 0 Machines ========================================================================
	event.shaped("minecraft:campfire",
		[
			" S ",
			"SCS",
			"LLL"
		],
		{
			S: "#c:rods/wooden",
			C: "#minecraft:coals",
			L: "#minecraft:logs"
		}
	)

	event.shaped("minecraft:soul_campfire",
		[
			" S ",
			"SCS",
			"LXL"
		],
		{
			S: "#c:rods/wooden",
			C: "#minecraft:coals",
			L: "#minecraft:logs",
			X: "#minecraft:soul_fire_base_blocks"
		}
	)
	event.shaped("farmersdelight:cutting_board",
		[
			"SPP",
			"SPP"
		],
		{
			S: "#c:rods/wooden",
			P: "#minecraft:planks"
		}
	)

	event.shapeless("create:rose_quartz_lamp", ["minecraft:redstone_lamp", "rose_bush", "minecraft:quartz"]).id("create:crafting/kinetics/rose_quartz_lamp")

	event.shaped("wizards_reborn:arcane_workbench",
		[
			"RTR",
			"GCG",
			"AAA"
		],
		{
			A: "wizards_reborn:arcane_wood_planks",
			R: "red_wool",
			G: "naturesaura:gold_leaf",
			C: "crafting_table",
			T: "naturesaura:token_joy"
		}
	).id("wizards_reborn:shaped/arcane_workbench")

	event.shaped("kubejs:arcanum_pylon",
		[
			"GAG",
			"GAG",
			"ATA"
		],
		{
			G: "naturesaura:gold_leaf",
			A: "wizards_reborn:arcanum",
			T: "naturesaura:wood_stand"
		}
	)

	event.shaped("wizards_reborn:arcane_pedestal",
		[
			"SPS",
			" T ",
			"SPS"
		],
		{
			S: "wizards_reborn:arcane_wood_slab",
			P: "wizards_reborn:arcane_wood_planks",
			T: "naturesaura:wood_stand"
		}
	).id("wizards_reborn:shaped/arcane_pedestal")

	event.shaped("wizards_reborn:innocent_pedestal",
		[
			"SPS",
			" T ",
			"SPS"
		],
		{
			S: "wizards_reborn:innocent_wood_slab",
			P: "wizards_reborn:innocent_wood_planks",
			T: "naturesaura:wood_stand"
		}
	).id("wizards_reborn:shaped/innocent_pedestal")

	event.shaped("wizards_reborn:cork_bamboo_pedestal",
		[
			"SPS",
			" T ",
			"SPS"
		],
		{
			S: "wizards_reborn:cork_bamboo_slab",
			P: "wizards_reborn:cork_bamboo_planks",
			T: "naturesaura:wood_stand"
		}
	).id("wizards_reborn:shaped/cork_bamboo_pedestal")

	event.shaped("wizards_reborn:wissen_altar",
		[
			"GAG",
			"SPS",
			"GAG"
		],
		{
			G: "naturesaura:gold_powder",
			S: "wizards_reborn:arcane_wood_slab",
			P: "wizards_reborn:arcane_pedestal",
			A: "wizards_reborn:arcanum"
		}
	).id("wizards_reborn:shaped/wissen_altar")

	event.shaped("wizards_reborn:wissen_translator",
		[
			" G ",
			"DPD",
			"SPS"
		],
		{
			G: "wizards_reborn:arcanum",
			D: "naturesaura:gold_powder",
			P: "wizards_reborn:arcane_wood_planks",
			S: "wizards_reborn:arcane_wood_slab"
		}
	).id("wizards_reborn:shaped/wissen_translator")


	event.shaped("minecraft:crafting_table",
		[
			"PP",
			"XX"
		],
		{
			P: "twigs:pebble",
			X: "#minecraft:planks"
		}
	).id("minecraft:crafting_table")

	event.remove({ output: 'minecraft:crafting_table' })

	event.shaped("supplementaries:bellows", ["SSS", "ABA", "SSS"], { S: "#minecraft:wooden_slabs", A: "quark:bottled_cloud", B: "bundle" }).id("supplementaries:bellows")

	event.shaped("minecraft:beehive",
		[
			"SSS",
			"XXX",
			"SSS"
		],
		{
			S: "druidic_quest_core:polished_planks",
			X: "honeycomb"
		}
	).id("minecraft:beehive")

	event.custom({
		type: "lychee:item_inside",
		item_in: [
			{ item: "ender_pearl" },
			{ tag: "forge:insect" },
			{ tag: "forge:storage_blocks/beetroot" },
			{ tag: "forge:storage_blocks/beetroot" }],
		block_in: "minecraft:water",
		post: [
			{ type: "place", block: "alexsmobs:capsid" },
		]
	})

	event.shaped("composter", [
		"F F",
		"S S",
		"PPP"
	],
		{
			F: "#minecraft:wooden_fences",
			S: "druidic_quest_core:stacked_planks",
			P: "druidic_quest_core:packed_planks"
		}).id("minecraft:composter")


	event.remove({ output: 'supplementaries:sack' })
	event.shaped(
		Item.of('supplementaries:sack'),
		[
			'CSC',
			' C '
		],
		{
			C: 'farmersdelight:canvas',
			S: '#forge:string'
		}
	)

	event.remove({ id: 'naturesaura:gold_fiber' })

	event.remove({ output: 'immersiveengineering:cokebrick' })

	event.shaped("3x immersiveengineering:cokebrick",
		[
			"CSC",
			"GBG",
			"CSC"

		],
		{
			C: "#minecraft:sand",
			G: "gravel",
			S: "clay",
			B: "kubejs:brick_glue"
		}).damageIngredient("kubejs:brick_glue", 3)


	/// ======================================================================= Tier 0 Components ========================================================================

	event.shaped("rehooked:wood_chain",
		[
			" LL",
			"L L",
			"LL "
		],
		{
			L: "wizards_reborn:arcane_wood_branch"
		}
	).id("rehooked:wood_chain")

	event.shaped("8x wizards_reborn:wisestone",
		[
			"SSS",
			"SXS",
			"SSS"
		],
		{
			X: "wizards_reborn:arcanum",
			S: "quark:sturdy_stone"
		}
	).id("wizards_reborn:arcane_workbench/wisestone")

	event.shaped("4x supplementaries:rope",
		[
			" SF",
			"SXS",
			"FS "
		],
		{
			S: "string",
			F: "supplementaries:flax",
			X: "immersiveengineering:hemp_fabric"
		}
	).id("supplementaries:rope")

	event.shaped("4x immersiveengineering:wirecoil_structure_rope",
		[
			"SRS",
			"RXR",
			"SRS"
		],
		{
			S: "string",
			R: "#forge:rope",
			X: "immersiveengineering:stick_treated"
		}
	).id("immersiveengineering:crafting/wirecoil_structure_rope")

	event.shaped("4x farmersdelight:safety_net",
		[
			"RRR",
			"RXR",
			"RRR"
		],
		{
			R: "#forge:rope",
			X: "immersiveengineering:cushion"
		}
	).id("farmersdelight:safety_net")

	event.shapeless("supplementaries:rope", "farmersdelight:rope").id("farmersdelight:rope_from_safety_net")
	event.shapeless("farmersdelight:rope", "supplementaries:rope").id("farmersdelight:rope")

	event.shapeless("aether:cold_aercloud", "9x quark:bottled_cloud")

	event.shaped("48x supplementaries:cannonball",
		[
			" C ",
			"CCC",
			" C "
		],
		{
			C: "quark:sturdy_stone"
		}
	).id("supplementaries:cannonball_2")

	event.shaped("wizards_reborn:totem_base",
		[
			" P ",
			" P ",
			"PWP"
		],
		{
			P: "wizards_reborn:arcane_wood_planks",
			W: "naturesaura:wood_stand"
		}
	)
	event.remove({ id: "immersive_weathering:paper_from_birch_bark" })
	event.shaped("paper",
		[
			"BBB"
		],
		{
			B: "#immersive_weathering:bark"
		}
	).id("farmersdelight:paper_from_tree_bark")

	event.custom({
		"type": "lychee:block_interacting",
		"post": [
			{
				"type": "drop_item",
				"item": "wizards_reborn:white_arcane_lumos",
				"count": 16
			},
			{
				"type": "place",
				"block": "air"
			},
			{
				"type": "execute",
				"command": "playsound wizards_reborn:arcanum_dust_transmutation neutral @p",
				"hide": true
			}
		],
		"item_in": {
			"item": "wizards_reborn:arcanum_dust"
		},
		"block_in": "coal_block"
	}
	).id("wizards_reborn:wissen_crystallizer/white_arcane_lumos")

	event.custom({
		"type": "lychee:lightning_channeling",
		"post": [
			{
				"type": "drop_item",
				"item": "wizards_reborn:cosmic_arcane_lumos",
				"count": 2
			},
			{
				"type": "execute",
				"command": "playsound wizards_reborn:arcanum_dust_transmutation neutral @p",
				"hide": true
			}
		],
		"item_in": [
			{
				"item": "wizards_reborn:white_arcane_lumos"
			},
			{
				"item": "minecraft:amethyst_shard"
			},
			{
				"item": "minecraft:lapis_lazuli"
			}
		]
	}).id("wizards_reborn:wissen_crystallizer/cosmic_arcane_lumos")


	event.custom({
		"type": "lychee:lightning_channeling",
		"post": [
			{
				"type": "drop_item",
				"item": "wizards_reborn:rainbow_arcane_lumos",
				"count": 3
			},
			{
				"type": "execute",
				"command": "playsound wizards_reborn:arcanum_dust_transmutation neutral @p",
				"hide": true
			}
		],
		"item_in": [
			{
				"item": "wizards_reborn:red_arcane_lumos"
			},
			{
				"item": "wizards_reborn:green_arcane_lumos"
			},
			{
				"item": "wizards_reborn:blue_arcane_lumos"
			}
		]
	}).id("wizards_reborn:wissen_crystallizer/rainbow_arcane_lumos")

	event.shaped("kubejs:arcane_leather",
		[
			" F ",
			"FLF",
			" F "
		],
		{
			F: "irons_spellbooks:arcane_essence",
			L: "leather"
		}
	)

	event.shaped("kubejs:primitive_handle",
		[
			" F ",
			"FSF",
			" F "
		],
		{
			F: "flint",
			S: "#c:rods/wooden"
		}
	)

	event.recipes.naturesaura.tree_ritual("2x naturesaura:ancient_sapling", ["#forge:storage_blocks/redstone", "#minecraft:saplings", "wizards_reborn:arcanum", "wizards_reborn:arcanum", "wizards_reborn:arcanum", "wizards_reborn:arcanum", "wizards_reborn:arcanum", "wizards_reborn:arcanum"], "quark:red_blossom_sapling").id("naturesaura:tree_ritual/ancient_sapling")
	event.recipes.naturesaura.tree_ritual("2x naturesaura:ancient_sapling", ["#forge:storage_blocks/redstone", "#minecraft:saplings", "wizards_reborn:arcanum", "wizards_reborn:arcanum", "wizards_reborn:arcanum", "wizards_reborn:arcanum", "wizards_reborn:arcanum", "wizards_reborn:arcanum"], "quark:ancient_sapling")


	event.custom({
		type: "lychee:block_interacting",
		item_in: {
			tag: "forge:tools/knives"
		},
		block_in: "naturesaura:wood_stand",
		post: [
			{
				type: "place",
				block: "air"
			},
			{
				type: "drop_item",
				item: "kubejs:basic_token",
				count: 1
			},
			{
				type: "damage_item",
				damage: 15
			},
			{
				type: "execute",
				command: "playsound sawmill:ui.sawmill.take_result neutral @p",
				hide: true
			}
		]
	})

	event.remove({ output: 'ars_nouveau:mundane_belt' })
	event.shaped(
		Item.of('ars_nouveau:mundane_belt'),
		[
			'RIR',
			'I I',
			'RIR'
		],
		{
			I: '#forge:leather',
			R: '#forge:rope'
		}
	)

	event.remove({ output: 'ars_nouveau:ring_of_potential' })
	event.shaped(
		Item.of('ars_nouveau:ring_of_potential'),
		[
			'RIR',
			'I I',
			'RIR'
		],
		{
			I: '#forge:ingots/iron',
			R: '#forge:nuggets/iron'
		}
	)

	event.remove({ output: 'ars_nouveau:dull_trinket' })
	event.shaped(
		Item.of('ars_nouveau:dull_trinket'),
		[
			' I ',
			'IXI',
			' I '
		],
		{
			X: '#forge:nuggets/iron',
			I: '#forge:rope'
		}
	)
	event.shapeless('twigs:twig', ['#minecraft:saplings'])
	event.shapeless('stick', "twigs:twig")



	event.remove({ output: 'immersive_weathering:mulch_block' })
	event.shapeless('2x immersive_weathering:mulch_block', ['minecraft:dirt', '#immersive_weathering:bark', 'immersive_weathering:moss_clump', 'minecraft:bone_meal'])

	event.remove({ output: 'farmersdelight:organic_compost' })

	event.shapeless('farmersdelight:organic_compost',
		['immersive_weathering:mulch_block',
			'2x minecraft:bone_meal',
			'2x minecraft:rotten_flesh',
			'2x farmersdelight:straw'])

	event.shapeless('farmersdelight:organic_compost',
		['immersive_weathering:mulch_block',
			'thermal:compost',
			'2x minecraft:rotten_flesh',
			'farmersdelight:straw'])

	event.custom({
		type: "lychee:item_inside",
		post: [
			{
				type: "place",
				block: "create:chocolate"
			}
		],
		item_in: [
			{
				item: "minecraft:sugar"
			},
			{
				item: "minecraft:sugar"
			},
			{
				item: "minecraft:sugar"
			},
			{
				item: "minecraft:cocoa_beans"
			}
		],
		block_in: "minecraft:water"
	})

	event.custom({
		type: "lychee:item_inside",
		post: [
			{
				type: "drop_item",
				item: "create:bar_of_chocolate"
			},
			{
				type: "place",
				block: "air"
			}
		],
		item_in: [
			{
				item: "minecraft:ice"
			}
		],
		"block_in": {
			"blocks": ["create:chocolate"],
			"state": {
				"level": 0
			}
		}
	})

	event.shaped(
		Item.of('kubejs:sapling_ball'),
		[
			' S ',
			'SSS',
			' S '
		],
		{
			S: '#minecraft:saplings'
		}
	)

	event.remove({ output: 'minecraft:glass_bottle' })
	event.shaped(
		Item.of('2x minecraft:glass_bottle'),
		[
			' B ',
			'S S',
			' S '
		],
		{
			B: '#minecraft:wooden_buttons',
			S: '#forge:glass'
		}
	)

	event.shaped(
		Item.of('6x minecraft:glass_bottle'),
		[
			' B ',
			'S S',
			' S '
		],
		{
			B: '#forge:treated_wood',
			S: '#forge:glass'
		}
	)

	event.remove({ output: 'farmersdelight:canvas' })
	event.shaped(
		Item.of('farmersdelight:canvas'),
		[
			'CS',
			'SC'
		],
		{
			C: 'minecraft:string',
			S: 'farmersdelight:straw',
		}
	)
	event.shaped(
		Item.of('minecraft:string'),
		[
			'SS',
			'SS',
			'SS'
		],
		{
			S: 'immersiveengineering:hemp_fiber'
		}
	)
		.id("immersiveengineering:crafting/string")



	event.custom({
		type: "lychee:block_interacting",
		post: [
			{
				type: "hurt",
				damage: 1
			},
			{
				type: "drop_item",
				"contextual": [
					{
						type: "chance",
						"chance": 0.4
					}
				],
				item: "twigs:pebble",
				"count": 1
			},
			{
				type: "add_item_cooldown",
				"s": 0.5
			}
		],
		item_in: {
			item: "minecraft:air"
		},
		block_in: "minecraft:stone"
	})



	/// ======================================================================= Tier 1 Components =======================================================================

	event.shaped("32x rubinated_nether:ruby_glass", ["GGG", "GRG", "GGG"],
		{
			G: "#c:glass_blocks",
			R: "thermal:ruby"
		}
	)

	event.shaped("wizards_reborn:alchemy_vial",
		[
			" S ",
			"G G",
			" G "
		],
		{
			S: "wizards_reborn:arcane_wood_slab",
			G: "wizards_reborn:alchemy_glass"
		}
	).id("wizards_reborn:arcane_workbench/alchemy_vial")

	event.shaped("immersiveengineering:strip_curtain",
		[
			"S",
			"F"
		],
		{
			F: "immersiveengineering:hemp_fabric",
			S: "immersiveengineering:stick_treated"
		}
	).id("immersiveengineering:crafting/strip_curtain")

	event.shaped("kubejs:bronze_upgrade_parts",
		[
			" P ",
			"PBP",
			" P "
		],
		{
			P: "#forge:plates/bronze",
			B: "bundle"
		}
	)

	event.shaped("kubejs:steeleaf_upgrade_parts",
		[
			"PPP",
			"PBP",
			"PPP"
		],
		{
			P: "#forge:ingots/steeleaf",
			B: "bundle"
		}
	)

	event.shapeless("twilightforest:transformation_powder", ["kubejs:basic_alchemical_dust", "4x thermal:lapis_dust", "bundle"])

	event.shaped("vintagedelight:evaporator",
		[
			"BBB",
			"LXL",
			"BCB"
		],
		{
			B: "bricks",
			L: "#minecraft:logs",
			C: "campfire",
			X: "druidic_quest_core:primitive_machine"
		}
	).id("vintagedelight:evaporator")

	event.shapeless("craftingstation:crafting_station_slab", "craftingstation:crafting_station").id("craftingstation:crafting_station_slab")
	event.shapeless("6x wizards_reborn:flower_fertilizer", ["4x thermal:compost", "5x wizards_reborn:petals"]).id("wizards_reborn:shapeless/flower_fertilizer")

	event.shaped("3x create:shaft",
		[
			"  A",
			" R ",
			"A  "
		],
		{
			R: "#forge:rods/nickel",
			A: "andesite"
		}
	)

	event.shaped("6x torch", ["C", "S"], { C: "#forge:coal_coke", S: "#c:rods/wooden" })
	event.custom({
		"type": "lychee:block_crushing",
		"post": [
			{ "type": "place", "block": "air" },
			{ "type": "drop_item", "item": "irons_spellbooks:blood_vial" }
		],
		"item_in": [
			{ "item": "minecraft:glass_bottle" }
		],
		"landing_block": "druidic_quest_core:rotten_flesh_block"
	})

	event.shaped('4x immersiveengineering:fluid_pipe',
		[
			"III",
			"SSS",
			"III"
		],
		{
			I: "#forge:plates/iron",
			S: "kubejs:pipe_sealant"
		}
	).id("immersiveengineering:crafting/fluid_pipe")

	event.shaped('3x create:fluid_pipe',
		[
			"III",
			"SSS",
			"III"
		],
		{
			I: "#forge:plates/copper",
			S: "kubejs:pipe_sealant"
		}
	).id("create:crafting/kinetics/fluid_pipe")

	event.remove({ id: "create:crafting/kinetics/fluid_pipe_vertical" })

	event.shaped('immersiveengineering:hemp_fabric',
		[
			"XYX",
			"YSY",
			"XYX"
		],
		{
			X: "immersiveengineering:hemp_fiber",
			Y: "farmersdelight:canvas",
			S: "#forge:rods/treated_wood"
		}
	).id("immersiveengineering:crafting/hemp_fabric")

	event.shaped('3x kubejs:pipe_sealant',
		[
			"XYX",
			"YZY",
			"XYX"
		],
		{
			X: "quark:moss_paste",
			Y: "thermal:rubber",
			Z: "string"
		}
	)

	event.shaped('kubejs:pipe_sealant',
		[
			"XYX",
			"YZY",
			"XYX"
		],
		{
			X: "quark:moss_paste",
			Y: "slime_ball",
			Z: "string"
		}
	)

	event.shaped('thermal:beekeeper_fabric',
		[
			"XSX",
			"SXS",
			"XSX"
		],
		{
			S: "string",
			X: "honeycomb"
		})

	event.shaped('thermal:diving_fabric',
		[
			"XSX",
			"SXS",
			"XSX"
		],
		{
			S: "immersiveengineering:hemp_fabric",
			X: "kubejs:pipe_sealant"
		}).id("thermal:diving_fabric")

	event.remove({ id: "immersiveengineering:smelting/slag_glass" })

	event.shaped("kubejs:sturdy_basalt",
		[
			"CXC",
			"XXX",
			"CXC"
		],
		{
			X: "smooth_basalt",
			C: "#forge:plates/copper"
		}
	)

	event.custom({
		type: "lychee:block_interacting",
		comment: "works 25% of times",
		item_in: [{ item: "kubejs:basic_alchemical_dust" }],
		block_in: "infested_stone",
		post: [
			{ type: "place", block: "air" },
			{ type: "execute", command: "summon minecraft:silverfish ~ ~ ~", hide: "true" },
			{
				type: "if", contextual: { type: "chance", chance: 0.25 },
				then: { type: "drop_item", item: "thermal:silver_dust", "count": 8 },
				else: { type: "execute", command: "summon minecraft:silverfish ~ ~ ~", hide: "true" }
			}
		]
	})

	event.shaped(
		Item.of('2x kubejs:sapling_ball'),
		[
			' S ',
			'SXS',
			' S '
		],
		{
			X: '#minecraft:saplings',
			S: 'thermal:compost'
		}
	)


	event.remove({ output: 'thermal:drill_head' })
	event.shaped(
		Item.of('thermal:drill_head'),
		[
			' P ',
			'IGI',
			'III'
		],
		{
			I: '#forge:plates/iron',
			P: "minecraft:iron_pickaxe",
			G: "#forge:gears/iron"
		}
	)

	event.remove({ output: 'thermal:saw_blade' })
	event.shaped(
		Item.of('thermal:saw_blade'),
		[
			'III',
			'ISI',
			'III'
		],
		{
			I: '#forge:ingots/iron',
			S: 'kubejs:wooden_gear'
		}
	)

	event.shaped(
		Item.of('kubejs:magic_book'),
		[
			'ISI',
			'ISI',
			'ISI'
		],
		{
			I: 'irons_spellbooks:arcane_essence',
			S: 'minecraft:paper'
		}
	)

	event.shaped(
		Item.of('druidic_quest_core:primitive_machine'),
		[
			'PIP',
			'ISI',
			'PIP'
		],
		{
			I: 'quark:sturdy_stone',
			P: '#forge:storage_blocks/potato',
			S: 'kubejs:stone_gear'
		}
	)

	event.remove({ output: 'minecraft:redstone_torch' })
	event.shaped(
		Item.of('minecraft:redstone_torch'),
		[
			'R',
			'S'
		],
		{
			R: '#forge:dusts/redstone',
			S: '#forge:rods/treated_wood'
		}
	)
	event.shaped(
		Item.of('kubejs:stone_gear'),
		[
			' I ',
			'IGI',
			' I '
		],
		{
			I: 'kubejs:stone_plate',
			G: 'kubejs:wooden_gear'
		}
	)


	event.shaped(
		Item.of('kubejs:basic_magic_machine'),
		[
			'IDI',
			'DGD',
			'IDI'
		],
		{
			I: '#forge:dusts/gold',
			D: '#forge:gems/amethyst',
			G: 'druidic_quest_core:primitive_machine'
		}
	)

	event.shaped(
		Item.of('2x kubejs:basic_magic_machine'),
		[
			'IDI',
			'DGD',
			'IDI'
		],
		{
			I: '#forge:dusts/gold',
			D: '#forge:gems/source',
			G: 'druidic_quest_core:primitive_machine'
		}
	)


	event.shaped(
		Item.of('kubejs:wooden_gear'),
		[
			' I ',
			'IGI',
			' I '
		],
		{
			I: 'kubejs:wooden_plate',
			G: 'minecraft:redstone_torch'
		}
	)


	event.custom({
		type: "lychee:item_exploding",
		post: [
			{ type: "drop_item", item: "thermal:blizz_rod" },
			{ type: "execute", command: "playsound twilightforest:entity.twilightforest.snow_queen.ambient neutral @p", hide: "true" }
		],
		item_in: [
			{ item: "thermal:blitz_rod" },
			{ item: "snow_block" },
			{ item: "irons_spellbooks:frozen_bone" }
		]
	})

	event.remove({ output: 'sophisticatedstorage:upgrade_base' })
	event.shaped(
		Item.of('sophisticatedstorage:upgrade_base'),
		[
			'III',
			'IGI',
			'III'
		],
		{
			I: 'kubejs:wooden_plate',
			G: '#forge:gems/diamond'
		}
	)

	/// ======================================================================= Tier 1 Machines =======================================================================

	event.shaped("deep_aether:combiner",
		[
			"IGI",
			"AXA",
			"ZYZ"
		],
		{
			I: "#forge:plates/ironwood",
			G: "#forge:gears/ironwood",
			X: "kubejs:basic_magic_machine",
			A: "kubejs:basic_alchemical_dust",
			Z: "#forge:plates/iron",
			Y: "#forge:gears/iron"
		}
	).id("deep_aether:combiner")

	event.shaped("naturesaura:aura_timer",
		[
			"TGT",
			"GHG",
			"SMS"
		],
		{
			T: "#forge:plates/tin",
			S: "#forge:plates/stone",
			G: "#forge:glass",
			M: "druidic_quest_core:primitive_machine",
			H: "supplementaries:hourglass"
		}
	).id("naturesaura:aura_timer")

	event.shaped("quark:ender_watcher",
		[
			"DRD",
			"RXR",
			"DED"
		],
		{
			D: "druidic_quest_core:sturdy_deepslate",
			X: "minecraft:observer",
			R: "minecraft:redstone",
			E: "minecraft:ender_pearl"

		}
	).id("quark:automation/crafting/ender_watcher")

	event.shaped("naturesaura:grated_chute",
		[
			"P P",
			"PFP",
			" P "
		],
		{
			P: "wizards_reborn:arcane_wood_planks",
			F: "create:filter"
		}
	).id("naturesaura:grated_chute")

	event.shapeless("naturesaura:grated_chute", [
		"wizards_reborn:arcane_wood_planks",
		"woodenhopper:wooden_hopper",
		"create:filter"])

	event.shaped("wizards_reborn:alchemy_machine",
		[
			"BPB",
			"BFB",
			"BXB"
		],
		{
			B: "#forge:nuggets/brass",
			F: "wizards_reborn:orbital_fluid_retainer",
			P: "wizards_reborn:steam_pipe",
			X: "druidic_quest_core:primitive_machine"
		}
	).id("wizards_reborn:arcane_workbench/alchemy_machine")

	event.shaped("wizards_reborn:alchemy_furnace",
		[
			"BSB",
			"BXB",
			"BFB"
		],
		{
			B: "wizards_reborn:polished_wisestone",
			S: "wizards_reborn:steam_pipe",
			X: "minecraft:furnace",
			F: "wizards_reborn:fluid_pipe"
		}
	).id("wizards_reborn:arcane_workbench/alchemy_furnace")

	event.shaped("wizards_reborn:alchemy_boiler",
		[
			"NNN",
			"BFB",
			"BAB"
		],
		{
			N: "#forge:nuggets/brass",
			B: "wizards_reborn:polished_wisestone",
			F: "wizards_reborn:orbital_fluid_retainer",
			A: "wizards_reborn:wissen_altar"
		}
	).id("wizards_reborn:arcane_workbench/alchemy_boiler")

	event.shaped("2x create:nixie_tube",
		[
			"GG",
			"RR",
			"WW"
		],
		{
			G: "#forge:glass",
			R: "redstone",
			W: "#forge:plates/wooden"
		}
	).id("create:crafting/kinetics/nixie_tube")

	event.shaped("mbd2:phytogenic_insolator",
		[
			"TGT",
			"TXT",
			"TFT"
		],
		{
			G: "thermal:phytogro",
			T: "#forge:plates/tin",
			F: "create:fluid_tank",
			X: "kubejs:basic_magic_machine"
		}
	)

	event.shaped("4x immersiveengineering:razor_wire",
		[
			"WWW",
			"FWF"
		],
		{
			W: "#forge:wires/lead",
			F: "immersiveengineering:treated_fence"
		}).id("immersiveengineering:crafting/razor_wire")

	event.shaped("24x immersiveengineering:connector_structural",
		[
			"IRI",
			"I I"
		],
		{
			I: "#forge:plates/iron",
			R: "#forge:rods/iron"
		}
	).id("immersiveengineering:crafting/connector_structural")

	event.shaped("rubinated_nether:ruby_laser",
		[
			" G ",
			"PGP",
			"POP"
		],
		{
			G: "rubinated_nether:ruby_glass",
			P: "#forge:plates/copper",
			O: "observer"
		}
	).id("rubinated_nether:ruby_laser")
	event.shaped("wizards_reborn:steam_thermal_storage",
		[
			"XBX",
			"BPB",
			"XBX"
		],
		{
			B: "#c:glass_blocks",
			P: "wizards_reborn:orbital_fluid_retainer",
			X: "wizards_reborn:steam_pipe"
		}
	).id("wizards_reborn:arcane_workbench/steam_thermal_storage")

	event.shaped("wizards_reborn:steam_extractor",
		[
			" B ",
			"BPB",
			" B "
		],
		{
			B: "#forge:nuggets/brass",
			P: "wizards_reborn:fluid_extractor"
		}
	).id("wizards_reborn:arcane_workbench/steam_extractor")

	event.shaped("wizards_reborn:steam_pipe",
		[
			" B ",
			"BPB",
			" B "
		],
		{
			B: "#forge:nuggets/brass",
			P: "wizards_reborn:fluid_pipe"
		}
	).id("wizards_reborn:arcane_workbench/steam_pipe")

	event.shaped("wizards_reborn:steam_extractor", ["A", "B", "C"],
		{
			A: "supplementaries:faucet",
			B: "wizards_reborn:steam_pipe",
			C: "redstone_torch"
		}
	).id("wizards_reborn:shapeless/steam_extractor")



	event.shaped("32x create:controller_rail",
		[
			"GTG",
			"GSG",
			"GCG"
		],
		{
			G: "#forge:rods/gold",
			T: "redstone_torch",
			S: "immersiveengineering:stick_treated",
			C: "supplementaries:crank"
		}
	).id("create:crafting/kinetics/controller_rail")

	event.shaped("64x minecraft:rail",
		[
			"G G",
			"GSG",
			"G G"
		],
		{
			G: "#forge:rods/iron",
			S: "immersiveengineering:stick_treated"
		}
	).id("minecraft:rail")

	event.shaped("32x minecraft:detector_rail",
		[
			"GPG",
			"GSG",
			"GPG"
		],
		{
			G: "#forge:rods/iron",
			S: "immersiveengineering:stick_treated",
			P: "stone_pressure_plate"
		}
	).id("minecraft:detector_rail")

	event.shaped("32x minecraft:activator_rail",
		[
			"GPG",
			"GSG",
			"GPG"
		],
		{
			G: "#forge:rods/iron",
			S: "immersiveengineering:stick_treated",
			P: "redstone"
		}
	).id("minecraft:activator_rail")

	event.shaped("48x minecraft:powered_rail",
		[
			"GTG",
			"GSG",
			"GTG"
		],
		{
			G: "#forge:rods/gold",
			T: "redstone_torch",
			S: "immersiveengineering:stick_treated"
		}
	).id("minecraft:powered_rail")

	event.shaped("8x naturesaura:dimension_rail_overworld",
		[
			"RPR",
			"RSR",
			"RPR"
		],
		{
			R: "#forge:rods/infused_iron",
			S: "naturesaura:ancient_stick",
			P: "ender_pearl"
		}
	).id("naturesaura:dimension_rail_overworld")

	event.shaped("8x naturesaura:dimension_rail_nether",
		[
			"RPR",
			"RSR",
			"RPR"
		],
		{
			R: "#forge:rods/tainted_gold",
			S: "naturesaura:ancient_stick",
			P: "ender_pearl"
		}
	).id("naturesaura:dimension_rail_nether")

	event.shaped("8x naturesaura:dimension_rail_end",
		[
			"RPR",
			"RSR",
			"RPR"
		],
		{
			R: "#forge:rods/aluminum",
			S: "naturesaura:ancient_stick",
			P: "ender_pearl"
		}
	).id("naturesaura:dimension_rail_end")

	event.shaped("supplementaries:crank",
		[
			"RLR",
			"SSS"
		],
		{
			S: "#forge:plates/stone",
			R: "redstone",
			L: "lever"
		}
	).id("supplementaries:crank")

	event.shaped("quark:iron_rod",
		[
			" I ",
			" I ",
			"DXD"
		],
		{
			I: "#forge:rods/iron",
			X: "druidic_quest_core:primitive_machine",
			D: "druidic_quest_core:sturdy_deepslate"
		}
	).id("quark:automation/crafting/iron_rod_pre_end")

	event.shaped("wizards_reborn:wisestone_pedestal",
		[
			"NWN",
			" X ",
			"SWS"
		],
		{
			N: "#forge:nuggets/brass",
			W: "wizards_reborn:polished_wisestone",
			S: "wizards_reborn:polished_wisestone_slab",
			X: "wizards_reborn:arcane_pedestal"
		}
	).id("wizards_reborn:arcane_workbench/wisestone_pedestal")

	event.shaped("2x wizards_reborn:orbital_fluid_retainer",
		[
			" G ",
			"GXG",
			" G "
		],
		{
			G: "#c:glass_blocks",
			X: "wizards_reborn:wisestone_pedestal"
		}
	).id("wizards_reborn:arcane_workbench/orbital_fluid_retainer")

	event.shaped("ancient_aether:wind_blower",
		[
			"ARA",
			"AXA",
			"ABA"
		],
		{
			A: "quark:bottled_cloud",
			R: "redstone_torch",
			X: "druidic_quest_core:primitive_machine",
			B: "supplementaries:bellows"
		}
	).id("ancient_aether:wind_blower")
	event.remove({ output: "naturesaura:animal_spawner" })
	event.shaped("naturesaura:animal_spawner",
		[
			"LWL",
			"LXL",
			"LBL"
		],
		{
			L: "#forge:plates/lead",
			W: "hay_block",
			X: "kubejs:basic_magic_machine",
			B: "naturesaura:birth_spirit"
		}
	)

	event.shaped("wizards_reborn:arcane_lever",
		[
			"N",
			"B",
			"W"
		],
		{
			N: "#forge:nuggets/gold",
			B: "wizards_reborn:arcane_wood_branch",
			W: "wizards_reborn:wisestone"
		}
	).id("wizards_reborn:arcane_workbench/arcane_lever")

	event.shapeless("wizards_reborn:wissen_activator", ["wizards_reborn:wissen_sensor", "wizards_reborn:wissen_wand"]).id("wizards_reborn:arcane_workbench/wissen_activator")

	event.shaped("wizards_reborn:arcane_hopper",
		[
			"APA",
			"AHA",
			" A "
		],
		{
			P: "#forge:plates/gold",
			A: "wizards_reborn:arcane_wood_planks",
			H: "hopper"
		}
	).id("wizards_reborn:arcane_workbench/arcane_hopper")

	event.shaped("immersiveengineering:item_batcher",
		[
			"SSS",
			"PXP",
			"PLP"
		],
		{
			S: "#forge:plates/stone",
			P: "#forge:plates/wooden",
			X: "druidic_quest_core:primitive_machine",
			L: "create:filter"
		}
	).id("immersiveengineering:crafting/item_batcher")

	event.shaped("wizards_reborn:experience_totem",
		[
			"XAX",
			"XMX",
			"XPX"
		],
		{
			X: "create:experience_block",
			A: "minecraft:amethyst_cluster",
			M: "kubejs:basic_magic_machine",
			P: "wizards_reborn:arcane_pedestal"
		}
	).id("wizards_reborn:arcane_workbench/experience_totem")

	event.shaped("simplemagnets:basic_demagnetization_coil",
		[
			"RBR",
			"RMR",
			"BBB"
		],
		{
			B: "deepslate",
			M: "druidic_quest_core:primitive_machine",
			R: "#forge:storage_blocks/redstone"
		}
	).id("simplemagnets:basic_demagnetization_coil")

	event.shaped("simplemagnets:advanced_demagnetization_coil",
		[
			"RBR",
			"RXR",
			"BBB"
		],
		{
			B: "deepslate",
			X: "simplemagnets:basic_demagnetization_coil",
			R: "#forge:rods/gold"
		}
	).id("simplemagnets:advanced_demagnetization_coil")

	event.shaped("quark:redstone_randomizer",
		[
			"STS",
			"TGT",
			"SRS"
		],
		{
			S: "#forge:plates/stone",
			R: "#forge:dusts/redstone",
			T: "redstone_torch",
			G: "#forge:gems/prismarine"
		}
	).id("quark:automation/crafting/redstone_randomizer")


	event.shaped("shulker_box",
		[
			"S",
			"C",
			"S"
		],
		{
			S: "shulker_shell",
			C: "#c:chests/wooden"
		}).id("minecraft:shulker_box")

	event.replaceInput({ id: "starbunclemania:fluid_jar" }, "ars_nouveau:water_essence", "create:fluid_tank")

	event.shaped("create:pulse_timer",
		[
			"SRS",
			"ABA",
			"SRS"
		],
		{
			R: "create:pulse_repeater",
			S: "#forge:plates/stone",
			A: "amethyst_shard",
			B: "#forge:plates/brass"
		}
	).id("create:crafting/logistics/pulse_timer")

	event.shaped("mbd2:basic_recycler",
		[
			"PHP",
			"PXP",
			"PMP"
		],
		{
			P: "#forge:plates/wooden",
			H: "woodenhopper:wooden_hopper",
			X: "#forge:gears/nickel",
			M: "druidic_quest_core:primitive_machine",
		}
	)

	event.shaped("quark:crate",
		[
			"ISI",
			"SXS",
			"ISI"
		],
		{
			S: "#c:rods/wooden",
			X: "#forge:barrels/wooden",
			I: "#forge:rods/iron"
		}
	)

	event.shaped("alexsmobs:gustmaker",
		[
			"SYS",
			"SXS",
			"SZS"
		],
		{
			S: "sandstone",
			X: "supplementaries:bellows",
			Y: "alexsmobs:guster_eye",
			Z: "druidic_quest_core:primitive_machine"
		}
	).id("alexsmobs:gustmaker")

	event.shaped("wizards_reborn:cooldown_sensor",
		[
			"D",
			"X",
		],
		{
			D: "supplementaries:hourglass",
			X: "wizards_reborn:redstone_sensor"
		}
	).id("wizards_reborn:arcane_workbench/cooldown_sensor")

	event.shaped("wizards_reborn:heat_sensor",
		[
			"D",
			"X",
		],
		{
			D: "campfire",
			X: "wizards_reborn:redstone_sensor"
		}
	).id("wizards_reborn:arcane_workbench/heat_sensor")

	event.shaped("wizards_reborn:experience_sensor",
		[
			"D",
			"X",
		],
		{
			D: "create:experience_block",
			X: "wizards_reborn:redstone_sensor"
		}
	).id("wizards_reborn:arcane_workbench/experience_sensor")

	event.shaped("wizards_reborn:light_sensor",
		[
			"D",
			"X",
		],
		{
			D: "daylight_detector",
			X: "wizards_reborn:redstone_sensor"
		}
	).id("wizards_reborn:arcane_workbench/light_sensor")

	event.shaped("wizards_reborn:fluid_sensor",
		[
			" D ",
			"DXD",
			" D "
		],
		{
			D: "wizards_reborn:fluid_pipe",
			X: "wizards_reborn:redstone_sensor"
		}
	).id("wizards_reborn:arcane_workbench/fluid_sensor")

	event.shaped("wizards_reborn:wissen_sensor",
		[
			" D ",
			"DXD",
			" D "
		],
		{
			D: "wizards_reborn:arcanum_dust",
			X: "wizards_reborn:redstone_sensor"
		}
	).id("wizards_reborn:arcane_workbench/wissen_sensor")

	event.shaped("wizards_reborn:steam_sensor",
		[
			" D ",
			"DXD",
			" D "
		],
		{
			D: "wizards_reborn:steam_pipe",
			X: "wizards_reborn:redstone_sensor"
		}
	).id("wizards_reborn:arcane_workbench/steam_sensor")

	event.shaped("2x wizards_reborn:redstone_sensor",
		[
			"NPN",
			"SCS",
			"NPN"
		],
		{
			N: "#forge:nuggets/bronze",
			S: "#forge:plates/bronze",
			C: "comparator",
			P: "wizards_reborn:arcane_wood_planks"
		}
	).id("wizards_reborn:arcane_workbench/redstone_sensor")

	event.shaped("wizards_reborn:item_sorter",
		[
			"NFN",
			"PCP",
			"NHN"
		],
		{
			N: "#forge:nuggets/bronze",
			H: "woodenhopper:wooden_hopper",
			F: "sophisticatedstorage:filter_upgrade",
			C: "wizards_reborn:redstone_sensor",
			P: "wizards_reborn:arcane_wood_planks"

		}
	).id("wizards_reborn:arcane_workbench/item_sorter")

	event.shaped("naturesaura:nature_altar",
		[
			"SNS",
			"SMS",
			"SHS"
		],
		{
			N: "twilightforest:naga_scale",
			S: "#forge:plates/stone",
			M: "druidic_quest_core:primitive_machine",
			H: "woodenhopper:wooden_hopper"
		}
	)

	event.shaped("create:content_observer",
		[
			" B ",
			"BXB",
			" Z "
		],
		{
			B: "#forge:plates/brass",
			X: "immersiveengineering:connector_probe",
			Z: "observer"
		}
	).id("create:crafting/logistics/content_observer")

	event.shaped("create:stockpile_switch",
		[
			" B ",
			"BXB",
			" Z "
		],
		{
			B: "#forge:plates/brass",
			X: "wizards_reborn:redstone_sensor",
			Z: "create:brass_casing"
		}
	).id("create:crafting/logistics/stockpile_switch")

	event.shaped("create:smart_fluid_pipe",
		[
			" B ",
			"BXB",
			" Z "
		],
		{
			B: "#forge:plates/brass",
			X: "create:fluid_pipe",
			Z: "sophisticatedstorage:filter_upgrade"
		}
	).id("create:crafting/kinetics/smart_fluid_pipe")

	event.shaped("create:adjustable_chain_gearshift",
		[
			" S ",
			"BXB",
			" Z "
		],
		{
			B: "create:large_cogwheel",
			S: "create:cogwheel",
			X: "create:andesite_casing",
			Z: "redstone_torch"
		}
	).id("create:crafting/kinetics/adjustable_chain_gearshift")

	event.shaped("create:contraption_controls", ["A", "B", "C"],
		{
			A: "#minecraft:buttons",
			B: "druidic_quest_core:primitive_machine",
			C: "create:andesite_casing"
		}
	).id("create:crafting/kinetics/contraption_controls")

	event.shaped("2x create:display_board", ["A", "B", "C"],
		{
			A: "create:belt_connector",
			B: "#minecraft:signs",
			C: "create:cogwheel"
		}
	).id("create:crafting/kinetics/display_board")

	event.shaped("create:sequenced_gearshift", ["A", "B", "C"],
		{
			A: "create:cogwheel",
			B: "create:brass_casing",
			C: "clock"
		}
	).id("create:crafting/kinetics/sequenced_gearshift")

	event.shaped("2x create:mechanical_pump", ["A", "B", "C"],
		{
			A: "supplementaries:faucet",
			B: "create:fluid_pipe",
			C: "create:cogwheel"
		}
	).id("create:crafting/kinetics/mechanical_pump")

	event.shaped("wizards_reborn:fluid_extractor", ["A", "B", "C"],
		{
			A: "supplementaries:faucet",
			B: "wizards_reborn:fluid_pipe",
			C: "redstone_torch"
		}
	).id("wizards_reborn:shapeless/fluid_extractor")

	event.shaped("immersiveengineering:fluid_pump", ["A", "B", "C"],
		{
			A: "supplementaries:faucet",
			B: "immersiveengineering:fluid_pipe",
			C: "redstone_torch"
		}
	).id("immersiveengineering:crafting/fluid_pump")


	event.shaped("2x immersiveengineering:connector_redstone",
		[
			"SBS",
			"CRC",
			"SRS"
		],
		{
			S: "#forge:plates/stone",
			B: "#forge:plates/bronze",
			C: "supplementaries:cog_block",
			R: "immersiveengineering:wirecoil_redstone"
		}
	).id("immersiveengineering:crafting/connector_redstone")

	event.shaped("immersiveengineering:connector_probe",
		[
			"RIR",
			"RSR",
			"WCW"
		],
		{
			W: "#forge:plates/wooden",
			I: "immersiveengineering:connector_redstone",
			S: "wizards_reborn:redstone_sensor",
			C: "supplementaries:cog_block",
			R: "immersiveengineering:wirecoil_redstone"
		}
	).id("immersiveengineering:crafting/connector_probe")

	event.shaped("immersiveengineering:connector_bundled",
		[
			" R ",
			"RXR",
			" R "
		],
		{
			R: "immersiveengineering:wirecoil_redstone",
			X: "immersiveengineering:connector_redstone"
		}
	).id("immersiveengineering:crafting/connector_bundled")

	event.shapeless("wizards_reborn:fluid_pipe", ["immersiveengineering:fluid_pipe", "wizards_reborn:wisestone"]).id("wizards_reborn:arcane_workbench/fluid_pipe")

	event.shaped("2x naturesaura:field_creator",
		[
			"GAG",
			"GMG",
			"GTG"
		],
		{
			G: "#forge:glass",
			M: "kubejs:basic_magic_machine",
			T: "naturesaura:token_anger",
			A: "#forge:storage_blocks/arcanum"
		}
	).id("naturesaura:field_creator")

	event.shaped("naturesaura:item_distributor",
		[
			"CCC",
			"HMH",
			"CCC"
		],
		{
			C: "cobblestone",
			H: "woodenhopper:wooden_hopper",
			M: "druidic_quest_core:primitive_machine"
		}
	).id("naturesaura:item_distributor")

	event.shaped("naturesaura:pickup_stopper",
		[
			"CSC",
			"CMC",
			"CSC"
		],
		{
			C: "cobblestone",
			S: "slime_ball",
			M: "druidic_quest_core:primitive_machine"
		}
	).id("naturesaura:pickup_stopper")

	event.shaped("naturesaura:oak_generator",
		[
			"LEL",
			"AMA",
			"LTL"
		],
		{
			L: "minecraft:oak_log",
			A: "naturesaura:ancient_sapling",
			M: "druidic_quest_core:primitive_machine",
			E: "#forge:gems/emerald",
			T: "naturesaura:token_fear"
		}
	).id("naturesaura:oak_generator")

	event.shaped("create:andesite_tunnel",
		[
			"AAA",
			"ACA"
		],
		{
			A: "andesite",
			C: 'immersiveengineering:strip_curtain'
		}
	).id("create:crafting/logistics/andesite_tunnel")

	event.shaped("create:brass_tunnel",
		[
			"BFB",
			"BXB"
		],
		{
			B: "#forge:ingots/brass",
			F: "sophisticatedstorage:filter_upgrade",
			X: "create:andesite_tunnel"
		}
	).id("create:crafting/logistics/brass_tunnel")

	event.shaped("create:brass_funnel",
		[
			"BFB",
			"BXB"
		],
		{
			B: "#forge:ingots/brass",
			F: "wizards_reborn:item_sorter",
			X: "create:andesite_funnel"
		}
	).id("create:crafting/logistics/brass_funnel")

	event.shaped("create:smart_chute",
		[
			"BFB",
			"BXB"
		],
		{
			B: "#forge:ingots/brass",
			F: "wizards_reborn:item_sorter",
			X: "create:chute"
		}
	).id("create:crafting/kinetics/smart_chute")

	event.shaped("thermal:fluid_cell",
		[
			"RTR",
			"TCT",
			"RTR"
		],
		{
			R: "thermal:rubber",
			T: "create:fluid_tank",
			C: "thermal:fluid_cell_frame"
		}
	).id("thermal:fluid_cell")

	event.shaped("naturesaura:placer",
		[
			"SES",
			"GDG",
			"SWS"
		],
		{
			S: "cobblestone",
			G: "kubejs:stone_gear",
			E: "#forge:gems/emerald",
			W: "woodenhopper:wooden_hopper",
			D: "dispenser"
		}
	).id("naturesaura:placer")

	event.shaped("thermal:device_water_gen",
		[
			"LZL",
			"CMC",
			"LXL"
		],
		{
			C: "#forge:gears/copper",
			L: "#forge:plates/lead",
			M: "druidic_quest_core:primitive_machine",
			Z: "immersiveengineering:fluid_pipe",
			X: "immersiveengineering:fluid_pump"
		}
	).id("thermal:device_water_gen")

	event.shaped("thermal:device_xp_condenser",
		[
			"LZL",
			"CMC",
			"LXL"
		],
		{
			C: "#forge:gears/infused_iron",
			L: "#forge:plates/lead",
			M: "kubejs:basic_magic_machine",
			Z: "sculk_catalyst",
			X: "thermal:xp_crystal"
		}
	).id("thermal:device_xp_condenser")

	event.shaped("kubejs:sacrificial_altar",
		[
			"ZDZ",
			"XMX",
			"ZDZ"
		],
		{
			Z: "#forge:plates/zinc",
			M: "druidic_quest_core:primitive_machine",
			X: "irons_spellbooks:blood_vial",
			D: "druidic_quest_core:sturdy_deepslate"
		}
	)

	event.shaped("create:pulse_repeater",
		[
			"SXS",
			"BYB",
			"SZS"
		],
		{
			S: "#forge:plates/stone",
			B: "#forge:plates/brass",
			X: "repeater",
			Z: "comparator",
			Y: "supplementaries:hourglass"
		}
	).id("create:crafting/logistics/pulse_repeater")

	event.shaped("create:pulse_extender",
		[
			"SRS",
			"BRB",
			"SRS"
		],
		{
			S: "#forge:plates/stone",
			B: "#forge:plates/brass",
			R: "repeater"
		}
	).id("create:crafting/logistics/pulse_extender")

	event.shaped("repeater",
		[
			"STS",
			"SRS",
			"STS"
		],
		{
			S: "#forge:plates/stone",
			T: "redstone_torch",
			R: "redstone"
		}
	).id("minecraft:repeater")

	event.remove({ id: "quark:tweaks/crafting/utility/misc/repeater" })

	event.shaped("3x comparator",
		[
			"STS",
			"TDT",
			"SQS"
		],
		{
			S: "#forge:plates/stone",
			T: "redstone_torch",
			D: "repeater",
			Q: "#forge:storage_blocks/quartz"
		}
	).id("minecraft:comparator")

	event.shaped("comparator",
		[
			"STS",
			"TDT",
			"SQS"
		],
		{
			S: "#forge:plates/stone",
			T: "redstone_torch",
			D: "repeater",
			Q: "#forge:storage_blocks/sapphire"
		}
	)

	event.shaped("create:powered_latch",
		[
			"SLS",
			"SRS",
			"SPS"
		],
		{
			S: "#forge:plates/stone",
			L: "lever",
			R: "repeater",
			P: "piston"
		}
	).id("create:crafting/logistics/powered_latch")

	event.shapeless("create:powered_toggle_latch", ["create:powered_latch", "redstone_torch"]).id("create:crafting/logistics/powered_toggle_latch")

	event.shaped("create:placard",
		[
			" P ",
			"PFP",
			" P "
		],
		{
			P: "#forge:plates/copper",
			F: "item_frame"
		}
	)

	event.shaped("3x create:placard",
		[
			" P ",
			"PFP",
			" P "
		],
		{
			P: "#forge:plates/brass",
			F: "item_frame"
		}
	).id("create:crafting/kinetics/placard")

	event.shaped("thermal:device_tree_extractor",
		[
			"GFG",
			"WMW",
			"SBS"
		],
		{
			G: "#forge:gears/tin",
			F: "supplementaries:faucet",
			W: "#forge:plates/wooden",
			M: "druidic_quest_core:primitive_machine",
			S: "#forge:plates/tin",
			B: "bucket"
		}
	).id("thermal:device_tree_extractor")

	event.shaped("thermal:device_nullifier",
		[
			"LLL",
			"SMS",
			"SCS"
		],
		{
			L: "#forge:plates/lead",
			M: "druidic_quest_core:primitive_machine",
			S: "#forge:plates/tin",
			C: "#forge:storage_blocks/cactus"
		}
	).id("thermal:device_nullifier")

	event.shaped("thermal:device_potion_diffuser",
		[
			"LGL",
			"WMW",
			"SJS"
		],
		{
			L: "#forge:plates/lead",
			G: "#forge:gears/lead",
			W: "glass_bottle",
			M: "druidic_quest_core:primitive_machine",
			S: "#forge:plates/tin",
			J: "supplementaries:jar"
		}
	).id("thermal:device_potion_diffuser")

	event.shaped("create:chute", [" I ", "ICI", " I "], { I: "#forge:plates/iron", C: "quark:chute" }).id("create:crafting/kinetics/chute")

	event.shaped("create:redstone_contact", ["CIC", "ROR", "CCC"], { C: "quark:sturdy_stone", R: "#forge:storage_blocks/redstone", O: "observer", I: "#forge:plates/iron" }).id("create:crafting/logistics/redstone_contact")

	event.replaceInput({ id: "minecraft:anvil" }, "iron_ingot", "#forge:plates/iron")

	event.shaped("rubinated_nether:freezer",
		[
			"PPP",
			"RMR",
			"BXB"
		],
		{
			P: "#forge:plates/copper",
			R: "#forge:rods/copper",
			M: "druidic_quest_core:primitive_machine",
			B: "kubejs:sturdy_basalt",
			X: "thermal:blizz_rod"
		}
	).id("rubinated_nether:freezer_crafting")

	event.shaped("immersiveengineering:sorter",
		[
			"BCB",
			"HFH",
			"BMB"
		],
		{
			C: "comparator",
			H: "woodenhopper:wooden_hopper",
			M: "druidic_quest_core:primitive_machine",
			B: "kubejs:sturdy_basalt",
			F: "sophisticatedstorage:filter_upgrade"
		}
	).id("immersiveengineering:crafting/sorter")

	event.shaped("immersiveengineering:fluid_sorter",
		[
			"BCB",
			"HFH",
			"BMB"
		],
		{
			C: "comparator",
			H: "supplementaries:faucet",
			M: "druidic_quest_core:primitive_machine",
			B: "kubejs:sturdy_basalt",
			F: "sophisticatedstorage:filter_upgrade"
		}
	).id("immersiveengineering:crafting/fluid_sorter")

	event.remove({ output: 'torchmaster:feral_flare_lantern' })
	event.shaped(
		Item.of('torchmaster:feral_flare_lantern'),
		[
			'AAA',
			'AIA',
			'AAA'
		],
		{
			A: '#forge:plates/lead',
			I: "ars_nouveau:glyph_light"
		}
	)

	event.remove({ output: 'supplementaries:faucet' })
	event.shaped(
		Item.of('supplementaries:faucet'),
		[
			' L ',
			'III',
			'  H'
		],
		{
			L: 'minecraft:lever',
			I: "#forge:ingots/iron",
			H: 'woodenhopper:wooden_hopper'
		}
	)

	event.remove({ output: 'create:depot' })
	event.shaped(
		Item.of('create:depot'),
		[
			'III',
			'PSP'
		],
		{
			I: '#forge:ingots/iron',
			P: "#minecraft:planks",
			S: "naturesaura:wood_stand"
		}
	)
	event.remove({ output: 'create:fluid_tank' })
	event.shaped(
		Item.of('create:fluid_tank'),
		[
			' P ',
			'PXP',
			' P '
		],
		{
			P: '#forge:plates/copper',
			X: 'supplementaries:jar'
		}
	)

	event.shaped("immersiveengineering:wooden_barrel",
		[
			" P ",
			"PXP",
			" P "
		],
		{
			P: "#forge:plates/wooden",
			X: "create:fluid_tank"
		}
	).id("immersiveengineering:crafting/wooden_barrel")

	event.shaped("immersiveengineering:metal_barrel",
		[
			" I ",
			"IXI",
			" I "
		],
		{
			I: "#forge:ingots/iron",
			X: "immersiveengineering:wooden_barrel"
		}
	).id("immersiveengineering:crafting/metal_barrel")

	event.remove({ output: 'create:spout' })
	event.shaped(
		Item.of('create:spout'),
		[
			'PPP',
			'PXP',
			'PFP'
		],
		{
			P: 'minecraft:dried_kelp',
			X: 'create:fluid_tank',
			F: 'supplementaries:faucet'
		}
	)

	event.remove({ output: 'naturesaura:auto_crafter' })
	event.shaped(
		Item.of('2x naturesaura:auto_crafter'),
		[
			'PTP',
			'PMP',
			'PCP'
		],
		{
			T: 'naturesaura:token_joy',
			M: 'druidic_quest_core:primitive_machine',
			P: 'naturesaura:ancient_planks',
			C: 'immersiveengineering:craftingtable'
		}
	)

	event.remove({ output: 'supplementaries:cog_block' })
	event.shaped(
		Item.of('4x supplementaries:cog_block'),
		[
			'ZPZ',
			'PXP',
			'ZPZ'
		],
		{
			Z: '#forge:ingots/copper',
			P: '#forge:dusts/redstone',
			X: 'kubejs:wooden_gear'
		}
	)

	event.replaceInput({ id: "ars_nouveau:glyph_craft" }, "minecraft:crafting_table", "naturesaura:auto_crafter")

	event.remove({ output: 'vintagedelight:fermenting_jar' })
	event.shaped(
		Item.of('vintagedelight:fermenting_jar'),
		[
			' P ',
			'PXP',
			' P '
		],
		{
			P: '#forge:glass/tinted',
			X: 'supplementaries:jar'
		}
	)

	event.remove({ output: 'sawmill:sawmill' })
	event.shaped(
		Item.of('sawmill:sawmill'),
		[
			'SSS',
			'SBS',
			'PPP'
		],
		{
			B: 'thermal:saw_blade',
			P: '#forge:treated_wood',
			S: '#forge:rods/treated_wood'
		}
	)

	event.remove({ output: 'minecraft:dropper' })
	event.remove({ output: 'minecraft:dispenser' })
	event.shapeless('minecraft:dropper', ['druidic_quest_core:primitive_machine', 'minecraft:redstone_torch'])
	event.shapeless('minecraft:dispenser', ['minecraft:dropper', 'minecraft:bow'])
	event.shaped("minecraft:dispenser", [
		"SW ",
		"SXW",
		"SW "
	],
		{
			S: "string",
			W: "#c:rods/wooden",
			X: "druidic_quest_core:primitive_machine"
		})

	event.remove({ output: 'supplementaries:jar' })
	event.shaped(
		Item.of('supplementaries:jar'),
		[
			'PSP',
			'P P',
			'PPP'
		],
		{
			S: '#forge:treated_wood_slab',
			P: '#forge:glass'
		}
	)

	event.remove({ output: "irons_spellbooks:scroll_forge" })
	event.shaped(
		Item.of("irons_spellbooks:scroll_forge"),
		[
			'PPP',
			' B ',
			'OOO'
		],
		{
			P: 'minecraft:polished_deepslate',
			B: 'kubejs:basic_magic_machine',
			O: 'minecraft:crying_obsidian'
		}
	)

	event.remove({ output: 'create:hand_crank' })
	event.shaped(
		Item.of('create:hand_crank'),
		[
			'S',
			'P'
		],
		{
			S: '#forge:rods/treated_wood',
			P: 'quark:sturdy_stone'
		}
	)

	event.remove({ output: 'create:millstone' })
	event.shaped(
		Item.of('create:millstone'),
		[
			' S ',
			' G ',
			'DPD'
		],
		{
			G: 'kubejs:stone_gear',
			P: 'druidic_quest_core:primitive_machine',
			S: 'woodenhopper:wooden_hopper',
			D: "#forge:dusts/iron"
		}
	)

	event.remove({ output: 'woodenhopper:wooden_hopper' })
	event.shaped(
		Item.of('woodenhopper:wooden_hopper'),
		[
			'P P',
			'PTP',
			' P '
		],
		{
			P: '#forge:treated_wood',
			T: 'kubejs:wooden_gear'
		}
	)

	event.remove({ output: 'minecraft:furnace' })

	event.remove({ output: 'quark:deepslate_furnace' })
	event.remove({ output: 'quark:blackstone_furnace' })
	event.shapeless('quark:deepslate_furnace', ['minecraft:furnace', 'minecraft:cobbled_deepslate'])
	event.shapeless('quark:blackstone_furnace', ['minecraft:furnace', 'minecraft:blackstone'])

	event.remove({ output: 'farmersdelight:basket' })
	event.shaped(
		Item.of('farmersdelight:basket'),
		[
			'CHC',
			'CCC'
		],
		{
			H: 'woodenhopper:wooden_hopper',
			C: 'farmersdelight:canvas'
		}
	)

	event.remove({ id: 'minecraft:stonecutter' })
	event.shaped(
		Item.of('minecraft:stonecutter'),
		[
			' G ',
			'PSP',
			'SSS'
		],
		{
			P: '#forge:treated_wood',
			S: 'minecraft:smooth_stone',
			G: 'thermal:saw_blade'
		}
	)

	event.remove({ id: 'minecraft:grindstone' })
	event.shaped(
		Item.of('minecraft:grindstone'),
		[
			'PSP',
			'F F'
		],
		{
			P: '#forge:treated_wood',
			S: 'minecraft:smooth_stone',
			F: 'immersiveengineering:treated_fence'
		}
	)

	event.remove({ output: 'immersiveengineering:crate' })
	event.shaped(
		Item.of('immersiveengineering:crate'),
		[
			'PPP',
			'PSP',
			'PPP'
		],
		{
			P: '#forge:treated_wood',
			S: 'supplementaries:sack'
		}
	)

	event.remove({ output: 'irons_spellbooks:inscription_table' })
	event.shaped(
		Item.of('irons_spellbooks:inscription_table'),
		[
			'BBQ',
			'PPP',
			'F F'
		],
		{
			B: '#forge:books',
			Q: 'minecraft:writable_book',
			P: '#forge:treated_wood_slab',
			F: 'immersiveengineering:treated_fence'
		}
	)

	event.remove({ output: 'sophisticatedbackpacks:backpack' })
	event.shaped(
		Item.of('sophisticatedbackpacks:backpack'),
		[
			'CEC',
			'CXC',
			'LPL'
		],
		{
			C: 'farmersdelight:canvas',
			L: '#forge:leather',
			X: "supplementaries:sack",
			E: 'minecraft:ender_pearl',
			P: "#forge:plates/wooden"
		}
	)
	event.shaped(
		Item.of('sophisticatedbackpacks:backpack'),
		[
			'CLC',
			'CXC',
			'LPL'
		],
		{
			C: 'farmersdelight:canvas',
			L: '#forge:leather',
			X: "#minecraft:shulker_boxes",
			P: "#forge:plates/wooden"
		}
	)

	event.custom({
		type: "lychee:lightning_channeling",
		post: [
			{
				type: "drop_item",
				item: "ars_nouveau:imbuement_chamber"
			},
			{
				type: "execute",
				command: "playsound irons_spellbooks:lightning_lance_cast neutral @p",
				hide: "true"
			}
		],
		item_in: [
			{
				item: "kubejs:basic_magic_machine",
			},
			{
				item: "supplementaries:jar",
			},
			{
				item: "woodenhopper:wooden_hopper",
			},
			{
				item: "twilightforest:naga_scale"
			}
		]
	})

	event.remove({ output: 'thermal:device_composter' })
	event.shaped(
		Item.of('thermal:device_composter'),
		[
			'PCP',
			'PMP',
			'PHP'
		],
		{
			P: '#forge:plates/tin',
			C: 'minecraft:composter',
			M: 'kubejs:basic_magic_machine',
			H: 'woodenhopper:wooden_hopper'
		}
	)

	event.remove({ output: 'thermal:device_fisher' })
	event.shaped(
		Item.of('thermal:device_fisher'),
		[
			'PCP',
			'PMP',
			'PHP'
		],
		{
			P: '#forge:plates/tin',
			C: 'minecraft:fishing_rod',
			M: 'kubejs:basic_magic_machine',
			H: 'woodenhopper:wooden_hopper'
		}
	)

	event.remove({ id: "supplementaries:bed_from_feather_block" })

	event.shapeless("aether:skyroot_bed", ["#minecraft:beds", "#aether:skyroot_repairing"]).id("aether:skyroot_bed")
	colors.forEach(color => {
		event.shaped(
			Item.of('comforts:sleeping_bag_' + color),
			[
				'CP',
				'SS'
			],
			{
				C: 'handcrafted:' + color + '_sheet',
				P: 'handcrafted:' + color + '_cushion',
				S: 'farmersdelight:canvas'
			}
		).id("comforts:sleeping_bag_" + color)

		event.shaped(
			Item.of(color + '_bed'),
			[
				'S',
				'P'
			],
			{
				P: "#minecraft:wooden_slabs",
				S: 'comforts:sleeping_bag_' + color
			}
		).id("minecraft:" + color + "_bed")

		event.shaped(
			Item.of('2x handcrafted:' + color + '_sheet'),
			[
				'XZX',
				'ZXZ'
			],
			{
				X: color + '_carpet',
				Z: "#forge:string"
			}
		).id("handcrafted:" + color + "_sheet")

		event.shaped(Item.of("handcrafted:" + color + "_cushion"),
			[
				"XCX",
				"CZC",
				"XCX"
			],
			{
				X: "handcrafted:" + color + "_sheet",
				C: "#forge:feathers",
				Z: "#forge:string"
			}
		).id("handcrafted:" + color + "_cushion")
	});

	wood.forEach(wood => {
		event.shaped('handcrafted:' + wood + '_fancy_bed',
			[
				'HP ',
				'PXP',
				' P '
			],
			{
				H: 'handcrafted:hammer',
				X: '#minecraft:beds',
				P: wood + '_planks'
			}
		).id("handcrafted:" + wood + "_fancy_bed")
	});

	wood_TF.forEach(wood => {
		event.shaped(`everycomp:hc/twilightforest/${wood}_fancy_bed`,
			[
				'HP ',
				'PXP',
				' P '
			],
			{
				H: 'handcrafted:hammer',
				X: '#minecraft:beds',
				P: `twilightforest:${wood}_planks`
			}
		).id(`everycomp:hc/twilightforest/${wood}_fancy_bed`)
	});

	wood_WR.forEach(wood => {
		event.shaped(`everycomp:hc/wizards_reborn/${wood}_fancy_bed`,
			[
				'HP ',
				'PXP',
				' P '
			],
			{
				H: 'handcrafted:hammer',
				X: '#minecraft:beds',
				P: `wizards_reborn:${wood}_planks`
			}
		).id(`everycomp:hc/wizards_reborn/${wood}_fancy_bed`)
	});

	wood_quark.forEach(wood => {
		event.shaped(`everycomp:hc/quark/${wood}_fancy_bed`,
			[
				'HP ',
				'PXP',
				' P '
			],
			{
				H: 'handcrafted:hammer',
				X: '#minecraft:beds',
				P: `quark:${wood}_planks`
			}
		).id(`everycomp:hc/quark/${wood}_fancy_bed`)
	});

	event.shaped(`everycomp:hc/minecraft/pale_oak_fancy_bed`,
		[
			'HP ',
			'PXP',
			' P '
		],
		{
			H: 'handcrafted:hammer',
			X: '#minecraft:beds',
			P: `pale_oak_planks`
		}
	).id(`everycomp:hc/minecraft/pale_oak_fancy_bed`)

	event.shaped("everycomp:hc/thermal/rubberwood_fancy_bed",
		[
			'HP ',
			'PXP',
			' P '
		],
		{
			H: 'handcrafted:hammer',
			X: '#minecraft:beds',
			P: "thermal:rubberwood_planks"
		}
	).id("everycomp:hc/thermal/rubberwood_fancy_bed")

	event.shaped("everycomp:hc/aether/skyroot_fancy_bed",
		[
			'HP ',
			'PXP',
			' P '
		],
		{
			H: 'handcrafted:hammer',
			X: '#minecraft:beds',
			P: "aether:skyroot_planks"
		}
	).id("everycomp:hc/aether/skyroot_fancy_bed")

	event.shaped("everycomp:hc/naturesaura/ancient_fancy_bed",
		[
			'HP ',
			'PXP',
			' P '
		],
		{
			H: 'handcrafted:hammer',
			X: '#minecraft:beds',
			P: "naturesaura:ancient_planks"
		}
	).id("everycomp:hc/naturesaura/ancient_fancy_bed")

	event.shaped("everycomp:hc/ars_nouveau/archwood_fancy_bed",
		[
			'HP ',
			'PXP',
			' P '
		],
		{
			H: 'handcrafted:hammer',
			X: '#minecraft:beds',
			P: "ars_nouveau:archwood_planks"
		}
	).id("everycomp:hc/ars_nouveau/archwood_fancy_bed")

	wood_AA.forEach(wood => {
		event.shaped(`everycomp:hc/ancient_aether/${wood}_fancy_bed`,
			[
				'HP ',
				'PXP',
				' P '
			],
			{
				H: 'handcrafted:hammer',
				X: '#minecraft:beds',
				P: `ancient_aether:${wood}_planks`
			}
		).id(`everycomp:hc/ancient_aether/${wood}_fancy_bed`)
	});

	wood_DA.forEach(wood => {
		event.shaped(`everycomp:hc/deep_aether/${wood}_fancy_bed`,
			[
				'HP ',
				'PXP',
				' P '
			],
			{
				H: 'handcrafted:hammer',
				X: '#minecraft:beds',
				P: `deep_aether:${wood}_planks`
			}
		).id(`everycomp:hc/deep_aether/${wood}_fancy_bed`)
	});

	wood_BWG.forEach(wood => {
		event.shaped(`everycomp:hc/biomeswevegone/${wood}_fancy_bed`,
			[
				'HP ',
				'PXP',
				' P '
			],
			{
				H: 'handcrafted:hammer',
				X: '#minecraft:beds',
				P: `biomeswevegone:${wood}_planks`
			}
		).id(`everycomp:hc/biomeswevegone/${wood}_fancy_bed`)
	});



	event.shaped('immersiveengineering:cushion',
		[
			"FFF",
			"FXF",
			"FFF"
		],
		{
			F: "immersiveengineering:hemp_fabric",
			X: "#handcrafted:cushions"
		}
	).id("immersiveengineering:crafting/cushion")

	event.remove({ output: 'minecraft:smoker' })
	event.shaped(
		Item.of('minecraft:smoker'),
		[
			'PPP',
			'PMP',
			'PHP'
		],
		{
			P: '#minecraft:logs',
			M: 'druidic_quest_core:primitive_machine',
			H: 'minecraft:furnace'
		}
	)

	event.remove({ output: 'minecraft:blast_furnace' })
	event.shaped(
		Item.of('minecraft:blast_furnace'),
		[
			'PPP',
			'PMP',
			'PHP'
		],
		{
			P: 'minecraft:smooth_stone',
			M: 'druidic_quest_core:primitive_machine',
			H: 'minecraft:furnace'
		}
	)
	event.remove('minecraft:observer')
	event.shapeless('minecraft:observer', ['druidic_quest_core:primitive_machine', 'minecraft:spider_eye'])

	event.remove('minecraft:dropper')
	event.shapeless('minecraft:dropper', ['druidic_quest_core:primitive_machine', 'quark:chute'])

	event.remove('minecraft:dispenser')
	event.shapeless('minecraft:dispenser', ['druidic_quest_core:primitive_machine', 'minecraft:bow'])

	event.remove({ output: 'minecraft:piston' })
	event.shapeless('minecraft:piston', ['druidic_quest_core:primitive_machine', 'create:piston_extension_pole'])

	event.replaceInput({ id: "immersiveengineering:crafting/conveyor_basic" }, "minecraft:redstone", "druidic_quest_core:primitive_machine")
	event.replaceInput({ id: "immersiveengineering:crafting/conveyor_extract" }, "immersiveengineering:component_iron", "woodenhopper:wooden_hopper")
	event.replaceInput({ id: "immersiveengineering:crafting/hemp_fabric" }, "#c:rods/wooden", "immersiveengineering:stick_treated")

	event.remove({ output: 'create:belt_connector' })
	event.shaped(
		Item.of('create:belt_connector'),
		[
			'PPP',
			'PMP',
			'PPP'
		],
		{
			P: "immersiveengineering:conveyor_basic",
			M: 'thermal:cured_rubber',
		}
	)

	event.remove('create:piston_extension_pole')
	event.shaped(
		Item.of('4x create:piston_extension_pole'),
		[
			'P',
			'M',
			'P'
		],
		{
			P: "#minecraft:planks",
			M: '#forge:ingots/iron'
		}
	)

	/// ======================================== Tier 2 Components ================================================================

	event.shapeless("2x thermal:phytogro", ["create:tree_fertilizer", "immersiveengineering:fertilizer", "wizards_reborn:flower_fertilizer", "thermal:apatite_dust"])

	event.shapeless("2x thermal:phytogro", ["thermal:phytogro", "3x thermal:apatite_dust"])

	event.shapeless("6x create:tree_fertilizer", [
		"2x #minecraft:small_flowers",
		"thermal:apatite_dust",
		"#c:coral",
		"vintagedelight:organic_mash"]
	)

	event.shapeless("4x create:tree_fertilizer", [
		"2x #minecraft:small_flowers",
		"thermal:apatite_dust",
		"#c:coral"]
	).id("create:crafting/appliances/tree_fertilizer")

	event.shapeless("2x create:tree_fertilizer", [
		"2x #minecraft:small_flowers",
		"thermal:apatite_dust",
		"vintagedelight:organic_mash"]
	).id("vintagedelight:organic_compost_tree_fertilizer")

	event.shapeless("2x immersiveengineering:fertilizer", ["#forge:dusts/sulfur", "#forge:slag", "bone_meal"]).id("immersiveengineering:crafting/fertilizer")

	event.shapeless("2x immersiveengineering:fertilizer", ["2x #forge:slag", "2x bone_meal"])

	event.shaped("create:transmitter",
		[
			"TTT",
			"CXC",
			"SES"
		],
		{
			T: "redstone_torch",
			C: "#forge:plates/copper",
			S: "#forge:ingots/storm",
			E: "ender_pearl",
			X: "comparator"
		}
	).id("create:crafting/materials/transmitter")

	event.shaped("kubejs:elemental_pump",
		[
			"PPP",
			"LXL",
			"PPP"
		],
		{
			P: "#forge:plates/arcanum_alloy",
			L: "#forge:plates/lead",
			X: "immersiveengineering:fluid_pump"
		}
	)

	event.shaped("kubejs:zanite_upgrade_parts",
		[
			"PPP",
			"PBP",
			"PPP"
		],
		{
			P: "#forge:gems/zanite",
			B: "bundle"
		}
	)

	event.shaped("kubejs:skyjade_upgrade_parts",
		[
			"PPP",
			"PBP",
			"PPP"
		],
		{
			P: "#forge:gems/skyjade",
			B: "bundle"
		}
	)

	event.shaped("kubejs:aura_generator_block",
		[
			"IGI",
			"EME",
			"IEI"
		],
		{
			I: "#forge:plates/infused_iron",
			G: '#forge:gears/infused_iron',
			M: "kubejs:magical_generator_block",
			E: "druidic_quest_core:nature_essence"
		}
	).id("kubejs:aura_generator_block")



	event.recipes.ars_nouveau.enchanting_apparatus(
		["kubejs:zinc_tool_handle", "blaze_rod", "#forge:storage_blocks/coal_coke", "#forge:storage_blocks/coal_coke"],
		"twilightforest:liveroot",
		"kubejs:carbon_infused_sturdy_handle",
		1000
	)

	event.recipes.ars_nouveau.enchanting_apparatus(
		["druidic_quest_core:ivy_block", "druidic_quest_core:ivy_block", "druidic_quest_core:ivy_block", "druidic_quest_core:ivy_block", "ars_nouveau:earth_essence", "ars_nouveau:earth_essence"],
		"kubejs:lemon_quartz",
		"kubejs:ivy_quartz",
		1000
	)



	event.custom({
		type: "lychee:lightning_channeling",
		post: [
			{ type: "drop_item", item: "kubejs:lemon_quartz" },
			{ type: "execute", command: "playsound irons_spellbooks:spell.poison_splash.begin neutral @p", hide: true }
		],
		item_in: [
			{ item: "quartz" },
			{ item: "thermal:lapis_dust" },
			{ item: "fruitsdelight:lemon_juice" },
			{ item: "fruitsdelight:lemon_juice" },
			{ item: "fruitsdelight:lemon_juice" },
			{ item: "fruitsdelight:lemon_juice" }
		]
	})

	event.shapeless("minecraft:heart_of_the_sea", ["ars_nouveau:water_essence", "8x minecraft:prismarine_crystals"])


	event.shaped(
		Item.of('kubejs:magic_machine'),
		[
			'CAC',
			'AXA',
			'CAC'
		],
		{
			X: "kubejs:basic_magic_machine",
			C: '#forge:plates/infused_iron',
			A: "druidic_quest_core:sturdy_deepslate"
		}
	)

	event.shaped(
		Item.of('create:filter'),
		[
			'CXC'
		],
		{
			X: "minecraft:iron_bars",
			C: '#minecraft:wool',
		}
	).id("create:crafting/kinetics/filter")

	event.shaped(
		Item.of('create:attribute_filter'),
		[
			'CCC',
			'CXC',
			'CCC'
		],
		{
			X: "create:filter",
			C: '#forge:nuggets/brass',
		}
	).id("create:crafting/kinetics/attribute_filter")

	event.remove('minecraft:iron_bars')
	event.shaped(
		Item.of('6x minecraft:iron_bars'),
		[
			'CCC',
			'CCC'
		],
		{
			C: '#forge:rods/iron',
		}
	)

	event.shaped(
		Item.of('6x quark:gold_bars'),
		[
			'CCC',
			'CCC'
		],
		{
			C: '#forge:rods/gold',
		}
	).id("quark:building/crafting/gold_bars")


	event.custom({
		type: "lychee:item_inside",
		contextual: [
			{ type: "location", predicate: { biome: "minecraft:lush_caves" } }
		],
		post: [
			{ type: "drop_item", item: "druidic_quest_core:nature_essence" },
			{ type: "execute", command: "playsound irons_spellbooks:spell.acid_orb.charge neutral @p", hide: "true" }
		],
		item_in: [
			{ item: "kubejs:sapling_ball" },
			{ item: "farmersdelight:rich_soil" },
			{ item: "ars_nouveau:source_gem" },
			{ item: "minecraft:honeycomb" }
		],
		block_in: "minecraft:water"
	})



	event.custom({
		type: "ars_nouveau:imbuement",
		count: 1,
		input: { item: "farmersdelight:canvas" },
		output: 'enigmaticlegacy:thicc_scroll',
		pedestalItems: [],
		source: 1000
	})

	event.custom({
		type: "lychee:item_inside",
		contextual: [
			{ type: "location", predicate: { position: { y: { min: 190, max: 320 } } } }
		],
		post: [
			{ type: "drop_item", item: "ars_nouveau:air_essence" },
			{ type: "execute", command: "playsound irons_spellbooks:spell.gust.cast neutral @p", hide: "true" }
		],
		item_in: [
			{ item: "druidic_quest_core:nature_essence" },
			{ item: "kubejs:air_infused_arcanum" },
			{ item: "ars_nouveau:source_gem" },
			{ item: "minecraft:feather" }
		],
		block_in: "minecraft:water"
	})

	event.custom({
		type: "lychee:item_inside",
		contextual: [
			{ type: "location", predicate: { biome: "minecraft:lush_caves" } }
		],
		post: [
			{ type: "drop_item", item: "ars_nouveau:water_essence" },
			{ type: "execute", command: "playsound minecraft:entity.dolphin.jump neutral @p", hide: "true" }
		],
		item_in: [
			{ item: "druidic_quest_core:nature_essence" },
			{ item: "kubejs:water_infused_arcanum" },
			{ item: "ars_nouveau:source_gem" },
			{ tag: "minecraft:fishes" }
		],
		block_in: "minecraft:water"
	})

	event.remove({ output: 'ars_nouveau:arcane_pedestal' })
	event.shaped(
		Item.of('ars_nouveau:arcane_pedestal'),
		[
			'WWW',
			'GXG',
			'GWG'
		],
		{
			X: 'irons_spellbooks:pedestal',
			W: 'kubejs:source_alloy_ingot',
			G: "#forge:rods/gold"

		}
	)

	event.replaceInput({ id: 'naturescompass:natures_compass' }, '#minecraft:saplings', 'druidic_quest_core:nature_essence')
	/// ======================================== Tier 2 Machines ================================================================

	event.shaped("naturesaura:hopper_upgrade",
		[
			"DED",
			"DXD",
			"DND"
		],
		{
			D: "druidic_quest_core:sturdy_deepslate",
			E: "minecraft:ender_pearl",
			N: "twilightforest:naga_scale",
			X: "kubejs:magic_machine"
		}
	).id("naturesaura:hopper_upgrade")

	event.shaped("rubinated_nether:ruby_brazier",
		[
			"FRF",
			"CXC",
			"OOO"
		],
		{
			F: "ars_nouveau:fire_essence",
			C: "#forge:rods/copper",
			X: "kubejs:magic_machine",
			R: "thermal:ruby_block",
			O: "minecraft:obsidian"
		}
	).id("rubinated_nether:ruby_brazier")

	event.shaped("create:packager",
		[
			" R ",
			"R R",
			"PXP"
		],
		{
			R: "#forge:rods/storm",
			P: "piston",
			X: "kubejs:basic_magic_machine"
		}
	).id("create:crafting/logistics/packager")

	event.shaped("create:repackager",
		[
			" R ",
			"R R",
			"PXP"
		],
		{
			R: "#forge:rods/iron",
			P: "piston",
			X: "kubejs:basic_magic_machine"
		}
	).id("create:crafting/logistics/repackager")

	event.remove({ id: "create:crafting/logistics/repackager_from_conversion" })
	event.remove({ id: "create:crafting/logistics/packager_from_conversion" })

	event.shaped("create:stock_link",
		[
			" T ",
			"BVB"
		],
		{
			B: "#forge:plates/brass",
			V: "create:item_vault",
			T: "create:transmitter"
		}
	).id("create:crafting/logistics/stock_link")

	event.shaped("create:stock_ticker",
		[
			"GGG",
			"GLG",
			"SXS"
		],
		{
			G: "#c:glass_blocks",
			L: "create:stock_link",
			S: "#forge:gears/storm",
			X: "kubejs:basic_magic_machine"
		}
	).id("create:crafting/logistics/stock_ticker")

	event.shaped("create:factory_gauge",
		[
			"SBS",
			"BXB",
			"SBS"
		],
		{
			X: "naturesaura:auto_crafter",
			S: "#forge:plates/storm",
			B: "#forge:plates/brass"
		}
	).id("create:crafting/logistics/factory_gauge")

	event.shaped("naturesaura:spring",
		[
			"WTW",
			"WXW",
			"WPW"
		],
		{
			W: "ars_nouveau:water_essence",
			T: "create:fluid_tank",
			X: "kubejs:magic_machine",
			P: "immersiveengineering:fluid_pump"
		}
	).id("naturesaura:spring")

	event.shaped("mbd2:elemental_extractor",
		[
			"HAH",
			"AXA",
			"HTH"
		],
		{
			H: "kubejs:carbon_infused_sturdy_handle",
			A: "#forge:plates/arcanum_alloy",
			T: "create:fluid_tank",
			X: "kubejs:basic_magic_machine"
		}
	)

	event.shaped("craftingstation:crafting_station",
		[
			"ACA",
			"PXP",
			"APA"
		],
		{
			P: "create:experience_block",
			A: "wizards_reborn:arcane_wood_log",
			C: "minecraft:crafting_table",
			X: "kubejs:basic_magic_machine"
		}
	).id("craftingstation:crafting_station")

	event.shaped("kubejs:pressing_catalyst",
		[
			"AGA",
			"PXP",
			"AYA"
		],
		{
			P: "immersiveengineering:hammer",
			A: "minecraft:anvil",
			G: "#forge:gears/source_alloy",
			Y: "#forge:gears/arcanum_alloy",
			X: "kubejs:basic_magic_machine"
		}
	)

	event.shaped("ars_nouveau:enchanting_apparatus",
		[
			"PPP",
			"GBG",
			"PXP"
		],
		{
			P: "#forge:plates/source_alloy",
			G: "#forge:gears/gold",
			B: "quark:diamond_heart",
			X: "kubejs:basic_magic_machine"
		}
	)
	event.shaped("ars_nouveau:ritual_brazier",
		[
			"PPP",
			"RMR",
			"RTR"
		],
		{
			P: "#forge:plates/source_alloy",
			R: "#forge:rods/gold",
			M: "kubejs:basic_magic_machine",
			T: "ars_nouveau:arcane_pedestal"
		}
	).id("ars_nouveau:ritual_brazier")

	event.shaped("mbd2:elemental_recycler",
		[
			"PPP",
			"PXP",
			"RMR"
		],
		{
			P: "#forge:plates/arcanum_alloy",
			X: "mbd2:basic_recycler",
			M: "kubejs:basic_magic_machine",
			R: "kubejs:carbon_infused_sturdy_handle"
		}
	)

	event.shaped("naturesaura:mover_cart",
		[
			" B ",
			"BIB",
			" C "
		],
		{
			B: "naturesaura:infused_brick",
			I: "naturesaura:infused_iron_block",
			C: "minecart"
		}
	).id("naturesaura:mover_cart")

	event.shaped("naturesaura:blast_furnace_booster",
		[
			" B ",
			"AXT",
			"SGS"
		],
		{
			B: "blast_furnace",
			A: "naturesaura:token_anger",
			X: "kubejs:basic_magic_machine",
			T: "naturesaura:token_sorrow",
			S: "#forge:plates/stone",
			G: "thermal:ruby_block"
		}
	).id("naturesaura:blast_furnace_booster")

	event.shaped("naturesaura:firework_generator",
		[
			"BTB",
			"PMP",
			"BTB"
		],
		{
			B: "naturesaura:infused_stone",
			T: "naturesaura:token_terror",
			M: "kubejs:aura_generator_block",
			P: "firework_rocket"
		}
	).id("naturesaura:firework_generator")

	event.shaped("naturesaura:projectile_generator",
		[
			"BTB",
			"PMP",
			"BTB"
		],
		{
			B: "naturesaura:infused_stone",
			T: "naturesaura:token_anger",
			M: "kubejs:aura_generator_block",
			P: "kubejs:lightning_arrow"
		}
	).id("naturesaura:projectile_generator")

	event.shaped("naturesaura:chorus_generator",
		[
			"BTB",
			"PMP",
			"BTB"
		],
		{
			B: "end_stone",
			T: "naturesaura:token_rage",
			M: "kubejs:aura_generator_block",
			P: "chorus_flower"
		}
	).id("naturesaura:chorus_generator")

	event.shaped("naturesaura:potion_generator",
		[
			"BTB",
			"PMP",
			"BTB"
		],
		{
			B: "nether_bricks",
			T: "naturesaura:token_fear",
			M: "kubejs:aura_generator_block",
			P: "blaze_rod"
		}
	).id("naturesaura:potion_generator")

	event.shaped("naturesaura:animal_generator",
		[
			"BTB",
			"PMP",
			"BTB"
		],
		{
			B: "nether_bricks",
			T: "naturesaura:token_sorrow",
			M: "kubejs:aura_generator_block",
			P: "quark:soul_bead"
		}
	).id("naturesaura:animal_generator")

	event.shaped("naturesaura:slime_split_generator",
		[
			"BPB",
			"BMB",
			"BTB"
		],
		{
			B: "slime_block",
			M: "kubejs:aura_generator_block",
			P: "naturesaura:token_joy",
			T: "naturesaura:token_sorrow"
		}
	).id("naturesaura:slime_split_generator")

	event.shaped("naturesaura:flower_generator",
		[
			"BTB",
			"PMP",
			"BTB"
		],
		{
			B: "wizards_reborn:bunch_of_things",
			P: "peony",
			M: "kubejs:aura_generator_block",
			T: "naturesaura:token_joy"
		}
	).id("naturesaura:flower_generator")

	event.shaped("naturesaura:moss_generator",
		[
			"BTB",
			"PMP",
			"BTB"
		],
		{
			B: "mossy_cobblestone",
			P: "moss_block",
			M: "kubejs:aura_generator_block",
			T: "naturesaura:token_joy"
		}
	).id("naturesaura:moss_generator")

	event.shaped("naturesaura:furnace_heater",
		[
			"FTF",
			"PMP",
			"SSS"
		],
		{
			S: "naturesaura:infused_stone",
			P: "#forge:plates/tainted_gold",
			M: "kubejs:basic_magic_machine",
			F: "ars_nouveau:fire_essence",
			T: "naturesaura:token_fear"
		}
	)

	event.shaped("naturesaura:crushing_catalyst",
		[
			"PTP",
			"GMG",
			"PWP"
		],
		{
			P: "#forge:plates/stone",
			W: "woodenhopper:wooden_hopper",
			M: "druidic_quest_core:primitive_machine",
			G: "#forge:gears/stone",
			T: "naturesaura:token_anger"

		}
	)

	event.shaped("ars_nouveau:relay",
		[
			"GPG",
			"RTR",
			"GPG"
		],
		{
			P: "#forge:plates/source_alloy",
			G: "#forge:plates/gold",
			R: "#forge:rods/gold",
			T: "wizards_reborn:wissen_translator"
		}
	).id("ars_nouveau:relay")


	event.shaped('ars_nouveau:basic_spell_turret',
		[
			"RDR",
			"GMG",
			"RBR"
		],
		{
			R: "#forge:rods/gold",
			D: "dispenser",
			G: "#forge:gears/gold",
			M: "kubejs:basic_magic_machine",
			B: "#forge:storage_blocks/source"
		}
	).id("kubejs:poop3")

	event.remove({ id: 'ars_nouveau:rotating_turret_to_basic_spell_turret' })


	event.shaped('ars_nouveau:rotating_spell_turret',
		[
			" G ",
			"GMG",
			" G "
		],
		{
			G: "#forge:gears/stone",
			M: "ars_nouveau:basic_spell_turret"
		}
	).id("kubejs:poop2")


	event.shaped('ars_nouveau:spell_turret',
		[
			"XXX",
			"GMG",
			"XXX"
		],
		{
			G: "#forge:gears/tainted_gold",
			M: "ars_nouveau:basic_spell_turret",
			X: "create:experience_block"
		}
	).id("kubejs:poop1")



	event.shaped('ars_nouveau:timer_spell_turret',
		[
			"CRC",
			"CMC",
			"CHC"
		],
		{
			C: "supplementaries:cog_block",
			M: "ars_nouveau:basic_spell_turret",
			H: 'supplementaries:hourglass',
			R: "create:pulse_repeater"
		}
	).id("kubejs:poop")

	event.shaped("thermal:device_collector",
		[
			"LYL",
			"OXO",
			"THT"
		],
		{
			L: "#forge:plates/lead",
			Y: "#forge:gears/tin",
			O: "#forge:gears/lead",
			X: "naturesaura:hopper_upgrade",
			H: "hopper",
			T: "#forge:plates/tin"

		}
	).id("thermal:device_collector")

	function SourceGeneratorsRecipe(type, ingredient) {
		event.shaped("ars_nouveau:" + type + "_sourcelink",
			[
				"GXG",
				"GMG",
				"GXG"
			],
			{
				G: "#forge:rods/gold",
				M: "kubejs:magical_generator_block",
				X: ingredient
			}
		).id("ars_nouveau:" + type + "_sourcelink")
	}

	SourceGeneratorsRecipe("volcanic", "ars_nouveau:fire_essence")
	SourceGeneratorsRecipe("agronomic", "druidic_quest_core:nature_essence")
	SourceGeneratorsRecipe("vitalic", "kubejs:death_essence")
	SourceGeneratorsRecipe("mycelial", "quark:glow_shroom")
	SourceGeneratorsRecipe("alchemical", 'immersive_weathering:golden_moss_clump')

	event.shaped("starbunclemania:fluid_sourcelink",
		[
			"GXG",
			"GMG",
			"GXG"
		],
		{
			G: "#forge:rods/gold",
			M: "kubejs:magical_generator_block",
			X: "bucket"
		}
	).id("starbunclemania:fluid_sourcelink")

	event.shaped("mbd2:elemental_evaporator",
		[
			"CXC",
			"GFG",
			"CMC"
		],
		{
			F: "blast_furnace",
			X: "#forge:glass",
			M: "kubejs:basic_magic_machine",
			C: "kubejs:carbon_infused_sturdy_handle",
			G: "#forge:plates/arcanum_alloy"
		}
	)

	/*
	event.shaped(
		Item.of('elementalcraft:extractor'), 
		[
		  'CAC',
		  'AMA',
		  'CXC'
		],
		{
		  M: "kubejs:basic_magic_machine",
		  X: "immersiveengineering:fluid_pump",
		  C: 'kubejs:carbon_infused_sturdy_handle',
		  A: '#forge:plates/arcanum_alloy',
		}
	).id("elementalcraft:extractor")
	*/

	event.shaped(
		Item.of('mbd2:elemental_infuser'),
		[
			'CIC',
			'IMI',
			'CIC'
		],
		{
			M: "kubejs:basic_magic_machine",
			I: '#forge:plates/arcanum_alloy',
			C: 'kubejs:carbon_infused_sturdy_handle'
		}
	)


	event.shaped(
		Item.of('ars_nouveau:arcane_core'),
		[
			'AAA',
			'RXR',
			'AMA'
		],
		{
			M: "kubejs:basic_magic_machine",
			X: "quark:diamond_heart",
			R: '#forge:rods/gold',
			A: 'kubejs:source_alloy_ingot'
		}
	).id("ars_nouveau:arcane_core")

	event.remove({ output: "ars_nouveau:source_jar" })

	event.remove('irons_spellbooks:pedestal')
	event.shaped(
		Item.of('irons_spellbooks:pedestal'),
		[
			'H',
			'F',
			'H'
		],
		{

			F: "create:depot",
			H: 'minecraft:andesite'
		}
	)

	event.remove({ output: 'create:schematicannon' })
	event.shaped(
		Item.of('create:schematicannon'),
		[
			' BB',
			'WDW',
			'SFS'
		],
		{
			S: "minecraft:smooth_stone",
			W: "#minecraft:logs",
			D: "minecraft:dispenser",
			B: '#forge:storage_blocks/iron',
			F: "ars_nouveau:fire_essence"
		}
	)


	event.remove({ output: "ars_nouveau:mob_jar" })
	event.shapeless("ars_nouveau:mob_jar", ["ars_nouveau:source_jar", "supplementaries:cage"])
	event.shaped(
		Item.of('3x quark:pipe'),
		[
			'CGC'
		],
		{
			C: '#forge:ingots/copper',
			G: 'wizards_reborn:alchemy_glass'
		}
	)

	event.remove({ output: 'quark:feeding_trough' })
	event.shaped(
		Item.of('quark:feeding_trough'),
		[
			'CGC',
			'CCC'
		],
		{
			C: '#forge:treated_wood',
			G: 'druidic_quest_core:nature_essence'
		}
	)

	event.remove({ output: 'irons_spellbooks:arcane_anvil' })
	event.shaped(
		Item.of('irons_spellbooks:arcane_anvil'),
		[
			'DMD',
			' A ',
			'GGG'
		],
		{
			D: '#forge:gems/diamond',
			A: 'minecraft:anvil',
			M: 'kubejs:magic_machine',
			G: 'minecraft:polished_deepslate'
		}
	)

	event.remove({ output: "naturesaura:nature_altar" })


	event.remove({ output: 'kubejs:zinc_tool_handle' })
	event.custom({
		type: "ars_nouveau:enchanting_apparatus",
		"keepNbtOfReagent": false,
		"output": { item: "kubejs:zinc_tool_handle" },
		"pedestalItems": [
			{ item: "minecraft:leather" },
			{ item: "minecraft:string" },
			{ item: "naturesaura:ancient_stick" },
			{ tag: "forge:ingots/zinc" },
			{ tag: "forge:ingots/zinc" },
			{ tag: "forge:ingots/zinc" }
		],
		"reagent": [
			{ item: 'immersiveengineering:stick_treated' }
		],
		"sourceCost": 0
	})

	///========================================= Tier 3 Components ================================================================

	event.shaped(
		Item.of('wither_skeleton_skull'),
		[
			'BBB',
			'BFB',
			'BBB'
		],
		{
			F: "minecraft:skeleton_skull",
			B: "wither_rose",
		}
	)

	event.shaped(
		Item.of('enigmaticlegacy:infinimeal'),
		[
			'BXB',
			'XFX',
			'BXB'
		],
		{
			F: "enigmaticlegacy:earth_heart",
			B: "thermal:compost",
			X: "druidic_quest_core:nature_essence"
		}
	).id("enigmaticlegacy:infinimeal")


	event.recipes.farmersdelight.cutting("deep_aether:goldenleaf_berries", "#forge:tools/knives", Item.of("naturesaura:gold_leaf")
		.withChance(0.5))

	event.custom(
		{
			type: "lychee:block_crushing",
			post: [
				{ type: "drop_item", item: "sophisticatedstorage:storage_link" },
				{ type: "execute", command: "playsound immersiveengineering:metal_press_smash neutral @p", hide: true }
			],
			item_in: [
				{ item: "ender_pearl" },
				{ item: "sophisticatedstorage:advanced_pickup_upgrade" },
				{ tag: "forge:plates/nickel" },
				{ item: "kubejs:ivy_quartz" }
			]
		}
	).id("sophisticatedstorage:storage_link")
	event.remove({ id: "sophisticatedstorage:storage_link_from_controller" })

	event.shaped(
		Item.of('create:brass_hand'),
		[
			' A ',
			'BCB',
			' B '
		],
		{
			C: 'alexsmobs:falconry_glove',
			B: '#forge:plates/brass',
			A: 'create:andesite_alloy'

		}
	).id("create:crafting/kinetics/brass_hand")

	event.custom({
		type: "create:sequenced_assembly",
		ingredient: { item: "kubejs:ivy_quartz" },
		loops: 12,
		results: [
			{ item: "kubejs:salmon_quartz" }
		],
		"sequence": [
			{
				type: "create:deploying",
				ingredients: [
					{ item: "kubejs:unstable_ivy_quartz" },
					{ tag: "forge:raw_fishes/salmon" }
				],
				results: [
					{ item: "kubejs:unstable_ivy_quartz" }
				]
			},
			{
				type: "create:deploying",
				ingredients: [
					{ item: "kubejs:unstable_ivy_quartz" },
					{ tag: "forge:raw_fishes/salmon" }
				],
				results: [
					{ item: "kubejs:unstable_ivy_quartz" }
				]
			},
			{
				type: "create:deploying",
				ingredients: [
					{ item: "kubejs:unstable_ivy_quartz" },
					{ item: "farmersdelight:salmon_roll" }
				],
				results: [
					{ item: "kubejs:unstable_ivy_quartz" }
				]
			},
			{
				type: "create:deploying",
				ingredients: [
					{ item: "kubejs:unstable_ivy_quartz" },
					{ item: "farmersdelight:grilled_salmon" }
				],
				results: [
					{ item: "kubejs:unstable_ivy_quartz" }
				]
			},
		],
		"transitionalItem": { item: "kubejs:unstable_ivy_quartz" }
	})


	event.remove({ output: "minecraft:clock" })
	event.custom({
		type: "create:sequenced_assembly",
		"ingredient": {
			tag: "forge:plates/gold"
		},
		"loops": 1,
		results: [
			{
				item: "minecraft:clock"
			}
		],
		"sequence": [
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:unassembled_clock"
					},
					{
						item: "kubejs:redstone_core"
					}
				],
				results: [
					{
						item: "kubejs:unassembled_clock"
					}
				]
			},
			{
				type: "create:pressing",
				ingredients: [
					{
						item: "kubejs:unassembled_clock"
					}
				],
				results: [
					{
						item: "kubejs:unassembled_clock"
					}
				]
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:unassembled_clock"
					},
					{
						tag: "forge:rods/gold"
					}
				],
				results: [
					{
						item: "kubejs:unassembled_clock"
					}
				]
			},
			{
				type: "create:pressing",
				ingredients: [
					{
						item: "kubejs:unassembled_clock"
					}
				],
				results: [
					{
						item: "kubejs:unassembled_clock"
					}
				]
			}
		],
		"transitionalItem": {
			item: "kubejs:unassembled_clock"
		}
	}
	)

	event.remove({ output: "minecraft:compass" })
	event.custom({
		type: "create:sequenced_assembly",
		"ingredient": {
			tag: "forge:plates/iron"
		},
		"loops": 1,
		results: [
			{
				item: "minecraft:compass"
			}
		],
		"sequence": [
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:unassembled_compass"
					},
					{
						item: "kubejs:redstone_core"
					}
				],
				results: [
					{
						item: "kubejs:unassembled_compass"
					}
				]
			},
			{
				type: "create:pressing",
				ingredients: [
					{
						item: "kubejs:unassembled_compass"
					}
				],
				results: [
					{
						item: "kubejs:unassembled_compass"
					}
				]
			},
			{
				type: "create:deploying",
				ingredients: [
					{
						item: "kubejs:unassembled_compass"
					},
					{
						tag: "forge:rods/iron"
					}
				],
				results: [
					{
						item: "kubejs:unassembled_compass"
					}
				]
			},
			{
				type: "create:pressing",
				ingredients: [
					{
						item: "kubejs:unassembled_compass"
					}
				],
				results: [
					{
						item: "kubejs:unassembled_compass"
					}
				]
			}
		],
		"transitionalItem": {
			item: "kubejs:unassembled_compass"
		}
	}
	)


	event.shapeless('9x create:andesite_alloy', ['create:andesite_alloy_block'])



	event.remove({ output: 'minecraft:cauldron' })
	event.shaped(
		Item.of('minecraft:cauldron'),
		[
			' I ',
			'IXI',
			' I '
		],
		{
			X: 'create:basin',
			I: '#forge:ingots/iron'
		}
	)

	event.shaped(
		Item.of('kubejs:andesite_machine'),
		[
			'AYA',
			'GXG',
			'AZA'
		],
		{
			X: 'minecraft:dispenser',
			Z: 'kubejs:redstone_core',
			A: 'create:andesite_casing',
			Y: 'minecraft:hopper',
			G: '#forge:gears/andesite'
		}
	)




	///======================================== Tier 3 Machines =======================================================================

	event.shaped("2x irons_spellbooks:portal_frame",
		[
			"GSG",
			"G G",
			"GMG"
		],
		{
			G: "#forge:glass/alchemy",
			S: "ars_nouveau:stable_warp_scroll",
			M: "kubejs:magic_machine"
		}
	).id("irons_spellbooks:portal_frame")

	event.shaped("mbd2:infernal_smelter",
		[
			"FBF",
			"FXF",
			"GZG"
		],
		{
			G: "#forge:gears/uranium",
			F: "ars_nouveau:fire_essence",
			X: "blast_furnace",
			Z: "kubejs:magic_machine",
			B: "kubejs:infernal_bricks"
		}
	)

	event.shaped("kubejs:infernal_bricks", ["PFP", "FXF", "PFP"],
		{
			P: "#forge:plates/uranium",
			F: "ars_nouveau:fire_essence",
			X: "immersiveengineering:cokebrick"
		}
	)

	event.shaped("naturesaura:spawn_lamp",
		[
			"CTC",
			"LXL",
			"CGC"
		],
		{
			C: "kubejs:carbon_infused_sturdy_handle",
			L: "kubejs:light_essence",
			X: "kubejs:magic_machine",
			G: "minecraft:glass",
			T: "naturesaura:token_euphoria"
		}
	).id("naturesaura:spawn_lamp")

	event.shaped("aether:altar",
		[
			"PGP",
			"PXP",
			"SMS"
		],
		{
			S: "#forge:plates/stone",
			P: "#forge:plates/ironwood",
			G: "#forge:gears/ironwood",
			M: "enigmaticlegacy:mending_mixture",
			X: "kubejs:magic_machine"
		}
	).id("aether:altar")

	event.shaped("mbd2:alloy_kiln",
		[
			"BFB",
			"BXB",
			"BKB"
		],
		{
			B: "#forge:plates/bronze",
			F: "ars_nouveau:fire_essence",
			X: "minecraft:blast_furnace",
			K: "immersiveengineering:alloybrick"
		}
	)

	event.shaped("naturesaura:conversion_catalyst",
		[
			"PSP",
			"GMG",
			"PTP"
		],
		{
			P: "#forge:plates/ironwood",
			S: "#forge:gears/infused_iron",
			M: "kubejs:magic_machine",
			G: "kubejs:improved_alchemical_dust",
			T: "naturesaura:token_sorrow"

		}
	)

	event.shaped("mbd2:elemental_binder",
		[
			"PIP",
			"RGR",
			"PIP"
		],
		{
			P: "#forge:plates/arcanum_alloy",
			R: "kubejs:carbon_infused_sturdy_handle",
			G: "#forge:gears/arcane_gold",
			I: "mbd2:elemental_infuser"
		}
	)

	event.shaped("kubejs:vine_generator",
		[
			"MGM",
			"SXS",
			"MZM"
		],
		{
			M: "druidic_quest_core:ivy_block",
			G: "immersive_weathering:golden_moss_clump",
			X: "kubejs:magic_machine",
			Z: "#forge:gears/tainted_gold",
			S: "shears"
		}
	)

	event.shaped("create:mechanical_arm",
		[
			"GRA",
			" B ",
			"CMC"
		],
		{
			G: "ars_nouveau:glyph_interact",
			R: "#forge:rods/brass",
			A: "#forge:gears/andesite",
			B: "#forge:gears/brass",
			C: "create:brass_casing",
			M: "kubejs:andesite_machine"
		}
	).id("create:crafting/kinetics/mechanical_arm")

	event.shaped("create:mechanical_piston",
		[
			"P",
			"M",
			"R"
		],
		{
			P: "piston",
			M: "kubejs:andesite_machine",
			R: "create:piston_extension_pole"
		}
	).id("create:crafting/kinetics/mechanical_piston")

	event.shaped("create:sticky_mechanical_piston",
		[
			"P",
			"M",
			"R"
		],
		{
			P: "sticky_piston",
			M: "kubejs:andesite_machine",
			R: "create:piston_extension_pole"
		}
	)

	event.shaped("create:sticker",
		[
			"CSC",
			"CMC",
			"CRC"
		],
		{
			C: "#c:cobblestones",
			M: "druidic_quest_core:primitive_machine",
			S: "slime_block",
			R: "supplementaries:cog_block"
		}
	).id("create:crafting/kinetics/sticker")

	event.shaped("create:rotation_speed_controller",
		[
			"PGP",
			"AMD",
			"PPP"
		],
		{
			P: "#forge:plates/brass",
			G: "#forge:gears/brass",
			A: "ars_nouveau:glyph_accelerate",
			D: "ars_nouveau:glyph_decelerate",
			M: "kubejs:andesite_machine"
		}
	).id("create:crafting/kinetics/rotation_speed_controller")

	event.shaped("create:andesite_funnel",
		[
			" A ",
			"ACA",
			" A "
		],
		{
			A: "andesite",
			C: "immersiveengineering:conveyor_extract"
		}
	).id("create:crafting/logistics/andesite_funnel")


	event.shaped("create:steam_engine",
		[
			"PFP",
			"PAP",
			"PWP"
		],
		{
			P: "#forge:plates/copper",
			A: "kubejs:andesite_machine",
			F: "ars_nouveau:fire_essence",
			W: "ars_nouveau:water_essence"
		}
	).id("create:crafting/kinetics/steam_engine")

	event.shaped("2x create:redstone_link",
		[
			"T",
			"C",
			"E"
		],
		{
			T: "redstone_torch",
			C: "create:brass_casing",
			E: "kubejs:ender_essence"
		}
	).id("create:crafting/logistics/redstone_link")

	event.shaped(
		Item.of('create:mechanical_press'),
		[
			'PXP',
			'PYP',
			'PZP'
		],
		{
			P: 'create:andesite_casing',
			X: 'kubejs:andesite_machine',
			Y: "piston",
			Z: "kubejs:pressing_catalyst"
		}
	).id("create:crafting/kinetics/mechanical_press")

	event.shaped(
		Item.of('sophisticatedstorage:controller'),
		[
			'PXP',
			'LYL',
			'PZP'
		],
		{
			P: '#forge:plates/silver',
			X: 'kubejs:ender_essence',
			Y: "sophisticatedstorage:gold_barrel",
			Z: "kubejs:redstone_core",
			L: "sophisticatedstorage:storage_link"
		}
	).id("sophisticatedstorage:controller")

	event.remove({ output: 'thermal:device_rock_gen' })
	event.shaped(
		Item.of('thermal:device_rock_gen'),
		[
			'SBS',
			'WXL',
			'IGI'
		],
		{
			L: 'minecraft:lava_bucket',
			B: 'ars_nouveau:glyph_break',
			I: '#forge:plates/tin',
			X: 'kubejs:andesite_machine',
			W: 'minecraft:water_bucket',
			S: '#forge:plates/lead',
			G: '#forge:gears/tin'
		}
	)

	event.remove({ output: 'farmersdelight:cooking_pot' })
	event.shaped(
		Item.of('farmersdelight:cooking_pot'),
		[
			' Y ',
			' Z ',
			'IXI'
		],
		{
			X: 'minecraft:cauldron',
			Y: 'minecraft:iron_shovel',
			Z: 'minecraft:heart_of_the_sea',
			I: 'minecraft:brick'
		}
	)

	event.remove({ output: 'irons_spellbooks:alchemist_cauldron' })
	event.shaped(
		Item.of('irons_spellbooks:alchemist_cauldron'),
		[
			'ICI',
			'IMI',
			'IFI'
		],
		{
			I: '#forge:ingots/iron',
			C: 'minecraft:cauldron',
			M: 'kubejs:andesite_machine',
			F: 'ars_nouveau:fire_essence'
		}
	)

	event.shaped("create:mechanical_drill",
		["AXA", "AYA", "AZA"],
		{ A: "create:andesite_casing", X: "thermal:drill_head", Y: "kubejs:andesite_machine", Z: "ars_nouveau:glyph_break" }).id("create:crafting/kinetics/mechanical_drill")

	event.shaped("create:mechanical_saw",
		["AXA", "AYA", "AZA"],
		{ A: "create:andesite_casing", X: "thermal:saw_blade", Y: "kubejs:andesite_machine", Z: "ars_nouveau:glyph_fell" }).id("create:crafting/kinetics/mechanical_saw")

	event.shaped("create:mechanical_harvester",
		["AXA", "AYA", "AZA"],
		{ A: "create:andesite_casing", X: "immersiveengineering:razor_wire", Y: "kubejs:andesite_machine", Z: "ars_nouveau:glyph_harvest" }).id("create:crafting/kinetics/mechanical_harvester")

	event.shaped("create:mechanical_plough",
		["AXA", "AYA", "AZA"],
		{ A: "create:andesite_casing", X: "tombstone:grave_plate", Y: "kubejs:andesite_machine", Z: "ars_nouveau:glyph_touch" }).id("create:crafting/kinetics/mechanical_plough")

	event.shaped("create:encased_fan",
		["AXA", "AYA", "AZA"],
		{ A: "create:andesite_casing", X: "create:propeller", Y: "kubejs:andesite_machine", Z: "ars_nouveau:glyph_gust" }).id("create:crafting/kinetics/encased_fan")

	event.shaped("create:mechanical_mixer",
		["AXA", "AYA", "AZA"],
		{ A: "create:andesite_casing", X: "create:whisk", Y: "kubejs:andesite_machine", Z: "create:cogwheel" }).id("create:crafting/kinetics/mechanical_mixer")

	event.shaped("create:mechanical_roller",
		["AXA", "AYA", "AZA"],
		{ A: "create:andesite_casing", X: "create:crushing_wheel", Y: "kubejs:andesite_machine", Z: "ars_nouveau:glyph_exchange" }).id("create:crafting/kinetics/mechanical_roller")

	event.shaped("create:weighted_ejector",
		["AXA", "AYA", "AZA"],
		{ A: "create:andesite_casing", X: "create:depot", Y: "supplementaries:spring_launcher", Z: "create:cogwheel" }).id("create:crafting/kinetics/weighted_ejector")

	event.shaped("create:deployer",
		["AXA", "AYA", "AZA"],
		{ A: "create:andesite_casing", X: "create:brass_hand", Y: "kubejs:andesite_machine", Z: "ars_nouveau:glyph_interact" }).id("create:crafting/kinetics/deployer")

	event.shaped("create:portable_storage_interface",
		["AXA", "AYA", "AXA"],
		{ A: "create:andesite_casing", X: "create:chute", Y: "kubejs:andesite_machine", }).id("create:crafting/kinetics/portable_storage_interface")

	//============================================ Tier 4 Components ========================================================================================
	event.remove({ id: "immersiveengineering:blastfurnace/steel_block" })

	event.shaped("immersiveengineering:light_engineering",
		[
			"SCS",
			"CXC",
			"SCS"
		],
		{
			C: "immersiveengineering:component_iron",
			S: "thermal:iron_plate",
			X: "kubejs:steel_machine"
		}
	).id("immersiveengineering:crafting/light_engineering")

	event.shaped("immersiveengineering:heavy_engineering",
		[
			"SCS",
			"CXC",
			"SCS"
		],
		{
			C: "immersiveengineering:component_steel",
			S: "druidic_quest_core:steel_plate",
			X: "kubejs:steel_machine"
		}
	).id("immersiveengineering:crafting/heavy_engineering")

	event.shaped("immersiveengineering:rs_engineering",
		[
			"SCS",
			"CXC",
			"SCS"
		],
		{
			C: "kubejs:redstone_core",
			S: "immersiveengineering:sheetmetal_steel",
			X: "kubejs:steel_machine"
		}
	).id("immersiveengineering:crafting/rs_engineering")


	event.shaped("thermal:redstone_servo",
		[
			"RGR",
			"PGP",
			"RGR"
		],
		{
			R: "repeater",
			P: "create:mechanical_piston",
			G: "#forge:gears/iron"
		}
	).id("thermal:redstone_servo")

	event.recipes.create.mixing("create:rose_quartz", ["kubejs:salmon_quartz", "ars_nouveau:conjuration_essence", "wither_rose"]).id("create:crafting/materials/rose_quartz").heated()

	event.shaped('immersiveengineering:drillhead_iron',
		[
			"DP ",
			"PGP",
			" PP"
		],
		{
			D: "thermal:drill_head",
			P: "#forge:plates/iron",
			G: "ars_nouveau:glyph_break"
		}
	).id("immersiveengineering:crafting/drillhead_iron")

	event.shaped("immersiveengineering:drillhead_steel",
		[
			"SSS",
			"SDS",
			"SSS"
		],
		{
			S: "#forge:plates/steel",
			D: "immersiveengineering:drillhead_iron"
		}
	).id("immersiveengineering:crafting/drillhead_steel")

	event.remove({ id: 'immersiveengineering:blastfurnace/steel' })


	event.custom({

		type: "immersiveengineering:blast_furnace",
		"input": {
			item: "kubejs:wrought_iron_ingot"
		},
		"result": {
			item: "druidic_quest_core:steel_ingot"
		},
		"slag": {
			item: "thermal:slag"
		},
		"time": 600
	})

	event.shaped(
		Item.of('kubejs:steel_machine'),
		[
			'IGI',
			'RMR',
			'IGI'
		],
		{
			I: '#forge:plates/steel',
			M: 'kubejs:andesite_machine',
			R: "create:polished_rose_quartz",
			G: '#forge:gears/steel'

		}
	)

	event.recipes.create.mixing("2x kubejs:fiery_clay_blend", ["8x #forge:dusts/coal_coke", "4x ars_nouveau:fire_essence", "4x ars_nouveau:earth_essence", "2x clay_ball", "8x wizards_reborn:nether_salt"]).heated()

	event.recipes.create.mixing("kubejs:wrought_iron_ingot", ["2x ars_nouveau:earth_essence", "2x ars_nouveau:fire_essence", "4x supplementaries:ash", "#forge:ingots/iron"]).heated()

	event.shaped(
		Item.of('create:empty_blaze_burner'),
		[
			'BBB',
			'FDF',
			'BNB'
		],
		{
			B: 'iron_bars',
			D: 'kubejs:death_essence',
			F: "ars_nouveau:fire_essence",
			N: "netherrack"

		}
	).id("create:crafting/kinetics/empty_blaze_burner")
	//===================================================== Tier 4 Machines

	event.shaped("immersiveengineering:redstone_breaker",
		[
			"CRC",
			"SSS"
		],
		{
			S: "#forge:plates/iron",
			C: "immersiveengineering:connector_lv",
			R: "minecraft:repeater"
		}
	).id("immersiveengineering:crafting/redstone_breaker")

	event.shaped("starbunclemania:source_condenser",
		[
			"PRP",
			"PXP",
			"PJP"
		],
		{
			P: "#forge:plates/arcane_gold",
			R: "ars_nouveau:relay",
			X: "kubejs:steel_machine",
			J: "starbunclemania:fluid_jar"
		}
	).id("starbunclemania:source_condenser")

	event.shaped("naturesaura:offering_table",
		[
			"III",
			"AXB",
			"CWD"
		],
		{
			I: "deep_aether:stratus_ingot",
			X: "kubejs:steel_machine",
			A: "naturesaura:token_euphoria",
			W: "naturesaura:wood_stand",
			B: "naturesaura:token_terror",
			C: "naturesaura:token_grief",
			D: "naturesaura:token_rage"
		}
	).id("naturesaura:offering_table")

	event.remove({ output: 'torchmaster:megatorch' })
	event.shaped(
		Item.of('torchmaster:megatorch'),
		[
			'AXA',
			'XLX',
			'AXA'
		],
		{
			A: '#forge:plates/steel',
			X: 'kubejs:light_essence',
			L: "naturesaura:spawn_lamp"
		}
	)

	event.shaped("create:mechanical_crafter",
		["AZA", "AYA", "AXA"],
		{ A: "create:brass_casing", X: "sophisticatedstorage:crafting_upgrade", Y: "kubejs:steel_machine", Z: "#forge:gears/brass" }).id("create:crafting/kinetics/mechanical_crafter")


	event.remove({ id: 'ars_nouveau:storage_lectern' })


	event.remove({ output: 'minecraft:hopper' })
	event.shaped(
		Item.of('2x minecraft:hopper'),
		[
			' I ',
			'IMI',
			' I '
		],
		{
			I: '#forge:plates/steel',
			M: 'woodenhopper:wooden_hopper'

		}
	)

	event.shaped(
		Item.of('minecraft:hopper'),
		[
			'III',
			'IMI',
			'III'
		],
		{
			I: '#forge:plates/iron',
			M: 'woodenhopper:wooden_hopper',

		}
	)

	event.shaped("ars_creo:starbuncle_wheel",
		[
			"PSP",
			"SCS",
			"PSP"
		],
		{
			S: "#forge:plates/steel",
			P: "#forge:plates/wooden",
			C: "ars_nouveau:starbuncle_charm"
		}
	).id("ars_creo:starbuncle_wheel")

	//======================================================== Tier 5 Machines

	event.shaped("thermal:energy_cell_frame",
		[
			"LEL",
			"EXE",
			"LEL"
		],
		{
			E: "#forge:plates/electrum",
			L: "#forge:plates/lead",
			X: "kubejs:electricity_essence"
		}
	).id("thermal:energy_cell_frame")

	event.shaped("immersiveengineering:capacitor_lv",
		[
			"LEL",
			"SXS",
			"LEL"
		],
		{
			S: "#forge:plates/steel",
			E: "thermal:rf_coil",
			L: "#forge:plates/wooden",
			X: "thermal:energy_cell_frame"
		}
	).id("immersiveengineering:crafting/capacitor_lv")

	event.shaped("immersiveengineering:capacitor_mv",
		[
			"LEL",
			"SXS",
			"LEL"
		],
		{
			S: "immersiveengineering:capacitor_lv",
			E: "thermal:rf_coil",
			L: "#forge:gears/uranium",
			X: "thermal:sapphire"
		}
	).id("immersiveengineering:crafting/capacitor_mv")

	event.shaped("immersiveengineering:capacitor_hv",
		[
			"LEL",
			"SXS",
			"LEL"
		],
		{
			S: "immersiveengineering:capacitor_mv",
			E: "thermal:rf_coil",
			L: "#forge:gears/aluminum",
			X: "thermal:sapphire"
		}
	).id("immersiveengineering:crafting/capacitor_hv")

	event.shaped("thermal:energy_cell",
		[
			"LEL",
			"SXS",
			"LEL"
		],
		{
			S: "immersiveengineering:capacitor_hv",
			E: "thermal:rf_coil",
			L: "#forge:gears/electrum",
			X: "thermal:ruby"
		}
	).id("thermal:energy_cell")

	event.shaped("thermal:rf_coil",
		[
			" RG",
			"RER",
			"GR "
		],
		{
			R: "#forge:storage_blocks/redstone",
			E: "kubejs:electricity_essence",
			G: "#forge:gears/gold"
		}
	).id("thermal:rf_coil")



	//======================================================== placeholder endgame

	event.custom(
		{
			type: "create:mechanical_crafting",
			"pattern": [
				"AAAAAAA",
				"ANNNNNA",
				"ANDXDNA",
				"ANGYGNA",
				"ANDZDNA",
				"ANNNNNA",
				"AAAAAAA"
			],
			"key": {
				"A": {
					item: "kubejs:spawner_part"
				},
				"N": {
					tag: "forge:plates/netherite"
				},
				"D": {
					item: "kubejs:death_essence"
				},
				"G": {
					tag: "forge:gears/depth"
				},
				"X": {
					item: "quark:monster_box"
				},
				"Y": {
					item: "kubejs:steel_machine"
				},
				"Z": {
					item: "naturesaura:animal_spawner"
				}
			},
			"result": {
				item: "minecraft:spawner",
				"count": 1
			},
			"acceptMirrored": true
		}
	)

	
})
