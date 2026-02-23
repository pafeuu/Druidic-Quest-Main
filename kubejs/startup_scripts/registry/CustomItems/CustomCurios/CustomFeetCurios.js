StartupEvents.registry('item', item => {

  function registerBootsCover(type,tier)
  {
    item.create(`${type}_boots_cover`).tag("curios:feet").unstackable().tag(`dq:tier${tier}/accessories`)
  }

  function registerBootsCoverWithCustomName(type,tier,name)
  {
    item.create(`${type}_boots_cover`).tag("curios:feet").unstackable().tag(`dq:tier${tier}/accessories`).displayName(name)
  }

  registerBootsCover("bouncy",2)
  registerBootsCover("gravity",2)
  registerBootsCover("sturdy",1)
  registerBootsCoverWithCustomName("fall",2,"Featherfall Boots Cover")
})