module.exports = {
    fields:{
        name    : "text",
        surname : "text",
        age     : "int",
        apellido  : "text",
        roles  : "text",
        mymap: {
            type: "map",
            typeDef: "<varchar, text>"
        },
        mylist: {
            type: "list",
            typeDef: "<varchar>"
        },
        myfrozenmap: {
            type: "frozen",
            typeDef: "<list<map<varchar, text> >>"
        },
        created : "timestamp"
    },
    key:["name"]
}