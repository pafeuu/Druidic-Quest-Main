ServerEvents.recipes((event) => {
  const ArmorSlot = ["helmet", "chestplate", "leggings", "boots"];


  event
    .smithing(
      "druidic_quest_core:steel_helmet",
      "kubejs:steel_upgrade_smithing_template",
      "naturesaura:infused_iron_helmet",
      "kubejs:steel_upgrade_parts",
    ).id("druidic_quest_core:steel_helmet")
  event
    .smithing(
      "druidic_quest_core:steel_chestplate",
      "kubejs:steel_upgrade_smithing_template",
      "naturesaura:infused_iron_chest",
      "kubejs:steel_upgrade_parts",
    ).id("druidic_quest_core:steel_chestplate")
  event
    .smithing(
      "druidic_quest_core:steel_leggings",
      "kubejs:steel_upgrade_smithing_template",
      "naturesaura:infused_iron_pants",
      "kubejs:steel_upgrade_parts",
    ).id("druidic_quest_core:steel_leggings")
  event
    .smithing(
      "druidic_quest_core:steel_boots",
      "kubejs:steel_upgrade_smithing_template",
      "naturesaura:infused_iron_shoes",
      "kubejs:steel_upgrade_parts",
    ).id("druidic_quest_core:steel_boots")

  event.remove({
    output: [
      "naturesaura:infused_iron_helmet",
      "naturesaura:infused_iron_chest",
      "naturesaura:infused_iron_pants",
      "naturesaura:infused_iron_shoes",
    ],
  });

  function SimpleArmor(material, helmet, chest, leg, boots) {
    event.shaped(Item.of(helmet), ["FFF", "F F"], {
      F: material,
    });
    event.shaped(Item.of(chest), ["F F", "FFF", "FFF"], {
      F: material,
    });
    event.shaped(Item.of(leg), ["FFF", "F F", "F F"], {
      F: material,
    });

    event.shaped(Item.of(boots), ["F F", "F F"], {
      F: material,
    });
  }

  SimpleArmor(
    "#forge:plates/gravitite",
    "aether:gravitite_helmet",
    "aether:gravitite_chestplate",
    "aether:gravitite_leggings",
    "aether:gravitite_boots",
  );
  SimpleArmor(
    "#forge:plates/uranium",
    "kubejs:uranium_helmet",
    "kubejs:uranium_chestplate",
    "kubejs:uranium_leggings",
    "kubejs:uranium_boots",
  );
  SimpleArmor(
    "#forge:cactus",
    "kubejs:cactus_helmet",
    "kubejs:cactus_chestplate",
    "kubejs:cactus_leggings",
    "kubejs:cactus_boots",
  );

  SimpleArmor(
    "thermal:beekeeper_fabric",
    "thermal:beekeeper_helmet",
    "thermal:beekeeper_chestplate",
    "thermal:beekeeper_leggings",
    "thermal:beekeeper_boots",
  );

  SimpleArmor(
    "#forge:plates/copper",
    "kubejs:copper_helmet",
    "kubejs:copper_chestplate",
    "kubejs:copper_leggings",
    "kubejs:copper_boots",
  );

  SimpleArmor(
    "#forge:plates/lead",
    "kubejs:lead_helmet",
    "kubejs:lead_chestplate",
    "kubejs:lead_leggings",
    "kubejs:lead_boots",
  );

  SimpleArmor(
    "#forge:plates/silver",
    "kubejs:silver_helmet",
    "kubejs:silver_chestplate",
    "kubejs:silver_leggings",
    "kubejs:silver_boots",
  );

  SimpleArmor(
    "#forge:plates/iron",
    "iron_helmet",
    "iron_chestplate",
    "iron_leggings",
    "iron_boots",
  );

  SimpleArmor(
    "#forge:plates/diamond",
    "diamond_helmet",
    "diamond_chestplate",
    "diamond_leggings",
    "diamond_boots",
  );

  SimpleArmor(
    "minecraft:chain",
    "chainmail_helmet",
    "chainmail_chestplate",
    "chainmail_leggings",
    "chainmail_boots",
  );

  SimpleArmor(
    "#forge:plates/ironwood",
    "twilightforest:ironwood_helmet",
    "twilightforest:ironwood_chestplate",
    "twilightforest:ironwood_leggings",
    "twilightforest:ironwood_boots",
  );

  /// Thermal Diving Suit

  event
    .shaped("thermal:diving_helmet", [" G ", "GBG", "FBF"], {
      G: "#forge:plates/gold",
      B: "quark:gold_bars",
      F: "thermal:diving_fabric",
    })
    .id("thermal:armor/diving_helmet");

  event
    .shaped("thermal:diving_chestplate", ["G G", "FGF", "FFF"], {
      G: "#forge:plates/gold",
      F: "thermal:diving_fabric",
    })
    .id("thermal:armor/diving_chestplate");

  event
    .shaped("thermal:diving_leggings", ["FFF", "G G", "F F"], {
      G: "#forge:plates/gold",
      F: "thermal:diving_fabric",
    })
    .id("thermal:armor/diving_leggings");

  event
    .shaped("thermal:diving_boots", ["G G", "F F", "G G"], {
      G: "#forge:plates/gold",
      F: "thermal:diving_fabric",
    })
    .id("thermal:armor/diving_boots");


  event.remove([
    { output: "twilightforest:ironwood_helmet" },
    { output: "twilightforest:ironwood_chestplate" },
    { output: "twilightforest:ironwood_leggings" },
    { output: "twilightforest:ironwood_boots" },
  ]);

  event.remove({ output: "thermal:hazmat_fabric" });

  // =================================================== Tier 3 ========================================================

  function ScarecrowUpgrade(ArmorType, MagicSchool) {
    ArmorSlot.forEach((slot) => {
      event.smithing(
        "irons_spellbooks:" + ArmorType + "_" + slot,
        "irons_spellbooks:" + MagicSchool + "_rune",
        "irons_spellbooks:pumpkin_" + slot,
        "kubejs:elemental_cloth",
      );
      event.smithing(
        "irons_spellbooks:" + ArmorType + "_" + slot,
        "irons_spellbooks:" + MagicSchool + "_rune",
        "irons_spellbooks:wizard_" + slot,
        "kubejs:elemental_cloth",
      );
      event.remove({ output: "irons_spellbooks:" + ArmorType + "_" + slot });
    });
  }

  ScarecrowUpgrade("priest", "holy");
  ScarecrowUpgrade("shadowwalker", "ender");
  ScarecrowUpgrade("archevoker", "evocation");
  ScarecrowUpgrade("pyromancer", "fire");
  ScarecrowUpgrade("electromancer", "lightning");
  ScarecrowUpgrade("cultist", "blood");
  ScarecrowUpgrade("cryomancer", "ice");
  ScarecrowUpgrade("plagued", "nature");
});
