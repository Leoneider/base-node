import { Router, Request, Response } from "express";

const personController = require("../controller/PersonController");

const router = Router();

router.get('/mensajes', (req: Request, res: Response) =>{
    res.json({
        ok: true,
        mensaje: 'Todo esta bien - Panita'
    });
});

router.post('/mensajes', (req: Request, res: Response) =>{
    console.log(req.body);
    const cuerpo = req.body.cuerpo;
    res.json({
        ok: true,
        cuerpo:cuerpo
    });
});

router.post('/mensajes/:id', (req: Request, res: Response) =>{
    console.log(req.body);
    const cuerpo = req.body.cuerpo;
    const id = req.params.id
    res.json({
        ok: true,
        cuerpo:cuerpo,
        id
    });
});

router.post('/prueba', (req: Request, res: Response) =>{
    personController.insert(req);
    res.json({
        ok: true,
    });
});

router.post(`/permiso`, (req: Request, res: Response) =>{
    personController.insertPermiso(req);
    res.json({
        ok: true,
    });
});

router.post(`/findPermiso`, personController.findPermiso);

router.post('/find', (req: Request, res: Response) =>{
    personController.find(req);
    res.json({
        ok: true,
    });
});


export { router };