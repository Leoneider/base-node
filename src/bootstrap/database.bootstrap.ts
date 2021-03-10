import { Initialize } from "./initialize.interface";
var models = require("express-cassandra");
import yenv from "yenv";

const env = yenv();

export class DatabaseBootstrap implements Initialize {
  async initialize(): Promise<any> {
    const promiseInitialize = new Promise((resolve, reject) => {
	  
	  let dir = process.cwd();

	  console.log('DIRECTORIO: ',__dirname);
	  console.log('DIRECTORIO -> : ', `${dir}\\src\\models`);
	  let dirModelos = `${dir}\\src\\models`;

      models.setDirectory( dirModelos ).bind(
        {
          clientOptions: {
            contactPoints: ["127.0.0.1"],
            protocolOptions: { port: 9042 },
            keyspace: "openwebinars",
            queryOptions: { consistency: models.consistencies.one },
          },
          ormOptions: {
            defaultReplicationStrategy: {
              class: "SimpleStrategy",
              replication_factor: 1,
            },
            migration: "alter",
			disableTTYConfirmation: true,
			createKeyspace: false
          },
        },
        function (error: any) {
          if (error) {
            reject(error);
          } else {
            console.log("Connection successful to Database");
			// console.log('INSTANCIA DE PERSONA',models.instance.Person);
			
            resolve("Connection Database successful");
          }

        }
      );
    });

    await promiseInitialize;
  }

  disconnect(): void {
    try {
      models.disconnect();
    } catch (error) {
      console.log(error);
    }
  }
}
