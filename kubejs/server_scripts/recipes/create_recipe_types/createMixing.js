ServerEvents.recipes(event => {
    const mixer = event.recipes.create.mixing

    mixer("enigmaticlegacy:earth_heart", [
        "64x ars_nouveau:earth_essence",
        "4x heart_of_the_sea",
        "4x quark:diamond_heart",
        "4x kubejs:advanced_alchemical_dust"]
    ).heated()

    mixing("kubejs:corrupted_soul", [
        "quark:soul_bead",
        "kubejs:sapphire",
        Fluid.of("sophisticatedcore:xp_still", 2000)]
    ).heated()

    event.recipes.create.mixing("kubejs:enchanted_soul", [
        "kubejs:corrupted_soul",
        "kubejs:sapphire",
        Fluid.of("sophisticatedcore:xp_still", 4000)]
    ).heated()

    event.recipes.create.mixing(Fluid.of("kubejs:pizza_sauce", 250), [
        "16x #forge:crops/tomato",
        "16x sugar",
        "16x #forge:crops/onion",
        "8x vintagedelight:salt_dust"
    ]).heated()
})