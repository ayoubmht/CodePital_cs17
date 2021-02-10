// Class

// Class Patients
class Patients {
    constructor(nom, maladie, argent, poche, etatSante) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        goTo (lieu1, lieu2);
        takeCare (medicament);
        paye (payer);
    }
    
}

// Instances Patients
let Marcus = new Patients ("Marcus", "mal indenté", 100, "vide", "malade");
let Optimus = new Patients ("Optimus", "unsave", 200, "vide", "malade");
let Sangoku = new Patients ("Sangoku", "404", 80, "vide", "malade");
let DarthVader = new Patients ("DarthVader", "azmatique", 110, "vide", "malade");
let Semicolon = new Patients ("Semicolon", "syntaxError", 60, "vide", "malade");

// Docteur

class Diagnostique {
    constructor (maladie , traitement) {
        this.maladie = maladie;
        this.traitement = traitement;
    }
}

class Traitement {
    constructor (nom , prix) {
        this.nom = nom;
        this.prix = prix;
    }
}

let t1 = new Traitement ("ctrl+maj+f", 60);
let t2 = new Traitement ("saveOnFocusChange", 100);
let t3 = new Traitement ("CheckLinkRelation", 35);
let t4 = new Traitement ("Ventoline", 40);
let t5 = new Traitement ("f12+doc", 20);

// Lieu 

class Lieu {
    constructor(nom, personne) {
        this.nom = nom;
        this.personne = personne;
    }
    
}

let cabinet = new Lieu ("cabinet", ["medecin", ]);
let pharmacie = new Lieu ("pharmacie", ["pharmacien", ]);
let salleAttente = new Lieu ("salle d'attente", [Patients]);
let cimetiere = new Lieu ("cimetière", []);