MoreJSEvents.villagerTrades((event) => {
    event.addTrade("fletcher", 1, [TradeItem.of('botania:livingwood_twig', 24, 48)], "2x thermal:copper_coin");
	event.addTrade("fletcher", 1, [TradeItem.of("minecraft:string", 6, 18)], "2x thermal:copper_coin");

	event.addTrade("fletcher", 2, [TradeItem.of("minecraft:flint", 32, 48)], "3x thermal:copper_coin");
	event.addTrade("fletcher", 2, "3x thermal:gold_coin",
        Item.of('minecraft:bow',
        '{AttributeModifiers:[{Amount:0.01d,AttributeName:"generic.movement_speed",Name:"1723313263725",Slot:"mainhand",UUID:[I;-124710,30612,20421,-61224]},{Amount:0.1d,AttributeName:"attributeslib:draw_speed",Name:"1723313263725",Slot:"mainhand",UUID:[I;-124710,30912,20421,-61824]}],Damage:0,display:{Name:\'["",{"text":"Quickshot","italic":false,"color":"dark_green"}]\'}}').enchant('mending', 1) );
	
    event.addTrade("fletcher", 2, "5x thermal:gold_coin",
        Item.of('minecraft:bow',
        '{AttributeModifiers:[{Amount:-0.3d,AttributeName:"attributeslib:draw_speed",Name:"1723313469117",Slot:"mainhand",UUID:[I;-124710,43912,20421,-87824]},{Amount:1,AttributeName:"attributeslib:arrow_damage",Name:"1723313469117",Slot:"mainhand",UUID:[I;-124710,44212,20421,-88424]},{Amount:1,AttributeName:"attributeslib:arrow_velocity",Name:"1723313469117",Slot:"mainhand",UUID:[I;-124710,44512,20421,-89024]}],Damage:0,display:{Name:\'["",{"text":"Long Bow","italic":false,"color":"dark_green"}]\'}}').enchant('mending', 1));

	event.addTrade("fletcher", 3, "3x thermal:gold_coin","supplementaries:quiver" );
	event.addTrade("fletcher", 3, "2x thermal:gold_coin","48x alexsmobs:shark_tooth_arrow");

	event.addTrade("fletcher", 4, "3x thermal:gold_coin","64x kubejs:lightning_arrow");
	event.addTrade("fletcher", 4, "3x thermal:gold_coin","64x kubejs:explosive_arrow");

	event.addTrade("fletcher", 5, "2x thermal:netherite_coin",
        Item.of('minecraft:bow',
        '{AttributeModifiers:[{Amount:-0.3d,AttributeName:"attributeslib:draw_speed",Name:"1723313469117",Slot:"mainhand",UUID:[I;-124710,43912,20421,-87824]},{Amount:1,AttributeName:"attributeslib:arrow_damage",Name:"1723313469117",Slot:"mainhand",UUID:[I;-124710,44212,20421,-88424]},{Amount:1,AttributeName:"attributeslib:arrow_velocity",Name:"1723313469117",Slot:"mainhand",UUID:[I;-124710,44512,20421,-89024]}],Unbreakable:1,display:{Name:\'["",{"text":"Reinforced Long Bow","italic":false,"color":"dark_green"}]\'}}'));
})