ServerEvents.recipes(event => {
    
    event.shaped("ars_nouveau:source_jar",
      [
        "LGL",
        "GXG",
        "LSL"
      ],
      {
        L: "#everycomp:ars_nouveau/archwood_log",
        G: "#forge:plates/gold",
        X: "supplementaries:jar",
        S: "#forge:plates/manasteel"
      }
    ).id("ars_nouveau:source_jar")
    
    event.shaped("druidic_quest_core:big_source_jar",
        [
            "LAL",
            "LXL",
            "LAL"
        ],
        {
            L: "#botania:livingwood_logs",
            A: "#forge:plates/arcane_gold",
            X: "ars_nouveau:source_jar"
        }
    ).modifyResult((grid, result) => {
        let input = grid.find("ars_nouveau:source_jar");
        return result.withNBT(input.nbt)
    })
    
    event.shaped("druidic_quest_core:huge_source_jar",
        [
            "LAL",
            "LXL",
            "LAL"
        ],
        {
            L: "#botania:dreamwood_logs",
            A: "#forge:plates/terrasteel",
            X: "druidic_quest_core:big_source_jar"
        }
    ).modifyResult((grid, result) => {
        let input = grid.find("druidic_quest_core:big_source_jar");
        return result.withNBT(input.nbt)
    })
    
})