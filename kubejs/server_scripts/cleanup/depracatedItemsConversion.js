ServerEvents.recipes(event=>{

    const Replacaments = [
        ["kubejs:zanite_ring","aether:zanite_ring"],
        ["kubejs:zanite_pendant","aether:zanite_pendant"],
        ["kubejs:skyjade_ring","deep_aether:skyjade_ring"],
    ]
    Replacaments.forEach(([output,input]) => {
        
        const recipeId = input.replace(":","_")
        
        event.shapeless(output,input).id(recipeId)
    
    })
    
})