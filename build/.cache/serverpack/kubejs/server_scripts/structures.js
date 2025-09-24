MoreJSEvents.structureLoad((event) => {
    const BlazeBurners = ["create:blaze_burner","create:empty_blaze_burner","create:lit_blaze_burner"]

    event.forEachPalettes((palette) => {
        palette.forEach((blockInfo) => {
            if (BlazeBurners.includes(`${blockInfo.id}`)) {
                blockInfo.setBlock("supplementaries:fire_pit")
            }
        });
    });

    const MechanicalPress = ["create:mechanical_press"]
    event.forEachPalettes((palette) => {
        palette.forEach((blockInfo) => {
            if (MechanicalPress.includes(`${blockInfo.id}`)) {
                blockInfo.setBlock("piston",{facing: "down"})
            }
        });
    });

    const AdvancedMachinery = ["create:mechanical_arm","create:mechanical_crafter","create:crushing_wheel","create:mechanical_mixer"]
    event.forEachPalettes((palette) => {
        palette.forEach((blockInfo) => {
            if (AdvancedMachinery.includes(`${blockInfo.id}`)) {
                blockInfo.setBlock("kubejs:primitive_machine")
            }
        });
    });

    const MechanicalDrill = ["create:mechanical_drill"]

    event.forEachPalettes((palette) => {
        palette.forEach((blockInfo) => {
            if (MechanicalDrill.includes(`${blockInfo.id}`)) {
                blockInfo.setBlock("supplementaries:bamboo_spikes",{facing:`${blockInfo.properties.facing}`})
            }
        });
    });

    const MechanicalSaw = ["create:mechanical_saw"]

    event.forEachPalettes((palette) => {
        palette.forEach((blockInfo) => {
            if (MechanicalSaw.includes(`${blockInfo.id}`)) {
                blockInfo.setBlock("sawmill:sawmill")
            }
        });
    });

    const EncasedFan = ["create:encased_fan"]

    event.forEachPalettes((palette) => {
        palette.forEach((blockInfo) => {
            if (EncasedFan.includes(`${blockInfo.id}`)) {
                blockInfo.setBlock("supplementaries:bellows")
            }
        });
    });

    const WindmillBearing = ["create:windmill_bearing","create:mechanical_bearing"]

    event.forEachPalettes((palette) => {
        palette.forEach((blockInfo) => {
            if (WindmillBearing.includes(`${blockInfo.id}`)) {
                blockInfo.setBlock("supplementaries:bellows")
            }
        });
    });

    const Anvils = ["minecraft:anvil","minecraft:chipped_anvil"]

    event.forEachPalettes((palette) => {
        palette.forEach((blockInfo) => {
            if (Anvils.includes(`${blockInfo.id}`)) {
                blockInfo.setBlock("minecraft:damaged_anvil")
            }
        });
    });

    const NetheriteBlock = ["netherite_block"]

    event.forEachPalettes((palette) => {
        palette.forEach((blockInfo) => {
            if (NetheriteBlock.includes(`${blockInfo.id}`)) {
                blockInfo.setBlock("minecraft:ancient_debris")
            }
        });
    });

    const AndesiteAlloyBlock = ["create:andesite_alloy_block"]

    event.forEachPalettes((palette) => {
        palette.forEach((blockInfo) => {
            if (AndesiteAlloyBlock.includes(`${blockInfo.id}`)) {
                blockInfo.setBlock("minecraft:iron_block")
            }
        });
    });
}); 