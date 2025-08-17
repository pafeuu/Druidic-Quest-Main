ServerEvents.recipes(event=>{

    const minute = 1200
    function freezer(output,input,time)
    {
        event.custom({
        "type": "rubinated_nether:freezing",
        "category": "freezable_misc",
        "cookingtime": time,
        "experience": 1.0,
        "ingredient": {
            "item": input
        },
        "result": output
    })
    }

    freezer("immersive_weathering:permafrost","stone",minute)
    

})