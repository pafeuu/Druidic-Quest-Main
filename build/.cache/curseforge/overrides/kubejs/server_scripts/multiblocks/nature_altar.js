ServerEvents.recipes(event=>{
    
    const altar = event.recipes.naturesaura.altar
    
    const IngotAuraAmount = 15000
    const IngotProcessingSpeed = 60
    const BlockAuraAmount = 135000
    const BlockProcessingSpeed = 540
    //const DustAuraAmount = 500
    altar("aether:zanite_gemstone","diamond",IngotAuraAmount,IngotProcessingSpeed,"kubejs:infusion_catalyst")
    altar("aether:zanite_block","diamond_block",BlockAuraAmount,BlockProcessingSpeed,"kubejs:infusion_catalyst")

	altar("deep_aether:skyjade","emerald",IngotAuraAmount,IngotProcessingSpeed,"kubejs:infusion_catalyst")
    altar("deep_aether:skyjade_block","emerald_block",BlockAuraAmount,BlockProcessingSpeed,"kubejs:infusion_catalyst")

    altar("naturesaura:infused_iron","iron_ingot",IngotAuraAmount,IngotProcessingSpeed,"kubejs:infusion_catalyst").id("naturesaura:altar/infused_iron")
    altar("naturesaura:infused_iron_block","iron_block",BlockAuraAmount,BlockProcessingSpeed,"kubejs:infusion_catalyst").id("naturesaura:altar/infused_iron_block")

    altar("naturesaura:tainted_gold","gold_ingot",IngotAuraAmount,IngotProcessingSpeed,"kubejs:infusion_catalyst").id("naturesaura:altar/tainted_gold")
    altar("naturesaura:tainted_gold_block","gold_block",BlockAuraAmount,BlockProcessingSpeed,"kubejs:infusion_catalyst").id("naturesaura:altar/tainted_gold_block")

    altar("naturesaura:infused_stone","kubejs:sturdy_deepslate",IngotAuraAmount,IngotProcessingSpeed,"kubejs:infusion_catalyst").id("naturesaura:altar/infused_stone")
    altar("forbidden_arcanus:soul","quark:soul_bead",IngotAuraAmount,100,"kubejs:infusion_catalyst")
    
})