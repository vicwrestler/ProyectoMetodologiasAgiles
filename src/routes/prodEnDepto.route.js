import { Router } from "express";
import {pool} from "../db.js";
const router = Router();
router.get("/assign", async(req, res) => {
    const [respuesta]=await pool.query("SELECT * FROM Departamentos");
    res.json(respuesta);
});
router.get("/productosSinAsignar", async(req, res) => {
    const [respuesta]=await pool.query("SELECT * FROM Productos WHERE ClaveDepto = 0");
    res.json(respuesta);
});
router.get("/prodEnDepto/:prodEnDepto", async(req, res) => {
    const prodEnDepto = req.params.prodEnDepto;
    // console.log(prodEnDepto)
    const [respuesta]=await pool.query("SELECT * FROM Productos WHERE ClaveDepto = ?", [prodEnDepto]);
    res.json(respuesta);
    
});

router.post("/prodEnDepto", async(req, res) => {
    const {Clave, Departamento} = req.body;
    const [respuesta]=await pool.query("UPDATE Productos SET ClaveDepto = ? WHERE Clave = ?", [Departamento, Clave]);
    res.json(respuesta);
});

router.delete("/prodEnDepto/:claveProd", async(req, res) => {
    const {claveProd} = req.params;
    // console.log(claveProd);
    const [respuesta]=await pool.query("UPDATE Productos SET ClaveDepto = 0 WHERE Clave = ?", [claveProd]);
    res.json(respuesta);
});
export default router;