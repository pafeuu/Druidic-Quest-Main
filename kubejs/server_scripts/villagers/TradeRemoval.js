MoreJSEvents.wandererTrades(event=>{
	
	event.removeVanillaTrades(2);
	event.removeModdedTrades(1);
	event.removeModdedTrades(2);
	event.removeVanillaTrades(1);
	
});

MoreJSEvents.villagerTrades((event) => {
   
    event.removeVanillaTrades();
	event.removeModdedTrades();

});
