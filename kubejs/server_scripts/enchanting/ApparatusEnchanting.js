ServerEvents.recipes(event=>{

    function Enchanting(Enchantment, level, input, source) {
    const itemInputs = input.map(function(inputItem) {
        return { item: { item: inputItem } };
    });

    event.custom({
        type: "ars_nouveau:enchantment",
        enchantment: Enchantment,
        level: level,
        pedestalItems: itemInputs,
        sourceCost: source
    });
}

    Enchanting("minecraft:fortune",1,[
        "kubejs:large_enchanting_rune_of_luck",
        "golden_pickaxe",
        "lapis_block"],6000)

    Enchanting("minecraft:fortune",2,[
        "kubejs:large_enchanting_rune_of_luck",
        "kubejs:large_enchanting_rune_of_luck",
        "golden_pickaxe",
        "lapis_block"],8000)

    Enchanting("minecraft:fortune",3,[
        "kubejs:large_enchanting_rune_of_luck",
        "kubejs:large_enchanting_rune_of_luck",
        "kubejs:large_enchanting_rune_of_luck",
        "kubejs:large_enchanting_rune_of_luck",
        "golden_pickaxe",
        "lapis_block"],10000)

    Enchanting("minecraft:looting",1,[
        "kubejs:large_enchanting_rune_of_luck",
        "golden_sword",
        "lapis_block"],6000)

    Enchanting("minecraft:looting",2,[
        "kubejs:large_enchanting_rune_of_luck",
        "kubejs:large_enchanting_rune_of_luck",
        "golden_sword",
        "lapis_block"],8000)

    Enchanting("minecraft:looting",3,[
        "kubejs:large_enchanting_rune_of_luck",
        "kubejs:large_enchanting_rune_of_luck",
        "kubejs:large_enchanting_rune_of_luck",
        "kubejs:large_enchanting_rune_of_luck",
        "olden_sword",
        "lapis_block"],10000)

    Enchanting("majruszsenchantments:hunter",1,[
        "kubejs:large_enchanting_rune_of_luck",
        "bow",
        "minecraft:rabbit_foot"],6000)

    Enchanting("majruszsenchantments:hunter",2,[
        "kubejs:large_enchanting_rune_of_luck",
        "kubejs:large_enchanting_rune_of_luck",
        "bow",
        "minecraft:rabbit_foot"],8000)

    Enchanting("majruszsenchantments:hunter",3,[
        "kubejs:large_enchanting_rune_of_luck",
        "kubejs:large_enchanting_rune_of_luck",
        "kubejs:large_enchanting_rune_of_luck",
        "kubejs:large_enchanting_rune_of_luck",
        "bow",
        "minecraft:rabbit_foot"],10000)

    Enchanting("minecraft:luck_of_the_sea",1,[
        "kubejs:large_enchanting_rune_of_luck",
        "tide:golden_fishing_rod",],6000)

    Enchanting("minecraft:luck_of_the_sea",2,[
        "kubejs:large_enchanting_rune_of_luck",
        "tide:golden_fishing_rod",
        "tide:golden_apple_fishing_bobber"],8000)

    Enchanting("minecraft:luck_of_the_sea",3,[
        "kubejs:large_enchanting_rune_of_luck",
        "tide:golden_fishing_rod",
        "tide:enchanted_golden_apple_fishing_bobber"],10000)

    Enchanting("majruszsenchantments:fishing_fanatic",8,[
        "kubejs:large_enchanting_rune_of_luck",
        "kubejs:large_enchanting_rune_of_luck",
        "tide:golden_fishing_rod",
        "tide:enchanted_golden_apple_fishing_bobber",
        "tide:enchanted_golden_apple_fishing_bobber"],10000)

    Enchanting("minecraft:knockback",1,[
        "kubejs:enchanting_rune_of_repulsion",
        "piston",
        "kubejs:lead_sword"],6000)

    Enchanting("minecraft:knockback",2,[
        "kubejs:enchanting_rune_of_repulsion",
        "piston",
        "piston",
        "kubejs:lead_sword"],8000)
    
    Enchanting("minecraft:punch",1,[
        "kubejs:enchanting_rune_of_repulsion",
        "piston",
        "bow"],6000)

    Enchanting("minecraft:punch",2,[
        "kubejs:enchanting_rune_of_repulsion",
        "piston",
        "piston",
        "bow"],8000)

    Enchanting("majruszsenchantments:repulsion",1,[
        "kubejs:enchanting_rune_of_repulsion",
        "piston",
        "shield"],6000)

    Enchanting("majruszsenchantments:breaking_curse",1,[
        "kubejs:enchanting_rune_of_curses",
        "minecraft:cracked_stone_bricks"
    ],500)

    Enchanting("majruszsenchantments:breaking_curse",2,[
        "kubejs:enchanting_rune_of_curses",
        "minecraft:cracked_stone_bricks",
        "minecraft:cracked_stone_bricks"
    ],500)

    Enchanting("majruszsenchantments:breaking_curse",3,[
        "kubejs:enchanting_rune_of_curses",
        "minecraft:cracked_stone_bricks",
        "minecraft:cracked_stone_bricks",
        "minecraft:cracked_stone_bricks"
    ],500)

    Enchanting("enigmaticlegacy:sorrow",1,[
        "kubejs:enchanting_rune_of_curses",
        "spider_eye"
    ],500)

    Enchanting("enigmaticlegacy:eternal_binding",1,[
        "kubejs:enchanting_rune_of_curses",
        "create:super_glue"
    ],500)

    Enchanting("minecraft:binding_curse",1,[
        "kubejs:enchanting_rune_of_curses",
        "slime_ball"
    ],500)

    Enchanting("majruszsenchantments:fatigue_curse",1,[
        "kubejs:enchanting_rune_of_curses",
        "cobweb"
    ],500)

    Enchanting("majruszsenchantments:fatigue_curse",2,[
        "kubejs:enchanting_rune_of_curses",
        "cobweb",
        "cobweb"
    ],1000)

    Enchanting("majruszsenchantments:fatigue_curse",3,[
        "kubejs:enchanting_rune_of_curses",
        "cobweb",
        "cobweb",
        "cobweb"
    ],1500)

    Enchanting("minecraft:vanishing_curse",1,[
        "kubejs:enchanting_rune_of_curses",
        "minecraft:phantom_membrane"
    ],500)

    Enchanting("majruszsenchantments:slippery_curse",1,[
        "kubejs:enchanting_rune_of_curses",
        "alexsmobs:banana_peel"
    ],500)

    Enchanting("majruszsenchantments:corrosion_curse",1,[
        "kubejs:enchanting_rune_of_curses",
        "immersive_weathering:rusted_iron_trapdoor"
    ],500)

    Enchanting("enigmaticlegacy:nemesis",1,[
        "kubejs:enchanting_rune_of_curses",
        "bone"
    ],500)

    Enchanting("majruszsenchantments:incompatibility_curse",1,[
        "kubejs:enchanting_rune_of_curses",
        "create:filter"
    ],500)

    Enchanting("naturesaura:aura_mending",1,[
        "kubejs:enchanting_rune_of_nature",
        "enigmaticlegacy:mending_mixture"
    ],5000)

    Enchanting("majruszsenchantments:harvester",1,[
        "kubejs:enchanting_rune_of_nature",
        "thermal:compost"
    ],1000)

    Enchanting("majruszsenchantments:harvester",2,[
        "kubejs:enchanting_rune_of_nature",
        "thermal:compost",
        "thermal:compost"
    ],1000)

    Enchanting("majruszsenchantments:harvester",3,[
        "kubejs:enchanting_rune_of_nature",
        "thermal:compost",
        "thermal:compost",
        "thermal:compost"
    ],1000)

    Enchanting("majruszsenchantments:immortality",1,[
        "kubejs:large_enchanting_rune_of_infinity",
        "minecraft:totem_of_undying"
    ],1000)

    Enchanting("majruszsenchantments:gold_fuelled",1,[
        "kubejs:large_enchanting_rune_of_infinity",
        "minecraft:enchanted_golden_apple"
    ],10000)

    Enchanting("minecraft:mending",1,[
        "kubejs:large_enchanting_rune_of_infinity",
        "enigmaticlegacy:mending_mixture",
        "enigmaticlegacy:mending_mixture",
        "enigmaticlegacy:mending_mixture"
    ],10000)

    Enchanting("minecraft:infinity",1,[
        "kubejs:large_enchanting_rune_of_infinity",
        "bow"
    ],10000)

    Enchanting("enigmaticlegacy:ceaseless",1,[
        "kubejs:large_enchanting_rune_of_infinity",
        "crossbow"
    ],10000)

    Enchanting("create:potato_recovery",1,[
        "kubejs:large_enchanting_rune_of_infinity",
        "farmersdelight:potato_crate",
        "farmersdelight:potato_crate"
    ],6000)

    Enchanting("create:potato_recovery",2,[
        "kubejs:large_enchanting_rune_of_infinity",
        "farmersdelight:potato_crate",
        "farmersdelight:potato_crate",
        "farmersdelight:potato_crate",
        "farmersdelight:potato_crate"
    ],8000)

    Enchanting("create:potato_recovery",3,[
        "kubejs:large_enchanting_rune_of_infinity",
        "farmersdelight:potato_crate",
        "farmersdelight:potato_crate",
        "farmersdelight:potato_crate",
        "farmersdelight:potato_crate",
        "farmersdelight:potato_crate",
        "farmersdelight:potato_crate"
    ],10000)

    Enchanting("majruszsenchantments:smelter",1,[
        "kubejs:enchanting_rune_of_fire",
        "blast_furnace"
    ],10000)

    Enchanting("minecraft:flame",1,[
        "kubejs:enchanting_rune_of_fire",
        "quark:torch_arrow"
    ],10000)

    Enchanting("minecraft:fire_aspect",1,[
        "kubejs:enchanting_rune_of_fire",
        "wooden_sword"
    ],5000)

    Enchanting("minecraft:fire_aspect",2,[
        "kubejs:enchanting_rune_of_fire",
        "wooden_sword",
        "ars_nouveau:fire_essence"
    ],10000)

    Enchanting("twilightforest:fire_react",1,[
        "kubejs:enchanting_rune_of_fire",
        "kubejs:enchanting_rune_of_rebounding"
    ],6000)

    Enchanting("twilightforest:fire_react",2,[
        "kubejs:enchanting_rune_of_fire",
        "kubejs:enchanting_rune_of_rebounding",
        "ars_nouveau:fire_essence"
    ],8000)

    Enchanting("twilightforest:fire_react",3,[
        "kubejs:enchanting_rune_of_fire",
        "kubejs:enchanting_rune_of_rebounding",
        "ars_nouveau:fire_essence",
        "ars_nouveau:fire_essence"
    ],10000)

    Enchanting("minecraft:fire_protection",1,[
        "kubejs:enchanting_rune_of_fire",
        "kubejs:big_enchanting_rune_of_steel"
    ],2000)

    Enchanting("minecraft:fire_protection",2,[
        "kubejs:enchanting_rune_of_fire",
        "kubejs:big_enchanting_rune_of_steel",
        "vintageimprovements:fiery_sheet"
    ],4000)

    Enchanting("minecraft:fire_protection",3,[
        "kubejs:enchanting_rune_of_fire",
        "kubejs:big_enchanting_rune_of_steel",
        "vintageimprovements:fiery_sheet",
        "vintageimprovements:fiery_sheet"
    ],6000)

    Enchanting("minecraft:fire_protection",4,[
        "kubejs:enchanting_rune_of_fire",
        "kubejs:big_enchanting_rune_of_steel",
        "vintageimprovements:fiery_sheet",
        "vintageimprovements:fiery_sheet",
        "vintageimprovements:fiery_sheet"
    ],8000)

    Enchanting("twilightforest:chill_aura",1,[
        "kubejs:enchanting_rune_of_ice",
        "kubejs:enchanting_rune_of_rebounding"
    ],6000)

    Enchanting("twilightforest:chill_aura",2,[
        "kubejs:enchanting_rune_of_ice",
        "kubejs:enchanting_rune_of_rebounding",
        "minecraft:blue_ice"
    ],8000)

    Enchanting("twilightforest:chill_aura",3,[
        "kubejs:enchanting_rune_of_ice",
        "kubejs:enchanting_rune_of_rebounding",
        "minecraft:blue_ice",
        "minecraft:blue_ice"
    ],10000)

    Enchanting("minecraft:frost_walker",1,[
        "kubejs:enchanting_rune_of_ice",
        "minecraft:leather_boots"
    ],5000)

    Enchanting("minecraft:frost_walker",2,[
        "kubejs:enchanting_rune_of_ice",
        "minecraft:leather_boots",
        "minecraft:blue_ice"
    ],10000)

    Enchanting("majruszsenchantments:horse_frost_walker",1,[
        "kubejs:enchanting_rune_of_ice",
        "minecraft:leather_horse_armor"
    ],5000)

    Enchanting("majruszsenchantments:horse_frost_walker",2,[
        "kubejs:enchanting_rune_of_ice",
        "minecraft:leather_horse_armor",
        "minecraft:blue_ice"
    ],10000)

    Enchanting("forbidden_arcanus:permafrost",1,[
        "kubejs:enchanting_rune_of_ice",
        "bucket"
    ],5000)

    Enchanting("ars_nouveau:mana_regen",1,[
        "kubejs:enchanting_rune_of_mana",
        "ars_nouveau:sourceberry_bush"
    ],6000)

    Enchanting("ars_nouveau:mana_regen",2,[
        "kubejs:enchanting_rune_of_mana",
        "ars_nouveau:sourceberry_bush",
        "ars_nouveau:sourceberry_bush",
    ],8000)

    Enchanting("ars_nouveau:mana_regen",3,[
        "kubejs:enchanting_rune_of_mana",
        "ars_nouveau:sourceberry_bush",
        "ars_nouveau:sourceberry_bush",
        "ars_nouveau:sourceberry_bush",
        "ars_nouveau:sourceberry_bush"
    ],10000)

    Enchanting("ars_nouveau:mana_boost",1,[
        "kubejs:enchanting_rune_of_mana",
        "ars_nouveau:source_gem"
    ],6000)

    Enchanting("ars_nouveau:mana_boost",2,[
        "kubejs:enchanting_rune_of_mana",
        "ars_nouveau:source_gem",
        "ars_nouveau:source_gem",
    ],8000)

    Enchanting("ars_nouveau:mana_boost",3,[
        "kubejs:enchanting_rune_of_mana",
        "ars_nouveau:source_gem",
        "ars_nouveau:source_gem",
        "ars_nouveau:source_gem",
        "ars_nouveau:source_gem"
    ],10000)

    Enchanting("enigmaticlegacy:torrent",1,[
        "kubejs:enchanting_rune_of_water",
        "kubejs:enchanting_rune_of_pain",
        "ars_nouveau:water_essence"
    ],2000)

    Enchanting("enigmaticlegacy:torrent",2,[
        "kubejs:enchanting_rune_of_water",
        "kubejs:enchanting_rune_of_pain",
        "ars_nouveau:water_essence",
        "ars_nouveau:water_essence"
    ],4000)

    Enchanting("enigmaticlegacy:torrent",3,[
        "kubejs:enchanting_rune_of_water",
        "kubejs:enchanting_rune_of_pain",
        "ars_nouveau:water_essence",
        "ars_nouveau:water_essence",
        "ars_nouveau:water_essence"
    ],6000)

    Enchanting("enigmaticlegacy:torrent",4,[
        "kubejs:enchanting_rune_of_water",
        "kubejs:enchanting_rune_of_pain",
        "ars_nouveau:water_essence",
        "ars_nouveau:water_essence",
        "ars_nouveau:water_essence",
        "ars_nouveau:water_essence"
    ],8000)

    Enchanting("enigmaticlegacy:torrent",5,[
        "kubejs:enchanting_rune_of_water",
        "kubejs:enchanting_rune_of_pain",
        "ars_nouveau:water_essence",
        "ars_nouveau:water_essence",
        "ars_nouveau:water_essence",
        "ars_nouveau:water_essence",
        "ars_nouveau:water_essence"
    ],10000)

    Enchanting("minecraft:impaling",1,[
        "kubejs:enchanting_rune_of_water",
        "kubejs:enchanting_rune_of_pain",
        "ars_nouveau:fire_essence"
    ],2000)

    Enchanting("minecraft:impaling",2,[
        "kubejs:enchanting_rune_of_water",
        "kubejs:enchanting_rune_of_pain",
        "ars_nouveau:fire_essence",
        "ars_nouveau:fire_essence"
    ],4000)

    Enchanting("minecraft:impaling",3,[
        "kubejs:enchanting_rune_of_water",
        "kubejs:enchanting_rune_of_pain",
        "ars_nouveau:fire_essence",
        "ars_nouveau:fire_essence",
        "ars_nouveau:fire_essence"
    ],6000)

    Enchanting("minecraft:impaling",4,[
        "kubejs:enchanting_rune_of_water",
        "kubejs:enchanting_rune_of_pain",
        "ars_nouveau:fire_essence",
        "ars_nouveau:fire_essence",
        "ars_nouveau:fire_essence",
        "ars_nouveau:fire_essence"
    ],8000)

    Enchanting("minecraft:impaling",5,[
        "kubejs:enchanting_rune_of_water",
        "kubejs:enchanting_rune_of_pain",
        "ars_nouveau:fire_essence",
        "ars_nouveau:fire_essence",
        "ars_nouveau:fire_essence",
        "ars_nouveau:fire_essence",
        "ars_nouveau:fire_essence"
    ],10000)

    Enchanting("minecraft:lure",1,[
        "kubejs:enchanting_rune_of_water",
        "tide:bait"
    ],2000)

    Enchanting("minecraft:lure",2,[
        "kubejs:enchanting_rune_of_water",
        "tide:bait",
        "tide:bait"
    ],4000)

    Enchanting("minecraft:lure",3,[
        "kubejs:enchanting_rune_of_water",
        "tide:bait",
        "tide:bait",
        "tide:bait"
    ],6000)

    Enchanting("minecraft:respiration",1,[
        "kubejs:enchanting_rune_of_water",
        "ars_nouveau:air_essence"
    ],2000)

    Enchanting("minecraft:respiration",2,[
        "kubejs:enchanting_rune_of_water",
        "ars_nouveau:air_essence",
        "ars_nouveau:air_essence"
    ],4000)

    Enchanting("minecraft:respiration",3,[
        "kubejs:enchanting_rune_of_water",
        "ars_nouveau:air_essence",
        "ars_nouveau:air_essence",
        "ars_nouveau:air_essence"
    ],6000)

    Enchanting("minecraft:aqua_affinity",1,[
        "kubejs:enchanting_rune_of_water",
        "kubejs:enchanting_rune_of_speed"
    ],10000)

    Enchanting("minecraft:riptide",1,[
        "kubejs:enchanting_rune_of_water",
        "supplementaries:spring_launcher"
    ],2000)

    Enchanting("minecraft:riptide",2,[
        "kubejs:enchanting_rune_of_water",
        "supplementaries:spring_launcher",
        "supplementaries:spring_launcher"
    ],4000)

    Enchanting("minecraft:riptide",3,[
        "kubejs:enchanting_rune_of_water",
        "supplementaries:spring_launcher",
        "supplementaries:spring_launcher",
        "supplementaries:spring_launcher"
    ],6000)

    Enchanting("create:capacity",1,[
        "kubejs:enchanting_rune_of_water",
        "create:fluid_tank"
    ],2000)

    Enchanting("create:capacity",2,[
        "kubejs:enchanting_rune_of_water",
        "create:fluid_tank",
        "create:fluid_tank"
    ],4000)

    Enchanting("create:capacity",3,[
        "kubejs:enchanting_rune_of_water",
        "create:fluid_tank",
        "create:fluid_tank",
        "create:fluid_tank"
    ],6000)

    Enchanting("supplementaries:stasis",1,[
        "kubejs:big_enchanting_rune_of_cosmos",
        "quark:bottled_cloud"
    ],5000)

    Enchanting("majruszsenchantments:telekinesis",1,[
        "kubejs:big_enchanting_rune_of_cosmos",
        "enigmaticlegacy:extradimensional_eye"
    ],10000)

    Enchanting("minecraft:efficiency",1,[
        "kubejs:enchanting_rune_of_speed",
        "kubejs:silver_pickaxe",
        "supplementaries:sugar_cube"
    ],2000)

    Enchanting("minecraft:efficiency",2,[
        "kubejs:enchanting_rune_of_speed",
        "kubejs:silver_pickaxe",
        "supplementaries:sugar_cube",
        "supplementaries:sugar_cube"
    ],4000)

    Enchanting("minecraft:efficiency",3,[
        "kubejs:enchanting_rune_of_speed",
        "kubejs:silver_pickaxe",
        "supplementaries:sugar_cube",
        "supplementaries:sugar_cube",
        "supplementaries:sugar_cube"
    ],6000)

    Enchanting("minecraft:efficiency",4,[
        "kubejs:enchanting_rune_of_speed",
        "kubejs:silver_pickaxe",
        "supplementaries:sugar_cube",
        "supplementaries:sugar_cube",
        "supplementaries:sugar_cube",
        "supplementaries:sugar_cube"
    ],8000)

    Enchanting("minecraft:efficiency",5,[
        "kubejs:enchanting_rune_of_speed",
        "kubejs:silver_pickaxe",
        "supplementaries:sugar_cube",
        "supplementaries:sugar_cube",
        "supplementaries:sugar_cube",
        "supplementaries:sugar_cube",
        "supplementaries:sugar_cube"
    ],10000)

    Enchanting("minecraft:swift_sneak",1,[
        "kubejs:enchanting_rune_of_speed",
        "leather_leggings",
        "sculk"
    ],2000)

    Enchanting("minecraft:swift_sneak",2,[
        "kubejs:enchanting_rune_of_speed",
        "leather_leggings",
        "sculk",
        "supplementaries:sugar_cube"
    ],4000)

    Enchanting("minecraft:swift_sneak",3,[
        "kubejs:enchanting_rune_of_speed",
        "leather_leggings",
        "sculk",
        "sculk",
        "sculk"
    ],6000)

    Enchanting("minecraft:quick_charge",1,[
        "kubejs:enchanting_rune_of_speed",
        "crossbow",
        "supplementaries:sugar_cube"
    ],2000)

    Enchanting("minecraft:quick_charge",2,[
        "kubejs:enchanting_rune_of_speed",
        "crossbow",
        "supplementaries:sugar_cube",
        "supplementaries:sugar_cube"
    ],4000)

    Enchanting("minecraft:quick_charge",3,[
        "kubejs:enchanting_rune_of_speed",
        "crossbow",
        "supplementaries:sugar_cube",
        "supplementaries:sugar_cube",
        "supplementaries:sugar_cube"
    ],6000)

    Enchanting("majruszsenchantments:horse_swiftness",1,[
        "kubejs:enchanting_rune_of_speed",
        "minecraft:leather_horse_armor",
        "supplementaries:sugar_cube"
    ],2000)

    Enchanting("majruszsenchantments:horse_swiftness",2,[
        "kubejs:enchanting_rune_of_speed",
        "minecraft:leather_horse_armor",
        "supplementaries:sugar_cube",
        "supplementaries:sugar_cube"
    ],4000)

    Enchanting("majruszsenchantments:horse_swiftness",3,[
        "kubejs:enchanting_rune_of_speed",
        "minecraft:leather_horse_armor",
        "supplementaries:sugar_cube",
        "supplementaries:sugar_cube",
        "supplementaries:sugar_cube"
    ],6000)

    Enchanting("majruszsenchantments:horse_swiftness",4,[
        "kubejs:enchanting_rune_of_speed",
        "minecraft:leather_horse_armor",
        "supplementaries:sugar_cube",
        "supplementaries:sugar_cube",
        "supplementaries:sugar_cube",
        "supplementaries:sugar_cube"
    ],8000)

    Enchanting("deeperdarker:catalysis",1,[
        "kubejs:enchanting_rune_of_horror",
        "sculk_catalyst",
        "ars_nouveau:earth_essence"
    ],3000)

    Enchanting("deeperdarker:catalysis",2,[
        "kubejs:enchanting_rune_of_horror",
        "sculk_catalyst",
        "ars_nouveau:earth_essence",
        "ars_nouveau:earth_essence"
    ],6000)

    Enchanting("deeperdarker:catalysis",3,[
        "kubejs:enchanting_rune_of_horror",
        "sculk_catalyst",
        "ars_nouveau:earth_essence",
        "ars_nouveau:earth_essence",
        "ars_nouveau:earth_essence"
    ],9000)

    Enchanting("minecraft:soul_speed",1,[
        "kubejs:enchanting_rune_of_horror",
        "kubejs:enchanting_rune_of_speed",
        "soul_sand"
    ],3000)

    Enchanting("minecraft:soul_speed",2,[
        "kubejs:enchanting_rune_of_horror",
        "kubejs:enchanting_rune_of_speed",
        "soul_sand",
        "soul_sand"
    ],6000)

    Enchanting("minecraft:soul_speed",3,[
        "kubejs:enchanting_rune_of_horror",
        "kubejs:enchanting_rune_of_speed",
        "soul_sand",
        "soul_sand",
        "soul_sand"
    ],9000)

    Enchanting("mynethersdelight:poaching",1,[
        "kubejs:enchanting_rune_of_horror",
        "kubejs:enchanting_rune_of_curses"
    ],5000)

    Enchanting("twilightforest:destruction",1,[
        "kubejs:enchanting_rune_of_horror",
        "tnt"
    ],3000)

    Enchanting("twilightforest:destruction",2,[
        "kubejs:enchanting_rune_of_horror",
        "tnt",
        "tnt"
    ],6000)

    Enchanting("twilightforest:destruction",3,[
        "kubejs:enchanting_rune_of_horror",
        "tnt",
        "tnt",
        "tnt"
    ],9000)

    Enchanting("majruszsenchantments:death_wish",1,[
        "kubejs:big_enchanting_rune_of_horror",
        "kubejs:death_essence"
    ],10000)

    Enchanting("majruszsenchantments:leech",1,[
        "kubejs:big_enchanting_rune_of_horror",
        "aether:vampire_blade"
    ],10000)

    Enchanting("enigmaticlegacy:slayer",1,[
        "kubejs:big_enchanting_rune_of_horror",
        "kubejs:enchanting_rune_of_horror",
        "kubejs:ivy_quartz"
        
    ],2000)

    Enchanting("enigmaticlegacy:slayer",2,[
        "kubejs:big_enchanting_rune_of_horror",
        "kubejs:enchanting_rune_of_horror",
        "kubejs:ivy_quartz",
        "kubejs:ivy_quartz"
    ],4000)

    Enchanting("enigmaticlegacy:slayer",3,[
        "kubejs:big_enchanting_rune_of_horror",
        "kubejs:enchanting_rune_of_horror",
        "kubejs:ivy_quartz",
        "kubejs:ivy_quartz",
        "kubejs:ivy_quartz"
    ],6000)

    Enchanting("enigmaticlegacy:slayer",4,[
        "kubejs:big_enchanting_rune_of_horror",
        "kubejs:enchanting_rune_of_horror",
        "kubejs:ivy_quartz",
        "kubejs:ivy_quartz",
        "kubejs:ivy_quartz",
        "kubejs:ivy_quartz"
    ],8000)

    Enchanting("enigmaticlegacy:slayer",5,[
        "kubejs:big_enchanting_rune_of_horror",
        "kubejs:enchanting_rune_of_horror",
        "kubejs:ivy_quartz",
        "kubejs:ivy_quartz",
        "kubejs:ivy_quartz",
        "kubejs:ivy_quartz",
        "kubejs:ivy_quartz"
    ],10000)

    Enchanting("deeperdarker:sculk_smite",1,[
        "kubejs:big_enchanting_rune_of_horror",
        "sculk"
        
    ],2000)

    Enchanting("deeperdarker:sculk_smite",2,[
        "kubejs:big_enchanting_rune_of_horror",
        "sculk",
        "sculk"
    ],4000)

    Enchanting("deeperdarker:sculk_smite",3,[
        "kubejs:big_enchanting_rune_of_horror",
        "sculk",
        "sculk",
        "sculk"
    ],6000)

    Enchanting("deeperdarker:sculk_smite",4,[
        "kubejs:big_enchanting_rune_of_horror",
        "sculk",
        "sculk",
        "sculk",
        "sculk"
    ],8000)

    Enchanting("deeperdarker:sculk_smite",5,[
        "kubejs:big_enchanting_rune_of_horror",
        "sculk",
        "sculk",
        "sculk",
        "sculk",
        "sculk"
    ],10000)

    Enchanting("minecraft:thorns",1,[
        "kubejs:enchanting_rune_of_pain",
        "quark:cactus_block",
        "quark:cactus_block"
    ],3000)

    Enchanting("minecraft:thorns",2,[
        "kubejs:enchanting_rune_of_pain",
        "quark:cactus_block",
        "quark:cactus_block",
        "quark:cactus_block",
        "quark:cactus_block"
    ],6000)

    Enchanting("minecraft:thorns",3,[
        "kubejs:enchanting_rune_of_pain",
        "quark:cactus_block",
        "quark:cactus_block",
        "quark:cactus_block",
        "quark:cactus_block",
        "quark:cactus_block",
        "quark:cactus_block"
    ],9000)

    Enchanting("majruszsenchantments:misanthropy",1,[
        "kubejs:enchanting_rune_of_pain",
        "kubejs:infused_emerald"
    ],2000)

    Enchanting("majruszsenchantments:misanthropy",2,[
        "kubejs:enchanting_rune_of_pain",
        "kubejs:infused_emerald",
        "kubejs:infused_emerald"
    ],4000)

    Enchanting("majruszsenchantments:misanthropy",3,[
        "kubejs:enchanting_rune_of_pain",
        "kubejs:infused_emerald",
        "kubejs:infused_emerald",
        "kubejs:infused_emerald"
    ],6000)

    Enchanting("majruszsenchantments:misanthropy",4,[
        "kubejs:enchanting_rune_of_pain",
        "kubejs:infused_emerald",
        "kubejs:infused_emerald",
        "kubejs:infused_emerald",
        "kubejs:infused_emerald"
    ],8000)

    Enchanting("majruszsenchantments:misanthropy",5,[
        "kubejs:enchanting_rune_of_pain",
        "kubejs:infused_emerald",
        "kubejs:infused_emerald",
        "kubejs:infused_emerald",
        "kubejs:infused_emerald",
        "kubejs:infused_emerald"
    ],10000)

    Enchanting("farmersdelight:backstabbing",1,[
        "kubejs:enchanting_rune_of_pain",
        "farmersdelight:iron_knife"
    ],3000)

    Enchanting("farmersdelight:backstabbing",2,[
        "kubejs:enchanting_rune_of_pain",
        "farmersdelight:iron_knife",
        "farmersdelight:iron_knife"
    ],6000)

    Enchanting("farmersdelight:backstabbing",3,[
        "kubejs:enchanting_rune_of_pain",
        "farmersdelight:iron_knife",
        "farmersdelight:iron_knife",
        "farmersdelight:iron_knife"
    ],9000)

    Enchanting("minecraft:bane_of_arthropods",1,[
        "kubejs:enchanting_rune_of_pain",
        "fermented_spider_eye"
    ],2000)

    Enchanting("minecraft:bane_of_arthropods",2,[
        "kubejs:enchanting_rune_of_pain",
        "fermented_spider_eye",
        "fermented_spider_eye"
    ],4000)

    Enchanting("minecraft:bane_of_arthropods",3,[
        "kubejs:enchanting_rune_of_pain",
        "fermented_spider_eye",
        "fermented_spider_eye",
        "fermented_spider_eye"
    ],6000)

    Enchanting("minecraft:bane_of_arthropods",4,[
        "kubejs:enchanting_rune_of_pain",
        "fermented_spider_eye",
        "fermented_spider_eye",
        "fermented_spider_eye",
        "fermented_spider_eye"
    ],8000)

    Enchanting("minecraft:bane_of_arthropods",5,[
        "kubejs:enchanting_rune_of_pain",
        "fermented_spider_eye",
        "fermented_spider_eye",
        "fermented_spider_eye",
        "fermented_spider_eye",
        "fermented_spider_eye"
    ],10000)

    Enchanting("minecraft:smite",1,[
        "kubejs:enchanting_rune_of_pain",
        "irons_spellbooks:blood_vial"
    ],2000)

    Enchanting("minecraft:smite",2,[
        "kubejs:enchanting_rune_of_pain",
        "irons_spellbooks:blood_vial",
        "irons_spellbooks:blood_vial"
    ],4000)

    Enchanting("minecraft:smite",3,[
        "kubejs:enchanting_rune_of_pain",
        "irons_spellbooks:blood_vial",
        "irons_spellbooks:blood_vial",
        "irons_spellbooks:blood_vial"
    ],6000)

    Enchanting("minecraft:smite",4,[
        "kubejs:enchanting_rune_of_pain",
        "irons_spellbooks:blood_vial",
        "irons_spellbooks:blood_vial",
        "irons_spellbooks:blood_vial",
        "irons_spellbooks:blood_vial"
    ],8000)

    Enchanting("minecraft:smite",5,[
        "kubejs:enchanting_rune_of_pain",
        "irons_spellbooks:blood_vial",
        "irons_spellbooks:blood_vial",
        "irons_spellbooks:blood_vial",
        "irons_spellbooks:blood_vial",
        "irons_spellbooks:blood_vial"
    ],10000)

    Enchanting("minecraft:piercing",1,[
        "kubejs:enchanting_rune_of_pain",
        "ars_nouveau:wilden_spike"
    ],2500)

    Enchanting("minecraft:piercing",2,[
        "kubejs:enchanting_rune_of_pain",
        "ars_nouveau:wilden_spike",
        "ars_nouveau:wilden_spike"
    ],5000)

    Enchanting("minecraft:piercing",3,[
        "kubejs:enchanting_rune_of_pain",
        "ars_nouveau:wilden_spike",
        "ars_nouveau:wilden_spike",
        "ars_nouveau:wilden_spike"
    ],7500)

    Enchanting("minecraft:piercing",4,[
        "kubejs:enchanting_rune_of_pain",
        "ars_nouveau:wilden_spike",
        "ars_nouveau:wilden_spike",
        "ars_nouveau:wilden_spike",
        "ars_nouveau:wilden_spike"
    ],10000)

    Enchanting("minecraft:power",1,[
        "kubejs:big_enchanting_rune_of_pain",
        "archers_paradox:diamond_arrow"
    ],2000)

    Enchanting("minecraft:power",2,[
        "kubejs:big_enchanting_rune_of_pain",
        "archers_paradox:diamond_arrow",
        "archers_paradox:diamond_arrow"
    ],4000)

    Enchanting("minecraft:power",3,[
        "kubejs:big_enchanting_rune_of_pain",
        "archers_paradox:diamond_arrow",
        "archers_paradox:diamond_arrow",
        "archers_paradox:diamond_arrow"
    ],6000)

    Enchanting("minecraft:power",4,[
        "kubejs:big_enchanting_rune_of_pain",
        "archers_paradox:diamond_arrow",
        "archers_paradox:diamond_arrow",
        "archers_paradox:diamond_arrow",
        "archers_paradox:diamond_arrow"
    ],8000)

    Enchanting("minecraft:power",5,[
        "kubejs:big_enchanting_rune_of_pain",
        "archers_paradox:diamond_arrow",
        "archers_paradox:diamond_arrow",
        "archers_paradox:diamond_arrow",
        "archers_paradox:diamond_arrow",
        "archers_paradox:diamond_arrow"
    ],10000)

    Enchanting("minecraft:sharpness",1,[
        "kubejs:big_enchanting_rune_of_pain",
        "alexsmobs:shark_tooth",
        "kubejs:ivy_quartz"
    ],2000)

    Enchanting("minecraft:sharpness",2,[
        "kubejs:big_enchanting_rune_of_pain",
        "alexsmobs:shark_tooth",
        "kubejs:ivy_quartz",
        "kubejs:ivy_quartz"
    ],4000)

    Enchanting("minecraft:sharpness",3,[
        "kubejs:big_enchanting_rune_of_pain",
        "alexsmobs:shark_tooth",
        "kubejs:ivy_quartz",
        "kubejs:ivy_quartz",
        "kubejs:ivy_quartz"
    ],6000)

    Enchanting("minecraft:sharpness",4,[
        "kubejs:big_enchanting_rune_of_pain",
        "alexsmobs:shark_tooth",
        "kubejs:ivy_quartz",
        "kubejs:ivy_quartz",
        "kubejs:ivy_quartz",
        "kubejs:ivy_quartz"
    ],8000)

    Enchanting("minecraft:sharpness",5,[
        "kubejs:big_enchanting_rune_of_pain",
        "alexsmobs:shark_tooth",
        "kubejs:ivy_quartz",
        "kubejs:ivy_quartz",
        "kubejs:ivy_quartz",
        "kubejs:ivy_quartz",
        "kubejs:ivy_quartz"
    ],10000)

    Enchanting("enigmaticlegacy:wrath",1,[
        "kubejs:big_enchanting_rune_of_pain",
        "naturesaura:token_anger"
    ],2000)

    Enchanting("enigmaticlegacy:wrath",2,[
        "kubejs:big_enchanting_rune_of_pain",
        "naturesaura:token_anger",
        "naturesaura:token_anger"
    ],4000)

    Enchanting("enigmaticlegacy:wrath",3,[
        "kubejs:big_enchanting_rune_of_pain",
        "naturesaura:token_anger",
        "naturesaura:token_anger",
        "naturesaura:token_anger"
    ],6000)

    Enchanting("enigmaticlegacy:wrath",4,[
        "kubejs:big_enchanting_rune_of_pain",
        "naturesaura:token_anger",
        "naturesaura:token_anger",
        "naturesaura:token_anger",
        "naturesaura:token_anger"
    ],8000)

    Enchanting("enigmaticlegacy:wrath",5,[
        "kubejs:big_enchanting_rune_of_pain",
        "naturesaura:token_anger",
        "naturesaura:token_anger",
        "naturesaura:token_anger",
        "naturesaura:token_anger",
        "naturesaura:token_anger"
    ],10000)

    Enchanting("minecraft:silk_touch",1,[
        "kubejs:large_enchanting_rune_of_wisdom",
        "wizards_reborn:arcane_wood_axe",
        "wizards_reborn:arcane_wood_pickaxe",
        "wizards_reborn:arcane_wood_shovel",
        "wizards_reborn:arcane_wood_hoe"
    ],10000)

    Enchanting("minecraft:channeling",1,[
        "kubejs:large_enchanting_rune_of_wisdom",
        "thermal:lightning_charge",
        "thermal:lightning_charge",
        "thermal:lightning_charge",
        "thermal:lightning_charge"
    ],10000)

    Enchanting("majruszsenchantments:enlightenment",1,[
        "kubejs:large_enchanting_rune_of_wisdom",
        "forbidden_arcanus:xpetrified_orb",
        "forbidden_arcanus:xpetrified_orb",
        "forbidden_arcanus:xpetrified_orb"
    ],5000)

    Enchanting("majruszsenchantments:enlightenment",2,[
        "kubejs:large_enchanting_rune_of_wisdom",
        "forbidden_arcanus:xpetrified_orb",
        "forbidden_arcanus:xpetrified_orb",
        "forbidden_arcanus:xpetrified_orb",
        "forbidden_arcanus:xpetrified_orb",
        "forbidden_arcanus:xpetrified_orb",
        "forbidden_arcanus:xpetrified_orb"
    ],10000)

    Enchanting("majruszsenchantments:fuse_cutter",1,[
        "kubejs:big_enchanting_rune_of_wisdom",
        "shield",
        "shears"
    ],5000)

    Enchanting("cofh_core:holding",1,[
        "kubejs:big_enchanting_rune_of_wisdom",
        "thermal:fluid_cell"
    ],2500)

    Enchanting("cofh_core:holding",2,[
        "kubejs:big_enchanting_rune_of_wisdom",
        "thermal:fluid_cell",
        "thermal:fluid_cell"
    ],5000)

    Enchanting("cofh_core:holding",3,[
        "kubejs:big_enchanting_rune_of_wisdom",
        "thermal:fluid_cell",
        "thermal:fluid_cell",
        "thermal:fluid_cell"
    ],7500)

    Enchanting("cofh_core:holding",4,[
        "kubejs:big_enchanting_rune_of_wisdom",
        "thermal:fluid_cell",
        "thermal:fluid_cell",
        "thermal:fluid_cell",
        "thermal:fluid_cell"
    ],10000)

    Enchanting("minecraft:loyalty",1,[
        "kubejs:big_enchanting_rune_of_wisdom",
        "rose_bush"
    ],3000)

    Enchanting("minecraft:loyalty",2,[
        "kubejs:big_enchanting_rune_of_wisdom",
        "rose_bush",
        "rose_bush"
    ],6000)

    Enchanting("minecraft:loyalty",3,[
        "kubejs:big_enchanting_rune_of_wisdom",
        "rose_bush",
        "rose_bush",
        "rose_bush"
    ],9000)

    Enchanting("minecraft:multishot",1,[
        "kubejs:big_enchanting_rune_of_wisdom",
        "supplementaries:quiver"
    ],5000)

    Enchanting("majruszsenchantments:sixth_sense",1,[
        "kubejs:big_enchanting_rune_of_wisdom",
        "naturesaura:light_staff"
    ],5000)

    Enchanting("majruszsenchantments:horse_protection",1,[
        "kubejs:big_enchanting_rune_of_steel",
        "minecraft:iron_horse_armor",
        "create:iron_sheet"
    ],2500)

    Enchanting("majruszsenchantments:horse_protection",2,[
        "kubejs:big_enchanting_rune_of_steel",
        "minecraft:iron_horse_armor",
        "create:iron_sheet",
        "create:iron_sheet"
    ],5000)

    Enchanting("majruszsenchantments:horse_protection",3,[
        "kubejs:big_enchanting_rune_of_steel",
        "minecraft:iron_horse_armor",
        "create:iron_sheet",
        "create:iron_sheet",
        "create:iron_sheet"
    ],7500)

    Enchanting("majruszsenchantments:horse_protection",4,[
        "kubejs:big_enchanting_rune_of_steel",
        "minecraft:iron_horse_armor",
        "create:iron_sheet",
        "create:iron_sheet",
        "create:iron_sheet",
        "create:iron_sheet",
    ],10000)

    Enchanting("minecraft:protection",1,[
        "kubejs:big_enchanting_rune_of_steel",
        "minecraft:iron_chestplate",
        "thermal:steel_plate"
    ],2500)

    Enchanting("minecraft:protection",2,[
        "kubejs:big_enchanting_rune_of_steel",
        "minecraft:iron_chestplate",
        "thermal:steel_plate",
        "thermal:steel_plate"
    ],5000)

    Enchanting("minecraft:protection",3,[
        "kubejs:big_enchanting_rune_of_steel",
        "minecraft:iron_chestplate",
        "thermal:steel_plate",
        "thermal:steel_plate",
        "thermal:steel_plate"
    ],7500)

    Enchanting("minecraft:protection",4,[
        "kubejs:big_enchanting_rune_of_steel",
        "minecraft:iron_chestplate",
        "thermal:steel_plate",
        "thermal:steel_plate",
        "thermal:steel_plate",
        "thermal:steel_plate",
    ],10000)

    Enchanting("minecraft:blast_protection",1,[
        "kubejs:big_enchanting_rune_of_steel",
        "minecraft:iron_chestplate",
        "tnt"
    ],2500)

    Enchanting("minecraft:blast_protection",2,[
        "kubejs:big_enchanting_rune_of_steel",
        "minecraft:iron_chestplate",
        "tnt",
        "tnt"
    ],5000)

    Enchanting("minecraft:blast_protection",3,[
        "kubejs:big_enchanting_rune_of_steel",
        "minecraft:iron_chestplate",
        "tnt",
        "tnt",
        "tnt"
    ],7500)

    Enchanting("minecraft:blast_protection",4,[
        "kubejs:big_enchanting_rune_of_steel",
        "minecraft:iron_chestplate",
        "tnt",
        "tnt",
        "tnt",
        "tnt",
    ],10000)

    Enchanting("minecraft:projectile_protection",1,[
        "kubejs:big_enchanting_rune_of_steel",
        "minecraft:iron_chestplate",
        "archers_paradox:quartz_arrow"
    ],2500)

    Enchanting("minecraft:projectile_protection",2,[
        "kubejs:big_enchanting_rune_of_steel",
        "minecraft:iron_chestplate",
        "archers_paradox:quartz_arrow",
        "archers_paradox:quartz_arrow"
    ],5000)

    Enchanting("minecraft:projectile_protection",3,[
        "kubejs:big_enchanting_rune_of_steel",
        "minecraft:iron_chestplate",
        "archers_paradox:quartz_arrow",
        "archers_paradox:quartz_arrow",
        "archers_paradox:quartz_arrow"
    ],7500)

    Enchanting("minecraft:projectile_protection",4,[
        "kubejs:big_enchanting_rune_of_steel",
        "minecraft:iron_chestplate",
        "archers_paradox:quartz_arrow",
        "archers_paradox:quartz_arrow",
        "archers_paradox:quartz_arrow",
        "archers_paradox:quartz_arrow",
    ],10000)

    Enchanting("minecraft:unbreaking",1,[
        "kubejs:big_enchanting_rune_of_steel",
        "kubejs:infused_diamond"
    ],3000)

    Enchanting("minecraft:unbreaking",2,[
        "kubejs:big_enchanting_rune_of_steel",
        "kubejs:infused_diamond",
        "kubejs:infused_diamond"
    ],6000)

    Enchanting("minecraft:unbreaking",3,[
        "kubejs:big_enchanting_rune_of_steel",
        "kubejs:infused_diamond",
        "kubejs:infused_diamond",
        "kubejs:infused_diamond"
    ],9000)

    Enchanting("minecraft:feather_falling",1,[
        "kubejs:enchanting_rune_of_agility",
        "immersiveengineering:cushion"
    ],2500)

    Enchanting("minecraft:feather_falling",2,[
        "kubejs:enchanting_rune_of_agility",
        "immersiveengineering:cushion",
        "immersiveengineering:cushion"
    ],5000)

    Enchanting("minecraft:feather_falling",3,[
        "kubejs:enchanting_rune_of_agility",
        "immersiveengineering:cushion",
        "immersiveengineering:cushion",
        "immersiveengineering:cushion"
    ],7500)

    Enchanting("minecraft:feather_falling",4,[
        "kubejs:enchanting_rune_of_agility",
        "immersiveengineering:cushion",
        "immersiveengineering:cushion",
        "immersiveengineering:cushion",
        "immersiveengineering:cushion"
    ],10000)

    Enchanting("combatroll:longfooted",1,[
        "kubejs:enchanting_rune_of_agility",
        "farmersdelight:cabbage_rolls"
    ],2000)

    Enchanting("combatroll:longfooted",2,[
        "kubejs:enchanting_rune_of_agility",
        "farmersdelight:cabbage_rolls",
        "farmersdelight:cabbage_rolls"
    ],4000)

    Enchanting("combatroll:longfooted",3,[
        "kubejs:enchanting_rune_of_agility",
        "farmersdelight:cabbage_rolls",
        "farmersdelight:cabbage_rolls",
        "farmersdelight:cabbage_rolls"
    ],6000)

    Enchanting("combatroll:longfooted",4,[
        "kubejs:enchanting_rune_of_agility",
        "farmersdelight:cabbage_rolls",
        "farmersdelight:cabbage_rolls",
        "farmersdelight:cabbage_rolls",
        "farmersdelight:cabbage_rolls"
    ],8000)

    Enchanting("combatroll:longfooted",5,[
        "kubejs:enchanting_rune_of_agility",
        "farmersdelight:cabbage_rolls",
        "farmersdelight:cabbage_rolls",
        "farmersdelight:cabbage_rolls",
        "farmersdelight:cabbage_rolls",
        "farmersdelight:cabbage_rolls"
    ],10000)

    Enchanting("combatroll:multi_roll",1,[
        "kubejs:enchanting_rune_of_agility",
        "create:sweet_roll"
    ],2500)

    Enchanting("combatroll:multi_roll",2,[
        "kubejs:enchanting_rune_of_agility",
        "create:sweet_roll",
        "create:sweet_roll"
    ],5000)

    Enchanting("combatroll:multi_roll",3,[
        "kubejs:enchanting_rune_of_agility",
        "create:sweet_roll",
        "create:sweet_roll",
        "create:sweet_roll"
    ],7500)

    Enchanting("combatroll:multi_roll",4,[
        "kubejs:enchanting_rune_of_agility",
        "create:sweet_roll",
        "create:sweet_roll",
        "create:sweet_roll",
        "create:sweet_roll"
    ],10000)

    Enchanting("combatroll:acrobat",1,[
        "kubejs:enchanting_rune_of_agility",
        "farmersdelight:kelp_roll_slice"
    ],1000)

    Enchanting("combatroll:acrobat",2,[
        "kubejs:enchanting_rune_of_agility",
        "farmersdelight:kelp_roll_slice",
        "farmersdelight:kelp_roll_slice"
    ],2000)

    Enchanting("combatroll:acrobat",3,[
        "kubejs:enchanting_rune_of_agility",
        "farmersdelight:kelp_roll"
    ],3000)

    Enchanting("combatroll:acrobat",4,[
        "kubejs:enchanting_rune_of_agility",
        "farmersdelight:kelp_roll",
        "farmersdelight:kelp_roll_slice"
    ],4000)

    Enchanting("combatroll:acrobat",5,[
        "kubejs:enchanting_rune_of_agility",
        "farmersdelight:kelp_roll",
        "farmersdelight:kelp_roll_slice",
        "farmersdelight:kelp_roll_slice"
    ],5000)

    Enchanting("combatroll:acrobat",6,[
        "kubejs:enchanting_rune_of_agility",
        "farmersdelight:kelp_roll",
        "farmersdelight:kelp_roll"
    ],6000)

    Enchanting("combatroll:acrobat",7,[
        "kubejs:enchanting_rune_of_agility",
        "farmersdelight:kelp_roll",
        "farmersdelight:kelp_roll",
        "farmersdelight:kelp_roll_slice"
    ],7000)

    Enchanting("combatroll:acrobat",8,[
        "kubejs:enchanting_rune_of_agility",
        "farmersdelight:kelp_roll",
        "farmersdelight:kelp_roll",
        "farmersdelight:kelp_roll_slice",
        "farmersdelight:kelp_roll_slice"
    ],8000)

    Enchanting("combatroll:acrobat",9,[
        "kubejs:enchanting_rune_of_agility",
        "farmersdelight:kelp_roll",
        "farmersdelight:kelp_roll",
        "farmersdelight:kelp_roll"
    ],9000)

    Enchanting("combatroll:acrobat",10,[
        "kubejs:enchanting_rune_of_agility",
        "farmersdelight:kelp_roll",
        "farmersdelight:kelp_roll",
        "farmersdelight:kelp_roll",
        "farmersdelight:kelp_roll_slice"
    ],10000)

    Enchanting("majruszsenchantments:dodge",1,[
        "kubejs:enchanting_rune_of_agility",
        "kubejs:ender_essence"
    ],5000)

    Enchanting("majruszsenchantments:dodge",2,[
        "kubejs:enchanting_rune_of_agility",
        "kubejs:ender_essence",
        "kubejs:ender_essence"
    ],10000)

    Enchanting("deep_aether:gloves_reach",1,[
        "kubejs:enchanting_rune_of_agility",
        "kubejs:crab_totem"
    ],3000)

    Enchanting("deep_aether:gloves_reach",2,[
        "kubejs:enchanting_rune_of_agility",
        "kubejs:crab_totem",
        "kubejs:crab_totem"
    ],6000)

    Enchanting("deep_aether:gloves_reach",3,[
        "kubejs:enchanting_rune_of_agility",
        "kubejs:crab_totem",
        "kubejs:crab_totem",
        "kubejs:crab_totem"
    ],9000)

    Enchanting("enigmaticlegacy:sharpshooter",1,[
        "kubejs:big_enchanting_rune_of_pain",
        "minecraft:tripwire_hook"
    ],2000)

    Enchanting("enigmaticlegacy:sharpshooter",2,[
        "kubejs:big_enchanting_rune_of_pain",
        "minecraft:tripwire_hook",
        "minecraft:tripwire_hook"
    ],4000)

    Enchanting("enigmaticlegacy:sharpshooter",3,[
        "kubejs:big_enchanting_rune_of_pain",
        "minecraft:tripwire_hook",
        "minecraft:tripwire_hook",
        "minecraft:tripwire_hook"
    ],6000)

    Enchanting("enigmaticlegacy:sharpshooter",4,[
        "kubejs:big_enchanting_rune_of_pain",
        "minecraft:tripwire_hook",
        "minecraft:tripwire_hook",
        "minecraft:tripwire_hook",
        "minecraft:tripwire_hook"
    ],8000)

    Enchanting("enigmaticlegacy:sharpshooter",5,[
        "kubejs:big_enchanting_rune_of_pain",
        "minecraft:tripwire_hook",
        "minecraft:tripwire_hook",
        "minecraft:tripwire_hook",
        "minecraft:tripwire_hook",
        "minecraft:tripwire_hook"
    ],10000)

    Enchanting("minecraft:sweeping",1,[
        "kubejs:big_enchanting_rune_of_pain",
        "naturesaura:token_fear"
    ],3000)

    Enchanting("minecraft:sweeping",2,[
        "kubejs:big_enchanting_rune_of_pain",
        "naturesaura:token_fear",
        "naturesaura:token_fear"
    ],6000)

    Enchanting("minecraft:sweeping",3,[
        "kubejs:big_enchanting_rune_of_pain",
        "naturesaura:token_fear",
        "naturesaura:token_fear",
        "naturesaura:token_fear"
    ],9000)

    
    
})