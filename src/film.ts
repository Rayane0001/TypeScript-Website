import { Acteur } from "./acteur";
import { ToHTML } from "./toHTML";

export class Film implements ToHTML {
    private static counter: number = 0;
    private _id: number;
    private _acteurs: Acteur[];
    private _realisateur: Acteur | null;

    constructor(
        public title: string,
        public year: number,
        public audience: number
    ) {
        this._id = ++Film.counter;
        this._acteurs = [];
        this._realisateur = null;
    }

    get id(): number {
        return this._id;
    }

    getActeurs(): Acteur[] {
        return this._acteurs;
    }

    set realisateur(acteur: Acteur) {
        this._realisateur = acteur;
    }

    get realisateur(): Acteur | null {
        return this._realisateur;
    }

    // Ajout d'un acteur au film
    addActeur(acteur: Acteur): boolean {
        if (!this._acteurs.includes(acteur)) {
            this._acteurs.push(acteur);
            return true;
        }
        return false;
    }

    // Formatage en string
    toString(): string {
        return `ID: ${this._id}, ${this.title} (${this.year}) - ${this.audience} spectateurs`;
    }

    // Affichage en HTML (retourne un `HTMLElement`)
    toHTML(): HTMLElement {
        const card = document.createElement("div");
        card.classList.add("film");

        const title = document.createElement("h3");
        title.innerText = `${this.title} (${this.year})`;

        const infoAudience = document.createElement("p");
        infoAudience.innerHTML = `<strong>Spectateurs :</strong> ${this.audience}`;

        const infoDirector = document.createElement("p");
        infoDirector.innerHTML = `<strong>Réalisateur :</strong> ${this._realisateur ? `${this._realisateur.firstName} ${this._realisateur.lastName}` : "Inconnu"}`;

        const actorList = document.createElement("ul");
        this._acteurs.forEach(acteur => {
            const li = document.createElement("li");
            li.innerText = `${acteur.firstName} ${acteur.lastName}`;
            actorList.appendChild(li);
        });

        if (this._acteurs.length === 0) {
            const li = document.createElement("li");
            li.innerText = "Aucun acteur";
            actorList.appendChild(li);
        }

        card.appendChild(title);
        card.appendChild(infoAudience);
        card.appendChild(infoDirector);
        card.appendChild(actorList);

        return card;
    }
}
