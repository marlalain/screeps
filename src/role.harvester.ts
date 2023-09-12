const harvester = (creep: Creep) => ({
  work: () => {
    const hasStorage = creep.store.getFreeCapacity() > 0;
    if (hasStorage) {
      const sources = creep.room.find(FIND_SOURCES);
      const canHarvest = creep.harvest(sources[0]) != ERR_NOT_IN_RANGE;
      if (canHarvest) return;
      creep.moveTo(sources[0], { visualizePathStyle: { stroke: "#ffaa00" } });
    } else {
      const targets = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) =>
          [STRUCTURE_EXTENSION, STRUCTURE_SPAWN, STRUCTURE_TOWER].some(
            (structureType) => structure.structureType == structureType,
          ) && (structure as any).store.getFreeCapacity(RESOURCE_ENERGY) > 0,
      });

      const hasTargets = targets.length > 0;
      if (!hasTargets) return;
      const cantTransfer =
        creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE;
      if (!cantTransfer) return;
      creep.moveTo(targets[0], { visualizePathStyle: { stroke: "#ffffff" } });
    }
  },
});
