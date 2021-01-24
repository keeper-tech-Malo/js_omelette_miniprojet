let personnage = {
    nom : 'Don',
    lieu : 'Bruxelles',
    argent : 200,
    mainDroite : [],
    mainGauche : [],
    seDeplacer(){

    },
    payerArticle(){

    },
    couper(){

    }, 

}

// * Créer un lieu "maison" (un objet) avec comme propriété "nom: 'maison'" et "personnes = []" => qui sera un tableau de personnes présentes dans la maison :
// */
class Maison {
    constructor(nom,personnes){
        this.nom = nom
        this.personnes = personnes
    }
    
}
let maison = new Lieu ('maison',[])

// **
// * Créer un outil (couteau) pour découper les ingrédients achetés
// * propriétés : nom et action.
// * action a comme valeur l'état "coupé" (qui sera mis aux légumes lorsqu'ils seront coupés avec le méthode de "personne".)
// */

class Outil {
    constructor(nom,action){
        this.nom = nom
        this.action = action 
    }
}


/**
 * Créer des produits (ingrédients) à mettre dans le magasin qui serviront à créer l'omelette (oignon, oeuf, epice, fromage, ...);
 * propriétés : nom, etats ( entier,coupé, moulu), prix
 */
class Produit {
    constructor(nom,etats,prix){
        this.nom = nom
        this.etats = etats
        this.prix = prix
    }
}

class Epicerie {
    constructor(nom,personnes){
        this.nom = nom
        this.personnes = personnes 
    }
}
let epicerie = new lieu ([],)