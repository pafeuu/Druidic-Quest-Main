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

    const Jam = [
        'fruitsdelight:durian_jelly',
        'fruitsdelight:orange_jelly',
        'vintagedelight:pepper_jam_mason_jar',
        'vintagedelight:gearo_berry_mason_jar',
        'arsdelight:source_berry_jam',
        'arsdelight:activated_mendosteen_jam',
        'arsdelight:activated_bastion_jam',
        'arsdelight:neutralized_bombegrante_jam',
        'arsdelight:neutralized_frostaya_jam',
        'fruitsdelight:chorus_jelly',
        'fruitsdelight:fig_jelly',
        'fruitsdelight:kiwi_jelly',
        'fruitsdelight:sweetberry_jelly',
        'fruitsdelight:mangosteen_jelly',
        'fruitsdelight:apple_jelly',
        'fruitsdelight:blueberry_jelly',
        'fruitsdelight:cranberry_jelly',
        'fruitsdelight:lemon_jelly',
        'fruitsdelight:glowberry_jelly',
        'fruitsdelight:hamimelon_jelly',
        'fruitsdelight:pineapple_jelly',
        'fruitsdelight:persimmon_jelly',
        'fruitsdelight:melon_jelly',
        'fruitsdelight:hawberry_jelly',
        'fruitsdelight:pear_jelly',
        'fruitsdelight:peach_jelly',
        'fruitsdelight:lychee_jelly',
        'fruitsdelight:mango_jelly',
        'fruitsdelight:bayberry_jelly']

    Jam.forEach(id => {
        event.modify(id, item => {
            item.foodProperties = food => {
                food.hunger(5)
                food.saturation(0.5)
                food.fastToEat()
            }
        })
    });

    const Jello = [
        'fruitsdelight:chorus_jello',
        'fruitsdelight:orange_jello',
        'fruitsdelight:melon_jello',
        'fruitsdelight:cranberry_jello',
        'fruitsdelight:fig_jello',
        'fruitsdelight:persimmon_jello',
        'fruitsdelight:sweetberry_jello',
        'fruitsdelight:lemon_jello',
        'fruitsdelight:pineapple_jello',
        'arsdelight:source_berry_jelly',
        'arsdelight:mendosteen_jelly',
        'arsdelight:bastion_jelly',
        'arsdelight:bombegrante_jelly',
        'fruitsdelight:blueberry_jello',
        'fruitsdelight:pear_jello',
        'fruitsdelight:kiwi_jello',
        'fruitsdelight:apple_jello',
        'arsdelight:frostaya_jelly',
        'fruitsdelight:bayberry_jello',
        'fruitsdelight:glowberry_jello',
        'fruitsdelight:peach_jello',
        'fruitsdelight:hamimelon_jello',
        'fruitsdelight:hawberry_jello',
        'fruitsdelight:lychee_jello',
        'fruitsdelight:durian_jello',
        'fruitsdelight:mangosteen_jello',
        'fruitsdelight:mango_jello']

    Jello.forEach(id => {
        event.modify(id, item => {
            item.foodProperties = food => {
                food.hunger(7)
                food.saturation(0.4)
            }
        })
    });
    
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
        'fruitsdelight:mango',
        'tide:apple_fishing_bobber',
        "fruitsdelight:durian_flesh"]

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
        'sob:dried_berries',
        'fruitsdelight:baked_pear']

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

    const Dough = [
        'vintagedelight:oat_dough',
        'mynethersdelight:ghast_dough',
        'mynethersdelight:ghast_sourdough',
        'farmersdelight:wheat_dough',
        'sob:cinder_dough',
        'create:dough',
        'farmersdelight:pie_crust',
        'create:blaze_cake_base',
        'kubejs:cookie_dough']
    
    Dough.forEach(id => {
        event.modify(id, item => {
            item.foodProperties = food => {
                food.hunger(1)
                food.saturation(0.5)
                food.effect("minecraft:hunger",10,0,0.5)
            }
        })
    });

    const Pie = [
        'brewinandchewin:quiche',
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
        'arsdelight:mendosteen_pie',
        "fruitsdelight:fig_tart",
        "fruitsdelight:lemon_tart"]

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
        'arsdelight:frostaya_pie_slice',
        'arsdelight:bombegrante_pie_slice']

    PieSlice.forEach(id => {
        event.modify(id, item => {
            item.foodProperties = food => {
                food.hunger(5)
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
        'arsdelight:grilled_wilden_meat',
        'brewinandchewin:jerky']

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

    const Juice = [
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
        'create:builders_tea']

    Juice.forEach(id => {
        event.modify(id, item => {
            item.foodProperties = food => {
                food.hunger(5)
                food.saturation(0.7)
            }
        })
    });

    function hunger(id,hunger,saturation)
    {
        event.modify(id, item => {
            item.foodProperties = food => {
                food.hunger(hunger)
                food.saturation(saturation/hunger/2)
            }
        })
    }

    hunger("sob:echo_rock_candy",8,6)

    hunger("vintagedelight:cheese_pizza",20,16)//Regular Pizza
    hunger("vintagedelight:cheese_pizza_slice",6,7)

    hunger("brewinandchewin:pizza",20,18)//Veggie Pizza
    hunger("brewinandchewin:pizza_slice",6,8)
    
    hunger("vintagedelight:meat_pizza",20,18)
    hunger("vintagedelight:meat_pizza_slice",6,8)

    hunger("arsdelight:arch_soup",8,8)

    const HornBeers = ['arsdelight:bastion_hornbeer', 'arsdelight:mendosteen_hornbeer', 'arsdelight:frostaya_hornbeer', 'arsdelight:bombegrante_hornbeer', 'arsdelight:source_berry_hornbeer']

    HornBeers.forEach(id => {
        hunger(id,12,12)
    });

    
    
    
})