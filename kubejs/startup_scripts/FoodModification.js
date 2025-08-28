ItemEvents.modification(event=>{

    const CookedMeatSlices = [
        'alexsdelight:cooked_catfish_slice',
        'tide:cooked_fish_slice',
        'farmersdelight:cooked_cod_slice',
        'farmersdelight:cooked_salmon_slice',
        'alexsdelight:cooked_bunfungus_drumstick',
        'alexsdelight:cooked_kangaroo_shank',
        'alexsdelight:cooked_loose_moose_rib',
        'farmersdelight:cooked_chicken_cuts',
        'farmersdelight:cooked_mutton_chops',
        'alexsdelight:bison_patty',
        'farmersdelight:beef_patty',
        'farmersdelight:cooked_bacon',
        'arsdelight:grilled_wilden_meat_slice']

    const Juice = []

    const Jam = []

    const Jello = []
    
    const FruitSlices = [
        'minecraft:melon_slice',
        'fruitsdelight:lemon_slice',
        'fruitsdelight:hamimelon_slice',
        'fruitsdelight:pineapple_slice',
        'fruitsdelight:orange_slice',
        'farmersdelight:pumpkin_slice',
        'minecraft:glow_berries',
        'fruitsdelight:hawberry',
        'fruitsdelight:bayberry',
        'fruitsdelight:cranberry',
        'fruitsdelight:blueberry',
        'vintagedelight:gearo_berry',
        'aether_redux:zanberry',
        'aether:blue_berry',
        'ars_nouveau:sourceberry_bush',
        'minecraft:sweet_berries',
        'biomeswevegone:blueberries',
        'deeperdarker:bloom_berries',
        'deep_aether:golden_vines']

    FruitSlices.forEach(id => {
        event.modify(id, item => {
            item.foodProperties = food => {
                food.hunger(1)
                food.saturation(0.5)
                food.fastToEat()
            }
        })
    });

    const Fruit = [
        'fruitsdelight:mangosteen',
        'ars_nouveau:bombegranate_pod',
        'biomeswevegone:baobab_fruit',
        'biomeswevegone:yucca_fruit',
        'minecraft:chorus_fruit',
        'quark:ancient_fruit',
        'ars_nouveau:bastion_pod',
        'biomeswevegone:green_apple',
        'minecraft:apple',
        'ars_nouveau:frostaya_pod',
        'fruitsdelight:fig',
        'fruitsdelight:lemon',
        'fruitsdelight:kiwi',
        'ars_nouveau:mendosteen_pod',
        'fruitsdelight:persimmon',
        'fruitsdelight:pear',
        'fruitsdelight:peach',
        'fruitsdelight:orange',
        'fruitsdelight:lychee',
        'fruitsdelight:mango']

    Fruit.forEach(id => {
        event.modify(id, item => {
            item.foodProperties = food => {
                food.hunger(2)
                food.saturation(0.4)
            }
        })
    });

    const Veggie = [
        'minecraft:carrot',
        'minecraft:potato',
        'minecraft:beetroot',
        'farmersdelight:cabbage',
        'farmersdelight:tomato',
        'farmersdelight:onion',
        'biomeswevegone:oddion_bulb',
        'biomeswevegone:white_puffball_cap',
        'vintagedelight:peanut',
        'vintagedelight:ghost_pepper',
        'vintagedelight:cucumber',
        'sob:asparagus',
        'sob:nopal']

    Veggie.forEach(id => {
        event.modify(id, item => {
            item.foodProperties = food => {
                food.hunger(2)
                food.saturation(0.5)
            }
        })
    });

    const BakedPlant = [
        'minecraft:baked_potato',
        'fruitsdelight:baked_pear',
        'fruitsdelight:baked_durian',
        'biomeswevegone:cooked_white_puffball_cap',
        'farmersdelight:cooked_rice',
        'farmersdelight:tomato_sauce',
        'vintagedelight:roasted_peanut',
        'fruitsdelight:dried_persimmon',
        'biomeswevegone:cooked_oddion_bulb',
        'biomeswevegone:cooked_yucca_fruit',
        'sob:prickly_pear',
        'sob:dried_berries']

    BakedPlant.forEach(id => {
        event.modify(id, item => {
            item.foodProperties = food => {
                food.hunger(5)
                food.saturation(0.5)
            }
        })
    });

    const SweetenPlant = [
        'aether:enchanted_berry',
        'create:chocolate_glazed_berries',
        'create:honeyed_apple',
        'vintagedelight:honey_roasted_peanut',
        'minecraft:golden_carrot',
        'sob:golden_prickly_pear']

    SweetenPlant.forEach(id => {
        event.modify(id, item => {
            item.foodProperties = food => {
                food.hunger(7)
                food.saturation(0.5)
            }
        })
    });

    const Pie = [
        'fruitsdelight:pineapple_pie',
        'aether_redux:blueberry_pie',
        'aether_redux:enchanted_blueberry_pie',
        'farmersdelight:apple_pie',
        'farmersdelight:chocolate_pie',
        'ars_nouveau:source_berry_pie',
        'create:blaze_cake',
        'mynethersdelight:magma_cake_block',
        'fruitsdelight:durian_pie',
        'farmersdelight:sweet_berry_cheesecake',
        'minecraft:cake',
        'fruitsdelight:mangosteen_cake',
        'biomeswevegone:blueberry_pie',
        'biomeswevegone:green_apple_pie',
        'minecraft:pumpkin_pie',
        'arsdelight:bombegrante_pie',
        'arsdelight:frostaya_pie',
        'arsdelight:bastion_pie',
        'arsdelight:mendosteen_pie']

    Pie.forEach(id => {
        event.modify(id, item => {
            item.foodProperties = food => {
                food.hunger(16)
                food.saturation(0.5)
            }
        })
    });

    const PieSlice = [
        'farmersdelight:chocolate_pie_slice',
        'farmersdelight:apple_pie_slice',
        'farmersdelight:cake_slice',
        'farmersdelight:sweet_berry_cheesecake_slice',
        'mynethersdelight:magma_cake_slice',
        'supplementaries:pancake',
        'arsdelight:mendosteen_pie_slice',
        'arsdelight:source_berry_pie_slice',
        'arsdelight:bastion_pie_slice',
        'arsdelight:frostaya_pie_slice']

    PieSlice.forEach(id => {
        event.modify(id, item => {
            item.foodProperties = food => {
                food.hunger(4)
                food.saturation(0.5)
                food.fastToEat()
            }
        })
    });

    const RawMeat = [
        'deep_aether:raw_quail',
        'twilightforest:raw_venison',
        'alexsmobs:moose_ribs',
        'deep_aether:raw_aerglow_fish',
        'quark:crab_leg',
        'twilightforest:raw_meef',
        'alexsmobs:raw_catfish',
        'alexsdelight:raw_bison',
        'alexsdelight:raw_bunfungus',
        'minecraft:beef',
        'minecraft:porkchop',
        'minecraft:mutton',
        'minecraft:chicken',
        'minecraft:rabbit',
        'minecraft:cod',
        'minecraft:salmon',
        'alexsmobs:kangaroo_meat',
        'alexsmobs:lobster_tail',
        'forbidden_arcanus:tentacle',
        'mynethersdelight:strider_slice',
        'arsdelight:wilden_meat']

    RawMeat.forEach(id => {
        event.modify(id, item => {
            item.foodProperties = food => {
                food.hunger(2)
                food.saturation(0.2)
            }
        })
    });

    const RawMeatSlices = [
        'tide:fish_slice',
        'alexsdelight:raw_catfish_slice',
        'alexsdelight:raw_bunfungus_drumstick',
        'farmersdelight:chicken_cuts',
        'farmersdelight:bacon',
        'farmersdelight:cod_slice',
        'farmersdelight:salmon_slice',
        'farmersdelight:mutton_chops',
        'alexsdelight:kangaroo_shank',
        'alexsdelight:loose_moose_rib',
        'alexsdelight:bison_mince',
        'mynethersdelight:minced_strider',
        'farmersdelight:minced_beef',
        'arsdelight:wilden_meat_slice']

    RawMeatSlices.forEach(id => {
        event.modify(id, item => {
            item.foodProperties = food => {
                food.hunger(1)
                food.saturation(0.2)
                food.fastToEat()
            }
        })
    });

    CookedMeatSlices.forEach(id => {
        event.modify(id, item => {
            item.foodProperties = food => {
                food.hunger(2)
                food.saturation(0.4)
                food.fastToEat()
            }
        })
    });

    const CookedMeat = [
        'farmersdelight:ham',
        'alexsmobs:cooked_kangaroo_meat',
        'minecraft:cooked_beef',
        'minecraft:cooked_porkchop',
        'minecraft:cooked_mutton',
        'minecraft:cooked_chicken',
        'minecraft:cooked_rabbit',
        'minecraft:cooked_cod',
        'minecraft:cooked_salmon',
        'quark:cooked_crab_leg',
        'mynethersdelight:cooked_loin',
        'deep_aether:cooked_quail',
        'deep_aether:cooked_aerglow_fish',
        'alexsmobs:cooked_lobster_tail',
        'alexsmobs:cooked_moose_ribs',
        'alexsmobs:cooked_catfish',
        'twilightforest:cooked_venison',
        'twilightforest:cooked_meef',
        'alexsdelight:cooked_centipede_leg',
        'alexsdelight:cooked_bison',
        'alexsdelight:cooked_bunfungus',
        'tide:cooked_fish',
        'forbidden_arcanus:cooked_tentacle',
        'arsdelight:grilled_wilden_meat']

    CookedMeat.forEach(id => {
        event.modify(id, item => {
            item.foodProperties = food => {
                food.hunger(4)
                food.saturation(0.4)
            }
        })
    });

    const BetterMeat = [
        'farmersdelight:smoked_ham',
        'twilightforest:hydra_chop']

    BetterMeat.forEach(id => {
        event.modify(id, item => {
            item.foodProperties = food => {
                food.hunger(7)
                food.saturation(0.4)
            }
        })
    });

    const Cookie = [
        'farmersdelight:sweet_berry_cookie',
        'fruitsdelight:cranberry_cookie',
        'fruitsdelight:bayberry_cookie',
        'farmersdelight:honey_cookie',
        'minecraft:cookie',
        'vintagedelight:oatmeal_cookie',
        'fruitsdelight:persimmon_cookie',
        'fruitsdelight:lemon_cookie',
        'fruitsdelight:cranberry_cookie',
        'arsdelight:source_berry_cookie']

    Cookie.forEach(id => {
        event.modify(id, item => {
            item.foodProperties = food => {
                food.hunger(6)
                food.saturation(0.4)
            }
        })
    });

    const PickledStuff = [
        'vintagedelight:pickled_pepper',
        'vintagedelight:pickle',
        'vintagedelight:pickled_onion',
        'vintagedelight:pickled_beetroot',
        'vintagedelight:pickled_egg',
        'vintagedelight:pickled_pitcher_pod',
        'brewinandchewin:pickled_pickles']

    PickledStuff.forEach(id => {
        event.modify(id, item => {
            item.foodProperties = food => {
                food.hunger(8)
                food.saturation(0.4)
            }
        })
    });
    
    
})