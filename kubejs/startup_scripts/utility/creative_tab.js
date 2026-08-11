StartupEvents.modifyCreativeTab('minecraft:redstone_blocks', event => {
	// Adds example item after hazmat boots
	event.addAfter('minecraft:redstone', 'thermal:beekeeper_helmet')
	event.addAfter('minecraft:redstone', "thermal:beekeeper_chestplate")
	event.addAfter('minecraft:redstone', "thermal:beekeeper_leggings")
	event.addAfter('minecraft:redstone', "thermal:beekeeper_boots")
	event.addAfter('minecraft:redstone', "quark:pipe")
	event.addAfter('minecraft:redstone', "quark:crate")
	event.addAfter('minecraft:redstone', 'deep_aether:stormforged_smithing_template')
	event.addAfter('minecraft:redstone', 'deep_aether:squall_plate')
	event.addAfter('minecraft:redstone', 'deep_aether:squall_block')
	event.addAfter('minecraft:redstone', [
		'thermal:ender_tnt',
		'thermal:ice_tnt',
		'thermal:ice_grenade',
		'thermal:ender_grenade',
		'thermal:lightning_grenade',
		'thermal:explosive_grenade',
		'thermal:nuke_grenade',
		'thermal:phyto_grenade',
		'thermal:earth_grenade',
		'thermal:device_tree_extractor',
		'thermal:device_xp_condenser',
		'thermal:device_water_gen',
		'thermal:device_composter',
		'thermal:device_collector',
		'thermal:saw_blade',
		'thermal:drill_head',
		'thermal:device_rock_gen',
		'thermal:device_potion_diffuser',
		'thermal:device_nullifier',
		'thermal:device_fisher',
		'thermal:aquachow',
		'thermal:deep_aquachow',
		'thermal:junk_net',
		'thermal:earth_tnt',
		'thermal:phyto_tnt',
		'thermal:nuke_tnt',
		'thermal:lightning_tnt'])
})
