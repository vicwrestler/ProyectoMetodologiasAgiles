import express  from "express";
import productosRoutes from "./routes/productos.routes.js";
import departamentosRoutes from "./routes/departamentos.routes.js";
import prodEnDepto from "./routes/prodEnDepto.route.js";
import cors from "cors";
const app = express();
const port = 3000;

app.get("/", async(req, res) => {
    res.send("Hello World!");
});
app.use(cors());
app.use(express.json());
app.use(productosRoutes);
app.use(departamentosRoutes);
app.use(prodEnDepto);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
