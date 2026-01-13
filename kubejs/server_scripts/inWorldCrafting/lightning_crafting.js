ServerEvents.recipes(event=>{

    const ParticleFire = {type: "execute",command: "particle irons_spellbooks:fire ~ ~ ~ 0 0 0 0.02 15",hide: true}

    const ParticleBubbles = {type: "execute",command: "particle deep_aether:poison_bubbles ~ ~2 ~ 0 0 0 0.1 20",hide: true}

    const ParticleGreenFire = {type: "execute",command: "particle supplementaries:green_flame ~ ~ ~ 0 0 0 0.05 80",hide: true}

    const ParticleEnd = {type: "execute", command: "particle irons_spellbooks:unstable_ender ~ ~ ~ 0.5 0.5 0.5 0.1 80 force",hide: true}

    const SoundEffectLightning = {type: "execute",command: "playsound irons_spellbooks:lightning_lance_cast neutral @p",hide: true}

    const SoundEffectTransmutation = {type: "execute",command: "playsound wizards_reborn:arcanum_dust_transmutation neutral @p",hide: true}

    function LightningCrafting(amount,output,ingredients,particle,sound)
    {
        const itemInputs = ingredients.map(function(ingredient) {
            var obj = {};
            obj[ingredient.type] = ingredient.name;
            return obj;
        });
        event.custom({    
            type: "lychee:lightning_channeling",
            item_in: itemInputs,
            post: [
                {
                    type: "delay",
                    s: 1
                },
                {
                    type: "drop_item",
                    item: output,
                    count: amount
                },
                sound,
                particle
            ]
        })
    }

    LightningCrafting(2,"minecraft:shulker_shell",[
        { type: 'item', name: 'scute' },
        { type: 'item', name: 'scute' },
        { type: 'item', name: 'chorus_flower' },
        { type: 'item', name: 'chorus_flower' },
        { type: 'item', name: 'kubejs:primitive_alchemical_dust' }
    ],ParticleEnd,SoundEffectTransmutation)

    LightningCrafting(1,"ars_nouveau:manipulation_essence",[
        {type: 'item', name:'ars_nouveau:water_essence'},
        {type: 'item', name:'naturesaura:token_anger'},
        {type: 'tag', name:'forge:storage_blocks/redstone'}
    ],ParticleGreenFire,SoundEffectTransmutation)

    LightningCrafting(1,"ars_nouveau:abjuration_essence",[
        {type: 'item', name:'ars_nouveau:water_essence'},
        {type: 'item', name:'naturesaura:token_joy'},
        {type: 'tag', name:'forge:storage_blocks/nether_wart'}
    ],ParticleGreenFire,SoundEffectTransmutation)

    LightningCrafting(1,"ars_nouveau:conjuration_essence",[
        {type: 'item', name:'ars_nouveau:water_essence'},
        {type: 'item', name:'naturesaura:token_fear'},
        {type: 'tag', name:'forge:storage_blocks/apatite'}
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
            {type: 'item', name:'thermal:sulfur_dust'},
            {type: 'item', name:input}
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

	event.custom({
		type: "lychee:lightning_channeling",
		item_in: [
			{item: "kubejs:primitive_alchemical_dust"},
			{tag: "forge:plates/silver"},
			{tag: "forge:insect"}
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
				item: "twilightforest:naga_scale",
			},
			SoundEffectTransmutation,
			ParticleBubbles
		]
	})

	event.custom({
		type: "lychee:lightning_channeling",
		item_in: [
			{item: "kubejs:improved_alchemical_dust"},
			{tag: "forge:ingots/fiery"},
			{item: "kubejs:life_essence"},
			{item: "kubejs:death_essence"}
		],
		contextual: [
			{type: "location",predicate:{dimension: "aether:the_aether"}},
		],
		post: [
			{
				type: "delay",
				s: 1
			},
			{
				type: "drop_item",
				item: "kubejs:phoenix_ingot",
			},
			SoundEffectTransmutation,
			{
				type: "execute",
				command: "particle irons_spellbooks:fire ~ ~ ~ 0 0 0 0.02 15",
				hide: "true"
			}
		]
	})

	event.custom({
		type: "lychee:lightning_channeling",
		item_in: [
			{item: "kubejs:basic_alchemical_dust"},
			{item: "irons_spellbooks:blood_vial"},
			{item: "kubejs:fire_infused_arcanum"}
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
				item: "twilightforest:fiery_blood",
			},
			SoundEffectTransmutation,ParticleBubbles
		]
	})
    

    
})