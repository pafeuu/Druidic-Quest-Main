ServerEvents.tags("item", (event) => {
  const explodingCatalysts = [
    "ars_nouveau:glyph_explosion",
    "kubejs:explosive_arrow",
    "thermal:explosive_grenade",
    "minecraft:tnt_minecart",
    "minecraft:creeper_spawn_egg",
    "supplementaries:bomb",
    "supplementaries:bomb_blue"
  ];

  const lightningCatalysts = [
    "aether:lightning_knife",
    "kubejs:lightning_arrow",
    "thermal:lightning_charge",
    "ars_nouveau:glyph_lightning",
  ];

  event.add("lychee:item_exploding_catalysts", explodingCatalysts);

  event.add("lychee:block_exploding_catalysts", explodingCatalysts);

  event.add("lychee:lightning_channeling_catalysts", lightningCatalysts);
});
