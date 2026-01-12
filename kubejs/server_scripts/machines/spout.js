ServerEvents.recipes(event=>{

    let filling = event.recipes.create.filling
    filling("immersiveengineering:treated_wood_horizontal",["#minecraft:planks",Fluid.of("immersiveengineering:creosote",200)])
    filling("kubejs:pizza_sauce",["glass_bottle",Fluid.of("kubejs:pizza_sauce",250)])
    filling("create:blaze_cake",["create:blaze_cake_base",Fluid.of("kubejs:fire_element_fluid",250)]).id("create:filling/blaze_cake")
    
   
})