ServerEvents.recipes(event=>{

    function ClickingSquareCrafting(catalyst, output, sides, corners, middle){

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
        {
          "type": "execute",
          "command": "playsound forbidden_arcanus:item.mundabitur_dust.use neutral @a",
          "hide": true
        }
      ]
    })

    event.custom({
      "type": "lychee:block_interacting",
      "hide_in_viewer": false,
      "ghost":true,
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

    ClickingSquareCrafting("thermal:coal_coke","minecraft:furnace","quark:sturdy_stone","quark:sturdy_stone","minecraft:coal_block")
  
    ClickingSquareCrafting("kubejs:lemon_quartz","kubejs:magical_generator_block","kubejs:source_alloy_block","kubejs:arcanum_alloy_block","kubejs:source_alloy_block")

    const clickB = event.recipes.create.item_application

    clickB("twilightforest:liveroot_block",["twilightforest:root","kubejs:nature_essence"])
    clickB("crying_obsidian",["obsidian","kubejs:cut_onions"])
    clickB("immersiveengineering:slag_glass",["glass","thermal:slag"])
    clickB("ars_nouveau:source_jar",["vintagedelight:fermenting_jar","kubejs:source_alloy_ingot"])
})