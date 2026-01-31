ServerEvents.recipes(event=>{

    event.remove([
        {type:"thermal:smelter"},
        {type:"thermal:smelter_recycle"},
        {type:"immersiveengineering:hammer_crushing"},
        {type:"immersiveengineering:alloy"},
        {type:"immersiveengineering:arc_furnace"},
        {type:"thermal:insolator"}
        
    ])
})