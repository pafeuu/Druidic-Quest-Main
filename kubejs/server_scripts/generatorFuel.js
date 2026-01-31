ServerEvents.recipes(event=>{
    event.custom({
        "type": "immersiveengineering:generator_fuel",
        "burnTime": 20,
        "fluidTag": "c:fluid_source"
    })
    
    event.remove({id:"immersiveengineering:generator_fuel/creosote"})
    
})