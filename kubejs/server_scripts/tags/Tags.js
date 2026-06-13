priority: 0;

ServerEvents.tags("item", (event) => {

  event.remove("curios:head", [
    'twilightforest:knight_phantom_trophy',
    'twilightforest:ur_ghast_trophy',
    'twilightforest:alpha_yeti_trophy',
    'twilightforest:hydra_trophy',
    'twilightforest:minoshroom_trophy',
    'twilightforest:lich_trophy',
    'twilightforest:naga_trophy',
    'umbral_skies:sun_spirit_trophy',
    'umbral_skies:valkyrie_queen_trophy',
    'umbral_skies:slider_trophy',
    'twilightforest:snow_queen_trophy',
    'twilightforest:quest_ram_trophy'
  ])


  event.add("forge:ancient_wood", ["naturesaura:ancient_bark", "naturesaura:ancient_log"])
  event.add("forge:dusts/saltpeter", "barrier"); // This shit screams at me all the time so it that barrier up


  event.add("minecraft:tools/pickaxe", "#forge:tools/pickaxes");
  event.add("minecraft:tools/axe", "#forge:tools/axes");
  event.add("minecraft:tools/shovel", "#forge:tools/shovels");
  event.add("minecraft:tools/hoe", "#forge:tools/hoes");

  event.add("forge:tools/pickaxes", "#minecraft:tools/pickaxe");
  event.add("forge:tools/axes", "#minecraft:tools/axe");
  event.add("forge:tools/shovels", "#minecraft:tools/shovel");
  event.add("forge:tools/hoes", "#minecraft:tools/hoe");
  event.add("forge:tools/pickaxes", "#minecraft:pickaxes");

  event.add("forge:storage_blocks/slime", "#c:storage_blocks/slime");
  event.add("c:storage_blocks/slime", "minecraft:slime_block")
  event.add("aether:phoenix_repairing", "kubejs:phoenix_ingot");
  event.remove("forge:dough", "create:dough");
  event.add("c:rods/wooden", [
    "twigs:twig",
    "minecraft:stick",
    "aether:skyroot_stick",
  ]);
  event.add("c:barrels/wooden", "#forge:barrels/wooden");
  event.add("c:chests/wooden", "#forge:chests/wooden");
  event.add("dq:sturdy_tools_repair_item", "minecraft:netherite_scrap");
  event.add("farmersdelight:offhand_equipment", "#forge:tools/totems");
  event.add("lychee:dispenser_placement", "minecraft:iron_block");
  event.add("aether:treated_as_aether_item", "#forge:tools");
  event.add("aether:treated_as_aether_item", "#forge:armors");
  event.add("supplementaries:cookies", [
    "fruitsdelight:cranberry_cookie",
    "fruitsdelight:persimmon_cookie",
    "fruitsdelight:bayberry_cookie",
    "fruitsdelight:lemon_cookie",
  ]);

  event.add("forge:cactus", [
    "minecraft:cactus",
    "biomeswevegone:carved_barrel_cactus",
    "biomeswevegone:flowering_barrel_cactus",
    "biomeswevegone:barrel_cactus",
    "naturesaura:aura_cactus",
  ]);

  event.add("aether:obsidian_repairing", "kubejs:obsidian_ingot");

  event.add("minecraft:smooth_stone", "smooth_stone");

  event.remove("forge:rods/wooden", "naturesaura:ancient_stick");
  event.remove("forge:rods/wooden", "immersiveengineering:stick_treated");

  event.remove("minecraft:flowers", [
    "farmersdelight:wild_potatoes",
    "farmersdelight:wild_rice",
    "farmersdelight:wild_beetroots",
    "farmersdelight:wild_tomatoes",
    "farmersdelight:wild_onions",
    "farmersdelight:wild_carrots",
    "farmersdelight:wild_cabbages",
    "vintagedelight:wild_oats",
    "vintagedelight:wild_cucumbers",
    "vintagedelight:wild_ghost_peppers",
    "vintagedelight:wild_peanuts",
    "supplementaries:wild_flax",
  ]);
  event.remove("minecraft:small_flowers", [
    "farmersdelight:wild_potatoes",
    "farmersdelight:wild_beetroots",
    "farmersdelight:wild_tomatoes",
    "farmersdelight:wild_onions",
    "farmersdelight:wild_carrots",
    "farmersdelight:wild_cabbages",
    "vintagedelight:wild_oats",
    "vintagedelight:wild_cucumbers",
    "vintagedelight:wild_ghost_peppers",
    "vintagedelight:wild_peanuts",
    "supplementaries:wild_flax",
  ]);
  event.remove("minecraft:tall_flowers", "farmersdelight:wild_rice");
  event.add("c:hidden_from_recipe_viewers", [global.nukelist]);

  event.add("c:hidden_from_recipe_viewers", [
    "kubejs:recipe_changed",
    "ftbfiltersystem:smart_filter",
    "kubejs:unstable_ivy_quartz",
  ]);

  event.add("curios:charm", [
    "wizards_reborn:wissen_keychain",
    "wizards_reborn:creative_wissen_keychain",
  ]);
  event.add("curios:necklace", [
    "wizards_reborn:wissen_keychain",
    "wizards_reborn:creative_wissen_keychain",
  ]);

  event.remove("curios:curio", [
    "wizards_reborn:wissen_keychain",
    "wizards_reborn:creative_wissen_keychain",
  ]);

  let seed = [
    "vintagedelight:oat_seeds",
    "vintagedelight:ghost_pepper_seeds",
    "ars_nouveau:sourceberry_bush",
    "biomeswevegone:blueberries",
    "biomeswevegone:oddion_bulb",
  ];

  let flower = [
    "minecraft:sunflower",
    "minecraft:dandelion",
    "naturesaura:aura_bloom",
    "bloomingnature:wild_sunflower",
    "biomeswevegone:firecracker_flower_bush",
    "biomeswevegone:orange_amaranth",
    "biomeswevegone:lollipop_flower",
    "biomeswevegone:guzmania",
    "biomeswevegone:yellow_sakura_petals",
    "biomeswevegone:yellow_tulip",
    "silly_oddities:wildflowers",
    /*'regions_unexplored:yellow_snowbelle',*/
    /*,'regions_unexplored:alpha_dandelion'*/
  ];

  /*let wiring = ['minecraft:repeater', 'minecraft:calibrated_sculk_sensor', 'minecraft:tripwire_hook', 'minecraft:daylight_detector', 'minecraft:string', 'minecraft:activator_rail', 'minecraft:detector_rail', 'minecraft:powered_rail', 'minecraft:rail', 
                'minecraft:redstone', 'minecraft:piston', 'minecraft:composter', 'create:redstone_link', 'minecraft:sticky_piston', 'minecraft:dispenser', 'minecraft:redstone_lamp', 'minecraft:redstone_torch', 'minecraft:dropper',
                 'minecraft:hopper', 'ars_nouveau:redstone_relay', 'minecraft:lever', 'minecraft:target', 'quark:redstone_randomizer', 'minecraft:comparator','create:controller_rail', 'create:large_cogwheel', 'create:shaft', 'create:cogwheel', 'create:gearbox', 
                 'create:vertical_gearbox', 'create:clutch', 'create:gearshift', 'create:encased_chain_drive', 'create:adjustable_chain_gearshift', 'create:belt_connector', 'create:fluid_pipe', 'create:mechanical_pump', 'create:smart_fluid_pipe', 'create:fluid_valve', 
                 'create:piston_extension_pole', 'create:gantry_shaft', 'create:analog_lever', 'create:pulse_repeater', 'create:pulse_extender', 'create:powered_latch', 'create:powered_toggle_latch', 'create:track','supplementaries:hourglass', 'supplementaries:crank', 
                 'supplementaries:wind_vane', 'supplementaries:cog_block', 'supplementaries:turn_table', 'supplementaries:spring_launcher', 'supplementaries:faucet']*/

  let froglights = [
    "minecraft:ochre_froglight",
    "minecraft:verdant_froglight",
    "minecraft:pearlescent_froglight",
  ];

  event.removeAll("aether:planks_crafting");
  event.add("minecraft:planks", [
    "aether:skyroot_planks",
    "ancient_aether:highsproot_planks",
    "deep_aether:roseroot_planks",
    "ancient_aether:sakura_planks",
    "deep_aether:yagroot_planks",
    "deep_aether:cruderoot_planks",
    "deep_aether:conberry_planks",
  ]);
  event.add("forge:tools/hammers", "immersiveengineering:hammer");
  event.add("forge:ingots/andesite_alloy", "create:andesite_alloy");
  event.add("forge:ingots", [
    'irons_spellbooks:arcane_ingot',
    'immersiveengineering:ingot_steel',
    'immersiveengineering:ingot_hop_graphite',
    'enigmaticlegacy:evil_ingot',
    'naturesaura:depth_ingot',
    'enigmaticlegacy:etherium_ingot',
    'naturesaura:tainted_gold',
    'naturesaura:sky_ingot',
    'naturesaura:infused_iron'
  ])

  event.removeAll("twilightforest:portal/activator");

  event.add("twilightforest:portal/activator", "kubejs:dimension_ripper");

  event.remove("forge:gems/ruby", "thermal:ruby");
  event.remove("forge:storage_blocks/ruby", "thermal:ruby_block");
  event.remove("forge:storage_blocks/gunpowder", "thermal:gunpowder_block");
  event.remove("curios:head", "immersive_weathering:flower_crown");

  event.add("forge:insect", [
    "alexsmobs:maggot",
    "twilightforest:firefly",
    "twilightforest:cicada",
    "twilightforest:moonworm",
  ]);

  event.add("quark:seed_pouch_holdable", "forge:seeds");
  event.add("quark:seed_pouch_holdable", "minecraft:saplings");

  event.add("forge:tools", "#minecraft:tools");
  event.add("forge:tools", [
    "quark:abacus",
    "quark:trowel",
    "immersiveengineering:hammer",
    "constructionwand:stone_wand",
    "constructionwand:iron_wand",
    "supplementaries:wrench",
    "minecraft:shears",
    "minecraft:flint_and_steel",
    "#c:tools",
    "constructionwand:diamond_wand",
    "constructionwand:infinity_wand",
  ]);

  event.add("immersiveengineering:toolbox/tools", "#forge:tools");
  event.add("forge:storage_blocks/potato", "farmersdelight:potato_crate");
  event.add("forge:gems/zanite", "#aether:gems/zanite");
  event.add("forge:gems/skyjade", "deep_aether:skyjade");
  event.remove("forge:gems/sapphire", "thermal:sapphire");
  event.remove("forge:storage_blocks/sapphire", "thermal:sapphire_block");
  event.add("forge:storage_blocks/sapphire", "kubejs:sapphire_block");

  event.add("minecraft:axes", "#forge:tools/axes");
  event.add("minecraft:axes", "twilightforest:gold_minotaur_axe");
  event.add("minecraft:axes", "twilightforest:diamond_minotaur_axe");
  event.add("minecraft:pickaxes", "#forge:tools/pickaxes");
  event.add("minecraft:swords", "#forge:tools/swords");
  event.add("minecraft:shovels", "#forge:tools/shovels");
  event.add("minecraft:hoes", "#forge:tools/hoes");

  event.add("minecraft:swords", ['deep_aether:storm_sword', 'starbunclemania:star_sword', "create:cardboard_sword"])

  event.add("forge:ingots/stainless_steel", "immersiveengineering:ingot_steel");
  event.add(
    "forge:nuggets/stainless_steel",
    "immersiveengineering:nugget_steel",
  );
  event.add(
    "forge:storage_blocks/stainless_steel",
    "immersiveengineering:storage_steel",
  );
  event.add("forge:rods/stainless_steel", "immersiveengineering:stick_steel");
  event.add("forge:plates/stainless_steel", "immersiveengineering:plate_steel");
  event.add("forge:dusts/stainless_steel", "immersiveengineering:dust_steel");

  event.add("forge:ingots/sky", "naturesaura:sky_ingot");
  event.add("forge:ingots/depth", "naturesaura:depth_ingot");
  event.add("forge:ingots/tainted_gold", "naturesaura:tainted_gold");
  event.add("forge:ingots/infused_iron", "naturesaura:infused_iron");
  event.add(
    "forge:storage_blocks/infused_iron",
    "naturesaura:infused_iron_block",
  );
  event.add(
    "forge:storage_blocks/tainted_gold",
    "naturesaura:tainted_gold_block",
  );
  event.add("forge:storage_blocks/sky", "naturesaura:sky_ingot_block");
  event.add("forge:storage_blocks/depth", "naturesaura:depth_ingot_block");

  event.remove("forge:ingots/steel", "immersiveengineering:ingot_steel");
  event.remove("forge:nuggets/steel", "immersiveengineering:nugget_steel");
  event.remove(
    "forge:storage_blocks/steel",
    "immersiveengineering:storage_steel",
  );
  event.remove("forge:rods/steel", "immersiveengineering:stick_steel");
  event.remove("forge:plates/steel", "immersiveengineering:plate_steel");
  event.remove("forge:dusts/steel", "immersiveengineering:dust_steel");

  event.add("forge:ingots/andesite", "create:andesite_alloy");
  event.add("forge:storage_blocks/andesite", "create:andesite_alloy_block");
  event.add("forge:plates/andesite", "vintageimprovements:andesite_sheet");

  event.add("c:music_discs", "#minecraft:music_discs");
  event.add("immersive_weathering:bark", "farmersdelight:tree_bark");
  event.add("immersive_weathering:bark", [
    "arsdelight:flourishing_bark",
    "arsdelight:vexing_bark",
    "arsdelight:cascading_bark",
    "arsdelight:blazing_bark",
  ]);

  froglights.forEach((id) => {
    event.add("forge:froglights", id);
  });

  flower.forEach((id) => {
    event.add("forge:flowers/golden", id);
  });

  seed.forEach((id) => {
    event.add("quark:seed_pouch_holdable", id);
  });

  event.add("c:hidden_from_recipe_viewers", "#forge:tools/skyroot");
  event.add(
    "c:hidden_from_recipe_viewers",
    "immersiveengineering:potion_bucket",
  );
  event.add("c:hidden_from_recipe_viewers", "immersiveengineering:shader");
  event.add("c:hidden_from_recipe_viewers", "kubejs:depleted_ruby_block");
  event.add("c:hidden_from_recipe_viewers", "kubejs:unassembled_clock");
  event.add("c:hidden_from_recipe_viewers", "kubejs:unassembled_compass");

  event.add("forge:tools/shields", "kubejs:primitive_shield");
  event.add("forge:shields", "kubejs:primitive_shield");
  event.add("forge:tools", "kubejs:primitive_shield");

  function armor(name, type) {
    event.add("forge:armors/helmets", name + "_helmet");
    event.add("forge:armors/chestplates", name + "_chestplate");
    event.add("forge:armors/leggings", name + "_leggings");
    event.add("forge:armors/boots", name + "_boots");

    event.add(`forge:armor/${type}`, [
      `${name}_helmet`,
      `${name}_chestplate`,
      `${name}_leggings`,
      `${name}_boots`,
    ]);
  }

  function natureArmor(name, type) {
    event.add("forge:armors/helmets", name + "_helmet");
    event.add("forge:armors/chestplates", name + "_chest");
    event.add("forge:armors/leggings", name + "_pants");
    event.add("forge:armors/boots", name + "_shoes");

    event.add(`forge:armor/${type}`, [
      `${name}_helmet`,
      `${name}_chest`,
      `${name}_pants`,
      `${name}_shoes`,
    ]);
  }

  function tool(name) {
    event.add("minecraft:axes", name + "_axe");
    event.add("minecraft:pickaxes", name + "_pickaxe");
    event.add("minecraft:swords", name + "_sword");
    event.add("minecraft:shovels", name + "_shovel");
    event.add("minecraft:hoes", name + "_hoe");
  }

  function tooltier(name, tier) {
    event.add("forge:tools/" + tier, name + "_axe");
    event.add("forge:tools/" + tier, name + "_pickaxe");
    event.add("forge:tools/" + tier, name + "_sword");
    event.add("forge:tools/" + tier, name + "_shovel");
    event.add("forge:tools/" + tier, name + "_hoe");
  }

  event.add(`forge:armor/priest`, "irons_spellbooks:paladin_chestplate");
  event.add(
    `forge:armor/pyromancer`,
    "irons_spellbooks:infernal_sorcerer_chestplate",
  );
  event.add(`forge:armor/archevoker`, "irons_spellbooks:speed_boots");

  armor("irons_spellbooks:netherite_mage", "netherite_mage");
  armor("irons_spellbooks:wizard", "wizard");
  armor("irons_spellbooks:pumpkin", "scarecrow");
  armor("irons_spellbooks:wandering_magician", "wandering_magician");
  armor("irons_spellbooks:archevoker", "archevoker");
  armor("irons_spellbooks:pyromancer", "pyromancer");
  armor("irons_spellbooks:cryomancer", "cryomancer");
  armor("irons_spellbooks:electromancer", "electromancer");
  armor("irons_spellbooks:priest", "priest");
  armor("irons_spellbooks:shadowwalker", "shadowwalker");
  armor("irons_spellbooks:plagued", "plagued");
  armor("irons_spellbooks:cultist", "cultist");

  armor("aether:phoenix", "phoenix");
  armor("minecraft:leather", "leather");
  armor("minecraft:chainmail", "chainmail");
  armor("aether:zanite", "zanite");
  armor("deep_aether:skyjade", "skyjade");
  armor("twilightforest:ironwood", "ironwood");
  armor("twilightforest:steeleaf", "steeleaf");
  armor("twilightforest:knightmetal", "knightmetal");
  armor("twilightforest:fiery", "fiery");
  armor("twilightforest:arctic", "arctic");
  armor("twilightforest:yeti", "yeti");
  armor("twilightforest:naga", "naga");
  armor("twilightforest:phantom", "phantom");
  armor("enigmaticlegacy:etherium", "etherium");
  armor("kubejs:cactus", "cactus");
  armor("thermal:beekeeper", "beekeeper");
  armor("thermal:diving", "diving");
  armor("thermal:hazmat", "hazmat");
  armor("kubejs:copper", "copper");
  armor("kubejs:silver", "silver");
  armor("kubejs:lead", "lead");
  armor("kubejs:bronze", "bronze");
  armor("kubejs:uranium", "uranium");
  armor("deep_aether:stormforged", "stormforged");
  armor("wizards_reborn:arcane_gold", "arcane_gold");
  armor("wizards_reborn:arcane_fortress", "arcane_fortress");
  natureArmor("naturesaura:infused_iron", "botanist");
  natureArmor("naturesaura:sky", "sky");
  natureArmor("naturesaura:depth", "depth");

  tooltier("minecraft:wooden", "flint");
  tooltier("minecraft:stone", "stone");
  tooltier("naturesaura:infused_iron", "botanist");
  tooltier("aether:zanite", "zanite");
  tooltier("aether:gravitite", "gravitite");
  tooltier("aether:holystone", "holystone");
  tooltier("aether:skyroot", "skyroot");
  tooltier("deep_aether:skyjade", "skyjade");
  tooltier("enigmaticlegacy:etherium", "etherium");
  tooltier("twilightforest:ironwood", "ironwood");
  tooltier("twilightforest:steeleaf", "steeleaf");
  tooltier("twilightforest:fiery", "fiery");
  tooltier("twilightforest:knightmetal", "knightmetal");
  tooltier("wizards_reborn:arcane_wood", "arcane_wood");

  tool("kubejs:copper");
  tool("kubejs:silver");
  tool("kubejs:lead");
  tool("enigmaticlegacy:etherium");
  event.add("forge:tools/etherium", "enigmaticlegacy:etherium_scythe");

  global.toolTypesWithSword.forEach((type) => {
    event.add("forge:tools/steel", `immersiveengineering:${type}_steel`);
  });

  const missingFieryTools = ["axe", "shovel", "hoe"];

  missingFieryTools.forEach((type) => {
    event.add("forge:tools/fiery", `kubejs:fiery_${type}`);
  });

  event.add("forge:storage_blocks/cobblestone", "quark:sturdy_stone");

  event.add("druidic_quest:dimensional_tools", [
    "#forge:tools/ironwood",
    "#forge:tools/zanite",
    "#forge:tools/gravitite",
    "#forge:tools/holystone",
    "#forge:tools/skyjade",
    "#forge:tools/steeleaf",
    "#forge:tools/ironwood",
    "#forge:tools/blaze",
    "#forge:tools/netherite",
  ]);

  event.add("minecraft:stairs", [
    "twigs:cobblestone_brick_stairs",
    "twigs:mossy_cobblestone_brick_stairs",
    "twigs:polished_tuff_stairs",
    "twigs:polished_tuff_brick_stairs",
    "twigs:polished_calcite_stairs",
    "twigs:polished_calcite_brick_stairs",
    "create:waxed_oxidized_copper_tile_stairs",
    "create:waxed_weathered_copper_tile_stairs",
    "create:waxed_exposed_copper_tile_stairs",
    "create:waxed_copper_tile_stairs",
    "create:oxidized_copper_tile_stairs",
    "create:weathered_copper_tile_stairs",
    "create:exposed_copper_tile_stairs",
    "create:copper_tile_stairs",
    "create:waxed_oxidized_copper_shingle_stairs",
    "create:waxed_weathered_copper_shingle_stairs",
    "create:waxed_exposed_copper_shingle_stairs",
    "create:waxed_copper_shingle_stairs",
    "create:copper_shingle_stairs",
    "create:exposed_copper_shingle_stairs",
    "create:weathered_copper_shingle_stairs",
    "create:oxidized_copper_shingle_stairs",
    "copycats:copycat_vertical_stairs",
    "copycats:copycat_stairs",
    "deep_aether:polished_clorite_stairs",
    "deep_aether:raw_clorite_stairs",
    "deep_aether:polished_aseterite_stairs",
    "ars_nouveau:smooth_gilded_sourcestone_small_bricks_stairs",
    "ars_nouveau:smooth_gilded_sourcestone_alternating_stairs",
    "ars_nouveau:smooth_gilded_sourcestone_large_bricks_stairs",
    "ars_nouveau:smooth_gilded_sourcestone_basketweave_stairs",
    "ars_nouveau:smooth_gilded_sourcestone_mosaic_stairs",
    "ars_nouveau:gilded_sourcestone_small_bricks_stairs",
    "ars_nouveau:gilded_sourcestone_large_bricks_stairs",
    "ars_nouveau:gilded_sourcestone_alternating_stairs",
    "ars_nouveau:gilded_sourcestone_basketweave_stairs",
    "ars_nouveau:gilded_sourcestone_mosaic_stairs",
    "ars_nouveau:smooth_sourcestone_small_bricks_stairs",
    "ars_nouveau:smooth_sourcestone_stairs",
    "ars_nouveau:smooth_sourcestone_large_bricks_stairs",
    "ars_nouveau:smooth_sourcestone_alternating_stairs",
    "ars_nouveau:smooth_sourcestone_mosaic_stairs",
    "ars_nouveau:smooth_sourcestone_basketweave_stairs",
    "ars_nouveau:sourcestone_small_bricks_stairs",
    "ars_nouveau:sourcestone_large_bricks_stairs",
    "ars_nouveau:sourcestone_alternating_stairs",
    "ars_nouveau:sourcestone_basketweave_stairs",
    "ars_nouveau:sourcestone_mosaic_stairs",
    "ars_nouveau:sourcestone_stairs",
    "vintagedelight:mixed_salt_brick_stairs",
    "vintagedelight:salt_brick_stairs",
    "vintagedelight:vine_tile_stairs",
    "astrological:cracked_light_jade_tiles_stairs",
    "astrological:light_jade_tiles_stairs",
    "astrological:light_jade_stairs",
    "astrological:reinforced_jade_stairs",
    "astrological:polished_jade_stairs",
    "astrological:jade_bricks_stairs",
    "astrological:jade_stairs",
    "astrological:triphylite_stairs",
    "astrological:purpurite_tiles_stairs",
    "astrological:purpurite_stairs",
    "immersive_weathering:waxed_rusted_cut_iron_stairs",
    "immersive_weathering:waxed_rusted_plate_iron_stairs",
    "immersive_weathering:waxed_weathered_cut_iron_stairs",
    "immersive_weathering:waxed_weathered_plate_iron_stairs",
    "immersive_weathering:waxed_exposed_cut_iron_stairs",
    "immersive_weathering:waxed_exposed_plate_iron_stairs",
    "immersive_weathering:waxed_cut_iron_stairs",
    "immersive_weathering:waxed_plate_iron_stairs",
    "immersive_weathering:rusted_cut_iron_stairs",
    "immersive_weathering:rusted_plate_iron_stairs",
    "immersive_weathering:cracked_brick_stairs",
    "immersive_weathering:mossy_brick_stairs",
    "immersive_weathering:cracked_prismarine_brick_stairs",
    "immersive_weathering:cracked_nether_brick_stairs",
    "immersive_weathering:cracked_polished_blackstone_brick_stairs",
    "immersive_weathering:cracked_end_stone_brick_stairs",
    "immersive_weathering:plate_iron_stairs",
    "immersive_weathering:cut_iron_stairs",
    "immersive_weathering:exposed_plate_iron_stairs",
    "immersive_weathering:exposed_cut_iron_stairs",
    "immersive_weathering:weathered_plate_iron_stairs",
    "immersive_weathering:weathered_cut_iron_stairs",
    "immersive_weathering:cracked_deepslate_tile_stairs",
    "immersive_weathering:cracked_deepslate_brick_stairs",
    "immersive_weathering:sandy_stone_brick_stairs",
    "immersive_weathering:snowy_stone_brick_stairs",
    "immersive_weathering:cracked_stone_brick_stairs",
    "immersive_weathering:sandy_cobblestone_stairs",
    "immersive_weathering:snowy_cobblestone_stairs",
    "immersive_weathering:sandy_stone_stairs",
    "immersive_weathering:snowy_stone_stairs",
    "immersive_weathering:mossy_stone_stairs",
    "immersive_weathering:charred_stairs",
  ]);

  event.add("minecraft:slabs", "#quark:vertical_slabs");
  event.add("minecraft:slabs", [
    "twigs:bamboo_thatch_slab",
    "twigs:cobblestone_brick_slab",
    "twigs:mossy_cobblestone_brick_slab",
    "twigs:tuff_slab",
    "twigs:polished_tuff_slab",
    "twigs:polished_tuff_brick_slab",
    "twigs:calcite_slab",
    "twigs:polished_calcite_slab",
    "twigs:polished_calcite_brick_slab",
    "create:waxed_oxidized_copper_tile_slab",
    "create:waxed_weathered_copper_tile_slab",
    "create:waxed_exposed_copper_tile_slab",
    "create:waxed_copper_tile_slab",
    "create:oxidized_copper_tile_slab",
    "create:weathered_copper_tile_slab",
    "create:exposed_copper_tile_slab",
    "create:copper_tile_slab",
    "create:waxed_oxidized_copper_shingle_slab",
    "create:waxed_weathered_copper_shingle_slab",
    "create:waxed_exposed_copper_shingle_slab",
    "create:waxed_copper_shingle_slab",
    "create:oxidized_copper_shingle_slab",
    "create:weathered_copper_shingle_slab",
    "create:exposed_copper_shingle_slab",
    "create:copper_shingle_slab",
    "copycats:copycat_slab",
    "deep_aether:polished_clorite_slab",
    "deep_aether:raw_clorite_slab",
    "deep_aether:polished_aseterite_slab",
    "ars_nouveau:smooth_gilded_sourcestone_small_bricks_slab",
    "ars_nouveau:smooth_gilded_sourcestone_large_bricks_slab",
    "ars_nouveau:smooth_gilded_sourcestone_alternating_slab",
    "ars_nouveau:smooth_gilded_sourcestone_basketweave_slab",
    "ars_nouveau:smooth_gilded_sourcestone_mosaic_slab",
    "ars_nouveau:gilded_sourcestone_small_bricks_slab",
    "ars_nouveau:gilded_sourcestone_large_bricks_slab",
    "ars_nouveau:gilded_sourcestone_alternating_slab",
    "ars_nouveau:gilded_sourcestone_basketweave_slab",
    "ars_nouveau:gilded_sourcestone_mosaic_slab",
    "ars_nouveau:smooth_sourcestone_small_bricks_slab",
    "ars_nouveau:smooth_sourcestone_slab",
    "ars_nouveau:smooth_sourcestone_large_bricks_slab",
    "ars_nouveau:smooth_sourcestone_alternating_slab",
    "ars_nouveau:smooth_sourcestone_mosaic_slab",
    "ars_nouveau:smooth_sourcestone_basketweave_slab",
    "ars_nouveau:sourcestone_small_bricks_slab",
    "ars_nouveau:sourcestone_large_bricks_slab",
    "ars_nouveau:sourcestone_alternating_slab",
    "ars_nouveau:sourcestone_basketweave_slab",
    "ars_nouveau:sourcestone_mosaic_slab",
    "ars_nouveau:sourcestone_slab",
    "vintagedelight:mixed_salt_brick_slab",
    "vintagedelight:salt_brick_slab",
    "vintagedelight:vine_tile_slab",
    "craftingstation:crafting_station_slab",
    "astrological:cracked_light_jade_tiles_slab",
    "astrological:light_jade_tiles_slab",
    "astrological:light_jade_slab",
    "astrological:reinforced_jade_slab",
    "astrological:polished_jade_slab",
    "astrological:jade_bricks_slab",
    "astrological:jade_slab",
    "astrological:triphylite_slab",
    "astrological:purpurite_tiles_slab",
    "astrological:purpurite_slab",
    "astrological:marbled_jade_slab",
    "immersive_weathering:waxed_rusted_cut_iron_slab",
    "immersive_weathering:waxed_rusted_plate_iron_slab",
    "immersive_weathering:waxed_weathered_cut_iron_slab",
    "immersive_weathering:waxed_weathered_plate_iron_slab",
    "immersive_weathering:waxed_exposed_cut_iron_slab",
    "immersive_weathering:waxed_exposed_plate_iron_slab",
    "immersive_weathering:waxed_cut_iron_slab",
    "immersive_weathering:waxed_plate_iron_slab",
    "immersive_weathering:rusted_cut_iron_slab",
    "immersive_weathering:rusted_plate_iron_slab",
    "immersive_weathering:weathered_cut_iron_slab",
    "immersive_weathering:weathered_plate_iron_slab",
    "immersive_weathering:exposed_cut_iron_slab",
    "immersive_weathering:exposed_plate_iron_slab",
    "immersive_weathering:cut_iron_slab",
    "immersive_weathering:plate_iron_slab",
    "immersive_weathering:cracked_end_stone_brick_slab",
    "immersive_weathering:cracked_polished_blackstone_brick_slab",
    "immersive_weathering:cracked_nether_brick_slab",
    "immersive_weathering:cracked_prismarine_brick_slab",
    "immersive_weathering:mossy_brick_slab",
    "immersive_weathering:cracked_brick_slab",
    "immersive_weathering:cracked_deepslate_tile_slab",
    "immersive_weathering:cracked_deepslate_brick_slab",
    "immersive_weathering:sandy_stone_brick_slab",
    "immersive_weathering:snowy_stone_brick_slab",
    "immersive_weathering:cracked_stone_brick_slab",
    "immersive_weathering:sandy_cobblestone_slab",
    "immersive_weathering:snowy_cobblestone_slab",
    "immersive_weathering:sandy_stone_slab",
    "immersive_weathering:snowy_stone_slab",
    "immersive_weathering:mossy_stone_slab",
    "immersive_weathering:charred_slab",
    "immersive_weathering:waxed_cut_iron_slab",
    "immersive_weathering:waxed_plate_iron_slab",
    "immersive_weathering:rusted_cut_iron_slab",
    "immersive_weathering:rusted_plate_iron_slab",
    "immersive_weathering:weathered_cut_iron_slab",
    "immersive_weathering:weathered_plate_iron_slab",
    "immersive_weathering:exposed_cut_iron_slab",
    "immersive_weathering:exposed_plate_iron_slab",
    "immersive_weathering:cut_iron_slab",
    "immersive_weathering:plate_iron_slab",
    "immersive_weathering:cracked_end_stone_brick_slab",
    "immersive_weathering:cracked_polished_blackstone_brick_slab",
    "immersive_weathering:cracked_nether_brick_slab",
    "immersive_weathering:cracked_prismarine_brick_slab",
    "immersive_weathering:mossy_brick_slab",
    "immersive_weathering:cracked_brick_slab",
    "immersive_weathering:cracked_deepslate_tile_slab",
    "immersive_weathering:cracked_deepslate_brick_slab",
    "immersive_weathering:sandy_stone_brick_slab",
    "immersive_weathering:snowy_stone_brick_slab",
    "immersive_weathering:cracked_stone_brick_slab",
    "immersive_weathering:sandy_cobblestone_slab",
    "immersive_weathering:snowy_cobblestone_slab",
    "immersive_weathering:sandy_stone_slab",
    "immersive_weathering:snowy_stone_slab",
    "immersive_weathering:mossy_stone_slab",
    "immersive_weathering:charred_slab",
  ]);

  event.add("minecraft:walls", [
    "quark:paper_wall",
    "quark:paper_wall_big",
    "quark:paper_wall_sakura",
    "twigs:cobblestone_brick_wall",
    "twigs:mossy_cobblestone_brick_wall",
    "twigs:polished_tuff_brick_wall",
    "twigs:polished_calcite_brick_wall",
    "immersive_weathering:sandy_stone_wall",
    "immersive_weathering:snowy_stone_wall",
    "immersive_weathering:mossy_stone_wall",
    "immersive_weathering:stone_wall",
    "immersive_weathering:cracked_brick_wall",
    "astrological:purpurite_wall",
    "astrological:purpurite_tiles_wall",
    "immersive_weathering:mossy_brick_wall",
    "immersive_weathering:prismarine_brick_wall",
    "astrological:triphylite_wall",
    "astrological:jade_wall",
    "immersive_weathering:cracked_prismarine_brick_wall",
    "immersive_weathering:dark_prismarine_wall",
    "astrological:jade_bricks_wall",
    "astrological:polished_jade_wall",
    "immersive_weathering:cracked_nether_brick_wall",
    "immersive_weathering:cracked_polished_blackstone_brick_wall",
    "astrological:reinforced_jade_wall",
    "astrological:light_jade_wall",
    "immersive_weathering:cracked_end_stone_brick_wall",
    "astrological:light_jade_tiles_wall",
    "astrological:cracked_light_jade_tiles_wall",
    "vintagedelight:salt_brick_wall",
    "vintagedelight:mixed_salt_brick_wall",
    "immersive_weathering:cracked_deepslate_tile_wall",
    "immersive_weathering:cracked_deepslate_brick_wall",
    "immersive_weathering:sandy_stone_brick_wall",
    "immersive_weathering:snowy_stone_brick_wall",
    "immersive_weathering:cracked_stone_brick_wall",
    "immersive_weathering:sandy_cobblestone_wall",
    "immersive_weathering:snowy_cobblestone_wall",
    "copycats:copycat_wall",
    "astrological:selenite_wall",
    "immersiveengineering:wall_slag_brick",
    "immersiveengineering:wall_clinker_brick",
    "deep_aether:raw_clorite_wall",
  ]);

  event.add("minecraft:fences", [
    "immersive_weathering:charred_fence",
    "supplementaries:wicker_fence",
    "immersiveengineering:steel_fence",
    "immersiveengineering:alu_fence",
    "immersiveengineering:treated_fence",
    "copycats:copycat_fence",
    "twilightforest:wrought_iron_fence",
  ]);

  event.add("minecraft:fence_gates", [
    "wizards_reborn:arcane_wood_fence_gate",
    "wizards_reborn:cork_bamboo_fence_gate",
    "wizards_reborn:innocent_wood_fence_gate",
    "immersive_weathering:charred_fence_gate",
    "quark:nether_brick_fence_gate",
    "twilightforest:mining_fence_gate",
    "twilightforest:transformation_fence_gate",
    "twilightforest:time_fence_gate",
    "twilightforest:dark_fence_gate",
    "twilightforest:mangrove_fence_gate",
    "twilightforest:canopy_fence_gate",
    "twilightforest:twilight_oak_fence_gate",
    "ancient_aether:sakura_fence_gate",
    "ancient_aether:highsproot_fence_gate",
    "aether:skyroot_fence_gate",
    "ars_nouveau:archwood_fence_gate",
    "mynethersdelight:powdery_fence_gate",
    "twilightforest:sorting_fence_gate",
    "copycats:copycat_fence_gate",
    "thermal:rubberwood_fence_gate",
  ]);
  event.add("handcrafted:pots", [
    "twigs:magenta_silt_pot",
    "twigs:cyan_silt_pot",
    "twigs:orange_silt_pot",
    "twigs:gray_silt_pot",
    "twigs:pink_silt_pot",
    "twigs:light_blue_silt_pot",
    "twigs:yellow_silt_pot",
    "twigs:black_silt_pot",
    "twigs:silt_pot",
    "twigs:blue_silt_pot",
    "twigs:lime_silt_pot",
    "twigs:brown_silt_pot",
    "twigs:white_silt_pot",
    "twigs:light_gray_silt_pot",
    "twigs:red_silt_pot",
    "twigs:green_silt_pot",
    "twigs:purple_silt_pot",
    "minecraft:flower_pot",
    "minecraft:decorated_pot",
  ]);
  event.add("minecraft:candles", "#supplementaries:candle_holders");
  event.add("c:glass_panes", "#forge:glass_panes");
  event.add("c:glass_panes", [
    "immersive_weathering:tinted_glass_pane",
    "immersive_weathering:frosty_glass_pane",
    "rubinated_nether:ornate_ruby_glass_pane",
  ]);
  event.add("minecraft:banners", "#supplementaries:flags");
  event.add("c:terracotta_shingles", [
    "quark:green_shingles",
    "quark:lime_shingles",
    "quark:yellow_shingles",
    "quark:orange_shingles",
    "quark:red_shingles",
    "quark:brown_shingles",
    "quark:black_shingles",
    "quark:pink_shingles",
    "quark:cyan_shingles",
    "quark:light_blue_shingles",
    "quark:blue_shingles",
    "quark:purple_shingles",
    "quark:magenta_shingles",
    "quark:gray_shingles",
    "quark:light_gray_shingles",
    "quark:white_shingles",
    "quark:shingles",
  ]);
  event.add("minecraft:terracotta", "#c:terracota_shingles");

  event.add("c:dusts", [
    "thermal:ender_pearl_dust",
    "thermal:sawdust",
    "twilightforest:borer_essence",
    "irons_spellbooks:arcane_essence",
    "irons_spellbooks:cinder_essence",
    "enigmaticlegacy:soul_dust",
    "enigmaticlegacy:astral_dust",
    "vintagedelight:salt_dust",
    "immersiveengineering:dust_coke",
    "immersiveengineering:dust_hop_graphite",
    "immersiveengineering:dust_saltpeter",
    "immersiveengineering:dust_steel",
    "immersiveengineering:fertilizer",
    "waystones:warp_dust",
  ]);

  event.add("c:ingots", [
    "enigmaticlegacy:etherium_ingot",
    "enigmaticlegacy:evil_ingot",
    "irons_spellbooks:arcane_ingot",
    "naturesaura:infused_iron",
    "naturesaura:sky_ingot",
    "naturesaura:tainted_gold",
    "naturesaura:depth_ingot",
    "immersiveengineering:ingot_hop_graphite",
    "immersiveengineering:ingot_steel",
  ]);

  event.add("minecraft:buttons", [
    "thermal:rubberwood_button",
    "copycats:copycat_wooden_button",
    "copycats:copycat_stone_button",
    "wizards_reborn:innocent_wood_button",
  ]);

  event.add("minecraft:pressure_plates", "#minecraft:wooden_pressure_plates");
  event.add("minecraft:pressure_plates", [
    "minecraft:stone_pressure_plate",
    "minecraft:polished_blackstone_pressure_plate",
    "quark:obsidian_pressure_plate",
    "aether:holystone_pressure_plate",
    "wizards_reborn:polished_wisestone_pressure_plate",
    "thermal:rubberwood_pressure_plate",
    "minecraft:heavy_weighted_pressure_plate",
    "minecraft:light_weighted_pressure_plate",
    "copycats:copycat_light_weighted_pressure_plate",
    "copycats:copycat_heavy_weighted_pressure_plate",
  ]);

  event.add("minecraft:doors", [
    "silly_oddities:waxed_oxidized_copper_door",
    "silly_oddities:waxed_weathered_copper_door",
    "silly_oddities:waxed_exposed_copper_door",
    "silly_oddities:copper_door",
    "silly_oddities:exposed_copper_door",
    "silly_oddities:weathered_copper_door",
    "silly_oddities:oxidized_copper_door",
    "silly_oddities:waxed_copper_door",
    "immersive_weathering:exposed_iron_door",
    "immersive_weathering:weathered_iron_door",
    "immersive_weathering:rusted_iron_door",
    "immersive_weathering:waxed_iron_door",
    "immersive_weathering:waxed_exposed_iron_door",
    "immersive_weathering:waxed_weathered_iron_door",
    "copycats:copycat_iron_door",
    "ancient_aether:aerogel_glass_door",
    "immersive_weathering:waxed_rusted_iron_door",
  ]);

  event.add("minecraft:trapdoors", [
    "immersive_weathering:waxed_rusted_iron_trapdoor",
    "immersive_weathering:waxed_weathered_iron_trapdoor",
    "immersive_weathering:waxed_exposed_iron_trapdoor",
    "immersive_weathering:waxed_iron_trapdoor",
    "ancient_aether:aerogel_glass_trapdoor",
    "immersive_weathering:exposed_iron_trapdoor",
    "immersive_weathering:weathered_iron_trapdoor",
    "immersive_weathering:rusted_iron_trapdoor",
    "thermal:rubberwood_trapdoor",
    "silly_oddities:waxed_oxidized_copper_trapdoor",
    "silly_oddities:waxed_weathered_copper_trapdoor",
    "silly_oddities:waxed_exposed_copper_trapdoor",
    "silly_oddities:waxed_copper_trapdoor",
    "silly_oddities:oxidized_copper_trapdoor",
    "silly_oddities:weathered_copper_trapdoor",
    "silly_oddities:exposed_copper_trapdoor",
    "silly_oddities:copper_trapdoor",
    "copycats:copycat_iron_trapdoor",
    "copycats:copycat_trapdoor",
  ]);

  event.add("minecraft:wooden_trapdoors", "thermal:rubberwood_trapdoor");

  event.add("waystones:waystones", [
    "waystones:blackstone_waystone",
    "waystones:end_stone_waystone",
    "waystones:deepslate_waystone",
  ]);

});
