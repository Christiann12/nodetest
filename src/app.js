const { v4: uuidv4 } = require("uuid");
const { appconfig } = require("./config/appconfig");
const { pool } = require("./config/mysql.js");

const PORT = appconfig.PORT;
const app = appconfig.app;
const config = pool();

//Welcome Message!
app.get("/", (req, res) => {
	res.send("Welcome to the backend!");
});

app.post("/api/customers", (req, res) => {
	console.log(req.body);
	res.send(req.body);
});
app.post("/api/test", (req, res) => {
	var query = `INSERT INTO new (name) VALUES ('test');`;

	try {
		config.getConnection((err, connection) => {
			if (err) {
                console.log("Something went wrong");
                res.send(err);
				// throw new Error("Something went wrong");
			}
            else {
                connection.query(query, (err, rows) => {
                    connection.release();
                    if (!err) {
                        res.send("Success");
                    } else {
                        res.send("Failed");
                    }
                });
            }
		});
	} catch (error) { console.log('qwe'); }
});

//Initialize Application
app.listen(PORT, () => {
	console.log("App listening on port " + PORT);
});
