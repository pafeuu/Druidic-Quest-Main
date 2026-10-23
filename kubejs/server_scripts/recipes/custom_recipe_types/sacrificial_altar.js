ServerEvents.recipes(event=>{
    function Sacrificing(entity,input,result,amount){
    event.custom({
      "type": "lychee:block_interacting",
      "comment": "Needs the sacrifice of "+entity,
      "contextual": 
        [
          {"type": "execute", "command": `execute if entity @e[distance=..5, type=${entity}]`, "hide": true },
        ]
      ,
      "block_in": "kubejs:sacrificial_altar",
      "item_in": [{item: "kubejs:sacrificial_dagger"},{item:input}],
      "post":[
        {
          "type": "execute",
          "command": `kill @e[distance=..5, type=${entity}, limit=1]`,
          "hide": true
        },
        {
          "type": "add_item_cooldown",
          "s": 1
        },
        {
          "type": "damage_item",
          "amount": 1,
          "target": "/item_in/0"
        },
        {
          "type":"delay",
          "s": 0.5
        },
        {
          "type": "execute",
          "command": 'particle irons_spellbooks:blood ~ ~ ~ 0.2 0.2 0.2 0.1 90 normal',
          "hide": true
        },
        {
          "type": "execute",
          "command": 'playsound irons_spellbooks:cast.generic.blood neutral @a[distance=..5]',
          "hide": true
        },
        {
          "type": "drop_item",
          "item": result,
          "count": amount
        }
      ]
    })
  }

  Sacrificing("minecraft:villager","minecraft:emerald","kubejs:infused_emerald",1)

  Sacrificing("quark:stoneling","kubejs:sapphire","thermal:sapphire",1)

  Sacrificing("minecraft:wandering_trader","minecraft:diamond_block","kubejs:infused_diamond",4)

  Sacrificing("minecraft:enderman","minecraft:diamond_block","kubejs:infused_diamond",1)

  Sacrificing("minecraft:allay","kubejs:infused_amethyst","kubejs:infused_amethyst",2)

  Sacrificing("minecraft:zombie","minecraft:glass_bottle","irons_spellbooks:blood_vial",1)

  Sacrificing("alexsmobs:roadrunner","naturesaura:token_anger","kubejs:roadrunner_totem",1)

  Sacrificing("quark:crab","naturesaura:token_joy","kubejs:crab_totem",1)

  Sacrificing("alexsmobs:tiger","naturesaura:token_fear","kubejs:tiger_totem",1)

  Sacrificing("alexsmobs:grizzly_bear","naturesaura:token_sorrow","kubejs:bear_totem",1)

  Sacrificing("minecraft:frog","naturesaura:token_sorrow","kubejs:frog_totem",1)

  Sacrificing("minecraft:rabbit","naturesaura:token_anger","kubejs:bunny_totem",1)

  Sacrificing("alexsmobs:leafcutter_ant","naturesaura:token_joy","kubejs:leafcutter_ant_totem",1)

  Sacrificing("alexsmobs:anaconda","naturesaura:token_fear","kubejs:anaconda_totem",1)

  Sacrificing("twilightforest:penguin","naturesaura:token_fear","kubejs:penguin_totem",1)
  Sacrificing("minecraft:blaze","naturesaura:token_rage","kubejs:blaze_totem",1)
  Sacrificing("thermal:blitz","naturesaura:token_euphoria","kubejs:blitz_totem",1)
  Sacrificing("thermal:blizz","naturesaura:token_grief","kubejs:blizz_totem",1)
  Sacrificing("thermal:basalz","naturesaura:token_terror","kubejs:basalz_totem",1)

  Sacrificing("minecraft:blaze","kubejs:magic_book","irons_spellbooks:blaze_spell_book",1)

  Sacrificing("minecraft:blaze","minecraft:dragon_egg","minecraft:blaze_spawn_egg",1)

  Sacrificing("minecraft:skeleton","minecraft:dragon_egg","minecraft:skeleton_spawn_egg",1)

  Sacrificing("minecraft:spider","minecraft:dragon_egg","minecraft:spider_spawn_egg",1)

  Sacrificing("minecraft:zombie","minecraft:dragon_egg","minecraft:zombie_spawn_egg",1)

  Sacrificing("minecraft:enderman","minecraft:dragon_egg","minecraft:enderman_spawn_egg",1)

  Sacrificing("minecraft:wither_skeleton","minecraft:dragon_egg","minecraft:wither_skeleton_spawn_egg",1)

  Sacrificing("minecraft:creeper","minecraft:dragon_egg","minecraft:creeper_spawn_egg",1)

  Sacrificing("minecraft:slime","minecraft:dragon_egg","minecraft:slime_spawn_egg",1)

  Sacrificing("minecraft:magma_cube","minecraft:dragon_egg","minecraft:magma_cube_spawn_egg",1)

})