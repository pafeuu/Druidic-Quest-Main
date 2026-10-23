ServerEvents.recipes(event=>{
    event.custom(
		{
			type: "create:mechanical_crafting",
			"pattern": [
				"AAAAAAA",
				"ANNNNNA",
				"ANDXDNA",
				"ANGYGNA",
				"ANDZDNA",
				"ANNNNNA",
				"AAAAAAA"
			],
			"key": {
				"A": {
					item: "kubejs:spawner_part"
				},
				"N": {
					tag: "forge:plates/netherite"
				},
				"D": {
					item: "kubejs:death_essence"
				},
				"G": {
					tag: "forge:gears/depth"
				},
				"X": {
					item: "quark:monster_box"
				},
				"Y": {
					item: "kubejs:steel_machine"
				},
				"Z": {
					item: "naturesaura:animal_spawner"
				}
			},
			"result": {
				item: "minecraft:spawner",
				"count": 1
			},
			"acceptMirrored": true
		}
	)

	 event.recipes.create.mechanical_crafting("kubejs:infusing_altar",
        [
            "DSARE",
            "DSARE",
            "DSARE",
            "BGXGB",
            "LBBBL"
        ],
        {
            D:"kubejs:infused_diamond",
            S:"thermal:sapphire",
            A:"kubejs:infused_amethyst",
            R:"thermal:ruby",
            E:"kubejs:infused_emerald",
            B:"rubinated_nether:altar_stone",
            G:"#forge:gears/lumium",
            L:"kubejs:lightning_essence",
            X:"kubejs:steel_machine"
        }
    )
})