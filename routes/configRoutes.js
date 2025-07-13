import express from "express";

import routesMain from "./routesMain.js";

import logger from "../lib/enterServer.js";

export default function configRoutes(app) {
    app.use(logger);

    app.use('/', routesMain);
}



