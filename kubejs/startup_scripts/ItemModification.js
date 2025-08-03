
ItemEvents.modification(event => {
  
  let stacking16 = ['minecraft:potion','minecraft:saddle',"minecraft:writable_book","enigmaticlegacy:recall_potion","enigmaticlegacy:mending_mixture","minecraft:splash_potion","minecraft:lingering_potion","minecraft:cake",
    "enigmaticlegacy:common_potion","enigmaticlegacy:common_potion_splash","enigmaticlegacy:common_potion_lingering","enigmaticlegacy:ultimate_potion","enigmaticlegacy:ultimate_potion_splash","enigmaticlegacy:ultimate_potion_lingering"]

  let stacking64 = ["minecraft:snowball","ender_pearl"]
 
  let tooltype =['pickaxe','shovel','hoe','axe']
  
  let ArmorSlot = ['helmet','chestplate','boots','leggings']

  //let NatureArmorSlot = ['helmet','chest','pants','shoes']

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
    "immersiveengineering:armor_faraday",
    "thermal:beekeeper"]

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

  //let NatureDurabilityBuffs = ['infused_iron','sky','depth']
  
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
    item.maxDamage = 1024
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

    event.modify("immersiveengineering:"+id+"_steel"+id, item=>{
      item.digSpeed = 7.5,
      item.maxDamage = -1
      // ??+1 block range
    })
  })
  
  //========================================Armor

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

        item.maxDamage = item.maxDamage*1.5
      })
    });
  });

  
  ///======================================== Other

  event.modify("create:sand_paper", item=>{
    item.maxDamage = 256
  })

  event.modify("create:red_sand_paper", item=>{
    item.maxDamage = 312
  })

  
})
