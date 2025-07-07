// Charge les variables d'environnement depuis le fichier .env
require('dotenv').config();

// Importe la bibliothèque nodemailer pour envoyer des e-mails
const nodemailer = require('nodemailer');

// Fonction asynchrone principale pour envoyer un e-mail
async function sendEmail() {
   // Création du transporteur SMTP configuré pour Gmail
  let transporter = nodemailer.createTransport({
    service: 'gmail', // Fournisseur email utilisé
    auth: {
      user: process.env.EMAIL_USER, // Adresse email (depuis .env)
      pass: process.env.EMAIL_PASS  // Mot de passe d'application (depuis .env)
    }
  });

   // Définition du contenu de l'e-mail
  let mailOptions = {
    from: process.env.EMAIL_USER, // Expéditeur
    to: process.env.EMAIL_TO, // Destinataire
    subject: 'Test Nodemailer sécurisé', // Sujet de l'e-mail
    text: 'Bonjour Phina depuis Node.js avec .env et dotenv !' // Corps du message
  };

   // Envoi de l’e-mail et gestion des erreurs
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Email envoyé : ' + info.response); // Succès
  } catch (error) {
    console.error('Erreur lors de l’envoi : ', error); // Échec
  }
}

// Appel de la fonction pour lancer l’envoi
sendEmail();
