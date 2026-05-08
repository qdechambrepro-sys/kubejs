// =========================
// Listes d'items restreints
// =========================

// Forgeron
const restricted_forgeron_1 = ["kubejs:forbidden_symbol"];

const restricted_forgeron_2 = ["kubejs:forbidden_symbol_ii"];

// Apiculteur
const restricted_apiculteur_1 = ["kubejs:bee_symbol"];

const restricted_apiculteur_2 = ["kubejs:bee_symbol_ii"];

// Agriculteur
const restricted_agriculteur_1 = ["kubejs:mystical_symbol"];

const restricted_agriculteur_2 = ["kubejs:mystical_symbol_ii"];

// Magicien
const restricted_magicien_1 = ["kubejs:ars_symbol"];

const restricted_magicien_2 = [];

// =========================
// Fonction utilitaire
// =========================

function getRestrictionId(stageId, itemId) {
  const itemName = itemId.split(":")[1];
  return `${stageId}/${itemName}`;
}

function restrictItems(stageId, itemList) {
  itemList.forEach((itemId) => {
    const restrictionId = getRestrictionId(stageId.toLowerCase(), itemId);
    AStages.addRestrictionForItem(restrictionId, stageId, itemId);
  });
}

// =========================
// Application des restrictions
// =========================

// Forgeron
restrictItems("Forgeron", restricted_forgeron_1);
restrictItems("ForgeronII",restricted_forgeron_2,
);

// Apiculteur
restrictItems("Apiculteur", restricted_apiculteur_1);
restrictItems("ApiculteurII",restricted_apiculteur_2
);

// Agriculteur
restrictItems("Agriculteur", restricted_agriculteur_1);
restrictItems("AgriculteurII",restricted_agriculteur_2,
);

// Magicien
restrictItems("Magicien", restricted_magicien_1);
restrictItems("MagicienII",restricted_magicien_2,
);
