const $EssenceVesselColorManager = Java.loadClass("com.blakebr0.mysticalagriculture.crafting.EssenceVesselColorManager");

ClientEvents.loggedIn(() => {
  const manager = $EssenceVesselColorManager.INSTANCE;
  if (!manager) {
    return;
  }

  const colors = {
    "mysticalagriculture:air_essence": 0xdad64d,
    "mysticalagriculture:earth_essence": 0x54da4d,
    "mysticalagriculture:water_essence": 0x4d7eda,
    "mysticalagriculture:fire_essence": 0xda4d4d,
    "ars_nouveau:air_essence": 0x7e9c0d,
    "ars_nouveau:earth_essence": 0x0f7936,
    "ars_nouveau:water_essence": 0x2f60d3,
    "ars_nouveau:fire_essence": 0xbf132b,
    "kubejs:ice_essence": 0x5a9cf3,
    "kubejs:incandescent_essence": 0xfb9477,
    "kubejs:dust_essence": 0x9c7a78,
    "kubejs:swamp_essence": 0x925014,
    "kubejs:steam_essence": 0x67718a,
    "kubejs:magma_essence": 0x9f0b0b,
    "kubejs:blood_essence": 0x490705,
    "kubejs:poison_essence": 0x7238a0,
    "kubejs:storm_essence": 0x2a3097,
    "kubejs:light_essence": 0xefd367,
    "kubejs:void_essence": 0x6a31db,
  };

  Object.entries(colors).forEach(([item, color]) => {
    manager.addColor(Item.of(item), color);
  });
});
