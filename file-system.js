// Importe le module natif 'fs' (file system) de Node.js
const fs = require('fs');

// Écrit le texte "Hello Node" dans un fichier nommé 'welcome.txt'
// Si le fichier n'existe pas, il est créé automatiquement
fs.writeFileSync('welcome.txt', 'Hello Node', 'utf8');

// Lit le contenu du fichier 'welcome.txt' avec l'encodage 'utf8'
const contenu = fs.readFileSync('welcome.txt', 'utf8');
// Affiche le contenu du fichier dans la console
console.log('Contenu du fichier :', contenu);
