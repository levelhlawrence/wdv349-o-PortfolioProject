import { app, PORT } from "../app/server";

// Server listening
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
