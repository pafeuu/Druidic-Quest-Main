MoreJSEvents.villagerTrades((event) => {
    
	event.addTrade("sawmill:carpenter",1, "12x mangrove_log", "thermal:copper_coin");
	event.addTrade("sawmill:carpenter",1, "12x oak_log", "thermal:copper_coin");
	event.addTrade("sawmill:carpenter",1, "12x jungle_log", "thermal:copper_coin");
	event.addTrade("sawmill:carpenter",1, "12x birch_log", "thermal:copper_coin");

	event.addTrade("sawmill:carpenter",2,"6x thermal:silver_coin","64x mangrove_log");
	event.addTrade("sawmill:carpenter",2,"4x thermal:silver_coin","64x jungle_log");
	event.addTrade("sawmill:carpenter",2,"4x thermal:silver_coin","64x dark_oak_log");

	event.addTrade("sawmill:carpenter",3,"6x thermal:silver_coin","64x crimson_stem");
	event.addTrade("sawmill:carpenter",3,"6x thermal:silver_coin","64x warped_stem");

	event.addTrade("sawmill:carpenter",4,"3x thermal:gold_coin","64x wizards_reborn:arcane_wood");

	event.addTrade("sawmill:carpenter",5,"3x thermal:netherite_coin",
        Item.of('kubejs:lumber_axe', 
        '{AttributeModifiers:[{Amount:0.6d,AttributeName:"attributeslib:mining_speed",Name:"generic.max_health",Operation:2,Slot:"mainhand",UUID:[I;-585840180,349193464,-1489034464,-1287431813]}]}').enchant('minecraft:efficiency', 3))
})