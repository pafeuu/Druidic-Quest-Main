ServerEvents.recipes(event => {
    /*    1  
        4---2
          3     */


    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "_W_",
            "WWW",
            "_W_",
            "IIII"
        ],
        "key": {
            "W": {
                "item": "create:wheat_flour"
            },
            "I": {
                "item": "ink_sac"
            }
        },
        "output": {
            "item": "kubejs:brick_glue"
        },
        "wissen": 250
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "__A",
            "OA_",
            "WO_",
            "AAAA"
        ],
        "key": {
            "W": {
                "item": "irons_spellbooks:weapon_parts"
            },
            "A": {
                "item": "kubejs:infused_amethyst"
            },
            "O": {
                "item": "kubejs:obsidian_ingot"
            }
        },
        "output": {
            "item": "irons_spellbooks:amethyst_rapier"
        },
        "wissen": 10000
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "__A",
            "OA_",
            "WO_",
            "BBBB"
        ],
        "key": {
            "W": {
                "item": "irons_spellbooks:weapon_parts"
            },
            "A": {
                "item": "irons_spellbooks:frosted_helve"
            },
            "B": {
                "item": "thermal:sapphire"
            },
            "O": {
                "item": "kubejs:aquatic_ingot"
            }
        },
        "output": {
            "item": "irons_spellbooks:boreal_blade"
        },
        "wissen": 10000
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "LBO",
            "BWB",
            "OBL",
            "AAAA"
        ],
        "key": {
            "W": {
                "item": "irons_spellbooks:weapon_parts"
            },
            "A": {
                "item": "kubejs:infused_amethyst"
            },
            "B": {
                "item": "irons_spellbooks:lightning_bottle"
            },
            "L": {
                "item": "kubejs:lightning_essence"
            },
            "O": {
                "item": "kubejs:storm_ingot"
            }
        },
        "output": {
            "item": "irons_spellbooks:twilight_gale"
        },
        "wissen": 10000
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "___",
            "_I_",
            "W__",
            "AAAA"
        ],
        "key": {
            "W": {
                "item": "irons_spellbooks:keeper_flamberge"
            },
            "A": {
                "item": "thermal:ruby"
            },
            "I": {
                "item": "irons_spellbooks:pyrium_ingot"
            }
        },
        "output": {
            "item": "irons_spellbooks:legionnaire_flamberge"
        },
        "wissen": 5000
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "___",
            "_I_",
            "W__",
            "AAAA"
        ],
        "key": {
            "W": {
                "item": "irons_spellbooks:decrepit_scythe"
            },
            "A": {
                "item": "thermal:ruby"
            },
            "I": {
                "item": "irons_spellbooks:pyrium_ingot"
            }
        },
        "output": {
            "item": "irons_spellbooks:hellrazor"
        },
        "wissen": 5000
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "BCB",
            "CIC",
            "BCB",
            "AAAA"
        ],
        "key": {
            "B": {
                "item": "thermal:ruby"
            },
            "C": {
                "item": "waystones:warp_scroll"
            },
            "A": {
                "item": "waystones:warp_dust"
            },
            "I": {
                "item": "kubejs:ender_essence"
            }
        },
        "output": {
            "item": "waystones:warp_stone"
        },
        "wissen": 20000
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "GLG",
            "GFG",
            "GLG",
            "IIII"
        ],
        "key": {
            "F": {
                "item": "feather"
            },
            "G": {
                "tag": "forge:ingots/gold"
            },
            "L": {
                "item": "lava_bucket"
            },
            "I": {
                "tag": "forge:flowers/golden"
            }
        },
        "output": {
            "item": "kubejs:golden_magic_feather"
        },
        "wissen": 2500
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "_CX",
            "_SC",
            "S__",
            "____"
        ],
        "key": {
            "S": {
                "tag": "c:rods/wooden"
            },
            "X": {
                "item": "string"
            },
            "C": {
                "item": "quark:sturdy_stone"
            }
        },
        "output": {
            "item": "immersiveengineering:hammer"
        },
        "wissen": 250
    }).id("immersiveengineering:crafting/hammer")


    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "###",
            "#E#",
            "###",
            "AAAA"
        ],
        "key": {
            "E": {
                "item": "spider_eye"
            },
            "A": {
                "tag": "wizards_reborn:arcanum"
            },
            "#": {
                "item": "coal_block"
            }
        },
        "output": {
            "item": "enigmaticlegacy:enigmatic_eye",
        },
        "wissen": 500
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "A#A",
            "#E#",
            "A#A",
            "AAAA"
        ],
        "key": {
            "E": {
                "item": "ender_pearl"
            },
            "A": {
                "tag": "wizards_reborn:arcanum"
            },
            "#": {
                "item": "coal_block"
            }
        },
        "output": {
            "item": "enigmaticlegacy:enigmatic_eye",
        },
        "wissen": 250
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "###",
            "#E#",
            "###",
            "AAAA"
        ],
        "key": {
            "E": {
                "item": "aether:iron_ring"
            },
            "A": {
                "tag": "forge:ingots/iron"
            },
            "#": {
                "tag": "immersive_weathering:bark"
            }
        },
        "output": {
            "item": "enigmaticlegacy:iron_ring",
        },
        "wissen": 500
    }).id("enigmaticlegacy:iron_ring")

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "LEL",
            "ECE",
            "LEL",
            "AAAA"
        ],
        "key": {
            "E": {
                "tag": "forge:gems/emerald"
            },
            "L": {
                "item": "thermal:sapphire"
            },
            "A": {
                "item": "create:experience_block"
            },
            "C": {
                "item": "wizards_reborn:experience_totem"
            }
        },
        "output": {
            "item": "thermal:xp_crystal",
        },
        "wissen": 500
    }).id("thermal:tools/xp_crystal")

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "NEN",
            "NCN",
            "NNN",
            "AAAA"
        ],
        "key": {
            "E": {
                "item": "kubejs:infused_emerald"
            },
            "C": {
                "item": "aether:golden_ring"
            },
            "A": {
                "item": "create:experience_block"
            },
            "N": {
                "tag": "forge:nuggets/gold"
            }
        },
        "output": {
            "item": "irons_spellbooks:emerald_stoneplate_ring",
        },
        "wissen": 500
    }).id("irons_spellbooks:curios/emerald_stoneplate_ring")

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            " Z ",
            "NCN",
            " X ",
            "BBAA"
        ],
        "key": {
            "Z": {
                "item": "lodestone"
            },
            "X": {
                "tag": "forge:gems/diamond"
            },
            "C": {
                "item": "ars_nouveau:ring_of_potential"
            },
            "A": {
                "tag": "forge:storage_blocks/lapis"
            },
            "B": {
                "tag": "forge:storage_blocks/redstone"
            },
            "N": {
                "tag": "forge:ingots/iron"
            }
        },
        "output": {
            "item": 'enigmaticlegacy:magnet_ring',
        },
        "wissen": 500
    }).id("enigmaticlegacy:magnet_ring")

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "NNZ",
            "NX ",
            "NNZ",
            "BBAA"
        ],
        "key": {
            "Z": {
                "item": "lodestone"
            },
            "X": {
                "tag": "forge:gems/diamond"
            },
            "A": {
                "tag": "forge:storage_blocks/lapis"
            },
            "B": {
                "tag": "forge:storage_blocks/redstone"
            },
            "N": {
                "tag": "forge:plates/iron"
            }
        },
        "output": {
            "item": 'simplemagnets:basicmagnet',
        },
        "wissen": 500
    }).id("simplemagnets:basicmagnet")

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "NNN",
            "NCN",
            "NNN",
            "AABB"
        ],
        "key": {
            "C": {
                "item": "kubejs:metal_crucifix"
            },
            "A": {
                "item": "kubejs:sapphire"
            },
            "B": {
                "item": "rubinated_nether:ruby"
            },
            "N": {
                "tag": "forge:plates/gold"
            }
        },
        "output": {
            "item": "kubejs:bejeweled_crucifix",
        },
        "wissen": 500
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "NNN",
            "NXN",
            "NCN",
            "AAAA"
        ],
        "key": {
            "C": {
                "item": "kubejs:metal_crucifix"
            },
            "X": {
                "item": "ars_nouveau:dull_trinket"
            },
            "N": {
                "item": "minecraft:chain"
            },
            "A": {
                "tag": "forge:plates/gold"
            }
        },
        "output": {
            "item": "kubejs:cross_necklace",
        },
        "wissen": 500
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "RRR",
            "RXS",
            "SSS",
            "ABCD"
        ],
        "key": {
            "X": {
                "item": "ars_nouveau:novice_spell_book"
            },
            "A": {
                "item": "ars_nouveau:fire_essence"
            },
            "B": {
                "item": "ars_nouveau:earth_essence"
            },
            "C": {
                "item": "ars_nouveau:water_essence"
            },
            "D": {
                "item": "ars_nouveau:air_essence"
            },
            "R": {
                "item": "thermal:ruby"
            },
            "S": {
                "item": "thermal:sapphire"
            }
        },
        "output": {
            "item": "ars_nouveau:apprentice_spell_book",
        },
        "wissen": 500
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "RRR",
            "RXS",
            "SSS",
            "ABCD"
        ],
        "key": {
            "X": {
                "item": "ars_nouveau:apprentice_spell_book"
            },
            "A": {
                "item": "kubejs:lightning_essence"
            },
            "B": {
                "item": "kubejs:death_essence"
            },
            "C": {
                "item": "kubejs:ender_essence"
            },
            "D": {
                "item": "kubejs:life_essence"
            },
            "R": {
                "item": "kubejs:light_essence"
            },
            "S": {
                "item": "kubejs:dark_essence"
            }
        },
        "output": {
            "item": "ars_nouveau:archmage_spell_book",
        },
        "wissen": 5000
    }).id("ars_nouveau:archmage_spell_book_upgrade")

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "RRR",
            "RXR",
            "RRR",
            "__S_"
        ],
        "key": {
            "X": {
                "item": "ars_nouveau:mundane_belt"
            },
            "S": {
                "item": "thermal:sapphire"
            },
            "R": {
                "item": "minecraft:bricks"
            }
        },
        "output": {
            "item": "kubejs:builders_belt",
        },
        "wissen": 500
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "WTW",
            " W ",
            " W ",
            "____"
        ],
        "key": {
            "W": {
                "item": "wizards_reborn:arcane_wood_planks"
            },
            "T": {
                "item": "kubejs:roadrunner_totem"
            }
        },
        "output": {
            "item": "wizards_reborn:arcane_wood_cane",
        },
        "wissen": 500
    }).id("wizards_reborn:arcane_workbench/arcane_wood_cane")

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            " PA",
            "PRP",
            "AP ",
            "_G_G"
        ],
        "key": {
            "A": {
                "item": "wizards_reborn:arcanum"
            },
            "G": {
                "tag": "forge:dusts/gold"
            },
            "R": {
                "tag": "c:rods/wooden"
            },
            "P": {
                "item": "ars_nouveau:archwood_planks"
            }
        },
        "output": {
            "item": "ars_nouveau:dowsing_rod",
        },
        "wissen": 500
    }).id("ars_nouveau:dowsing_rod")

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "PBP",
            "BCB",
            "PBP",
            "EEEE"
        ],
        "key": {
            "C": {
                "item": "thermal:xp_crystal"
            },
            "E": {
                "item": "kubejs:infused_emerald"
            },
            "B": {
                "item": "enigmaticlegacy:thicc_scroll"
            },
            "P": {
                "item": "create:experience_block"
            }
        },
        "output": {
            "item": "enigmaticlegacy:xp_scroll",
        },
        "wissen": 500
    }).id("enigmaticlegacy:xp_scroll")

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "  A",
            " S ",
            "A  ",
            "GGGG"
        ],
        "key": {
            "A": {
                "item": "minecraft:amethyst_shard"
            },
            "S": {
                "item": "immersiveengineering:stick_treated"
            },
            "G": {
                "tag": "forge:ingots/gold"
            }
        },
        "output": {
            "item": "ars_nouveau:dominion_wand",
        },
        "wissen": 1000
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "SGS",
            "DWD",
            "SBS",
            "SSSS"
        ],
        "key": {
            "W": {
                "item": "minecraft:clock"
            },
            "B": {
                "item": "minecraft:glass_bottle"
            },
            "S": {
                "item": "irons_spellbooks:mithril_scrap"
            },
            "G": {
                "tag": "forge:plates/gold"
            },
            "D": {
                "tag": "forge:gears/diamond"
            }
        },
        "output": {
            "item": "tiab:time_in_a_bottle",
        },
        "wissen": 5000
    }).id("tiab:time_in_a_bottle")


    const woodtools = ["hoe", "axe", "shovel", "pickaxe"]

    woodtools.forEach(id => {
        event.custom({
            "type": "wizards_reborn:arcane_workbench",
            "pattern": [
                "PPP",
                "PXP",
                "PPP",
                "SSSS"
            ],
            "key": {
                "P": {
                    "item": "wizards_reborn:innocent_wood_planks"
                },
                "S": {
                    "item": "wizards_reborn:innocent_wood_branch"
                },
                "X": {
                    "item": "wizards_reborn:arcane_wood_" + id
                }
            },
            "output": {
                "item": "wizards_reborn:innocent_wood_" + id
            },
            "wissen": 500
        })
    });

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            " L ",
            "CXC",
            " L ",
            "EEEE"
        ],
        "key": {
            "L": {
                "item": "ars_nouveau:earth_essence"
            },
            "E": {
                "item": "kubejs:nature_essence"
            },
            "X": {
                "item": "iron_shovel"
            },
            "C": {
                "item": "thermal:device_composter"
            },
            "M": {
                "item": "kubejs:basic_magic_machine"
            }
        },
        "output": {
            "item": "kubejs:the_terraformer"
        },
        "wissen": 5000
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "EEE",
            "EXE",
            "EEE",
            "AAAA"
        ],
        "key": {
            "X": {
                "item": "immersiveengineering:glider"
            },
            "A": {
                "item": "ars_nouveau:air_essence"
            },
            "E": {
                "item": "minecraft:ender_pearl"
            }
        },
        "output": {
            "item": "minecraft:elytra"
        },
        "wissen": 5000
    })


    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            " H ",
            "CXC",
            " S ",
            "EEEE"
        ],
        "key": {
            "H": {
                "item": "create:brass_hand"
            },
            "E": {
                "tag": "forge:plates/brass"
            },
            "X": {
                "item": "kubejs:crab_totem"
            },
            "C": {
                "item": "create:cogwheel"
            },
            "S": {
                "item": "immersiveengineering:stick_treated"
            }
        },
        "output": {
            "item": "create:extendo_grip"
        },
        "wissen": 2000
    }).id("create:mechanical_crafting/extendo_grip")

    function EnigmaticAmulet(color, input1, input2, input3, input4, input5, input6) {
        event.custom({
            "type": "wizards_reborn:arcane_workbench",
            "pattern": [
                "ABC",
                "GXG",
                "DEF",
                "RRRR"
            ],
            "key": {
                "G": {
                    "tag": "forge:plates/gold"
                },
                "R": {
                    "item": "thermal:ruby"
                },
                "X": {
                    "item": "ars_nouveau:dull_trinket"
                },
                "A": {
                    "item": input1
                },
                "B": {
                    "item": input2
                },
                "C": {
                    "item": input3
                },
                "D": {
                    "item": input4
                },
                "E": {
                    "item": input5
                },
                "F": {
                    "item": input6
                }
            },
            "output": {
                "item": 'enigmaticlegacy:enigmatic_amulet',
                "nbt": {
                    "AssignedColor": color
                },
                "count": 1
            },
            "wissen": 2000
        })
    }

    EnigmaticAmulet(0.6,
        "rubinated_nether:ruby",
        "aether:vampire_blade",
        "rubinated_nether:ruby",
        "kubejs:sapphire",
        "kubejs:sapphire",
        "kubejs:sapphire")

    EnigmaticAmulet(0.2,
        "leather_helmet",
        "kubejs:silver_sword",
        "leather_leggings",
        "leather_chestplate",
        "kubejs:silver_hoe",
        "leather_boots")

    EnigmaticAmulet(0.1,
        "wooden_sword",
        "iron_sword",
        "stone_sword",
        "kubejs:silver_sword",
        "kubejs:lead_sword",
        "kubejs:copper_sword",
    )

    EnigmaticAmulet(0.5,
        "kubejs:copper_helmet",
        "kubejs:copper_pickaxe",
        "kubejs:copper_leggings",
        "kubejs:copper_chestplate",
        "iron_pickaxe",
        "kubejs:copper_boots"
    )

    EnigmaticAmulet(0.3,
        "kubejs:lead_helmet",
        "shield",
        "kubejs:lead_leggings",
        "kubejs:lead_chestplate",
        "ars_nouveau:bastion_pod",
        "kubejs:lead_boots"
    )

    EnigmaticAmulet(0.4,
        "feather",
        "alexsmobs:roadrunner_feather",
        "alexsmobs:emu_feather",
        "supplementaries:feather_block",
        "quark:bottled_cloud",
        "hay_block"
    )

    EnigmaticAmulet(0.7,
        "cod",
        "fishing_rod",
        "salmon",
        "pufferfish",
        "alexsmobs:flying_fish",
        "tropical_fish"
    )

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "BIB",
            "ITI",
            "BIB",
            "BBBB"
        ],
        "key": {
            "I": {
                "tag": "forge:plates/iron"
            },
            "T": {
                "item": "naturesaura:token_fear"
            },
            "B": {
                "tag": "immersive_weathering:bark"
            }
        },
        "output": {
            "item": "naturesaura:break_prevention"
        },
        "wissen": 500
    })//.id("naturesaura:tree_ritual/break_prevention")

    function HammerAndExcavators(output, material1, material2, handle, oldTool) {
        event.custom({
            "type": "wizards_reborn:arcane_workbench",
            "pattern": [
                "MOM",
                " H ",
                " H ",
                "XXXX"
            ],
            "key": {
                "H": {
                    "item": handle
                },
                "M": {
                    "item": material1
                },
                "X": {
                    "item": material2
                },
                "O": {
                    "item": oldTool
                }
            },
            "output": {
                "item": output
            },
            "wissen": 5000
        })
    }
    HammerAndExcavators("kubejs:bronze_warhammer",
        "thermal:bronze_block",
        'vintageimprovements:bronze_sheet',
        "immersiveengineering:stick_treated",
        "kubejs:copper_pickaxe")

    HammerAndExcavators("kubejs:primitive_mining_hammer",
        "twilightforest:naga_scale",
        "quark:sturdy_stone",
        "immersiveengineering:stick_treated",
        "minecraft:stone_pickaxe")

    HammerAndExcavators("kubejs:primitive_excavator",
        "twilightforest:naga_scale",
        "quark:sturdy_stone",
        "immersiveengineering:stick_treated",
        "minecraft:stone_shovel")

    HammerAndExcavators("kubejs:basic_mining_hammer",
        "thermal:lead_block",
        "ars_nouveau:earth_essence",
        "kubejs:zinc_tool_handle",
        "kubejs:primitive_mining_hammer")

    HammerAndExcavators("kubejs:basic_excavator",
        "thermal:lead_block",
        "ars_nouveau:earth_essence",
        "kubejs:zinc_tool_handle",
        "kubejs:primitive_excavator")

    HammerAndExcavators("kubejs:sturdy_mining_hammer",
        "kubejs:death_essence",
        "vintageimprovements:netherite_sheet",
        "kubejs:reinforced_tool_handle",
        "kubejs:basic_mining_hammer")

    HammerAndExcavators("kubejs:sturdy_excavator",
        "kubejs:death_essence",
        "vintageimprovements:netherite_sheet",
        "kubejs:reinforced_tool_handle",
        "kubejs:basic_excavator")


    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "  L",
            " Y ",
            "Z  ",
            "____"
        ],
        "key": {
            "L": {
                "item": "kubejs:life_essence"
            },
            "Y": {
                "item": "constructionwand:diamond_wand"
            },
            "Z": {
                "tag": "forge:rods/arcane_gold"
            }
        },
        "output": {
            "item": "constructionwand:infinity_wand"
        },
        "wissen": 10000
    }).id("constructionwand:infinity_wand")

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "  L",
            " Y ",
            "Z  ",
            "____"
        ],
        "key": {
            "L": {
                "item": "quark:sturdy_stone"
            },
            "Y": {
                "item": "quark:trowel"
            },
            "Z": {
                "item": "wizards_reborn:arcane_wood_branch"
            }
        },
        "output": {
            "item": "constructionwand:stone_wand"
        },
        "wissen": 1000
    }).id("constructionwand:stone_wand")

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "   ",
            " Y ",
            "   ",
            "NNNN"
        ],
        "key": {
            "Y": {
                "item": "constructionwand:stone_wand"
            },
            "N": {
                "item": "twilightforest:naga_scale"
            }
        },
        "output": {
            "item": "constructionwand:iron_wand"
        },
        "wissen": 2500
    }).id("constructionwand:iron_wand")

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "   ",
            " Y ",
            "Z  ",
            "NNNN"
        ],
        "key": {
            "Y": {
                "item": "constructionwand:iron_wand"
            },
            "Z": {
                "item": "kubejs:zinc_tool_handle"
            },
            "N": {
                "item": "ars_nouveau:conjuration_essence"
            }
        },
        "output": {
            "item": "constructionwand:diamond_wand"
        },
        "wissen": 5000
    }).id("constructionwand:diamond_wand")

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "NGN",
            "GGG",
            "NGN",
            "NNNN"
        ],
        "key": {
            "G": {
                "tag": "forge:ingots/gold"
            },
            "N": {
                "item": "quark:bottled_cloud"
            }
        },
        "output": {
            "item": "constructionwand:core_angel"
        },
        "wissen": 1000
    }).id("constructionwand:core_angel")

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            " R ",
            " S ",
            " G ",
            "RRRR"
        ],
        "key": {
            "R": {
                "tag": "forge:rods/silver"
            },
            "G": {
                "tag": "forge:rods/gold"
            },
            "S": {
                "item": "kubejs:silver_sword"
            }
        },
        "output": {
            "item": "kubejs:silver_katana"
        },
        "wissen": 5000
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "SSS",
            " O ",
            " O ",
            "RRRR"
        ],
        "key": {
            "R": {
                "tag": "forge:rods/copper"
            },
            "O": {
                "item": "minecraft:oxidized_copper"
            },
            "S": {
                "item": "kubejs:copper_sword"
            }
        },
        "output": {
            "item": "kubejs:copper_trident"
        },
        "wissen": 5000
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "HSH",
            " R ",
            " R ",
            "PPPP"
        ],
        "key": {
            "R": {
                "tag": "forge:rods/iron"
            },
            "P": {
                "tag": "forge:plates/iron"
            },
            "H": {
                "item": "minecraft:iron_hoe"
            },
            "S": {
                "item": "minecraft:iron_sword"
            }
        },
        "output": {
            "item": "kubejs:iron_scythe"
        },
        "wissen": 5000
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "APA",
            " S ",
            " P ",
            "EEEE"
        ],
        "key": {
            "S": {
                "item": "quark:sturdy_stone"
            },
            "P": {
                "tag": "forge:plates/lead"
            },
            "E": {
                "item": "minecraft:fermented_spider_eye"
            },
            "A": {
                "item": "kubejs:lead_axe"
            }
        },
        "output": {
            "item": "kubejs:lead_waraxe"
        },
        "wissen": 5000
    })

    event.remove({ id: "constructionwand:core_destruction" })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "###",
            "#E#",
            "###",
            "AAAA"
        ],
        "key": {
            "E": {
                "item": "aether:golden_ring"
            },
            "A": {
                "tag": "forge:plates/gold"
            },
            "#": {
                "item": "lapis_lazuli"
            }
        },
        "output": {
            "item": "enigmaticlegacy:golden_ring",
        },
        "wissen": 500
    })


    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "SNS",
            "NXN",
            "SNS",
            "EEEE"
        ],
        "key": {
            "S": {
                "tag": "forge:storage_blocks/slime"
            },
            "N": {
                "item": "ars_nouveau:earth_essence"
            },
            "E": {
                "item": "kubejs:infused_emerald"
            },
            "X": {
                "item": "kubejs:fall_boots_cover"
            }
        },
        "output": {
            "item": "kubejs:bouncy_boots_cover"
        },
        "wissen": 5000
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "___",
            "NXN",
            "S_S",
            "EEEE"
        ],
        "key": {
            "S": {
                "tag": "handcrafted:cushions"
            },
            "N": {
                "item": "immersiveengineering:cushion"
            },
            "E": {
                "item": "ars_nouveau:air_essence"
            },
            "X": {
                "item": "leather_boots"
            }
        },
        "output": {
            "item": "kubejs:fall_boots_cover"
        },
        "wissen": 5000
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "GYG",
            "DXD",
            "GZG",
            "dddd"
        ],
        "key": {
            "d": {
                "tag": "forge:gems/diamond"
            },
            "G": {
                "tag": "forge:plates/gold"
            },
            "D": {
                "tag": "forge:plates/diamond"
            },
            "X": {
                "item": "ars_nouveau:dull_trinket"
            },
            "Y": {
                "item": "enigmaticlegacy:earth_heart"
            },
            "Z": {
                "item": "kubejs:gold_upgrade_smithing_template"
            }
        },
        "output": {
            "item": "enigmaticlegacy:mining_charm"
        },
        "wissen": 10000
    }).id("enigmaticlegacy:mining_charm")

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "GYG",
            "DXD",
            "GZG",
            "BBBB"
        ],
        "key": {
            "B": {
                "item": "create:experience_block"
            },
            "G": {
                "tag": "forge:plates/netherite"
            },
            "D": {
                "tag": "forge:plates/fiery"
            },
            "X": {
                "item": "ars_nouveau:dull_trinket"
            },
            "Y": {
                "item": "skeleton_skull"
            },
            "Z": {
                "item": "minecraft:netherite_upgrade_smithing_template"
            }
        },
        "output": {
            "item": "enigmaticlegacy:monster_charm"
        },
        "wissen": 10000
    }).id("enigmaticlegacy:monster_charm")

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "DAD",
            "AXA",
            "DAD",
            "BBBB"
        ],
        "key": {
            "B": {
                "item": "black_dye"
            },
            "A": {
                "item": "thermal:ruby"
            },
            "D": {
                "item": "ars_nouveau:air_essence"
            },
            "X": {
                "item": "ars_nouveau:mundane_belt"
            }
        },
        "output": {
            "item": "kubejs:evasion_belt"
        },
        "wissen": 2000
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "   ",
            "AXA",
            "D D",
            "BBBB"
        ],
        "key": {
            "B": {
                "item": "ars_nouveau:air_essence"
            },
            "A": {
                "tag": "forge:plates/source_alloy"
            },
            "D": {
                "item": "thermal:sapphire"
            },
            "X": {
                "item": "kubejs:fall_boots_cover"
            }
        },
        "output": {
            "item": "kubejs:gravity_boots_cover"
        },
        "wissen": 5000
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "GZG",
            "DXD",
            "GZG",
            "EEEE"
        ],
        "key": {
            "E": {
                "item": "ars_nouveau:air_essence"
            },
            "G": {
                "tag": "forge:plates/gravitite"
            },
            "D": {
                "item": "alexsmobs:tarantula_hawk_wing"
            },
            "X": {
                "item": "minecraft:elytra"
            },
            "Z": {
                "item": "ars_nouveau:fire_essence"
            }
        },
        "output": {
            "item": "alexsmobs:tarantula_hawk_elytra"
        },
        "wissen": 12000
    })

    event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "GZG",
            "DXD",
            "GZG",
            "EEEE"
        ],
        "key": {
            "E": {
                "item": "enigmaticlegacy:astral_dust"
            },
            "G": {
                "tag": "forge:plates/enderium"
            },
            "D": {
                "item": "kubejs:infused_amethyst"
            },
            "X": {
                "item": "alexsmobs:tarantula_hawk_elytra"
            },
            "Z": {
                "item": "enigmaticlegacy:etherium_ingot"
            }
        },
        "output": {
            "item": "enigmaticlegacy:enigmatic_elytra"
        },
        "wissen": 50000
    }).id("enigmaticlegacy:enigmatic_elytra")


     event.custom({
        "type": "wizards_reborn:arcane_workbench",
        "pattern": [
            "ECE",
            "CXC",
            "ECE",
            "AAAA"
        ],
        "key": {
            "X": {
            "item": "alexsmobs:vine_lasso"
            },
            "C": {
            "item": "supplementaries:cage"
            },
            "E": {
            "item": "enigmaticlegacy:extradimensional_eye"
            },
            "A": {
            "item": "ars_nouveau:air_essence"
            }
        },
        "output": {
                "item": "kubejs:capturing_gem",
                "nbt":{
                    "Captured": 0
                },
                "count": 1
            },
        "wissen": 2000
        })

})