# Liste des comlposants de l'application

## Navbar

notifications // affiche les dernières infos en rapport avec l'user

    - invitations
    - messages
    - rappel
    - notification de parties

Notifications structure

1. Type de notification
2. Auteur / Source
3. Date

## Inscription

formulaire d'incription au site champs :

    - mail 
    - identifiant
    - mot de pase + confirmation
    - condition d'utilisation
    - validation 

## pop up Connexion

formulaire connexion 

    - id / mail
    - Mot de passe
    - se souvenir
    - mot de passe oublié

## Home_Page

Mes parties & Partie dispo //gere l'affichage des composants parties
    - Filtres
        - pop up affichage et selection de filtres
    
    - une partie // affiche titre et image et au passage souris affiche plus de détails
   
    - bouton de création de partie en fin d'affichage

Mes fiches // Gere l'affichage des composants parties
    fiche

    - Filtres
        - pop up affichage et selection de filtres

    - une fiche // affiche titre et image et au passage souris affiche plus de détails
    - bouton de création de partie en fin d'affichage

## mon Profil & profils autres joueur 

Amis / Parties / Fiches  // liste des utilisateur amis

    - Composant ami
        - image profil
        - nom
        - suppression

    - Composant partie
        - recherche 
        - image + rapide description

    -Composant fiche
        - recherche
        - image + rapide description

Profil 
    
    - modification des infos et photo sur mon profil
    - Choix affichage public ou non 

## Agenda

Calendrier 
    
    - affichage des dispo de tout les monde en couleur

Liste joueur et MJ

    - rappel des couleur de chacun

Filtre 

    - par partie //drop down

Affichage prochaine dispo pour la partie 

Liste de mes parties si pas de partie selectionnées

Pop up ajout de dispo

## Creation de fiche & composant

Switch création composant & création fiche

Liste de Bloc

    - bloc
        - auteur 
        - titre 
        - description du bloc 
    - filtres
    -barre de chercherche

personalisation
    - titre
    - description 
    - liste des paramètres
        - parametre de position taille
    - bouton modif composant
    - enregistrement
    - personalisation bloc 
        - parametre de chaque item
        - taille générale
        - ajout d'item

Aperçu Bloc

    - placement items 
    - resize items

pop up save

    - enregitrement 
    - choix public ou non 
    - nom & jeu

## Page création de partie

Rejoindre / Jouer
    
    - Lancer la partie si MJ
    - Rejoindre pour les joueur arrivant sur une partie publique
    - Quitter le groupe 

Créer la partie 
    
    - rends la partie accèsible au joueurs 
    - devient lancer la partie

lancer la partie

    - Passe la partie sur en cours et notifie les joueurs du début de cette dernière

Inviter Joueur

    - permet de choisir un joueur en particulier et lui envoyer en invitation 


liste des joueurs

    - accepter refuser pour le MJ
    - invitations pour le MJ
    - affichage de la fiche perso en miniature
        - permet d'accèder à l'affichage au clic sur la miniature


Composant infos partie
    - cadre
    - illustration 
    - nom partie 
    - jeu
    - nombre de joueurs
    - visibilité

Agenda
    - créneaux du MJ
    - date prochaine session 
    - bonton pour se rendre sur la page agenda

Liste épisodes
    - résumé de episodes
    - éditable par le MJ
    - navigation

## page jeu

Menu gauche
    
    - chagement de fiche
    - Enregistrer l'étatt actuel
    - Quitter la partie // quitter la page 


## POP UP Fiche

Permet d'affficher les données de la fiche à jour en fonction des données de la partie

## Recherche 

Liste de resultat 

Fiches resulats

    - nom 
    - jeu
    - auteur 
    - details

Pop Up recherche avancé Fiche
     
     - par jeu 
     - Auteur
     - tri

Parties resultats

    - nom 
    - place dispo
    - Prochaine partie

Pop Up recherche avancé Partie
     
     - par jeu 
     - par jour de partie
     - fréquence
     - tri

Joueurs resultats

    - nom 
    - membre depuis
    - Partie en cours
    - Bio hover -> description totale

Pop Up recherche avancé Joueur
     
     - par jeu 
     - membre depuis
     - tri