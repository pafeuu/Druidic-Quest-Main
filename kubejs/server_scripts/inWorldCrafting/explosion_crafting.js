ServerEvents.recipes(event=>{


    const ParticleFire = {type: "execute",command: "particle irons_spellbooks:fire ~ ~ ~ 0 0 0 0.02 15",hide: true}

    const ParticleGreenFire = {type: "execute",command: "particle supplementaries:green_flame ~ ~ ~ 0 0 0 0.05 80",hide: true}

    const ParticleGold = {type: "execute",command: 'particle irons_spellbooks:wisp ~ ~ ~ 0.3 0.3 0.3 0.1 50',"hide": true}

    const ParticleLightning = {type: "execute",command: 'particle irons_spellbooks:electricity ~ ~ ~ 0 0 0 0.05 30',"hide": true}

    const ParticleBubbles = {type: "execute",command: "particle deep_aether:poison_bubbles ~ ~ ~ 0 0 0 0.1 20",hide: true}

    const ParticleEnd = {type: "execute", command: "particle irons_spellbooks:unstable_ender ~ ~ ~ 0.5 0.5 0.5 0.1 80 force",hide: true}

    const SoundEffectLightning = {type: "execute",command: "playsound irons_spellbooks:lightning_lance_cast neutral @p",hide: true}

    const SoundEffectDimension = {type: "execute",command: "playsound minecraft:block.portal.travel neutral @p",hide: true} 

    const SoundEffectTransmutation = {type: "execute",command: "playsound wizards_reborn:arcanum_dust_transmutation neutral @p",hide: true}

    const SoundEffectEarthquake = {type: "execute",command: "playsound irons_spellbooks:spell.earthquake.cast neutral @p",hide: true}

    const ConditionDimensionNether = {type: "location",predicate: {dimension: "minecraft:the_nether"}}

    const ConditionUnderground = {type: "location",predicate: {position:{ y: {min: -64,max: 20}}}}

    const ConditionSky = {type: "location",predicate: {position:{y: {min: 190, max: 320}}}}


    function ExplosionCrafting(amount, output, ingredients, particle, sound, condition) {

        const itemInputs = ingredients.map(i => (i.tag ? { tag: i.tag } : { item: i.item }));

        
        const recipe = {
            type: "lychee:item_exploding",
            item_in: itemInputs,
            post: [
                { type: "delay", s: 2 },
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

    ExplosionCrafting(12,"ars_nouveau:fire_essence",[
        { item: "kubejs:nature_essence" },
        { item: "kubejs:nature_essence" },
        { item: "kubejs:nature_essence" },
        { item: "kubejs:nature_essence" },
        { item: "kubejs:fire_infused_arcanum" },
        { item: "kubejs:fire_infused_arcanum" },
        { item: "kubejs:fire_infused_arcanum" },
        { item: "kubejs:fire_infused_arcanum" },
        { item: "ars_nouveau:source_gem" },
        { item: "ars_nouveau:source_gem" },
        { item: "ars_nouveau:source_gem" },
        { item: "ars_nouveau:source_gem" },
        { item: 'kubejs:sunbird_feather' }
    ],ParticleFire,
    SoundEffectTransmutation)

    ExplosionCrafting(1,"ars_nouveau:fire_essence",[
        { item: "kubejs:nature_essence" },
        { item: "kubejs:fire_infused_arcanum" },
        { item: "ars_nouveau:source_gem" },
        { item: 'blaze_rod' }
    ],ParticleFire,
    SoundEffectTransmutation,
    ConditionDimensionNether)


    ExplosionCrafting(1,"ars_nouveau:earth_essence",[
        {item: "kubejs:nature_essence"},
		{item: "kubejs:earth_infused_arcanum"},
		{item: "ars_nouveau:source_gem"},
		{item: "minecraft:bone"}
    ],ParticleGreenFire,
    SoundEffectEarthquake,
    ConditionUnderground)

    ExplosionCrafting(4,"naturesaura:gold_fiber",[
        {item: "minecraft:string",},
		{item: "minecraft:string",},
		{item: "minecraft:wheat_seeds",},
		{item: "minecraft:wheat_seeds",},
		{tag: "forge:flowers/golden",},
		{tag: "forge:flowers/golden",},
		{tag: "forge:flowers/golden",},
		{tag: "forge:flowers/golden",}
    ],ParticleGold,
    SoundEffectTransmutation)

    ExplosionCrafting(1,"kubejs:dimension_ripper",[
        {item: "quark:diamond_heart"},
		{item: "forbidden_arcanus:ender_pearl_fragment"},
		{item: "diamond"},
		{item: "redstone_block"}
    ],ParticleEnd,
    SoundEffectDimension)

    event.remove({id:"irons_spellbooks:lightning_bottle"})
    ExplosionCrafting(1,"irons_spellbooks:lightning_bottle",[
        {item: "quark:bottled_cloud"},
		{item: "minecraft:lightning_rod"}
    ],ParticleLightning,
    SoundEffectLightning)
    
	event.custom({
		type: "lychee:item_exploding",
		  "contextual": [
			{
			  type: "location",
			  "predicate": {
				"position":{ 
				"y": {
				 "min": 180,
				 "max": 210
				}
				}
			  }
			}
		  ],
		  post: [
			{
			  type: "drop_item",
			  item: "irons_spellbooks:lightning_bottle"
			},
			{
				type: "execute",
				command: "execute playsound minecraft:entity.lightning_bolt.impact neutral @p",
				hide: true
				
			}
		  ],
		  item_in: [
			{
			  item: "quark:bottled_cloud"
			},
			{
			  item: "minecraft:lightning_rod"
			}
		  ]
	})



    
})