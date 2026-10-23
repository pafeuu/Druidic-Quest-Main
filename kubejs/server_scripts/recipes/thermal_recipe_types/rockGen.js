ServerEvents.recipes(event=>{

    event.custom({
		"type": "thermal:rock_gen",
		"adjacent": "create:honey",
		"result": {
			"item": "create:limestone"
		}
	})

	event.custom({
		"type": "thermal:rock_gen",
		"adjacent": "create:chocolate",
		"result": {
			"item": "create:scoria"
		}
	})
    
})