"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controllers/index.controller");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this, this.config();
    }
    config() {
        this.router.post("/", index_controller_1.indexController.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
