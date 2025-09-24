ServerEvents.tags('block', event => {

  event.add("minecraft:mineable/pickaxe",[
    "mbd2:elemental_binder",
    "mbd2:elemental_evaporator",
    "mbd2:elemental_infuser",
    "mbd2:elemental_extractor",
    "mbd2:elemental_recycler",
    "mbd2:basic_recycler"
  ])

  event.add("minecraft:needs_iron_tool",[
    "mbd2:elemental_binder",
    "mbd2:elemental_evaporator",
    "mbd2:elemental_infuser",
    "mbd2:elemental_extractor",
    "mbd2:elemental_recycler",
  ])

  event.add("minecraft:needs_stone_tool",[
    "mbd2:basic_recycler"
  ])

  
  event.add("druidic_quest:terraformer","#forge:stone")
  event.add("druidic_quest:terraformer","#minecraft:dirt")
  event.add("druidic_quest:terraformer","#minecraft:sand")


  event.add("forge:stripped_logs",['thermal:stripped_rubberwood_log',
    'twilightforest:stripped_sorting_log',
    'twilightforest:stripped_mining_log',
    'twilightforest:stripped_transformation_log',
    'twilightforest:stripped_time_log',
    'twilightforest:stripped_dark_log',
    'twilightforest:stripped_mangrove_log',
    'twilightforest:stripped_canopy_log',
    'twilightforest:stripped_twilight_oak_log',
    'aether_redux:stripped_glacia_log',
    'aether_redux:stripped_crystal_log',
    'aether_redux:stripped_blightwillow_log',
    'aether_redux:stripped_fieldsproot_log',
    'aether:stripped_skyroot_log',
    'forbidden_arcanus:stripped_aurum_log',
    'deep_aether:stripped_sunroot_log',
    'deep_aether:stripped_conberry_log',
    'deep_aether:stripped_cruderoot_log',
    'deep_aether:stripped_yagroot_log',
    'deep_aether:stripped_roseroot_log',
    'architects_palette:stripped_twisted_log',
    'ars_nouveau:stripped_blue_archwood_log',
    'ars_nouveau:stripped_purple_archwood_log',
    'ars_nouveau:stripped_red_archwood_log',
    'ars_nouveau:stripped_green_archwood_log',
    'ancient_aether:stripped_highsproot_log',
    'minecraft:stripped_cherry_log',
    'minecraft:stripped_mangrove_log',
    'minecraft:stripped_dark_oak_log',
    'minecraft:stripped_acacia_log',
    'minecraft:stripped_jungle_log',
    'minecraft:stripped_birch_log',
    'minecraft:stripped_spruce_log',
    'minecraft:stripped_oak_log'])

  event.add("irons_spellbooks:spectral_hammer_mineable",
    ["twigs:schist",
      "twigs:rhyolite",
      "immersiveweathering:mossy_stone",
      "forbidden_arcanus:darkstone",
      'biomeswevegone:dacite',
      'biomeswevegone:white_dacite',
      'biomeswevegone:red_rock',
      'biomeswevegone:rocky_stone',
      'biomeswevegone:mossy_stone'])

  let grass =[/*"regions_unexplored:medium_grass",
    "regions_unexplored:ashen_grass",
    "regions_unexplored:bladed_grass",
    "regions_unexplored:frozen_grass",
    "regions_unexplored:sandy_grass",
    "regions_unexplored:steppe_grass",
    "regions_unexplored:mycotoxic_grass",
    "regions_unexplored:bladed_tall_grass",
    "regions_unexplored:sandy_tall_grass",
    "regions_unexplored:steppe_tall_grass",
    "regions_unexplored:windswept_grass",*/
    "immersive_weathering:frosty_grass",
    "immersive_weathering:dune_grass",
    "biomeswevegone:prairie_grass",
    "biomeswevegone:tall_prairie_grass"]
  

  let pickaxeable = ["#forge:glass",
    "#forge:glass_panes",
    "#chipped:glass",
    "beacon",
    "skeleton_skull",
    "wither_skeleton_skull",
    "player_head",
    "ars_nouveau:agronomic_sourcelink"/*,"elementalcraft:burnt_glass"*/]

  let axeable = ["skeleton_skull","wither_skeleton_skull","player_head","supplementaries:sack","quark:bonded_leather"]

  let hoeable = ["supplementaries:sack","naturesaura:golden_leaves"]

  let knifeable = ["quark:bonded_leather",]
  
  pickaxeable.forEach(id => {
    event.add("minecraft:mineable/pickaxe",id)
  });

  axeable.forEach(id => {
    event.add("minecraft:mineable/axe",id)
  });

  hoeable.forEach(id=>{
    event.add("minecraft:mineable/hoe",id)
  });

  knifeable.forEach(id => {
    event.add("farmersdelight:mineable/knife",id)
  });

  grass.forEach(id => {
    event.add("forge:tall_grass",id)
  });

  
  event.add("minecraft:needs_diamond_tool",[
    "minecraft:spawner",
    "quark:monster_box",
    "minecraft:beacon"
  ])

  const Waystones = [
    "waystones:waystone",
    "waystones:sandy_waystone",
    "waystones:mossy_waystone",
    "waystones:deepslate_waystone",
    "waystones:end_stone_waystone",
    "waystones:blackstone_waystone"]

  event.add("ars_nouveau:break_blacklist",Waystones)

  event.add("create:non_breakable",Waystones)

  event.add("dq:tiab_blacklist",["naturesaura:blast_furnace_booster"])

  

})