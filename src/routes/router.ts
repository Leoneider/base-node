import { PersonController } from './../controller/PersonController';
import { Router, Request, Response } from "express";

const router = Router();


const personControllerClass: PersonController = new PersonController();



router.post(`/agregarPermiso`, (req: Request, res: Response) =>{
    const request = req.body;
    personControllerClass.insertPermiso(request).then( ()=> {
        res.json({
            ok: true,
            mensaje: "Agregado correctamente"
        });
    }).catch((err) => {
        res.json({
            ok: true,
            mensaje: "Error al guardar permiso" + err
        });

    });
});

router.delete(`/eliminarPermiso`, (req: Request, res: Response) =>{
    const request = req.body;
    personControllerClass.deletePermiso(request).then( () => {
        res.json({
            ok: true,
            mensaje: "Eliminado correctamente"
        });
    });
  
});


router.post(`/findPermiso`, async (req: Request, res: Response) =>{
    const request = req.body;
    const result = await personControllerClass.findPermiso(request); 
    res.json(result);
});

router.post(`/findPermisosUsuarios`, async (req: Request, res: Response) =>{
    const request = req.body;
    const result = await personControllerClass.findPermisosPorUsuarios(request); 
    res.json(result);
});

;


export { router };