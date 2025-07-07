// Importe la bibliothèque 'generate-password' installée via npm
const generatePassword = require('generate-password');

// Utilise la méthode 'generate()' pour créer un mot de passe aléatoire
const password = generatePassword.generate({
  length: 12, // Longueur du mot de passe (12 caractères)
  numbers: true, // Inclure des chiffres
  symbols: true, // Inclure des symboles 
  uppercase: true, // Inclure des lettres majuscules
  lowercase: true, // Inclure des lettres minuscules
  strict: true // Appliquer toutes les règles strictement (au moins un de chaque)
});

// Affiche le mot de passe généré dans la console
console.log('Mot de passe généré :', password);
