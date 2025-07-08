// Importe le module natif 'http' de Node.js pour créer un serveur web
const http = require('http');

// Crée un serveur HTTP
const server = http.createServer((req, res) => {
  // Définit le code de réponse HTTP (200 OK) et le type de contenu (HTML)
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Envoie une réponse HTML au client
  res.end('<h1>Bonjour Node !!!!</h1>\n');
});

// Le serveur écoute les requêtes sur le port 3000
server.listen(3000, () => {
  // Message affiché dans la console quand le serveur est prêt
  console.log('Serveur démarré sur http://localhost:3000');
});
