var models = require('express-cassandra');

function insert (req: Request) {
    console.log('Prueba', req.body);
    var john = new models.instance.Person({
        name: "Buena",
        surname: "Papa",
        age: 24,
        created: Date.now()
    });
    john.save(function(err:any){
        if(err) {
            console.log(err);
            return;
        }
        console.log('Yuppiie!');
    });
}

function find( req: Request ) {
    models.instance.Person.findOne({name: 'John'}, function(err:any, john:any){
        if(err) {
            console.log(err);
            return;
        }

        console.log('Found ' + john.name + ' to be ' + john.age + ' years old!');
    });
}

//exports
module.exports = {insert, find};
