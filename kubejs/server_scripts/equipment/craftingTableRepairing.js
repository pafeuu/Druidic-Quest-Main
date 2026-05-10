ServerEvents.recipes(event=>{

    function fullRepair(input,repairIngredient)
    {
        event.shapeless(input, [input,repairIngredient]).modifyResult((grid, result) => {
            let _tool = grid.find(Ingredient.of(input));
            _tool = _tool.withNBT({ Damage: 0 });
          
            return _tool;
        })
    }

    function fullRepairToolTier(tier,repairItem)
    {
        Ingredient.of(`#forge:tools/${tier}`).itemIds.forEach(item => {
            fullRepair(item,repairItem)
        })

        Ingredient.of(`#forge:armor/${tier}`).itemIds.forEach(item => {
            fullRepair(item,repairItem)
        })
    }
    
    fullRepair("alexsmobs:crocodile_chestplate","alexsmobs:crocodile_scute")
    fullRepair("alexsmobs:rocky_chestplate","alexsmobs:rocky_shell")
    fullRepair("alexsmobs:ghostly_pickaxe","#forge:ingots/iron")
    fullRepair("alexsmobs:ghostly_pickaxe","quark:soul_bead")
    fullRepair("kubejs:primitive_mining_hammer","quark:sturdy_stone")
    fullRepair("kubejs:primitive_excavator","quark:sturdy_stone")
    fullRepair("kubejs:basic_mining_hammer","ars_nouveau:earth_essence")
    fullRepair("kubejs:basic_excavator","ars_nouveau:earth_essence")
    fullRepair("kubejs:sturdy_mining_hammer","minecraft:netherite_ingot")
    fullRepair("kubejs:sturdy_excavator","minecraft:netherite_ingot")
    
    fullRepairToolTier("yeti","twilightforest:alpha_yeti_fur")
    fullRepairToolTier("arctic","twilightforest:arctic_fur")
    fullRepairToolTier("etherium","3x #forge:ingots/fiery")
    fullRepairToolTier("diamond","minecraft:diamond")
    fullRepairToolTier("netherite","2x minecraft:diamond")
    fullRepairToolTier("leather","minecraft:leather")
    fullRepairToolTier("chainmail","minecraft:chain")
    fullRepairToolTier("sky","3x minecraft:diamond")
    fullRepairToolTier("copper","minecraft:copper_ingot")
    fullRepairToolTier("iron","#forge:ingots/iron")
    fullRepairToolTier("fiery","2x #forge:ingots/iron")
    fullRepairToolTier("phoenix","3x #forge:ingots/iron")
    fullRepairToolTier("silver","#forge:ingots/silver")
    fullRepairToolTier("gold","#forge:ingots/gold")
    fullRepairToolTier("flint","minecraft:flint")
    fullRepairToolTier("stone","#quark:stone_tool_materials")
    fullRepairToolTier("cactus","#forge:cactus")
    fullRepairToolTier("beekeeper","thermal:beekeeper_fabric")
    fullRepairToolTier("ironwood","#forge:ingots/ironwood")
    fullRepairToolTier("lead","#forge:ingots/lead")
    fullRepairToolTier("bronze","#forge:ingots/bronze")
    fullRepairToolTier("steeleaf","2x #forge:ingots/ironwood")
    fullRepairToolTier("skyjade","#forge:gems/skyjade")
    fullRepairToolTier("knightmetal","2x #forge:ingots/lead")
    fullRepairToolTier("naga","twilightforest:naga_scale")
    fullRepairToolTier("zanite","#forge:gems/zanite")
    fullRepairToolTier("botanist","2x #forge:ingots/iron")
    fullRepairToolTier("botanist","naturesaura:infused_iron")
    fullRepairToolTier("phoenix","#forge:ingots/fiery")
    fullRepairToolTier("stormforged","2x #forge:ingots/fiery")
    fullRepairToolTier("steel","2x naturesaura:infused_iron")
    fullRepairToolTier("obsidian","twilightforest:knightmetal_ingot")
    fullRepairToolTier("depth","2x twilightforest:knightmetal_ingot")
    fullRepairToolTier("arcane_gold","3x #forge:ingots/gold")
    fullRepairToolTier("gravitite","#forge:ingots/gravitite")
    fullRepairToolTier("phantom","quark:soul_bead")
    fullRepairToolTier("uranium","#forge:ingots/uranium")
    fullRepairToolTier("diving","thermal:diving_fabric")
    fullRepairToolTier("wandering_magician","2x minecraft:leather")
    fullRepairToolTier("arcane_fortress","5x #forge:ingots/gold")
    fullRepairToolTier("scarecrow","kubejs:arcane_leather")
    fullRepairToolTier("wizard","kubejs:arcane_leather")
    fullRepairToolTier("cryomancer","3x kubejs:arcane_leather")
    fullRepairToolTier("electromancer","3x kubejs:arcane_leather")
    fullRepairToolTier("priest","3x kubejs:arcane_leather")
    fullRepairToolTier("shadowwalker","3x kubejs:arcane_leather")
    fullRepairToolTier("plagued","3x kubejs:arcane_leather")
    fullRepairToolTier("cultist","3x kubejs:arcane_leather")
    fullRepairToolTier("archevoker","3x kubejs:arcane_leather")
    fullRepairToolTier("netherite_mage","3x diamond")
    fullRepairToolTier("pyromancer","3x kubejs:arcane_leather")

    
    
})