ServerEvents.recipes(event=>
{
    function RecyclingWith2(input,output1,output2)
    {
        event.recipes.mbd2.recycling()
        .inputItems(input)
        .outputItems(output1)
        .outputItems(output2)
        .duration(200)
    }

    function ArmorRecycling(mod,material,output)
    {
        event.recipes.mbd2.recycling()
        .inputItems(mod+":"+material+"_helmet")
        .outputItems("2x "+output)
        .chance(0.5, builder => builder
            .outputItems(output)
        )
        .duration(200)
        
        event.recipes.mbd2.recycling()
        .inputItems(mod+":"+material+"_chestplate")
        .outputItems("4x "+output)
        .duration(200) 

        event.recipes.mbd2.recycling()
        .inputItems(mod+":"+material+"_leggings")
        .outputItems("3x "+output)
        .chance(0.5, builder => builder
            .outputItems(output)
        )
        .duration(200)

        event.recipes.mbd2.recycling()
        .inputItems(mod+":"+material+"_boots")
        .outputItems("2x "+output)
        .duration(200)
    }

    function ToolRecycling(mod,material,output,stick)
    {
        event.recipes.mbd2.recycling()
        .inputItems(mod+":"+material+"_sword")
        .outputItems(output)
        .chance(0.5, builder => builder
            .outputItems(stick)
        )
        .duration(200)

        event.recipes.mbd2.recycling()
        .inputItems(mod+":"+material+"_hoe")
        .outputItems(output)
        .outputItems(stick)
        .duration(200)

        event.recipes.mbd2.recycling()
        .inputItems(mod+":"+material+"_pickaxe")
        .outputItems(output)
        .chance(0.5, builder => builder
            .outputItems(output)
        )
        .chance(0.5, builder => builder
            .outputItems(stick)
        )
        .duration(200)

        event.recipes.mbd2.recycling()
        .inputItems(mod+":"+material+"_axe")
        .outputItems(output)
        .chance(0.5, builder => builder
            .outputItems(output)
        )
        .chance(0.5, builder => builder
            .outputItems(stick)
        )
        .duration(200)

        event.recipes.mbd2.recycling()
        .inputItems(mod+":"+material+"_shovel")
        .chance(0.5, builder => builder
            .outputItems(output)
        )
        .outputItems(stick)
        .duration(200)
    }
    
    ToolRecycling("minecraft","iron","iron_ingot","immersiveengineering:stick_treated")
    ToolRecycling("minecraft","diamond","diamond","kubejs:zinc_tool_handle")
    ToolRecycling("kubejs","copper","copper_ingot","immersiveengineering:stick_treated")
    ToolRecycling("kubejs","silver","thermal:silver_ingot","immersiveengineering:stick_treated")
    ToolRecycling("kubejs","lead","thermal:lead_ingot","immersiveengineering:stick_treated")
    ToolRecycling("wizards_reborn","arcane_wood","wizards_reborn:arcane_wood_planks","wizards_reborn:arcane_wood_branch")

    ArmorRecycling("minecraft","iron","create:iron_sheet")
    ArmorRecycling("minecraft","chainmail","chain")
    ArmorRecycling("minecraft","leather","leather")
    ArmorRecycling("minecraft","diamond","kubejs:diamond_plate")
    ArmorRecycling("kubejs","copper","create:copper_sheet")
    ArmorRecycling("kubejs","silver","vintageimprovements:silver_sheet")
    ArmorRecycling("kubejs","lead","vintageimprovements:lead_sheet")
    
    global.colors.forEach(color => {
        
        RecyclingWith2(color+"_bed","4x handcrafted:"+color+"_sheet",'immersiveengineering:cushion')
        
    });

    function RuneRecycling(input,outputItem)
    {
        event.recipes.mbd2.recycling()
        .inputItems("irons_spellbooks:"+input+"_rune")
        .outputItems("4x "+outputItem)
        .chance(0.5, builder => builder
            .outputItems("irons_spellbooks:blank_rune")
        )
        .duration(200)
    }
    function TemplatesRecycling(input,outputItem,outputBlock)
    {
        event.recipes.mbd2.recycling()
        .inputItems(input)
        .outputItems("3x "+outputItem)
        .chance(0.5, builder => builder
            .outputItems(outputItem)
        )
        .chance(0.5, builder => builder
            .outputItems(outputBlock)
        )
        .duration(200)
    }
    RuneRecycling("ender","ender_pearl")
    RuneRecycling("holy","irons_spellbooks:divine_pearl")
    RuneRecycling("lightning","irons_spellbooks:lightning_bottle")
    RuneRecycling("fire","blaze_rod")
    RuneRecycling("ice","irons_spellbooks:frozen_bone")
    RuneRecycling("nature","minecraft:poisonous_potato")
    RuneRecycling("blood","irons_spellbooks:blood_vial")
    RuneRecycling("protection","pufferfish")
    RuneRecycling("evocation","emerald")
    RuneRecycling("arcane","irons_spellbooks:arcane_essence")
    RuneRecycling("cooldown","phantom_membrane")
    TemplatesRecycling("minecraft:netherite_upgrade_smithing_template","diamond","netherrack")
    TemplatesRecycling("kubejs:gold_upgrade_smithing_template","thermal:silver_ingot","basalt")
    TemplatesRecycling("kubejs:botanist_upgrade_smithing_template","iron_ingot","minecraft:mossy_stone_bricks")
    TemplatesRecycling("kubejs:steel_upgrade_smithing_template","naturesaura:infused_iron","deepslate")
    TemplatesRecycling("kubejs:skyseeker_upgrade_smithing_template","netherite_ingot","calcite")
    TemplatesRecycling("kubejs:phoenix_upgrade_smithing_template","twilightforest:fiery_ingot","deep_aether:aseterite")
    TemplatesRecycling("deeperdarker:warden_upgrade_smithing_template","forbidden_arcanus:deorum_ingot","sculk")
    TemplatesRecycling("deep_aether:stormforged_smithing_template","deep_aether:nimbus_stone","kubejs:phoenix_ingot")
    TemplatesRecycling("kubejs:engineer_upgrade_smithing_template","leather","andesite")
    TemplatesRecycling("kubejs:fiery_upgrade_smithing_template","iron_ingot","granite")
    TemplatesRecycling("kubejs:bronze_upgrade_smithing_template","copper_block","stone")
    TemplatesRecycling("kubejs:obsidian_upgrade_smithing_template","twilightforest:knightmetal_ingot","twilightforest:mazestone_brick")
    TemplatesRecycling("kubejs:knightmetal_upgrade_smithing_template","thermal:lead_ingot","twilightforest:underbrick")
    TemplatesRecycling("kubejs:scarecrow_upgrade_smithing_template","kubejs:arcane_leather","hay_block")
    TemplatesRecycling("kubejs:steeleaf_upgrade_smithing_template","twilightforest:ironwood_ingot","twilightforest:dark_log")
    TemplatesRecycling("kubejs:wandering_magician_upgrade_smithing_template","leather","white_wool")
    TemplatesRecycling("kubejs:skyjade_upgrade_smithing_template","thermal:silver_ingot","aether:holystone")
    TemplatesRecycling("kubejs:zanite_upgrade_smithing_template","thermal:lead_ingot","aether_redux:divinite")
    TemplatesRecycling("kubejs:tyr_upgrade_smithing_template","forbidden_arcanus:dragon_scale","end_stone")
    TemplatesRecycling("kubejs:draco_arcanus_upgrade_smithing_template","forbidden_arcanus:obsidian_ingot","create:ochrum")
    TemplatesRecycling("kubejs:arcane_gold_upgrade_smithing_template","gold_ingot","create:asurine")
    TemplatesRecycling("kubejs:netherite_battlemage_upgrade_smithing_template","netherite_ingot","astrological:purpurite")
    TemplatesRecycling("kubejs:arcane_fortress_upgrade_smithing_template","wizards_reborn:arcane_gold_ingot","create:veridium")
    TemplatesRecycling("kubejs:depth_upgrade_smithing_template","forbidden_arcanus:obsidian_ingot","create:crimsite")
    TemplatesRecycling("kubejs:valkyrum_upgrade_smithing_template","naturesaura:sky_ingot","astrological:triphylite")
    TemplatesRecycling("kubejs:etherium_upgrade_smithing_template","deep_aether:squall_plate","astrological:light_jade")
    TemplatesRecycling("deep_aether:stratus_smithing_template","aether_redux:gravitite_ingot","aether:holystone")
})