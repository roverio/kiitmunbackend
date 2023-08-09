const singleDelegateRouter = require("express").Router();
const prisma = require("./prismaExport");

singleDelegateRouter.get("/", async (request, response) => {
  const delegates = await prisma.singleDelegate.findMany({});
  return response.json(delegates);
});

singleDelegateRouter.post("/", async ( request, response) => {
    const delegates = await prisma.singleDelegate.create({ data: request.body });
    return response.json(delegates); 
});

module.exports = singleDelegateRouter;
