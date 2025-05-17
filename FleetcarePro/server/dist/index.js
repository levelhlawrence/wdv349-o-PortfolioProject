"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./app/server");
// Server listening
server_1.app.listen(server_1.PORT, () => {
    console.log(`Server is running on http://localhost:${server_1.PORT}`);
});
