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
})