import jsonServer from "json-server";
import { Application } from "express";

const server: Application = jsonServer.create();
const router = jsonServer.router("server/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(8080, () => {
  console.log("JSON Server is running");
});
