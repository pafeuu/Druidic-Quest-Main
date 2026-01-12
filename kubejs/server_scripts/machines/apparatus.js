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

    apparatus([
        "immersiveengineering:hemp_fabric",
        "immersiveengineering:hemp_fabric",
        "immersiveengineering:hemp_fabric",
        "kubejs:arcane_leather",
        "kubejs:arcane_leather",
        "kubejs:arcane_leather",
    ],"forbidden_arcanus:cloth","irons_spellbooks:magic_cloth",2500).id("irons_spellbooks:magic_cloth")

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

})