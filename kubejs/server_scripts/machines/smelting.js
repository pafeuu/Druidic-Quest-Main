ServerEvents.recipes(e=>{
    e.smelting("aether:quicksoil_glass","aether:quicksoil").id("aether:quicksoil_glass_enchanting")
    
    function rawBlocksSmelting(id)
    {
        let smeltedId = id.replace("raw_","")
        e.smelting(smeltedId,id).experience(6.5).cookingTime(1800)
        e.blasting(smeltedId,id).experience(6.5).cookingTime(900)
    }
    rawBlocksSmelting("druidic_quest_core:raw_platinum_block")
    rawBlocksSmelting("druidic_quest_core:raw_uranium_block")
    rawBlocksSmelting("thermal:raw_lead_block")
    rawBlocksSmelting("thermal:raw_silver_block")
    rawBlocksSmelting("thermal:raw_tin_block")
    rawBlocksSmelting("thermal:raw_nickel_block")
    rawBlocksSmelting("create:raw_zinc_block")
})