ServerEvents.recipes(event => {

    function combiner(output, amount, input1, input2, input3) {
        event.custom(
            {
                "type": "deep_aether:combining",
                "experience": 0.1,
                "ingredients": [
                    {
                        "item": input1
                    },
                    {
                        "item": input2
                    },
                    {
                        "item": input3
                    }
                ],
                "output": {
                    "count": amount,
                    "item": output
                },
                "processing_time": 100
            }
        )
    }
    
    combiner("minecraft:sulfur_spike",1,"minecraft:pointed_dripstone","thermal:sulfur_block","thermal:sulfur_block")
    combiner("minecraft:sulfur",64,"minecraft:stone","ars_nouveau:earth_essence","thermal:sulfur_dust")
    combiner("minecraft:cinnabar",64,"minecraft:stone","ars_nouveau:earth_essence","thermal:cinnabar_dust")
    combiner("minecraft:end_stone",24,"minecraft:tuff","ars_nouveau:earth_essence","brewinandchewin:flaxen_cheese_wheel")


})