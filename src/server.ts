import express from "express";
import bodyParser from "body-parser";
import dutyRoutes from "./routes/dutyRoutes";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1", dutyRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
