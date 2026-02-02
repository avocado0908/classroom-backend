import express from 'express';
import cors from 'cors';
import subjectsRouter from "./routes/subjects";
import securityMiddleware from "./middleware/security";

const app = express();
const port = 8000;

if (!process.env.FRONTEND_URL) {
    console.warn('FRONTEND_URL is not defined, CORS may not work as expected');
}

app.use(
    cors({
          origin: process.env.FRONTEND_URL || 'http://localhost:3000', // React app URL
      methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
      credentials: true, // allow cookies
    })
);

app.use(express.json());

app.use(securityMiddleware);

app.use("/api/subjects", subjectsRouter);

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
