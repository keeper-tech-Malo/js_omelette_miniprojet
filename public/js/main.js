/** Créer un objet personne. Cette personne doit avoir des propriétés et des méthodes : 
* - nom(string)
* - lieu(string)
* - argent(number)
* - mainDroite(tableau)
* ( du coup main gauche(tableau))
* - seDeplacer(lieu)
* - payerArticle(article)
* - couper(ingredient, outil)
*/
let personnage = {
    nom : 'Don',
    lieu : "",
    argent : 200,
    mainDroite : [],
    mainGauche : [],
    seDeplacer(lieu){
        personnage.lieu = lieu.nom;
        maison.personnes = [];
        épicerie.personnes = [];
        lieu.personnes.push(personnage.nom);
        console.log(`${personnage.nom} est actuellement à la ${personnage.lieu}`);
         if(maison.personnes[0]){
            console.log(`La maison actuellement occuper par: ${maison.personnes[0]}`);
        }else{
            console.log("La maison est  actuellement vide.");
        }
        if(épicerie.personnes[0]){
            console.log(`L'épicerie contient actuellement: ${épicerie.personnes[0]}`);
        }else{
            console.log("L'épicerie est actuellement vide.");
        }
    },
    payerArticles(){
        personnage.mainDroite[0].contenu.forEach(element => {
            personnage.argent -= element.prix 
            console.log(`Après avoir payé  l'article: ${element.nom} il me reste ${personnage.argent} argent`);
        });
    },
    couper(ingrédient) {
        if (ingrédient.état == "entier") {
            ingrédient.état = "coupé";
            console.log (`l'ingrédient ${ingrédient.nom} a changé d'état  est maintenant ${ingrédient.état}`);
        } else {
            console.log (`l'ingrédient ${ingrédient.nom} est déjà à l'état ${ingrédient.état}`);
        }
    },
}

/**
* Créer un lieu "maison" (un objet) avec comme propriété "nom: 'maison'" et "personnes = []" => qui sera un tableau de personnes présentes dans la maison :
*/
let maison = {
    nom: "maison",
    personnes: [],
    couteau(nom, action){
        this.nom= nom;
        this.action =action;
    }
}
/**
* Créer un outil (couteau) pour découper les ingrédients achetés
* propriétés : nom et action.
* action a comme valeur l'état "coupé" (qui sera mis aux légumes lorsqu'ils seront coupés avec le méthode de "personne".)
*/
let couteau={
    nom : "couteau",
    action : "coupé"
}
/**
 * Créer des produits (ingrédients) à mettre dans le magasin qui serviront à créer l'omelette (oignon, oeuf, epice, fromage, ...);
 * propriétés : nom, etats ( entier,coupé, moulu), prix
 */
// Créer un lieu "epicerie" qui a comme propriétés :
// nom, personnes = [], paniers (un tableau d'objets "panier" avec une propriété "type" égal à panier et le contenu du panier, égal à un tableau vide),
// Les "ingrédients" créés juste au dessus contenus dans un tableau.
/**
 * Créer un poele avec un tableau comme contenu. Et avec une méthode cuir() qui, après 4 secondes, met l'état 'cuit' à this.contenu[0]. On peut faire ça avec la fonction setTimeout(()=> {}, 4000)
 */
// Créer un bol avec un tableau comme contenu
// ajouter une méthode melanger(nomMelange) qui va créer un nouvel objet "newMelange" avec comme nom la variable nomMelange passé en paramètre et avec 'pas cuit' en etat. cette méthode remplacera this.contenu par [l'obj newMelange]
let produits = {
    oignon: {
        nom: 'oignon vert',
        prix: 10,
        état: "entier"
    },
    oeuf: {
        nom: 'oeuf de poule',
        prix: 15,
        état:"coupé"
    },
    épice: {
        nom: 'épice dorient',
        prix: 8,
        état:"moulu"
    },
    fromage: {
        nom: 'fromage',
        prix: 20,
        état:"coupé"
    }
}

let épicerie = {
    nom: "épicerie",
    personnes: [],
    paniers: [
        {
            type: "panier",
            contenu : []
        }
    ],
    ingrédients:[produits.oignon, produits.oeuf,produits.épice, produits.fromage]
}


