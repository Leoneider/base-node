module.exports = {
  fields: {
    user_code: {
      type: "int"
    },
    agencia: {
      type: "map",
      typeDef: "<varchar, text>",
    },
    departamento: {
      type: "frozen",
      typeDef: "<map<varchar, text>>",
    },
    mylist: {
      type: "list",
      typeDef: "<varchar>",
    },
    myfrozenmap: {
      type: "frozen",
      typeDef: "<list<map<varchar, text> >>",
    },
    created_at: {
      type: "timestamp",
      default: { $db_function: "toTimestamp(now())" },
    },
  },
  key : [["user_code", "departamento"]],
  indexes: ["user_code"],
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

