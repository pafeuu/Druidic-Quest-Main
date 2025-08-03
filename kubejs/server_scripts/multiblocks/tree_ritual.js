ServerEvents.recipes(event=>{

     const tree_ritual = event.recipes.naturesaura.tree_ritual
    /*Ingredients order
            1
         5     7
      3           4
         6     8
            2
    */
     tree_ritual("wizards_reborn:arcane_workbench",
        ["crafting_table",
        "wizards_reborn:arcane_wood_planks",
        "naturesaura:gold_leaf",
        "naturesaura:gold_leaf",
        "red_wool",
        "wizards_reborn:arcane_wood_planks",
        "red_wool",
        "wizards_reborn:arcane_wood_planks"],
        "birch_sapling").id("wizards_reborn:shaped/arcane_workbench")
   

     tree_ritual("ars_nouveau:starbuncle_charm",
        ["ars_nouveau:starbuncle_shards",
        "woodenhopper:wooden_hopper",
        "immersiveengineering:conveyor_basic",
        "immersiveengineering:conveyor_basic",
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
        "kubejs:nature_essence",
        "kubejs:nature_essence",
        "kubejs:nature_essence",
        "kubejs:nature_essence"],
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

     
     tree_ritual("ars_nouveau:enchanting_apparatus",
          ["quark:diamond_heart",
          "#forge:plates/diamond",
          "#forge:gears/gold",
          "#forge:gears/gold",
          "#forge:ingots/source_alloy",
          "#forge:ingots/source_alloy",
          "#forge:ingots/source_alloy",
          "#forge:ingots/source_alloy"],
          "ars_nouveau:blue_archwood_sapling"
     )

     //============================================= Seeds and Saplings =============================================

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

     tree_ritual("forbidden_arcanus:golden_orchid_seeds",
          [
               "wizards_reborn:arcanum_seed",
               "#forge:storage_blocks/deorum",
               "#forge:storage_blocks/deorum",
               "#forge:storage_blocks/deorum",
               "#forge:storage_blocks/deorum",
               "#forge:storage_blocks/deorum",
               "#forge:storage_blocks/deorum",
               "#forge:storage_blocks/deorum",
          ],
          "aether:golden_oak_sapling"
     ).id("forbidden_arcanus:golden_orchid_seeds")

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
     
})