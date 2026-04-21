//priority: 10

const $ShearsItem = Java.loadClass('net.minecraft.world.item.ShearsItem')
const $ShieldItem = Java.loadClass('net.minecraft.world.item.ShieldItem')
const $HammerItem = Java.loadClass('cofh.core.common.item.HammerItem')
const $LunchBoxItem = Java.loadClass('team.creative.solonion.common.item.foodcontainer.FoodContainerItem')
const $ExcavatorItem = Java.loadClass('cofh.core.common.item.ExcavatorItem')
const $FlintAndSteelItem = Java.loadClass('net.minecraft.world.item.FlintAndSteelItem')
const $ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')

StartupEvents.registry('item', item => {


  ///===================================================KEYS===========================================================

  item.create('overworld_key').displayName('Overworld Key').tag("dq:tier0/tool")
  item.create('twilight_key').displayName('Twilight Key').tag("dq:tier1/tool")
  item.create('nether_key').displayName('Nether Key').tag("dq:tier2/tool")
  item.create('end_key').displayName('End Key').tag("dq:tier4/tool")
  item.create('aether_key').displayName('Aether Key').tag("dq:tier3/tool")
  item.create('broken_key').displayName('Broken Key').tag("dq:tier0/tool")

  ///=================================================TOOLS============================================================

  function registerTool(name,type,material,tier)
  {
    item.create(name,type)
      .tier(material)
      .tag("minecraft:tools")
      .tag(`minecraft:tools/${type}`)
      .tag(`minecraft:${type}s`)
      .tag(`dq:tier${tier}/tool`)
      .tag(`forge:tools/${material}`) 
  }

  function registerToolset(material,tier)
  {
    let tierRarity
    switch(tier){
      case 0:
      case 1:
        tierRarity="common"
        break;
      case 2:
        tierRarity="uncommon"
        break;
      case 3:
        tierRarity="rare"
        break;
      case 4:
        tierRarity="epic"
        break;
      case 5:
        tierRarity="legendary"
      }

    global.toolTypesWithSword.forEach(type => {

      item.create(`${material}_${type}`,type)
      .tier(material)
      .tag("minecraft:tools")
      .tag(`minecraft:tools/${type}`)
      .tag(`minecraft:${type}s`)
      .tag(`dq:tier${tier}/tool`)
      .tag(`forge:tools/${material}`)
      .rarity(tierRarity) 

    });  
  }

  function registerToolsetWithoutSword(material,tier)
  {
    let tierRarity
    switch(tier){
      case 0:
      case 1:
        tierRarity="common"
        break;
      case 2:
        tierRarity="uncommon"
        break;
      case 3:
        tierRarity="rare"
        break;
      case 4:
        tierRarity="epic"
        break;
      case 5:
        tierRarity="legendary"
      }
    global.toolTypes.forEach(type => {

      item.create(`${material}_${type}`,type)
      .tier(material)
      .tag("minecraft:tools")
      .tag(`minecraft:tools/${type}`)
      .tag(`minecraft:${type}s`)
      .tag(`dq:tier${tier}/tool`)
      .tag(`forge:tools/${material}`)
      .rarity(tierRarity)
       

    });  
  }
  registerTool("lumber_axe","axe","lumber",0)
  registerTool("knightmetal_shovel","shovel","knightmetal",2)
  registerTool("knightmetal_hoe","hoe","knightmetal",2)
  registerTool("fiery_shovel","shovel","fiery",2)
  registerTool("fiery_axe","axe","fiery",2)
  registerTool("fiery_hoe","hoe","fiery",2)
  /*function registerToolsetWithoutSword(material,tier)
  {

  }*/
  
  registerToolset("copper",1)
  registerToolset("lead",1)
  registerToolset("silver",1)
  registerToolset("bronze",1)
  registerToolset("uranium",2)
  registerToolset("obsidian",3)
  registerToolset("aluminum",4)
  registerToolsetWithoutSword("phoenix",3)
  registerToolsetWithoutSword("stormforged",4)


  

  item.createCustom('emerald_lunchbox',()=> new $LunchBoxItem(18,"emerald_lunchbox"))
  item.createCustom('life_lunchbox',()=> new $LunchBoxItem(18,"life_lunchbox"))

  item.createCustom('primitive_mining_hammer',() => new $HammerItem('primitive',2.0,-3.2,1, new $ItemProperties()))
  item.createCustom('basic_mining_hammer',() => new $HammerItem('basic',4.0,-3.2,2, new $ItemProperties()))
  item.createCustom('sturdy_mining_hammer',() => new $HammerItem('sturdy',6.0,-3.2,3, new $ItemProperties()))
 

  item.createCustom('primitive_excavator',() => new $ExcavatorItem('primitive',2.0,-3.2,1, new $ItemProperties()))
  item.createCustom('basic_excavator',() => new $ExcavatorItem('basic',4.0,-3.2,2, new $ItemProperties()))
  item.createCustom('sturdy_excavator',() => new $ExcavatorItem('sturdy',6.0,-3.2,3, new $ItemProperties()))
  
  item.create('the_terraformer','shovel').glow(true).rarity("epic").tier("terraformer").tag("minecraft:tools").tag("dq:tier2/tool")
  
  item.create('mycelial_hoe','hoe').tier('mycelial').rarity('legendary').tier('mycelial').tag("mincraft:tools").tag('dq:tier4/tool').tag("dq:advanced_hoes")

  item.create('sacrificial_dagger','sword').tier('gold').tag("minecraft:tools").tag("dq:tier1/weapon").tag("dq:tier1/tool").speedBaseline(-2.0).attackDamageBaseline(1)
  
  item.create('primitive_shears',"shears").maxDamage(8).unstackable()
  item.create("steel_shears","shears").maxDamage(-1).unstackable().tag("forge:tools/steel")
  item.create("steel_knife","farmersdelight:knife").tag("minecraft:tools").tag("forge:tools/knives").tag("dq:tier1/tool").unstackable().tag("forge:tools/steel")

  item.createCustom('primitive_firestarter',() => new $FlintAndSteelItem(new $ItemProperties().defaultDurability(8)))

  item.createCustom('primitive_shield', () => new $ShieldItem(new $ItemProperties().defaultDurability(128)))

  item.create('brick_glue').maxDamage(96).unstackable().tag("forge:tools/glue").tag("dq:tier0/tool")

  item.create('primitive_mortar').maxDamage(16).unstackable().tag("forge:tools/mortars").tag("dq:tier0/tool")
  item.create('basic_mortar').maxDamage(64).unstackable().tag("forge:tools/mortars").tag("dq:tier1/tool")
  item.create('primitive_saw').maxDamage(64).unstackable().tag("forge:tools/saws").tag("dq:tier0/tool")
  item.create('basic_saw').maxDamage(512).unstackable().tag("forge:tools/saws").tag("dq:tier1/tool")

  item.create('primitive_chisel').maxDamage(16).unstackable().tag("forge:tools/chisels").tag("dq:tier0/tool").tag("forge:tools")
  item.create('basic_chisel').maxDamage(128).tag("forge:tools/chisels").tag("dq:tier2/tool").unstackable().tag("forge:tools")

  item.create('elemental_pump').maxDamage(4096).unstackable().tag("dq:tier2/components")

  item.create("capturing_gem").rarity("epic").tag("dq:tier2/tool").tag("minecraft:tools").unstackable()

  item.create("warp_scroll").texture("ars_nouveau:item/warp_scroll")

  item.create("grafter","hoe").tier('bronze').rarity("rare").maxDamage(256).tag("dq:tier1/tool").tag("minecraft:tools")
  
  
})

