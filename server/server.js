import cors from "cors"
import express from "express"
import "./config/dotenv.js"
import path from "path"
import giftsRouter from "./routes/gifts.js"

const app = express();

app.use(cors()) // add cors middleware

// app.use("/public", express.static("./public"));

// app.use(express.static("./public"));

app.use("/gifts", giftsRouter);

app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

// app.use((req, res) => {
//   res.status(404).sendFile(path.resolve("./public/404.html"))
// });

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
});