import { describe, it, expect, beforeEach } from "vitest";
import { Cinema } from "./cinema";
import { Acteur } from "./acteur";

describe("Tests de la classe Cinema", () => {
    let cinema: Cinema;

    beforeEach(() => {
        cinema = new Cinema(); // On crée un nouveau cinéma avant chaque test
    });

    it("devrait ajouter un acteur", () => {
        const acteur = new Acteur("Tom", "Hanks", "USA", new Date(1956, 6, 9));

        expect(cinema.addActeur(acteur)).toBe(true); // Ajout réussi
        expect(cinema.addActeur(acteur)).toBe(false); // Ne doit pas ajouter 2 fois
    });

    it("devrait charger les acteurs à partir de myPersons", () => {
        expect(cinema.setCasting()).toBeGreaterThan(0); // Il doit y avoir au moins 1 acteur ajouté
    });

    it("devrait retourner la liste des acteurs", () => {
        cinema.setCasting();
        expect(cinema.getCasting().length).toBeGreaterThan(0); // Vérifie que la liste n'est pas vide
    });
});