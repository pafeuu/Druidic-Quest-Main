ServerEvents.recipes(event=>{


    const Replacaments = [
        ["kubejs:zanite_ring","aether:zanite_ring"],
        ["kubejs:zanite_pendant","aether:zanite_pendant"],
        ["kubejs:skyjade_ring","deep_aether:skyjade_ring"],
        ["naturesaura_plus:aura_coffee","enigmaticlegacy:recall_potion"],
        ["naturesaura_plus:aura_coffee","kubejs:recall_potion"],
        ["kubejs:glass_sword","twilightforest:glass_sword"],
        ["kubejs:warp_scroll","ars_nouveau:warp_scroll"]
    ]
    
    Replacaments.forEach(([output,input]) => {
        
        const recipeId = input.replace(":","_")
        
        event.shapeless(output,input).id(recipeId+"_depracated")
    
    })
    
})