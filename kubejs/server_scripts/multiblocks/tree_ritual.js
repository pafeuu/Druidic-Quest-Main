ServerEvents.recipes(event => {

     const tree_ritual = event.recipes.naturesaura.tree_ritual
     /*Ingredients order
             1
          5     6
       3           4
          7     8
             2
     */
     /*event.custom({
          "type": "naturesaura:tree_ritual",
          "ingredients": [
               {
                    "item": "minecraft:spider_eye"
               },
               {
                    "item": "naturesaura:gold_leaf"
               },
               {
                    "item": "naturesaura:gold_leaf"
               },
               {
                    "item": "minecraft:gold_ingot"
               }
          ],
          "sapling": {
               "item": "quark:red_blossom_sapling"
          },
          "output": {
               "item": "naturesaura_plus:break_prevention_token",
               "count": 1
          },
          "time": 400
     })*/
    
     tree_ritual("minecraft:dried_ghast",
          ["quark:soul_bead",
               "supplementaries:bellows",
               "ink_sac",
               "ink_sac",
               "minecraft:bone_block",
               "minecraft:bone_block",
               "minecraft:bone_block",
               "minecraft:bone_block"],
          "jungle_sapling").id("minecraft:dried_ghast")

     tree_ritual("ars_nouveau:starbuncle_charm",
          ["ars_nouveau:starbuncle_shards",
               "woodenhopper:wooden_hopper",
               "botania:light_relay",
               "botania:light_relay",
               "#forge:ingots/gold",
               "#forge:ingots/gold",
               "#forge:ingots/gold",
               "#forge:ingots/gold"],
          "ars_nouveau:green_archwood_sapling")


     tree_ritual("ars_nouveau:whirlisprig_charm",
          ["ars_nouveau:whirlisprig_shards",
               "enigmaticlegacy:infinimeal",
               "kubejs:life_essence",
               "kubejs:life_essence",
               "druidic_quest_core:nature_essence",
               "druidic_quest_core:nature_essence",
               "druidic_quest_core:nature_essence",
               "druidic_quest_core:nature_essence"],
          "ars_nouveau:green_archwood_sapling")

     tree_ritual("ars_nouveau:drygmy_charm",
          ["ars_nouveau:drygmy_shard",
               "golden_sword",
               "golden_sword",
               "golden_sword",
               "kubejs:death_essence",
               "kubejs:death_essence",
               "kubejs:death_essence",
               "kubejs:death_essence"],
          "ars_nouveau:green_archwood_sapling")

     tree_ritual("ars_nouveau:wixie_charm",
          ["ars_nouveau:wixie_shards",
               "naturesaura:auto_crafter",
               "woodenhopper:wooden_hopper",
               "woodenhopper:wooden_hopper",
               "kubejs:infused_amethyst",
               "minecraft:amethyst_shard",
               "kubejs:infused_amethyst",
               "minecraft:amethyst_shard"],
          "ars_nouveau:purple_archwood_sapling")

     tree_ritual("4x twilightforest:ironwood_ingot", [
          "#forge:ingots/gold",
          "#forge:ingots/gold",
          "#forge:ingots/iron",
          "twilightforest:liveroot",
          "#forge:ingots/iron",
          "twilightforest:liveroot",
          "twilightforest:liveroot",
          "#forge:ingots/iron",
     ], "twilightforest:twilight_oak_sapling")

     tree_ritual("3x twilightforest:knightmetal_ingot", [
          "twilightforest:armor_shard_cluster",
          "twilightforest:armor_shard_cluster",
          "#forge:ingots/iron",
          "#forge:ingots/lead",
          "#forge:ingots/iron",
          "#forge:ingots/lead",
          "#forge:ingots/lead",
          "#forge:ingots/iron",
     ], "twilightforest:twilight_oak_sapling")


     //============================================= Seeds and Saplings =============================================

     tree_ritual("nether_wart",
          [
               "red_mushroom",
               "soul_sand",
               "rotten_flesh",
               "rotten_flesh",
               "rotten_flesh",
               "rotten_flesh",
               "rotten_flesh",
               "rotten_flesh"
          ],
          "minecraft:jungle_sapling"
     )

     const elements = ["water", "air", "fire", "earth"]

     elements.forEach(element => {

          tree_ritual("wizards_reborn:" + element + "_crystal_seed",
               [
                    "wizards_reborn:arcanum_seed",
                    "kubejs:" + element + "_infused_arcanum",
                    "kubejs:" + element + "_infused_arcanum",
                    "kubejs:" + element + "_infused_arcanum",
                    "kubejs:" + element + "_infused_arcanum",
                    "kubejs:" + element + "_infused_arcanum",
                    "kubejs:" + element + "_infused_arcanum",
                    "kubejs:" + element + "_infused_arcanum",
               ],
               "wizards_reborn:arcane_wood_sapling"
          ).id("wizards_reborn:wissen_crystallizer/" + element + "_crystal_seed")

     });

     tree_ritual("wizards_reborn:arcane_linen_seeds",
          [
               "wheat_seeds",
               "wheat_seeds",
               "#forge:dusts/gold",
               "#forge:dusts/gold",
               "wizards_reborn:arcanum_dust",
               "wizards_reborn:arcanum_dust",
               "wizards_reborn:arcanum_dust",
               "wizards_reborn:arcanum_dust"
          ],
          "acacia_sapling"
     ).id("wizards_reborn:wissen_crystallizer/arcane_linen_seeds")

     tree_ritual("ars_nouveau:magebloom_crop",
          [
               "wizards_reborn:arcane_linen_seeds",
               "wizards_reborn:arcane_linen_seeds",
               "ars_nouveau:sourceberry_bush",
               "ars_nouveau:sourceberry_bush",
               "ars_nouveau:source_gem",
               "ars_nouveau:source_gem",
               "ars_nouveau:source_gem",
               "ars_nouveau:source_gem"
          ],
          "ars_nouveau:purple_archwood_sapling"
     )

     tree_ritual("wizards_reborn:cork_bamboo_seed",
          [
               "wizards_reborn:arcane_linen_seeds",
               "wizards_reborn:arcane_linen_seeds",
               "bamboo",
               "bamboo",
               "bamboo",
               "bamboo",
               "bamboo",
               "bamboo"
          ],
          "spruce_sapling"
     )

     tree_ritual("2x wizards_reborn:arcanum_seed",
          [
               "wizards_reborn:arcane_linen_seeds",
               "wizards_reborn:arcane_linen_seeds",
               "ars_nouveau:magebloom_crop",
               "ars_nouveau:magebloom_crop",
               "wizards_reborn:arcanum_dust",
               "wizards_reborn:arcanum_dust",
               "wizards_reborn:arcanum_dust",
               "wizards_reborn:arcanum_dust"
          ],
          "wizards_reborn:arcane_wood_sapling"
     ).id("wizards_reborn:crystal_infusion/arcanum_seed")

     tree_ritual("chorus_flower",
          [
               "wizards_reborn:cork_bamboo",
               "wizards_reborn:cork_bamboo",
               "ender_pearl",
               "ender_pearl",
               "ars_nouveau:source_gem",
               "ars_nouveau:source_gem",
               "ars_nouveau:source_gem",
               "ars_nouveau:source_gem"
          ],
          "biomeswevegone:indigo_jacaranda_sapling"
     )

     tree_ritual("wizards_reborn:arcane_wood_sapling",
          [
               "naturesaura:ancient_sapling",
               "#forge:dusts/gold",
               "wizards_reborn:arcanum_dust",
               "wizards_reborn:arcanum_dust",
               "wizards_reborn:arcanum_dust",
               "wizards_reborn:arcanum_dust",
               "wizards_reborn:arcanum_dust",
               "wizards_reborn:arcanum_dust",
          ],
          "biomeswevegone:blue_spruce_sapling"
     )


     tree_ritual("wizards_reborn:innocent_wood_sapling",
          [
               "wizards_reborn:arcane_wood_sapling",
               "diamond",
               "diamond",
               "diamond",
               "quartz_block",
               "quartz_block",
               "quartz_block",
               "quartz_block"
          ],
          "cherry_sapling"
     ).id("wizards_reborn:crystal_infusion/innocent_wood_sapling")

     function TallFlower(output, flower, color, sapling) {
          tree_ritual(output,
               [
                    flower,
                    "minecraft:grass",
                    "minecraft:" + color + "_dye",
                    "minecraft:" + color + "_dye",
                    "minecraft:" + color + "_dye",
                    "minecraft:" + color + "_dye",
                    "minecraft:" + color + "_dye",
                    "minecraft:" + color + "_dye"
               ],
               sapling, 100
          )
     }

     TallFlower("minecraft:sunflower", "#minecraft:flowers", "yellow", "oak_sapling")
     TallFlower("minecraft:lilac", "#minecraft:flowers", "magenta", "birch_sapling")
     TallFlower("minecraft:peony", "#minecraft:flowers", "pink", "spruce_sapling")
     TallFlower("minecraft:rose_bush", "#minecraft:flowers/roses", "red", "oak_sapling")
     TallFlower("biomeswevegone:blue_rose_bush", "#minecraft:flowers/roses", "blue", "spruce_sapling")
     TallFlower("biomeswevegone:delphinium", "#minecraft:flowers", "blue", "jungle_sapling")
     TallFlower("biomeswevegone:foxglove", "#minecraft:flowers", "cyan", "jungle_sapling")
     TallFlower("biomeswevegone:japanese_orchid", "#minecraft:flowers/orchid", "pink", "cherry_sapling")
     TallFlower("biomeswevegone:tall_white_allium", "#biomeswevegone:flowers/alliums", "white", "oak_sapling")
     TallFlower("biomeswevegone:tall_allium", "#biomeswevegone:flowers/alliums", "magenta", "oak_sapling")
     TallFlower("biomeswevegone:tall_pink_allium", "#biomeswevegone:flowers/alliums", "pink", "oak_sapling")
     TallFlower("biomeswevegone:magenta_pitcher_plant", "minecraft:pitcher_pod", "pink", "jungle_sapling")
     TallFlower("biomeswevegone:cyan_pitcher_plant", "minecraft:pitcher_pod", "cyan", "jungle_sapling")


     tree_ritual("naturesaura:token_joy",
          [
               "#forge:gems/arcanum",
               "kubejs:basic_token",
               "minecraft:sunflower",
               "minecraft:sunflower",
               "minecraft:sunflower",
               "minecraft:sunflower",
               "minecraft:sunflower",
               "minecraft:sunflower"],
          "oak_sapling", 100
     ).id("naturesaura:tree_ritual/token_joy")

     tree_ritual("naturesaura:token_sorrow",
          [
               "#forge:dusts/redstone",
               "kubejs:basic_token",
               "crying_obsidian",
               "crying_obsidian",
               "crying_obsidian",
               "crying_obsidian",
               "crying_obsidian",
               "crying_obsidian"],
          "quark:blue_blossom_sapling", 100
     ).id("naturesaura:tree_ritual/token_sorrow")

     tree_ritual("naturesaura:token_fear",
          [
               "#forge:gems/arcanum",
               "kubejs:basic_token",
               "carved_pumpkin",
               "carved_pumpkin",
               "carved_pumpkin",
               "carved_pumpkin",
               "carved_pumpkin",
               "carved_pumpkin"],
          "quark:lavender_blossom_sapling", 100
     ).id("naturesaura:tree_ritual/token_fear")

     tree_ritual("naturesaura:token_anger",
          [
               "#forge:gems/amethyst",
               "kubejs:basic_token",
               "immersive_weathering:vitrified_sand",
               "immersive_weathering:vitrified_sand",
               "immersive_weathering:vitrified_sand",
               "immersive_weathering:vitrified_sand",
               "immersive_weathering:vitrified_sand",
               "immersive_weathering:vitrified_sand"],
          "quark:red_blossom_sapling", 100
     ).id("naturesaura:tree_ritual/token_anger")

     tree_ritual("4x kubejs:natural_clay_blend",
          [
               "clay",
               "druidic_quest_core:nature_essence",
               "kelp",
               "kelp",
               "#forge:dusts/iron",
               "#forge:dusts/iron",
               "#forge:dusts/iron",
               "#forge:dusts/iron",
          ]
     )
     //==============================================Alloys===========================================

     tree_ritual("2x kubejs:source_alloy_ingot",
          [
               "ars_nouveau:source_gem",
               "ars_nouveau:source_gem",
               "ars_nouveau:source_gem",
               "#forge:dusts/gold",
               "#forge:dusts/gold",
               "#forge:dusts/gold"],
          "ars_nouveau:purple_archwood_sapling", 100
     )

     tree_ritual("2x kubejs:arcanum_alloy_ingot",
          [
               "wizards_reborn:arcanum",
               "wizards_reborn:arcanum",
               'wizards_reborn:arcanum',
               "#forge:dusts/iron",
               "#forge:dusts/iron",
               "#forge:dusts/iron"],
          "birch_sapling", 100
     )

     tree_ritual("irons_spellbooks:arcane_ingot",
          [
               "kubejs:arcanum_alloy_ingot",
               "irons_spellbooks:arcane_essence",
               "irons_spellbooks:arcane_essence",
               "irons_spellbooks:arcane_essence",
               "irons_spellbooks:arcane_essence",
               "irons_spellbooks:arcane_essence",
               "irons_spellbooks:arcane_essence",
               "irons_spellbooks:arcane_essence"],
          "wizards_reborn:arcane_wood_sapling", 100
     ).id("irons_spellbooks:arcane_ingot")

     tree_ritual("kubejs:storm_ingot",
          [
               "kubejs:arcanum_alloy_ingot",
               "kubejs:arcanum_alloy_ingot",
               "ars_nouveau:air_essence",
               "ars_nouveau:air_essence",
               "ars_nouveau:air_essence",
               "ars_nouveau:air_essence"],
          "birch_sapling", 100
     )

     tree_ritual("4x thermal:bronze_ingot",
          [
               "#forge:ingots/tin",
               "#forge:ingots/tin",
               "#forge:ingots/copper",
               "#forge:ingots/copper",
               "#forge:ingots/copper",
               "#forge:ingots/copper",
               "#forge:ingots/copper",
               "#forge:ingots/copper"
          ],
          "jungle_sapling"
     )

     tree_ritual("2x create:brass_ingot",
          [
               "#forge:ingots/zinc",
               "#forge:ingots/zinc",
               "#forge:ingots/copper",
               "#forge:ingots/copper"
          ],
          "jungle_sapling"
     )

     //========================================Shapeshifting Root================================================

     tree_ritual("quark:glow_shroom",
          [
               "kubejs:shapeshifting_root",
               "#c:mushrooms",
               "glow_berries",
               "glow_berries",
               "glow_berries",
               "glow_berries",
               "glow_berries",
               "glow_berries",
          ],
          "#minecraft:saplings"
     )

     const trumpetColors = ["red", "orange", "blue", "yellow"]

     trumpetColors.forEach(color => {

          tree_ritual(`quark:${color}_blossom_sapling`,
               [
                    "kubejs:shapeshifting_root",
                    "#c:trumpet_saplings",
                    `#c:dyes/${color}`,
                    `#c:dyes/${color}`,
                    `#c:dyes/${color}`,
                    `#c:dyes/${color}`,
                    `#c:dyes/${color}`,
                    `#c:dyes/${color}`,
               ],
               "#c:trumpet_saplings"
          )
     });

     tree_ritual(`quark:lavender_blossom_sapling`,
          [
               "kubejs:shapeshifting_root",
               "#c:trumpet_saplings",
               `#c:dyes/purple`,
               `#c:dyes/purple`,
               `#c:dyes/purple`,
               `#c:dyes/purple`,
               `#c:dyes/purple`,
               `#c:dyes/purple`,
          ],
          "#c:trumpet_saplings"
     )

     const spruceColors = ["red", "yellow", "blue", "orange"]

     spruceColors.forEach(color => {

          tree_ritual(`biomeswevegone:${color}_spruce_sapling`,
               [
                    "kubejs:shapeshifting_root",
                    "spruce_sapling",
                    `#c:dyes/${color}`,
                    `#c:dyes/${color}`,
                    `#c:dyes/${color}`,
                    `#c:dyes/${color}`,
                    `#c:dyes/${color}`,
                    `#c:dyes/${color}`,
               ],
               "spruce_sapling"
          )
     });

     const birchColors = ["brown", "red", "yellow", "orange"]

     birchColors.forEach(color => {

          tree_ritual(`biomeswevegone:${color}_birch_sapling`,
               [
                    "kubejs:shapeshifting_root",
                    "birch_sapling",
                    `#c:dyes/${color}`,
                    `#c:dyes/${color}`,
                    `#c:dyes/${color}`,
                    `#c:dyes/${color}`,
                    `#c:dyes/${color}`,
                    `#c:dyes/${color}`,
               ],
               "birch_sapling"
          )
     });

     const oakColors = ["brown", "red", "orange"]

     oakColors.forEach(color => {

          tree_ritual(`biomeswevegone:${color}_oak_sapling`,
               [
                    "kubejs:shapeshifting_root",
                    "oak_sapling",
                    `#c:dyes/${color}`,
                    `#c:dyes/${color}`,
                    `#c:dyes/${color}`,
                    `#c:dyes/${color}`,
                    `#c:dyes/${color}`,
                    `#c:dyes/${color}`,
               ],
               "oak_sapling"
          )
     });

     tree_ritual(`minecraft:dark_oak_sapling`,
          [
               "kubejs:shapeshifting_root",
               "oak_sapling",
               `#c:dyes/black`,
               `#c:dyes/black`,
               `#c:dyes/black`,
               `#c:dyes/black`,
               `#c:dyes/black`,
               `#c:dyes/black`,
          ],
          "oak_sapling"
     )

     tree_ritual(`minecraft:pale_oak_sapling`,
          [
               "kubejs:shapeshifting_root",
               "oak_sapling",
               `#c:dyes/white`,
               `#c:dyes/white`,
               `#c:dyes/white`,
               `#c:dyes/white`,
               `#c:dyes/white`,
               `#c:dyes/white`,
          ],
          "oak_sapling"
     )

     tree_ritual("twilightforest:hollow_oak_sapling",
          [
               "kubejs:greater_shapeshifting_root",
               "oak_sapling",
               "#forge:plates/lead",
               "#forge:plates/lead",
               "#forge:plates/lead",
               "#forge:plates/lead",
               "#forge:plates/lead",
               "#forge:plates/lead",
          ],
          "oak_sapling"
     )

     tree_ritual("aether:golden_oak_sapling",
          [
               "kubejs:greater_shapeshifting_root",
               "oak_sapling",
               "#forge:plates/gold",
               "#forge:plates/gold",
               "#forge:plates/gold",
               "#forge:plates/gold",
               "#forge:plates/gold",
               "#forge:plates/gold",
          ],
          "oak_sapling"
     )

     tree_ritual("twilightforest:twilight_oak_sapling",
          [
               "kubejs:shapeshifting_root",
               "oak_sapling",
               "minecraft:poisonous_potato",
               "minecraft:poisonous_potato",
               "minecraft:poisonous_potato",
               "minecraft:poisonous_potato",
               "minecraft:poisonous_potato",
               "minecraft:poisonous_potato",
          ],
          "oak_sapling"
     )

     tree_ritual("twilightforest:rainbow_oak_sapling",
          [
               "kubejs:greater_shapeshifting_root",
               "oak_sapling",
               `#c:dyes/red`,
               `#c:dyes/red`,
               `#c:dyes/lime`,
               `#c:dyes/lime`,
               `#c:dyes/blue`,
               `#c:dyes/blue`,
          ],
          "oak_sapling"
     )

     tree_ritual("twilightforest:time_sapling",
          [
               "kubejs:greater_shapeshifting_root",
               "#minecraft:saplings",
               `clock`,
               `clock`,
               `clock`,
               `clock`,
               `clock`,
               `clock`,
          ],
          "acacia_sapling"
     )

     tree_ritual("quark:ancient_sapling",
          [
               "kubejs:greater_shapeshifting_root",
               "acacia_sapling",
               `calcite`,
               `calcite`,
               `calcite`,
               `calcite`,
               `calcite`,
               `calcite`,
          ],
          "acacia_sapling"
     )

     tree_ritual("twilightforest:transformation_sapling",
          [
               "kubejs:greater_shapeshifting_root",
               "#minecraft:saplings",
               "twilightforest:transformation_powder",
               `twilightforest:transformation_powder`,
               `twilightforest:transformation_powder`,
               `twilightforest:transformation_powder`,
               `twilightforest:transformation_powder`,
               `twilightforest:transformation_powder`,
          ],
          "acacia_sapling"
     )

     tree_ritual("twilightforest:mining_sapling",
          [
               "kubejs:greater_shapeshifting_root",
               "#minecraft:saplings",
               "iron_pickaxe",
               `iron_pickaxe`,
               `iron_pickaxe`,
               `iron_pickaxe`,
               `iron_pickaxe`,
               `iron_pickaxe`,
          ],
          "acacia_sapling"
     )

     tree_ritual("twilightforest:sorting_sapling",
          [
               "kubejs:greater_shapeshifting_root",
               "#minecraft:saplings",
               "woodenhopper:wooden_hopper",
               `woodenhopper:wooden_hopper`,
               `woodenhopper:wooden_hopper`,
               `woodenhopper:wooden_hopper`,
               `woodenhopper:wooden_hopper`,
               `woodenhopper:wooden_hopper`,
          ],
          "acacia_sapling"
     )

     tree_ritual("twilightforest:canopy_sapling",
          [
               "kubejs:shapeshifting_root",
               "acacia_sapling",
               `#c:dyes/black`,
               `#c:dyes/black`,
               `#c:dyes/black`,
               `#c:dyes/black`,
               `#c:dyes/black`,
               `#c:dyes/black`,
          ],
          "acacia_sapling"
     )

     tree_ritual("twilightforest:mangrove_sapling",
          [
               "kubejs:shapeshifting_root",
               "minecraft:mangrove_propagule",
               `#c:dyes/white`,
               `#c:dyes/white`,
               `#c:dyes/white`,
               `#c:dyes/white`,
               `#c:dyes/white`,
               `#c:dyes/white`,
          ],
          "minecraft:mangrove_propagule"
     )

     tree_ritual("twilightforest:darkwood_sapling",
          [
               "kubejs:shapeshifting_root",
               "minecraft:dark_oak_sapling",
               `#c:dyes/black`,
               `#c:dyes/black`,
               `#c:dyes/black`,
               `#c:dyes/black`,
               `#c:dyes/black`,
               `#c:dyes/black`
          ],
          "#minecraft:saplings"
     )

     tree_ritual("minecraft:flowering_azalea",
          [
               "kubejs:shapeshifting_root",
               "minecraft:oak_sapling",
               "moss_block",
               "moss_block",
               "moss_block",
               "moss_block",
               "moss_block",
               "moss_block"
          ],
          "minecraft:oak_sapling"
     )

     tree_ritual("biomeswevegone:jacaranda_sapling",
          [
               "kubejs:shapeshifting_root",
               "minecraft:flowering_azalea",
               "#c:dyes/magenta",
               "#c:dyes/magenta",
               "#c:dyes/magenta",
               "#c:dyes/magenta",
               "#c:dyes/magenta",
               "#c:dyes/magenta"
          ],
          "minecraft:flowering_azalea"
     )

     tree_ritual("biomeswevegone:indigo_jacaranda_sapling",
          [
               "kubejs:shapeshifting_root",
               "biomeswevegone:jacaranda_sapling",
               "#c:dyes/purple",
               "#c:dyes/purple",
               "#c:dyes/purple",
               "#c:dyes/purple",
               "#c:dyes/purple",
               "#c:dyes/purple"
          ],
          "biomeswevegone:jacaranda_sapling"
     )

     tree_ritual("minecraft:crimson_fungus",
          [
               "kubejs:shapeshifting_root",
               "#c:mushrooms",
               "minecraft:nether_wart",
               "minecraft:nether_wart",
               "minecraft:nether_wart",
               "minecraft:nether_wart",
               "minecraft:nether_wart",
               "minecraft:nether_wart"
          ],
          "#minecraft:saplings"
     )

     tree_ritual("minecraft:warped_fungus",
          [
               "kubejs:shapeshifting_root",
               "minecraft:crimson_fungus",
               "#c:dyes/green",
               "#c:dyes/green",
               "#c:dyes/green",
               "#c:dyes/green",
               "#c:dyes/green",
               "#c:dyes/green"
          ],
          "#minecraft:saplings"
     )



})