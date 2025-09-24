ServerEvents.recipes(event=>{

    event.remove({type:"aether:freezing"})

    const minute = 1200
    const second = 20

    function freezer(output,input,time)
    {
        event.custom({
        "type": "rubinated_nether:freezing",
        "category": "freezable_misc",
        "cookingtime": time,
        "experience": 1.0,
        "ingredient": {
            "item": input
        },
        "result": output
    })
    }
    function freezerTag(output,input,time)
    {
        event.custom({
        "type": "rubinated_nether:freezing",
        "category": "freezable_misc",
        "cookingtime": time,
        "experience": 1.0,
        "ingredient": {
            "tag": input
        },
        "result": output
    })
    }

    freezer("immersive_weathering:permafrost","stone",minute)
    freezer("aether:blue_aercloud","aether:cold_aercloud",second*20)
    freezer("ancient_aether:wynd_sentry_stone","ancient_aether:sentry_stone",second*5)
    freezer("aether:holiday_leaves","ancient_aether:highsproot_leaves",second*2)
    freezer("aether:crystal_leaves","aether:skyroot_leaves",second*2)
    freezerTag("aether:ice_pendant","aether:freezable_pendants",second*40)
    freezer("ancient_aether:frozen_holystone_vase","ancient_aether:holystone_vase",second*5)
    freezer("deep_aether:frozen_goldenleaf_berries","deep_aether:goldenleaf_berries",second*5)
    freezerTag("aether:music_disc_high","minecraft:music_discs",second*25)
    freezerTag("aether:ice_ring","aether:freezable_rings",second*40)
    

})