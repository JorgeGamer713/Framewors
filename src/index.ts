import express, { Application } from 'express';
import morgan, { } from 'morgan';
import cors, { } from 'cors';
import indexRoutes from './routes/index.routes';
import authRoutes from './routes/auth.routes';
import usuarioRoutes from './routes/usuario.routes';
import contadorRoutes from './routes/contador.routes';

class Server {
    public app: Application = express();
    constructor() {
       this.config();
       this.routes();

    }

    private config(): void {
        // realizar config de puerto
        this.app.set("port", process.env.PORT || 3000);

        //Mostrar las peticiones en la teerminal (morgan)
        this.app.use(morgan("dev"));

        //Configurar intercambio de resursos de origen(cors)
        this.app.use(cors());

        //configurar la entrada de datos por medio de las peticiones (json)
        this.app.use(express.json());

        //deshabilira la opcion de url corruptas
        this.app.use(express.urlencoded({ extended: true }));
    }

    private routes(): void { 
        this.app.use("/",indexRoutes);
        this.app.use("/api/auth",authRoutes);
        this.app.use("/api/usuario",usuarioRoutes);
        this.app.use("/api/contador",contadorRoutes);
    }
    public start(): void {
        //agregar un listener con callback para ejecuta servicio
        this.app.listen(this.app.get("port"),() => {
            console.log(`server on port ${this.app.get("port")}`);
        });

    }
}
const server = new Server();
server.start();