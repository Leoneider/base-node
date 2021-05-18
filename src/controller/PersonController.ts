
var models = require("express-cassandra");
export class PersonController{

  async insertPermiso(req: any): Promise<any> {  
    const permiso = new models.instance.UsuarioPermisos(req);
    return permiso.saveAsync();
  }

   async findPermiso(req: any): Promise<any> {
    const permiso = models.instance.UsuarioPermisos.findAsync(
      req,
      {
        raw: true,
        select: ["user_code", "agencia", "departamento"],
      },
    );
    return permiso;
  }

 
  async findPermisosPorUsuarios(req: any): Promise<any> {
    const usuarios = req;
    let permisosUsuarios:any = [];

    for (const usuario of usuarios) {
      let permisoUsuario:[] = await this.findPermiso(usuario);
      permisosUsuarios = permisosUsuarios.concat(permisoUsuario);
      console.log('RES:',permisosUsuarios);
    }

   return permisosUsuarios;
  }

  async deletePermiso(req: any): Promise<any> {
    const permiso = new models.instance.UsuarioPermisos(req);
    return permiso.deleteAsync();
  }

  


  
}


