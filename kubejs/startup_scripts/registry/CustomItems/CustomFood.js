StartupEvents.registry('item', item => {
    
    item.create("cookie_dough").tag("dq:tier0/component")

    item.create("pizza_sauce").tag("dq:tier3/component").useAnimation('drink').food(food=>{
        food.hunger(6)
        .saturation(0.5)
    })

    item.create("recall_potion").useAnimation('drink').food(food=>{
        food.hunger(1)
        .saturation(1)
        .alwaysEdible()
    }).glow(true)

    item.create("cut_onions").displayName("Cut Onions").food(food=>{
        food.hunger(4).saturation(1).fastToEat().effect("alexsmobs:mosquito_repellent",3000,0,1)
    })
})