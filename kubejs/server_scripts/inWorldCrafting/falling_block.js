ServerEvents.recipes(e=>{
    
    e.custom({
				type: "lychee:block_crushing",
				post: [
				  {
					type: "anvil_damage_chance",
					"chance": 0
				  },
				  {
					type: "drop_item",
					item: "supplementaries:pancake",
					count: 1
				  }
				],
                item_in:[{"item":"kubejs:cookie_dough"}],
				"landing_block": "magma_block"
			  
    }).id("supplementaries:pancake_fd")
})