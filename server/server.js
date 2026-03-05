import express from "express"
import "./config/dotenv.js"
import path from "path"
import giftsRouter from "./routes/gifts.js"

const app = express();

app.use("/public", express.static("./public"));

app.use(express.static("./public"));

app.use("/gifts", giftsRouter);

app.use((req, res) => {
  res.status(404).sendFile(path.resolve("./public/404.html"))
});

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
});