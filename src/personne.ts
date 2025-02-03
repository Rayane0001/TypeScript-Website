export class Personne {
    private static counter: number = 0; // Champ statique pour générer des ID uniques
    private _id: number;
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._id = ++Personne.counter; // Génère un ID unique en incrémentant le compteur
        this._firstName = firstName;
        this._lastName = lastName;
    }

    // Getter pour l'ID (lecture seule)
    get id(): number {
        return this._id;
    }

    // Getter et Setter pour firstName
    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    // Getter et Setter pour lastName
    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    // Méthode toString() pour afficher l'objet sous forme de texte
    toString(): string {
        return `ID: ${this._id}, ${this._firstName} ${this._lastName}`;
    }
}
