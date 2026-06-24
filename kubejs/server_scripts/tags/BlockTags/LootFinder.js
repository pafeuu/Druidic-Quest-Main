ServerEvents.tags("block",event=>{
    event.add("naturesaura_plus:loot_finder_treasure",[
        "waystones:blackstone_waystone",
        "waystones:deepslate_waystone",
        "waystones:end_stone_waystone",
        "waystones:waystone",
        "waystones:mossy_waystone",
        "waystones:sandy_waystone",
        "create:windmill_bearing",
        "create:clockwork_bearing",
        "create:millstone",
        "create:crushing_wheel",
        "create:lit_blaze_burner",
        "create:blaze_burner",
        "ars_nouveau:storage_lectern",
        "ars_nouveau:enchanting_apparatus",
        "ars_nouveau:arcane_core",
        "minecraft:enchanting_table",
        "quark:matrix_enchanter",
        "create:encased_fan",
        "create:mechanical_drill",
        "create:mechanical_press",
        "create:mechanical_arm",
        "create:mechanical_saw",
        "create:mechanical_harvester",
        "create:mechanical_bearing"

    ])

    event.remove("naturesaura_plus:loot_finder_treasure_chest",[
        "minecraft:barrel",
        "minecraft:chest"
    ])


})