StartupEvents.registry('item', item => {
    item.create('cross_necklace').displayName('Cross Necklace').tag("curios:necklace").unstackable()
        
    const pendantMaterials = [
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
        "gravitite",
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
        item.create(`${material}_pendant`).unstackable().tag("curios:necklace")
    })
    
})