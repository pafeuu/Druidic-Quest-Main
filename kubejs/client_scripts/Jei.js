JEIEvents.removeRecipes(event => {  
    event.remove('minecraft:crafting', 'ars_nouveau:imbuement_chamber')
    event.remove('minecraft:crafting',"quark:tweaks/crafting/slab_to_block")
    event.remove('ars_nouveau:imbuement',"ars_nouveau:imbuement_air_essence")
    event.remove('ars_nouveau:imbuement',"ars_nouveau:imbuement_fire_essence")
    event.remove('ars_nouveau:imbuement',"ars_nouveau:imbuement_water_essence")
    event.remove('ars_nouveau:imbuement',"ars_nouveau:imbuement_earth_essence")
    event.remove('ars_nouveau:enchanting_apparatus',"ars_nouveau:enchanters_shield") 
})

JEIEvents.information(event => {
    /*event.addItem(['regions_unexplored:alpha_slab',
                   'regions_unexplored:baobab_slab',
                   'regions_unexplored:larch_slab',
                   'regions_unexplored:magnolia_slab',
                   'regions_unexplored:maple_slab',
                   'regions_unexplored:cobalt_slab',
                   'regions_unexplored:brimwood_slab',
                   'regions_unexplored:blue_bioshroom_slab',
                   'regions_unexplored:blackwood_slab',
                   'regions_unexplored:kapok_slab',
                   'regions_unexplored:joshua_slab',
                   'regions_unexplored:green_bioshroom_slab',
                   'regions_unexplored:eucalyptus_slab',
                   'regions_unexplored:dead_slab',
                   'regions_unexplored:cypress_slab',
                   'regions_unexplored:mauve_slab',
                   'regions_unexplored:yellow_bioshroom_slab',
                   'regions_unexplored:willow_slab',
                   'regions_unexplored:socotra_slab',
                   'regions_unexplored:redwood_slab',
                   'regions_unexplored:pink_bioshroom_slab',
                   'regions_unexplored:pine_slab',
                   'regions_unexplored:palm_slab',
                   'ars_nouveau:archwood_slab'], ['If you cant see recipe for this', 'Try restarting your game', "It's a known issue, Sorry for the inconvenience"])*/

    event.addItem("kubejs:charged_copper_block",["Created when Copper Block or Waxed Copper Block is struck by lightning"])
    event.addItem("naturesaura:birth_spirit",["Obtained by breeding animals in an area with high aura"])
    event.addItem("immersive_weathering:ivy",["Found in forest biomes hanging from some trees"])
    event.addItem("enigmaticlegacy:extradimensional_eye",["Combine it with dimensional tool in the crafting grid to apply telekinesis enchant!"])
    event.addItem("kubejs:wooden_crucifix",["Rare drop from undead creatures"])
    event.addItem([
        "kubejs:ring_travel",
        "kubejs:travelers_belt"],["One of the drops from Overworld Key usage"])
    event.addItem("kubejs:mittens",["Common loot in chests in snowy biomes"])
    event.addItem("supplementaries:ash",["Created in world after blocks burn"])
    event.addItem("minecraft:netherite_upgrade_smithing_template",["Drops from The Wither"])
    event.addItem(['wizards_reborn:arcane_salt_torch',
        'wizards_reborn:innocent_salt_torch',
        'wizards_reborn:cork_bamboo_salt_torch',
        'wizards_reborn:wisestone_salt_torch',
        'wizards_reborn:arcane_salt_lantern',
        'wizards_reborn:innocent_salt_lantern',
        'wizards_reborn:cork_bamboo_salt_lantern',
        'wizards_reborn:wisestone_salt_lantern',
        'wizards_reborn:arcane_salt_campfire',
        'wizards_reborn:innocent_salt_campfire',
        'wizards_reborn:cork_bamboo_salt_campfire',
        'wizards_reborn:wisestone_salt_campfire',
        'silly_oddities:oak_salt_torch',
        'silly_oddities:oak_salt_lantern',
        'silly_oddities:acacia_salt_lantern',
        'silly_oddities:acacia_salt_torch',
        'silly_oddities:jungle_salt_campfire',
        'silly_oddities:jungle_salt_lantern',
        'silly_oddities:jungle_salt_torch',
        'silly_oddities:birch_salt_campfire',
        'silly_oddities:birch_salt_lantern',
        'silly_oddities:birch_salt_torch',
        'silly_oddities:spruce_salt_campfire',
        'silly_oddities:spruce_salt_lantern',
        'silly_oddities:spruce_salt_torch',
        'silly_oddities:oak_salt_campfire',
        'silly_oddities:acacia_salt_campfire',
        'silly_oddities:dark_oak_salt_torch',
        'silly_oddities:dark_oak_salt_lantern',
        'silly_oddities:dark_oak_salt_campfire',
        'silly_oddities:mangrove_salt_torch',
        'silly_oddities:mangrove_salt_lantern',
        'silly_oddities:mangrove_salt_campfire',
        'silly_oddities:cherry_salt_torch',
        'silly_oddities:cherry_salt_lantern',
        'silly_oddities:cherry_salt_campfire',
        'silly_oddities:bamboo_salt_torch',
        'silly_oddities:bamboo_salt_lantern',
        'silly_oddities:bamboo_salt_campfire',
        'silly_oddities:crimson_salt_torch',
        'silly_oddities:crimson_salt_lantern',
        'silly_oddities:crimson_salt_campfire',
        'silly_oddities:warped_salt_torch',
        'silly_oddities:warped_salt_lantern',
        'silly_oddities:warped_salt_campfire'],["Can be dyed with Arcane Lumos"])

    event.addItem("deep_aether:goldenleaf_berries",["Found growing on Quicksoil in Golden Heights biome"])

    event.addItem("wizards_reborn:arcanum_ore",["Found between y90 and y-40 in the overworld"])

    event.addItem("forbidden_arcanus:xpetrified_ore",["Found between y127 and y-15 in the twilight forest"])
    event.addItem("forbidden_arcanus:arcane_crystal_ore",["Found between y96 and y-30 in the twilight forest"])
    event.addItem("thermal:sapphire_ore",["Found between y-15 and y-30 in the twilight forest"])
    event.addItem("forbidden_arcanus:runic_stone",["Found between y0 and y-30 in the twilight forest"])
    event.addItem("forbidden_arcanus:stella_arcanum",["Found between y-10 and y-30 in the twilight forest"])

    event.addItem('supplementaries:music_disc_heave_ho',["Obtained by killing a Creeper with a Cannonball"])
    event.addItem('aether_redux:ancient_sentrite_music_disc',["Drops when Sentry kills another Sentry"])
    
  })