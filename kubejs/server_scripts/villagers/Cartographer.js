MoreJSEvents.villagerTrades((event) => {

    event.addTrade("cartographer", 1, [TradeItem.of("minecraft:paper", 10, 20)], "2x thermal:copper_coin");
	event.addTrade("cartographer", 1, [TradeItem.of("minecraft:glass", 8, 12)], "2x thermal:copper_coin");
	
	event.addTrade("cartographer", 2, [TradeItem.of("minecraft:ink_sac", 2, 8)], "4x thermal:copper_coin");
	event.addTrade("cartographer", 2, [TradeItem.of("minecraft:feather", 8, 12)], "4x thermal:copper_coin");
	
	event.addTrade("cartographer", 3, [TradeItem.of("thermal:copper_coin", 4, 12)], "16x minecraft:item_frame");
	event.addTrade("cartographer", 3, [TradeItem.of("thermal:copper_coin", 8, 24)], "2x supplementaries:antique_ink");
	event.addTrade("cartographer", 3, [TradeItem.of("thermal:copper_coin", 8, 24)], "8x quark:glass_item_frame");
	
	event.addTrade("cartographer", 4, [TradeItem.of("thermal:gold_coin", 1, 4)], "supplementaries:globe");
	event.addTrade("cartographer", 4, [TradeItem.of("thermal:gold_coin", 6, 8)], 'quark:diamond_heart');
	
	
	event.addTrade("cartographer", 5, [TradeItem.of("thermal:enderium_coin", 2, 4)], "explorerscompass:explorerscompass");
    
})