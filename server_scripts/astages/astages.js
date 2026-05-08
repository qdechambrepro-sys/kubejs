ItemEvents.rightClicked((event) => {
  const { player, item, server } = event;
  //MAGICIEN
  if (item.id == "kubejs:certificat_magicien") {

  player.tell("Tu tentes de devenir Magicien...");

  if (AStages.playerHasStage("Magicien", player)) {
    player.tell("Tu es déjà Magicien.");
    return;
  }

  AStages.addStageToPlayer("Magicien", player);
  server.runCommandSilent(`give ${player.username} kubejs:ars_symbol`);
  item.count--;

  if (AStages.playerHasStage("Magicien", player)) {
    player.tell("Tu es devenu Magicien !");
  }
  }

  //FORGERON
  if (item.id == "kubejs:certificat_forgeron") {

  player.tell("Tu tentes de devenir Forgeron...");

  if (AStages.playerHasStage("Forgeron", player)) {
    player.tell("Tu es déjà Forgeron.");
    return;
  }
  AStages.addStageToPlayer("Forgeron", player);
  server.runCommandSilent(`give ${player.username} kubejs:forbidden_symbol`);
  item.count--;

  if (AStages.playerHasStage("Forgeron", player)) {
    player.tell("Tu es devenu Forgeron !");
  }}
  //AGRICULTEUR
  if (item.id == "kubejs:certificat_agriculteur") {

  player.tell("Tu tentes de devenir Agriculteur...");

  if (AStages.playerHasStage("Agriculteur", player)) {
    player.tell("Tu es déjà Agriculteur.");
    return;
  }

  AStages.addStageToPlayer("Agriculteur", player);
  server.runCommandSilent(`give ${player.username} kubejs:mystical_symbol`);
  item.count--;

  if (AStages.playerHasStage("Agriculteur", player)) {
    player.tell("Tu es devenu Agriculteur !");
  }}
  //APICULTEUR
  if (item.id == "kubejs:certificat_apiculteur") {

  player.tell("Tu tentes de devenir Apiculteur...");

  if (AStages.playerHasStage("Apiculteur", player)) {
    player.tell("Tu es déjà Apiculteur.");
    return;
  }

  AStages.addStageToPlayer("Apiculteur", player);
  server.runCommandSilent(`give ${player.username} kubejs:bee_symbol`);
  item.count--;

  if (AStages.playerHasStage("Apiculteur", player)) {
    player.tell("Tu es devenu Apiculteur !");
  }}
});
