MoreJSEvents.villagerTrades((event) => {
    event.addTrade("librarian", 1, [TradeItem.of("minecraft:sugar_cane", 10, 20)], "2x thermal:copper_coin");
	event.addTrade("librarian", 1, [TradeItem.of("minecraft:paper", 8, 12)], "2x thermal:copper_coin");
	
	event.addTrade("librarian", 2, [TradeItem.of("minecraft:ink_sac", 2, 8)], "4x thermal:copper_coin");
	event.addTrade("librarian", 2, [TradeItem.of("minecraft:feather", 8, 12)], "4x thermal:copper_coin");
	
	event.addTrade("librarian", 3, [TradeItem.of("thermal:copper_coin", 4, 12)], "32x minecraft:glass");
	event.addTrade("librarian", 3, [TradeItem.of("thermal:copper_coin", 8, 24)], "32x minecraft:lantern");
	event.addTrade("librarian", 3, [TradeItem.of("thermal:silver_coin", 8, 24)], "32x minecraft:bookshelf");
	
	event.addTrade("librarian", 4, [TradeItem.of("thermal:silver_coin", 2, 6)], "minecraft:name_tag");
	event.addTrade("librarian", 4, [TradeItem.of("thermal:gold_coin", 2, 6)], "irons_spellbooks:common_ink");
	
	event.addTrade("librarian", 5, [TradeItem.of("thermal:gold_coin", 18, 35)], Item.of('minecraft:enchanted_book').enchant('minecraft:mending', 1));
	event.addTrade("librarian", 5, [TradeItem.of("thermal:gold_coin", 9, 17)], "ars_nouveau:stable_warp_scroll");
})