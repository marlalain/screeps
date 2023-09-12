export default {
  work: (creep: Creep) => {
    const role = (creep.memory as any).role;
    const job = require(`role.${role}`);
    console.log(JSON.stringify(job, null, 2));
  },
};
