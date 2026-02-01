import express from 'express';
import cors from 'cors';
import subjectsRouter from "./routes/subjects";

const app = express();
const port = 8000;

app.use(
    cors({
      origin: process.env.FRONTEND_URL, // React app URL
      methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
      credentials: true, // allow cookies
    })
);


app.use(cors());
app.use(express.json());

app.use("/api/subjects", subjectsRouter);

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
