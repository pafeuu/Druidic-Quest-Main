// priority: 0
LootJS.modifiers(event=>{

    event.addLootTableModifier("minecraft:chests/desert_pyramid")
    .removeLoot(Ingredient.all)
    .addWeightedLoot([1],[
        Item.of("minecraft:leather_helmet").withChance(10),
        Item.of("minecraft:leather_chestplate").withChance(10),
        Item.of("minecraft:leather_leggings").withChance(10),
        Item.of("minecraft:leather_boots").withChance(10),
        Item.of("aether:leather_gloves").withChance(10)
    ])
    .addWeightedLoot([1],[
        Item.of("minecraft:stone_shovel").withChance(10),
        Item.of("minecraft:wooden_shovel").withChance(10),
        Item.of("kubejs:copper_shovel").withChance(10),
        Item.of("kubejs:silver_shovel").withChance(10),
        LootEntry.of("minecraft:air").withWeight(40)
    ])
    .addWeightedLoot([1,2],[
        Item.of("kubejs:infused_emerald").withChance(10),
        Item.of("kubejs:infused_diamond").withChance(10),
        Item.of("minecraft:emerald").withChance(30),
        Item.of("irons_spellbooks:arcane_essence").withChance(10),
        Item.of("irons_spellbooks:scroll").withChance(10),
        Item.of("irons_spellbooks:common_ink").withChance(30),
    ])
    .addWeightedLoot([2,4],[
        Item.of("minecraft:rotten_flesh",6).withChance(40),
        Item.of("minecraft:bone",2).withChance(40),
        Item.of("minecraft:string",2).withChance(30),
        Item.of("minecraft:gunpowder").withChance(30),
        Item.of("alexsmobs:roadrunner_feather").withChance(25),
        Item.of("minecraft:phantom_membrane").withChance(10),
    ])
    .functions("irons_spellbooks:scroll", (f) => {
        f.customFunction({
            "function": "irons_spellbooks:randomize_spell",
              "quality": {
                "min": 0.0,
                "max": 0.0
              },
              "spell_filter": {
                "school": "irons_spellbooks:lightning"
              }
        });
    })
    .randomChance(0.05)
    .addLoot(Item.of('minecraft:enchanted_book').enchant('minecraft:efficiency', 1))
    
})