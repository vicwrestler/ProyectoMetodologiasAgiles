import { Router } from "express";
import {pool} from "../db.js";
const router = Router();
router.get("/departamentos", async(req, res) => {
    const [respuesta]=await pool.query("SELECT * FROM Departamentos");
    res.json(respuesta);
});

router.post("/departamento", async(req, res) => {
    const {Nombre} = req.body;
    console.log(req.body);
    const [respuesta]=await pool.query("INSERT INTO Departamentos (nombre) VALUES (?)", [Nombre]);
    res.json(respuesta.insertId);
    
});

router.put("/departamento", async(req, res) => {
    // const {id} = req.params;
    const {Clave} = req.body;
    const {Nombre} = req.body;
    console.log(req.body);
    const [respuesta]=await pool.query("UPDATE Departamentos SET Nombre = ? WHERE Clave = ?", [Nombre, Clave]);
    res.json(respuesta);
});

router.delete("/departamento/:id", async(req, res) => {
    const {id} = req.params;
    // const {Clave} = req.body;
    console.log(req.params);
    const [respuesta]=await pool.query("DELETE FROM Departamentos WHERE Clave = ?", [id]);
    res.json(respuesta);
});

export default router;