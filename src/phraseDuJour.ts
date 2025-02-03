export class PhraseDuJour {
    private readonly _phrases: string[] = [
        "Chaque jour est une nouvelle chance de briller.",
        "Les petits pas mènent aux grandes réalisations.",
        "N’oublie pas de sourire, même aux jours gris.",
        "Le bonheur n’est pas une destination, c’est une façon de voyager.",
        "Crois en toi et en tout ce que tu es. Tes capacités sont infinies.",
        "Aujourd’hui est le premier jour du reste de ta vie.",
        "Ce n’est pas l’ascension qui est difficile, c’est de lâcher prise.",
        "Parfois, les détours nous mènent aux plus beaux paysages.",
        "Tout obstacle est une opportunité déguisée.",
        "Ce n'est pas la destination qui compte, mais le chemin.",
        "Un esprit positif attire des choses positives.",
        "Chaque jour, choisis de faire un pas vers tes rêves.",
        "Les défis d'aujourd'hui sont les forces de demain.",
        "La gratitude transforme ce que nous avons en suffisamment.",
        "Prends le temps de célébrer chaque petite victoire.",
        "L'inspiration existe, mais elle doit te trouver en train de travailler.",
        "L’échec n'est qu'un pas de plus vers le succès.",
        "La plus belle aventure est celle qui commence aujourd'hui.",
    ];

    public get phrase(): string {
        return this._phrases[Math.floor(Math.random() * this._phrases.length)];
    }

    public toString(): string {
        return this.phrase;
    }

    public toHTML(): HTMLElement {
        const phraseContainer = document.createElement("div");
        phraseContainer.classList.add("phrase-du-jour");
        phraseContainer.innerHTML = `<p>"${this.phrase}"</p>`;
        return phraseContainer;
    }
}

export const PHRASE_DU_JOUR = new PhraseDuJour();