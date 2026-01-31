// client_scripts

NetworkEvents.dataReceived("cancel_bc_swing", (event) => {
	// console.log("--- CANCEL PACKET ---");

	let $Minecraft = Java.loadClass("net.minecraft.client.Minecraft");
	let client = $Minecraft.getInstance();

	client.execute(() => {
		try {
			let player = client.player;
			if (!player) return;

			player.persistentData.lastRollCancelTime = player.level.time;

			if (client.isWeaponSwingInProgress && client.isWeaponSwingInProgress()) {
				if (client.cancelUpswing) {
					client.cancelUpswing();
					// console.log("--- CANCEL SWING ---");
				}

				if (client.options.keyAttack.isDown()) {
					client.options.keyAttack.setDown(false);
				}

				player.resetAttackStrengthTicker();
				player.swinging = false;
				player.swingTime = 0;
				player.attackAnim = 0;
			}
		} catch (e) {
			// Fail if method doesn't exist or BC is missing
			console.log(e);
		}
	});
});