import role from "./utils.role";

module.exports.loop = function () {
  const tower: StructureTower = Game.getObjectById("14459a0a984f884f2d7014a2");
  if (tower) {
    const closestDamagedStructure = tower.pos.findClosestByRange(
      FIND_STRUCTURES,
      {
        filter: (structure) => structure.hits < structure.hitsMax,
      },
    );
    if (closestDamagedStructure) {
      tower.repair(closestDamagedStructure);
    }

    const closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    if (closestHostile) {
      tower.attack(closestHostile);
    }
  }

  _.values(Game.creeps).forEach(role.work);
};
