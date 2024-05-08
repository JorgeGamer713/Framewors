"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const usuario_routes_1 = __importDefault(require("./routes/usuario.routes"));
const contador_routes_1 = __importDefault(require("./routes/contador.routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        // realizar config de puerto
        this.app.set("port", process.env.PORT || 3000);
        //Mostrar las peticiones en la teerminal (morgan)
        this.app.use((0, morgan_1.default)("dev"));
        //Configurar intercambio de resursos de origen(cors)
        this.app.use((0, cors_1.default)());
        //configurar la entrada de datos por medio de las peticiones (json)
        this.app.use(express_1.default.json());
        //deshabilira la opcion de url corruptas
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    routes() {
        this.app.use("/", index_routes_1.default);
        this.app.use("/api/auth", auth_routes_1.default);
        this.app.use("/api/usuario", usuario_routes_1.default);
        this.app.use("/api/contador", contador_routes_1.default);
    }
    start() {
        //agregar un listener con callback para ejecuta servicio
        this.app.listen(this.app.get("port"), () => {
            console.log(`server on port ${this.app.get("port")}`);
        });
    }
}
const server = new Server();
server.start();
