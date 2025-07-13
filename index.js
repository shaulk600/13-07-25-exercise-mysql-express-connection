import express from "express";
import { config } from "dotenv";
config();

import routes from "./routes/routes.js";

const app = express();
app.use(express.json());

app.use(routes)
// routes(app);

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Server running at http://localhost:${port}`); })




