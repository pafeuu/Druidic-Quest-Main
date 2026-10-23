MoreJSEvents.villagerTrades((event) => {
    event.addTrade("shepherd", 1, [TradeItem.of("minecraft:white_wool", 10, 20)], "2x thermal:copper_coin");
	event.addTrade("shepherd", 1, [TradeItem.of("minecraft:light_gray_wool", 10, 20)], "2x thermal:copper_coin");
	event.addTrade("shepherd", 1, [TradeItem.of("minecraft:gray_wool", 10, 20)], "2x thermal:copper_coin");
	event.addTrade("shepherd", 1, [TradeItem.of("minecraft:black_wool", 10, 20)], "2x thermal:copper_coin");
	
	event.addTrade("shepherd", 2, [TradeItem.of("lime_wool", 10, 20)], "3x thermal:copper_coin");
	event.addTrade("shepherd", 2, [TradeItem.of("yellow_wool", 10, 20)], "3x thermal:copper_coin");
	event.addTrade("shepherd", 2, [TradeItem.of("magenta_wool", 10, 20)], "3x thermal:copper_coin");
	event.addTrade("shepherd", 2, [TradeItem.of("blue_wool", 10, 20)], "3x thermal:copper_coin");
	event.addTrade("shepherd", 2, [TradeItem.of("red_wool", 10, 20)], "3x thermal:copper_coin");
	
	event.addTrade("shepherd", 3, [TradeItem.of("thermal:copper_coin", 4, 12)], "3x minecraft:mutton");
	event.addTrade("shepherd", 3, [TradeItem.of("thermal:copper_coin", 8, 24)], "20x minecraft:white_carpet");
	
	event.addTrade("shepherd", 4, [TradeItem.of("thermal:silver_coin", 2, 6)], "vintagedelight:cheese_slice");
	event.addTrade("shepherd", 4, [TradeItem.of("thermal:silver_coin", 2, 6)], "vintagedelight:cheese_wheel");
	event.addTrade("shepherd", 5, "8x thermal:netherite_coin",Item.of('minecraft:shears', '{AttributeModifiers:[{Amount:0.02d,AttributeName:"generic.movement_speed",Name:"generic.movement_speed",Slot:"mainhand",UUID:[I;-12436,35926,205856,-71852]}],Damage:0,Unbreakable:1,display:{Name:\'{"text":"Expert shepherd\\\'s shears"}\'}}'));
	event.addTrade("shepherd", 5, "5x thermal:silver_coin",Item.of("farmersdelight:shepherds_pie"));
})