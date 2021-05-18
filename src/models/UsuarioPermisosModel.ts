module.exports = {
  fields: {
    user_code: {
      type: "text"
    },
    agencia: {
      type: "map",
      typeDef: "<varchar, text>",
    },
    departamento: {
      type: "frozen",
      typeDef: "<map<varchar, text>>",
    },
    mylista: {
      type: "list",
      typeDef: "<varchar>",
    },
    myfrozenmap: {
      type: "frozen",
      typeDef: "<list<map<varchar, text> >>",
    },
  },
  key : [["user_code", "departamento"]],
  indexes: ["user_code", "values(agencia)", "full(departamento)"],
  table_name: "usuario_permisos_agencias",
  options: {
    timestamps: {
        createdAt: 'created_at', // defaults to createdAt
        updatedAt: 'updated_at' // defaults to updatedAt
    },
    versions: {
        key: '__v' // defaults to __v
    }
},
};

