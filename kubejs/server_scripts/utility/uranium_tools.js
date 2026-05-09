BlockEvents.broken((event) => {
  const player = event.player;
  const level = event.level;

  if (!player.mainHandItem.hasTag("forge:tools/uranium")) return;

  if (Math.random() < 0.025) {
    // 5% chance
    const pos = event.block.pos;

    level
      .createExplosion(pos.getX(), pos.getY(), pos.getZ())
      .strength(8)
      .explosionMode("tnt")
      .explode();
  }
});

EntityEvents.hurt((event) => {
  //const player = event.player
  const level = event.level;
  const attacker = event.source.player;

  if (event.getSource().getType() != "player") return;
  if (!attacker.mainHandItem.hasTag("forge:tools/uranium")) return;
  if (Math.random() < 0.05) {
    const pos = event.entity.position();

    level
      .createExplosion(pos.x(), pos.y(), pos.z())
      .strength(4)
      .explosionMode("none")
      .explode();
  }
});
