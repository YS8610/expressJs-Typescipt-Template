import dotenv from "dotenv";
import { clogger } from "./service/logger";
import appfunc from "./app";
import { Constants } from "./Constants";


dotenv.config();
const port = process.env.PORT || Constants.DEFAULT_PORT;

// for supertest testing
const app = appfunc();

app.listen(port, () => {
  clogger.info(`[server]: Server is running at http://localhost:${port}`);
});