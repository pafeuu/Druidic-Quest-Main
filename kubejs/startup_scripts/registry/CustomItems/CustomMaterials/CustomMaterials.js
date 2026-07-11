//priority: 10

StartupEvents.registry('item', item => {

     ///===================================================PLATES===========================================================

  item.create('stone_plate').tag("forge:plates/stone").tag("dq:tier1/component")
  item.create('wooden_plate').tag("forge:plates/wooden").tag("dq:tier1/component")


  ///===================================================GEARS===========================================================
  item.create('wooden_gear').tag('forge:gears/wooden').tag('forge:gears').tag("dq:tier1/component")
  item.create('stone_gear').tag('forge:gears/stone').tag('forge:gears').tag("dq:tier1/component")
  item.create('zinc_gear').tag('forge:gears/zinc').tag('forge:gears').tag("dq:tier1/component")

  item.create('source_alloy_gear').tag('forge:gears/source_alloy').tag('forge:gears').tag("dq:tier2/component")
  item.create('arcanum_alloy_gear').tag('forge:gears/arcanum_alloy').tag('forge:gears').tag("dq:tier2/component")
  item.create('infused_iron_gear').tag('forge:gears/infused_iron').tag('forge:gears').tag("dq:tier2/component")
  item.create('tainted_gold_gear').tag('forge:gears/tainted_gold').tag('forge:gears').tag("dq:tier2/component")
  item.create('ironwood_gear').tag('forge:gears/ironwood').tag('forge:gears').tag("dq:tier2/component")  
  item.create('uranium_gear').tag('forge:gears/uranium').tag('forge:gears').tag("dq:tier2/component")

  item.create('andesite_gear').tag('forge:gears/andesite').tag('forge:gears').tag("dq:tier3/component")
  item.create('brass_gear').tag('forge:gears/brass').tag('forge:gears').tag("dq:tier3/component")
  item.create('knightmetal_gear').tag('forge:gears/knightmetal').tag('forge:gears').tag("dq:tier3/component")
  item.create('fiery_gear').tag('forge:gears/fiery').tag('forge:gears').tag("dq:tier3/component")
  item.create('arcane_gold_gear').tag('forge:gears/arcane_gold').tag('forge:gears').tag("dq:tier3/component")
  item.create('storm_gear').tag('forge:gears/storm').tag('forge:gears').tag("dq:tier3/component")
  item.create('gravitite_gear').tag('forge:gears/gravitite').tag('forge:gears').tag("dq:tier3/component")

  item.create('sky_gear').tag('forge:gears/sky').tag('forge:gears').tag("dq:tier4/component")
  item.create('aluminum_gear').tag('forge:gears/aluminum').tag('forge:gears').tag("dq:tier4/component")
  item.create('stainless_steel_gear').tag('forge:gears/stainless_steel').tag('forge:gears').tag("dq:tier4/component")

  item.create('depth_gear').tag('forge:gears/depth').tag('forge:gears').tag("dq:tier5/component") 
  

  ///===================================================RODS=================================================================

  function registerRod(material,tier)
  {
    item.create(`${material}_rod`)
    .tag("forge:rods")
    .tag(`forge:rods/${material}`)
    .tag(`dq:tier${tier}/component`)
    .texture(`kubejs:item/rods/${material}_rod`)
  }

  registerRod("copper",1)
  registerRod("gold",1)
  registerRod("diamond",1)
  registerRod("brass",1)
  registerRod("ironwood",1)
  registerRod("tin",1)
  registerRod("silver",1)
  registerRod("lead",1)
  registerRod("knightmetal",1)
  registerRod("nickel",1)
  registerRod("bronze",1)
  registerRod("andesite_alloy",1)
  registerRod("zinc",1)
  registerRod("iron",1)


  registerRod("arcanum_alloy",2)
  registerRod("source_alloy",2)
  registerRod("infused_iron",2)
  registerRod("tainted_gold",2)
  registerRod("uranium",2)

 
  registerRod("netherite",3)
  registerRod("fiery",3)
  registerRod("storm",3)
  registerRod("gravitite",3)
  registerRod("arcane_gold",3)
  registerRod("lumium",3)
  registerRod("enderium",3)

  registerRod("steel",4)
  registerRod("aluminum",4)
  registerRod("electrum",4)
  registerRod("sky",4)
  registerRod("depth",5)

  item.create("zinc_tool_handle").tag("forge:rods").tag("dq:tier2/component")

  item.create("reinforced_tool_handle").tag("forge:rods").tag("dq:tier3/component")
  
  item.create("carbon_infused_sturdy_handle").displayName("Carbon Infused Sturdy Handle").tag("forge:rods").tag("dq:tier2/component")

  item.create("heavenly_tool_handle").tag("forge:rods").tag("dq:tier3/component")

  ///===================================================INGOTS===========================================================

  item.create('source_alloy_ingot').tag('forge:ingots').tag('forge:ingots/source_alloy').tag("dq:tier2/component")
  item.create('arcanum_alloy_ingot').tag('forge:ingots').tag('forge:ingots/arcanum_alloy').tag("dq:tier2/component")
  item.create('storm_ingot').tag('forge:ingots').tag('forge:ingots/storm').tag("dq:tier3/component")
  item.create('wrought_iron_ingot').tag('forge:ingots').tag('forge:ingots/wrought_iron')
  item.create('obsidian_ingot').tag('forge:ingots').tag('forge:ingots/obsidian')
  item.create('aquatic_ingot').tag('forge:ingots').tag('forge:ingots/aquatic').tag("aether:neptune_repairing")
  item.create('phoenix_ingot').tag('forge:ingots').tag('forge:ingots/phoenix')
  

  ///===================================================NUGGETS=========================================================

  item.create('ironwood_nugget').tag('forge:nuggets').tag('forge:nuggets/ironwood').tag("dq:tier2/component")
  item.create('infused_iron_nugget').tag('forge:nuggets').tag('forge:nuggets/infused_iron').tag("dq:tier2/component")
  item.create('arcanum_alloy_nugget').tag('forge:nuggets').tag('forge:nuggets/arcanum_alloy').tag("dq:tier2/component")
  item.create('source_alloy_nugget').tag('forge:nuggets').tag('forge:nuggets/source_alloy').tag("dq:tier2/component")
  item.create('tainted_gold_nugget').tag('forge:nuggets').tag('forge:nuggets/tainted_gold').tag("dq:tier2/component")

  item.create('andesite_alloy_nugget').tag('forge:nuggets').tag('forge:nuggets/andesite_alloy').tag("dq:tier3/component")
  item.create('fiery_nugget').tag('forge:nuggets').tag('forge:nuggets/fiery').tag("dq:tier3/component")
  item.create('gravitite_nugget').tag('forge:nuggets').tag('forge:nuggets/gravitite').tag("dq:tier3/component")
  item.create('knightmetal_nugget').tag('forge:nuggets').tag('forge:nuggets/knightmetal').tag("dq:tier3/component")
  item.create('storm_nugget').tag('forge:nuggets').tag('forge:nuggets/storm').tag("dq:tier3/component")

  item.create('sky_nugget').tag('forge:nuggets').tag('forge:nuggets/sky').tag("dq:tier4/component")

  item.create('depth_nugget').tag('forge:nuggets').tag('forge:nuggets/depth').tag("dq:tier5/component")


  ///===================================================GEMS=============================================================

  item.create("berry_quartz").displayName("Berry Quartz").tag("forge:gems")
  item.create("salmon_quartz").displayName("Salmon Quartz").tag("forge:gems")
  item.create("lemon_quartz").displayName("Lemon Quartz").tag("forge:gems").tag("dq:tier1/component")
  item.create("ivy_quartz").displayName("Ivy Quartz").tag("forge:gems")
  item.create("sapphire").tag("forge:gems").tag("dq:tier1/component").tag("forge:gems/sapphire")
  item.create("unstable_ivy_quartz").displayName("Unstable Ivy Quartz").tag("forge:gems")
  item.create("infused_emerald").tag("forge:gems").tag("dq:tier1/component")
  item.create("infused_diamond").tag("forge:gems").tag("dq:tier1/component")
  item.create("infused_amethyst").tag("forge:gems").tag("dq:tier1/component")
  
  item.create("air_infused_arcanum").tag("forge:gems").tag("dq:tier2/component")
  item.create("earth_infused_arcanum").tag("forge:gems").tag("dq:tier2/component")
  item.create("fire_infused_arcanum").tag("forge:gems").tag("dq:tier2/component")
  item.create("water_infused_arcanum").tag("forge:gems").tag("dq:tier2/component")

  ///===================================================DUSTS============================================================
  
  item.create('zinc_dust').tag('forge:dusts').tag('forge:dusts/zinc')
  item.create("primitive_alchemical_dust").tag("forge:dusts").tag("dq:tier1/component").tag("dq:alchemical_dust").glow(true)
  item.create('basic_alchemical_dust').tag('forge:dusts').tag('dq:alchemical_dust').tag("dq:tier2/component").glow(true)
  item.create('improved_alchemical_dust').tag('forge:dusts').tag('dq:alchemical_dust').tag("dq:tier3/component").glow(true)
  item.create('advanced_alchemical_dust').tag('forge:dusts').tag('dq:alchemical_dust').tag("dq:tier4/component").glow(true)
  item.create('ultimate_alchemical_dust').tag('forge:dusts').tag('dq:alchemical_dust').tag("dq:tier5/component").glow(true)
  
  ///===================================================ESSENCE==========================================================

  item.create('nature_essence').displayName('Nature essence').tag('forge:essences').tag("dq:tier2/component")
  item.create('ender_essence').displayName('Ender Essence').tag('forge:essences').tag("dq:tier3/component")
  item.create('light_essence').displayName('Light Essence').tag('forge:essences').tag("dq:tier3/component")
  item.create('dark_essence').displayName('Dark Essence').tag('forge:essences').tag("dq:tier3/component")
  item.create('life_essence').displayName('Life Essence').tag('forge:essences').tag("dq:tier3/component")
  item.create('death_essence').displayName('Death Essence').tag('forge:essences').tag("dq:tier3/component")
  item.create('lightning_essence').tag("forge:essences").tag("dq:tier3/component")
  item.create('electricity_essence').tag("forge:essences").tag("dq:tier4/component")
  item.create('color_essence').tag("forge:essences").tag("dq:tier4/component")

  //item.create("cosmos_essence").tag("forge:essences").tag("dq:tier5/component")
  //item.create("creativity_essence").tag("forge:essences").tag("dq:tier5/component")

  ///===================================================RUNES===========================================================
  
  item.create('large_enchanting_rune').displayName('Large Enchanting Rune').tag("dq:tier3/component")
  item.create('big_enchanting_rune').displayName('Big Enchanting Rune').tag("dq:tier3/component")
  item.create('enchanting_rune').displayName('Enchanting Rune').tag("dq:tier3/component")
  
  item.create('enchanting_rune_of_curses').tag("dq:tier3/component")
  item.create('enchanting_rune_of_fire').tag("dq:tier3/component")
  item.create('enchanting_rune_of_ice').tag("dq:tier3/component")
  item.create('enchanting_rune_of_water').tag("dq:tier3/component")
  item.create('enchanting_rune_of_mana').tag("dq:tier3/component")
  item.create('enchanting_rune_of_speed').tag("dq:tier3/component")
  item.create('enchanting_rune_of_agility').tag("dq:tier3/component")
  item.create('enchanting_rune_of_horror').tag("dq:tier3/component")
  item.create('big_enchanting_rune_of_horror').tag("dq:tier3/component")
  item.create('enchanting_rune_of_pain').tag("dq:tier3/component")
  item.create('big_enchanting_rune_of_pain').tag("dq:tier3/component")
  item.create('enchanting_rune_of_nature').tag("dq:tier3/component")
  item.create('enchanting_rune_of_repulsion').tag("dq:tier3/component")
  item.create('big_enchanting_rune_of_steel').tag("dq:tier3/component")
  item.create('big_enchanting_rune_of_cosmos').tag("dq:tier3/component")
  item.create('big_enchanting_rune_of_wisdom').tag("dq:tier3/component")
  item.create('large_enchanting_rune_of_wisdom').tag("dq:tier3/component")
  item.create('large_enchanting_rune_of_luck').tag("dq:tier3/component")
  item.create('large_enchanting_rune_of_infinity').tag("dq:tier3/component")

  ///==================================================Coal Chunks====================================================

  item.create("coal_chunk").burnTime(200)
  item.create("charcoal_chunk").burnTime(200)
  item.create("coke_chunk").burnTime(400).displayName("Coal Coke Chunk")

  ///====================================================Crystalized Ore ==============================================
  
  //const metalOres = ["iron","gold","tin","copper","nickel","bauxite","uranium","zinc","lead","silver"]
  function crystalizedOre(material,color)
  {
    item.create(`crystalized_${material}_ore`).texture("kubejs:item/crystalized_ore").color(0,color).tag(`forge:crystalized_ores/${material}`)
  }
  crystalizedOre("copper",0xc15a36)
  crystalizedOre("gold",0xfad64a)
  crystalizedOre("iron",0xe9c8b1)
  crystalizedOre("lead",0x2f3061)
  crystalizedOre("silver",0x4d5c6a)
  crystalizedOre("nickel",0xc7b784)
  crystalizedOre("tin",0xa1c6c2)
  crystalizedOre("aluminum",0x7b5848)
  crystalizedOre("uranium",0x5c6951)
  crystalizedOre("zinc",0xb9e9c1)

   ///===================================================MISC===========================================================
  
  item.create("redstone_core").tag("dq:tier3/component")
  item.create("raw_gravitite").tag("dq:tier3/component")
  item.create("gravitite_ingot").tag("dq:tier3/component").tag("forge:ingots").tag("forge:ingots/gravitite")
  item.create("elemental_cloth").tag("dq:tier3/component")
  item.create("corrupted_soul").tag("dq:tier1/component")
  item.create("enchanted_soul").tag("dq:tier1/component")
  item.create("spawner_part").tag("dq:tier2/component")
  item.create('natural_clay_blend').tag('dq:tier3/component')
  item.create('blast_brick').tag('dq:tier3/component')
  item.create('arcane_leather').tag('dq:tier0/component')
  item.create('recipe_changed')
  item.create("sunbird_feather")
  item.create('primitive_handle')
  item.create('pipe_sealant')
  item.create('shapeshifting_root').displayName('Shapeshifting Root')
  item.create('greater_shapeshifting_root').displayName('Greater Shapeshifting Root')
  item.create("gold_upgrade_parts").displayName("Gold Upgrade Parts")
  item.create("steel_upgrade_parts")
  item.create("bronze_upgrade_parts")
  item.create("steeleaf_upgrade_parts")
  item.create("etherium_upgrade_parts")
  item.create("skyjade_upgrade_parts")
  item.create("arcane_gold_upgrade_parts")
  item.create("zanite_upgrade_parts")
  item.create("soulstrider_upgrade_parts")
  item.create("skyseeker_upgrade_parts")
  item.create("arcane_plating")
  item.create("battlemage_cloth")
  item.create('unassembled_clock').displayName('Unassembled Clock')
  item.create('unassembled_compass').displayName('Unassembled Compass')
  item.create("dimension_ripper").displayName("Dimension Ripper").tag("twilightforest:portal/activator")
  item.create('sapling_ball').displayName('Sapling Ball')
  item.create('magic_book').displayName('Magical Book')
  item.create("twilight_tome")
  item.create('fiery_clay_blend').displayName('Fiery Clay Blend')
  item.create('basic_token').displayName('Basic Token')
  item.create('eternity_token').displayName('Token of Eternity').tag("dq:tier4/component").glow(true)
  item.create("elemental_core").rarity("legendary")
  item.create("incomplete_cake").tag("c:hidden_from_recipe_viewers")

  ///==================================================SPICES===========================================================

  item.create('nether_spice').tag("dq:spices")
  item.create('heavenly_spice').tag("dq:spices")
  item.create('aquatic_spice').tag("dq:spices")
  item.create('underground_spice').tag("dq:spices")
  item.create('cosmic_spice').tag("dq:spices")
  

})