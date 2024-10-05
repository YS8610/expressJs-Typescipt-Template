import express, { Express, NextFunction, Request, Response } from "express";
import helmet from "helmet";
import { errorHandler } from "./middleware/errorHandler";

// func to create app is created for automated testing using supertest
const appfunc = () => {
  const app: Express = express();
  // use of helmet to secure the server
  app.use(helmet());

  // set public folder for static content
  app.use(express.static("public"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // setup routes here
  app.get("/", async (req: Request, res: Response<{msg:string},{}>, next:NextFunction) => {
    res.status(200).json({msg:"hello World"}); 
  });

  // setup error handler
  app.use(errorHandler);

  return app;
}

export default appfunc;