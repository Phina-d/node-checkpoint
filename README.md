# Node.js - Checkpoint GOMYCODE 🟢

Ce projet contient une série d'exercices Node.js guidés réalisés dans le cadre du checkpoint GOMYCODE.

---

## 📁 Structure du projet

node-checkpoint/
├── hello-world.js # Affiche "HELLO WORLD"
├── server.js # Serveur HTTP sur port 3000
├── file-system.js # Écrit et lit un fichier texte
├── welcome.txt # Fichier créé par file-system.js
├── password-generator.js # Génère des mots de passe aléatoires
├── email-sender.js # Envoie un e-mail via Nodemailer
├── .env # (non inclus) Contient les identifiants sensibles
├── .gitignore # Ignore node_modules et .env
├── package.json # Dépendances du projet
└── node_modules/ # Modules Node installés 

---

##  Instructions de test

### 1. `hello-world.js`

node hello-world.js
✅ Affiche : HELLO WORLD

2. server.js

node server.js
🖥️ Ouvre http://localhost:3000 dans mon navigateur
✅ Affiche : Bonjour Node !!!!

3. file-system.js

node file-system.js
✅ Crée et lit welcome.txt, affiche : Hello Node

4. password-generator.js

node password-generator.js
✅ Affiche un mot de passe aléatoire sécurisé

5. email-sender.js
Crée un fichier .env à la racine du projet :

env

EMAIL_USER=ton.email@gmail.com
EMAIL_PASS=mot_de_passe_application
EMAIL_TO=destinataire@example.com

node email-sender.js
✅ Envoie un e-mail depuis mon compte Gmail vers le destinataire

🔐 Sécurité
⚠️ Le fichier .env contient des informations sensibles (email, mot de passe) :
Ne jamais le versionner ni le publier.

💬 Auteur
Projet réalisé dans le cadre de la formation GOMYCODE
👩Par Phina DIOUF

