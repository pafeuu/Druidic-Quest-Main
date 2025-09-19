StartupEvents.modifyCreativeTab('minecraft:redstone_blocks', event => {
	// Adds example item after hazmat boots
	event.addAfter('minecraft:redstone', 'thermal:beekeeper_helmet')
    event.addAfter('minecraft:redstone',"thermal:beekeeper_chestplate")
    event.addAfter('minecraft:redstone',"thermal:beekeeper_leggings")
    event.addAfter('minecraft:redstone',"thermal:beekeeper_boots")
	event.addAfter('minecraft:redstone',"quark:pipe")
	event.addAfter('minecraft:redstone',"quark:crate")
	event.addAfter('minecraft:redstone','deep_aether:stormforged_smithing_template')
	event.addAfter('minecraft:redstone','deep_aether:squall_plate')
})
