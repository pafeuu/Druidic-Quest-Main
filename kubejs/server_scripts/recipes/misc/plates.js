ServerEvents.recipes(event=>{
    function PlatesOnetoOne(outputItem, inputBlock) {
		event.recipes.create.pressing(`2x ${outputItem}`, `${inputBlock}`)// Adds Plates crafting recipes to the create machines

		event.custom({
			type: "lychee:block_interacting",
			item_in: { item: "druidic_quest_core:arcanist_hammer" },
			block_in: inputBlock,
			post: [
				{ type: "drop_item", item: outputItem, count: 1 },
				{ type: "place", block: "air" },
				{ type: "damage_item", damage: 0 }
			]
		});// Adds In World Plates crafting recipes 

		event.custom(
			{
				type: "lychee:block_crushing",
				"comment": "25% chance for extra drop!",
				post: [
					{
						type: "anvil_damage_chance",
						"chance": 0
					},
					{
						type: "place",
						block: "minecraft:air",
					},
					{
						type: "drop_item",
						item: outputItem,
						count: 1
					},
					{
						type: "drop_item",
						"contextual": [
							{
								type: "chance",
								"chance": 0.25
							}
						],
						item: outputItem
					}
				],
				"landing_block": inputBlock
			}
		)

		event.custom(
			{
				type: "lychee:block_crushing",
				post: [
					{
						type: "anvil_damage_chance",
						"chance": 0
					},
					{
						type: "place",
						block: "minecraft:air",
					},
					{
						type: "drop_item",
						item: outputItem,
						count: 2
					}
				],
				"falling_block": "kubejs:pressing_catalyst",
				"landing_block": inputBlock
			}
		)

		event.recipes.naturesaura.altar(Item.of(outputItem, 2), inputBlock, 500, 100, "kubejs:pressing_catalyst")
	}

    function plates(inputItem, outputItem, inputBlock) {// Adds Plates crafting recipes to the machines

		event.custom({
			type: "lychee:block_interacting",
			item_in: { item: "druidic_quest_core:arcanist_hammer" },
			block_in: inputBlock,
			post: [
				{ type: "drop_item", item: outputItem, count: 3 },
				{ type: "place", block: "air" },
				{ type: "damage_item", damage: 0 }
			]
		});// Adds In World Plates crafting recipes

		event.custom(
			{
				type: "lychee:block_crushing",
				post: [
					{
						type: "anvil_damage_chance",
						"chance": 0
					},
					{
						type: "place",
						block: "minecraft:air",
					},
					{
						type: "drop_item",
						item: outputItem,
						count: 4
					}
				],
				"landing_block": inputBlock
			}
		)// Adds in World Plates crafting recipes from falling anvil

		event.custom(
			{
				type: "lychee:block_crushing",
				post: [
					{
						type: "anvil_damage_chance",
						"chance": 0
					},
					{
						type: "place",
						block: "minecraft:air",
					},
					{
						type: "drop_item",
						item: outputItem,
						count: 5
					}
				],
				"falling_block": "kubejs:pressing_catalyst",
				"landing_block": inputBlock
			}
		)// Adds in World Plates crafting recipes from falling pressing catalyst

		event.recipes.naturesaura.altar(Item.of(outputItem, 5), inputBlock, 500, 100, "kubejs:pressing_catalyst")
	}

	plates("forge:ingots/manasteel", "druidic_quest_core:manasteel_plate", "botania:manasteel_block")
	plates("forge:ingots/infused_iron", "kubejs:infused_iron_plate", "naturesaura:infused_iron_block")
	plates("forge:ingots/arcanum_alloy", "kubejs:arcanum_alloy_plate", "kubejs:arcanum_alloy_block")
	plates("forge:gems/diamond", "kubejs:diamond_plate", "minecraft:diamond_block")

	plates("forge:ingots/ironwood", "kubejs:ironwood_plate", "twilightforest:ironwood_block")
	plates("forge:ingots/knightmetal", "kubejs:knightmetal_plate", "twilightforest:knightmetal_block")
	plates("forge:ingots/fiery", "kubejs:fiery_plate", "twilightforest:fiery_block")


	plates("forge:ingots/tin", "thermal:tin_plate", "thermal:tin_block")
	plates("forge:ingots/silver", "thermal:silver_plate", "thermal:silver_block")
	plates("forge:ingots/lead", "thermal:lead_plate", "thermal:lead_block")
	plates("forge:ingots/nickel", "thermal:nickel_plate", "thermal:nickel_block")
	plates("forge:ingots/bronze", "thermal:bronze_plate", "thermal:bronze_block")

	plates("forge:ingots/uranium", "druidic_quest_core:uranium_plate", "druidic_quest_core:uranium_block")
	plates("forge:ingots/steel", "druidic_quest_core:steel_plate", "druidic_quest_core:steel_block")
	plates("forge:ingots/electrum", "thermal:electrum_plate", "thermal:electrum_block")
	plates("forge:ingots/arcane_gold", "kubejs:arcane_gold_plate", "wizards_reborn:arcane_gold_block")

	plates("forge:ingots/enderium", "thermal:enderium_plate", 'thermal:enderium_block')
	plates("forge:ingots/lumium", "thermal:lumium_plate", "thermal:lumium_block")
	plates("forge:ingots/zinc", "kubejs:zinc_plate", "create:zinc_block")

	plates("forge:ingots/platinum", "druidic_quest_core:platinum_plate", "druidic_quest_core:platinum_block")
	plates("forge:ingots/andesite_alloy", "kubejs:andesite_alloy_plate", 'create:andesite_alloy_block')
	plates("forge:ingots/copper", "thermal:copper_plate", "minecraft:copper_block")
	plates("forge:ingots/iron", "thermal:iron_plate", "minecraft:iron_block")
	plates("forge:ingots/gold", "thermal:gold_plate", "minecraft:gold_block")
	plates("forge:ingots/netherite", "thermal:netherite_plate", "minecraft:netherite_block")
	plates("forge:ingots/brass", "kubejs:brass_plate", "create:brass_block")


	plates("forge:ingots/tainted_gold", "kubejs:tainted_gold_plate", "naturesaura:tainted_gold_block")
	plates("forge:ingots/sky", "kubejs:sky_plate", "naturesaura:sky_ingot_block")
	plates("forge:ingots/depth", "kubejs:depth_plate", "naturesaura:depth_ingot_block")
	plates("forge:ingots/storm", "kubejs:storm_plate", "kubejs:storm_block")

    PlatesOnetoOne("druidic_quest_core:livingwood_plate", "botania:livingwood_planks")
	PlatesOnetoOne("druidic_quest_core:livingrock_plate", "botania:livingrock")
})