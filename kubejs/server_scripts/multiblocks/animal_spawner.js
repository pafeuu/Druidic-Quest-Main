ServerEvents.recipes((event) => {

    const MagicalCritterAuraCost = 80000;
    const RegularAnimalAuraCost = 50000
    const spawn = event.recipes.naturesaura.animal_spawner;

    spawn("ars_nouveau:whirlisprig",
        ["naturesaura:birth_spirit",
            "#minecraft:saplings",
            "druidic_quest_core:nature_essence"], MagicalCritterAuraCost, 60)

    spawn("ars_nouveau:drygmy",
        ["naturesaura:birth_spirit",
            "ars_nouveau:wilden_horn",
            "druidic_quest_core:nature_essence"], MagicalCritterAuraCost, 60)

    spawn("ars_nouveau:starbuncle",
        ["naturesaura:birth_spirit",
            "#forge:nuggets/gold",
            "druidic_quest_core:nature_essence"], MagicalCritterAuraCost, 60)

    spawn("allay",
        ["naturesaura:birth_spirit",
            "amethyst_shard",
            "druidic_quest_core:nature_essence"], MagicalCritterAuraCost, 60)

    spawn("irons_spellbooks:pyromancer",
        ["naturesaura:birth_spirit",
            "kubejs:infused_emerald",
            "irons_spellbooks:legendary_ink",
            "irons_spellbooks:fire_rune"], 200000, 100)

    spawn("irons_spellbooks:cryomancer",
        ["naturesaura:birth_spirit",
            "kubejs:infused_emerald",
            "irons_spellbooks:legendary_ink",
            "irons_spellbooks:ice_rune"], 200000, 100)

    spawn("irons_spellbooks:priest",
        ["naturesaura:birth_spirit",
            "kubejs:infused_emerald",
            "irons_spellbooks:legendary_ink",
            "irons_spellbooks:holy_rune"], 200000, 100)

    spawn("irons_spellbooks:cultist",
        ["naturesaura:birth_spirit",
            "kubejs:infused_emerald",
            "irons_spellbooks:legendary_ink",
            "irons_spellbooks:blood_rune"], 200000, 100)

    spawn("irons_spellbooks:archevoker",
        ["naturesaura:birth_spirit",
            "kubejs:infused_emerald",
            "irons_spellbooks:legendary_ink",
            "irons_spellbooks:evocation_rune"], 200000, 100)

    spawn("irons_spellbooks:apothecarist",
        ["naturesaura:birth_spirit",
            "kubejs:infused_emerald",
            "irons_spellbooks:legendary_ink",
            "irons_spellbooks:nature_rune"], 200000, 100)

    spawn("irons_spellbooks:necromancer",
        ["naturesaura:birth_spirit",
            "irons_spellbooks:arcane_essence",
            "irons_spellbooks:uncommon_ink",
            "bone"], MagicalCritterAuraCost, 60)

    spawn("irons_spellbooks:citadel_keeper",
        ["naturesaura:birth_spirit",
            "irons_spellbooks:arcane_essence",
            "irons_spellbooks:epic_ink",
            "netherite_scrap"], 100000, 80)

    spawn("ars_nouveau:wilden_guardian",
        ["naturesaura:birth_spirit",
            "ars_nouveau:wilden_spike",
            "ars_nouveau:source_gem"], MagicalCritterAuraCost, 60)

    spawn("ars_nouveau:wilden_hunter",
        ["naturesaura:birth_spirit",
            "ars_nouveau:wilden_horn",
            "ars_nouveau:source_gem"], MagicalCritterAuraCost, 60)

    spawn("ars_nouveau:wilden_stalker",
        ["naturesaura:birth_spirit",
            "ars_nouveau:wilden_wing",
            "ars_nouveau:source_gem"], MagicalCritterAuraCost, 60)

    spawn("alexsmobs:bunfungus",
        ["naturesaura:birth_spirit",
            "rabbit",
            "#c:mushrooms"], RegularAnimalAuraCost, 60)

    spawn("minecraft:sulfur_cube",
        ["naturesaura:birth_spirit",
            "#c:storage_blocks/slime",
            "thermal:sulfur"
        ], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:bison",
        ["naturesaura:birth_spirit",
            "beef",
            "brown_carpet"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:flutter",
        ["naturesaura:birth_spirit",
            "flowering_azalea"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:rocky_roller",
        ["naturesaura:birth_spirit",
            "pointed_dripstone",
            "tuff"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:seagull",
        ["naturesaura:birth_spirit",
            "feather",
            "#minecraft:fishes"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:bald_eagle",
        ["naturesaura:birth_spirit",
            "feather",
            "leather"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:tiger",
        ["naturesaura:birth_spirit",
            "orange_wool",
            "leather"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:mungus",
        ["naturesaura:birth_spirit",
            "#c:mushrooms",
            "farmersdelight:iron_knife"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:guster",
        ["naturesaura:birth_spirit",
            "quark:bottled_cloud",
            "sand"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:kangaroo",
        ["naturesaura:birth_spirit",
            "bundle",
            "leather"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:sugar_glider",
        ["naturesaura:birth_spirit",
            "sugar",
            "leather"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:anaconda",
        ["naturesaura:birth_spirit",
            "supplementaries:rope",
            "twilightforest:naga_scale"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:underminer",
        ["naturesaura:birth_spirit",
            "quark:soul_bead",
            "iron_pickaxe"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:hammerhead_shark",
        ["naturesaura:birth_spirit",
            "druidic_quest_core:arcanist_hammer",
            "#minecraft:fishes"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:toucan",
        ["naturesaura:birth_spirit",
            "feather",
            "yellow_dye"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:blue_jay",
        ["naturesaura:birth_spirit",
            "feather",
            "blue_dye"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:potoo",
        ["naturesaura:birth_spirit",
            "feather",
            "spider_eye"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:crow",
        ["naturesaura:birth_spirit",
            "feather",
            "black_dye"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:elephant",
        ["naturesaura:birth_spirit",
            "supplementaries:faucet"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:tusklin",
        ["naturesaura:birth_spirit",
            "porkchop",
            "ars_nouveau:wilden_spike"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:gelada_monkey",
        ["naturesaura:birth_spirit",
            "grass",
            "alexsmobs:banana"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:banana_slug",
        ["naturesaura:birth_spirit",
            "slime_ball",
            "alexsmobs:banana"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:mudskipper",
        ["naturesaura:birth_spirit",
            "mud"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:lobster",
        ["naturesaura:birth_spirit",
            "#minecraft:fishes",
            "red_dye",
            "#forge:plates/stone"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:seal",
        ["naturesaura:birth_spirit",
            "gray_wool",
            "#minecraft:fishes",
            "thermal:copper_coin"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:rhinoceros",
        ["naturesaura:birth_spirit",
            "ars_nouveau:wilden_horn",
            "#forge:plates/stone"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:alligator_snapping_turtle",
        ["naturesaura:birth_spirit",
            "minecraft:scute",
            "ars_nouveau:wilden_spike"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:flying_fish",
        ["naturesaura:birth_spirit",
            "#minecraft:fishes",
            "ars_nouveau:wilden_wing"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:mimic_octopus",
        ["naturesaura:birth_spirit",
            "silly_oddities:rainbow_bundle",
            "#minecraft:fishes"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:rain_frog",
        ["naturesaura:birth_spirit",
            "frogspawn",
            "sand"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:capuchin_monkey",
        ["naturesaura:birth_spirit",
            "alexsmobs:banana",
            "alexsmobs:maggot"], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:warped_toad",
        ["naturesaura:birth_spirit",
            "slime_ball",
            "warped_fungus"], MagicalCritterAuraCost, 60)

    spawn("alexsmobs:gorilla",
        ["naturesaura:birth_spirit",
            "alexsmobs:banana",
            "#minecraft:leaves"], RegularAnimalAuraCost, 60)

    /*spawn("alexsmobs:platypus",
        ["naturesaura:birth_spirit",
        "clay",
        "red_dye"],RegularAnimalAuraCost,60)*/

    spawn("minecraft:frog",
        ["naturesaura:birth_spirit",
            "slime_ball",
            "mud"
        ], RegularAnimalAuraCost, 60)

    spawn("minecraft:glow_squid",
        ["naturesaura:birth_spirit",
            "ink_sac",
            "glowstone_dust"
        ], RegularAnimalAuraCost, 60)

    spawn("minecraft:goat",
        ["naturesaura:birth_spirit",
            "white_wool",
            "twigs:bronzed_seashell"
        ], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:grizzly_bear",
        ["naturesaura:birth_spirit",
            "honeycomb",
            "leather",
            "salmon"
        ], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:sunbird",
        ["naturesaura:birth_spirit",
            "kubejs:death_essence",
            "kubejs:life_essence",
            "ars_nouveau:fire_essence"
        ], MagicalCritterAuraCost, 100)

    spawn("alexsmobs:moose",
        ["naturesaura:birth_spirit",
            "bone",
            "leather",
            "snow_block"
        ], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:komodo_dragon",
        ["naturesaura:birth_spirit",
            "kubejs:rotten_flesh_block",
            "slime_ball"
        ], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:roadrunner",
        ["naturesaura:birth_spirit",
            "feather",
            "sand"
        ], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:centipede_head",
        ["naturesaura:birth_spirit",
            "alexsmobs:cockroach_wing_fragment",
            "red_dye",
            "stone"
        ], MagicalCritterAuraCost, 100)

    spawn("alexsmobs:bone_serpent",
        ["naturesaura:birth_spirit",
            "bone_block",
            "lava_bucket",
            "bone"
        ], MagicalCritterAuraCost, 100)

    spawn("alexsmobs:fly",
        ["naturesaura:birth_spirit",
            "rotten_flesh",
            "#forge:insect"
        ], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:crimson_mosquito",
        ["naturesaura:birth_spirit",
            "rotten_flesh",
            "#forge:insect",
            "crimson_fungus"
        ], MagicalCritterAuraCost, 100)

    spawn("alexsmobs:hummingbird",
        ["naturesaura:birth_spirit",
            "feather",
            "sugar"
        ], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:jerboa",
        ["naturesaura:birth_spirit",
            "minecraft:rabbit_hide",
            "string"
        ], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:snow_leopard",
        ["naturesaura:birth_spirit",
            "leather",
            "snow_block",
            "#c:foods/raw_meat"
        ], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:skelewag",
        ["naturesaura:birth_spirit",
            "bone",
            "#minecraft:fishes"
        ], MagicalCritterAuraCost, 100)

    spawn("alexsmobs:catfish",
        ["naturesaura:birth_spirit",
            "string",
            "#minecraft:fishes",
            "#minecraft:fishes"
        ], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:skunk",
        ["naturesaura:birth_spirit",
            "leather",
            "white_wool",
            "black_wool"
        ], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:rattlesnake",
        ["naturesaura:birth_spirit",
            "supplementaries:rope",
            "sand"
        ], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:comb_jelly",
        ["naturesaura:birth_spirit",
            "#fruitsdelight:jello",
            "#fruitsdelight:jello",
            "#fruitsdelight:jello"
        ], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:soul_vulture",
        ["naturesaura:birth_spirit",
            "coal",
            "bone",
            "quark:soul_bead"
        ], MagicalCritterAuraCost, 100)

    spawn("alexsmobs:tarantula_hawk",
        ["naturesaura:birth_spirit",
            "red_dye",
            "blue_dye",
            "sand"
        ], MagicalCritterAuraCost, 100)

    spawn("alexsmobs:froststalker",
        ["naturesaura:birth_spirit",
            "snow_block",
            "leather",
            "blue_dye"
        ], MagicalCritterAuraCost, 100)

    spawn("alexsmobs:leafcutter_ant",
        ["naturesaura:birth_spirit",
            "create:copper_nugget",
            "#minecraft:leaves"
        ], RegularAnimalAuraCost, 60)

    spawn("alexsmobs:raccoon",
        ["naturesaura:birth_spirit",
            "gray_wool",
            "black_wool",
            "leather"
        ], RegularAnimalAuraCost, 60)









})