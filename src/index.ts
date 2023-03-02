import express, { Request, Response } from "express";
const app = express();
const port = process.env.PORT || 4000;
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Server listening on port " + port });
});
app.listen(port, () => console.log(`Running on port ${port}`));
