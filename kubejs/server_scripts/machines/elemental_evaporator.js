ServerEvents.recipes(event=>{

    function experienceEvaporating(input,amount)
    {
        event.recipes.mbd2.evaporating()
        .inputItems(input)
        .outputFluids("sophisticatedcore:xp_still "+amount)  
    }
    function evaporating(input,element,amount)
    {
        event.recipes.mbd2.evaporating()
        .inputItems(input)
        .outputFluids("kubejs:"+element+"_element_fluid "+amount)  
    }

    function TimedEvaporating(input,element,amount,seconds)
    {
        event.recipes.mbd2.evaporating()
        .inputItems(input)
        .outputFluids("kubejs:"+element+"_element_fluid "+amount)
        .duration(seconds*20)  
    }

    evaporating("bone_meal","earth",10)
    evaporating("#forge:mushrooms","earth",50)

    evaporating("feather","air",50)
    evaporating("quark:bottled_cloud","air",10)

    evaporating("#minecraft:logs","fire",10)
    evaporating("coal","fire",20)
    evaporating("charcoal","fire",20)
    evaporating("thermal:coal_coke","fire",50)
    TimedEvaporating("minecraft:coal_block","fire",180,40)
    TimedEvaporating("thermal:charcoal_block","fire",180,40)
    TimedEvaporating("thermal:coal_coke_block","fire",450,40)

    evaporating("ink_sac","water",10)
    evaporating("#minecraft:fishes","water",25)
    evaporating("seagrass","water",50)

    experienceEvaporating("sob:exp_candy",200)
    experienceEvaporating("create:experience_nugget",60)
    experienceEvaporating("minecraft:experience_bottle",60)
    experienceEvaporating("forbidden_arcanus:xpetrified_orb",1820)

    

})