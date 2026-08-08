StartupEvents.registry('item', item => {

    function registerRing(id,tier,name)
    {
      if(typeof name === 'undefined')
      {
        item.create(id)
        .unstackable()
        .tag("curios:ring")
        .tag(`dq:tier${tier}/accessories`)
        .attachCuriosCapability(CuriosJSCapabilityBuilder
                .create()
                .canEquip(() => true)
            )
      }
      else
      {
        item.create(id)
        .unstackable()
        .tag("curios:ring")
        .tag(`dq:tier${tier}/accessories`)
        .displayName(name)
        .attachCuriosCapability(CuriosJSCapabilityBuilder
                .create()
                .canEquip(() => true)
            )
      }
        
    }
    registerRing("ring_travel",1,"Ring of Costly Travel")
    registerRing("daybloom_ring",1)
    registerRing("bulking_ring",3,"Ring of Bulking")
    registerRing("mycelial_ring",2)
    
  global.magicSchools.forEach(element => {
    if(element=="eldritch")
        return;
    registerRing(`lesser_${element}_ring`,1)
    registerRing(`greater_${element}_ring`,2)   
  });
  
  const ringMaterials = [
    "tin",
    "nickel",
    "diamond",
    "ruby",
    "sapphire",
    "emerald",
    "quartz",
    "amethyst",
    "zanite",
    "skyjade",
    "lead",
    "silver",
    "steeleaf",
    "ironwood",
    "knightmetal",
    "zinc",
    "uranium",
    "copper",
    "lapis"
  ].forEach(material=>{
    item.create(`${material}_ring`)
    .unstackable()
    .tag("curios:ring")
    .attachCuriosCapability(CuriosJSCapabilityBuilder
                .create()
                .canEquip(() => true)
            )
  })

})