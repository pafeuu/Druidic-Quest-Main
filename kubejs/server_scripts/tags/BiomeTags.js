ServerEvents.tags('worldgen/biome', event=>{
   
   event.add('twigs:spawns_pebble','#forge:is_overworld')
   event.add('twigs:spawns_pebble',/biomeswevegone*/)
   event.add('twigs:spawns_twig','#forge:is_overworld')
   event.add('twigs:spawns_twig',/biomeswevegone*/)

   event.add('twigs:spawns_pebble',"minecraft:cherry_grove")
   event.add('twigs:spawns_twig',"minecraft:cherry_grove")

})