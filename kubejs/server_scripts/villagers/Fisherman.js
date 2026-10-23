MoreJSEvents.villagerTrades((event) => {

    event.addTrade("fisherman", 1, [TradeItem.of("minecraft:cod", 2, 8)], "2x thermal:copper_coin");
	event.addTrade("fisherman", 1, [TradeItem.of("minecraft:salmon", 2, 8)], "2x thermal:copper_coin");
	event.addTrade("fisherman", 1, [TradeItem.of("alexsmobs:raw_catfish", 2, 6)], "2x thermal:copper_coin");
	event.addTrade("fisherman", 1, [TradeItem.of("alexsmobs:flying_fish", 1, 4)], "2x thermal:copper_coin");

	event.addTrade("fisherman", 2, [TradeItem.of("minecraft:pufferfish", 2, 8)], "4x thermal:copper_coin");
	event.addTrade("fisherman", 2, [TradeItem.of("minecraft:tropical_fish", 2, 8)], "4x thermal:copper_coin");
	event.addTrade("fisherman", 2, [TradeItem.of("quark:crab_leg", 1, 4)], "4x thermal:copper_coin");
	event.addTrade("fisherman", 2, [TradeItem.of("alexsmobs:fish_bones", 1, 4)], "4x thermal:copper_coin");

	event.addTrade("fisherman", 3, [TradeItem.of("thermal:silver_coin", 4, 8)], 'minecraft:tropical_fish_bucket');
	event.addTrade("fisherman", 3, [TradeItem.of("thermal:silver_coin", 4, 6)], 'minecraft:tadpole_bucket');

	event.addTrade("fisherman", 4, [TradeItem.of("thermal:silver_coin", 8, 16)], '3x farmersdelight:rice_roll_medley_block');

	event.addTrade("fisherman", 5, [TradeItem.of("thermal:gold_coin", 12, 24)], Item.of('minecraft:leather_helmet', '{AttributeModifiers:[{Amount:2,AttributeName:"minecraft:generic.luck",Name:"minecraft:generic.luck",Slot:"head",UUID:[I;-12465,23362,15254,-46124]}],Damage:0,Unbreakable:1,display:{Name:\'["",{"text":"Fisherman\\\'s Hat","italic":false}]\',color:3451000}}'));
	event.addTrade("fisherman", 5, [TradeItem.of("thermal:gold_coin", 12, 24)], Item.of('alexsmobs:flying_fish_boots', '{AttributeModifiers:[{Amount:2,AttributeName:"minecraft:generic.armor",Name:"minecraft:generic.armor",Slot:"chest",UUID:[I;-12465,24062,53154,-46124]}],Damage:0,Unbreakable:1,display:{Name:\'["",{"text":"Fisherman\\\'s Shoes","italic":false}]\'}}'));
	event.addTrade("fisherman",5,"2x thermal:netherite_coin","tide:blazing_swordfish");
})