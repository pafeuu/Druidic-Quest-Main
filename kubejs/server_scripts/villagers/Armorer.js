MoreJSEvents.villagerTrades((event) => {

    event.addTrade("armorer", 1, [TradeItem.of("minecraft:coal", 10, 20)], "2x thermal:copper_coin");
	event.addTrade("armorer", 1, [TradeItem.of("minecraft:raw_iron", 8, 12)], "2x thermal:copper_coin");
	
	event.addTrade("armorer", 2, [TradeItem.of("#forge:coal_coke", 2, 8)], "4x thermal:copper_coin");
	event.addTrade("armorer", 2, [TradeItem.of("#forge:ingots/iron", 8, 12)], "4x thermal:copper_coin");
	
	event.addTrade("armorer", 3, [TradeItem.of("thermal:gold_coin", 2, 4)], "kubejs:zanite_upgrade_smithing_template").villagerExperience(75);
	event.addTrade("armorer", 3, [TradeItem.of("thermal:gold_coin", 2, 4)], "kubejs:skyjade_upgrade_smithing_template").villagerExperience(75);
	
	event.addTrade("armorer", 4, [TradeItem.of("thermal:gold_coin", 4, 8)], "kubejs:steel_upgrade_smithing_template").villagerExperience(125);
	event.addTrade("armorer", 4, [TradeItem.of("thermal:gold_coin", 8, 16)], "kubejs:steel_upgrade_parts").villagerExperience(125);
	
	event.addTrade("armorer", 5, [TradeItem.of("thermal:netherite_coin", 1, 3),"3x wizards_reborn:arcane_gold_ingot"], "kubejs:arcane_fortress_upgrade_smithing_template");
	event.addTrade("armorer", 5, [TradeItem.of("thermal:netherite_coin", 1, 3),"3x kubejs:obsidian_ingot"], "kubejs:depth_upgrade_smithing_template");
})