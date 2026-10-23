ServerEvents.recipes(event=>{

    Ingredient.of(["#dq:eternity_token_applicable"]).subtract("#dq:unbreakables").itemIds.forEach(tool=>{

        let recipeId = tool.replace(":","_")
        event.shapeless(tool, ["kubejs:eternity_token", tool])
        .id(`kubejs:eternity_token_${recipeId}`)
        .modifyResult((grid, result) => {
          let _tool = grid.find(Ingredient.of(tool));
          
          if(_tool.hasEnchantment("minecraft:unbreaking", 3) && _tool.hasEnchantment("minecraft:mending", 1)){
            _tool = _tool.withNBT({ Unbreakable: 1 })
          }
          return _tool;
        })

    })
    
})