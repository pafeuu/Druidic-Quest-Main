ServerEvents.recipes(event=>{

    const apparatus = event.recipes.ars_nouveau.enchanting_apparatus

    /*apparatus([
        "bone_block",
        "druidic_quest_core:rotten_flesh_block",
        "quark:soul_bead"],
        "kubejs:warp_scroll",
        "corpsecomplex:scroll",
        1000).id("corpsecomplex:scroll")
    */

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

    apparatus([
        "ars_nouveau:air_essence",
        "ars_nouveau:water_essence",
        "ars_nouveau:fire_essence",
        "ars_nouveau:earth_essence",
        "#forge:plates/tainted_gold"
    ],"kubejs:magic_machine","druidic_quest_core:alloy_bricks",5000)

    apparatus([
        "naturesaura:token_joy",
        "druidic_quest_core:nature_essence",
        "druidic_quest_core:nature_essence",
        "druidic_quest_core:nature_essence",
        "druidic_quest_core:nature_essence"
    ],"kubejs:basic_magic_machine","kubejs:infusion_catalyst",5000)

    apparatus([
        "botania:manaweave_cloth",
        "botania:manaweave_cloth",
        "botania:manaweave_cloth",
        "kubejs:arcane_leather",
        "kubejs:arcane_leather",
        "kubejs:arcane_leather",
    ],"botania:manaweave_cloth","irons_spellbooks:magic_cloth",2500).id("irons_spellbooks:magic_cloth")

    apparatus([
        "sophisticatedstorage:packing_tape",
        "sophisticatedstorage:packing_tape",
        "sophisticatedstorage:packing_tape",
        "sophisticatedstorage:packing_tape",
        "minecraft:netherite_scrap",
        "minecraft:netherite_scrap",
        "minecraft:netherite_scrap",
        "minecraft:netherite_scrap",
    ],"create:super_glue","sophisticatedstorage:super_packing_tape",2500).id("sophisticatedstorage:super_packing_tape")

    apparatus([
        "kubejs:zinc_tool_handle",
        "blaze_rod",
        "#forge:storage_blocks/coal_coke",
        "#forge:storage_blocks/coal_coke"],
		"twilightforest:liveroot",
		"kubejs:carbon_infused_sturdy_handle",
		1000)

    apparatus([
        "kubejs:zinc_tool_handle",
        "#forge:gems/zanite",
        "#forge:gems/zanite",
        "#forge:gems/zanite",
        "#forge:gems/skyjade",
        "#forge:gems/skyjade",
        "#forge:gems/skyjade"],
		"#forge:rods/storm",
		"kubejs:heavenly_tool_handle",
		5000)

    apparatus([
        "kubejs:zinc_tool_handle",
        "thermal:ruby",
        "thermal:ruby",
        "thermal:ruby",
        "rubinated_nether:ruby",
        "rubinated_nether:ruby",
        "rubinated_nether:ruby"],
		"#forge:rods/netherite",
		"kubejs:reinforced_tool_handle",
		5000)

    let betterRods = ["kubejs:reinforced_tool_handle","kubejs:heavenly_tool_handle"].forEach(rod => {
        apparatus([
            rod,
            "enigmaticlegacy:astral_dust",
            "enigmaticlegacy:astral_dust",
            "thermal:ruby",
            "thermal:sapphire",
            "kubejs:infused_amethyst"],
            "#forge:rods/enderium",
            "enigmaticlegacy:ender_rod",
            10000)
    });
    

    apparatus([
		"kubejs:zinc_tool_handle",
		"thermal:ruby",
		"#forge:storage_blocks/gold",
		"#forge:storage_blocks/gold",
		"#forge:storage_blocks/gold",
		"#forge:storage_blocks/gold"],
		"bundle","kubejs:gold_upgrade_parts")

	apparatus([
		"#forge:plates/steel",
		"#forge:plates/steel",
		"#forge:plates/steel",
		"#forge:plates/steel"],
		"bundle","kubejs:steel_upgrade_parts")

    apparatus([
        "#minecraft:beds",
        "thermal:gunpowder_block",
        "thermal:gunpowder_block",
        "thermal:gunpowder_block",
        "ars_nouveau:fire_essence",
        "ars_nouveau:fire_essence",
        "ars_nouveau:fire_essence",
        "ars_nouveau:fire_essence"
    ],
    "kubejs:golden_magic_feather",
    "kubejs:fiery_magic_feather")

    function Tokens(output,input,infusedGem,gem)
    {
        apparatus([
            infusedGem,
            gem,
            gem,
            gem,
            gem,
        ],
        "naturesaura:token_"+input,
        "naturesaura:token_"+output
        )
    }
    Tokens("rage","anger","thermal:ruby","rubinated_nether:ruby")
    Tokens("grief","sorrow","thermal:sapphire","kubejs:sapphire")
    Tokens("terror","fear","kubejs:infused_emerald","emerald")
    Tokens("euphoria","joy","kubejs:infused_amethyst","amethyst_shard")

    function enchanterWeapons(output,input)
    {
        apparatus([
            "#forge:gears/tainted_gold",
            "#forge:gears/source_alloy",
            "irons_spellbooks:weapon_parts",
            "ars_nouveau:manipulation_essence",
            "ars_nouveau:manipulation_essence",
            "ars_nouveau:manipulation_essence",
            
        ],
        input,
        output)

        event.remove({output:output})
    }

    enchanterWeapons("ars_nouveau:wand","irons_spellbooks:ice_staff")
    enchanterWeapons("ars_nouveau:spell_bow","minecraft:bow")
    enchanterWeapons("ars_nouveau:spell_crossbow","minecraft:crossbow")
    enchanterWeapons("ars_nouveau:enchanters_sword","minecraft:diamond_sword")
    enchanterWeapons("arsdelight:enchanters_knife","farmersdelight:diamond_knife")
    enchanterWeapons("ars_nouveau:enchanters_mirror","#c:glass_blocks")

})