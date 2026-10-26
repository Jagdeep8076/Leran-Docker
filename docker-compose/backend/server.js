import express from "express";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("dev"));



app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OKAY" });
});
 

app.get("/api/suicide", (req, res) => {
  res.status(200).json({ message: "User Died Successfully!" });
});


app.get("/api/users", (req, res) => {
  const users = [
    {
      id: 1,
      name: "Preet",
      age: 23,
      born: "2003-01-01",
      died: "2027-01-01",
    },
  ];

  res.status(200).json(users);
});

// Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running successfully on port ${PORT}`);
});