ServerEvents.recipes(event=>{

    const apparatus = event.recipes.ars_nouveau.enchanting_apparatus

    apparatus([
        "#forge:gears/arcane_gold",
        "#forge:gears/arcane_gold",
        "ars_nouveau:arcane_core"],
        "kubejs:magic_machine",
        "wizards_reborn:arcane_iterator").id("wizards_reborn:arcane_workbench/arcane_iterator")

    apparatus([
        "ars_nouveau:fire_essence",
        "ars_nouveau:fire_essence",
        "ars_nouveau:air_essence",
        "ars_nouveau:air_essence",
        "ars_nouveau:water_essence",
        "ars_nouveau:water_essence",
        "ars_nouveau:earth_essence",
        "ars_nouveau:earth_essence"
    ],"kubejs:infused_diamond","kubejs:elemental_core",5000)

    apparatus([
        "ars_nouveau:fire_essence",
        "ars_nouveau:fire_essence",
        "ars_nouveau:air_essence",
        "ars_nouveau:air_essence",
        "ars_nouveau:water_essence",
        "ars_nouveau:water_essence",
        "ars_nouveau:earth_essence",
        "ars_nouveau:earth_essence"
    ],"quark:diamond_heart","kubejs:elemental_core",2000)

    event.remove({output:"immersiveengineering:alloybrick"})

    apparatus([
        "ars_nouveau:air_essence",
        "ars_nouveau:water_essence",
        "ars_nouveau:fire_essence",
        "ars_nouveau:earth_essence",
        "#forge:plates/tainted_gold"
    ],"kubejs:magic_machine","immersiveengineering:alloybrick",5000)

    apparatus([
        "naturesaura:token_joy",
        "kubejs:nature_essence",
        "kubejs:nature_essence",
        "kubejs:nature_essence",
        "kubejs:nature_essence"
    ],"kubejs:basic_magic_machine","kubejs:infusion_catalyst",5000)

})