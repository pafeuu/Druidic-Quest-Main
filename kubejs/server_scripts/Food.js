ServerEvents.recipes(e => {

    const cooking = e.recipes.farmersdelight.cooking

    const cutting = e.recipes.farmersdelight.cutting

    function foodSmelting(output,input,exp,timeInSeconds)
    {
        e.smelting(output,input,exp,timeInSeconds*20)
        e.campfireCooking(output,input,exp,timeInSeconds*20)
        e.smoking(output,input,exp,timeInSeconds*20)
    }
    foodSmelting("farmersdelight:fried_egg","#c:eggs",1,10)
    
    cutting("fruitsdelight:durian","#forge:tools/axes",["2x fruitsdelight:durian_flesh","fruitsdelight:durian_helmet","fruitsdelight:durian_sapling"]).id("fruitsdelight:durian_cutting")
    
    const arsLogs = ["green","purple","blue","red"]

    arsLogs.forEach(type => {

        cutting(`ars_nouveau:${type}_archwood_log`,"#forge:tools/axes",[`ars_nouveau:stripped_${type}_archwood_log`,"farmersdelight:tree_bark"])
        cutting(`ars_nouveau:${type}_archwood_wood`,"#forge:tools/axes",[`ars_nouveau:stripped_${type}_archwood_wood`,"farmersdelight:tree_bark"])
        
    });

    e.shapeless("create:sweet_roll",["create:dough","2x sugar","#forge:milk"]).id("create:filling/sweet_roll")
    e.shapeless("ars_nouveau:source_berry_roll",["create:dough","sugar","2x ars_nouveau:sourceberry_bush"]).id("ars_nouveau:source_berry_roll")
    e.remove({id:"thermal:compat/create/bottler_create_sweet_roll"})
    const arsFruits = ["mendosteen","bastion","bombegrante","frostaya"]
    arsFruits.forEach(fruit => {

        let pod = `ars_nouveau:${fruit}_pod`

        if(fruit=="bombegrante")
            pod = "ars_nouveau:bombegranate_pod"

        cooking(["sugar","#arsdelight:leaves",pod,pod],`arsdelight:${fruit}_tea`,5,200,"glass_bottle")
        cooking([pod,pod,"ars_nouveau:magebloom","ars_nouveau:magebloom","minecraft:honey_bottle","minecraft:honey_bottle"],`arsdelight:${fruit}_hornbeer`,10,200,"arsdelight:chimera_horn")
    });
    
    e.shaped("aether:candy_cane",["C","C"],{C:"supplementaries:candy"})
    
    cooking(["#ars_nouveau:shady_wizard_fruits","#ars_nouveau:shady_wizard_fruits","ars_nouveau:sourceberry_bush","ars_nouveau:sourceberry_bush"],"arsdelight:arch_soup",2,200,"bowl")
    
    cooking(["ars_nouveau:sourceberry_bush","ars_nouveau:sourceberry_bush","ars_nouveau:magebloom","ars_nouveau:magebloom","minecraft:honey_bottle","minecraft:honey_bottle"],`arsdelight:source_berry_hornbeer`,10,200,"arsdelight:chimera_horn").id("arsdelight:cooking/source_berry_hornbeer")
    
    cooking(["honey_bottle",
        "vintagedelight:roasted_peanut",
        "vintagedelight:roasted_peanut",
        "vintagedelight:roasted_peanut",
        "sugar",
        "vintagedelight:salt_dust"],"sob:candied_peanuts",1,200).id("sob:cooking/candied_peanuts")

    cooking(["minecraft:apple",
        "#forge:dusts/gold",
        "#forge:dusts/gold",
        "#forge:dusts/gold",
        "#forge:dusts/gold",
        "immersive_weathering:golden_moss_clump"],"minecraft:golden_apple",10,200).id("minecraft:golden_apple")
   
    cooking(["immersive_weathering:moss_clump",
        "#forge:dusts/gold",
        "#forge:dusts/gold",
        "#forge:dusts/gold",
        "#forge:dusts/gold",
        "minecraft:oxeye_daisy"],"immersive_weathering:golden_moss_clump",10,200).id("immersive_weathering:golden_moss_clump")
    
    cooking(["immersive_weathering:moss_clump",
        "#forge:dusts/gold",
        "#forge:dusts/gold",
        "#forge:dusts/gold",
        "#forge:dusts/gold",
        "fruitsdelight:melon_jelly"],"immersive_weathering:golden_moss_clump",10,200)
    
    cooking(["minecraft:carrot",
        "#forge:dusts/gold"],"minecraft:golden_carrot",2,100).id("minecraft:golden_carrot")
    
    cooking(["minecraft:golden_apple",
        "naturesaura:tainted_gold_block",
        "fruitsdelight:apple_jelly",
        "minecraft:enchanted_book",
        "vintagedelight:ghost_pepper",
        "vintagedelight:nut_mash_mason_jar"],"minecraft:enchanted_golden_apple",20,200)

    e.remove({id:"biomeswevegone:golden_apple_from_green_apple"})
    
    cooking([
        "echo_shard",
        "naturesaura_plus:aura_coffee",
        "honey_bottle",
        "#dq:spices",
        ],"sob:echo_rock_candy",10,200)

    cooking(["kubejs:aquatic_spice",
        "kubejs:aquatic_spice",
        "kubejs:underground_spice",
        "kubejs:underground_spice",
        "kubejs:nether_spice",
        "enchanted_golden_apple"],"enigmaticlegacy:forbidden_fruit",100,200)
    
    cooking(["kubejs:cosmic_spice",
        "kubejs:cosmic_spice",
        "kubejs:heavenly_spice",
        "kubejs:heavenly_spice",
        "enigmaticlegacy:astral_dust",
        "golden_apple"],"enigmaticlegacy:astral_fruit",100,200)

    cooking(["kubejs:cosmic_spice",
        "kubejs:cosmic_spice",
        "kubejs:heavenly_spice",
        "kubejs:heavenly_spice",
        "enigmaticlegacy:astral_dust",
        "honey_bottle"],"enigmaticlegacy:ichor_bottle",100,200)
    
    e.custom(
        {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
            {
            "type": "l2library:potion",
            "potion": "minecraft:water"
            },
            {
            "item": "minecraft:sugar"
            },
            {
            "item": "fruitsdelight:lemon_slice"
            },
            {
            "item": "fruitsdelight:lemon_slice"
            },
            {
            "item": "fruitsdelight:lemon_slice"
            },
            {
            "item": "fruitsdelight:lemon_slice"
            },
            {
            "item": "fruitsdelight:lemon_slice"
            },
            {
            "item": "fruitsdelight:lemon_slice"
            }
        ],
        "result": {
            "item": "fruitsdelight:lemon_juice"
        }
    }
    )

    e.custom(
        {
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [
            {
            "type": "l2library:potion",
            "potion": "minecraft:water"
            },
            {
            "item": "minecraft:sugar"
            },
            {
            "item": "fruitsdelight:orange_slice"
            },
            {
            "item": "fruitsdelight:orange_slice"
            },
            {
            "item": "fruitsdelight:orange_slice"
            },
            {
            "item": "fruitsdelight:orange_slice"
            },
            {
            "item": "fruitsdelight:orange_slice"
            },
            {
            "item": "fruitsdelight:orange_slice"
            }
        ],
        "result": {
            "item": "fruitsdelight:orange_juice"
        }
    }
    )

    e.shapeless("create:dough",["farmersdelight:wheat_dough","farmersdelight:milk_bottle","sugar"])

    e.shapeless("4x create:dough",["4x farmersdelight:wheat_dough","minecraft:milk_bucket","4x sugar"])

    e.remove({output:"create:dough"})
    e.remove({output:"farmersdelight:wheat_dough"})
    e.remove({id:"farmersdelight:wheat_dough_from_water"})

    function JamsSmallFruit(output,fruit,id)
    {
        cooking([fruit,fruit,fruit,fruit,"sugar","fruitsdelight:lemon_slice"],output,1,200).id(id)
    }

    function Jelly(output,jam,id)
    {
        cooking([jam,jam,"sugar","#forge:slimeballs"],output,2,200).id(id)
    }

    const FruitsDelightFruits = [
        "fig",
        "lemon",
        "pear",
        "kiwi",
        "blueberry",
        "mango",
        "mangosteen",
        "durian",
        "lychee",
        "hawberry",
        "hamimelon",
        "peach",
        "bayberry",
        "orange",
        "cranberry",
        "persimmon",
        "sweetberry",
        "pineapple"]

    FruitsDelightFruits.forEach(fruit => {
        Jelly("fruitsdelight:"+fruit+"_jello","fruitsdelight:"+fruit+"_jelly","kubejs:"+fruit+"_jello")    
    });

    Jelly("fruitsdelight:melon_jello","fruitsdelight:melon_jelly","kubejs:melon_jello")
    Jelly("fruitsdelight:chorus_jello","fruitsdelight:chorus_jelly","kubejs:chorus_jello")
    Jelly("fruitsdelight:apple_jello","fruitsdelight:apple_jelly","kubejs:apple_jello")
    Jelly("fruitsdelight:glowberry_jello","fruitsdelight:glowberry_jelly","kubejs:glowberry_jello")
    Jelly("arsdelight:frostaya_jelly","arsdelight:neutralized_frostaya_jam","arsdelight:cooking/frostaya_jelly")
    Jelly("arsdelight:source_berry_jelly","arsdelight:source_berry_jam","arsdelight:cooking/source_berry_jelly")
    Jelly("arsdelight:bombegrante_jelly","arsdelight:neutralized_bombegrante_jam","arsdelight:cooking/bombegrante_jelly")
    Jelly("arsdelight:bastion_jelly","arsdelight:activated_bastion_jam","arsdelight:cooking/bastion_jelly")
    Jelly("arsdelight:mendosteen_jelly","arsdelight:activated_mendosteen_jam","arsdelight:cooking/mendosteen_jelly")

    /*function JamsBigFruit(output,fruit,id)
    {
        cooking([fruit,fruit,"sugar","fruitsdelight:lemon_slice"],output,1,200).id(id)
    }*/

    //cooking('arsdelight:source_berry_jam',["4x ars_nouveau:sourceberry_bush","sugar","fruitsdelight:lemon_slice"],1,200)
    JamsSmallFruit('arsdelight:source_berry_jam',"ars_nouveau:sourceberry_bush","arsdelight:cooking/source_berry_jam")
    JamsSmallFruit('arsdelight:activated_bastion_jam',"ars_nouveau:bastion_pod","arsdelight:cooking/activated_bastion_jam")
    JamsSmallFruit('arsdelight:activated_mendosteen_jam',"ars_nouveau:mendosteen_pod","arsdelight:cooking/activated_mendosteen_jam")
    JamsSmallFruit('arsdelight:neutralized_bombegrante_jam',"ars_nouveau:bombegranate_pod","arsdelight:cooking/neutralized_bombegrante_jam")
    JamsSmallFruit('arsdelight:neutralized_frostaya_jam',"ars_nouveau:frostaya_pod","arsdelight:cooking/neutralized_frostaya_jam")
    JamsSmallFruit('vintagedelight:gearo_berry_mason_jar',"vintagedelight:gearo_berry","vintagedelight:cooking/gearo_berry_jam_jar")
    JamsSmallFruit('vintagedelight:pepper_jam_mason_jar',"#forge:vegetables/pepper","vintagedelight:cooking/pepper_jam_jar")

    e.shapeless("sob:pbnj",["bread","#forge:jams","vintagedelight:nut_mash_bottle"]).id("sob:crafting/pbnj")
    e.shapeless("2x sob:ants_log",["2x sob:asparagus","2x sob:dried_berries","vintagedelight:nut_mash_bottle"]).id("sob:crafting/ants_log")

    e.remove({id:"vintagedelight:fermenting/vinegar_from_jam_bottles"})
    e.custom({
        "type": "vintagedelight:fermenting",
        "processingTime": 1200,
        "ingredients": [
            {"tag": "forge:jams"},
            {"tag": "c:mushrooms"}
        ],
        "output": {
            "count": 1,
            "item": "vintagedelight:vinegar_mason_jar"
        },
        "secondaryOutput": {
            "count": 1,
            "item": "vintagedelight:organic_mash"}
    }).id("vintagedelight:fermenting/vinegar_from_jam")

    cutting("create:dough","#c:tools/knives","3x kubejs:cookie_dough")
    cutting("vintagedelight:oat","#c:tools/knives","farmersdelight:straw").id("vintagedelight:cutting/oat_cutting")
    

    function Cookies(cookie,addition,id)
    {
        e.shapeless("2x "+cookie,[addition,"sugar","2x kubejs:cookie_dough"]).id(id)
    }

    e.remove({id:"quark:tweaks/crafting/utility/bent/cookie"})
    Cookies("minecraft:cookie","cocoa_beans","minecraft:cookie")
    Cookies("vintagedelight:oatmeal_cookie","vintagedelight:raw_oats","vintagedelight:oatmeal_cookie")
    Cookies("arsdelight:source_berry_cookie","ars_nouveau:sourceberry_bush","arsdelight:source_berry_cookie")
    Cookies("fruitsdelight:persimmon_cookie","fruitsdelight:persimmon","fruitsdelight:persimmon_cookie")
    Cookies("fruitsdelight:lemon_cookie","fruitsdelight:lemon","fruitsdelight:lemon_cookie")
    Cookies("fruitsdelight:cranberry_cookie","fruitsdelight:cranberry","fruitsdelight:cranberry_cookie")
    Cookies("fruitsdelight:bayberry_cookie","fruitsdelight:bayberry","fruitsdelight:bayberry_cookie")
    Cookies("farmersdelight:sweet_berry_cookie","minecraft:sweet_berries","farmersdelight:sweet_berry_cookie")
    Cookies("farmersdelight:honey_cookie","honey_bottle","farmersdelight:honey_cookie")

    e.shaped("vintagedelight:cheese_pizza",
        [
            "AAA",
            "BBB",
            "CCC"
        ],
        {
            A: "vintagedelight:cheese_slice",
            B: "kubejs:pizza_sauce",
            C: "#forge:dough"
        }
    ).id("vintagedelight:cheese_pizza")

    e.shapeless("brewinandchewin:pizza",["vintagedelight:cheese_pizza","#forge:vegetables","#forge:vegetables"]).id("brewinandchewin:pizza")
    e.shapeless("vintagedelight:meat_pizza",["vintagedelight:cheese_pizza","#forge:foods/meat/cooked","#forge:foods/meat/cooked"]).id("vintagedelight:meat_pizza")
    
})
