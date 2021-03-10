import { Router, Request, Response } from "express";

const router = Router();

const personController = require('../src/controller/PersonController');

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


export default router;