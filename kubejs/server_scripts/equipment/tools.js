
ServerEvents.recipes(event => {
  
	const tooltype = ['hoe','sword','pickaxe','axe','shovel'];

	let DimenstionalTools = ['twilightforest:ironwood_hoe','twilightforest:ironwood_sword','twilightforest:ironwood_pickaxe','twilightforest:ironwood_axe','twilightforest:ironwood_shovel',
	'twilightforest:steeleaf_hoe','twilightforest:steeleaf_sword','twilightforest:steeleaf_pickaxe','twilightforest:steeleaf_axe','twilightforest:steeleaf_shovel','aether:zanite_hoe',
	'aether:zanite_sword','aether:zanite_pickaxe','aether:zanite_axe','aether:zanite_shovel','aether:gravitite_hoe','aether:gravitite_sword','aether:gravitite_pickaxe','aether:gravitite_axe',
	'deep_aether:skyjade_hoe','deep_aether:skyjade_sword','deep_aether:skyjade_pickaxe','deep_aether:skyjade_axe','deep_aether:skyjade_shovel','minecraft:netherite_hoe','minecraft:netherite_sword',
	'minecraft:netherite_pickaxe','minecraft:netherite_axe','minecraft:netherite_shovel']
	

	DimenstionalTools.forEach(tool => {
        event.shapeless(tool, ['enigmaticlegacy:extradimensional_eye', tool]).modifyResult((grid, result) => {
          let _tool = grid.find(Ingredient.of(tool));
          if(!_tool.hasEnchantment('majruszsenchantments:telekinesis', 1)){
            _tool = _tool.enchant('majruszsenchantments:telekinesis', 1);
          }
          return _tool;
        })
    })
	
	event.remove({output:'#minecraft:axes'})
	event.remove({output:'#minecraft:pickaxes'})
	event.remove({output:'#minecraft:shovels'})
	event.remove({output:'#minecraft:hoes'})
	event.remove({output:'#minecraft:swords'})

	//==================================================Functions==================================================

	function tool(output,material,rod,binding){// Creates simple workbench recipes with bindings and tool rods

		event.shaped(
			Item.of(output+'_pickaxe'), 
			[
			  'FFF',
			  'XS ', 
			  ' S '
			],
			{
				F: material,
				X: binding,
				S: rod
			}
		  )
		  
		  event.shaped(
			Item.of(output+'_axe'), 
			[
			  'FF ',
			  'FS ', 
			  'XS '
			],
			{
				F: material,
				X: binding,
				S: rod
			}
		  )
		  
		  
		  event.shaped(
			Item.of(output+'_shovel'), 
			[
			  ' F ',
			  'XS ', 
			  ' S '
			],
			{
				F: material,
				X: binding,
				S: rod
			}
		  )
		  
	  
		  event.shaped(
			Item.of(output+'_hoe'), 
			[
			  'FF ',
			  'XS ', 
			  ' S '
			],
			{
				F: material,
				X: binding,
				S: rod
			}
		  )
		  
		  
		  event.shaped(
			Item.of(output+'_sword'), 
			[
			  ' F ',
			  'XF ', 
			  ' S '
			],
			{
			  F: material,
			  X: binding,
			  S: rod
			} 
		  )
	}

	function toolNoSword(output,material,rod,binding){// Creates simple workbench recipes with bindings and tool rods but without a sword recipe

		event.shaped(
			Item.of(output+'_pickaxe'), 
			[
			  'FFF',
			  'XS ', 
			  ' S '
			],
			{
				F: material,
				X: binding,
				S: rod
			}
		  )
		  
		  event.shaped(
			Item.of(output+'_axe'), 
			[
			  'FF ',
			  'FS ', 
			  'XS '
			],
			{
				F: material,
				X: binding,
				S: rod
			}
		  )
		  
		  
		  event.shaped(
			Item.of(output+'_shovel'), 
			[
			  ' F ',
			  'XS ', 
			  ' S '
			],
			{
				F: material,
				X: binding,
				S: rod
			}
		  )
		  
	  
		  event.shaped(
			Item.of(output+'_hoe'), 
			[
			  'FF ',
			  'XS ', 
			  ' S '
			],
			{
				F: material,
				X: binding,
				S: rod
			}
		  )
		  
	}

	

	//===============================================Tool Functionality=============================================

	//Chisel
	event.custom({
		"type": "lychee:block_interacting",
		"post": [
		  {
			"type": "place",
			"block": "minecraft:stone_slab"
		  },
		  {
			"type": "damage_item",
			"damage": 1
		  },
		  {
			"type": "drop_item",
			"item": "twigs:pebble",
			"count": 3
		  },
		  {
			"type": "execute",
			"command": "playsound minecraft:ui.stonecutter.take_result neutral @p",
			"hide": true
		  }
		],
		"item_in": [
		  {
			"tag": "forge:tools/chisels"
		  }
		],
		"block_in": "minecraft:stone"
	  })

		
	
	  event.custom({
		"type": "lychee:block_interacting",
		"post": [
		  {
			"type": "place",
			"block": "minecraft:air"
		  },
		  {
			"type": "damage_item",
			"damage": 1,
			"target": "/item_in/0"
		  },
		  {
			"type": "drop_item",
			"item": "kubejs:primitive_mortar"
		  },
		  {
			"type": "execute",
			"command": "playsound minecraft:ui.stonecutter.take_result neutral @p",
			"hide": true
		  }
		],
		"item_in": [
		  {
			"tag": "forge:tools/chisels"
		  },
		  {
			"item": "flint"
		  }
		],
		"block_in": "minecraft:stone_slab"
	  })

	//Terraformer
	event.custom({
	"type": "lychee:block_interacting",
	"hide_in_viewer": true,
	"contextual":{
		"type": "location",
		"predicate":{
			"position":{
				"y":{
					"min": 60,
					"max": 320
				}
			}
		}
	},
	"post": [
		{
			"type": "drop_item",
			"item": "thermal:compost",
			"contextual":{
				"type": "chance",
				"chance": 0.1
			} 
		},
		{
			"type": "place",
			"block": "air"
		},
		{
			"type": "damage_item"
		}
	],
	"item_in": {
		"item": "kubejs:the_terraformer"
	},
	"block_in": {
		"tag": "alexsmobs:am_spawns"
	}
	})
	
	event.custom({
		type: "lychee:block_interacting",
		item_in: {tag: "forge:tools/hammers"},
		block_in: "kubejs:sturdy_deepslate",
		post: [
			{type: "place", block: "kubejs:sturdy_deepslate_slab"},
			{type: "damage_item", damage: 8},
			{type: "execute", command: "playsound minecraft:block.deepslate.break neutral @p", hide: true}
		]
	})

	event.custom({
		type: "lychee:block_interacting",
		item_in: {tag: "forge:tools/hammers"},
		block_in: "kubejs:sturdy_deepslate_slab",
		post: [
			{type: "place", block: "kubejs:sturdy_deepslate_plate"},
			{type: "damage_item", damage: 4},
			{type: "execute", command: "playsound minecraft:block.deepslate.break neutral @p", hide: true}
		]
	})


	event.custom({
		type: "lychee:block_interacting",
		item_in: {tag: "forge:tools/chisels"},
		block_in: "kubejs:sturdy_deepslate_plate",
		post: [
			{type: "place", block: "kubejs:deepslate_rune"},
			{type: "damage_item", damage: 1},
			{type: "execute", command: "playsound minecraft:block.deepslate.break neutral @p", hide: true}
		]
	})

	event.custom({
		type: "lychee:block_interacting",
		item_in: {tag: "forge:tools/chisels"},
		"hide_in_viewer": true,
		block_in: "kubejs:deepslate_rune",
		post: [
			{type: "place", block: "air"},
			{type: "drop_item", item: "kubejs:deepslate_rune"},
			{type: "damage_item", damage: 0}
		]
	})

	// Magical Feathers

	event.custom({
		type: "lychee:block_interacting",
		item_in: {tag: "forge:tools/magic_feather"},
		"hide_in_viewer": true,
		block_in: {tag:"forge:obsidian"},
		post: [
			{type: "place", block: "air"},
			{type: "drop_item", item: "minecraft:obsidian"},
			{type: "damage_item", damage: 1},
			{type: "execute", command: "playsound minecraft:block.amethyst_block.break neutral @p", hide: true}
		]
	})

	event.custom({
		type: "lychee:block_interacting",
		item_in: {tag: "forge:tools/magic_feather"},
		"hide_in_viewer": true,
		block_in: "minecraft:crying_obsidian",
		post: [
			{type: "place", block: "air"},
			{type: "drop_item", item: "minecraft:crying_obsidian"},
			{type: "damage_item", damage: 1},
			{type: "execute", command: "playsound minecraft:block.amethyst_block.break neutral @p",hide: true}
		]
	})

	event.custom({
		type: "lychee:block_interacting",
		item_in: {tag: "forge:tools/tier2_magic_feather"},
		"hide_in_viewer": true,
		block_in: "netherrack",
		contextual:{
			type: "location",
			predicate:{
				dimension: "the_nether",
			}
		},
		post: [
			{type: "explode", block: "air", radius: 5},
			{type: "damage_item", damage: 25},
			{type: "add_item_cooldown", s: 3},
			{type: "execute", command: "playsound minecraft:block.amethyst_block.break neutral @p",hide: true}
		]
	})
	
	const MazeBlocks = [
		'twilightforest:mazestone_border',
		'twilightforest:mazestone',
		'twilightforest:mazestone_brick',
		'twilightforest:cracked_mazestone',
		'twilightforest:mossy_mazestone',
		'twilightforest:decorative_mazestone',
		'twilightforest:cut_mazestone',
		'twilightforest:mazestone_mosaic']
	
	MazeBlocks.forEach(id => {
		event.custom({
		type: "lychee:block_interacting",
		item_in: {item:"kubejs:rainbow_magic_feather"},
		"hide_in_viewer": false,
		block_in: id,
		post: [
			{type: "place", block: "air"},
			{type: "damage_item", damage: 2},
			{type: "drop_item", item: id},
			{type: "execute", command: "playsound minecraft:block.stone.break_block.break neutral @p",hide: true}
		]
	})
	});

	event.custom({
		type: "lychee:block_interacting",
		item_in: {item:"kubejs:rainbow_magic_feather"},
		"hide_in_viewer": false,
		block_in: "bedrock",
		contextual:{
			type: "location",
			predicate:{
				dimension: "the_nether",
				"position": {
            		"y": {
					"min": 100,
					"max": 150
				}
        }
				
			}
		},
		post: [
			{type: "place", block: "air"},
			{type: "damage_item", damage: 128},
			{type: "execute", command: "playsound minecraft:block.amethyst_block.break neutral @p",hide: true}
		]
	})

	//Royal Gueard Sword

	event.custom({
		type: "lychee:block_interacting",
		item_in: {item:"kubejs:royal_guard_sword"},
		block_in: "carved_pumpkin",
		post: [
			{type: "place", block: "air"},
			{type: "damage_item", damage: 100},
			{type: "add_item_cooldown", s: 30},
			{type: "execute", "command": "summon iron_golem ~ ~2 ~ {Health:100f,PlayerCreated:1b,CustomName:'{\"text\":\"Guard\",\"color\":\"aqua\",\"bold\":true}',Attributes:[{Name:generic.max_health,Base:100}]}", hide: true}
		]
	})

	//Keys

	event.custom({
		type: "lychee:block_interacting",
		"hide_in_viewer": true,
		post: [
		  {type: "drop_item", item:"kubejs:spawner_part"},
		  {type: "place", block: "air"},
		  {type: "execute", command: "playsound design_decor:large_chain_break neutral @p", hide: true},
		  {type: "drop_item", item:"thermal:ruby"}
		],
		item_in: {
		  item: "kubejs:broken_key"
		},
		block_in: "minecraft:spawner"
	  })

	event.custom({
		type: "lychee:block_interacting",
		"hide_in_viewer": true,
		contextual:{
			type: "location",
			predicate:{
				dimension: "overworld"
			}
		},
		post: [
		  {type: "drop_item", item:"kubejs:spawner_part"},
		  {type: "place", block: "air"},
		  {type: "execute", command: "playsound minecraft:block.ender_chest.open neutral @p", hide: true},
		  {type: "delay", s: 0.5},
		  {type: "execute", command: "playsound minecraft:entity.experience_orb.pickup neutral @p"},
		  {type: "execute", command: "particle irons_spellbooks:unstable_ender ~ ~ ~ 0.5 0.5 0.5 0.1 80 force"},
		  {type: "execute", command: "loot spawn ~ ~ ~ loot kubejs:chests/overworld_key"},
		  {type: "delay", s: 1},
		  {type: "execute", command: "playsound minecraft:block.ender_chest.close neutral @p", hide: true}
		],
		item_in: {
		  item: "kubejs:overworld_key"
		},
		block_in: "minecraft:spawner"
	  })

	event.custom({
		type: "lychee:block_interacting",
		"hide_in_viewer": true,
		contextual:{
			type: "location",
			predicate:{
				dimension: "twilightforest:twilight_forest"
			}
		},
		post: [
		  {type: "drop_item", item:"kubejs:spawner_part"},
		  {type: "place", block: "air"},
		  {type: "execute", command: "playsound minecraft:block.ender_chest.open neutral @p", hide: true},
		  {type: "delay", s: 0.5},
		  {type: "execute", command: "playsound minecraft:entity.experience_orb.pickup neutral @p"},
		  {type: "execute", command: "particle irons_spellbooks:unstable_ender ~ ~ ~ 0.5 0.5 0.5 0.1 80 force"},
		  {type: "execute", command: "loot spawn ~ ~ ~ loot kubejs:chests/twilight_key"},
		  {type: "delay", s: 1},
		  {type: "execute", command: "playsound minecraft:block.ender_chest.close neutral @p", hide: true}
		],
		item_in: {
		  item: "kubejs:twilight_key"
		},
		block_in: "minecraft:spawner"
	  })

	event.custom({
		type: "lychee:block_interacting",
		"hide_in_viewer": true,
		contextual:{
			type: "location",
			predicate:{
				dimension: "minecraft:the_nether"
			}
		},
		post: [
		  {type: "drop_item", item:"kubejs:spawner_part"},
		  {type: "place", block: "air"},
		  {type: "execute", command: "playsound minecraft:block.ender_chest.open neutral @p", hide: true},
		  {type: "delay", s: 0.5},
		  {type: "execute", command: "playsound minecraft:entity.experience_orb.pickup neutral @p"},
		  {type: "execute", command: "particle irons_spellbooks:unstable_ender ~ ~ ~ 0.5 0.5 0.5 0.1 80 force"},
		  {type: "execute", command: "loot spawn ~ ~ ~ loot kubejs:chests/nether_key"},
		  {type: "delay", s: 1},
		  {type: "execute", command: "playsound minecraft:block.ender_chest.close neutral @p", hide: true}
		],
		item_in: {
		  item: "kubejs:nether_key"
		},
		block_in: "minecraft:spawner"
	  })
	  
	///=============================================================== Shields ==========================================================

	event.shaped("twilightforest:knightmetal_shield",
		[
			"PPP",
			"PXP",
			"PPP"
		],
		{
			X: "shield",
			P: "#forge:plates/knightmetal"
		}
	).id("twilightforest:equipment/knightmetal_shield")

	event.shaped("ars_nouveau:enchanters_shield",
		[
			"YPY",
			"PXP",
			"YPY"
		],
		{
			X: "twilightforest:knightmetal_shield",
			P: "#forge:plates/source_alloy",
			Y: "#forge:plates/gold"
		}
	).id("kubejs:magic_shield")

	event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "kubejs:recipe_changed"
        ], 
	    "kubejs:recipe_change", // reagent
	    "ars_nouveau:enchanters_shield", // output
	    1000
	).id("ars_nouveau:enchanters_shield");

	///=============================================================== Tier 0 Tools ==========================================================

	event.shaped("rehooked:wood_hook",
		[
			"SSP",
			" RS",
			"R S"
		],
		{
			S: "wizards_reborn:arcane_wood_branch",
			P: "wizards_reborn:arcane_wood_pickaxe",
			R: ["supplementaries:rope","rehooked:wood_chain"]
		}
	).id("rehooked:wood_hook")

	event.shaped("quark:trowel",
		[
			"S  ",
			" CC"
		],
		{
			S: "#c:rods/wooden",
			C: "cobblestone"
		}
	).id("quark:tools/crafting/trowel")
	event.shaped("immersive_weathering:steel_wool",
		[
			" I ",
			"IWI",
			" I "
		],
		{
			W: "#minecraft:wool",
			I: "#forge:nuggets/iron"
		}
	)

	toolNoSword("wizards_reborn:arcane_wood","wizards_reborn:arcane_wood_planks","wizards_reborn:arcane_wood_branch","string")
	tool("twilightforest:ironwood","#forge:ingots/ironwood","immersiveengineering:stick_treated","#forge:rope")
	tool("kubejs:uranium","#forge:ingots/uranium","immersiveengineering:stick_treated","#forge:rope")

	tooltype.forEach(type => {
		event.remove({id:"twilightforest:equipment/ironwood_"+type})
	});

	event.shaped("kubejs:primitive_firestarter",
		[
			" F",
			"F "
		],
		{
			F: "flint"
		}
	)

	event.shaped("create:sand_paper",
		[
			"SFS",
			"SPS",
			"SFS"
		],
		{
			S: "sand",
			P: "paper",
			F: "flint"
		}
	).id("create:crafting/materials/sand_paper")

	event.shaped("create:red_sand_paper",
		[
			"SFS",
			"SPS",
			"SFS"
		],
		{
			S: "red_sand",
			P: "paper",
			F: "flint"
		}
	).id("create:crafting/materials/red_sand_paper")

	event.remove({id:"create:sandpaper_polishing/rose_quartz"})

	event.shaped("kubejs:primitive_saw",
		[
			"F  ",
			" FS",
			"  S"
		],
		{F:"flint",
		 S:"#c:rods/wooden"}
	).id("kubejs:primitive_saw")

	event.shaped("kubejs:basic_saw",
		[
			" C ",
			"CXC",
			" C "
		],
		{
			C: "#forge:plates/copper",
			X: "kubejs:primitive_saw"
		}
	)

	event.shaped("kubejs:primitive_mortar",
		[
			" A ",
			"IAI",
			"III"
		],
		{A:"flint",
		 I:"stone"}
	).id("kubejs:primitive_mortar")

	event.shaped('kubejs:primitive_chisel',
		[
			"  F",
			" F ",
			"S  "
		],
		{
			F: "flint",
			S: "#c:rods/wooden"
		}
	).id("kubejs:primitive_chisel")

	event.shaped('kubejs:primitive_shield',
		[
			"FPF",
			"PHP",
			"FPF"
		],
		{
			H: "kubejs:primitive_handle",
			F: "flint",
			P: "#minecraft:planks"
		}
	)

	event.shaped('kubejs:primitive_shears',
		[
			" F ",
			"SPF",
			" S "
		],
		{
			S: "#c:rods/wooden",
			F: "flint",
			P: "#minecraft:planks"
		}
	)


	

	event.shaped("kubejs:flint_spear",
		[
			"  F",
			" S ",
			"S  "
		],
		{
			F: "minecraft:flint",
			S: "#c:rods/wooden"
		}
	)

	event.shaped("kubejs:stone_claymore",
		[
			" B ",
			" B ",
			"CSC"
		],
		{
			C: "cobblestone",
			S: "#c:rods/wooden",
			B: "quark:sturdy_stone"
		}
	)
	
	event.custom({
		"type": "lychee:item_exploding",
		 "post": [
		   {
			 "type": "drop_item",
			 "item": "ars_nouveau:ritual_cloudshaping",
			 "count": 2
		   }
		 ],
		 "item_in": [
		   {
			 "tag": "forge:ingots/gold",
		   },
		   {
			 "item": "naturesaura:ancient_log",
		   },
		   {
			 "item": "naturesaura:ancient_log",
		   },
		   {
			 "tag": "forge:flowers/golden",
		   },
		   {
			 "tag": "forge:flowers/golden",
		   }
		   
		 ]
	   
   })

   event.custom({
	"type": "lychee:block_interacting",
	"item_in": {
		"item": "ars_nouveau:ritual_cloudshaping"
	},
	"block_in": "minecraft:sunflower",
	"post": [
	{
		"type": "execute",
		"command": "weather clear"      
	},
	{
		"type": "execute",
		"command": "playsound irons_spellbooks:cast.generic.holy neutral @p",
		"secret": true
	}
	]
})

	event.remove({output:"thermal:satchel"})
	event.shaped(
		Item.of('thermal:satchel'), 
		[
		  'CFC',
		  'FXF', 
		  'CFC'
		],
		{
		  C: '#forge:leather',
		  F: '#minecraft:wool',
		  X: "#forge:raw_materials/tin"
		}
	  )
		  	

	event.remove({id:"enigmaticlegacy:magnet_ring"})
	event.remove({id:"enigmaticlegacy:golden_ring"})
	
	event.shaped(
	  Item.of('minecraft:stone_axe', '{Damage:110}'), 
	  [
		'FF',
		'FS', 
	  ],
	  {
		F: 'twigs:pebble',
		S: "#c:rods/wooden"
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:stone_pickaxe', '{Damage:120}'), 
	  [
		'FFF',
		' S ', 
		' S '
	  ],
	  {
		F: 'twigs:pebble',
		S: "#c:rods/wooden"
	  }
	)
	
	
	event.shaped(
	  Item.of('minecraft:stone_shovel', '{Damage:120}'), 
	  [
		' F ',
		' S ', 
		' S '
	  ],
	  {
		F: 'twigs:pebble',
		S: "#c:rods/wooden"
	  }
	)
	event.shaped(
	  Item.of('minecraft:stone_hoe', '{Damage:120}'), 
	  [
		'FF ',
		' S ', 
		' S '
	  ],
	  {
		F: 'twigs:pebble',
		S: "#c:rods/wooden"
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:stone_sword', '{Damage:120}'), 
	  [
		' F ',
		' F ', 
		' S '
	  ],
	  {
		F: 'twigs:pebble',
		S: "#c:rods/wooden"
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:stone_sword'), 
	  [
		' F ',
		' F ', 
		' S '
	  ],
	  {
		F: '#forge:cobblestone',
		S: "#c:rods/wooden"
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:stone_pickaxe'), 
	  [
		'FFF',
		' S ', 
		' S '
	  ],
	  {
		F: '#forge:cobblestone',
		S: "#c:rods/wooden"
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:stone_axe'), 
	  [
		'FF ',
		'FS ', 
		' S '
	  ],
	  {
		F: '#forge:cobblestone',
		S: "#c:rods/wooden"
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:stone_shovel'), 
	  [
		' F ',
		' S ', 
		' S '
	  ],
	  {
		F: '#forge:cobblestone',
		S: "#c:rods/wooden"
	  }
	)
	event.shaped(
	  Item.of('minecraft:stone_hoe'), 
	  [
		'FF ',
		' S ', 
		' S '
	  ],
	  {
		F: '#forge:cobblestone',
		S: "#c:rods/wooden"
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:wooden_pickaxe'), 
	  [
		'FFF',
		' S ', 
		' S '
	  ],
	  {
		F: 'minecraft:flint',
		S: "#c:rods/wooden"
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:wooden_axe'), 
	  [
		'FF ',
		'FS ', 
		' S '
	  ],
	  {
		F: 'minecraft:flint',
		S: "#c:rods/wooden"
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:wooden_shovel'), 
	  [
		' F ',
		' S ', 
		' S '
	  ],
	  {
		F: 'minecraft:flint',
		S: "#c:rods/wooden"
	  }
	)
	event.shaped(
	  Item.of('minecraft:wooden_hoe'), 
	  [
		'FF ',
		' S ', 
		' S '
	  ],
	  {
		F: 'minecraft:flint',
		S: "#c:rods/wooden"
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:wooden_sword'), 
	  [
		' F ',
		' F ', 
		' S '
	  ],
	  {
		F: 'minecraft:flint',
		S: "#c:rods/wooden"
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:wooden_pickaxe', "{Damage:0,display:{Lore:['[\"\",{\"text\":\"String Binding allows the tool to last longer!\",\"italic\":false}]'],Name:'[\"\",{\"text\":\"Flint Pickaxe with string binding\",\"italic\":false}]'}}").enchant('unbreaking', 2), 
	  [
		'FFF',
		'XS ', 
		' S '
	  ],
	  {
		F: 'minecraft:flint',
		X: '#forge:string',
		S: "#c:rods/wooden"
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:wooden_axe', "{Damage:0,display:{Lore:['[\"\",{\"text\":\"String Binding allows the tool to last longer!\",\"italic\":false}]'],Name:'[\"\",{\"text\":\"Flint Axe with string binding\",\"italic\":false}]'}}").enchant('unbreaking', 2), 
	  [
		'FFX',
		'FS ', 
		' S '
	  ],
	  {
		F: 'minecraft:flint',
		X: '#forge:string',
		S: "#c:rods/wooden"
	  }
	)
	
	event.shaped(
	  Item.of('minecraft:wooden_shovel', "{Damage:0,display:{Lore:['[\"\",{\"text\":\"String Binding allows the tool to last longer!\",\"italic\":false}]'],Name:'[\"\",{\"text\":\"Flint Shovel with string binding\",\"italic\":false}]'}}").enchant('unbreaking', 2), 
	  [
		' FX',
		' S ', 
		' S '
	  ],
	  {
		F: 'minecraft:flint',
		X: '#forge:string',
		S: "#c:rods/wooden"
	  }
	)
	event.shaped(
	  Item.of('minecraft:wooden_hoe', "{Damage:0,display:{Lore:['[\"\",{\"text\":\"String Binding allows the tool to last longer!\",\"italic\":false}]'],Name:'[\"\",{\"text\":\"Flint hoe with string binding\",\"italic\":false}]'}}").enchant('unbreaking', 2), 
	  [
		'FF ',
		'XS ', 
		' S '
	  ],
	  {
		F: 'minecraft:flint',
		X: '#forge:string',
		S: "#c:rods/wooden"
	  }
	 )
	 event.shaped(
	  Item.of('minecraft:wooden_sword', "{Damage:0,display:{Lore:['[\"\",{\"text\":\"String Binding allows the tool to last longer!\",\"italic\":false}]'],Name:'[\"\",{\"text\":\"Flint Sword with string binding\",\"italic\":false}]'}}").enchant('unbreaking', 2), 
	  [
		' F ',
		' F ', 
		'XS '
	  ],
	  {
		F: 'minecraft:flint',
		X: '#forge:string',
		S: "#c:rods/wooden"
	  }
	)
	
	
	/// ======================================================================= Tier 1 Tools ============================================================================

	event.shaped("immersiveengineering:skyhook",
		[
			"PP ",
			"PP ",
			" HH"
		],
		{
			P: "#forge:plates/iron",
			H: "immersiveengineering:wooden_grip"
		}
	).id("immersiveengineering:crafting/skyhook")
	
	const gemHooks = [
		["rehooked:iron_hook","kubejs:infused_amethyst"],
		["rehooked:blaze_hook","thermal:ruby"],
		["rehooked:diamond_hook","thermal:sapphire"]
	]
	gemHooks.forEach(([hook,gem])=>{

		event.shaped(hook,["GGG","GXG","GGG"],
			{
				G: gem,
				X: "rehooked:wood_hook"
			}
		).id(hook)
	})

	event.shaped("kubejs:grafter",
		[
			"  B",
			" S ",
			"R  "
		],
		{
			R: "immersiveengineering:stick_treated",
			S: "shears",
			B: "#forge:ingots/bronze"
		}
	)
	
	event.shaped("create:potato_cannon",
		[
			"PCP",
			"GBG",
			"PXP"
		],
		{
			P: "#forge:plates/copper",
			C: "crossbow",
			X: "piston",
			B: "supplementaries:bellows",
			G: "create:cogwheel"
		}
	).id("create:mechanical_crafting/potato_cannon")

	event.shaped("kubejs:silver_knife",
		[
		" I",
		"BS"
		],
		{
			S: "immersiveengineering:stick_treated",
			I: "#forge:ingots/silver",
			B: "string"
		}
	)

	event.shaped("farmersdelight:iron_knife",[" I","BS"],
		{
			S: "immersiveengineering:stick_treated",
			I: "#forge:ingots/iron",
			B: "string"
		}
	).id("farmersdelight:iron_knife")
	
	event.shaped("thermal:fluid_reservoir",
		[
			"CRC",
			"TBT",
			"TTT"
		],
		{
			C: "#forge:gears/copper",
			R: "thermal:cured_rubber",
			T: "create:fluid_tank",
			B: "bucket"
		}
	).id("thermal:fluid_reservoir")

	event.shaped("thermal:detonator",
		[
			" R ",
			"TET",
			"TTT"
		],
		{
			T: "#forge:plates/tin",
			E: "ender_pearl",
			R: "minecraft:redstone_torch"
		}
	).id("thermal:tools/detonator")

	event.shaped("flint_and_steel",
		[
			"III",
			"IFI",
			"III"
		],
		{
			I: "#forge:ingots/iron",
			F: "kubejs:primitive_firestarter"
		}
	).id("minecraft:flint_and_steel")

	event.shaped("kubejs:sacrificial_dagger",
		[
			"  O",
			"GO ",
			"RG "
		],
		{
			O: "obsidian",
			G: "#forge:plates/gold",
			R: "#forge:rods/gold"
		}
	).id("kubejs:sacrificial_dagger")
	
	event.shaped("create:clipboard",
		[
			"C",
			"P",
			"W"
		],
		{
			C: "#forge:nuggets/iron",
			P: "paper",
			W: "#forge:plates/wooden"
		}
	).id("create:crafting/appliances/clipboard")

	event.shaped("create:brown_toolbox",
		[
			"WRW",
			"GSG",
			"WWW"
		],
		{
			W: "#forge:plates/wooden",
			S: "supplementaries:sack",
			G: "#forge:plates/gold",
			R: "#forge:rods/gold"
		}
	).id("create:crafting/curiosities/brown_toolbox")

	tool('minecraft:iron','#forge:ingots/iron','#forge:rods/treated_wood','string')
	tool('kubejs:copper','#forge:ingots/copper','#forge:rods/treated_wood','string')
	tool('kubejs:silver','#forge:ingots/silver','#forge:rods/treated_wood','string')
	tool('kubejs:lead','#forge:ingots/lead','#forge:rods/treated_wood','string')
	

	event.shaped("kubejs:the_ice_cube",
		[
			" I ",
			"III",
			" I "
		],
		{I:"ice"}
	).id("kubejs:the_ice_cube")

	/// ======================================================================= Tier 2 Tools ============================================================================
	
	event.shaped(Item.of('kubejs:capturing_gem', '{captured:0b}'),
		[
			"YZY",
			"ZXZ",
			"YZY"
		],
		{
			Y: "ars_nouveau:air_essence",
			Z: "enigmaticlegacy:extradimensional_eye",
			X: "supplementaries:cage"
		}
	)

	event.shapeless(Item.of('kubejs:capturing_gem', '{captured:0b}'),'kubejs:capturing_gem')
	
	event.shaped("enigmaticlegacy:enchantment_transposer",
		[
			"BPB",
			"LTL",
			"BRB"
		],
		{
			B: "blaze_powder",
			P: "#forge:plates/arcanum_alloy",
			T: "kubejs:twilight_tome",
			L: "lapis_lazuli",
			R: "kubejs:big_enchanting_rune"
		}
	).id("enigmaticlegacy:enchantment_transposer")
	
	event.shaped("farmersdelight:diamond_knife",[" I","BS"],
		{
			S: "kubejs:zinc_tool_handle",
			I: "#forge:gems/diamond",
			B: "alexsmobs:shed_snake_skin"
		}
	).id("farmersdelight:diamond_knife")
	

	
	event.smithing("create:copper_diving_boots","#forge:storage_blocks/lead","kubejs:copper_boots","ars_nouveau:water_essence").id("create:crafting/appliances/copper_diving_boots")
	event.smithing("create:copper_diving_helmet","thermal:obsidian_glass","kubejs:copper_helmet","ars_nouveau:water_essence").id("create:crafting/appliances/copper_diving_helmet")

	event.shaped("create:copper_backtank",
		[
			"CRC",
			"CAC",
			"CWC"
		],
		{
			C: "#forge:plates/copper",
			R: "#forge:rods/iron",
			A: "ars_nouveau:air_essence",
			W: "ars_nouveau:water_essence"
		}
	).id("create:crafting/appliances/copper_backtank")

	event.shaped("aether:iron_ring",
		[
			" X ",
			"XRX",
			" X "
		],
		{X:"#forge:ingots/iron",
		 R:"ars_nouveau:ring_of_potential"}
	).id("aether:iron_ring")

	event.shaped("aether:golden_ring",
		[
			" X ",
			"XRX",
			" X "
		],
		{X:"#forge:ingots/gold",
		 R:"ars_nouveau:ring_of_potential"}
	).id("aether:golden_ring")

	event.shaped("kubejs:daybloom_ring",
		[
			" XF",
			"XRX",
			" X "
		],
		{X:"#forge:ingots/silver",
		 R:"aether:golden_ring",
		 F:"minecraft:dandelion"}
	).id("kubejs:daybloom_ring")


	event.shaped('shield',
		[
			"PWP",
			"WSW",
			"PWP"
		],
		{
			W: "#minecraft:planks",
			S: "kubejs:primitive_shield",
			P: "#forge:plates/iron"
		}
	).id("minecraft:shield")

	event.remove({id:"aether:skyroot_iron_vanilla_shield"})
	event.remove({id:"aether:wood_zanite_vanilla_shield"})
	event.remove({id:"aether:skyroot_zanite_vanilla_shield"})
	
	event.custom({
		"type": "rubinated_nether:freezing",
		"category": "freezable_misc",
		"cookingtime": 2000,
		"experience": 1.0,
		"ingredient": {
			"item": "kubejs:chill_blade"
		},
		"result": Item.of('kubejs:ice_blade', '{Damage:0,ISB_Spells:{data:[{id:"irons_spellbooks:icicle",index:0,level:5,locked:0b}],maxSpells:1,mustEquip:0b,spellWheel:1b}}')
	})

	event.custom({
		type: "lychee:item_inside",
		item_in:[
			{item:"minecraft:iron_sword"},
			{item:"quark:diamond_heart"}
		],
		post:{type: "drop_item", item: "kubejs:chill_blade"},
		block_in: "minecraft:powder_snow"
	})

	event.shaped("aether:chainmail_gloves",
	  [
		'III',
		'IMI', 
		'III' 
	  ],
	  {
		I: 'chain',
		M: 'aether:leather_gloves'

	  }
	)

	event.shaped("aether:iron_gloves",
		[
		  'III',
		  'IMI', 
		  'III' 
		],
		{
		  I: '#forge:plates/iron',
		  M: 'aether:chainmail_gloves'
  
		}
	  )

	event.shaped("umbral_skies:knightmetal_gloves",
		[
		  'III',
		  'IMI', 
		  'III' 
		],
		{
		  I: '#forge:ingots/knightmetal',
		  M: 'aether:iron_gloves'
  
		}
	  )
	
	  event.shaped("umbral_skies:arctic_gloves",
		[
		  'III',
		  'IMI', 
		  'III' 
		],
		{
		  I: "immersiveengineering:hemp_fabric",
		  M: 'aether:leather_gloves'
		}
	  )

	  event.shaped("umbral_skies:yeti_gloves",
		[
		  'III',
		  'IMI', 
		  'III' 
		],
		{
		  I: 'twilightforest:alpha_yeti_fur',
		  M: 'umbral_skies:arctic_gloves'
		}
	  )

	  event.shaped("umbral_skies:naga_gloves",
		[
		  'III',
		  'IMI', 
		  'III' 
		],
		{
		  I: 'twilightforest:naga_scale',
		  M: 'aether:leather_gloves'
		}
	  )

	  event.shaped("umbral_skies:ironwood_gloves",
		[
		  'III',
		  'IMI', 
		  'III' 
		],
		{
		  I: '#forge:ingots/ironwood',
		  M: 'umbral_skies:naga_gloves'
		}
	  )

	event.shaped(
		Item.of('kubejs:metal_crucifix'), 
		[
		  'III',
		  'IMI', 
		  'III' 
		],
		{
		  I: '#forge:plates/lead',
		  M: 'kubejs:wooden_crucifix'

		}
	  )

	event.remove({output:"enigmaticlegacy:extradimensional_eye"})
	event.shaped(
		Item.of('enigmaticlegacy:extradimensional_eye'), 
		[
		  'EGE',
		  'GXG', 
		  'EGE'
		],
		{
		  X: 'minecraft:lead',
		  E: 'ender_pearl',
		  G: '#forge:plates/gold'
		}
	  )
	event.remove({output:'naturesaura:light_staff'})
	event.custom({
		 "type": "lychee:lightning_channeling",
		  "post": [
			{
			  "type": "drop_item",
			  "item": "naturesaura:light_staff"
			},
			{
				"type": "execute",
				"command": "playsound irons_spellbooks:cast.generic.holy neutral @p",
				"hide": "true"
			}
		  ],
		  "item_in": [
			{
			  "item": "minecraft:glowstone",
			},
			{
			  "item": "farmersdelight:glow_berry_custard",
			},
			{
			  "item": "naturesaura:ancient_stick",
			},
			{
			  "item": "naturesaura:ancient_stick",
			},
			{
			  "item": "naturesaura:token_fear"
			}
		  ]
	})
	
	
	event.remove({output:'minecraft:shears'})
	event.shaped(
	  Item.of('minecraft:shears'), 
	  [
		' I ',
		'PSI', 
		'IP '
	  ],
	  {
		I: '#forge:plates/iron',
		P: 'kubejs:wooden_plate',
		S: 'kubejs:primitive_shears'
	  }
	)

	event.remove({output:'solonion:lunchbox'})
	event.shaped(
	  Item.of('solonion:lunchbox'), 
	  [
		'III',
		'ISI', 
		'III'
	  ],
	  {
		I: '#forge:plates/iron',
		S: 'solonion:lunchbag'
	  }
	)

	event.remove({output:'irons_spellbooks:copper_spell_book'})
	event.shaped(
	  Item.of('irons_spellbooks:copper_spell_book'), 
	  [
		'CL',
		'SM', 
		'CL'
	  ],
	  {
		C: '#forge:plates/copper',
		S: 'minecraft:string',
		M: 'kubejs:magic_book',
		L: 'minecraft:leather'
	  }
	)

	event.remove({output:'ars_nouveau:novice_spell_book'})
	event.custom({
		"type": "ars_nouveau:imbuement",
		  "count": 1,
		  "input": {
			"item": "irons_spellbooks:copper_spell_book"
		  },
		  "output": "ars_nouveau:novice_spell_book",
		  "pedestalItems": [],
		  "source": 5000
	})
	
	tool('minecraft:diamond','#forge:gems/diamond','kubejs:zinc_tool_handle','alexsmobs:shed_snake_skin')

	
	
	/// ============================================= Tier 2 Tools ===========================================================

	event.shaped("kubejs:basic_mortar",
		[
			" C ",
			"CXC",
			" C "
		],
		{C:"#forge:plates/copper",
		 X:"kubejs:primitive_mortar"}
	).id("kubejs:basic_mortar")

	event.shaped("kubejs:blade_of_grass",
		[
			'XXX',
			'XAX',
			'XXX'
		],
		{
			X: "kubejs:nature_essence",
			A: "kubejs:mossy_sword"
		}
	)

	
	event.shaped("kubejs:basic_chisel",
		[
			'  A',
			' X ',
			'H  '
		],
		{
			H: "kubejs:zinc_tool_handle",
			X: "kubejs:primitive_chisel",
			A: "kubejs:source_alloy_ingot"
		}
	)

	tooltype.forEach(id => {
		event.shaped("aether:zanite_"+id,
			[
				' I ',
				'IXI', 
				' I ' 
			],
			{
				I: '#forge:gems/zanite',
				X: 'minecraft:iron_'+id
			}
		)	
	});

	tooltype.forEach(id => {
		event.shaped("deep_aether:skyjade_"+id,
			[
				' I ',
				'IXI', 
				' I ' 
			],
			{
				I: '#forge:gems/skyjade',
				X: 'minecraft:iron_'+id
			}
		)	
	});
	
	event.shaped("aether:zanite_ring",
		[
		  ' I ',
		  'IXI', 
		  ' I ' 
		],
		{
		  I: '#forge:gems/zanite',
		  X: 'aether:iron_ring'
		}
	  ).id("aether:zanite_ring")
	
	event.shaped("deep_aether:skyjade_ring",
		[
		  ' I ',
		  'IXI', 
		  ' I ' 
		],
		{
		  I: '#forge:gems/skyjade',
		  X: 'aether:iron_ring'
		}
	  ).id("deep_aether:skyjade_ring")
	

	event.shapeless("quark:pickarang",["diamond_pickaxe","quark:diamond_heart"]).id("quark:tools/crafting/pickarang_heart")

	event.shaped("thermal:potion_quiver",
		[
			"PFP",
			"PQP",
			"SPB"
		],
		{
			P: "#forge:plates/bronze",
			F: "ars_nouveau:potion_flask",
			Q: "supplementaries:quiver",
			S: "ars_nouveau:magebloom_fiber",
			B: "create:belt_connector"
		}
	).id("thermal:potion_quiver")

	
	event.shaped(
		Item.of('4x waystones:return_scroll'), 
		[
		  'NSN',
		  'SXS', 
		  'NSN'
		],
		{
			S: 'enigmaticlegacy:thicc_scroll',
			X: 'minecraft:ender_pearl',
			N: '#forge:nuggets/gold'
		}
	  )
	
	event.shapeless("irons_spellbooks:iron_spell_book",["ars_nouveau:source_gem","irons_spellbooks:copper_spell_book","enigmaticlegacy:iron_ring"]).id("irons_spellbooks:iron_spell_book")

	event.shapeless("irons_spellbooks:gold_spell_book",["irons_spellbooks:arcane_ingot","irons_spellbooks:iron_spell_book","aether:golden_ring"]).id("irons_spellbooks:gold_spell_book")

	event.shapeless("irons_spellbooks:diamond_spell_book",["irons_spellbooks:energized_core","irons_spellbooks:gold_spell_book","irons_spellbooks:mana_ring"]).id("irons_spellbooks:diamond_spell_book")

	event.smithing("farmersdelight:golden_knife",'kubejs:gold_upgrade_smithing_template','kubejs:silver_knife','kubejs:gold_upgrade_parts').id("farmersdelight:golden_knife")

	event.remove({output:'immersiveengineering:glider'})
	event.shaped(
		Item.of('immersiveengineering:glider'), 
		[
		  ' L ',
		  'LXL', 
		  'LCL'
		],
		{
			L: 'immersiveengineering:hemp_fabric',
			X: 'leather_chestplate',
			C: 'ars_nouveau:air_essence'
		}
	  )
	event.shapeless('immersiveengineering:glider',['immersiveengineering:glider','ars_nouveau:air_essence'])

	event.remove({id:"ars_nouveau:warp_scroll"})
	event.custom({
		"type": "lychee:lightning_channeling",
		 "post": [
		   {
			 "type": "drop_item",
			 "item": 'kubejs:warp_scroll', 
		   },
		   {
			   "type": "execute",
			   "command": "playsound irons_spellbooks:lightning_lance_cast neutral @p",
			   "hide": "true"
		   }
		 ],
		 "item_in": [
		   {
			 "item": "waystones:return_scroll"
		   },
		   {
			"item": "ender_pearl"
		  },
		   {
			 "item": "ars_nouveau:water_essence"
		   }
		 ]
   })
	
	
	/// ============================================= Tier 3 Tools ===========================================================
	
	event.shaped("rehooked:red_hook",
		[
			"GGG",
			"GXG",
			"GGG"
		],
		{
			G: "aether:enchanted_gravitite",
			X: ["rehooked:iron_hook","rehooked:diamond_hook","rehooked:blaze_hook"]
		}
	).id("rehooked:red_hook")

	event.shapeless("rehooked:ender_hook",[["rehooked:iron_hook","rehooked:diamond_hook","rehooked:blaze_hook"],"thermal:enderium_ingot"]).id("rehooked:ender_hook")
	event.remove({id:"ars_nouveau:stable_warp_scroll"})
	event.custom(
		{
			"type": "ars_nouveau:enchanting_apparatus",
			"keepNbtOfReagent": true,
			"output": {
			  "item": "ars_nouveau:stable_warp_scroll"
			},
			"pedestalItems": [
			  {
				"item": "minecraft:blaze_powder"
			  },
			  {
				"item": "minecraft:blaze_powder"
			  },
			  {
				"item": "kubejs:ender_essence"
			  },
			  {
				"item": "kubejs:ender_essence"
			  },
			  {
				"tag": "forge:ender_pearls"
			  },
			  {
				"tag": "forge:ender_pearls"
			  }
			],
			"reagent": [
			  {
				"item": "kubejs:warp_scroll"
			  }
			],
			"sourceCost": 0
		  }
	)

	//=======================================================================Tier 4

	event.shaped("thermal:wrench",[" P ","PXP"," P "],{P:"#forge:plates/steel",X:"supplementaries:wrench"}).id("thermal:tools/wrench")

	event.shapeless(Item.of('minecraft:flint_and_steel', '{Damage:0,Unbreakable:1b}'),["kubejs:primitive_firestarter","4x #forge:plates/steel"])

	event.smithing("kubejs:steel_shears",'kubejs:steel_upgrade_smithing_template',"shears",'kubejs:steel_upgrade_parts')

	event.smithing("kubejs:steel_knife",'kubejs:steel_upgrade_smithing_template',"farmersdelight:iron_knife",'kubejs:steel_upgrade_parts')
	
	
	event.recipes.create.mechanical_crafting("thermal:flux_drill",
		[
			"DI   ",
			"ICIS ",
			" IXIS",
			" IPIS",
			" IGI "
		],
		{
			D: "immersiveengineering:drillhead_steel",
			I: "#forge:plates/invar",
			C: "thermal:rf_coil",
			S: "immersiveengineering:wirecoil_steel",
			X: "thermal:energy_cell",
			P: "netherite_pickaxe",
			G: "immersiveengineering:wooden_grip"
		}
	).id("thermal:flux_drill")

	event.recipes.create.mechanical_crafting("thermal:flux_saw",
		[
			"DI   ",
			"ICIS ",
			" IXIS",
			" IPIS",
			" IGI "
		],
		{
			D: "immersiveengineering:sawblade",
			I: "#forge:plates/invar",
			C: "thermal:rf_coil",
			S: "immersiveengineering:wirecoil_steel",
			X: "thermal:energy_cell",
			P: "netherite_axe",
			G: "immersiveengineering:wooden_grip"
		}
	).id("thermal:flux_saw")
	
	

	
})
