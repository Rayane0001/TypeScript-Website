import { describe, it, expect, beforeEach } from 'vitest';
import { Personne } from './personne';

describe('Tests de la classe Personne', () => {
    beforeEach(() => {
        // Réinitialise le compteur avant chaque test pour éviter les erreurs sur l'ID
        (Personne as any).counter = 0;
    });

    it('devrait créer une personne avec un ID unique', () => {
        const p1 = new Personne("John", "Doe");
        const p2 = new Personne("Jane", "Smith");

        expect(p1.id).toBe(1);
        expect(p2.id).toBe(2);
    });

    it('devrait permettre de modifier le prénom et le nom', () => {
        const p = new Personne("Initial", "Name");

        p.firstName = "Nouveau";
        p.lastName = "Nom";

        expect(p.firstName).toBe("Nouveau");
        expect(p.lastName).toBe("Nom");
    });

    it('devrait retourner une chaîne de caractères correcte avec toString()', () => {
        const p = new Personne("Alice", "Wonderland");

        expect(p.toString()).toBe("ID: 1, Alice Wonderland"); // ID corrigé à 1
    });
});
