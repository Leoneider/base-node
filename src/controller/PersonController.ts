import { Response } from "express";
var models = require("express-cassandra");

usuarios:[];

// const userController:any = {};

// userController.prueba = (req:Request, res:Response)=>{

// }

function insert(req: Request) {
  console.log("Prueba", req.body);
  var john = new models.instance.Person({
    name: "Buena",
    surname: "Papa",
    age: 24,
    mymap: { nombre: "juan", apellidos: "Guerrero" },

    mylist: ["a", "b", "c"],
    myfrozenmap: [
      { nombre: "juan", apellidos: { Guerrero: "hola" } },
      { nombre: "leo", apellidos: { Guerrero: "hola" } },
    ],
    created: Date.now(),
  });
  john.save(function (err: any) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Yuppiie!");
  });
}

function insertPermiso(req: Request) {
  console.log("Prueba", req.body);

  var permiso = new models.instance.UsuarioPermisos(req.body);
  permiso.save(function (err: any) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Yuppiie!");
  });
}

function findPermiso(req: Request, res: Response) {
  console.log("Find Permiso: ", req.body);
  models.instance.UsuarioPermisos.findAsync(
    req.body,
    {
      raw: true,
      select: ["user_code", "agencia", "departamento"],
    },

  ).then( 
    function (data: any) {
   
      console.log(JSON.stringify(data));
      res.send(JSON.stringify(data));

    }).catch(function(err: any) {
            console.log(err);
        });
  ;
}







// function deletePermiso(req:Request, res:Response) {
//   console.log("Eliminar Permiso: ", req.body);
//   models.instance.UsuarioPermisos.find(
//     req.body,
//     { select: [ 'user_code', 'agencia' ,'departamento'] },
//     function (err: any, data: any) {
//       if (err) {
//         console.log(err);
//       }
//       console.log(JSON.stringify(data));
//       res.send(JSON.stringify(data));

//     }
//   );
// }

function find(req: Request) {
  models.instance.Person.findOne(
    { name: "John" },
    function (err: any, data: any) {
      if (err) {
        console.log(err);
      }
      return data;
    }
  );
}

//exports
module.exports = { insert, find, insertPermiso, findPermiso };
