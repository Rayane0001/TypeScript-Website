import { Personne } from "./personne";
import { Film } from "./film";
import { ToHTML } from "./toHTML";

export class Acteur extends Personne implements ToHTML {
    private _films: Film[];

    constructor(firstName: string, lastName: string, country: string, birthDate: Date) {
        super(firstName, lastName);
        this._films = [];
        this._country = country;
        this._birthDate = birthDate;
    }

    private _country: string;
    private _birthDate: Date;

    // Getters et setters pour country
    get country(): string {
        return this._country;
    }

    set country(value: string) {
        this._country = value;
    }

    // Getters et setters pour birthDate
    get birthDate(): Date {
        return this._birthDate;
    }

    set birthDate(value: Date) {
        this._birthDate = value;
    }

    // Getter pour les films
    getFilms(): Film[] {
        return this._films;
    }

    // Ajout d'un film à la liste
    addFilm(film: Film): boolean {
        if (!this._films.includes(film)) {
            this._films.push(film);
            return true;
        }
        return false;
    }

    // Formatage de la date de naissance
    private dateNaissance(): string {
        return this._birthDate.toLocaleDateString('fr-FR'); // Format JJ/MM/AAAA
    }

    // Affichage des informations en texte
// Affichage des informations en texte
    toString(): string {
        return `${this.id}: ${this.firstName} ${this.lastName} ${this.dateNaissance()} ${this._country}`;
    }

    // Affichage en HTML (retourne un `HTMLElement` propre)
    toHTML(): HTMLElement {
        const card = document.createElement("div");
        card.classList.add("acteur");

        const title = document.createElement("h3");
        title.innerText = `${this.firstName} ${this.lastName}`;

        const infoCountry = document.createElement("p");
        infoCountry.innerHTML = `<strong>Pays :</strong> ${this.country}`;

        const infoBirthDate = document.createElement("p");
        infoBirthDate.innerHTML = `<strong>Date de naissance :</strong> ${this.dateNaissance()}`;

        const filmList = document.createElement("ul");
        this._films.forEach(film => {
            const li = document.createElement("li");
            li.innerText = `${film.title} (${film.year})`;
            filmList.appendChild(li);
        });

        if (this._films.length === 0) {
            const li = document.createElement("li");
            li.innerText = "Aucun film";
            filmList.appendChild(li);
        }

        card.appendChild(title);
        card.appendChild(infoCountry);
        card.appendChild(infoBirthDate);
        card.appendChild(filmList);

        return card;
    }
}
