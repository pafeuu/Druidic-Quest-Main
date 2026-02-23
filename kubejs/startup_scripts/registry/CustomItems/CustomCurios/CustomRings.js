StartupEvents.registry('item', item => {

    function registerRing(id,tier)
    {
        item.create(id).unstackable().tag("curios:ring").tag(`dq:tier${tier}/accessories`)
    }
    /*item.create('lesser_arcane_ring').displayName("Lesser Arcane Magic Ring").unstackable().tag("curios:ring")
    item.create('lesser_fire_ring').displayName("Lesser Fire Magic Ring").unstackable().tag("curios:ring")
    item.create('lesser_ice_ring').displayName("Lesser Ice Magic Ring").unstackable().tag("curios:ring")
    item.create('lesser_nature_ring').displayName("Lesser Nature Magic Ring").unstackable().tag("curios:ring")
    item.create('lesser_lightning_ring').displayName("Lesser Lightning Magic Ring").unstackable().tag("curios:ring")
    item.create('lesser_blood_ring').displayName("Lesser Blood Magic Ring").unstackable().tag("curios:ring")
    item.create('lesser_ender_ring').displayName("Lesser Ender Magic Ring").unstackable().tag("curios:ring")
    item.create('lesser_holy_ring').displayName("Lesser Holy Magic Ring").unstackable().tag("curios:ring")*/
    item.create("ring_travel").displayName("Ring of Costly Travel").unstackable().tag("curios:ring")
    item.create("daybloom_ring").unstackable().tag("curios:ring")
    item.create("bulking_ring").unstackable().displayName("Ring of Bulking").tag("curios:ring")
    item.create("mycelial_ring").unstackable().tag("curios:ring")

  global.magicSchools.forEach(element => {
    if(element=="eldritch")
        return;
    registerRing(`lesser_${element}_ring`,1)  
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
    item.create(`${material}_ring`).unstackable().tag("curios:ring")
  })

})