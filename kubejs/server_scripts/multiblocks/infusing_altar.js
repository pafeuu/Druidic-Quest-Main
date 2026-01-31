/////////////
//Based on script by 800020h
ServerEvents.recipes(event => {
  
  function Infusing(result, amount, ingredients) {
    const contextualConditions = [
        { "type": "execute", "command": 'execute if block ~1 ~-1 ~ rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~-1 ~-1 ~ rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~ ~-1 ~1 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~ ~-1 ~-1 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~1 ~-1 ~-2 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~ ~-1 ~-2 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~-1 ~-1 ~-2 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~1 ~-1 ~2 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~ ~-1 ~2 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~-1 ~-1 ~2 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~2 ~-1 ~-1 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~2 ~-1 ~ rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~2 ~-1 ~1 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~-2 ~-1 ~-1 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~-2 ~-1 ~ rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~-2 ~-1 ~1 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~1 ~-1 ~1 thermal:ruby_block', "hide": true },
        { "type": "execute", "command": 'execute if block ~1 ~-1 ~-1 thermal:ruby_block', "hide": true },
        { "type": "execute", "command": 'execute if block ~-1 ~-1 ~1 thermal:ruby_block', "hide": true },
        { "type": "execute", "command": 'execute if block ~-1 ~-1 ~-1 thermal:ruby_block', "hide": true },
        { "type": "execute", "command": 'execute if block ~ ~2 ~3 kubejs:charged_copper_block', "hide": true },
        { "type": "execute", "command": 'execute if block ~ ~2 ~-3 kubejs:charged_copper_block', "hide": true },
        { "type": "execute", "command": 'execute if block ~3 ~2 ~ kubejs:charged_copper_block', "hide": true },
        { "type": "execute", "command": 'execute if block ~-3 ~2 ~ kubejs:charged_copper_block', "hide": true },
        { "type": "execute", "command": 'execute if block ~-3 ~ ~ rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~-3 ~1 ~ rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~3 ~ ~ rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~3 ~1 ~ rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~ ~ ~-3 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~ ~1 ~-3 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~ ~ ~3 rubinated_nether:altar_stone_tiles', "hide": true },
        { "type": "execute", "command": 'execute if block ~ ~1 ~3 rubinated_nether:altar_stone_tiles', "hide": true }
    ];

    const itemInputs = ingredients.map(function(ingredient) {
      var obj = {};
      obj[ingredient.type] = ingredient.name;
      return obj;
    });

    event.custom({
        'type': 'lychee:item_inside',
        "hide_in_viewer": true,
        "contextual": {
            "type": "and",
            "contextual": contextualConditions
        },
        'post': [
            {
              "type": "drop_item",
              "count": amount,
              "item": result
            },
            {
              "type": "execute",
              "command": 'playsound minecraft:block.blastfurnace.fire_crackle neutral @p'  
            },
            {
              "type": "execute",
              "command": "fill ~3 ~2 ~3 ~-3 ~2 ~-3 minecraft:waxed_copper_block replace kubejs:charged_copper_block"
            },
            {
              "type": "execute",
              "command": "fill ~1 ~-1 ~1 ~-1 ~-1 ~-1 kubejs:depleted_ruby_block replace thermal:ruby_block"
            },
            {
              "type": "delay",
              "s": 5
            },
            {
              "type": "execute",
              "command": "fill ~1 ~-1 ~1 ~-1 ~-1 ~-1 thermal:ruby_block replace kubejs:depleted_ruby_block"
            }

        ],
        'item_in': itemInputs,
        'block_in': 'kubejs:infusing_altar'
    });

    // Second registration for JEI display
    event.custom({
        "type": "lychee:item_inside",
        "ghost": true,
        "comment": "Needs infusing altar multiblock to work. Check ponder by holding W while hovering over infusing altar for more info",
        'item_in': itemInputs,
        "block_in": 'kubejs:infusing_altar',
        "post": [
            {
                "type": "drop_item",
                "item": result,
                "count": amount
            }
        ]
    })
  }
  

  Infusing("thermal:ruby",1,[
    { type: 'item', name: 'rubinated_nether:ruby' },
    { type: 'item', name: 'rubinated_nether:ruby' },
    { type: 'item', name: 'rubinated_nether:ruby' },
    { type: 'item', name: 'rubinated_nether:ruby' },
    { type: 'item', name: 'kubejs:improved_alchemical_dust' }
  ]);

  Infusing("thermal:sapphire",1,[
    { type: 'item', name: 'kubejs:sapphire' },
    { type: 'item', name: 'kubejs:sapphire' },
    { type: 'item', name: 'kubejs:sapphire' },
    { type: 'item', name: 'kubejs:sapphire' },
    { type: 'item', name: 'kubejs:basic_alchemical_dust' }
  ]);

  Infusing("kubejs:infused_diamond",1,[
    { type: 'item', name: 'diamond' },
    { type: 'item', name: 'diamond' },
    { type: 'item', name: 'diamond' },
    { type: 'item', name: 'diamond' },
    { type: 'item', name: 'kubejs:primitive_alchemical_dust' }
  ]);

  Infusing("kubejs:infused_emerald",1,[
    { type: 'item', name: 'emerald' },
    { type: 'item', name: 'emerald' },
    { type: 'item', name: 'emerald' },
    { type: 'item', name: 'emerald' },
    { type: 'item', name: "wizards_reborn:arcanum_dust" }
  ]);

  Infusing("kubejs:infused_amethyst",1,[
    { type: 'item', name: 'amethyst_shard' },
    { type: 'item', name: 'amethyst_shard' },
    { type: 'item', name: 'amethyst_shard' },
    { type: 'item', name: 'amethyst_shard' },
    { type: 'item', name: 'kubejs:basic_alchemical_dust' }
  ]);

  Infusing("kubejs:electricity_essence",1,[
    { type: 'item', name: 'thermal:sapphire' },
    { type: 'item', name: 'thermal:sapphire' },
    { type: 'item', name: 'thermal:sapphire' },
    { type: 'item', name: 'thermal:sapphire' },
    { type: 'item', name: "kubejs:berry_quartz" },
    { type: 'item', name: "kubejs:berry_quartz" },
    { type: 'item', name: "kubejs:berry_quartz" },
    { type: 'item', name: "kubejs:berry_quartz" },
    { type: 'item', name: "kubejs:lightning_essence" }
  ]);


  Infusing("kubejs:berry_quartz",1,[
    { type: 'item', name: "quark:berry_sack" },
    { type: 'item', name: "quark:glowberry_sack" },
    { type: 'item', name: "arsdelight:source_berry_crate" },
    { type: 'item', name: "vintagedelight:gearo_berry_bag" },
    { type: 'item', name: "fruitsdelight:cranberry_crate" },
    { type: 'item', name: "fruitsdelight:blueberry_crate" },
    { type: 'item', name: "fruitsdelight:bayberry_crate" },
    { type: 'item', name: "fruitsdelight:hawberry_crate" },
    { type: 'item', name: "create:rose_quartz" }
  ]);

  

})