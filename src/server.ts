import { app } from "./app";
import mongoose from "mongoose";
import env from "./environment";

const PORT = env.getPort();
const CONNECTION_URL: string = 'mongodb://localhost:27017/' + env.getDBName();

//configure mongoose
mongoose.connect(CONNECTION_URL).then(() => {
    app.listen(3000, () => {
        console.log(`Server running on port ${PORT}`)
    });
})
.catch(error => console.error(error));
