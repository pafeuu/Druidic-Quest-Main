ServerEvents.recipes(event=>{

    const ParticleEnd = {type: "execute", command: "particle irons_spellbooks:unstable_ender ~ ~ ~ 0.5 0.5 0.5 0.1 80 force",hide: true}

    const SoundEffectLightning = {type: "execute",command: "playsound irons_spellbooks:lightning_lance_cast neutral @p",hide: true}

    function ItemFluidCrafting(fluid,amount, output, ingredients, particle, sound, condition) {

        const itemInputs = ingredients.map(i => (i.tag ? { tag: i.tag } : { item: i.item }));

        
        const recipe = {
            type: "lychee:item_inside",
            item_in: itemInputs,
            block_in: fluid,
            post: [
                //{ type: "delay", s: 1 },
                { type: "drop_item", item: output, count: amount },
                { type: "place", block:"air"},
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
    function FluidCrafting(inputFluid, outputFluid, ingredients, particle, sound, condition) {

        const itemInputs = ingredients.map(i => (i.tag ? { tag: i.tag } : { item: i.item }));

        
        const recipe = {
            type: "lychee:item_inside",
            item_in: itemInputs,
            block_in: {
			blocks: [inputFluid],
			state: {level: 0}
            },
            post: [
                //{ type: "delay", s: 1 },
                { type: "place", block:outputFluid},
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

    event.remove({id:"immersiveengineering:crafting/wirecoil_redstone"})
    ItemFluidCrafting("immersiveengineering:redstone_acid_fluid_block",4,"immersiveengineering:wirecoil_redstone",[
        {item:"immersiveengineering:wirecoil_structure_rope"},
        {item:"immersiveengineering:wirecoil_structure_rope"},
        {item:"immersiveengineering:wirecoil_structure_rope"},
        {item:"immersiveengineering:wirecoil_structure_rope"},
    ],ParticleEnd,SoundEffectLightning)

    FluidCrafting("water","immersiveengineering:redstone_acid_fluid_block",[
        {tag:"forge:gems/sulfur"},
        {tag:"forge:gems/sulfur"},
        {item:"forbidden_arcanus:arcane_crystal_dust"},
        {tag:"c:storage_blocks/redstone"},
        {tag:"c:storage_blocks/redstone"},
    ],ParticleEnd,SoundEffectLightning)

    event.remove([{id:"immersiveengineering:mixer/redstone_acid"},{id:"immersiveengineering:crafting/redstone_acid"}])
})