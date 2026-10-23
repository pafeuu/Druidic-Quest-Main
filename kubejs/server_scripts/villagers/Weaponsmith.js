MoreJSEvents.villagerTrades((event) => {

    event.addTrade("weaponsmith", 1, [TradeItem.of("druidic_quest_core:steel_ingot", 2, 4)], "2x thermal:silver_coin").villagerExperience(5);
	event.addTrade("weaponsmith", 1, [TradeItem.of("quartz", 8, 16)], "2x thermal:copper_coin")

	event.addTrade("weaponsmith", 2, ["thermal:gold_coin","iron_sword"], "kubejs:chill_blade").villagerExperience(30);
	event.addTrade("weaponsmith", 2, ["6x thermal:gold_coin","iron_sword"], "kubejs:royal_guard_sword").villagerExperience(35);

	event.addTrade("weaponsmith", 3, ["thermal:netherite_coin"], "irons_spellbooks:magehunter").villagerExperience(75);
	event.addTrade("weaponsmith", 3, ["thermal:netherite_coin"], "irons_spellbooks:weapon_parts").villagerExperience(75);

	event.addTrade("weaponsmith", 4, ["thermal:netherite_coin", "ars_nouveau:fire_essence"], "tide:blazing_swordfish").villagerExperience(125);
	event.addTrade("weaponsmith", 4, ["thermal:netherite_coin"], "irons_spellbooks:keeper_flamberge").villagerExperience(125);

	event.addTrade("weaponsmith", 5, ["thermal:netherite_coin"], "aether:pig_slayer")
})