//priority: 0
ItemEvents.armorTierRegistry(event => {
  event.add('copper', tier => {
    tier.durabilityMultiplier = 45 // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [1, 3, 4, 1] // Slot indicies are [FEET, LEGS, BODY, HEAD]
    tier.enchantmentValue = 8
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = '#forge:ingots/copper'
    tier.toughness = 0.0 // diamond has 2.0, netherite 3.0
    tier.knockbackResistance = 0.0
  })

  event.add('bronze', tier => {
    tier.durabilityMultiplier = 60 // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [2, 4, 5, 2] // Slot indicies are [FEET, LEGS, BODY, HEAD]
    tier.enchantmentValue = 8
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = '#forge:ingots/bronze'
    tier.toughness = 0.0 // diamond has 2.0, netherite 3.0
    tier.knockbackResistance = 0.05
  })

  event.add('silver', tier => {
    tier.durabilityMultiplier = 12 // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [1, 3, 4, 1] // Slot indicies are [FEET, LEGS, BODY, HEAD]
    tier.enchantmentValue = 18
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = '#forge:ingots/silver'
    tier.toughness = 0.0 // diamond has 2.0, netherite 3.0
    tier.knockbackResistance = 0.0
  })

  event.add('lead', tier => {
    tier.durabilityMultiplier = 23 // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [2, 4, 5, 2] // Slot indicies are [FEET, LEGS, BODY, HEAD]
    tier.enchantmentValue = 12
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = '#forge:ingots/lead'
    tier.toughness = 0.5 // diamond has 2.0, netherite 3.0
    tier.knockbackResistance = 0.1
  })

  event.add('cactus', tier => {
    tier.durabilityMultiplier = 8 // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [1, 2, 3, 1] // Slot indicies are [FEET, LEGS, BODY, HEAD]
    tier.enchantmentValue = 12
    tier.equipSound = 'minecraft:item.armor.equip_leather'
    tier.repairIngredient = '#forge:cactus'
    tier.toughness = 0.0 // diamond has 2.0, netherite 3.0
    tier.knockbackResistance = 0.0
  })

  event.add('uranium', tier => {
    tier.durabilityMultiplier = 68 // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [2, 4, 6, 2] // Slot indicies are [FEET, LEGS, BODY, HEAD]
    tier.enchantmentValue = 12
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = '#forge:ingots/uranium'
    tier.toughness = 1.0 // diamond has 2.0, netherite 3.0
    tier.knockbackResistance = 0.0
  })
})