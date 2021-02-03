import express from "express";
import routes from "./routes";

const app = express();

app.get("/", (request, response) =>
  response.json({ message: "Hello World And GoStack" })
);

app.listen(3333, () => {
  console.log("🚀 server started on port 3333!");
});
