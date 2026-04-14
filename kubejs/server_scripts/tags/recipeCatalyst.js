ServerEvents.tags('item',event=>{

    const explodingCatalysts = [
        "ars_nouveau:glyph_explosion",
        "kubejs:explosive_arrow",
        "thermal:explosive_grenade",
        "minecraft:tnt_minecart",
        "minecraft:creeper_spawn_egg"
    ]

    event.add("lychee:item_exploding_catalysts",explodingCatalysts)

    event.add("lychee:block_exploding_catalysts",explodingCatalysts)

    event.add("lychee:lightning_channeling_catalysts","aether:lightning_knife")

    
})