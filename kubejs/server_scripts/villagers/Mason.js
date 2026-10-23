MoreJSEvents.villagerTrades((event) => {

    event.addTrade("mason", 1, [TradeItem.of("minecraft:clay_ball", 32, 48)], "2x thermal:copper_coin");
	event.addTrade("mason", 1, [TradeItem.of("minecraft:cobblestone", 48, 64)], "2x thermal:copper_coin");
	
	event.addTrade("mason", 2, [TradeItem.of("thermal:silver_coin", 1, 4)], "24x minecraft:diorite");
	event.addTrade("mason", 2, [TradeItem.of("thermal:silver_coin", 1, 4)], '24x minecraft:granite');
	event.addTrade("mason", 2, [TradeItem.of("thermal:silver_coin", 2, 6)], '24x minecraft:deepslate');
	event.addTrade("mason", 2, [TradeItem.of("thermal:silver_coin", 2, 6)], '24x minecraft:blackstone');
	
	event.addTrade("mason", 3, [TradeItem.of("thermal:silver_coin", 4, 8)], "24x minecraft:andesite");
	event.addTrade("mason", 3, [TradeItem.of("thermal:silver_coin", 4, 6)], "24x minecraft:calcite");
	event.addTrade("mason", 3, [TradeItem.of("thermal:silver_coin", 4, 6)], "24x minecraft:tuff");
	event.addTrade("mason", 3, [TradeItem.of("thermal:silver_coin", 4, 6)], "24x minecraft:dripstone_block");
	
	event.addTrade("mason", 4, [TradeItem.of("thermal:silver_coin", 4, 8)], "24x minecraft:packed_mud");
	event.addTrade("mason", 4, [TradeItem.of("thermal:silver_coin", 4, 6)], "24x minecraft:bricks");
	event.addTrade("mason", 4, [TradeItem.of("thermal:silver_coin", 4, 6)], "24x supplementaries:ash_bricks");
	event.addTrade("mason", 4, [TradeItem.of("thermal:silver_coin", 4, 6)], "24x supplementaries:daub");
	event.addTrade("mason", 4, [TradeItem.of("thermal:gold_coin", 1, 3)], "24x aether:holystone");
	event.addTrade("mason", 4, [TradeItem.of("thermal:gold_coin", 1, 3)], "24x ars_nouveau:sourcestone");
	
	event.addTrade("mason", 5, [TradeItem.of("thermal:netherite_coin", 3, 6)], Item.of('minecraft:leather_chestplate',
         '{AttributeModifiers:[{Amount:2,AttributeName:"forge:block_reach",Name:"forge:block_reach",Slot:"chest",UUID:[I;-12465,23062,11154,-46124]}],Damage:0,Unbreakable:1,display:{Name:\'["",{"text":"Mason\\\'s Shirt","italic":false}]\',color:7698297}}'));
	
         event.addTrade("mason", 5, [TradeItem.of("thermal:netherite_coin", 2, 4)], Item.of('minecraft:leather_leggings',
         '{AttributeModifiers:[{Amount:1,AttributeName:"forge:block_reach",Name:"forge:block_reach",Slot:"legs",UUID:[I;-12435,24062,12154,-46124]}],Damage:0,Unbreakable:1,display:{Name:\'["",{"text":"Mason\\\'s Pants","italic":false}]\',color:7698297}}'));
})