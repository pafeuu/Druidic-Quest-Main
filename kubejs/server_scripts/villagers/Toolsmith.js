MoreJSEvents.villagerTrades((event) => {
    
	event.addTrade("toolsmith", 1, [TradeItem.of("kubejs:zinc_tool_handle", 1, 4)], "thermal:silver_coin");
	event.addTrade("toolsmith", 1, "thermal:gold_coin", "alexsmobs:squid_grapple").villagerExperience(10);

	event.addTrade("toolsmith", 2, "thermal:gold_coin", "create:blue_toolbox").villagerExperience(35);
	event.addTrade("toolsmith", 2, "thermal:gold_coin", "kubejs:basic_mortar").villagerExperience(70);
	event.addTrade("toolsmith", 2, "thermal:gold_coin", "kubejs:basic_chisel").villagerExperience(70);

	event.addTrade("toolsmith", 3, "thermal:gold_coin", "kubejs:builders_belt").villagerExperience(75);
	event.addTrade("toolsmith", 3, "6x thermal:gold_coin", "create:wand_of_symmetry").villagerExperience(75);

	event.addTrade("toolsmith", 4, "5x thermal:gold_coin", "crafting_on_a_stick:crafting_table").villagerExperience(125);
	event.addTrade("toolsmith", 4, "3x thermal:gold_coin", "crafting_on_a_stick:stonecutter").villagerExperience(125);

	event.addTrade("toolsmith", 5, ["1x thermal:netherite_coin","kubejs:netherite_rod"], "kubejs:reinforced_tool_handle").villagerExperience(75);
	event.addTrade("toolsmith", 5, ["2x thermal:gold_coin"], "naturesaura:cave_finder").villagerExperience(75);
})