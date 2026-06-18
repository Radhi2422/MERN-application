require("dotenv").config();

const app = require("./src/db/app");

const connectDB =
require("./src/config/db");

connectDB();

const PORT =
process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(
        `Server running on ${PORT}`
    );
});