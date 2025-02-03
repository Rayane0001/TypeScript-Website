import "./style.css";
import { Cinema } from "./cinema";
import { PHRASE_DU_JOUR } from "./phraseDuJour";
import { AdapterCinema } from "./adapterCinema";

// === Initialisation du cinéma ===
console.log("🎬 Initialisation de la cinémathèque...");
const cinema = new Cinema();
cinema.setCasting();
cinema.setFilms();

// Création de l'adaptateur
const adaptedCinema = new AdapterCinema(cinema);

// === Affichage dans la console ===
console.log("📜 Phrase du jour : ", PHRASE_DU_JOUR.toString());
console.log(adaptedCinema.toString());

// === Sélection des conteneurs HTML ===
const phraseContainer = document.querySelector<HTMLDivElement>("#phrase")!;
const cinemaContainer = document.querySelector<HTMLDivElement>("#cinema")!;

// === Nettoyage du contenu avant insertion ===
phraseContainer.innerHTML = "";
cinemaContainer.innerHTML = "";

// Ajout de la phrase du jour
phraseContainer.appendChild(PHRASE_DU_JOUR.toHTML());

// Ajout du contenu de la cinémathèque avec `AdapterCinema`
cinemaContainer.appendChild(adaptedCinema.toHTML());
