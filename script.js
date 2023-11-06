class Personnage {
    constructor(nom) {
      this.nom = nom;
      this.vie = 0;
      this.attaque = 0;
      this.defense = 0;
      this.existe = false;
  
      if (nom) {
        this.existe = true;
        console.log(`Nouveau personnage ${this.nom} créé !`);
      } else {
        console.error("Erreur : Le nom du personnage doit être renseigné.");
      }
    }
  
    info() {
      console.log(`Nom: ${this.nom}, Vie: ${this.vie}, Attaque: ${this.attaque}, Defense: ${this.defense}`);
    }
  }
  

  const perso1 = new Personnage("Joueur 1"); 
  

  console.log("Est-ce que perso1 existe ? " + perso1.existe); 
  

  perso1.vie = 50;
  perso1.attaque = 50;
  perso1.defense = 50;
  perso1.info(); 