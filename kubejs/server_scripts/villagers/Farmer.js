MoreJSEvents.villagerTrades((event) => {
    event.addTrade("farmer", 1, [TradeItem.of("minecraft:apple", 10, 20)], "2x thermal:copper_coin");
	event.addTrade("farmer", 1, [TradeItem.of("minecraft:wheat", 16, 32)], "2x thermal:copper_coin");
	event.addTrade("farmer", 1, [TradeItem.of("minecraft:beetroot", 16, 32)], "2x thermal:copper_coin");
	event.addTrade("farmer", 1, [TradeItem.of("minecraft:carrot", 16, 32)], "2x thermal:copper_coin");
	
	event.addTrade("farmer", 2, [TradeItem.of("minecraft:brown_mushroom", 16, 32)], "4x thermal:copper_coin");
	event.addTrade("farmer", 2, [TradeItem.of("minecraft:red_mushroom", 16, 32)], "4x thermal:copper_coin");
	
	event.addTrade("farmer", 3, [TradeItem.of("thermal:copper_coin", 4, 12)], "minecraft:bread");
	event.addTrade("farmer", 3, [TradeItem.of("thermal:copper_coin", 8, 24)], "farmersdelight:cooked_rice");
	
	event.addTrade("farmer", 4, [TradeItem.of("thermal:silver_coin", 2, 6)], "farmersdelight:vegetable_soup");
	event.addTrade("farmer", 4, [TradeItem.of("thermal:gold_coin", 2, 6)], "farmersdelight:vegetable_noodles");
	
	
	event.addTrade("farmer", 5, "8x thermal:gold_coin",
        Item.of('minecraft:wooden_hoe',
        '{AttributeModifiers:[{Amount:0.02d,AttributeName:"generic.movement_speed",Name:"generic.movement_speed",Slot:"mainhand",UUID:[I;-12456,35926,205856,-71852]}],Damage:0,Unbreakable:1,display:{Name:\'{"text":"Expert Farmer\\\'s Hoe"}\'}}'));
	event.addTrade("farmer", 5, "8x thermal:gold_coin",
        Item.of('minecraft:leather_boots',
        "{Damage:0,Unbreakable:1,display:{Name:'{\"text\":\"Farmer\\'s Boots\"}'}}").enchant('minecraft:feather_falling', 1));
	
})