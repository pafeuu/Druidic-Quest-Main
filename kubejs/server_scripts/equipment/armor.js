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
	

	event.smithing('immersiveengineering:armor_steel_helmet',"kubejs:steel_upgrade_smithing_template","naturesaura:infused_iron_helmet","kubejs:steel_upgrade_parts").id("immersiveengineering:crafting/armor_steel_helmet")
	event.smithing('immersiveengineering:armor_steel_chestplate' ,"kubejs:steel_upgrade_smithing_template","naturesaura:infused_iron_chest","kubejs:steel_upgrade_parts").id("immersiveengineering:crafting/armor_steel_chestplate")
	event.smithing('immersiveengineering:armor_steel_leggings' ,"kubejs:steel_upgrade_smithing_template","naturesaura:infused_iron_pants","kubejs:steel_upgrade_parts").id("immersiveengineering:crafting/armor_steel_leggings")
	event.smithing('immersiveengineering:armor_steel_boots' ,"kubejs:steel_upgrade_smithing_template","naturesaura:infused_iron_shoes","kubejs:steel_upgrade_parts").id("immersiveengineering:crafting/armor_steel_boots")


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

	SimpleArmor("#forge:cactus",
		"kubejs:cactus_helmet",
		"kubejs:cactus_chestplate",
		"kubejs:cactus_leggings",
		"kubejs:cactus_boots"
	)
	
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


	event.remove([
		{output:"twilightforest:ironwood_helmet"},
		{output:"twilightforest:ironwood_chestplate"},
		{output:"twilightforest:ironwood_leggings"},
		{output:"twilightforest:ironwood_boots"}
	])
		

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