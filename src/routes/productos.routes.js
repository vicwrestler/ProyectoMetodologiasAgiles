import { Router } from "express";
import {pool} from "../db.js";
const router = Router();
router.get("/productos", async(req, res) => {
    const [respuesta]=await pool.query("SELECT * FROM Productos");
    res.json(respuesta);
});

router.post("/productos", async(req, res) => {
    const {nombre, Proveedor} = req.body;
    const [respuesta]=await pool.query("INSERT INTO Productos (nombre, proveedor, precio, claveDepto) VALUES (?, ?, ?, ?)", [nombre, Proveedor, 0, 0]);
    res.json(respuesta.insertId);
    
});

router.delete("/productos/:id", async(req, res) => {
    const {id} = req.params;
    console.log(req.params);
    const [respuesta]=await pool.query("DELETE FROM Productos WHERE Clave = ?", [id]);
    res.json(respuesta);
});

router.put("/productos/", async(req, res) => {
    // const {id} = req.params;
    const {Clave} = req.body;
    const {nombre, Proveedor} = req.body;
    console.log(req.body);
    const [respuesta]=await pool.query("UPDATE Productos SET Nombre = ?, Proveedor = ? WHERE Clave = ?", [nombre, Proveedor, Clave]);
    res.json(respuesta);
});


export default router;