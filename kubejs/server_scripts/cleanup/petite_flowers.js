let petiteFlowers = ['botania:tangleberrie_chibi', 'botania:bubbell_chibi', 'botania:bellethorn_chibi', 'botania:clayconia_chibi', 'botania:agricarnation_chibi', 'botania:hopperhock_chibi', 'botania:jiyuulia_chibi', 'botania:rannuncarpus_chibi', 'botania:marimorphosis_chibi', 'botania:floating_bellethorn_chibi', 'botania:floating_agricarnation_chibi', 'botania:floating_hopperhock_chibi', 'botania:floating_tangleberrie_chibi', 'botania:floating_jiyuulia_chibi', 'botania:floating_rannuncarpus_chibi', 'botania:floating_clayconia_chibi', 'botania:floating_marimorphosis_chibi', 'botania:floating_bubbell_chibi', 'botania:floating_solegnolia_chibi', 'botania:solegnolia_chibi']

ServerEvents.recipes(event=>{

    petiteFlowers.forEach(id => {

        let normalFlower = id.replace("_chibi","")
        let recipeId = id.replace(":",":mana_infusion/")
        event.shapeless(id,normalFlower).id(recipeId)
        event.shapeless(normalFlower,id)
        
    });
})