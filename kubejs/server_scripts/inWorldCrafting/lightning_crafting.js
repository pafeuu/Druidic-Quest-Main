ServerEvents.recipes(event=>{

    const ParticleFire = {type: "execute",command: "particle irons_spellbooks:fire ~ ~ ~ 0 0 0 0.02 15",hide: true}

    const ParticleBubbles = {type: "execute",command: "particle deep_aether:poison_bubbles ~ ~2 ~ 0 0 0 0.1 20",hide: true}

    const ParticleGreenFire = {type: "execute",command: "particle supplementaries:green_flame ~ ~ ~ 0 0 0 0.05 80",hide: true}

    const ParticleEnd = {type: "execute", command: "particle irons_spellbooks:unstable_ender ~ ~ ~ 0.5 0.5 0.5 0.1 80 force",hide: true}

    const SoundEffectLightning = {type: "execute",command: "playsound irons_spellbooks:lightning_lance_cast neutral @p",hide: true}

    const SoundEffectTransmutation = {type: "execute",command: "playsound wizards_reborn:arcanum_dust_transmutation neutral @p",hide: true}

	 function LightningCrafting(amount, output, ingredients, particle, sound, condition) {
        
        const recipe = {
            type: "lychee:lightning_channeling",
            item_in: ingredients,
            post: [
                //{ type: "delay", s: 2 },
                { type: "drop_item", item: output, count: amount },
                sound,
                particle
            ]
        };

        // Only add contextual if a condition was provided
        if (condition) {
            recipe.contextual = Array.isArray(condition) ? contextual : [condition];
        }

        event.custom(recipe);
    }

    LightningCrafting(2,"minecraft:shulker_shell",[
        { item: 'scute' },
        { item: 'scute' },
        { item: 'chorus_flower' },
        { item: 'chorus_flower' },
        { item: 'kubejs:primitive_alchemical_dust' }
    ],ParticleEnd,SoundEffectTransmutation)

    LightningCrafting(1,"ars_nouveau:manipulation_essence",[
        {item:'ars_nouveau:water_essence'},
        {item:'naturesaura:token_anger'},
        {item:'minecraft:redstone_block'}
    ],ParticleGreenFire,SoundEffectTransmutation)

	LightningCrafting(1,"ars_nouveau:abjuration_essence",[
        {item:'ars_nouveau:water_essence'},
        {item:'quark:nether_wart_sack'},
        {item:'naturesaura:token_joy'}
    ],ParticleGreenFire,SoundEffectTransmutation)

    LightningCrafting(1,"ars_nouveau:conjuration_essence",[
        {item:'ars_nouveau:water_essence'},
        {item:'naturesaura:token_fear'},
        {item:'thermal:apatite_block'}
    ],ParticleGreenFire,SoundEffectTransmutation)

    event.custom({
        type: "lychee:lightning_channeling",
        
        post: [
            {type: "execute", command:"fill ~-1 ~-1 ~-1 ~1 ~1 ~1 lava replace magma_block", hide:true},
            {type: "execute", command:"fill ~-1 ~-1 ~-1 ~1 ~1 ~1 kubejs:charged_copper_block replace copper_block", hide:true},
            {type: "execute", command:"fill ~-1 ~-1 ~-1 ~1 ~1 ~1 kubejs:charged_copper_block replace waxed_copper_block", hide:true},
            {type: "delay",s:1},
            {type: "execute", command:"fill ~-1 ~-1 ~-1 ~1 ~1 ~1 minecraft:magma_block replace stone", hide:true}
            
            
        ]
    })

    function crystalizedOre(input,output)
    {
        LightningCrafting(1,`kubejs:crystalized_${output}_ore`,[
            {item:'thermal:sulfur_dust'},
            {item:input}
        ],ParticleGreenFire,SoundEffectTransmutation)
    }

    crystalizedOre("create:crushed_raw_aluminum","aluminum")
    crystalizedOre("create:crushed_raw_uranium","uranium")
    crystalizedOre("create:crushed_raw_gold","gold")
    crystalizedOre("create:crushed_raw_copper","copper")
    crystalizedOre("create:crushed_raw_iron","iron")
    crystalizedOre("create:crushed_raw_lead","lead")
    crystalizedOre("create:crushed_raw_silver","silver")
    crystalizedOre("create:crushed_raw_nickel","nickel")
    crystalizedOre("create:crushed_raw_zinc","zinc")
    crystalizedOre("create:crushed_raw_tin","tin")

    crystalizedOre("immersiveengineering:raw_aluminum","aluminum")
    crystalizedOre("immersiveengineering:raw_uranium","uranium")
    crystalizedOre("minecraft:raw_gold","gold")
    crystalizedOre("minecraft:raw_copper","copper")
    crystalizedOre("minecraft:raw_iron","iron")
    crystalizedOre("thermal:raw_lead","lead")
    crystalizedOre("thermal:raw_silver","silver")
    crystalizedOre("thermal:raw_nickel","nickel")
    crystalizedOre("create:raw_zinc","zinc")
    crystalizedOre("thermal:raw_tin","tin")

    event.custom({
			type: "lychee:lightning_channeling",
			item_in: [
				{tag: "twilightforest:fiery_vial"},
				{tag: "twilightforest:fiery_vial"},
				{tag: "twilightforest:fiery_vial"},
				{tag: "forge:ingots/arcanum_alloy"}
			],
			contextual: [
				{type: "location",predicate:{dimension: "twilightforest:twilight_forest"}},
			],
			post: [
				{
					type: "delay",
					s: 1
				},
				{
					type: "drop_item",
					item: "twilightforest:fiery_ingot",
				},
				SoundEffectTransmutation,
				ParticleBubbles
			]
	})

	LightningCrafting(1,"twilightforest:fiery_ingot",[
		{tag: "twilightforest:fiery_vial"},
		{tag: "twilightforest:fiery_vial"},
		{tag: "twilightforest:fiery_vial"},
		{tag: "forge:ingots/arcanum_alloy"},	
	],SoundEffectTransmutation,
	ParticleBubbles,{type: "location",predicate:{dimension: "twilightforest:twilight_forest"}})

	LightningCrafting(1,"twilightforest:naga_scale",[
		{item: "kubejs:primitive_alchemical_dust"},
		{tag: "forge:plates/silver"},
		{tag: "forge:insect"}	
	],SoundEffectTransmutation,
	ParticleBubbles,{type: "location",predicate:{dimension: "twilightforest:twilight_forest"}})

	

	LightningCrafting(1,"kubejs:phoenix_ingot",[
			{item: "kubejs:improved_alchemical_dust"},
			{tag: "forge:ingots/fiery"},
			{item: "kubejs:life_essence"},
			{item: "kubejs:death_essence"}],
		SoundEffectTransmutation,
		ParticleFire,
		{type: "location",predicate:{dimension: "aether:the_aether"}}
	)

	LightningCrafting(1,"twilightforest:fiery_blood",[
			{item: "kubejs:basic_alchemical_dust"},
			{item: "irons_spellbooks:blood_vial"},
			{item: "kubejs:fire_infused_arcanum"}],
		SoundEffectTransmutation,
		ParticleFire,
		{type: "location",predicate:{dimension: "twilightforest:twilight_forest"}}
	)
    
    event.custom({
        "type": "lychee:lightning_channeling",
        "contextual": [
                {
                "type": "chance",
                "chance": 0.99
                }
            ],
        "post": [
            {
            "type": "drop_item",
            "item": "naturesaura:birth_spirit"
            },
            {
            "type": "drop_item",
            "item": "kubejs:life_essence"
            },
            ParticleGreenFire,
            SoundEffectTransmutation
        ],
        "item_in": [
            {
            "item": "kubejs:life_essence"
            },
            {
            "item": "minecraft:rabbit"
            },
            {
            "item": "minecraft:beef"
            },
            {
            "item": "minecraft:chicken"
            },
            {
            "item": "minecraft:mutton"
            },
            {
            "item": "minecraft:porkchop"
            }
        ]
    })

    
})