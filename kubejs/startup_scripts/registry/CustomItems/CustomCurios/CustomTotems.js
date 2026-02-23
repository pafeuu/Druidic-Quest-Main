StartupEvents.registry('item', item => {

    function registerAnimalTotem(animal,tier)
    {
        item.create(`${animal}_totem`).unstackable().tag("forge:tools/totems").tag(`dq:tier${tier}/totems`)
    }

    function registerTotem(id,tier)
    {
        item.create(id).unstackable().tag("forge:tools/totems").tag(`dq:tier${tier}/totems`)
    }

    registerAnimalTotem("roadrunner",1)
    registerAnimalTotem("bunny",1)
    registerAnimalTotem("tiger",1)
    registerAnimalTotem("frog",1)
    registerAnimalTotem("penguin",1)
    registerAnimalTotem("bear",1)
    registerAnimalTotem("crab",1)
    registerAnimalTotem("anaconda",1)
    registerAnimalTotem("leafcutter_ant",1)
    registerAnimalTotem("blaze",2)
    registerAnimalTotem("blizz",2)
    registerAnimalTotem("blitz",2)
    registerAnimalTotem("basalz",2)

    registerTotem('wooden_crucifix',0)
    registerTotem('metal_crucifix',1)
    registerTotem('bejeweled_crucifix',2)

})