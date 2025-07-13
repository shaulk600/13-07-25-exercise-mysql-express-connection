import express from "express";
import { config } from "dotenv";
config();

// import routes from "./routes/routesMain.js";
import configRoutes from "./routes/configRoutes.js";

const app = express();
app.use(express.json());

// app.use(routes);
// app.use(congigRautes); //אם זה רץ בראשי - אז את זה - אם זה רץ בתוך פונקציה אז את השני 
configRoutes(app);

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Server running at http://localhost:${port}`); })




