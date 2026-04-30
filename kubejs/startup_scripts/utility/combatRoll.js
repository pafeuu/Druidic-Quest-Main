// startup_scripts

StartupEvents.init((event) => {
	const $ServerSideRollEvents = Java.loadClass("net.combatroll.api.event.ServerSideRollEvents");
	const $PlayerStartRolling = Java.loadClass("net.combatroll.api.event.ServerSideRollEvents$PlayerStartRolling");

	$ServerSideRollEvents.PLAYER_START_ROLLING.register(
		new JavaAdapter($PlayerStartRolling, {
			/**
			 * @param {Internal.ServerPlayer} player
			 * @param {Internal.Vec3d} velocity
			 */
			onPlayerStartedRolling: function (player, velocity) {
				player.sendData("cancel_bc_swing", {});
			},
		}),
	);
});