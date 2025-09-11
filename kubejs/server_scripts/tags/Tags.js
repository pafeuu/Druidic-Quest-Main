 priority: 0

ServerEvents.tags('item', event => {

  event.removeAllTagsFrom([global.nukelist])

  event.add("c:rods/wooden","twigs:twig")
  event.add("farmersdelight:offhand_equipment","#forge:tools/totems")
  event.add("lychee:dispenser_placement","minecraft:iron_block")
  event.add("aether:treated_as_aether_item","#forge:tools")
  event.add("aether:treated_as_aether_item","#forge:armors")
  event.add("supplementaries:cookies",[
    'fruitsdelight:cranberry_cookie',
    'fruitsdelight:persimmon_cookie',
    'fruitsdelight:bayberry_cookie',
    'fruitsdelight:lemon_cookie'])
  
  


  event.add("minecraft:smooth_stone","smooth_stone")

  event.remove("forge:rods/wooden","naturesaura:ancient_stick")
  event.remove("forge:rods/wooden","immersiveengineering:stick_treated")


  event.remove("minecraft:flowers",['farmersdelight:wild_potatoes', 'farmersdelight:wild_rice', 'farmersdelight:wild_beetroots', 'farmersdelight:wild_tomatoes', 'farmersdelight:wild_onions', 'farmersdelight:wild_carrots', 'farmersdelight:wild_cabbages', 'vintagedelight:wild_oats', 'vintagedelight:wild_cucumbers', 'vintagedelight:wild_ghost_peppers', 'vintagedelight:wild_peanuts', 'supplementaries:wild_flax'])
  event.remove("minecraft:small_flowers",['farmersdelight:wild_potatoes', 'farmersdelight:wild_beetroots', 'farmersdelight:wild_tomatoes', 'farmersdelight:wild_onions', 'farmersdelight:wild_carrots', 'farmersdelight:wild_cabbages', 'vintagedelight:wild_oats', 'vintagedelight:wild_cucumbers', 'vintagedelight:wild_ghost_peppers', 'vintagedelight:wild_peanuts', 'supplementaries:wild_flax'])
  event.remove("minecraft:tall_flowers",'farmersdelight:wild_rice')
  event.add("c:hidden_from_recipe_viewers",[global.nukelist])

  event.add("c:hidden_from_recipe_viewers",["kubejs:recipe_changed","ftbfiltersystem:smart_filter","kubejs:unstable_ivy_quartz"])
  
  event.add("curios:charm",["wizards_reborn:wissen_keychain",'wizards_reborn:creative_wissen_keychain'])
  event.add("curios:necklace",["wizards_reborn:wissen_keychain",'wizards_reborn:creative_wissen_keychain'])

  event.remove("curios:curio",["wizards_reborn:wissen_keychain",'wizards_reborn:creative_wissen_keychain'])

  let seed = ["vintagedelight:oat_seeds",
    "vintagedelight:ghost_pepper_seeds",
    "ars_nouveau:sourceberry_bush",
    "biomeswevegone:blueberries",
    "biomeswevegone:oddion_bulb"]

  let flower = ['minecraft:sunflower',
    'minecraft:dandelion',
    'naturesaura:aura_bloom',
    'bloomingnature:wild_sunflower',
    'biomeswevegone:firecracker_flower_bush', 
    'biomeswevegone:orange_amaranth', 
    'biomeswevegone:lollipop_flower', 
    'biomeswevegone:guzmania', 
    'biomeswevegone:yellow_sakura_petals', 
    'biomeswevegone:yellow_tulip', 
    'silly_oddities:wildflowers'
    /*'regions_unexplored:yellow_snowbelle',*/
    /*,'regions_unexplored:alpha_dandelion'*/]

  /*let wiring = ['minecraft:repeater', 'minecraft:calibrated_sculk_sensor', 'minecraft:tripwire_hook', 'minecraft:daylight_detector', 'minecraft:string', 'minecraft:activator_rail', 'minecraft:detector_rail', 'minecraft:powered_rail', 'minecraft:rail', 
                'minecraft:redstone', 'minecraft:piston', 'minecraft:composter', 'create:redstone_link', 'minecraft:sticky_piston', 'minecraft:dispenser', 'minecraft:redstone_lamp', 'minecraft:redstone_torch', 'minecraft:dropper',
                 'minecraft:hopper', 'ars_nouveau:redstone_relay', 'minecraft:lever', 'minecraft:target', 'quark:redstone_randomizer', 'minecraft:comparator','create:controller_rail', 'create:large_cogwheel', 'create:shaft', 'create:cogwheel', 'create:gearbox', 
                 'create:vertical_gearbox', 'create:clutch', 'create:gearshift', 'create:encased_chain_drive', 'create:adjustable_chain_gearshift', 'create:belt_connector', 'create:fluid_pipe', 'create:mechanical_pump', 'create:smart_fluid_pipe', 'create:fluid_valve', 
                 'create:piston_extension_pole', 'create:gantry_shaft', 'create:analog_lever', 'create:pulse_repeater', 'create:pulse_extender', 'create:powered_latch', 'create:powered_toggle_latch', 'create:track','supplementaries:hourglass', 'supplementaries:crank', 
                 'supplementaries:wind_vane', 'supplementaries:cog_block', 'supplementaries:turn_table', 'supplementaries:spring_launcher', 'supplementaries:faucet']*/
  
  let froglights = ["minecraft:ochre_froglight",
    "minecraft:verdant_froglight",
    "minecraft:pearlescent_froglight"]


  event.add("forge:tools/chisels","elementalcraft:chisel")
  event.add("forge:tools/hammers","immersiveengineering:hammer")
  event.add("forge:ingots/andesite_alloy","create:andesite_alloy")
  
  event.remove("twilightforest:portal/activator","minecraft:diamond")
 

  event.remove("forge:gems/ruby","thermal:ruby")
  event.remove("forge:storage_blocks/ruby","thermal:ruby_block")
  event.remove("forge:storage_blocks/gunpowder","thermal:gunpowder_block")
  event.remove("curios:head","immersive_weathering:flower_crown")
  

  event.add("forge:insect",["alexsmobs:maggot",'twilightforest:firefly', 'twilightforest:cicada', 'twilightforest:moonworm'])
  
  event.add("quark:seed_pouch_holdable","forge:seeds")
  event.add("quark:seed_pouch_holdable","minecraft:saplings")

  event.add("forge:tools","#minecraft:tools")
  event.add("forge:tools","quark:abacus")
  event.add("forge:tools","quark:trowel")
  event.add("forge:tools","immersiveengineering:hammer")
  event.add("forge:tools","supplementaries:wrench")
  event.add("forge:tools","minecraft:shears")
  event.add("forge:tools","minecraft:flint_and_steel")
  event.add("forge:tools","#c:tools")

  event.add("immersiveengineering:toolbox/tools","#forge:tools")
  event.add("forge:storage_blocks/potato","farmersdelight:potato_crate")
  event.add("forge:gems",["forbidden_arcanus:rune","forbidden_arcanus:dark_rune"])
  event.add("forge:gems/zanite","#aether:gems/zanite")
  event.add("forge:gems/skyjade","deep_aether:skyjade")
  event.remove("forge:gems/sapphire","thermal:sapphire")
  event.remove("forge:storage_blocks/sapphire","thermal:sapphire_block")
  event.add("forge:storage_blocks/sapphire","kubejs:sapphire_block")

  event.add("minecraft:axes","#forge:tools/axes")
  event.add("minecraft:axes","twilightforest:gold_minotaur_axe")
  event.add("minecraft:axes","twilightforest:diamond_minotaur_axe")
  event.add("minecraft:pickaxes","#forge:tools/pickaxes")
  event.add("minecraft:swords","#forge:tools/swords")
  event.add("minecraft:shovels","#forge:tools/shovels")
  event.add("minecraft:hoes","#forge:tools/hoes")
  
  event.add('forge:ingots/stainless_steel', 'immersiveengineering:ingot_steel')
  event.add('forge:nuggets/stainless_steel', 'immersiveengineering:nugget_steel')
  event.add('forge:storage_blocks/stainless_steel', 'immersiveengineering:storage_steel')
  event.add('forge:rods/stainless_steel', 'immersiveengineering:stick_steel')
  event.add('forge:plates/stainless_steel', 'immersiveengineering:plate_steel')
  event.add('forge:dusts/stainless_steel', 'immersiveengineering:dust_steel')

  event.add('forge:ingots/sky','naturesaura:sky_ingot')
  event.add('forge:ingots/depth','naturesaura:depth_ingot')
  event.add('forge:ingots/tainted_gold','naturesaura:tainted_gold')
  event.add("forge:ingots/infused_iron","naturesaura:infused_iron")
  event.add("forge:storage_blocks/infused_iron","naturesaura:infused_iron_block")
  event.add("forge:storage_blocks/tainted_gold","naturesaura:tainted_gold_block")
  event.add("forge:storage_blocks/sky","naturesaura:sky_ingot_block")
  event.add("forge:storage_blocks/depth","naturesaura:depth_ingot_block")

  event.remove('forge:ingots/steel', 'immersiveengineering:ingot_steel')
  event.remove('forge:nuggets/steel', 'immersiveengineering:nugget_steel')
  event.remove('forge:storage_blocks/steel', 'immersiveengineering:storage_steel')
  event.remove('forge:rods/steel', 'immersiveengineering:stick_steel')
  event.remove('forge:plates/steel', 'immersiveengineering:plate_steel')
  event.remove('forge:dusts/steel', 'immersiveengineering:dust_steel')

  event.add('forge:ingots/andesite','create:andesite_alloy')
  event.add('forge:storage_blocks/andesite','create:andesite_alloy_block')
  event.add('forge:plates/andesite','vintageimprovements:andesite_sheet')

  event.add('immersive_weathering:bark','farmersdelight:tree_bark')

  froglights.forEach(id => {
    event.add("forge:froglights",id)
  });


  flower.forEach(id => {
    event.add('forge:flowers/golden',id)
  });
  
  seed.forEach(id => {
    event.add("quark:seed_pouch_holdable",id)
  });  
  
  event.add("c:hidden_from_recipe_viewers","#forge:tools/skyroot")
  event.add("c:hidden_from_recipe_viewers","immersiveengineering:potion_bucket")
  event.add("c:hidden_from_recipe_viewers","immersiveengineering:shader")
  event.add("c:hidden_from_recipe_viewers","kubejs:depleted_ruby_block")
  event.add("c:hidden_from_recipe_viewers","kubejs:unassembled_clock")
  event.add("c:hidden_from_recipe_viewers","kubejs:unassembled_compass")

  event.add("forge:tools/shields","kubejs:primitive_shield")
  event.add("forge:shields","kubejs:primitive_shield")
  event.add("forge:tools","kubejs:primitive_shield")

  function tool(name)
  {
    event.add('minecraft:axes', name+'_axe')  
    event.add('minecraft:pickaxes', name+'_pickaxe')  
    event.add('minecraft:swords', name+'_sword')  
    event.add('minecraft:shovels', name+'_shovel')  
    event.add('minecraft:hoes', name+'_hoe')  
  }

  function tooltier(name, tier)
  {
    event.add('forge:tools/'+tier, name+'_axe')  
	  event.add('forge:tools/'+tier, name+'_pickaxe')  
	  event.add('forge:tools/'+tier, name+'_sword')  
	  event.add('forge:tools/'+tier, name+'_shovel')  
	  event.add('forge:tools/'+tier, name+'_hoe')  
  }

  tooltier('minecraft:wooden','flint')
  tooltier('minecraft:stone','stone')
  tooltier('kubejs:copper','copper')
  tooltier('kubejs:silver','silver')
  tooltier('kubejs:lead','lead')
  
  tooltier('naturesaura:infused_iron','botanist')
  tooltier('aether:zanite','zanite')
  tooltier('aether:gravitite','gravitite')
  tooltier('aether:holystone','holystone')
  tooltier('aether:skyroot','skyroot')
  tooltier('deep_aether:skyjade','skyjade')
  tooltier('enigmaticlegacy:etherium','etherium')
  tooltier('forbidden_arcanus:draco_arcanus','draco_arcanus')
  tooltier('forbidden_arcanus:reinforced_deorum','reinforced_deorum')
  tooltier('forbidden_arcanus:reinforced_obsidian','reinforced_obsidian')
  tooltier('twilightforest:ironwood','ironwood')
  tooltier('twilightforest:steeleaf','steeleaf')
  tooltier('wizards_reborn:arcane_wood','arcane_wood')
 
	tool('kubejs:copper')
	tool('kubejs:silver')
  tool('kubejs:lead')
  tool('enigmaticlegacy:etherium')
  tool('forbidden_arcanus:draco_arcanus')
  tool('forbidden_arcanus:reinforced_deorum')

  event.add('forge:tools/steel', "immersiveengineering:hoe_steel")  
	event.add('forge:tools/steel', "immersiveengineering:pickaxe_steel")  
	event.add('forge:tools/steel', "immersiveengineering:axe_steel")  
	event.add('forge:tools/steel', "immersiveengineering:shovel_steel")  
	event.add('forge:tools/steel', "immersiveengineering:sword_steel")  

  event.add("forge:storage_blocks/cobblestone","quark:sturdy_stone")

  event.add('druidic_quest:dimensional_tools',['#forge:tools/ironwood',"#forge:tools/zanite","#forge:tools/gravitite","#forge:tools/holystone", 
    "#forge:tools/skyjade","#forge:tools/steeleaf","#forge:tools/ironwood","#forge:tools/blaze","#forge:tools/netherite"])
  
})

