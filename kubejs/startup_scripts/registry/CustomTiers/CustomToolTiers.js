//priority: 0
ItemEvents.toolTierRegistry(event => {

  event.add('glass', tier =>
    {
      tier.uses = 512,
      tier.speed = 2,
      tier.attackDamageBonus = 0.0
      tier.repairIngredient = "#forge:glass/alchemy"

    }
  )
  event.add('royal', tier => {
    tier.uses = 600
    tier.speed = 6.0
    tier.attackDamageBonus = 0.0
    tier.level = 2
    tier.enchantmentValue = 24
    tier.repairIngredient = '#forge:plates/gold'
  })

  event.add('mycelial', tier => {
    tier.uses = -1
    tier.speed = 12.0
    tier.attackDamageBonus = 1.0
    tier.level = 4
    tier.enchantmentValue = 24
    tier.repairIngredient = "c:mushrooms"
  })

  event.add('phoenix', tier => {
    tier.uses = 2048
    tier.speed = 6.0
    tier.attackDamageBonus = 0.0
    tier.level = 2
    tier.enchantmentValue = 24
    tier.repairIngredient = '#forge:ingots/phoenix'
  })

  event.add('copper', tier => {
    tier.uses = 1024
    tier.speed = 4.0
    tier.attackDamageBonus = 1.5
    tier.level = 2
    tier.enchantmentValue = 12
    tier.repairIngredient = '#forge:ingots/copper'
  })

  event.add('bronze', tier => {
    tier.uses = 1536
    tier.speed = 5.0
    tier.attackDamageBonus = 2
    tier.level = 3
    tier.enchantmentValue = 12
    tier.repairIngredient = '#forge:ingots/bronze'
  })

  event.add('silver', tier => {
    tier.uses = 256
    tier.speed = 7.0
    tier.attackDamageBonus = 0.0
    tier.level = 2
    tier.enchantmentValue = 20
    tier.repairIngredient = '#forge:ingots/silver'
  })

  event.add('lead', tier => {
    tier.uses = 512
    tier.speed = 5.5
    tier.attackDamageBonus = 0.0
    tier.level = 3
    tier.enchantmentValue = 14
    tier.repairIngredient = '#forge:ingots/lead'
  })

  event.add('uranium', tier => {
    tier.uses = 2048
    tier.speed = 6.5
    tier.attackDamageBonus = 0.0
    tier.level = 3
    tier.enchantmentValue = 14
    tier.repairIngredient = '#forge:ingots/uranium'
  })

  event.add('terraformer', tier => {
    tier.uses = 4096
    tier.speed = 8.0
    tier.attackDamageBonus = 0
    tier.level = 2
    tier.enchantmentValue = 24
    tier.repairIngredient = "#forge:ingots/iron"
  })

  event.add('primitive', tier => {
    tier.uses = 512
    tier.speed = 2.5
    tier.attackDamageBonus = 0
    tier.level = 1
    tier.enchantmentValue = 12
    tier.repairIngredient = "#forge:storage_blocks/cobblestone"
  })

  event.add('basic', tier => {
    tier.uses = 1024
    tier.speed = 5
    tier.attackDamageBonus = 2
    tier.level = 2
    tier.enchantmentValue = 12
    tier.repairIngredient = '#forge:ingots/lead'
  })

  event.add('sturdy', tier => {
    tier.uses = 2048
    tier.speed = 8
    tier.attackDamageBonus = 4
    tier.level = 3
    tier.enchantmentValue = 12
    tier.repairIngredient = '#dq:sturdy_tools_repair_item'
  })

  event.add('ice', tier => {
    tier.uses = 512
    tier.speed = 3.0
    tier.attackDamageBonus = 0
    tier.level = 1
    tier.enchantmentValue = 16
    tier.repairIngredient = "#forge:ingots/iron"
  })

  event.add('grass', tier => {
    tier.uses = 512
    tier.speed = 3.0
    tier.attackDamageBonus = 0
    tier.level = 1
    tier.enchantmentValue = 16
    tier.repairIngredient = "#forge:ingots/iron"
  })

})