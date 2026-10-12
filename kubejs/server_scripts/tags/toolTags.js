//priority: 0

ServerEvents.tags("item", (event) => {

    event.add("minecraft:tools/pickaxe", "#forge:tools/pickaxes");
    event.add("minecraft:tools/axe", "#forge:tools/axes");
    event.add("minecraft:tools/shovel", "#forge:tools/shovels");
    event.add("minecraft:tools/hoe", "#forge:tools/hoes");

    event.add("forge:tools/pickaxes", "#minecraft:tools/pickaxe");
    event.add("forge:tools/axes", "#minecraft:tools/axe");
    event.add("forge:tools/shovels", "#minecraft:tools/shovel");
    event.add("forge:tools/hoes", "#minecraft:tools/hoe");
    event.add("forge:tools/pickaxes", "#minecraft:pickaxes");

    //Repair

    event.add("dq:sturdy_tools_repair_item", "minecraft:netherite_scrap");
    event.add("aether:phoenix_repairing", "kubejs:phoenix_ingot");
    event.add("aether:obsidian_repairing", "kubejs:obsidian_ingot");

    //
    event.add("forge:tools", "#minecraft:tools");
    event.add("forge:tools", [
        "quark:abacus",
        "quark:trowel",
        "druidic_quest_core:arcanist_hammer",
        "constructionwand:stone_wand",
        "constructionwand:iron_wand",
        "supplementaries:wrench",
        "minecraft:shears",
        "minecraft:flint_and_steel",
        "#c:tools",
        "constructionwand:diamond_wand",
        "constructionwand:infinity_wand",
    ]);

    event.add("forge:tools/hammers", "druidic_quest_core:arcanist_hammer");

    event.add("forge:tools/shields", "druidic_quest_core:primitive_shield");
    event.add("forge:shields", "druidic_quest_core:primitive_shield");
    event.add("forge:tools", "druidic_quest_core:primitive_shield");

    event.add("minecraft:axes", "#forge:tools/axes");
    event.add("minecraft:axes", "twilightforest:gold_minotaur_axe");
    event.add("minecraft:axes", "twilightforest:diamond_minotaur_axe");
    event.add("minecraft:pickaxes", "#forge:tools/pickaxes");
    event.add("minecraft:swords", "#forge:tools/swords");
    event.add("minecraft:shovels", "#forge:tools/shovels");
    event.add("minecraft:hoes", "#forge:tools/hoes");

    event.add("minecraft:swords", ['deep_aether:storm_sword', 'starbunclemania:star_sword', "create:cardboard_sword"])

    function armor(name, type) {
    event.add("forge:armors/helmets", name + "_helmet");
    event.add("forge:armors/chestplates", name + "_chestplate");
    event.add("forge:armors/leggings", name + "_leggings");
    event.add("forge:armors/boots", name + "_boots");

    event.add(`forge:armor/${type}`, [
      `${name}_helmet`,
      `${name}_chestplate`,
      `${name}_leggings`,
      `${name}_boots`,
    ]);
    }

    function natureArmor(name, type) {
        event.add("forge:armors/helmets", name + "_helmet");
        event.add("forge:armors/chestplates", name + "_chest");
        event.add("forge:armors/leggings", name + "_pants");
        event.add("forge:armors/boots", name + "_shoes");

        event.add(`forge:armor/${type}`, [
        `${name}_helmet`,
        `${name}_chest`,
        `${name}_pants`,
        `${name}_shoes`,
        ]);
    }

    function tool(name) {
        event.add("minecraft:axes", name + "_axe");
        event.add("minecraft:pickaxes", name + "_pickaxe");
        event.add("minecraft:swords", name + "_sword");
        event.add("minecraft:shovels", name + "_shovel");
        event.add("minecraft:hoes", name + "_hoe");
    }

    function tooltier(name, tier) {
        event.add("forge:tools/" + tier, name + "_axe");
        event.add("forge:tools/" + tier, name + "_pickaxe");
        event.add("forge:tools/" + tier, name + "_sword");
        event.add("forge:tools/" + tier, name + "_shovel");
        event.add("forge:tools/" + tier, name + "_hoe");
    }

    event.add(`forge:armor/priest`, "irons_spellbooks:paladin_chestplate");
    event.add(
        `forge:armor/pyromancer`,
        "irons_spellbooks:infernal_sorcerer_chestplate",
    );
    event.add(`forge:armor/archevoker`, "irons_spellbooks:speed_boots");

    armor("irons_spellbooks:netherite_mage", "netherite_mage");
    armor("irons_spellbooks:wizard", "wizard");
    armor("irons_spellbooks:pumpkin", "scarecrow");
    armor("irons_spellbooks:wandering_magician", "wandering_magician");
    armor("irons_spellbooks:archevoker", "archevoker");
    armor("irons_spellbooks:pyromancer", "pyromancer");
    armor("irons_spellbooks:cryomancer", "cryomancer");
    armor("irons_spellbooks:electromancer", "electromancer");
    armor("irons_spellbooks:priest", "priest");
    armor("irons_spellbooks:shadowwalker", "shadowwalker");
    armor("irons_spellbooks:plagued", "plagued");
    armor("irons_spellbooks:cultist", "cultist");

    armor("aether:phoenix", "phoenix");
    armor("minecraft:leather", "leather");
    armor("minecraft:chainmail", "chainmail");
    armor("aether:zanite", "zanite");
    armor("deep_aether:skyjade", "skyjade");
    armor("twilightforest:ironwood", "ironwood");
    armor("twilightforest:steeleaf", "steeleaf");
    armor("twilightforest:knightmetal", "knightmetal");
    armor("twilightforest:fiery", "fiery");
    armor("twilightforest:arctic", "arctic");
    armor("twilightforest:yeti", "yeti");
    armor("twilightforest:naga", "naga");
    armor("twilightforest:phantom", "phantom");
    armor("enigmaticlegacy:etherium", "etherium");
    armor("kubejs:cactus", "cactus");
    armor("thermal:beekeeper", "beekeeper");
    armor("thermal:diving", "diving");
    armor("thermal:hazmat", "hazmat");
    armor("kubejs:copper", "copper");
    armor("kubejs:silver", "silver");
    armor("kubejs:lead", "lead");
    armor("kubejs:bronze", "bronze");
    armor("kubejs:uranium", "uranium");
    armor("deep_aether:stormforged", "stormforged");
    armor("wizards_reborn:arcane_gold", "arcane_gold");
    armor("wizards_reborn:arcane_fortress", "arcane_fortress");
    natureArmor("naturesaura:infused_iron", "botanist");
    natureArmor("naturesaura:sky", "sky");
    natureArmor("naturesaura:depth", "depth");

    tooltier("minecraft:wooden", "flint");
    tooltier("minecraft:stone", "stone");
    tooltier("naturesaura:infused_iron", "botanist");
    tooltier("aether:zanite", "zanite");
    tooltier("aether:gravitite", "gravitite");
    tooltier("aether:holystone", "holystone");
    tooltier("aether:skyroot", "skyroot");
    tooltier("deep_aether:skyjade", "skyjade");
    tooltier("enigmaticlegacy:etherium", "etherium");
    tooltier("twilightforest:ironwood", "ironwood");
    tooltier("twilightforest:steeleaf", "steeleaf");
    tooltier("twilightforest:fiery", "fiery");
    tooltier("twilightforest:knightmetal", "knightmetal");
    tooltier("wizards_reborn:arcane_wood", "arcane_wood");
    tooltier("wizards_reborn:arcane_gold", "arcane_gold");
    tooltier("druidic_quest_core:steel","steel")
    tooltier("druidic_quest_core:platinum","platinum")
    tooltier("botania:manasteel","source_alloy")

    tool("kubejs:copper");
    tool("kubejs:silver");
    tool("kubejs:lead");
    tool("enigmaticlegacy:etherium");
    event.add("forge:tools/etherium", "enigmaticlegacy:etherium_scythe");

    const missingFieryTools = ["axe", "shovel", "hoe"];

    missingFieryTools.forEach((type) => {
        event.add("forge:tools/fiery", `kubejs:fiery_${type}`);
    });

})