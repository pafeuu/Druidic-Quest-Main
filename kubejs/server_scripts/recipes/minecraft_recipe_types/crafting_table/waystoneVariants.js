ServerEvents.recipes(event=>{

    function WaystoneVariants(type, block) {
		event.shapeless("waystones:" + type + "waystone", ["#waystones:waystones", block])
	}
	WaystoneVariants("deepslate_", "deepslate")
	WaystoneVariants("sandy_", "sandstone")
	WaystoneVariants("", "stone")
	WaystoneVariants("mossy_", "moss_block")
	WaystoneVariants("end_stone_", "end_stone")
	WaystoneVariants("blackstone_", "blackstone")
    
})