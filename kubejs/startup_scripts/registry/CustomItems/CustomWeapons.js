StartupEvents.registry('item', item => {
    
    item.create("mossy_sword","sword").tier('stone').tag("minecraft:swords").tag("minecraft:tools").tag("forge:tools/stone").tag("dq:tier0/weapon")
    item.create("royal_guard_sword","sword").tier('royal').tag("minecraft:swords").tag("minecraft:tools").tag("forge:tools/iron").tag("dq:tier1/weapon")
    item.create('chill_blade','sword').displayName("Chilled Blade").tier('ice').tag('minecraft:swords').tag("forge:tools/iron").tag('minecraft:tools').tag("dq:tier1/weapon")
    item.create('blade_of_grass','irons_spells_js:magic_sword').tier('grass').tag('minecraft:swords').tag("forge:tools/iron").tag('minecraft:tools').glow(true).addDefaultSpell("irons_spellbooks:poison_splash",3).tag("dq:tier2/weapon")
    item.create('ice_blade','irons_spells_js:magic_sword').tier('ice').tag('minecraft:swords').tag("forge:tools/iron").tag('minecraft:tools').glow(true).addDefaultSpell("irons_spellbooks:icicle",3).tag("dq:tier1/weapon").speedBaseline(-2.1)
    item.create('phoenix_sword','sword').tier('phoenix').tag('minecraft:sword').tag("forge:tools/phoenix").tag("minecraft:tools").tag("dq:tier3/weapon").tag("minecraft:swords")
    
    //Unique weapons for each material
    item.create('wooden_staff','sword').tier('wood').tag('minecraft:tools').speedBaseline(-2.9).tag("dq:tier0/weapon").maxDamage(128)
    item.create('flint_spear','sword').tier('wood').tag("forge:tools/flint").tag('minecraft:tools').speedBaseline(-2.9).tag("dq:tier0/weapon").maxDamage(128)
    item.create('stone_claymore','sword').tier('stone').tag('minecraft:swords').tag("forge:tools/stone").tag('minecraft:tools').speedBaseline(-2.8).tag("dq:tier0/weapon").attackDamageBaseline(7).maxDamage(128)
    item.create('iron_scythe','sword').tier('iron').tag("forge:tools/iron").tag("minecraft:tools").tag("dq:tier1/weapon").speedBaseline(-2.8).attackDamageBaseline(7).maxDamage(512)
    item.create('copper_trident','sword').tier('copper').tag("forge:tools/copper").tag('minecraft:tools').speedBaseline(-2.9).tag("dq:tier1/weapon")
    item.create('lead_waraxe','axe').tier('lead').tag("minecraft:tools").tag("minecraft:tools/axe").tag("dq:tier1/tool").speedBaseline(-3.2).tag("dq:tier1/weapon").attackDamageBaseline(10).tag("forge:tools/lead")
    item.create("silver_knife","farmersdelight:knife").tier('silver').tag("minecraft:tools").tag("forge:tools/knives").tag("dq:tier1/tool").tag("forge:tools/silver")
    item.create("silver_katana","sword").tier('silver').tag("minecraft:tools").tag("dq:tier1/weapon").tag("dq:tier1/tool").speedBaseline(-2.2).tag('forge:tools/silver')
    item.create("bronze_warhammer","pickaxe").tier('bronze').tag("minecraft:tools").tag("dq:tier1/tool").speedBaseline(-3.2).tag("dq:tier1/weapon").attackDamageBaseline(10).tag("forge:tools/bronze")
    item.create("uranium_mace","sword").tier('uranium').tag("minecraft:tools").tag("dq:tier1/tool").speedBaseline(-3.2).tag("dq:tier2/weapon").attackDamageBaseline(10).tag("forge:tools/uranium")
    // Magic Feathers
    
    item.create('golden_magic_feather','sword').tier('gold').glow(true).tag("minecraft:tools").tag("forge:tools/magic_feather").tag("dq:tier1/weapon").tag("dq:tier1/tool")
    item.create('fiery_magic_feather','sword').tier('diamond').glow(true).tag("minecraft:tools").tag("forge:tools/magic_feather").tag("forge:tools/tier2_magic_feather").tag("dq:tier2/weapon").tag("dq:tier2/tool")
    item.create('rainbow_magic_feather','sword').tier('netherite').glow(true).tag("minecraft:tools").tag("forge:tools/magic_feather").tag("forge:tools/tier2_magic_feather").tag("forge:tools/tier3_magic_feather").tag("dq:tier3/weapon").tag("dq:tier3/tool")
    item.create('cosmic_magic_feather','sword').tier('netherite').glow(true).tag("minecraft:tools").tag("forge:tools/magic_feather").tag("forge:tools/tier2_magic_feather").tag("forge:tools/tier3_magic_feather").tag("dq:tier4/weapon").tag("dq:tier4/tool")

    //Bows

    item.create('botanist_bow','bow')

})