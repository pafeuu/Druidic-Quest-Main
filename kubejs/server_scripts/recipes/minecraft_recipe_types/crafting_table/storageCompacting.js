ServerEvents.recipes(event=>{
    function Chunks(big, small) {
		event.shapeless(big, "8x " + small)
		event.shapeless("8x " + small, big)
		//Compacts 8 small items into 1 big item and back (coal chunks)
	};

	function StorageCompacting(big, small) {
		event.shapeless(big, "9x " + small)
		event.shapeless("9x " + small, big)
		//Compacts 9 small items into 1 big item and back (nuggets, ingots, storage blocks)
	};

	function SmallStorageCompacting(big, small) {
		event.shaped(big, ["YY", "YY"], { Y: small })
		event.shapeless("4x " + small, big)
		//Compacts 4 small items into 1 big item and back (used for some gems and gems blocks)
	};

	Chunks("coal", "kubejs:coal_chunk")
	Chunks("charcoal", "kubejs:charcoal_chunk")
	Chunks("thermal:coal_coke", "kubejs:coke_chunk")
	StorageCompacting("druidic_quest_core:gold_leaf_block", "naturesaura:gold_leaf")
	StorageCompacting("druidic_quest_core:ivy_block", "immersive_weathering:ivy")
	StorageCompacting("naturesaura:infused_iron", "kubejs:infused_iron_nugget")
	StorageCompacting("kubejs:sapphire_block", "kubejs:sapphire")
	StorageCompacting("thermal:gunpowder_block", "quark:gunpowder_sack")
	StorageCompacting("kubejs:arcanum_alloy_block", "kubejs:arcanum_alloy_ingot")
	StorageCompacting("kubejs:arcanum_alloy_ingot", "kubejs:arcanum_alloy_nugget")
	StorageCompacting("twilightforest:ironwood_ingot", "kubejs:ironwood_nugget")
	StorageCompacting("twilightforest:knightmetal_ingot", "kubejs:knightmetal_nugget")
	StorageCompacting("naturesaura:tainted_gold", "kubejs:tainted_gold_nugget")
	StorageCompacting("naturesaura:sky_ingot", "kubejs:sky_nugget")
	StorageCompacting("naturesaura:depth_ingot", "kubejs:depth_nugget")
	StorageCompacting('twilightforest:fiery_ingot', 'kubejs:fiery_nugget')
	StorageCompacting("create:andesite_alloy", "kubejs:andesite_alloy_nugget")
	StorageCompacting("kubejs:storm_block", "kubejs:storm_ingot")
	StorageCompacting("kubejs:storm_ingot", "kubejs:storm_nugget")
  	StorageCompacting("aether:enchanted_gravitite","kubejs:gravitite_ingot")
  	StorageCompacting("kubejs:gravitite_ingot","kubejs:gravitite_nugget")

	SmallStorageCompacting("thermal:ruby_block", "thermal:ruby")
	SmallStorageCompacting("thermal:sapphire_block", "thermal:sapphire")
	SmallStorageCompacting("deep_aether:squall_block", "deep_aether:squall_plate")
})