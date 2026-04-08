ServerEvents.recipes(event=>{

    const fertilizer = event.recipes.immersiveengineering.fertilizer
    
    fertilizer("thermal:phytogro",2.5)
    fertilizer("create:tree_fertilizer",2.0)
    fertilizer("thermal:compost",1.5)
})