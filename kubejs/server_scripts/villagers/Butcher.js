MoreJSEvents.villagerTrades((event) => {

    event.addTrade("butcher", 1, [TradeItem.of("minecraft:porkchop", 2, 8)], "2x thermal:copper_coin");
	event.addTrade("butcher", 1, [TradeItem.of("minecraft:beef", 2, 8)], "2x thermal:copper_coin");
	event.addTrade("butcher", 1, [TradeItem.of("minecraft:mutton", 2, 6)], "2x thermal:copper_coin");
	event.addTrade("butcher", 1, [TradeItem.of("minecraft:chicken", 1, 4)], "2x thermal:copper_coin");

	event.addTrade("butcher", 2, [TradeItem.of("minecraft:rabbit", 2, 4)], "4x thermal:copper_coin");
	event.addTrade("butcher", 2, [TradeItem.of("alexsmobs:moose_ribs", 2, 4)], "4x thermal:copper_coin");
	event.addTrade("butcher", 2, [TradeItem.of("alexsmobs:kangaroo_meat", 2, 4)], "4x thermal:copper_coin");
	event.addTrade("butcher", 2, [TradeItem.of("alexsdelight:raw_bison", 2, 4)], "4x thermal:copper_coin");

	event.addTrade("butcher", 3, [TradeItem.of("thermal:silver_coin", 2, 4)], "3x farmersdelight:barbecue_stick");
	event.addTrade("butcher", 3, [TradeItem.of("thermal:silver_coin", 4, 6)], "3x farmersdelight:smoked_ham");
	event.addTrade("butcher", 3, [TradeItem.of("thermal:silver_coin", 4, 6)], "3x farmersdelight:bacon_and_eggs");

	event.addTrade("butcher", 4, [TradeItem.of("thermal:silver_coin", 8, 16)], "farmersdelight:roast_chicken");
	event.addTrade("butcher", 4, [TradeItem.of("thermal:silver_coin", 8, 16)], "farmersdelight:honey_glazed_ham");

	event.addTrade("butcher", 5, [TradeItem.of("thermal:netherite_coin", 1, 3)],
    Item.of('farmersdelight:iron_knife',
    '{AttributeModifiers:[{Amount:2,AttributeName:"attributeslib:fire_damage",Name:"attributeslib:fire_damage",Slot:"mainhand",UUID:[I;-32444,23362,15254,-46124]}],Damage:0,Unbreakable:1,display:{Name:\'["",{"text":"Butcher\\\'s Knife","italic":false}]\'}}').enchant('minecraft:looting', 3));
})