const $CuriosApi = Java.loadClass("top.theillusivec4.curios.api.CuriosApi")

LootJS.modifiers((event) => {
    
    if (global.nukelist.length > 0) {
      for (const entry of global.nukelist) {
         event.addLootTypeModifier(LootType.CHEST).removeLoot(entry)
         event.addLootTypeModifier(LootType.BLOCK).removeLoot(entry)
         event.addLootTypeModifier(LootType.ENTITY).removeLoot(entry)
         event.addLootTypeModifier(LootType.FISHING).removeLoot(entry)
         event.addLootTypeModifier(LootType.GIFT).removeLoot(entry)
         event.addLootTypeModifier(LootType.PIGLIN_BARTER).removeLoot(entry)
         event.addLootTypeModifier(LootType.ADVANCEMENT_ENTITY).removeLoot(entry)
         event.addLootTypeModifier(LootType.ADVANCEMENT_REWARD).removeLoot(entry)
         event.addLootTypeModifier(LootType.UNKNOWN).removeLoot(entry)
      }
   }

    ///==================================Enchanted Books==========================

    event.addLootTypeModifier([
        LootType.CHEST,
        LootType.PIGLIN_BARTER,
        LootType.FISHING
        ]).replaceLoot("minecraft:enchanted_book","kubejs:enchanting_rune")

    ///=======================================Replacing Junk

    event.addLootTypeModifier(LootType.CHEST)
        .replaceLoot("minecraft:stick","8x thermal:compost")
        .replaceLoot("minecraft:ice","fruitsdelight:hamimelon_popsicle")
        .replaceLoot("minecraft:snow","fruitsdelight:kiwi_popsicle")
        .replaceLoot("minecraft:flower_pot","immersive_weathering:mulch_block")
        .replaceLoot("minecraft:snowball","fruitsdelight:hamimelon_shaved_ice")
        .replaceLoot("minecraft:oak_sapling","immersive_weathering:mulch_block")
        .replaceLoot("minecraft:dark_oak_sapling","2x immersive_weathering:mulch_block")
        .replaceLoot("minecraft:acacia_sapling","3x immersive_weathering:mulch_block")
        .replaceLoot("minecraft:spruce_sapling","2x immersive_weathering:mulch_block")
        .replaceLoot("minecraft:birch_sapling","immersive_weathering:mulch_block")
        .replaceLoot("minecraft:jungle_sapling","2x immersive_weathering:mulch_block")
        .replaceLoot("minecraft:cherry_sapling","3x immersive_weathering:mulch_block")
        .replaceLoot("minecraft:cobbled_deepslate","alexsmobs:rocky_shell")
        .replaceLoot(/.*carpet.*/,"immersiveengineering:hemp_fabric")
        .replaceLoot("minecraft:rotten_flesh","immersive_weathering:mulch_block")
        .replaceLoot("minecraft:sand","farmersdelight:cod_roll")
        .replaceLoot("minecraft:stick","farmersdelight:organic_compost")
        .replaceLoot("minecraft:wheat","farmersdelight:dough")
        .replaceLoot("quark:moss_paste","immersive_weathering:golden_moss_clump")
        .replaceLoot("minecraft:glass_bottle","minecraft:honey_bottle")
        .replaceLoot("minecraft:sugar","thermal:copper_coin")
        .replaceLoot("#minecraft:candles","thermal:copper_coin")
        .replaceLoot("minecraft:paper","minecraft:ink_sac")
        .replaceLoot("#minecraft:flowers","immersive_weathering:mulch_block")
        .replaceLoot("supplementaries:goblet", "create:iron_sheet")
        .replaceLoot("minecraft:stone", "kubejs:stone_plate")
        .replaceLoot("minecraft:smooth_stone", "kubejs:stone_plate")
        .replaceLoot("minecraft:stone_bricks", "kubejs:stone_plate")
        .replaceLoot("minecraft:snow_block", "kubejs:water_infused_arcanum")
        .replaceLoot("minecraft:clay_ball", "kubejs:earth_infused_arcanum")
        .replaceLoot("minecraft:brick", "kubejs:earth_infused_arcanum")
        .replaceLoot("minecraft:dead_bush", Item.of('fruitsdelight:jelly_bread', '{JellyEffectRoot:["PEAR"]}'))
        .replaceLoot("minecraft:green_dye",'fruitsdelight:pear_with_rock_sugar')
        .replaceLoot("minecraft:yellow_dye",Item.of('fruitsdelight:jelly_bread', '{JellyEffectRoot:["PINEAPPLE"]}'))
        .replaceLoot("large_fern","kubejs:infused_iron_nugget")
        .replaceLoot("spruce_sign","kubejs:earth_infused_arcanum")
        .replaceLoot("supplementaries:ash","kubejs:fire_infused_arcanum")
        .replaceLoot("create:andesite_ladder","thermal:silver_ingot")
        .replaceLoot("create:brass_ladder","thermal:lead_ingot")
        .replaceLoot("farmersdelight:rope","supplementaries:rope")
        
    // ====================================================Replacing Good Items
    event.addLootTypeModifier(LootType.CHEST)
        .replaceLoot("trident","kubejs:rusty_trident")
        .replaceLoot("netherite_ingot","netherite_scrap")
        .replaceLoot("netherite_block","6x netherite_scrap")
        .replaceLoot("aether:diamond_gloves","4x kubejs:diamond_plate")
        .replaceLoot("aether:iron_gloves","4x create:iron_sheet")
        .replaceLoot("vintageimprovements:redstone_module","comparator")
        .replaceLoot("minecraft:diamond_horse_armor", "create:iron_sheet")
        .replaceLoot("minecraft:golden_sword","create:golden_sheet")
        .replaceLoot("minecraft:golden_shovel","create:golden_sheet")
        .replaceLoot("minecraft:golden_pickaxe","create:golden_sheet")
        .replaceLoot("minecraft:golden_axe","create:golden_sheet")
        .replaceLoot("minecraft:golden_hoe","kubejs:gold_upgrade_smithing_template")
        .replaceLoot("minecraft:golden_helmet","create:golden_sheet")
        .replaceLoot("minecraft:golden_chestplate","3x create:golden_sheet")
        .replaceLoot("minecraft:golden_leggings","2x create:golden_sheet")
        .replaceLoot("minecraft:golden_boots","create:golden_sheet")
        .replaceLoot("farmersdelight:golden_knife","create:golden_sheet")
        .replaceLoot("minecraft:netherite_upgrade_smithing_template","kubejs:gold_upgrade_smithing_template")
        .replaceLoot("create:large_cogwheel","kubejs:wooden_gear")
        .replaceLoot("create:cogwheel","kubejs:wooden_gear")
        .replaceLoot("create:andesite_alloy", "kubejs:natural_clay_blend")
        .replaceLoot("minecraft:iron_horse_armor", "create:iron_sheet")
        .replaceLoot("minecraft:golden_horse_armor", "create:iron_sheet")
        .replaceLoot("irons_spellbooks:magic_cloth","kubejs:arcane_leather")
        .replaceLoot("ancient_aether:valkyrum_helmet","kubejs:skyseeker_upgrade_smithing_template")
        .replaceLoot("ancient_aether:valkyrum_boots","kubejs:skyseeker_upgrade_smithing_template")
        .replaceLoot("ancient_aether:valkyrum_chestplate","3x ancient_debris")
        .replaceLoot("ancient_aether:valkyrum_leggings","2x ancient_debris")
        .replaceLoot("ancient_aether:valkyrum_axe","2x irons_spellbooks:arcane_debris")
        .replaceLoot("ancient_aether:valkyrum_pickaxe","2x irons_spellbooks:arcane_debris")
        .replaceLoot("ancient_aether:valkyrum_gloves","irons_spellbooks:arcane_debris")
        .replaceLoot("ancient_aether:valkyrum_shovel","irons_spellbooks:arcane_debris")
        .replaceLoot("ancient_aether:valkyrum_sword","irons_spellbooks:arcane_debris")
        .replaceLoot("ancient_aether:valkyrum_hoe","irons_spellbooks:arcane_debris")
        .replaceLoot("create:rose_quartz","kubejs:lemon_quartz")
        .replaceLoot("twilightforest:steeleaf_boots","twilightforest:ironwood_boots")
        .replaceLoot("twilightforest:steeleaf_helmet","twilightforest:ironwood_helmet")
        .replaceLoot("twilightforest:steeleaf_chestplate","twilightforest:ironwood_chestplate")
        .replaceLoot("twilightforest:steeleaf_leggings","twilightforest:ironwood_leggings")
        .replaceLoot("twilightforest:steeleaf_pickaxe","twilightforest:ironwood_pickaxe")
        .replaceLoot("twilightforest:steeleaf_sword","twilightforest:ironwood_sword")
        .replaceLoot("twilightforest:steeleaf_hoe","twilightforest:ironwood_hoe")
        .replaceLoot("twilightforest:steeleaf_axe","twilightforest:ironwood_axe")
        .replaceLoot("twilightforest:steeleaf_shovel","twilightforest:ironwood_shovel")

    event.addLootTableModifier(/.*irons_spellbooks.*/)
    .replaceLoot("irons_spellbooks:fireward_ring","irons_spellbooks:cinder_essence")

    // ====================================================Iron's
    
    event.addLootTableModifier("irons_spellbooks:chests/filler_storage_loot")
    .addWeightedLoot(2,[
        Item.of("9x wizards_reborn:arcanum").withChance(19),
        Item.of("thermal:ruby").withChance(1)
    ])
    

    event.addLootTableModifier("irons_spellbooks:chests/wheat")
    .addWeightedLoot(5,[
        Item.of('1x vintagedelight:cheese_wheel').withChance(60),
        Item.of('2x vintagedelight:overnight_oats').withChance(100),
        Item.of("2x vintagedelight:oatmeal").withChance(200),
        Item.of("vintagedelight:magic_peanut").withChance(1),
        Item.of("vintagedelight:century_egg").withChance(5)
    ])
    
    event.addLootTableModifier(/.*irons_spellbooks:chests.*/)
        .replaceLoot(Item.of('minecraft:potion', '{Potion:"minecraft:water"}'), "kubejs:recall_potion");
    
    event.addLootTableModifier(/.*irons_spellbooks:chests.*/)
        .randomChance(0.4)
        .addLoot("2x kubejs:recall_potion");

    event.addLootTableModifier(/.*irons_spellbooks:chests.*/)
        .randomChance(0.10)
        .addLoot("enigmaticlegacy:mending_mixture");
    

    // ====================================================IDAS
    
    event.addLootTableModifier(/.*idas:chests.*/)
        .replaceLoot("diamond_axe","diamond")
        .replaceLoot("diamond_pickaxe","2x diamond")
        .replaceLoot("diamond_shovel","diamond")
        .replaceLoot("diamond_hoe","diamond")
        .replaceLoot("diamond_sword","diamond")
        .replaceLoot("diamond_helmet","2x kubejs:diamond_plate")
        .replaceLoot("diamond_chestplate","4x kubejs:diamond_plate")
        .replaceLoot("diamond_leggings","3x kubejs:diamond_plate")
        .replaceLoot("diamond_boots","2x kubejs:diamond_plate")

    event.addLootTableModifier(/.*idas:chests.*/)
        .randomChance(0.5)
        .addLoot("3x kubejs:recall_potion");

    event.addLootTableModifier(/.*idas:chests.*/)
        .randomChance(0.15)
        .addLoot("enigmaticlegacy:mending_mixture");

    event.addLootTableModifier(/idas:chests\/desert_pyramid.*/)
        .randomChance(0.9)
        .addLoot("vintageimprovements:redstone_module");

    //======================================================== Dungeons Arise

    event.addLootTableModifier(/.*dungeons_arise:chests.*/)
        .replaceLoot("diamond_axe","diamond")
        .replaceLoot("diamond_pickaxe","2x diamond")
        .replaceLoot("diamond_shovel","diamond")
        .replaceLoot("diamond_hoe","diamond")
        .replaceLoot("diamond_sword","diamond")
        .replaceLoot("diamond_helmet","2x kubejs:diamond_plate")
        .replaceLoot("diamond_chestplate","4x kubejs:diamond_plate")
        .replaceLoot("diamond_leggings","3x kubejs:diamond_plate")
        .replaceLoot("diamond_boots","2x kubejs:diamond_plate")

    event.addLootTableModifier(/.*dungeons_arise:chests.*/)
        .randomChance(0.5)
        .addLoot("3x kubejs:recall_potion")

    
    event.addLootTableModifier(/.*dungeons_arise:chests.*/)
        .randomChance(0.05)
        .addLoot("enigmaticlegacy:mending_mixture")

    event.addLootTableModifier(/.*dungeons_arise:chests.*/)
        .randomChance(0.025)
        .addLoot("3x enigmaticlegacy:mending_mixture")

    event.addLootTableModifier(/.*dungeons_arise:chests.*/)
        .randomChance(0.1)
        .addLoot("aether:leather_gloves")

    //===================================================Rare Loot
    event.addLootTableModifier(/.*chests\/village.*/)
        .randomChance(0.1)
        .addLoot("2x farmersdelight:organic_compost");

    event.addLootTypeModifier([LootType.CHEST])
        .anyBiome("#forge:is_swamp","#forge:is_wet") 
        .randomChance(0.05)
        .addLoot("kubejs:frog_totem")

    event.addLootTypeModifier(LootType.CHEST)
        .anyBiome("#forge:is_swamp","#forge:is_wet") 
        .randomChance(0.05)
        .addLoot(Item.of('supplementaries:cage', '{BlockEntityTag:{MobHolder:{EntityData:{Pos:[0.5d,0.20009998807907103d,0.5d],id:"alexsmobs:anaconda"},Name:"Anaconda",UUID:[I;719858050,1469468379,-1314582237,-2119634646]}}}'));

    event.addLootTypeModifier(LootType.CHEST) 
        .anyBiome("#forge:is_plains","minecraft:is_forest") 
        .randomChance(0.05)
        .addLoot(Item.of('supplementaries:cage', '{BlockEntityTag:{MobHolder:{EntityData:{Pos:[0.5d,0.20009998807907103d,0.5d],id:"minecraft:sheep"},Name:"Sheep",UUID:[I;719838050,1469468379,-1314582237,-2119634646]}}}'));
    
    event.addLootTypeModifier(LootType.CHEST)
        .anyBiome("#forge:is_plains","minecraft:is_forest") 
        .randomChance(0.05)
        .addLoot(Item.of('supplementaries:cage', '{BlockEntityTag:{MobHolder:{EntityData:{Pos:[0.5d,0.20009998807907103d,0.5d],id:"minecraft:chicken"},Name:"Chicken",UUID:[I;719838050,1469468379,-1314582237,-2119634646]}}}'));
    
    event.addLootTypeModifier(LootType.CHEST)
        .anyBiome("#forge:is_plains","minecraft:is_forest")  
        .randomChance(0.05)
        .addLoot(Item.of('supplementaries:cage', '{BlockEntityTag:{MobHolder:{EntityData:{Pos:[0.5d,0.20009998807907103d,0.5d],id:"minecraft:pig"},Name:"Pig",UUID:[I;719838050,1469468379,-1314582237,-2119634646]}}}'));
    
    event.addLootTypeModifier(LootType.CHEST)
        .anyBiome("#forge:is_plains","minecraft:is_forest")  
        .randomChance(0.05)
        .addLoot(Item.of('supplementaries:cage', '{BlockEntityTag:{MobHolder:{EntityData:{Pos:[0.5d,0.20009998807907103d,0.5d],id:"minecraft:cow"},Name:"Cow",UUID:[I;719828050,1469468379,-1314582237,-2119634646]}}}'));

    event.addLootTypeModifier(LootType.CHEST)
        .randomChance(0.02)
        .addLoot(Item.of('naturesaura:aura_cache', '{aura:200000}'));
    
     event.addLootTypeModifier(LootType.CHEST)
        .biome("#minecraft:is_forest") 
        .randomChance(0.05)
        .addLoot("sophisticatedstorage:upgrade_base");

    //======================================================= Custom Stuff

    event.addLootTypeModifier([LootType.CHEST])
        .and((and) => {
            and.biome("#forge:is_snowy").randomChance(0.25)
         })
         .addLoot("kubejs:mittens")
     //================================================ MOBS
    
    event.addEntityLootModifier("alexsmobs:anaconda")
        .randomChance(0.025)
        .addLoot("kubejs:anaconda_totem")

    event.addEntityLootModifier(["minecraft:pillager","minecraft:vindicator","minecraft:evoker"])
    .or((or) => {
            or.matchMainHand("#dq:soul_harvester").matchOffHand("kubejs:bejeweled_crucifix");
        })
    .addAlternativesLoot(
            LootEntry.of("kubejs:enchanted_soul").when((c) => c.randomChance(0.1)),
            LootEntry.of("kubejs:corrupted_soul").when((c) => c.randomChance(0.25)),
            LootEntry.of("quark:soul_bead").when((c) => c.randomChance(0.5)),
        )

    event.addEntityLootModifier(["alexsmobs:soul_vulture","quark:wraith","twilightforest:wraith"])
    .or((or) => {
            or.matchMainHand("#dq:soul_harvester").matchOffHand("kubejs:bejeweled_crucifix");
        })
    .addAlternativesLoot(
            LootEntry.of("kubejs:enchanted_soul").when((c) => c.randomChance(0.3)),
            LootEntry.of("kubejs:corrupted_soul").when((c) => c.randomChance(0.6)),
            LootEntry.of("quark:soul_bead").when((c) => c.randomChance(1)),
        )

    event.addEntityLootModifier("twilightforest:redcap_sapper")
        .randomChance(0.2)
        .addLoot("tnt")
        .removeLoot("coal")

    event.addEntityLootModifier("twilightforest:redcap")
        .randomChance(0.04)
        .addLoot("thermal:silver_ingot")
        .removeLoot("coal")

    event.addEntityLootModifier("minecraft:stray")
        .randomChance(0.01)
        .addLoot("thermal:tin_ingot")

    event.addEntityLootModifier("minecraft:enderman")
        .randomChance(0.025)
        .addLoot("thermal:nickel_ingot")

    event.addEntityLootModifier("minecraft:enderman")
        .randomChance(0.0125)
        .addLoot("kubejs:lesser_ender_ring");

    event.addEntityLootModifier("minecraft:witch")
        .randomChance(0.0125)
        .addLoot("kubejs:lesser_arcane_ring");

    event.addEntityLootModifier("minecraft:blaze")
        .randomChance(0.0125)
        .addLoot("kubejs:blaze_totem")
        .addLoot("kubejs:lesser_fire_ring");

    event.addEntityLootModifier("thermal:blizz")
        .randomChance(0.0125)
        .addLoot("kubejs:blizz_totem")
        .addLoot("kubejs:lesser_ice_ring");


    event.addEntityLootModifier("thermal:blitz")
        .randomChance(0.0125)
        .addLoot("kubejs:blitz_totem")
        .addLoot("kubejs:lesser_lightning_ring");

    event.addEntityLootModifier("thermal:basalz")
        .randomChance(0.0125)
        .addLoot("kubejs:basalz_totem")
        .addLoot("kubejs:lesser_nature_ring");

    event.addEntityLootModifier("minecraft:zombie")
        .randomChance(0.0125)
        .addLoot("kubejs:wooden_crucifix")
        .addLoot("kubejs:lesser_blood_ring");
    
    event.addEntityLootModifier("minecraft:skeleton")
        .randomChance(0.025)
        .addLoot(Item.of('minecraft:shield', '{AttributeModifiers:[{Amount:4,AttributeName:"alembic:true_damage.resistance",Name:"blood_res",Operation:0,Slot:"offhand",UUID:[I;-1557455832,876039081,-1987753483,-1828574738]}],BlockEntityTag:{Base:7,Patterns:[{Color:8,Pattern:"ss"},{Color:8,Pattern:"bri"}],id:"minecraft:banner"},Damage:0,display:{Name:\'{"text":"Bone Shield","color":"#303837","bold":true}\'}}'))
    
    event.addEntityLootModifier("minecraft:pillager")
        .randomChance(0.01)
        .addLoot(Item.of('minecraft:crossbow', '{AttributeModifiers:[{Amount:2,AttributeName:"attributeslib:draw_speed",Name:"sa",Operation:1,Slot:"mainhand",UUID:[I;1092535222,-450213868,-2139553788,1708566011]},{Amount:-0.95d,AttributeName:"attributeslib:arrow_damage",Name:"rea",Operation:1,Slot:"mainhand",UUID:[I;-1366993219,-935376953,-1925440782,-1055852673]}],Charged:0b,ChargedProjectiles:[],Damage:0,display:{Name:\'{"text":"Utility Crossbow","color":"green"}\'}}'))

    event.addEntityLootModifier("twilightforest:skeleton_druid")
        .randomChance(0.0125)
        .addLoot("kubejs:lesser_nature_ring")
    
    //================================================ BLOCKS
    
    event.addBlockLootModifier(["minecraft:ancient_debris","irons_spellbooks:arcane_debris"])
    .triggerExplosion(3,"destroy",true)
    

    event.addBlockLootModifier("spawner")
    .addLoot("kubejs:spawner_part")

    event.addBlockLootModifier("gravel")
    .removeLoot("twigs:pebble")
    
    event.addLootTypeModifier(LootType.BLOCK)
    .replaceLoot("stick","twigs:twig")

    event.addEntityLootModifier("minecraft:bee")
    .apply(context => {
            if(context.player == null) return
            $CuriosApi.getCuriosInventory(context.player).ifPresent(curiosInventory => {
                if(curiosInventory["findCurios(net.minecraft.world.item.Item)"]("enigmaticlegacy:cursed_ring").length >= 1){
                    context.addLoot("2x minecraft:honeycomb")
                }
            }) 
        })

    event.addBlockLootModifier("kubejs:experience_ore")
    .removeLoot(Ingredient.all)
    .addAlternativesLoot(
            LootEntry.of("2x create:experience_nugget").when((c) => c.randomChance(0.5)),
            LootEntry.of("4x create:experience_nugget").when((c) => c.randomChance(0.5)),
            LootEntry.of("6x create:experience_nugget").when((c) => c.randomChance(0.5)),
            LootEntry.of("8x create:experience_nugget").when((c) => c.randomChance(0.5)),
            LootEntry.of("12x create:experience_nugget").when((c) => c.randomChance(1)),
    )
    
    event.addBlockLootModifier("#forge:tall_grass")
        .matchMainHand("#forge:tools/knives")
        .randomChanceWithEnchantment("minecraft:looting", [0.1, 0.15, 0.2, 0.25]) 
        .addLoot("farmersdelight:straw")

    event.addBlockLootModifier("kubejs:charged_copper_block")
        .replaceLoot("kubejs:charged_copper_block","minecraft:copper_block")
        
  
    event.addLootTypeModifier(LootType.CHEST)
        .replaceLoot("enigmaticlegacy:forbidden_fruit","enchanted_golden_apple")

    event.addBlockLootModifier("aether:berry_bush")
         .anyDimension("aether:the_aether")
         .randomChance(0.001)
         .addLoot("kubejs:heavenly_spice")

    event.addBlockLootModifier("minecraft:chorus_flower")
         .anyDimension("minecraft:the_end")
         .randomChance(0.005)
         .addLoot("kubejs:cosmic_spice")
    
    //============================================= Templates

    event.addBlockLootModifier("stone")
    .randomChance(0.001)
    .addLoot("kubejs:bronze_upgrade_smithing_template")

    event.addBlockLootModifier("deepslate")
    .randomChance(0.002)
    .addLoot("kubejs:bronze_upgrade_smithing_template")

    event.addBlockLootModifier("#minecraft:logs")
    .randomChance(0.005)
    .addLoot("kubejs:steeleaf_upgrade_smithing_template")

    event.addLootTableModifier("immersiveengineering:chests/engineers_house")
    .randomChance(0.25)
    .addLoot("kubejs:engineer_upgrade_smithing_template")

    event.addLootTableModifier(/.*idas:chests\/tinkers_workshop\/tinkers_workshop.*/)
    .randomChance(0.25)
    .addLoot("kubejs:engineer_upgrade_smithing_template")

    event.addEntityLootModifier("twilightforest:hydra")
    .addLoot("kubejs:fiery_upgrade_smithing_template")

    event.addLootTableModifier(/.*twilightforest:chests\/hill.*/)
    .randomChance(0.075)
    .addLoot("kubejs:fiery_upgrade_smithing_template")

    event.addLootTypeModifier(LootType.CHEST)
    .replaceLoot([
        "deep_aether:stormforged_boots",
        "deep_aether:stormforged_leggings",
        "deep_aether:stormforged_chestplate",
        "deep_aether:stormforged_helmet",
        "deep_aether:stormforged_gloves",
        "deep_aether:storm_bow",
        "deep_aether:storm_sword"
    ],"deep_aether:stormforged_smithing_template")

    event.addEntityLootModifier([
        "minecraft:witch",
        "irons_spellbooks:necromancer",
        "twilightforest:skeleton_druid"])
    .randomChance(0.2)
    .addLoot("kubejs:wandering_magician_upgrade_smithing_template")
    
    event.addEntityLootModifier([
        "irons_spellbooks:pyromancer",
        "irons_spellbooks:priest",
        "irons_spellbooks:cultist",
        "irons_spellbooks:cryomancer",
        "irons_spellbooks:apothecarist",
        "irons_spellbooks:archevoker"])
    .randomChance(0.5)
    .addLoot("kubejs:scarecrow_upgrade_smithing_template")

    event.addLootTableModifier(/.*twilightforest:chests\/stronghold.*/)
    .randomChance(0.15)
    .addLoot("kubejs:knightmetal_upgrade_smithing_template")

    //=============================================== Keys
    
    event.addLootTableModifier("kubejs:chests/overworld_key")
    .randomChance(0.01)
    .addLoot("kubejs:overworld_key")

    event.addLootTableModifier("kubejs:chests/twilight_key")
    .randomChance(0.01)
    .addLoot("kubejs:twilight_key")
    
    event.addEntityLootModifier([
        "aether:slider",
        "aether:valkyrie_queen",
        "aether:sun_spirit",
        "ancient_aether:mutated_aechor_plant",
        "deep_aether:eots_controller"])
    .addLoot("kubejs:aether_key")

    event.addEntityLootModifier([
        "minecraft:wither",
        "alexsmobs:warped_mosco"])
    .addLoot("kubejs:nether_key")

    event.addEntityLootModifier(["minecraft:ender_dragon",
        "alexsmobs:void_worm"])
    .addLoot("kubejs:end_key")

    event.addEntityLootModifier("minecraft:evoker")
    .randomChance(0.05)
    .addLoot("kubejs:overworld_key")

    event.addEntityLootModifier([
        "irons_spellbooks:pyromancer",
        "irons_spellbooks:priest",
        "irons_spellbooks:cultist",
        "irons_spellbooks:cryomancer",
        "irons_spellbooks:apothecarist",
        "irons_spellbooks:archevoker"])
    .randomChance(0.25)
    .addLoot("kubejs:overworld_key")

    event.addEntityLootModifier([
        "minecraft:warden",
        "irons_spellbooks:dead_king"
    ])
    .addLoot("kubejs:overworld_key")


    ///=======================================Deepslate Ores
    
    function DeepslateOres(ore,drop,count)
    {
        event.addBlockLootModifier(ore)
        .randomChanceWithEnchantment("minecraft:fortune", [0.5, 0.6, 0.75, 0.9, 1])
        .randomChanceWithEnchantment("minecraft:silk_touch", [0.5, 0.0])  
        .addLoot(drop)
        .limitCount([count,count])
    }

    DeepslateOres('minecraft:deepslate_iron_ore',"raw_iron",1)
    DeepslateOres('minecraft:deepslate_copper_ore',"raw_copper",1)
    DeepslateOres('minecraft:deepslate_gold_ore',"raw_gold",1)
    DeepslateOres('minecraft:deepslate_coal_ore',"raw_iron",1)
    DeepslateOres('minecraft:deepslate_redstone_ore','minecraft:redstone', 5)
    DeepslateOres('minecraft:deepslate_diamond_ore',"diamond",1)
    DeepslateOres('minecraft:deepslate_emerald_ore',"emerald",1)
    DeepslateOres('minecraft:deepslate_lapis_ore',"minecraft:lapis_lazuli",7)
    DeepslateOres('create:deepslate_zinc_ore',"create:raw_zinc",1)
    DeepslateOres('thermal:deepslate_sulfur_ore',"thermal:sulfur",4)
    DeepslateOres('thermal:deepslate_niter_ore',"thermal:niter",4)
    DeepslateOres('thermal:deepslate_cinnabar_ore',"thermal:cinnabar",2)
    DeepslateOres('thermal:deepslate_apatite_ore',"thermal:apatite",7)
    DeepslateOres('wizards_reborn:deepslate_arcanum_ore',"wizards_reborn:arcanum",1)
    DeepslateOres('thermal:deepslate_tin_ore',"thermal:raw_tin",1)
    DeepslateOres('thermal:deepslate_lead_ore',"thermal:raw_lead",1)
    DeepslateOres('thermal:deepslate_silver_ore',"thermal:raw_silver",1)
    DeepslateOres('thermal:deepslate_nickel_ore',"thermal:raw_nickel",1)


    ///============================================Grafter

    Ingredient.of("#minecraft:saplings").itemIds.forEach(sapling=>{

        const leaves = sapling.replace("sapling","leaves")
		event.addBlockLootModifier(leaves).matchMainHand("kubejs:grafter")
        .addLoot(sapling)	
        
    })
           
    
    

})