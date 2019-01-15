**SOCLE Bootstrap By GSlab**

Bienvenue sur le kit de demarrage boostrap custom. 

Ce kit va vous permettre de démarrer le développement d'un site sur une base saine et opérationnel.

**1 - Récupérer  le kit**

https://github.com/sirgouka/starterkit-bootstrap-gslab

Pour récupérer le starterkit il va vous falloir git bash d'installé sur votre machine et un invit de commande
ou un IDE ayant un terminal de commande intégré.

https://gitforwindows.org/

Positionnez-vous dans le dossier destinataire  et faite la commande :

git clone https://github.com/sirgouka/starterkit-bootstrap-gslab.git

**2 - Explication des dossiers**

 - Arborescence du dossier
 
 Root -|
       |- Dist - css
               - fonts
               - js
       |
       |- node_modules
       |
       |- src - scss
       gulpfile.js
       index.html
       LISEZ-MOI.md
       package.json
       package-lock.json
       
Dossier Dist :
Ce dossier sert à déposer les assets utilisé par le site. Il sert aussi de dossier de destination pour le compilage 
de fichier via Gulp
Dossier Node_module :
Ce dossier sert de librairie pour les installations via NPM. + d'info : https://docs.npmjs.com/cli/install
src :
Ce dossier sert de dossier de pré compilage des fichiers. Basiquement, c'est ici que vous travaillerez vos fichiers, scss.. js... ect


**3 - Gulp**
       
L'intérêt principale de ce starterkit est de pouvoir utiliser un environnement clef en main bootstrap ready et Scss ready
Le fichier gulpfile.js en racine est prêt pour compiler vos fichiers scss, les auto prefixer pour tout les navigateurs, et digérer les fichiers natif bootstrap et jquery.

commande gulp :
les commandes à utiliser dans l'invit de commande sont les suivantes :

gulp index : permet de rajouter les liens des fichiers présent dans le dossier DIST dans l'index.html automatiquement.
gulp : commande defaut, permet de lancer la compilation des fichiers scss en un seul fichier css dans le dossier DIST.
Il lance également un watcher. Chaque modification effectué sur un fichier scss dans le dossier src sera détecté par le watch et 
automatiquement compilé. Pour mettre fin au watcher : ctrl + c + confirm.
gulp js : permet de transférer des fichiers js de SRC à DIST.