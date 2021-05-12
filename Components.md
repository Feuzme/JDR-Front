# Liste des comlposants de l'application

## Navbar

Composant notifications // affiche les dernières infos en rapport avec l'user

    - invitations
    - messages
    - rappel
    - notification de parties

/*

Structure Notifications 

1. Type de notification
2. Auteur / Source
3. Date

*/

## Inscription

Composant formulaire d'incription au site champs :

    - mail 
    - identifiant
    - mot de pase + confirmation
    - condition d'utilisation
    - validation 

## pop up Connexion

Composants formulaire connexion 

    - id / mail
    - Mot de passe
    - se souvenir
    - mot de passe oublié

## Home_Page

Composant Mes parties & Partie dispo //gere l'affichage des composants parties
    - Filtres
        - Composant pop up affichage et selection de filtres
    
    - Composant une partie // affiche titre et image et au passage souris affiche plus de détails
   
    - bouton de création de partie en fin d'affichage

Composant Mes fiches // Gere l'affichage des composants parties

    - Filtres
        - pop up affichage et selection de filtres

    - composant une fiche // affiche titre et image et au passage souris affiche plus de détails
    - bouton de création de partie en fin d'affichage

## mon Profil & profils autres joueur 

Composants Amis / Parties / Fiches  // liste des utilisateur amis

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

Composant Profil 
    
    - modification des infos et photo sur mon profil
    - Choix affichage public ou non 

## Agenda

Composant Calendrier 
    
    - affichage des dispo de tout les monde en couleur


Composant Liste joueur et MJ

    - rappel des couleur de chacun

Composant Filtre 

    - par partie //drop down

Composant Affichage prochaine dispo pour la partie 

Composant Liste de mes parties si pas de partie selectionnées

Composant Pop up ajout de dispo

## Creation de fiche & composant

Switch création composant & création fiche

Composant Liste de Bloc

    - composant bloc
        - auteur 
        - titre 
        - description du bloc 
    - filtres
    -barre de recherche

Composant personalisation
    - titre
    - description 
    - composant liste des paramètres
        - composant parametres de position taille
    - enregistrement
    - personalisation bloc 
        - composant parametre de chaque item
        - taille générale
        - ajout d'item

composant pop up save

    - enregitrement 
    - choix public ou non 
    - nom & jeu

Composant Aperçu Bloc

    - placement items 
    - resize items

Composant aperçu fiche

    - position des blocs  


## Page création de partie

Composant création partie 
    
    - Rejoindre / Jouer
    
        - Lancer la partie si MJ
        - Rejoindre pour les joueur arrivant sur une partie publique
        - Quitter le groupe 

    - Créer la partie 
    
        - rends la partie accèsible au joueurs 
        - devient lancer la partie

    - lancer la partie

        - Passe la partie sur en cours et notifie les joueurs du début de cette dernière

    - Inviter Joueur

        - permet de choisir un joueur en particulier et lui envoyer en invitation 


Composant liste des joueurs

    - accepter refuser pour le MJ
    - invitations pour le MJ
    - Composant joueur
        - permet d'accèder à l'affichage au clic sur la miniature


Composant infos partie
    - cadre
    - illustration 
    - nom partie 
    - jeu
    - nombre de joueurs
    - visibilité

Composant Agenda
    - créneaux du MJ
    - date prochaine session 
    - bonton pour se rendre sur la page agenda

Composant Liste épisodes
    - résumé de episodes
    - éditable par le MJ
    - navigation

## page jeu

Composant Menu gauche
    
    - chagement de fiche
    - Enregistrer l'étatt actuel
    - Quitter la partie // quitter la page 


## POP UP Fiche

Composant permettant d'affficher les données de la fiche à jour en fonction des données de la partie

## Recherche 

Composant Liste de resultat 

Composant resulats

    - nom 
    - jeu
    - auteur 
    - details
    - place dispo (partie)
    - Prochaine partie (partie)
    - membre depuis (joueur)
    - Partie en cours (joueur)
    - Bio hover -> description totale (joueur)

composant Pop Up recherche avancé
     
     - par jeu 
     - Auteur     
     - par date de partie (partie)
     - fréquence (partie)     
     - membre depuis (joueur)
     - tri