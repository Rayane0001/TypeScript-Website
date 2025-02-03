import { describe, it, expect, beforeEach } from "vitest";
import { Film } from "./film";
import { Acteur } from "./acteur";

describe("Tests de la classe Film", () => {
    beforeEach(() => {
        (Film as any).counter = 0; // Réinitialise le compteur avant chaque test
    });

    it("devrait créer un film avec un ID unique", () => {
        const film1 = new Film("Inception", 2010, 2000000);
        const film2 = new Film("Interstellar", 2014, 1800000);

        expect(film1.id).toBe(1);
        expect(film2.id).toBe(2);
    });

    it("devrait permettre de modifier le titre, l'année et le nombre de spectateurs", () => {
        const film = new Film("Old Title", 2000, 100000);

        film.title = "New Title";
        film.year = 2023;
        film.audience = 500000;

        expect(film.title).toBe("New Title");
        expect(film.year).toBe(2023);
        expect(film.audience).toBe(500000);
    });

    it("devrait permettre d'ajouter un réalisateur", () => {
        const film = new Film("Dune", 2021, 2500000);
        const realisateur = new Acteur("Denis", "Villeneuve", "Canada", new Date(1967, 9, 3));

        film.realisateur = realisateur;
        expect(film.realisateur).toBe(realisateur);
    });

    it("devrait permettre d'ajouter des acteurs", () => {
        const film = new Film("Avatar", 2009, 3000000);
        const acteur1 = new Acteur("Sam", "Worthington", "USA", new Date(1976, 7, 2));
        const acteur2 = new Acteur("Zoe", "Saldana", "USA", new Date(1978, 5, 19));

        expect(film.addActeur(acteur1)).toBe(true);
        expect(film.addActeur(acteur1)).toBe(false); // Ne doit pas ajouter deux fois le même acteur
        expect(film.addActeur(acteur2)).toBe(true);
        expect(film.getActeurs().length).toBe(2);
    });

    it("devrait retourner une chaîne correctement formatée avec toString()", () => {
        const film = new Film("The Matrix", 1999, 1500000);

        expect(film.toString()).toBe("ID: 1, The Matrix (1999) - 1500000 spectateurs");
    });
});
