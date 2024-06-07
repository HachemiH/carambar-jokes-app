const express = require("express");
const cors = require("cors");
const path = require("path");
const setupSwagger = require("./swagger/swagger");
const jokeRoutes = require("./routes/jokeRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Configurer CORS pour permettre les requêtes depuis n'importe quelle origine
app.use(cors());

// Configurer Swagger
setupSwagger(app);

// Servir le fichier index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Utiliser les routes de blagues
app.use("/api/jokes", jokeRoutes);

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
