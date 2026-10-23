ServerEvents.recipes(event=>{

    //Keys

	event.custom({
		type: "lychee:block_interacting",
		"hide_in_viewer": true,
		post: [
		  {type: "drop_item", item:"kubejs:spawner_part"},
		  {type: "place", block: "air"},
		  {type: "execute", command: "playsound design_decor:large_chain_break neutral @p", hide: true},
		  {type: "drop_item", item:"kubejs:infused_diamond", count:2}
		],
		item_in: {
		  item: "kubejs:broken_key"
		},
		block_in: "minecraft:spawner"
	  })
    
    function DimensionalKeysFunctionality(keyID,dimensionID)
    {
        event.custom({
		type: "lychee:block_interacting",
		"hide_in_viewer": true,
		contextual:{
			type: "location",
			predicate:{
				dimension: dimensionID
			}
		},
		post: [
		  {type: "drop_item", item:"kubejs:spawner_part"},
		  {type: "place", block: "air"},
		  {type: "execute", command: "playsound minecraft:block.ender_chest.open neutral @p", hide: true},
		  {type: "delay", s: 0.5},
		  {type: "execute", command: "playsound minecraft:entity.experience_orb.pickup neutral @p"},
		  {type: "execute", command: "particle irons_spellbooks:unstable_ender ~ ~ ~ 0.5 0.5 0.5 0.1 80 force"},
		  {type: "execute", command: `loot spawn ~ ~ ~ loot kubejs:gameplay/${keyID}_key`},
		  {type: "delay", s: 1},
		  {type: "execute", command: "playsound minecraft:block.ender_chest.close neutral @p", hide: true}
		],
		item_in: {
		  item: `kubejs:${keyID}_key`
		},
		block_in: "minecraft:spawner"
	  })
    }
	DimensionalKeysFunctionality("overworld","minecraft:overworld")
    DimensionalKeysFunctionality("nether","minecraft:the_nether")
    DimensionalKeysFunctionality("twilight","twilightforest:twilight_forest")
	DimensionalKeysFunctionality("aether","aether:the_aether")
	DimensionalKeysFunctionality("end","minecraft:the_end")


})