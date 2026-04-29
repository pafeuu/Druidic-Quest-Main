
ItemEvents.tooltip( tooltip => { 

  // ========================================== Texture Credits ==========================================
  tooltip.add(["kubejs:archers_glove",
               "kubejs:rotten_flesh_block",
               'immersiveengineering:armor_steel_helmet',
               'immersiveengineering:armor_steel_chestplate',
               'immersiveengineering:armor_steel_leggings',
               'immersiveengineering:armor_steel_boots'],Text.gray("Texture by Qwerty"))

  tooltip.add(["kubejs:inert_alloy_ingot",
               "kubejs:ring_travel",
               "kubejs:copper_pickaxe",
               "kubejs:copper_shovel",
               "kubejs:copper_axe",
               "kubejs:copper_hoe",
               "kubejs:copper_sword",
               "kubejs:silver_pickaxe",
               "kubejs:silver_shovel",
               "kubejs:silver_hoe",
               "kubejs:silver_axe",
               "kubejs:silver_sword",
               "kubejs:lead_sword",
               "kubejs:lead_pickaxe",
               "kubejs:lead_shovel",
               "kubejs:lead_hoe",
               "kubejs:lead_axe",
               "kubejs:enchanting_rune",
               "kubejs:big_enchanting_rune",
               "kubejs:large_enchanting_rune"],Text.gray("Texture by MalcomRiley"))

  tooltip.add(["kubejs:travelers_belt"],Text.gray("Texture by Futureazoo"))

  tooltip.add([
    "kubejs:the_terraformer",
    "kubejs:wooden_crucifix",
    "kubejs:metal_crucifix",
    "kubejs:bejeweled_crucifix"
  ],Text.gray("Texture by SenorRandom"))

  tooltip.add("kubejs:sapphire",Text.gray("Texture by JuniDeerGirl"))

  tooltip.add("kubejs:fiery_clay_blend",Text.red("Requires Infernal Smelter multiblock with a Soul Core to be smelted"))
  tooltip.add(["kubejs:bear_totem",
               "kubejs:crab_totem",
               "kubejs:frog_totem",
               "kubejs:bunny_totem",
               "kubejs:tiger_totem",
               "kubejs:penguin_totem",
               "kubejs:roadrunner_totem",
               "kubejs:leafcutter_ant_totem",
               "kubejs:bronze_helmet",
               "kubejs:bronze_chestplate",
               "kubejs:bronze_leggings",
               "kubejs:bronze_boots",
               'kubejs:cactus_boots',
               'kubejs:cactus_leggings',
               'kubejs:cactus_helmet',
               'kubejs:cactus_chestplate',
               'kubejs:uranium_boots',
               'kubejs:uranium_leggings',
               'kubejs:uranium_helmet',
               'kubejs:uranium_chestplate',
               "kubejs:blizz_totem",
               "kubejs:blaze_totem",
               "kubejs:basalz_totem",
               "kubejs:blitz_totem"
  ],Text.gray("Texture by Gyldanword"))

  tooltip.add(["kubejs:arcane_alloy_ingot",
               "kubejs:neptun_ingot",
               "kubejs:phoenix_ingot",
               "kubejs:obsidian_ingot",
               "kubejs:copper_helmet",
               "kubejs:copper_chestplate",
               "kubejs:copper_leggings",
               "kubejs:copper_boots",
               "kubejs:silver_helmet",
               "kubejs:silver_chestplate",
               "kubejs:silver_leggings",
               "kubejs:silver_boots",
               "kubejs:lead_helmet",
               "kubejs:lead_chestplate",
               "kubejs:lead_leggings",
               "kubejs:lead_boots",
              "kubejs:dark_essence",
              "kubejs:light_essence",
              "kubejs:dimension_ripper",
              "kubejs:obsidian_ingot"],Text.gray("Texture by Farland1ng"))

  // ========================================== Villager Trading =========================================
  tooltip.add(['irons_spellbooks:common_ink',
               'ars_nouveau:potion_flask',
               'explorerscompass:explorerscompass',
               'enigmaticlegacy:cosmic_cake',
               'enigmaticlegacy:mending_mixture'],Text.green('Available through villager trading'))

  // ========================================== Effortless Building ======================================

  tooltip.add(["effortlessbuilding:reach_upgrade1",
              "effortlessbuilding:reach_upgrade2",
              "effortlessbuilding:reach_upgrade3"
  ],Text.green("Only works in effortless building mode!"))
  
  ///=========================================== Offhand ===============================================
  
  tooltip.addAdvanced("#forge:tools/totems", (item, advanced, text) => {
    text.add(1, Text.of('Only works in the offhand').gray()) 
  })

  tooltip.addAdvanced("#forge:flowers/golden", (item, advanced, text) => {
    text.add(1, Text.of('Golden Flower').gold()) 
  })

  tooltip.addAdvanced("kubejs:basalz_totem", (item, advanced, text) => {
    text.add(2, Text.of('You can see better underground').darkPurple()) 
  })

  tooltip.addAdvanced("kubejs:blizz_totem", (item, advanced, text) => {
    text.add(2, Text.of('You feel more comfortable in cold biomes').darkPurple()) 
  })

  tooltip.addAdvanced("kubejs:blaze_totem", (item, advanced, text) => {
    text.add(2, Text.of('You feel more comfortable in hot biomes').darkPurple()) 
  })

  tooltip.addAdvanced("kubejs:blitz_totem", (item, advanced, text) => {
    text.add(2, Text.of('You feel more powerful during rains and thunderstorms').darkPurple()) 
  })

  tooltip.addAdvanced([
    'kubejs:end_key', 
    'kubejs:aether_key',
    "immersiveengineering:ore_aluminum",
    'kubejs:ultimate_alchemical_dust',
    'naturesaura:calling_spirit',
    'naturesaura:rf_converter',
    'apotheosis:library',
    'apotheosis:ender_library',
    "kubejs:color_essence",
    'kubejs:aluminum_pickaxe',
    'kubejs:aluminum_axe',
    'kubejs:aluminum_shovel',
    'kubejs:aluminum_hoe',
    'kubejs:aluminum_sword'], (item, advanced, text) => {
    text.add(1, Text.of('Not yet properly implemented').red()) 
  })

  tooltip.addAdvanced([
    "thermal:coal_coke",
    "kubejs:nature_essence",
    "wizards_reborn:arcane_gold_ingot",
    "thermal:steel_ingot"], (item, advanced, text) => {
    text.add(1, Text.of('Picking up this item for the first time increases the difficulty and unlocks new dimension').red()) 
  })

  /*tooltip.add(['kubejs:roadrunner_totem',
               "kubejs:tiger_totem",
               "kubejs:frog_totem",
               "kubejs:penguing_totem",
               "kubejs:wooden_crucifix",
               "kubejs:metal_crucifix",
               "kubejs:bejeweled_crucifix",
               "kubejs:penguin_totem",
               "kubejs:bear_totem","#forge:tools/totem"],Text.gray("Works only in the offhand"))*/

  //=========================================== Upgrading =============================================
  
  tooltip.addAdvanced(["solonion:lunchbag",
               "solonion:lunchbox",
               "solonion:golden_lunchbox",
               "supplementaries:sack",
               "immersiveengineering:crate",
               "irons_spellbooks:copper_spell_book",
               "irons_spellbooks:iron_spell_book",
               "irons_spellbooks:gold_spell_book",
               "irons_spellbooks:rotten_spell_book"],(item, advanced, text) => {
                text.add(1, Text.of("Make sure to empty it before upgrading!").red())
               })
  
  // ======================================== AOE tools ===============================================

  tooltip.addAdvanced(["kubejs:primitive_excavator",
    "kubejs:primitive_mining_hammer"],(item, advanced, text) => {
                text.add(1, Text.of("Mines in a 3x3.").blue())
               })
  
  tooltip.addAdvanced(["kubejs:basic_excavator",
    "kubejs:basic_mining_hammer"],(item, advanced, text) => {
                text.add(1, Text.of("Mines in a 5x5.").blue())
               })

  tooltip.addAdvanced(["kubejs:sturdy_excavator",
    "kubejs:sturdy_mining_hammer"],(item, advanced, text) => {
                text.add(1, Text.of("Mines in a 7x7.").blue())
               })

  //========================================= Lunch Boxes ==============================================
  function lunchBoxTooltip(id,slots)
  {
    tooltip.addAdvanced(id,(item, advanced, text) => {
                text.add(1, Text.of(slots+" Slots").white())
               })
  }

  lunchBoxTooltip("solonion:lunchbag",5)
  lunchBoxTooltip("solonion:lunchbox",9)
  lunchBoxTooltip("solonion:golden_lunchbox",14)
  lunchBoxTooltip("kubejs:emerald_lunchbox",18)
  lunchBoxTooltip("kubejs:life_lunchbox",18)
  
  //======================================= Smithing Templates ==============================
 
  function SmithingTemplate(Template,UpgradeTo,UpgradeFrom,Material,Color)
  {
      tooltip.addAdvanced(Template,(item, advanced, text) => {
                text.add(1, Text.of(UpgradeTo+" Template").gray())
                text.add(2, Text.of(" "))
                text.add(3, Text.of("Applies To:").gray())
                text.add(4, Text.of(" "+UpgradeFrom+" Equipment").color(Color))
                text.add(5, Text.of("Ingredients:").gray())
                text.add(6, Text.of(" "+Material).color(Color))
               })
  }

  SmithingTemplate("kubejs:phoenix_upgrade_smithing_template","Phoenix","Fiery","Phoenix Ingot",0xfc9424)
  SmithingTemplate("kubejs:gold_upgrade_smithing_template","Gold","Silver","Gold Upgrade Parts",0x64747c)
  SmithingTemplate("kubejs:skyseeker_upgrade_smithing_template","Skyseeker","Netherite","Skyseeker Upgrade Parts",0x473c3e)
  SmithingTemplate("kubejs:depth_upgrade_smithing_template","Soulstrider","Obsidian","Soulstrider Upgrade Parts",0x543474)
  SmithingTemplate("kubejs:engineer_upgrade_smithing_template","Engineer","Leather","Tough Fabric",0x74492e)
  SmithingTemplate("kubejs:botanist_upgrade_smithing_template","Botanist","Iron","Infused Ingot",0xb8b8b8)
  SmithingTemplate("kubejs:fiery_upgrade_smithing_template","Fiery","Iron","Fiery Sheet",0xb8b8b8)
  SmithingTemplate("kubejs:bronze_upgrade_smithing_template","Bronze","Copper","Bronze Upgrade Parts",0xd5714d)
  SmithingTemplate("kubejs:obsidian_upgrade_smithing_template","Obsidian","Knightmetal","Obsidian Ingot",0xa4b48c)
  SmithingTemplate("kubejs:knightmetal_upgrade_smithing_template","Knightmetal","Lead","Knightmetal Sheet",0x545c7c)
  SmithingTemplate("kubejs:scarecrow_upgrade_smithing_template","Scarecrow","Wandering Magician","Arcane Cloth",0x445c8c)
  SmithingTemplate("kubejs:steeleaf_upgrade_smithing_template","Steeleaf","Ironwood","Steeleaf Upgrade Parts",0x847d6c)
  SmithingTemplate("kubejs:wandering_magician_upgrade_smithing_template","Wandering Magician","Leather","Arcane Leather",0x74492e)
  SmithingTemplate("kubejs:skyjade_upgrade_smithing_template","Skyjade","Silver","Skyjade Upgrade Parts",0x64747c)
  SmithingTemplate("kubejs:zanite_upgrade_smithing_template","Zanite","Lead","Zanite Upgrade Parts",0x545c7c)
  SmithingTemplate("kubejs:steel_upgrade_smithing_template","Steel","Botanist","Steel Upgrade Parts",0x2ea633)
  SmithingTemplate("kubejs:arcane_gold_upgrade_smithing_template","Arcane Gold","Gold","Arcane Gold Upgrade Parts",0xe8dd48)
  SmithingTemplate("kubejs:netherite_battlemage_upgrade_smithing_template","Netherite Battlemage","Netherite","Battlemage Cloth",0x473c3e)
  SmithingTemplate("kubejs:arcane_fortress_upgrade_smithing_template","Arcane Fortress","Arcane Gold","Arcane Plating",0xb67b66)
  SmithingTemplate("kubejs:valkyrum_upgrade_smithing_template","Valkyrum","Skyseeker","Valkyrum Upgrade Parts",0x05efd6)
  SmithingTemplate("kubejs:etherium_upgrade_smithing_template","Etherium","Stormforged","Etherium Upgrade Parts",0x6c94b4)
  SmithingTemplate("kubejs:tyr_upgrade_smithing_template","Tyr","Draco Arcanus","Aquatic Dragon Scale",0x9d1faa)
  SmithingTemplate("kubejs:draco_arcanus_upgrade_smithing_template","Draco Arcanus","Obsidian","Dragon Scale",0x543474)
  
  

  //======================================= Custom Tools ====================================== 
    
  tooltip.addAdvanced("kubejs:stone_claymore", (item, advanced, text) => {
    if (!tooltip.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.gold('10% chance to apply Bleeding on hit'))
    }
  })

  tooltip.addAdvanced("twilightforest:glass_sword", (item, advanced, text) => {
    if (!tooltip.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.gold('Applies Bleeding on hit'))
    }
  })

  tooltip.addAdvanced("kubejs:copper_trident", (item, advanced, text) => {
    if (!tooltip.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.gold('20% chance to apply Thunderstorm on hit'))
    }
  })

  tooltip.addAdvanced("kubejs:iron_scythe", (item, advanced, text) => {
    if (!tooltip.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.gold('15% chance to apply Bleeding on hit'))
    }
  })

  tooltip.addAdvanced("kubejs:royal_guard_sword", (item, advanced, text) => {
    if (!tooltip.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.gold('Right click on a carved pumpkin to summon a Guard for a cost of 100 durability'))
    }
  })

  tooltip.addAdvanced("tide:blazing_swordfish", (item, advanced, text) => {
    if (!tooltip.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.gold('Right click while sneaking to empower yourself with fire!'))
    }
  })

  tooltip.addAdvanced("kubejs:golden_magic_feather", (item, advanced, text) => {
    if (!tooltip.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.gold('You can insta mine obsidian by right clicking'))
    }
  })

  tooltip.addAdvanced("kubejs:fiery_magic_feather", (item, advanced, text) => {
    if (!tooltip.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.gold('You can insta mine obsidian by right clicking'))
      text.add(2, Text.red('Right clicking netherrack in the nether will cause an explosion!'))
    }
  })

  tooltip.addAdvanced("kubejs:rainbow_magic_feather", (item, advanced, text) => {
    if (!tooltip.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.gold('You can insta mine obsidian by right clicking'))
      text.add(2, Text.red('Right clicking netherrack in the nether will cause an explosion!'))
      text.add(3, Text.lightPurple('Right clicking bedrock on the nether roof will destroy it!'))
      text.add(3, Text.darkGreen('Right clicking Maze Blocks will destroy it!'))
    }
  })

  tooltip.addAdvanced("kubejs:the_terraformer", (item, advanced, text) => {
    if (!tooltip.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.green('Right clicking stone and dirt like blocks will turn them into compost!'))
      text.add(2, Text.red('Only works above sea level!'))
    }
  })

  tooltip.addAdvanced("kubejs:broken_key", (item, advanced, text) => {
    if (!tooltip.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.gold("Right click a spawner to destroy it and obtain infused diamond!"))
    }
  })

  tooltip.addAdvanced("kubejs:twilight_key", (item, advanced, text) => {
    if (!tooltip.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.gold("Right click a spawner in The Twilight Forest to destroy it and obtain rare items and supplies!"))
    }
  })

  tooltip.addAdvanced("kubejs:overworld_key", (item, advanced, text) => {
    if (!tooltip.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.gold("Right click a spawner in The Overworld to destroy it and obtain rare items and supplies!"))
    }
  })

  tooltip.addAdvanced(["minecraft:elytra","immersiveengineering:glider"],(item, advanced,text)=>{
    text.add(1, [Text.of("Cant use fireworks while wearing this").blue()])
  })

  tooltip.addAdvanced("supplementaries:bellows", (item, advanced, text) => {
    if (!tooltip.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.lightPurple("Speeds up furnaces"))
      text.add(2, Text.darkPurple("Speeds up copper aging"))
      text.add(3, Text.lightPurple("Pushes entities away"))
    }
  })

  tooltip.addAdvanced("kubejs:bouncy_boots_cover", (item, advanced, text) => {
    if (!tooltip.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.lightPurple("Grants the Bounce effect when worn"))
    }
  })

  tooltip.addAdvanced("kubejs:sturdy_boots_cover", (item, advanced, text) => {
    if (!tooltip.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.lightPurple("Grants the Knockback Resistance effect when worn"))
    }
  })

  tooltip.addAdvanced("kubejs:silent_boots_cover", (item, advanced, text) => {
    if (!tooltip.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.lightPurple("Grants the Sculk Affinity effect when worn"))
    }
  })

  tooltip.addAdvanced("kubejs:mycelial_hoe", (item, advanced, text) => {
    if (!tooltip.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.lightPurple("Slowly replenishes hunger and saturation when held"))
    }
  })

  tooltip.add("mbd2:infernal_smelter",[Text.red("Only works in the nether")])

  tooltip.add([global.nukelist],[Text.red("Item disabled"),Text.red("Report to the modpack dev if you got this")])
  tooltip.add("kubejs:recipe_changed",Text.red("This recipe has been changed! Check EMI for more information!"))
  tooltip.add("immersiveengineering:cushion",Text.green("Negates fall damage"))
  tooltip.add("quark:seed_pouch",Text.green("Shift-Right Click to plant in a 3x3!"))

  tooltip.add("ars_nouveau:experience_gem",Text.green("Grants 3 experience points!"))
  tooltip.add("minecraft:experience_bottle",Text.green("Grants between 3 to 11 experience points!"))
  tooltip.add("ars_nouveau:greater_experience_gem",Text.green("Grants 12 experience points!"))
  tooltip.add("create:experience_nugget",Text.green("Grants 3 experience point!"))
  tooltip.add("sob:exp_candy",Text.green("Grants 10 experience point!"))
  tooltip.add("sob:bustling_brew",Text.green("Grants 50 experience point!"))
  tooltip.add("create_sa:heap_of_experience",Text.green("Grants 12 experience points!"))
  tooltip.add("#dq:soul_harvester",[Text.red("Harvests souls")])


  tooltip.add("aether:agility_cape",[Text.gold("When on back:"),Text.blue("+0.5 step height")])
  tooltip.add("aether:valkyrie_cape",[Text.gold("When on back:"),Text.blue("Grants slow falling")])
  tooltip.add("aether:golden_feather",[Text.gold("When worn:"),Text.blue("Grants slow falling")])
  tooltip.add("aether:swet_cape",[Text.gold("When on back:"),Text.blue("Allows riding Swets")])
  tooltip.add("aether:invisibility_cloak",[Text.gold("When on back:"),Text.blue("Makes you invisible")])

  tooltip.add("aether:shield_of_repulsion",[Text.gold("When on body:"),Text.blue("Repels enemy projectiles")])
  tooltip.add("ancient_aether:shield_of_remediation",[Text.gold("When on body:"),Text.blue("Grants immunity to Inebration")])
  tooltip.add("ancient_aether:shield_of_inebriation",[Text.gold("When on body:"),Text.blue("50% chance to inflict Inebration on attacker")])

  tooltip.add("aether:iron_bubble",[Text.gold("When worn as charm:"),Text.blue("Allows underwater breathing")])

  tooltip.add("deep_aether:spooky_ring",[Text.gold("When worn as ring:"),Text.blue("Grants extra damage depending on time of the night(most at midnight)")])
  tooltip.add("aether:zanite_ring",[Text.gold("When worn as ring:"),Text.blue("Allows you to mine faster"),Text.red("Does not last long!")])
  tooltip.add("aether:zanite_pendant",[Text.gold("When worn as ring:"),Text.blue("Allows you to mine faster"),Text.red("Does not last long!")])
  tooltip.add("deep_aether:skyjade_ring",[Text.gold("When worn as ring:"),Text.blue("Allows you to mine faster"),Text.red("Does not last long!")])
  tooltip.add("aether:ice_ring",[Text.gold("When worn as ring:"),Text.blue("Freezes water and lava beneath you")])
  tooltip.add("kubejs:mycelial_ring",[Text.gold("When worn as ring:"),Text.blue("Very slowly replenishes hunger and saturation when held")])
  tooltip.add("aether:ice_pendant",[Text.gold("When around neck:"),Text.blue("Freezes water and lava beneath you")])
  tooltip.add("kubejs:ruby_ring",[Text.gold("When worn as ring:"),Text.blue("Heals you very slowly")])
  tooltip.add("kubejs:ruby_pendant",[Text.gold("When around neck:"),Text.blue("Heals you very slowly")])

  tooltip.add("aether:sentry_boots",Text.blue("Grants immunity to fall damage"))
  tooltip.add(["deep_aether:skyjade_boots",
    "deep_aether:skyjade_chestplate",
    "deep_aether:skyjade_leggings",
    "deep_aether:skyjade_helmet"],Text.blue("Loses armor value as the durability goes down"))
    
  tooltip.add(["aether:zanite_pickaxe",
    "aether:zanite_axe",
    "aether:zanite_shovel",
    "aether:zanite_hoe",
    "aether:zanite_sword"],Text.blue("Gains effectiveness as the durability goes down"))

  tooltip.add(["deep_aether:skyjade_pickaxe",
    "deep_aether:skyjade_axe",
    "deep_aether:skyjade_shovel",
    "deep_aether:skyjade_sword"],Text.blue("Loses effectiveness as the durability goes down"))
  
 
  tooltip.add("aether:pig_slayer",Text.blue("Deals extra damage to pigs and piglike creatures!"))
  tooltip.add("deep_aether:afterburner",Text.blue("Hold right click to shoot a barrage of fireballs!"))

  //tooltip.add("#druidic_quest:dimensional_tools",[Text.darkPurple("Tool made from materials outside of the main realm!"),Text.blue("Combine it with extradimensional eye"),Text.blue("in the crafting grid to apply telekinesis enchant!")])
  
  tooltip.add("twilightforest:transformation_powder",[Text.blue("Can be used by a Dispenser")])
  tooltip.addAdvanced([
    "immersiveengineering:armor_steel_helmet",
    "immersiveengineering:armor_steel_chestplate",
    "immersiveengineering:armor_steel_leggings",
    "immersiveengineering:armor_steel_boots",
    "immersiveengineering:pickaxe_steel",
    "immersiveengineering:shovel_steel",
    "immersiveengineering:axe_steel",
    "immersiveengineering:hoe_steel",
    "immersiveengineering:sword_steel",
    'immersiveengineering:armor_faraday_helmet',
    'immersiveengineering:armor_faraday_chestplate',
    'immersiveengineering:armor_faraday_leggings',
    'immersiveengineering:armor_faraday_boots',
    "create:extendo_grip",
    "kubejs:steel_shears",
    "kubejs:steel_knife",
    'thermal:hazmat_helmet',
    'thermal:hazmat_chestplate',
    'thermal:hazmat_leggings',
    'thermal:hazmat_boots',
    'enigmaticlegacy:etherium_helmet',
    'enigmaticlegacy:etherium_chestplate',
    'enigmaticlegacy:etherium_leggings',
    'enigmaticlegacy:etherium_boots',
    'deeperdarker:warden_helmet',
    'deeperdarker:warden_chestplate',
    'deeperdarker:warden_leggings',
    'deeperdarker:warden_boots',
    'ancient_aether:valkyrum_helmet',
    'ancient_aether:valkyrum_chestplate',
    'ancient_aether:valkyrum_leggings',
    'ancient_aether:valkyrum_boots',
    "constructionwand:stone_wand",
    "constructionwand:iron_wand",
    "constructionwand:diamond_wand",
    "constructionwand:infinity_wand",
    "kubejs:mycelial_hoe",
    "aether:flaming_sword",
    "ancient_aether:ancient_sword",
    "aether:holy_sword",
    "aether:lightning_sword",
    "kubejs:lumber_axe"],
    (item, advanced, text) => {
    text.add(1, Text.of("Unbreakable").blue())
    })
  
  
  tooltip.addAdvanced([
    "kubejs:fiery_axe",
    "kubejs:fiery_shovel",
    "kubejs:fiery_hoe",
    "kubejs:phoenix_axe",
    "kubejs:phoenix_pickaxe",
    "kubejs:phoenix_shovel",
    "kubejs:phoenix_hoe"
  ],
  (item,advanced,text)=>{
    text.add(1,Text.of("Auto-smelting").gray())
  })

  tooltip.addAdvanced([
    "kubejs:phoenix_sword"
  ],
  (item,advanced,text)=>{
    text.add(1,Text.of("Burns targets").gray())
  })
  
  tooltip.addAdvanced('kubejs:warp_scroll', (item, advanced, text) => {
    
    const posX = item.nbt?.an_warp_scroll?.x
    const posY = item.nbt?.an_warp_scroll?.y
    const posZ = item.nbt?.an_warp_scroll?.z
    const dim = item.nbt?.an_warp_scroll?.dim

    if(item.nbt)
    {
      text.add(1,[Text.white(`X:${posX} Y:${posY} Z:${posZ}`)])
      text.add(2,Text.of(Text.white(dim)))
    }
    else
    {
      text.add(1,Text.of(Text.white("Use while sneaking to set a location.")))
    } 
  })

  tooltip.addAdvanced('kubejs:capturing_gem', (item, advanced, text) => {
    
    if(item.nbt)
    {
      const entity = item.nbt.get("entity")
      text.add(
            Text.of("Captured: ").blue()
            .append(Text.of(entity).red())
        )
    }  
  })

  tooltip.add("sob:echo_rock_candy",[Text.blue("Sets your health to 5 hearts and gives you back an Echo Shard")])
  
  //========================Enigmatic Legacy ========================

  tooltip.add("enigmaticlegacy:ocean_stone",[Text.gold("When equipped as Spellstone:"),Text.blue("+10 Cold Resistance"),Text.red("-10 Fire Resistance")])
  
  //========================Rubinated Nether ========================

  tooltip.add("rubinated_nether:ruby_brazier",[Text.blue("Grants fire resistance to nearby players")] )

  //=======================Generators================================

  tooltip.add("#dq:generators/wissen",Text.aqua("Wissen Generator"))
  tooltip.add("#dq:generators/aura",Text.green("Aura Generator"))
  tooltip.add("#dq:generators/source",Text.darkPurple("Source Generator"))
  tooltip.add("#dq:generators/stress",Text.yellow("Stress Generator"))

  //==========================Natures Aura===========================

  tooltip.addAdvanced("naturesaura:grated_chute", (item, advanced, text) => {
    if (!tooltip.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.blue('Apply filters by placing an item frame on the side.'))
      text.add(2, Text.blue('Right click the hopper to reverse the filter.'))
    }
  })

  tooltip.addAdvanced("naturesaura:hopper_upgrade", (item, advanced, text) => {
      text.add(1, Text.blue('Only works with Hoppers and Filtered Hoppers'))    
  })

  tooltip.addAdvanced("kubejs:eternity_token", (item, advanced, text) => {
      text.add(1, Text.blue('Combine with an item enchanted with mending and unbreaking 3 to make it unbreakable!'))    
  })
  
})

