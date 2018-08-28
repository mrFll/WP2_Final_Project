const log = console.log;
const koa  = require('koa');
const Cors = require('@koa/cors');
const router = require('koa-router')();
const koaBody = require('koa-body');
const mysql = require('promise-mysql');

// DB fields
const conf = {
    host: 'localhost',
    user: 'root',
    password: 'pa55',
    database: 'kaashaane'
};

const app = new koa();
app.use(koaBody());
app.use(Cors({
    "Access-Control-Allow-Origin": "*"
}));
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    await next();
});

router.post('/signin',
     (ctx) => {
        const body = JSON.parse(ctx.request.body);
        log('<-- POST /signin');
        log(body);
        // => POST body object


        // ------------------------- DB ------------------------
        mysql.createConnection(conf)
        .then(function(conn){
            var result = conn.query('select * from person where email= ? AND password= ?',
                [body.email,body.password]);
            conn.end();
            return result;
        }).then(function(rows){
            // Logs out a list of hobbits
            log(rows);
            if(rows.length !== 0){
                log("Login successfully");

                ctx.response.body = "hi"
                ctx.response.ok = true;
                ctx.response.status = 200;
                ctx.is('application/json');

            }else{

                log("can't login");
                ctx.response.body = JSON.stringify({
                    state: false
                });
                ctx.response.status = 200;
                ctx.is('application/json');
            }
        });
    }
);

router.post('/signup',
    (ctx) => {

        // check
        switch (ctx.accepts('json')) {
            case 'json': break;
            default: ctx.throw(406, 'json only');
        }

        const body = JSON.parse(ctx.request.body);

        // add new person to database
        mysql.createConnection(conf)
            .then(function(conn){
                let insertQ = "INSERT INTO person (first_name, last_name, email, phone, password) VALUES (? , ? , ? , ? , ? )";

                let values = [
                    body.firstName ,
                    body.lastName,
                    body.email,
                    body.phone,
                    body.password
                ];

                var result = conn.query(insertQ, values);
                conn.end();
                return result;
            }).then(function(res){
            // Logs out a list of hobbits
            //console.log(res);
            if(res.affectedRows === 1){
                console.log("person " + body.firstName + " " + body.lastName+" inserted to database");
            }else{
                console.error("person " + body.firstName + " " + body.lastName+" not added to database");
            }
        });
    }
);

router.post('/search',
    (ctx) => {
        const body = JSON.parse(ctx.request.body);
        log('body', body);
        // => POST body object
        ctx.state = 200;
        ctx.body = JSON.stringify({
            name: "hello"
        }, null, 2);

    }
);


app.use(router.routes());
log("back app is listening at 4000");
app.listen(4000);