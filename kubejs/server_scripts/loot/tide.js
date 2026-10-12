LootJS.modifiers(event=>{

    event.addLootTableModifier("minecraft:chests/nether_bridge")
    .randomChance(0.3)
    .addLoot("tide:blazing_fishing_rod")

    event.addLootTableModifier("minecraft:chests/ancient_city")
    .randomChance(0.1)
    .addLoot("tide:echo_fishing_rod")

    event.addEntityLootModifier("minecraft:elder_guardian")
    .randomChance(0.5)
    .addLoot("tide:prismarine_fishing_rod")
})