ServerEvents.recipes(event => {

    //let lens = event.recipes.ars_nouveau.enchanting_apparatus

    function lens(input,output,source)
    {
        event.recipes.ars_nouveau.enchanting_apparatus(
            input,
            "botania:lens_normal",
            output,
            source,
            true
        ).id(output)
    }
    
    lens(["#minecraft:sand"],
        "botania:lens_gravity",
        1000)
    
    lens(["minecraft:piston"],
        "botania:lens_piston",
        1000)

    lens([
        "minecraft:glowstone_dust",
        "minecraft:glowstone_dust",
        "minecraft:glowstone_dust",
        "minecraft:glowstone_dust"
        ],
        "botania:lens_light",1000)

    lens([
        "minecraft:slime_ball",
        "minecraft:slime_ball",
        "minecraft:slime_ball",
        "minecraft:slime_ball"
        ],
        "botania:lens_bounce",1000)

    lens([
        "minecraft:tripwire_hook",
        "minecraft:tripwire_hook"
        ],
        "botania:lens_tripwire",1000)

    lens([
        "minecraft:ender_pearl",
        "minecraft:ender_pearl",
        "minecraft:ender_pearl",
        "minecraft:ender_pearl"
        ],
        "botania:lens_warp",1000)

    lens([
        "woodenhopper:wooden_hopper"],
        "botania:lens_influence",1000)

    lens([
        "supplementaries:wrench"],
        "botania:lens_redirect",1000)

    lens([
        "minecraft:firework_rocket",
        "minecraft:firework_rocket",
        "minecraft:firework_rocket",
        "minecraft:firework_rocket",
        ],"botania:lens_firework",1000)

    lens([
        "#forge:glass/colorless",
        "#forge:glass/colorless",
        "#forge:glass/colorless",
        "#forge:glass/colorless",
        ],"botania:lens_flare",1000)

    lens([
        "minecraft:soul_sand",
        "minecraft:soul_sand",
        "minecraft:soul_sand",
        "minecraft:soul_sand",
        ],"botania:lens_time",1000)

    lens([
        "minecraft:paper",
        "minecraft:paper",
        "minecraft:paper",
        "minecraft:paper",
        ],"botania:lens_messenger",1000)

    lens([
        "minecraft:phantom_membrane",
        "minecraft:phantom_membrane"
        ],"botania:lens_phantom",1000)

    lens([
        "minecraft:redstone_block",
        "minecraft:lapis_block"
        ],"botania:lens_magnet",1000)

    lens([
        "minecraft:iron_block",
        "minecraft:iron_block"
        ],"botania:lens_weight",1000)

    lens([
        "ars_nouveau:fire_essence",
        "minecraft:fire_charge"
        ],"botania:lens_fire",1000)

    lens([
        "naturesaura:color_changer"
        ],"botania:lens_paint",1000)

    lens([
        "kubejs:infused_diamond",
        "kubejs:infused_diamond",
        "ars_nouveau:fire_essence",
        "ars_nouveau:fire_essence"
        ],"botania:lens_power",10000)
})