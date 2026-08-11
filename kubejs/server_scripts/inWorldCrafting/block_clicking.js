ServerEvents.recipes(event => {

  function ClickingSquareCrafting(catalyst, output, sides, corners, middle) {

    event.custom({
      "type": "lychee:block_interacting",
      "hide_in_viewer": true,
      "comment": "Needs additional blocks to work. Check the ponder for output item for details",
      "block_in": middle,
      "item_in": {
        "item": catalyst // Item that needs to be on top of the structure in the middle
      },
      "contextual": {
        "type": "and",
        "contextual": [ // Checks if the the blocks are in the correct position
          {
            "type": "execute",
            "command": `execute if block ~1 ~ ~1 ${corners}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~-1 ~ ~-1 ${corners}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~1 ~ ~-1 ${corners}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~-1 ~ ~1 ${corners}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~ ~ ~1 ${sides}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~ ~ ~-1 ${sides}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~1 ~ ~ ${sides}`,
            "hide": true
          },
          {
            "type": "execute",
            "command": `execute if block ~-1 ~ ~ ${sides}`,
            "hide": true
          }

        ],
        "hide": true
      },
      "post": [
        {
          "type": "execute",
          "command": `fill ~1 ~ ~1 ~-1 ~ ~-1 minecraft:air replace ${middle}`, // Clears blocks
          "hide": true
        },
        {
          "type": "execute",
          "command": `fill ~1 ~ ~1 ~-1 ~ ~-1 minecraft:air replace ${sides}`, // Clears blocks
          "hide": true
        },
        {
          "type": "execute",
          "command": `fill ~1 ~ ~1 ~-1 ~ ~-1 minecraft:air replace ${corners}`, // Clears blocks
          "hide": true
        },
        {
          "type": "execute",
          "command": 'particle irons_spellbooks:unstable_ender ~ ~-1 ~ 1.5 0.5 1.5 0.1 240 force',
          "hide": true
        },
        {
          "type": "delay",
          "s": 1
        },
        {
          "type": "drop_item",
          "item": output
        },
        {
          "type": "execute",
          "command": 'particle irons_spellbooks:wisp ~ ~ ~ 0.3 0.3 0.3 0.1 80 force',
          "hide": true
        },
        { type: "execute", command: "playsound wizards_reborn:arcanum_dust_transmutation neutral @p", hide: true }
      ]
    })

    event.custom({
      "type": "lychee:block_interacting",
      "hide_in_viewer": false,
      "ghost": true,
      "block_in": middle,
      "comment": "Needs additional blocks below the item to work. Check the ponder for details",
      "item_in": {
        "item": catalyst // Item that needs to be on top of the structure in the middle
      },
      "post": [
        {
          "type": "drop_item",
          "item": output
        }
      ]
    })
  }

  ClickingSquareCrafting("thermal:coal_coke", "minecraft:furnace", "quark:sturdy_stone", "quark:sturdy_stone", "minecraft:coal_block")

  ClickingSquareCrafting("kubejs:lemon_quartz", "kubejs:magical_generator_block", "kubejs:source_alloy_block", "kubejs:arcanum_alloy_block", "kubejs:source_alloy_block")

  const clickB = event.recipes.create.item_application

  clickB("twilightforest:liveroot_block", ["twilightforest:root", "druidic_quest_core:nature_essence"])
  clickB("crying_obsidian", ["obsidian", "kubejs:cut_onions"])
  clickB("immersiveengineering:slag_glass", ["glass", "thermal:slag"])
  clickB("ars_nouveau:source_jar", ["vintagedelight:fermenting_jar", "kubejs:source_alloy_ingot"])
  clickB("create:rose_quartz_block", ["minecraft:quartz_block", "minecraft:rose_bush"])

  event.remove([
    { id: "create:rose_quartz_block_from_rose_quartz_stonecutting" },
    { id: "create:rose_quartz_tiles_from_polished_rose_quartz_stonecutting" },
    { id: "create:small_rose_quartz_tiles_from_polished_rose_quartz_stonecutting" }])

  event.custom({
    "type": "lychee:block_interacting",
    "comment": "one of the items needs to be in the offhand",
    "post": [
      { "type": "place", "block": "naturesaura:wood_stand" },
      { "type": "damage_item", "damage": 1, "target": "/item_in/0" },
      { "type": "execute", "command": "playsound sawmill:ui.sawmill.take_result neutral @p", "hide": true },
      { "type": "execute", "command": "advancement grant @p only naturesaura:wood_stand", "hide": true },
      { "type": "execute", "command": "ftbquests change_progress @p complete 5A3EA25913807A1A", "hide": true }
    ],
    "item_in": [
      { "tag": "forge:tools/knives" },
      { "item": "naturesaura:gold_leaf" }
    ],
    "block_in": { "tag": "forge:stripped_logs" }
  }).id("naturesaura:wood_stand")

  event.custom({
    type: "lychee:block_interacting",
    post: [
      {
        type: "hurt",
        damage: 1
      },
      {
        type: "drop_item",
        "contextual": [
          {
            type: "chance",
            "chance": 0.8
          }
        ],
        item: "twigs:pebble",
        "count": 1
      },
      {
        type: "add_item_cooldown",
        "s": 0.5
      }
    ],
    item_in: {
      item: "minecraft:air"
    },
    block_in: "minecraft:stone"
  })

  event.custom({
    type: "lychee:block_interacting",
    post: [
      { type: "drop_item", item: "kubejs:big_enchanting_rune", count: 1 },
      { type: "execute", command: "playsound wizards_reborn:arcanum_dust_transmutation neutral @p", hide: true },
      { type: "place", block: "air" }
    ],
    item_in: [
      { item: "ars_nouveau:manipulation_essence" }
    ],
    block_in: "kubejs:deepslate_rune"
  })



  /*function TallFlowers(flower)
  {
    event.custom({
  "type": "lychee:block_interacting",
  "post": [
    {"type": "drop_item", "item": flower},
  ],
  "item_in": [
    {"item": "bone_meal"}
  ],
  "block_in": flower
  })
  }

  TallFlowers("minecraft:pitcher_plant")*/
})