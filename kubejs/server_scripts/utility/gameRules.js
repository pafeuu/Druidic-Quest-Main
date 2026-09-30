
ServerEvents.loaded(event => {
    const server = event.server
    server.gameRules.set("doInsomnia",false)
    server.gameRules.set("tfEnforcedProgression", false)
    server.gameRules.set("mobExplosionDropDecay", false)
    
})