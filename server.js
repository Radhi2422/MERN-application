require("dotenv").config();

const app = require("./src/db/app");

const connectDB =
require("./src/config/db");

const logger = require("./src/logs/logger.js");
connectDB();

const PORT =
process.env.PORT || 5001;

app.listen(PORT, () => {
    logger.info(
        `Server running on ${PORT}`
    );
    // console.log(
    //     `Server running on ${PORT}`
    // );
});

/*
const helmet=require("helmet");
const rateLimit=require("express-rate-limit");
const mongoSanitize=require("express-mongo-sanitize");
const xss=require("xss-clean");
const hpp=require("hpp");

app.use(helmet());

app.use(mongoSanitize());

app.use(xss());

app.use(hpp());

app.use(rateLimit({

    windowMs:15*60*1000,

    max:100

}));

*/