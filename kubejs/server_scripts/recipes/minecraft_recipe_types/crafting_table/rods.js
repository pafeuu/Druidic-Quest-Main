ServerEvents.recipes(event=>{

    function rods(material, output) {
		// Function that uses tag as an input and item id as an output
		// Adds shaped recipe, IE Recipe and Thermal Recipe
		event.shaped(output,
			[
				"  X",
				" X ",
				"X  "
			],
			{
				X: "#forge:plates/" + material
			})

		event.remove({ output: output })
		event.remove({ output: "#forge:rods/" + material })
	}

	rods("infused_iron", "kubejs:infused_iron_rod")
	rods("manasteel", "druidic_quest_core:manasteel_rod")
	rods("arcanum_alloy", "kubejs:arcanum_alloy_rod")
	rods("copper", "kubejs:copper_rod")
	rods("electrum", "kubejs:electrum_rod")
	rods("diamond", "kubejs:diamond_rod")
	rods("gold", "kubejs:gold_rod")
	rods("tainted_gold", "kubejs:tainted_gold_rod")
	rods("sky", "kubejs:sky_rod")
	rods("depth", "kubejs:depth_rod")
	rods("brass", "kubejs:brass_rod")
	rods("arcane_gold", "kubejs:arcane_gold_rod")
	rods("fiery", "kubejs:fiery_rod")
	rods("storm", "kubejs:storm_rod")
	rods("iron", "kubejs:iron_rod")
	rods("platinum", "druidic_quest_core:platinum_rod")
	rods("andesite_alloy", "kubejs:andesite_alloy_rod")
	rods("bronze", "kubejs:bronze_rod")
	rods("enderium", "kubejs:enderium_rod")
	rods("ironwood", "kubejs:ironwood_rod")
	rods("knightmetal", "kubejs:knightmetal_rod")
	rods("lead", "kubejs:lead_rod")
	rods("lumium", "kubejs:lumium_rod")
	rods("netherite", "kubejs:netherite_rod")
	rods("nickel", "kubejs:nickel_rod")
	rods("silver", "kubejs:silver_rod")
	rods("steel", "kubejs:steel_rod")
	rods("tin", "kubejs:tin_rod")
	rods("uranium", "druidic_quest_core:uranium_rod")
	rods("zinc", "kubejs:zinc_rod")
    
})