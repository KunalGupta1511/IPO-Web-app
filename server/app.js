const express = require("express");
const { sequelize } = require('./models'); // Adjust the path if needed

const app = express();

app.use(express.json());

app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/companyRoutes"));
app.use("/api", require("./routes/ipoRoutes"));
app.use("/api", require("./routes/documentRoutes"));
app.use("/api", require("./routes/dashboardRoutes"));


const PORT = process.env.PORT || 8001
app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully.");
        console.log(`Server running on PORT ${PORT}`);
    } catch (err) {
        console.log(err);
    }
})
