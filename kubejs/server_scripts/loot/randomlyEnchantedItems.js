LootJS.modifiers(event=>{

    const randomlyEnchantedToolMaterials = [
        "minecraft:diamond",
        "minecraft:golden",
        "minecraft:stone",
        "minecraft:iron"
    ]

    const randomlyEnchantedArmorMaterials = [
        "minecraft:leather",
        "minecraft:golden",
        "minecraft:iron",
        "minecraft:diamond"
    ]

    randomlyEnchantedArmorMaterials.forEach(material => {
        
        global.armorSlots.forEach(toolType => {

            event.addLootTypeModifier(LootType.CHEST)
            .replaceLoot(`${material}_${toolType}`,`${material}_${toolType}`)
            
        });
    });

    randomlyEnchantedToolMaterials.forEach(material => {
        
        global.toolTypesWithSword.forEach(toolType => {

            event.addLootTypeModifier(LootType.CHEST)
            .replaceLoot(`${material}_${toolType}`,`${material}_${toolType}`)
            
        });
    });

    
    

})