import { ToHTML } from "./toHTML";
import { Cinema } from "./cinema";

export class AdapterCinema implements ToHTML {
    private cinema: Cinema;

    constructor(cinema: Cinema) {
        this.cinema = cinema;
    }

    // Convertit Cinema en un véritable HTMLElement
    public toHTML(): HTMLElement {
        const section = document.createElement("section");
        section.id = "cinema-section";
        section.innerHTML = `
            <h2>🎬 Cinémathèque</h2>
            <div id="acteurs-section">
                <h3>🎭 Acteurs</h3>
                <div id="acteurs"></div>
            </div>
            <div id="films-section">
                <h3>🎬 Films</h3>
                <div id="films"></div>
            </div>
        `;

        // Sélectionne les conteneurs pour insérer les acteurs et films
        const acteursContainer = section.querySelector("#acteurs")!;
        const filmsContainer = section.querySelector("#films")!;

        // Ajoute les acteurs
        this.cinema.getCasting().forEach(acteur => {
            acteursContainer.appendChild(acteur.toHTML());
        });

        // Ajoute les films
        this.cinema.getFilms().forEach(film => {
            filmsContainer.appendChild(film.toHTML());
        });

        return section;
    }

    public toString(): string {
        return `AdapterCinema: ${this.cinema.toString()}`;
    }
}
