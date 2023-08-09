const doubleDelegateRouter = require("express").Router();
const prisma = require("./prismaExport");

doubleDelegateRouter.get("/", async (request, response) => {
  const delegates = await prisma.doubleDelegate.findMany({});
  return response.json(delegates);
});

doubleDelegateRouter.post("/", async (request, response) => {
  const delegates = await prisma.doubleDelegate.create({ data: request.body });
  return response.json(delegates);
});

module.exports = doubleDelegateRouter;
