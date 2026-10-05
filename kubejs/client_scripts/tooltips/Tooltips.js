ItemEvents.tooltip(tooltip => {

  // ========================================== Guide Books ==============================================

  function guideBookTooltip(item, mod) {
    tooltip.add(item, Text.gray(`Documentation for the mod ${mod}`))
  }

  /*function patchouliGuideBookTooltip(item,mod)
  {
    tooltip.addAdvanced('kubejs:warp_scroll', (item, advanced, text) => {

    const posX = item.nbt?.an_warp_scroll?.x

    if (item.nbt) {
      text.add(1,item,Text.gray(`Documentation for the mod ${mod}`))
    }
  })
  }*///cba to make it

  guideBookTooltip("wizards_reborn:arcanemicon", "Wizard's Reborn")

  tooltip.add(['irons_spellbooks:common_ink',
    'ars_nouveau:potion_flask',
    'explorerscompass:explorerscompass',
    'enigmaticlegacy:cosmic_cake',
    'enigmaticlegacy:mending_mixture'], Text.green('Available through villager trading'))

  tooltip.addAdvanced([
    'kubejs:end_key',
    'kubejs:aether_key',
    'kubejs:ultimate_alchemical_dust',
    'naturesaura:calling_spirit',
    'naturesaura:rf_converter',
    'apotheosis:library',
    'apotheosis:ender_library',
    "kubejs:color_essence",
    'druidic_quest_core:platinum_pickaxe',
    'druidic_quest_core:platinum_axe',
    'druidic_quest_core:platinum_shovel',
    'druidic_quest_core:platinum_hoe',
    'druidic_quest_core:platinum_sword',
    'kubejs:warrior_charm',
    'kubejs:tank_charm',
    'kubejs:spellcaster_charm',
    'kubejs:uranium_mace',
    'kubejs:arcane_wood_wand',
    "kubejs:botanist_bow"], (item, advanced, text) => {
      text.add(1, Text.of('Not yet properly implemented').red())
    })

  tooltip.addAdvanced([
    "thermal:coal_coke",
    "druidic_quest_core:nature_essence",
    "wizards_reborn:arcane_gold_ingot",
    "druidic_quest_core:steel_ingot"], (item, advanced, text) => {
      text.add(1, Text.of('Picking up this item for the first time increases the difficulty and unlocks new dimension').red())
    })
  
  //======================================= Custom Tools ====================================== 

  tooltip.addAdvanced(["minecraft:elytra"], (item, advanced, text) => {
    text.add(1, [Text.of("Can't use fireworks while wearing this").blue()])
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

  tooltip.addAdvanced("kubejs:mycelial_hoe", (item, advanced, text) => {
    if (!tooltip.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.lightPurple("Slowly replenishes hunger and saturation when held"))
    }
  })

  tooltip.add("druidic_quest_core:arcane_clay_blend", Text.red("Requires Infernal Smelter multiblock with a Soul Core to be smelted"))
  tooltip.add("mbd2:infernal_smelter", [Text.red("Only works in the nether")])


  tooltip.add("kubejs:recipe_changed", Text.red("This recipe has been changed! Check EMI for more information!"))
  tooltip.add("quark:seed_pouch", Text.green("Shift-Right Click to plant in a 3x3!"))

  tooltip.add("ars_nouveau:experience_gem", Text.green("Grants 3 experience points!"))
  tooltip.add("minecraft:experience_bottle", Text.green("Grants between 3 to 11 experience points!"))
  tooltip.add("ars_nouveau:greater_experience_gem", Text.green("Grants 12 experience points!"))
  tooltip.add("create:experience_nugget", Text.green("Grants 3 experience point!"))
  tooltip.add("#dq:soul_harvester", [Text.red("Harvests souls")])

  tooltip.add("aether:sentry_boots", Text.blue("Grants immunity to fall damage"))
  tooltip.add(["deep_aether:skyjade_boots",
    "deep_aether:skyjade_chestplate",
    "deep_aether:skyjade_leggings",
    "deep_aether:skyjade_helmet"], Text.blue("Loses armor value as the durability goes down"))

  tooltip.add(["aether:zanite_pickaxe",
    "aether:zanite_axe",
    "aether:zanite_shovel",
    "aether:zanite_hoe",
    "aether:zanite_sword"], Text.blue("Gains effectiveness as the durability goes down"))

  tooltip.add(["deep_aether:skyjade_pickaxe",
    "deep_aether:skyjade_axe",
    "deep_aether:skyjade_hoe",
    "deep_aether:skyjade_shovel",
    "deep_aether:skyjade_sword"], Text.blue("Loses effectiveness as the durability goes down"))

  tooltip.add("aether:pig_slayer", Text.blue("Deals extra damage to pigs and piglike creatures!"))
  tooltip.add("deep_aether:afterburner", Text.blue("Hold right click to shoot a barrage of fireballs!"))

  tooltip.add("twilightforest:transformation_powder", [Text.blue("Can be used by a Dispenser")])
  tooltip.addAdvanced(["#dq:unbreakables"],
    (item, advanced, text) => {
      text.add(1, Text.of("Unbreakable").blue())
    })

  tooltip.addAdvanced(['create:water_wheel', 'create:large_water_wheel'],
    (item, advanced, text) => {
      text.add(1, Text.of("Does not generate any stress units!").red())
      text.add(2, Text.of("Can be used to move machines that do not require stress!").blue())
    })

  tooltip.addAdvanced([
    'thermal:lightning_grenade',
    'thermal:lightning_tnt',
    'thermal:lightning_charge'],
    (item, advanced, text) => {
      text.add(1, Text.of("Needs access to the sky for the lightning to strike").red())
    })

  tooltip.addAdvanced(["alexsmobs:novelty_hat"],
    (item, advanced, text) => {
      text.add(1, Text.of("Grants immunity to the hunger effect").blue())
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
    (item, advanced, text) => {
      text.add(1, Text.of("Auto-smelting").gray())
    })

  tooltip.addAdvanced("rehooked:red_hook",
    (item, advanced, text) => {
      text.add(1, Text.of("Creative flight within the volume defined by the hooks").lightPurple())
    })

  tooltip.addAdvanced([
    "kubejs:phoenix_sword"
  ],
    (item, advanced, text) => {
      text.add(1, Text.of("Burns targets").gray())
    })

  tooltip.addAdvanced('kubejs:warp_scroll', (item, advanced, text) => {

    const posX = item.nbt?.an_warp_scroll?.x
    const posY = item.nbt?.an_warp_scroll?.y
    const posZ = item.nbt?.an_warp_scroll?.z
    const dim = item.nbt?.an_warp_scroll?.dim

    if (item.nbt) {
      text.add(1, [Text.white(`X:${posX} Y:${posY} Z:${posZ}`)])
      text.add(2, Text.of(Text.white(dim)))
    }
    else {
      text.add(1, Text.of(Text.white("Use while sneaking to set a location.")))
    }
  })

  tooltip.addAdvanced('kubejs:capturing_gem', (item, advanced, text) => {

    if (item.nbt) {
      const entity = item.nbt.get("entity")
      text.add(
        Text.of("Captured: ").blue()
          .append(Text.of(entity).red())
      )
    }
  })


  //========================Enigmatic Legacy ========================

  tooltip.add("enigmaticlegacy:ocean_stone", [Text.gold("When equipped as Spellstone:"), Text.blue("+10 Cold Resistance"), Text.red("-10 Fire Resistance")])

  //========================Rubinated Nether ========================

  tooltip.add("rubinated_nether:ruby_brazier", [Text.blue("Grants fire resistance to nearby players")])

  //=======================Generators================================

  tooltip.add("#dq:generators/wissen", Text.aqua("Wissen Generator"))
  tooltip.add("#dq:generators/aura", Text.green("Aura Generator"))
  tooltip.add("#dq:generators/source_weak", Text.aqua("Weak Source Generator"))
  tooltip.add("#dq:generators/source", Text.aqua("Source Generator"))
  tooltip.add("#dq:generators/stress", Text.yellow("Stress Generator"))

  //==========================Natures Aura===========================

  tooltip.addAdvanced("naturesaura:grated_chute", (item, advanced, text) => {
    if (!tooltip.shift) {
      text.add(1, [Text.of('Hold ').darkPurple(), Text.of('Shift ').gold(), Text.of('to see details').darkPurple()])
    } else {
      text.add(1, Text.blue('Apply filters by placing an item frame on the side.'))
      text.add(2, Text.blue('Right click the hopper to reverse the filter.'))
    }
  })

  tooltip.addAdvanced("kubejs:eternity_token", (item, advanced, text) => {
    text.add(1, Text.blue('Combine with an item enchanted with mending and unbreaking 3 to make it unbreakable!'))
  })

})

