const express = require('express');
const app = express ();
app.use(express.json());
const identityRouter = require("./routes/identity");

app.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});

app.use("/identity", identityRouter);
