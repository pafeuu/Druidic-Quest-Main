ItemEvents.modification(event=>{

    let stacking16 = ['minecraft:potion',
    'minecraft:saddle',
    "minecraft:writable_book",
    "enigmaticlegacy:recall_potion",
    "enigmaticlegacy:mending_mixture",
    "minecraft:splash_potion",
    "minecraft:lingering_potion",
    "enigmaticlegacy:common_potion",
    "enigmaticlegacy:common_potion_splash",
    "enigmaticlegacy:common_potion_lingering",
    "enigmaticlegacy:ultimate_potion",
    "enigmaticlegacy:ultimate_potion_splash",
    "enigmaticlegacy:ultimate_potion_lingering"]

  let stacking64 = ["minecraft:snowball",
    'wizards_reborn:orbital_fluid_retainer',
    "naturesaura_plus:aura_coffee",
    "twilightforest:meef_stroganoff",
    "ender_pearl",
    "minecraft:cake",
    "brewinandchewin:pizza",
    'minecraft:beetroot_soup',
    "farmersdelight:cooking_pot",
    'farmersdelight:cooked_rice',
    'farmersdelight:bone_broth',
    'farmersdelight:beef_stew',
    'farmersdelight:chicken_soup',
    'farmersdelight:vegetable_soup',
    'farmersdelight:fish_stew',
    'farmersdelight:fried_rice',
    'farmersdelight:squid_ink_pasta',
    'farmersdelight:ratatouille',
    'farmersdelight:steak_and_potatoes',
    'farmersdelight:vegetable_noodles',
    'farmersdelight:roasted_mutton_chops',
    'farmersdelight:mushroom_rice',
    'farmersdelight:pasta_with_mutton_chop',
    'farmersdelight:pasta_with_meatballs',
    'farmersdelight:bacon_and_eggs',
    'farmersdelight:noodle_soup',
    'farmersdelight:baked_cod_stew',
    'farmersdelight:pumpkin_soup',
    'farmersdelight:grilled_salmon',
    'farmersdelight:roast_chicken_block',
    'farmersdelight:roast_chicken',
    'farmersdelight:stuffed_pumpkin_block',
    'farmersdelight:stuffed_pumpkin',
    'farmersdelight:honey_glazed_ham_block',
    'farmersdelight:honey_glazed_ham',
    'farmersdelight:shepherds_pie_block',
    'farmersdelight:shepherds_pie',
    'farmersdelight:rice_roll_medley_block',
    'farmersdelight:dog_food',
    'farmersdelight:horse_feed',
    'farmersdelight:apple_cider',
    'farmersdelight:hot_cocoa',
    'farmersdelight:milk_bottle',
    'farmersdelight:nether_salad',
    'farmersdelight:mixed_salad',
    'farmersdelight:fruit_salad',
    'farmersdelight:glow_berry_custard',
    'fruitsdelight:mangosteen_tea',
    'biomeswevegone:aloe_vera_juice',
    'sob:cactus_juice',
    'fruitsdelight:lychee_cherry_tea',
    'fruitsdelight:kiwi_juice',
    'fruitsdelight:pear_juice',
    'fruitsdelight:lemon_juice',
    'fruitsdelight:orange_juice',
    'fruitsdelight:hamimelon_juice',
    'sob:glittering_gloop',
    'fruitsdelight:peach_tea',
    'fruitsdelight:mango_tea',
    'fruitsdelight:hawberry_tea',
    'arsdelight:source_berry_tea',
    'arsdelight:frostaya_tea',
    'arsdelight:bombegrante_tea',
    'arsdelight:bastion_tea',
    'arsdelight:mendosteen_tea',
    'create:builders_tea',
    'arsdelight:arch_soup',
    'arsdelight:bastion_hornbeer',
    'arsdelight:mendosteen_hornbeer',
    'arsdelight:frostaya_hornbeer',
    'arsdelight:bombegrante_hornbeer',
    'arsdelight:source_berry_hornbeer',
    "minecraft:minecart",
    "minecraft:tnt_minecart",
    "minecraft:furnace_minecart",
    "minecraft:chest_minecart",
    "minecraft:hopper_minecart",
    'supplementaries:dispenser_minecart',
    'immersiveengineering:minecart_woodencrate',
    'immersiveengineering:minecart_reinforcedcrate',
    'immersiveengineering:minecart_woodenbarrel',
    'naturesaura:mover_cart']

    stacking16.forEach((id)=>{

        event.modify(id, item=>{
            item.maxStackSize = 16
        })

    })

    stacking64.forEach((id)=>{

        event.modify(id, item=>{
            item.maxStackSize = 64
        })
        
    })


})