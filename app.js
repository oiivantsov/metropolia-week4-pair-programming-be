const express = require("express");

const tourRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter");

const app = express();
app.use(express.json());

app.use('/tours', tourRouter);
app.use('/users', userRouter);


const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});