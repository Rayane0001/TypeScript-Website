import { Acteur } from "./acteur";
import { Film } from "./film";
import { myPersons, myMovies } from "./data"; // Import des données

export class Cinema {
    private _casting: Acteur[];
    private _films: Film[];

    constructor() {
        this._casting = [];
        this._films = [];
    }

    // Ajoute un acteur au casting
    addActeur(acteur: Acteur): boolean {
        if (!this._casting.includes(acteur)) {
            this._casting.push(acteur);
            return true;
        }
        return false;
    }

    // Ajoute un film à la collection
    addFilm(film: Film): boolean {
        if (!this._films.includes(film)) {
            this._films.push(film);
            return true;
        }
        return false;
    }

    // Remplit le casting à partir de myPersons
    setCasting(): number {
        myPersons.forEach((acteur) => {
            this.addActeur(new Acteur(
                acteur.firstName,
                acteur.lastName,
                acteur.country,
                acteur.birthDate // Déjà un objet Date, pas besoin de conversion
            ));
        });
        return this._casting.length;
    }

    // Remplit la liste des films en associant les bons acteurs et réalisateurs
    setFilms(): number {
        myMovies.forEach((movie) => {
            let film = new Film(movie.title, movie.year, movie.audience);

            // Assigner les acteurs au film
            movie.actors.forEach((actorIndex: number) => {
                if (this._casting[actorIndex]) {
                    let acteur = this._casting[actorIndex];
                    film.addActeur(acteur); // Ajouter l'acteur au film
                    acteur.addFilm(film);   // Ajouter le film à la filmographie de l'acteur
                }
            });

            // Ajouter les réalisateurs s'ils existent
            if (movie.director) {
                movie.director.forEach((directorIndex: number) => {
                    if (this._casting[directorIndex]) {
                        film.realisateur = this._casting[directorIndex]; // On attribue un réalisateur au film
                    }
                });
            }

            this.addFilm(film);
        });

        return this._films.length;
    }

    // Affiche le casting et les films dans lesquels ils ont joué (console)
    showCasting(): void {
        console.log("=== 🎭 Liste des Acteurs ===");
        this._casting.forEach((acteur) => {
            console.log(
                `${acteur.toString()} - Films : ${acteur.getFilms().map(f => f.title).join(", ") || "Aucun"}`
            );
        });
    }

    // Affiche la liste des films et leurs acteurs (console)
    showFilms(): void {
        console.log("=== 🎬 Liste des Films ===");
        this._films.forEach((film) => {
            console.log(
                `${film.toString()} - Acteurs : ${film.getActeurs().map(a => a.firstName + " " + a.lastName).join(", ") || "Aucun"}`
            );
        });
    }

    // Retourne la liste des acteurs
    getCasting(): Acteur[] {
        return this._casting;
    }

    // Retourne la liste des films
    getFilms(): Film[] {
        return this._films;
    }

    // Génère le HTML pour les acteurs
    getCastingHTML(): string {
        return this._casting.map(acteur => acteur.toHTML()).join("");
    }

    // Génère le HTML pour les films
    getFilmsHTML(): string {
        return this._films.map(film => film.toHTML()).join("");
    }
}
