ServerEvents.recipes(event=>{

    event.recipes.create.mixing("kubejs:corrupted_soul",[
    "quark:soul_bead",
    "kubejs:sapphire",
    Fluid.of("sophisticatedcore:xp_still", 2000)]).heated()

    event.recipes.create.mixing("kubejs:enchanted_soul",[
    "kubejs:corrupted_soul",
    "kubejs:sapphire",
    Fluid.of("sophisticatedcore:xp_still", 4000)]).heated()
    
    event.recipes.create.mixing(Fluid.of("kubejs:pizza_sauce",250),[
        "16x #forge:crops/tomato",
        "16x sugar",
        "16x #forge:crops/onion",
        "8x vintagedelight:salt_dust"
    ]).heated()

    
})