import express from 'express';

const app = express();

app.get("/", (request, response) =>
  response.json({ message: 'Hello World Uau' })
);

app.listen(3333, () => {
  console.log("🚀 server started on port 3333!");
});

export default app;
