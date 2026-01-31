ClientEvents.lang("en_us", event => {

   
	function tools(material,material2){
		event.renameItem('minecraft:'+material+'_axe', material2+' Axe')
		event.renameItem('minecraft:'+material+'_pickaxe', material2+' Pickaxe')
		event.renameItem('minecraft:'+material+'_hoe', material2+' Hoe')
		event.renameItem('minecraft:'+material+'_sword', material2+' Sword')
		event.renameItem('minecraft:'+material+'_shovel', material2+' Shovel')
	}
	tools('wooden','Flint')

    event.renameBlock("aether:altar","Mending Altar")
	event.renameItem('irons_spellbooks:arcane_essence', 'Mystic Dust')
    event.renameItem('irons_spellbooks:cinder_essence', 'Cinder Dust')
    
    event.renameItem('twilightforest:borer_essence', 'Borer Dust')
    event.renameItem('alexsmobs:poison_bottle', 'Poison Bottle')
    

    event.renameItem('enigmaticlegacy:infinimeal', 'Eternal Fertilizer')
    event.renameItem('enigmaticlegacy:evil_essence', 'Aspect of Evil')

    event.renameItem("immersiveengineering:fluid_pipe", "Iron Fluid Pipe")
    event.renameItem("immersiveengineering:dust_steel","Stainless Steel Dust")
    event.renameItem("immersiveengineering:plate_steel","Stainless Steel Plate")
    event.renameItem("immersiveengineering:nugget_steel","Stainless Steel Nugget")
    event.renameItem("immersiveengineering:storage_steel","Stainless Steel Block")
    event.renameItem("immersiveengineering:slab_storage_steel","Stainless Steel Slab")
    event.renameItem("immersiveengineering:stick_steel","Stainless Steel Rod")
    event.renameItem("create:fluid_pipe", "Copper Fluid Pipe")
    event.renameItem("quark:copper_pipe", "Copper Item Pipe")
    event.renameItem("prettypipes:pipe", "Storm Item Pipe")
	event.renameItem("create:chute","Iron Chute")
    event.renameItem("immersiveengineering:ingot_steel","Stainless Steel Ingot")

    event.renameBlock("wizards_reborn:fluid_pipe","Wisestone Fluid Pipe")
    event.renameBlock("wizards_reborn:fluid_extractor","Wisestone Fluid Extractor")

    event.renameBlock("thermal:fluid_duct","Bronze Fluid Pipe")
    event.renameBlock("thermal:fluid_duct_windowed","Windowed Bronze Fluid Pipe")
    event.renameItem("thermal:coal_coke","Coal Coke")
    event.renameBlock("thermal:coal_coke_block","Block of Coal Coke")


    event.renameItem("naturesaura:gold_powder","Gold Leaf Powder")

    event.renameBlock("immersive_weathering:permafrost","Gray Permafrost")
    event.renameBlock("immersive_weathering:grassy_permafrost","Grassy Gray Permafrost")
    event.renameBlock("immersiveengineering:redstone_acid_fluid_block","Redstone Acid")

    event.renameItem("create:dough","Sweet Dough")
    event.renameItem('solonion:food_book',"Book of Diverse Diet")

    event.renameItem("constructionwand:stone_wand","Primitive Building Wand")
    event.renameItem("constructionwand:iron_wand","Basic Building Wand")
    event.renameItem("constructionwand:diamond_wand","Sturdy Building Wand")
    event.renameItem("constructionwand:infinity_wand","Advanced Building Wand")

    let newCategories = [
        "coral",
        "arrows",
        "table_cloths",
        "coins",
        "bars",
        "scrolls",
        "presents",
        "trapped_presents",
        "stools",
        "awnings",
        "crystal_lamp",
        "sleeping_bags",
        "hammocks",
        "ladders",
        "sign_posts",
        "chests/wooden",
        "fishes",
        "rods",
        "bark",
        "couches",
        "chairs",
        "dining_benches",
        "side_tables",
        "leaf_piles",
        "bookshelves",
        "desks",
        "nightstands",
        "tables",
        "counters",
        "cupboards",
        "drawers",
        "shelves",
        "trims",
        "plates",
        "wires",
        "springs",
        "small_springs",
        "sheetmetals",
        "glyphs",
        "bundles",
        "sharestone",
        "waystones",
        "seats",
        "enchanting_runes",
        "hedges",
        "jam_blocks",
        "jelly_blocks",
        "banisters",
        "all_crystals",
        "storage_upgrades",
        "backpack_upgrades",
        "smithing_templates",
        "hook",
        "tools/knives",
        "pots",
        "harnesses",
        "trophies",
        "cabinets",
        "sophisticated_shulker_boxes",
        "sophisticated_chests",
        "sophisticated_barrels",
        "limited_barrels",
        "backpacks",
        "buntings",
        "quils",
        "frames",
        "glass_frames",
        "casings",
        "wissen_casings",
        "light_casings",
        "fluid_casings",
        "steam_casings",
        "gilded",
        "ancient_tomes",
        "rituals",
        "thread_upgrades",
        "jelly_bread",
        "jams",
        "salt_lamps",
        "salt_lanterns",
        "salt_campfires",
        "salt_torches",
        "copper_blocks",
        "bobbers",
        "hooks",
        "lines",
        "baulks",
        "cross_baulks"
    ]
    newCategories.forEach(name=> {
        
        let displayName = name.replace(/[_/]/g, " ");
        displayName = displayName
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
            
        event.add("stackgroup.emixx."+name,displayName)

    });


    event.renameItem("brewinandchewin:pizza","Veggie Pizza")
    event.renameItem("brewinandchewin:pizza_slice","Veggie Pizza Slice")
    event.add("block.mbd2.infernal_smelter","Infernal Smelter")
    event.add("mbd2.infernal_smelting","Infernal Smelter")
    event.renameBlock("irons_spellbooks:arcane_debris","Eternal Debris")
    event.renameItem("irons_spellbooks:arcane_salvage","Scrap of Eternity")
    event.renameItem("irons_spellbooks:arcane_ingot","Mystic Ingot")
    event.renameItem("enigmaticlegacy:iron_ring","Improved Iron Ring")
    event.renameItem("enigmaticlegacy:golden_ring","Improved Golden Ring")

    event.renameBlock("quark:cocoa_beans_sack","Cocoa Bean Crate")
    event.renameBlock("quark:nether_wart_sack","Nether Wart Crate")
    event.renameBlock("quark:berry_sack","Sweet Berry Crate")
    event.renameBlock("quark:glowberry_sack","Glow Berry Crate")
    event.renameBlock("vintagedelight:gearo_berry_bag","Gearo Berry Crate")
    event.renameBlock("ars_nouveau:sourceberry_sack","Sourceberry Crate")
    

    
    
    

})