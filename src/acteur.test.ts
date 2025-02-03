import { describe, it, expect, beforeEach } from 'vitest';
import { Acteur } from './acteur';
import { Personne } from './personne'; // Assurez-vous d'importer la classe parente
import { Film } from './film';

describe('Tests de la classe Acteur', () => {
    beforeEach(() => {
        // Réinitialisation du compteur pour TOUTES les classes qui l'utilisent
        (Personne as any).counter = 0;
    });

    it('devrait créer un acteur avec un ID unique', () => {
        const acteur1 = new Acteur("Tom", "Hooper", "United Kingdom", new Date(1972, 2, 3));
        const acteur2 = new Acteur("Leonardo", "DiCaprio", "USA", new Date(1974, 10, 11));

        expect(acteur1.id).toBe(1);
        expect(acteur2.id).toBe(2);
    });

    it('devrait permettre de modifier le pays et la date de naissance', () => {
        const acteur = new Acteur("Tom", "Hooper", "United Kingdom", new Date(1972, 2, 3));

        acteur.country = "France";
        acteur.birthDate = new Date(1980, 5, 20);

        expect(acteur.country).toBe("France");
        expect(acteur.birthDate.toISOString()).toBe(new Date(1980, 5, 20).toISOString());
    });

    it('devrait permettre d\'ajouter un film', () => {
        const acteur = new Acteur("Tom", "Hooper", "United Kingdom", new Date(1972, 2, 3));

        // Fournir les arguments nécessaires au constructeur
        const film1 = new Film("Inception", 2010, 1000000);
        const film2 = new Film("The Revenant", 2015, 800000);

        expect(acteur.addFilm(film1)).toBe(true);
        expect(acteur.addFilm(film1)).toBe(false); // Ne doit pas ajouter deux fois le même film
        expect(acteur.addFilm(film2)).toBe(true);
        expect(acteur.getFilms().length).toBe(2);
    });

    it('devrait retourner une chaîne correctement formatée avec toString()', () => {
        const acteur = new Acteur("Tom", "Hooper", "United Kingdom", new Date(1972, 2, 3));

        expect(acteur.toString()).toBe("1: Tom Hooper 03/03/1972 United Kingdom"); // ID fixé à 1
    });
});
