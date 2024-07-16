const mongoose = require("mongoose");
const PORT = 8000;

// MongoDB Connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: true,
  })
  .then(() => {
    console.log("Database connected!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

let db = client.db("employees");

export default db;
