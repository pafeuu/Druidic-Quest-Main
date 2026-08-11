ServerEvents.recipes(event=>{
    
    event.shapeless("thermal:phyto_grenade",["thermal:explosive_grenade","thermal:phytogro"])

    event.shapeless("thermal:nuke_grenade",["thermal:explosive_grenade","#forge:dusts/uranium"])

    event.shapeless("thermal:earth_grenade",["thermal:explosive_grenade","thermal:earth_charge"])

    event.shapeless("thermal:ice_grenade",["thermal:explosive_grenade","thermal:ice_charge"])

    event.shapeless("thermal:lightning_grenade",["thermal:explosive_grenade","thermal:lightning_charge"])

    event.shapeless("thermal:ender_grenade",["thermal:explosive_grenade","minecraft:ender_pearl"])

    event.shapeless("thermal:phyto_tnt",["minecraft:tnt","thermal:phytogro"])

    event.shapeless("thermal:nuke_tnt",["minecraft:tnt","#forge:dusts/uranium"])

    event.shapeless("thermal:earth_tnt",["minecraft:tnt","thermal:earth_charge"])

    event.shapeless("thermal:ice_tnt",["minecraft:tnt","thermal:ice_charge"])

    event.shapeless("thermal:lightning_tnt",["minecraft:tnt","thermal:lightning_charge"])

    event.shapeless("thermal:ender_tnt",["minecraft:tnt","minecraft:ender_pearl"])

    event.shapeless("supplementaries:bomb_blue",[
        "supplementaries:bomb",
        ["minecraft:lapis_lazuli","irons_spellbooks:arcane_essence"],
        "#forge:dusts/uranium"])

    event.shaped("4x thermal:explosive_grenade",
        [
            " B ",
            "BTB",
            " B "
        ],
        {
            B: "supplementaries:bomb",
            T: "minecraft:tnt"
        }
    ).id("thermal:explosive_grenade_4")

    event.shaped("4x supplementaries:bomb",
        [
            "IGI",
            "GSG",
            "IGI"
        ],
        {
            S: "string",
            I: "#forge:ingots/iron",
            G: "gunpowder"
        }
    ).id("supplementaries:bomb")

    event.shaped("4x supplementaries:bomb_spiky",
        [
            "IGI",
            "GSG",
            "IGI"
        ],
        {
            S: "string",
            I: "#forge:ingots/lead",
            G: "gunpowder"
        }
    ).id("supplementaries:spiky_bomb_2")
})