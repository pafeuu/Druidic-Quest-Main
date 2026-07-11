ServerEvents.recipes(event=>{
    event.custom({
        "type": "wizards_reborn:jeweler_table",
        "output": {
            "item": "create:polished_rose_quartz",
            "count": 1
        },
        "wissen": 5000,
        "ingredients": [
            {
            "item": "create:rose_quartz"
            },
            {
            "item": "wizards_reborn:arcacite_polishing_mixture"
            }
        ],
        "saveNBT": true
    })
})