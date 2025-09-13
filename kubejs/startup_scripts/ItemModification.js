
ItemEvents.modification(event => {
  
  /*const HelmetDurabilityModifier = 13
  const ChestplateDurabilityModifier = 15
  const LeggingsDurabilityModifier = 16
  const BootsDurabilityModifier = 11*/


  var colors = ['red',
    'blue',
    'white',
    'gray',
    'light_gray',
    'black',
    'purple',
    'magenta',
    'yellow',
    'green',
    'lime',
    'light_blue',
    'blue',
    'orange',
    'pink',
    'brown', 
    'cyan']

  let stacking16 = ['minecraft:potion',
    'minecraft:saddle',
    "minecraft:writable_book",
    "enigmaticlegacy:recall_potion",
    "enigmaticlegacy:mending_mixture",
    "minecraft:splash_potion",
    "minecraft:lingering_potion",
    "minecraft:cake",
    "enigmaticlegacy:common_potion",
    "enigmaticlegacy:common_potion_splash",
    "enigmaticlegacy:common_potion_lingering",
    "enigmaticlegacy:ultimate_potion",
    "enigmaticlegacy:ultimate_potion_splash",
    "enigmaticlegacy:ultimate_potion_lingering"]

  let stacking64 = ["minecraft:snowball",
    "ender_pearl",
    "farmersdelight:cooking_pot",
    'farmersdelight:cooked_rice',
    'farmersdelight:bone_broth',
    'farmersdelight:beef_stew',
    'farmersdelight:chicken_soup',
    'farmersdelight:vegetable_soup',
    'farmersdelight:fish_stew',
    'farmersdelight:fried_rice',
    'farmersdelight:squid_ink_pasta',
    'farmersdelight:ratatouille',
    'farmersdelight:steak_and_potatoes',
    'farmersdelight:vegetable_noodles',
    'farmersdelight:roasted_mutton_chops',
    'farmersdelight:mushroom_rice',
    'farmersdelight:pasta_with_mutton_chop',
    'farmersdelight:pasta_with_meatballs',
    'farmersdelight:bacon_and_eggs',
    'farmersdelight:noodle_soup',
    'farmersdelight:baked_cod_stew',
    'farmersdelight:pumpkin_soup',
    'farmersdelight:grilled_salmon',
    'farmersdelight:roast_chicken_block',
    'farmersdelight:roast_chicken',
    'farmersdelight:stuffed_pumpkin_block',
    'farmersdelight:stuffed_pumpkin',
    'farmersdelight:honey_glazed_ham_block',
    'farmersdelight:honey_glazed_ham',
    'farmersdelight:shepherds_pie_block',
    'farmersdelight:shepherds_pie',
    'farmersdelight:rice_roll_medley_block',
    'farmersdelight:dog_food',
    'farmersdelight:horse_feed',
    'farmersdelight:apple_cider',
    'farmersdelight:hot_cocoa',
    'farmersdelight:milk_bottle',
    'farmersdelight:nether_salad',
    'farmersdelight:mixed_salad',
    'farmersdelight:fruit_salad',
    'farmersdelight:glow_berry_custard',
    'fruitsdelight:mangosteen_tea',
    'biomeswevegone:aloe_vera_juice',
    'sob:cactus_juice',
    'fruitsdelight:lychee_cherry_tea',
    'fruitsdelight:kiwi_juice',
    'fruitsdelight:pear_juice',
    'fruitsdelight:lemon_juice',
    'fruitsdelight:orange_juice',
    'fruitsdelight:hamimelon_juice',
    'sob:glittering_gloop',
    'fruitsdelight:peach_tea',
    'fruitsdelight:mango_tea',
    'fruitsdelight:hawberry_tea',
    'arsdelight:source_berry_tea',
    'arsdelight:frostaya_tea',
    'arsdelight:bombegrante_tea',
    'arsdelight:bastion_tea',
    'arsdelight:mendosteen_tea',
    'create:builders_tea']
 
  let tooltype =['pickaxe','shovel','hoe','axe']
  
  let ArmorSlot = ['helmet','chestplate','boots','leggings']

  let NatureArmorSlot = ['helmet','chest','pants','shoes']

  let ArsArmorSlot =['hood','robes','leggings','boots']

  let ArsDurabilityBuffs = ['sorcerer','arcanist','battlemage']

  let DurabilityBuffs= ['minecraft:iron',
    'minecraft:leather',
    'minecraft:chainmail',
    'minecraft:diamond',
    'minecraft:golden',
    'minecraft:netherite',
    'thermal:diving',
    'aether:zanite',
    'deep_aether:skyjade',
    'forbidden_arcanus:mortem',
    "irons_spellbooks:wandering_magician",
    "irons_spellbooks:pumpkin",
    "thermal:beekeeper",
    "twilightforest:fiery",
    "twilightforest:ironwood",
    "twilightforest:steeleaf",
    "twilightforest:knightmetal",
    "twilightforest:arctic",
    "twilightforest:yeti",
    "kubejs:copper",
    "kubejs:bronze",
    "kubejs:lead",
    "kubejs:silver",
    "aether:gravitite",
    "wizards_reborn:arcane_gold",
    "aether:neptune",
    "aether:obsidian",
    "wizards_reborn:inventor_wizard",
    "aether:phoenix",
    "irons_spellbooks:netherite_mage",
    "irons_spellbooks:cultist",
    "irons_spellbooks:priest",
    "irons_spellbooks:pyromancer",
    "irons_spellbooks:cryomancer",
    "irons_spellbooks:shadowwalker",
    "irons_spellbooks:plagued",
    "irons_spellbooks:archevoker",
    "deep_aether:stormforged",
    "deep_aether:stratus",
    "forbidden_arcanus:draco_arcanus",
    ]

    let UnbreakableArmor = [
      "ancient_aether:valkyrum",
      "thermal:hazmat",
      "deeperdarker:warden",
      "enigmaticlegacy:etherium"
    ]

    let NatureDurabilityBuffs = [
      'infused_iron',
      'sky',
      'depth']
  
  let FireResistant = ["rubinated_nether:ruby",
    "rubinated_nether:ruby_shard",
    "rubinated_nether:molten_ruby",
    "rubinated_nether:molten_ruby_nugget",
    "rubinated_nether:molten_ruby_ore",
    "rubinated_nether:nether_ruby_ore",
    "rubinated_nether:rubinated_blackstone",
    "thermal:ruby",
    "thermal:ruby_block",
    "minecraft:glowstone",
    "minecraft:glowstone_dust",
    "immersiveengineering:ore_uranium",
    "immersiveengineering:raw_uranium",
    "minecraft:nether_quartz_ore",
    "minecraft:quartz"
  ]

  
  
  colors.forEach(color => {
    event.modify("minecraft:"+color+"_bed", item=>{
      item.maxStackSize = 64
    })
  });
  FireResistant.forEach(id => {
    event.modify(id, item=>{
      item.fireResistant = true
    })
  });


  stacking16.forEach((id)=>{

    event.modify(id, item=>{
      item.maxStackSize = 16
    })
  })

  stacking64.forEach((id)=>{

    event.modify(id, item=>{
      item.maxStackSize = 64
    })
  })
  //==========================================Knives
  event.modify("farmersdelight:iron_knife", item=>{
    item.maxDamage = 512
  })

  event.modify("farmersdelight:diamond_knife", item=>{
    item.maxDamage = 2048
  })

  event.modify("farmersdelight:netherite_knife", item=>{
    item.maxDamage = 4096
  })

  event.modify("farmersdelight:golden_knife", item=>{
    item.maxDamage = 512
  })

  event.modify('farmersdelight:flint_knife', item=>{
    item.maxDamage = 128
  })

  //========================================Swords
  event.modify('minecraft:iron_sword', item=>{
    item.maxDamage = 512
  })

  event.modify('minecraft:golden_sword', item=>{
    item.maxDamage = 512
  })

  event.modify('minecraft:wooden_sword', item=>{
    item.maxDamage = 128
  })

  event.modify('minecraft:stone_sword', item=>{
    item.maxDamage = 128
  })

  event.modify('naturesaura:infused_iron_sword', item=>{
    item.maxDamage = 1536
  })

  event.modify('deep_aether:skyjade_sword', item=>{
    item.maxDamage = 1024,
    item.attackDamage = 4
  })

  event.modify('aether:zanite_sword', item=>{
    item.maxDamage = 1024
  })

  event.modify('kubejs:golden_magic_feather', item=>{
    item.maxDamage = 64
  })

  event.modify('kubejs:fiery_magic_feather', item=>{
    item.maxDamage = 512
  })

  event.modify('kubejs:rainbow_magic_feather', item=>{
    item.maxDamage = 1024
  })

  event.modify('minecraft:diamond_sword', item=>{
    item.maxDamage = 2048
  })

  event.modify('minecraft:netherite_sword', item=>{
    item.maxDamage = 4096
  })

  event.modify("twilightforest:fiery_sword",item=>{
    item.attackDamage = 1
  })

  event.modify("tide:blazing_swordfish", item=>{
    item.maxDamage = 1024,
    item.attackSpeed = -2.0,
    item.attackDamage = 2
  })
  ////========================================Tools

  event.modify('aether:hammer_of_kingbdogz', item=>{
    item.maxDamage = 1024
  })
  
  tooltype.forEach((id) => {
    
    event.modify('minecraft:wooden_'+id, item => {
      item.digSpeed = 6,
      item.maxDamage = 128
    })

    event.modify('minecraft:golden_'+id, item=>{
        item.maxDamage = 512,
        item.digSpeed = 8
        // +1 Luck and +2 looting or fortune
    })
    event.modify('minecraft:stone_'+id, item => {
      item.maxDamage = 128
    })

    event.modify('minecraft:iron_'+id, item=>{
      item.maxDamage = 512
      // +0.5 block range
    })

    event.modify('naturesaura:infused_iron_'+id, item=>{
      item.maxDamage = 1536,
      item.digSpeed = 7
      // +1 block range
    })

    event.modify('deep_aether:skyjade_'+id, item=>{
      item.maxDamage = 1024
      // +0.5 block range
    })

    event.modify('aether:zanite_'+id, item=>{
      item.maxDamage = 1024
      // +1 block range
    })

    event.modify('minecraft:diamond_'+id, item=>{
      item.maxDamage = 2048
      // ??+1 block range
    })

    event.modify('minecraft:netherite_'+id, item=>{
      item.maxDamage = 4096
      // ??+1 block range
    })

    event.modify('wizards_reborn:arcane_wood_'+id, item=>{
      item.digSpeed = 3,
      item.maxDamage = 16
      
    })

    event.modify('wizards_reborn:innocent_wood_'+id, item=>{
      item.digSpeed = 5,
      item.maxDamage = 256
      
    })

    event.modify("immersiveengineering:"+id+"_steel", item=>{
      item.digSpeed = 7.5,
      item.maxDamage = -1
      // ??+1 block range
    })

    event.modify("immersiveengineering:sword_steel", item=>{
      item.maxDamage = -1
      // ??+1 block range
    })

    event.modify("kubejs:steel_knife", item=>{
      item.maxDamage = -1
      // ??+1 block range
    })
  })
  
  //========================================Armor

  event.modify("twilightforest:ironwood_helmet", item=>{
    item.armorProtection = 1,
    item.armorKnockbackResistance = 0.05

  })

  event.modify("twilightforest:ironwood_chestplate", item=>{
    item.armorProtection = 5,
    item.armorKnockbackResistance = 0.05
  })

  event.modify("twilightforest:ironwood_leggings", item=>{
    item.armorProtection = 4,
    item.armorKnockbackResistance = 0.05
  })

  event.modify("twilightforest:ironwood_boots", item=>{
    item.armorProtection = 1,
    item.armorKnockbackResistance = 0.05
  })

  event.modify("twilightforest:fiery_helmet", item=>{
    item.armorProtection = 2,
    item.armorToughness = 0
  })

  event.modify("twilightforest:fiery_chestplate", item=>{
    item.armorProtection = 6,
    item.armorToughness = 0
  })

  event.modify("twilightforest:fiery_leggings", item=>{
    item.armorProtection = 5,
    item.armorToughness = 0
  })

  event.modify("twilightforest:fiery_boots", item=>{
    item.armorProtection = 2,
    item.armorToughness = 0
  })

  event.modify("quark:forgotten_hat", item=>{
    item.maxDamage = 110
  })

  event.modify("deep_aether:skyjade_helmet", item=>{
    item.maxDamage = 165
  })

  event.modify("deep_aether:skyjade_boots", item=>{
    item.maxDamage = 195
  })

  event.modify("deep_aether:skyjade_leggings", item=>{
    item.maxDamage = 225
  })
  
  event.modify("deep_aether:skyjade_chestplate", item=>{
    item.maxDamage = 240
  })

  event.modify("minecraft:golden_helmet", item=>{
    item.maxDamage = 165
  })

  event.modify("minecraft:golden_boots", item=>{
    item.maxDamage = 195
  })

  event.modify("minecraft:golden_leggings", item=>{
    item.maxDamage = 225
  })
  
  event.modify("minecraft:golden_chestplate", item=>{
    item.maxDamage = 240
  })

  event.modify('immersiveengineering:glider', item=>{
    item.maxDamage = 512
  })

  event.modify('minecraft:elytra', item=>{
    item.maxDamage = 512
  })

  event.modify('alexsmobs:tarantula_hawk_elytra', item=>{
    item.maxDamage = 1024,
    item.armorProtection = 8
  })

  event.modify("immersiveengineering:armor_steel_helmet", item=>{
    item.maxDamage = -1,
    item.armorProtection = 3
    item.armorToughness = 0
  })

  event.modify("immersiveengineering:armor_steel_chestplate", item=>{
    item.maxDamage = -1,
    item.armorProtection = 7,
    item.armorToughness = 0
  })

  event.modify("immersiveengineering:armor_steel_leggings", item=>{
    item.maxDamage = -1,
    item.armorProtection = 6,
    item.armorToughness = 0
  })

  event.modify("immersiveengineering:armor_steel_boots", item=>{
    item.maxDamage = -1,
    item.armorProtection = 3,
    item.armorToughness = 0
  })

  event.modify('alexsmobs:tarantula_hawk_elytra', item=>{
    item.maxDamage = 1024,
    item.armorProtection = 8
  })

  event.modify("immersiveengineering:armor_faraday_helmet", item=>{
    item.maxDamage = -1
  })

  event.modify("immersiveengineering:armor_faraday_chestplate", item=>{
    item.maxDamage = -1
  })

  event.modify("immersiveengineering:armor_faraday_leggings", item=>{
    item.maxDamage = -1
  })

  event.modify("immersiveengineering:armor_faraday_boots", item=>{
    item.maxDamage = -1
  })

  DurabilityBuffs.forEach(id => {

    ArmorSlot.forEach(slot => {

      event.modify(id+"_"+slot, item=>{

        item.maxDamage = item.maxDamage*2
      })
    });
  });

  UnbreakableArmor.forEach(id => {

    ArmorSlot.forEach(slot => {

      event.modify(id+"_"+slot, item=>{

        item.maxDamage = -1
      })
    });
  });

  NatureDurabilityBuffs.forEach(id => {

    NatureArmorSlot.forEach(slot => {

      event.modify("naturesaura:"+id+"_"+slot, item=>{

        item.maxDamage = item.maxDamage*2
      })
    });
  });

  ArsDurabilityBuffs.forEach(id => {

    ArsArmorSlot.forEach(slot => {

      event.modify("ars_nouveau:"+id+"_"+slot, item=>{

        item.maxDamage = item.maxDamage*2
      })
    });
  });

  ///======================================== Hammers & Excavators

  const AoeTools = ["excavator","mining_hammer"]

  AoeTools.forEach(id => {

    event.modify("kubejs:primitive_"+id, item=>{
      item.maxDamage = 2048
      item.digSpeed = 1.5
    })

    event.modify("kubejs:basic_"+id, item=>{
      item.maxDamage = 4096
      item.digSpeed = 3
    })

    event.modify("kubejs:sturdy_"+id, item=>{
      item.maxDamage = 8192
      item.digSpeed = 5
    })
    
  });
  ///======================================== Other

  event.modify("create:sand_paper", item=>{
    item.maxDamage = 256
  })

  event.modify("create:red_sand_paper", item=>{
    item.maxDamage = 312
  })

  event.modify("create:extendo_grip", item=>{
    item.maxDamage = -1
  })

  event.modify("create:potato_cannon", item=>{
    item.maxDamage = 1024
  })

  
})
