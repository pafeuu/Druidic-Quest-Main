ServerEvents.recipes(event=>{

    const ParticleFire = {type: "execute",command: "particle irons_spellbooks:fire ~ ~ ~ 0 0 0 0.02 15",hide: true}

    const ParticleBubbles = {type: "execute",command: "particle deep_aether:poison_bubbles ~ ~2 ~ 0 0 0 0.1 20",hide: true}

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
})