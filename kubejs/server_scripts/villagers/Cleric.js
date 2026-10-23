MoreJSEvents.villagerTrades((event) => {

	event.addTrade("cleric", 1, [TradeItem.of("minecraft:rotten_flesh", 10, 20)], "2x thermal:copper_coin");
	event.addTrade("cleric", 1, [TradeItem.of("minecraft:redstone", 4, 12)], "2x thermal:copper_coin");
	
	event.addTrade("cleric", 2, [TradeItem.of("#forge:gems/lapis", 1, 2)], "4x thermal:copper_coin");
	event.addTrade("cleric", 2, [TradeItem.of("minecraft:nether_wart", 8, 12)], "4x thermal:copper_coin");
	
	event.addTrade("cleric", 3, [TradeItem.of("thermal:silver_coin", 8, 24)], "16x minecraft:glowstone");
	event.addTrade("cleric", 3, [TradeItem.of("thermal:silver_coin", 2, 12)], '32x minecraft:shroomlight');
	
	event.addTrade("cleric", 4, [TradeItem.of("thermal:gold_coin", 8, 16)], Item.of('ars_nouveau:potion_flask', '{Damage:8,an_potion_flask:{PotionData:{Potion:"minecraft:strong_strength",includedPotions:["minecraft:strong_strength"]},count:8}}'));
	event.addTrade("cleric", 4, [TradeItem.of("thermal:gold_coin", 10, 20)], Item.of('ars_nouveau:potion_flask', '{Damage:8,an_potion_flask:{PotionData:{Potion:"minecraft:night_vision",includedPotions:["minecraft:strong_strength"]},count:8}}'));
	
	
	event.addTrade("cleric", 5, [TradeItem.of("thermal:gold_coin", 2, 3)], '2x enigmaticlegacy:mending_mixture');
	event.addTrade("cleric", 5, [TradeItem.of("thermal:gold_coin", 4, 12)], 'enigmaticlegacy:cosmic_cake');
	
})