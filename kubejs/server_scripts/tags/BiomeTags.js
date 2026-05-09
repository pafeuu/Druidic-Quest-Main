ServerEvents.tags("worldgen/biome", (event) => {
  event.add("twigs:spawns_pebble", "#minecraft:is_overworld");
  event.add("twigs:spawns_twig", "#minecraft:is_overworld");

  //event.add('dungeons_arise:has_structure/coliseum_biomes',)
});
