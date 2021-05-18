module.exports = {
  fields: {
    user_code: {
      type: "int"
    },
    mytuple: {
      type: "frozen",
      typeDef: "<tuple<int, text, float>>"
  }
 
  },
  key : [["user_code"]],
  table_name: "tuplas",
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

