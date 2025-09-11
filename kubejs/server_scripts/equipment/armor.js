ServerEvents.recipes(event => {

    const ArmorSlot = ["helmet","chestplate","leggings","boots"]

	function SmithingTemplate(template,material,block)
	{
		event.shaped(
			Item.of("2x "+template), 
			[
			  'CZC',
			  'CXC',
			  'CCC'
			],
			{
			  Z: block,
			  C: material,
			  X: template
			}
		  )
		  event.remove([{output:template,type:"crafting_shaped"}])
	}
	
	SmithingTemplate("minecraft:netherite_upgrade_smithing_template","diamond","netherrack")
    SmithingTemplate("kubejs:gold_upgrade_smithing_template","thermal:silver_ingot","basalt")
    SmithingTemplate("kubejs:botanist_upgrade_smithing_template","iron_ingot","minecraft:mossy_stone_bricks")
    SmithingTemplate("kubejs:steel_upgrade_smithing_template","naturesaura:infused_iron","deepslate")
    SmithingTemplate("kubejs:skyseeker_upgrade_smithing_template","netherite_ingot","calcite")
    SmithingTemplate("kubejs:phoenix_upgrade_smithing_template","twilightforest:fiery_ingot","deep_aether:aseterite")
    SmithingTemplate("deeperdarker:warden_upgrade_smithing_template","forbidden_arcanus:deorum_ingot","sculk")
    SmithingTemplate("deep_aether:stormforged_smithing_template","kubejs:phoenix_ingot","deep_aether:nimbus_stone")
    SmithingTemplate("kubejs:engineer_upgrade_smithing_template","leather","andesite")
    SmithingTemplate("kubejs:fiery_upgrade_smithing_template","iron_ingot","granite")
    SmithingTemplate("kubejs:bronze_upgrade_smithing_template","copper_block","stone")
    SmithingTemplate("kubejs:obsidian_upgrade_smithing_template","twilightforest:knightmetal_ingot","twilightforest:mazestone_brick")
    SmithingTemplate("kubejs:knightmetal_upgrade_smithing_template","thermal:lead_ingot","twilightforest:underbrick")
    SmithingTemplate("kubejs:scarecrow_upgrade_smithing_template","kubejs:arcane_leather","hay_block")
    SmithingTemplate("kubejs:steeleaf_upgrade_smithing_template","twilightforest:ironwood_ingot","twilightforest:dark_log")
    SmithingTemplate("kubejs:wandering_magician_upgrade_smithing_template","leather","white_wool")
    SmithingTemplate("kubejs:skyjade_upgrade_smithing_template","thermal:silver_ingot","aether:holystone")
    SmithingTemplate("kubejs:zanite_upgrade_smithing_template","thermal:lead_ingot","deep_aether:raw_clorite")
    SmithingTemplate("kubejs:tyr_upgrade_smithing_template","forbidden_arcanus:dragon_scale","end_stone")
    SmithingTemplate("kubejs:draco_arcanus_upgrade_smithing_template","forbidden_arcanus:obsidian_ingot","create:ochrum")
    SmithingTemplate("kubejs:arcane_gold_upgrade_smithing_template","gold_ingot","create:asurine")
    SmithingTemplate("kubejs:netherite_battlemage_upgrade_smithing_template","netherite_ingot","astrological:purpurite")
    SmithingTemplate("kubejs:arcane_fortress_upgrade_smithing_template","wizards_reborn:arcane_gold_ingot","create:veridium")
    SmithingTemplate("kubejs:depth_upgrade_smithing_template","forbidden_arcanus:obsidian_ingot","create:crimsite")
    SmithingTemplate("kubejs:valkyrum_upgrade_smithing_template","naturesaura:sky_ingot","astrological:triphylite")
    SmithingTemplate("kubejs:etherium_upgrade_smithing_template","deep_aether:squall_plate","astrological:light_jade")
    SmithingTemplate("deep_aether:stratus_smithing_template","aether:enchanted_gravitite","aether:holystone")
	
    function NatureArmorup(input,output,smith,material)
	{
		// Upgrades the armor
		event.smithing("naturesaura:"+output+"_helmet","kubejs:"+smith+"_upgrade_smithing_template",Item.of(input+"_helmet"),"naturesaura:"+material)
		event.smithing("naturesaura:"+output+"_chest" ,"kubejs:"+smith+"_upgrade_smithing_template",Item.of(input+"_chestplate"),"naturesaura:"+material)
		event.smithing("naturesaura:"+output+"_pants" ,"kubejs:"+smith+"_upgrade_smithing_template",Item.of(input+"_leggings"),"naturesaura:"+material)
		event.smithing("naturesaura:"+output+"_shoes" ,"kubejs:"+smith+"_upgrade_smithing_template",Item.of(input+"_boots"),"naturesaura:"+material)
		
		// Removes the old recipes
		event.remove([{output:"naturesaura"+output+"_helmet", output:"naturesaura:"+output+"_chest", output:"naturesaura:"+output+"_pants",output:"naturesaura:"+output+"_shoes"}])
		event.remove({output:"naturesaura:"+output+"_shoes"})
	}

    NatureArmorup("diamond","sky","skyseeker","sky_ingot")
	NatureArmorup("iron","infused_iron","botanist","infused_iron")

	event.smithing('immersiveengineering:armor_steel_helmet',"kubejs:steel_upgrade_smithing_template","naturesaura:infused_iron_helmet","kubejs:steel_upgrade_parts").id("immersiveengineering:crafting/armor_steel_helmet")
	event.smithing('immersiveengineering:armor_steel_chestplate' ,"kubejs:steel_upgrade_smithing_template","naturesaura:infused_iron_chest","kubejs:steel_upgrade_parts").id("immersiveengineering:crafting/armor_steel_chestplate")
	event.smithing('immersiveengineering:armor_steel_leggings' ,"kubejs:steel_upgrade_smithing_template","naturesaura:infused_iron_pants","kubejs:steel_upgrade_parts").id("immersiveengineering:crafting/armor_steel_leggings")
	event.smithing('immersiveengineering:armor_steel_boots' ,"kubejs:steel_upgrade_smithing_template","naturesaura:infused_iron_shoes","kubejs:steel_upgrade_parts").id("immersiveengineering:crafting/armor_steel_boots")

	event.remove({output:[
        "naturesaura:sky_helmet",
        "naturesaura:sky_chest",
        "naturesaura:sky_pants",
        "naturesaura:sky_shoes"]})

	event.remove({output:[
        "naturesaura:infused_iron_helmet",
        "naturesaura:infused_iron_chest",
        "naturesaura:infused_iron_pants",
        "naturesaura:infused_iron_shoes"]})


    function SimpleArmor(material,helmet,chest,leg,boots)
	{
		event.shaped(
			Item.of(helmet), 
			[
			  'FFF',
			  'F F'
			],
			{
			  F: material
			}
		)
		event.shaped(
			Item.of(chest), 
			[
			  'F F',
			  'FFF', 
			  'FFF'
			],
			{
			  F: material
			}
		)
		event.shaped(
			Item.of(leg), 
			[
			  'FFF',
			  'F F', 
			  'F F'
			],
			{
			  F: material
			}
		)

		event.shaped(
			Item.of(boots), 
			[
			  'F F', 
			  'F F'
			],
			{
			  F: material
			}
		  )
	}

    SimpleArmor("thermal:beekeeper_fabric",
		"thermal:beekeeper_helmet",
		"thermal:beekeeper_chestplate",
		"thermal:beekeeper_leggings",
		"thermal:beekeeper_boots")

    SimpleArmor("#forge:plates/copper",
		"kubejs:copper_helmet",
		"kubejs:copper_chestplate",
		"kubejs:copper_leggings",
		"kubejs:copper_boots")
	
    SimpleArmor("#forge:plates/lead",
		"kubejs:lead_helmet",
		"kubejs:lead_chestplate",
		"kubejs:lead_leggings",
		"kubejs:lead_boots")
	
    SimpleArmor("#forge:plates/silver",
		"kubejs:silver_helmet",
		"kubejs:silver_chestplate",
		"kubejs:silver_leggings",
		"kubejs:silver_boots")

    SimpleArmor("#forge:plates/iron",
		"iron_helmet",
		"iron_chestplate",
		"iron_leggings",
		"iron_boots")
	
	SimpleArmor("#forge:plates/diamond",
		"diamond_helmet",
		"diamond_chestplate",
		"diamond_leggings",
		"diamond_boots")

	SimpleArmor("minecraft:chain",
		"chainmail_helmet",
		"chainmail_chestplate",
		"chainmail_leggings",
		"chainmail_boots")

    SimpleArmor('immersiveengineering:hemp_fabric',
		"immersiveengineering:armor_faraday_helmet",
		"immersiveengineering:armor_faraday_chestplate",
		"immersiveengineering:armor_faraday_leggings",
		"immersiveengineering:armor_faraday_boots")

	SimpleArmor("#forge:plates/ironwood",
		"twilightforest:ironwood_helmet",
		"twilightforest:ironwood_chestplate",
		"twilightforest:ironwood_leggings",
		"twilightforest:ironwood_boots")
    event.remove([
        {output:"iron_helmet"},
        {output:"iron_chestplate"},
        {output:"iron_leggings"},
        {output:"iron_boots"},
        {output:"diamond_helmet"},
        {output:"diamond_chestplate"},
        {output:"diamond_leggings"},
        {output:"diamond_boots"},
		{output:"chainmail_helmet"},
        {output:"chainmail_chestplate"},
        {output:"chainmail_leggings"},
        {output:"chainmail_boots"},
        {output:"immersiveengineering:armor_faraday_helmet"},
        {output:"immersiveengineering:armor_faraday_chestplate"},
        {output:"immersiveengineering:armor_faraday_leggings"},
        {output:"immersiveengineering:armor_faraday_boots"}])


	function SimpleArmorUpgrade(material,helmet,chest,leg,boots,helmet2,chest2,leg2,boots2)
	{
		event.shaped(
			Item.of(helmet2), 
			[
			  'FFF',
			  'FXF'
			],
			{
			  F: material,
			  X: helmet
			}
		)
		event.shaped(
			Item.of(chest2), 
			[
			  'FXF',
			  'FFF', 
			  'FFF'
			],
			{
			  F: material,
			  X: chest
			}
		)
		event.shaped(
			Item.of(leg2), 
			[
			  'FFF',
			  'FXF', 
			  'F F'
			],
			{
			  F: material,
			  X: leg
			}
		)

		event.shaped(
			Item.of(boots2), 
			[
			  'F F', 
			  'FXF'
			],
			{
			  F: material,
			  X: boots
			}
		  )
		
	}

    SimpleArmorUpgrade("#forge:gems/zanite","iron_helmet","iron_chestplate","iron_leggings","iron_boots","aether:zanite_helmet","aether:zanite_chestplate","aether:zanite_leggings","aether:zanite_boots")
	
    SimpleArmorUpgrade("#forge:gems/skyjade","iron_helmet","iron_chestplate","iron_leggings","iron_boots","deep_aether:skyjade_helmet","deep_aether:skyjade_chestplate","deep_aether:skyjade_leggings","deep_aether:skyjade_boots")

    event.remove([
        {output:"aether:zanite_helmet"},
        {output:"aether:zanite_chestplate"},
        {output:"aether:zanite_leggings"},
        {output:"aether:zanite_boots"}])

	event.remove([
        {output:"deep_aether:skyjade_helmet"},
        {output:"deep_aether:skyjade_chestplate"},
        {output:"deep_aether:skyjade_leggings"},
        {output:"deep_aether:skyjade_boots"}])

    ArmorSlot.forEach(id=>{
    
        event.smithing("golden_"+id,"kubejs:gold_upgrade_smithing_template",Item.of("kubejs:silver_"+id).ignoreNBT(),"kubejs:gold_upgrade_parts").id("minecraft:golden_"+id)
   
	})

    /// Thermal Diving Suit

    event.shaped("thermal:diving_helmet", 
    [
        " G ",
        "GBG",
        "FBF"
    ],
    {
        G: "#forge:plates/gold",
        B: "quark:gold_bars",
        F: "thermal:diving_fabric"
    }).id("thermal:armor/diving_helmet")

    event.shaped("thermal:diving_chestplate",
    [
        "G G",
        "FGF",
        "FFF"
    ],
    {
        G: "#forge:plates/gold",
        F: "thermal:diving_fabric"
    }).id("thermal:armor/diving_chestplate")

    event.shaped("thermal:diving_leggings",
    [
        "FFF",
        "G G",
        "F F"
    ],
    {
        G: "#forge:plates/gold",
        F: "thermal:diving_fabric"
    }).id("thermal:armor/diving_leggings")

    event.shaped("thermal:diving_boots",
    [
        "G G",
        "F F",
        "G G"
    ],
    {
        G: "#forge:plates/gold",
        F: "thermal:diving_fabric"
    }).id("thermal:armor/diving_boots")

	event.shaped("twilightforest:naga_chestplate",
		[
			"SLS",
			"SSS",
			"SSS"
		],
		{
			S: "twilightforest:naga_scale",
			L: "leather_chestplate"
		}
	).id("twilightforest:equipment/naga_chestplate")

	event.shaped("twilightforest:naga_leggings",
		[
			"SSS",
			"SLS",
			"S S"
		],
		{
			S: "twilightforest:naga_scale",
			L: "leather_leggings"
		}
	).id("twilightforest:equipment/naga_leggings")

	event.replaceInput([{id:"irons_spellbooks:wandering_magician_helmet"},{id:"irons_spellbooks:wandering_magician_chestplate"},{id:"irons_spellbooks:wandering_magician_leggings"},{id:"irons_spellbooks:wandering_magician_boots"}], "irons_spellbooks:arcane_essence","kubejs:arcane_leather")

	event.shaped("irons_spellbooks:wandering_magician_helmet",
		[
			"LAL",
			"L L"
		],
		{
			A: "kubejs:arcane_leather",
			L: "leather"
		}
	)

	event.shaped("irons_spellbooks:wandering_magician_chestplate",
		[
			"L L",
			"LAL",
			"LLL"
		],
		{
			A: "kubejs:arcane_leather",
			L: "leather"
		}
	)

	event.shaped("irons_spellbooks:wandering_magician_leggings",
		[
			"LAL",
			"L L",
			"L L"
		],
		{
			A: "kubejs:arcane_leather",
			L: "leather"
		}
	)

	event.shaped("irons_spellbooks:wandering_magician_boots",
		[
			"A L",
			"L L"
		],
		{
			A: "kubejs:arcane_leather",
			L: "leather"
		}
	)

	SimpleArmorUpgrade("twilightforest:fiery_ingot",
		"iron_helmet",
		"iron_chestplate",
		"iron_leggings",
		"iron_boots",
		"twilightforest:fiery_helmet",
		"twilightforest:fiery_chestplate",
		"twilightforest:fiery_leggings",
		"twilightforest:fiery_boots")

	SimpleArmorUpgrade("#forge:plates/bronze",
		"kubejs:copper_helmet",
		"kubejs:copper_chestplate",
		"kubejs:copper_leggings",
		"kubejs:copper_boots",
		"kubejs:bronze_helmet",
		"kubejs:bronze_chestplate",
		"kubejs:bronze_leggings",
		"kubejs:bronze_boots")

	event.remove([
		{output:"twilightforest:ironwood_helmet"},
		{output:"twilightforest:ironwood_chestplate"},
		{output:"twilightforest:ironwood_leggings"},
		{output:"twilightforest:ironwood_boots"}
	])
		
	event.shaped("umbral_skies:fiery_gloves",
		[
			" F ",
			"FXF",
			" F "
		],
		{
			F: "twilightforest:fiery_ingot",
			X: "aether:iron_gloves"
		}
	)

	event.remove([
		{output:"twilightforest:fiery_helmet"},
		{output:"twilightforest:fiery_chestplate"},
		{output:"twilightforest:fiery_leggings"},
		{output:"twilightforest:fiery_boots"}
	])
	ArmorSlot.forEach(id => {
		event.smithing("aether:phoenix_"+id,"kubejs:phoenix_upgrade_smithing_template","twilightforest:fiery_"+id,"kubejs:phoenix_ingot").id("aether:crafting/armor/phoenix_"+id)
	})

	event.smithing("aether:phoenix_gloves","kubejs:phoenix_upgrade_smithing_template","umbral_skies:fiery_gloves","kubejs:phoenix_ingot").id("aether:crafting/armor/phoenix_gloves")
	event.remove({output:"thermal:hazmat_fabric"})

	event.shaped("elytra",
		[
			"NGN",
			"MNM",
			"A A"
		],
		{
			M: "minecraft:phantom_membrane",
			G: "immersiveengineering:glider",
			N: "#forge:ingots/netherite",
			A: "ars_nouveau:air_essence"
		}
	)
	
	// =================================================== Tier 3 ========================================================

	function ScarecrowUpgrade(ArmorType,MagicSchool)
	{
		ArmorSlot.forEach(slot => {
			event.smithing("irons_spellbooks:"+ArmorType+"_"+slot,"irons_spellbooks:"+MagicSchool+"_rune","irons_spellbooks:pumpkin_"+slot,"kubejs:elemental_cloth")
			event.remove({id:"irons_spellbooks:"+ArmorType+"_"+slot})
		});
	}

	ScarecrowUpgrade("priest","holy")
	ScarecrowUpgrade("shadowwalker","ender")
	ScarecrowUpgrade("archevoker","evocation")
	ScarecrowUpgrade("pyromancer","fire")
	ScarecrowUpgrade("electromancer","lightning")
	ScarecrowUpgrade("cultist","blood")
	ScarecrowUpgrade("cryomancer","ice")
	ScarecrowUpgrade("plagued","nature")
	
	
})