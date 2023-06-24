-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : db
-- Généré le : ven. 23 juin 2023 à 18:57
-- Version du serveur : 8.0.33
-- Version de PHP : 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `acquaforte_bdd`
--

-- --------------------------------------------------------

--
-- Structure de la table `agenda`
--

CREATE TABLE `agenda` (
  `id_event` int NOT NULL,
  `titre_event` varchar(25) NOT NULL,
  `date_event` datetime NOT NULL,
  `image_event` varchar(255) NOT NULL,
  `lieu_event` varchar(255) NOT NULL,
  `adr_num_event` int NOT NULL,
  `adr_rue_event` varchar(50) NOT NULL,
  `adr_ville_event` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `agenda`
--

INSERT INTO `agenda` (`id_event`, `titre_event`, `date_event`, `image_event`, `lieu_event`, `adr_num_event`, `adr_rue_event`, `adr_ville_event`) VALUES
(2, 'Otro', '2023-05-26 20:16:00', '../../SRL/agenda/otro.jpg', 'Un Teatro2', 60, 'Rue Faubourg Boutonnet', 'Montpellier');

-- --------------------------------------------------------

--
-- Structure de la table `collaborateurs`
--

CREATE TABLE `collaborateurs` (
  `id_coll` int NOT NULL,
  `nom_coll` varchar(25) NOT NULL,
  `lien_coll` varchar(255) NOT NULL,
  `image_coll` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `collaborateurs`
--

INSERT INTO `collaborateurs` (`id_coll`, `nom_coll`, `lien_coll`, `image_coll`) VALUES
(1, 'Sout1', 'https://fr.wikipedia.org/wiki/Centre_hospitalier_universitaire_de_Montpellier', '../../SRL/soutiens/sout1.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `description_compagnie`
--

CREATE TABLE `description_compagnie` (
  `presentation` json NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `description_compagnie`
--

INSERT INTO `description_compagnie` (`presentation`) VALUES
('{\"description_fr\": \"Association franco-argentine créée en 2017 par Facundo Melillo, comédien et metteur en scène argentin, l\'Association Acquaforte Théâtre bénéficie depuis sa création d\'une convention avec l\'espace culturel du CHU (Centre Hospitalier Universitaire de Montpellier). Cette convention nous a permis de développer nos projets dans un espace fixe de création. La préparation du travail de plateau, les répétitions et les premières représentations auront lieu à cet endroit. Notre échange avec les patients et le personnel hospitalier nous a fourni une expérience riche et nous a guidés dans l\'objectif principal de notre association : l\'engagement dans le territoire par la mise en œuvre d\'interventions artistiques en fonction des besoins sociaux.\\r\\n\\r\\nSur le plan artistique, Acquaforte produit des pièces de théâtre et des propositions musicales qui nous transportent dans la culture latino-américaine. Notre projet artistique est axé sur la création de pièces de masques et de marionnettes, ainsi que sur le traitement de l\'espace par des jeux d\'ombre et de lumière. Les auteurs de nos pièces abordent des sujets philosophiques, tragiques et/ou politiques. Nos spectacles s\'adressent donc aux adultes et au jeune public.\", \"description_esp\": \"Asociación franco-argentina creada en 2017 por Facundo Melillo, actor y director argentino, la Asociación Acquaforte Théâtre ha disfrutado desde su creación de un convenio con el espacio cultural del CHU (Centro Hospitalario Universitario de Montpellier). Este convenio nos ha permitido desarrollar nuestros proyectos en un espacio fijo de creación. La preparación del trabajo de escenario, los ensayos y las primeras representaciones tendrán lugar en este lugar. Nuestro intercambio con los pacientes y el personal hospitalario nos ha brindado una experiencia enriquecedora y nos ha guiado en el objetivo principal de nuestra asociación: el compromiso con el territorio a través de la implementación de intervenciones artísticas según las necesidades sociales.\\r\\n\\r\\nEn el ámbito artístico, Acquaforte produce obras de teatro y propuestas musicales que nos transportan a la cultura latinoamericana. Nuestro proyecto artístico se centra en la creación de obras de máscaras y marionetas, así como en el tratamiento del espacio a través de juegos de sombras y luces. Los autores de nuestras obras abordan temas filosóficos, trágicos y/o políticos. Nuestros espectáculos se dirigen tanto a adultos como a público joven.\"}');

-- --------------------------------------------------------

--
-- Structure de la table `membres`
--

CREATE TABLE `membres` (
  `id_membre` int NOT NULL,
  `nom_membre` varchar(25) NOT NULL,
  `prenom_membre` varchar(25) NOT NULL,
  `image_membre` varchar(255) NOT NULL,
  `description_membre` json NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `membres`
--

INSERT INTO `membres` (`id_membre`, `nom_membre`, `prenom_membre`, `image_membre`, `description_membre`) VALUES
(1, 'Facundo', 'Botta', '../../SRL/membres/asd.png', '{\"vignette_fr\": \"Dev\", \"vignette_esp\": \"Dev\", \"description_fr\": \"Etudiant dévelopeur web et web mobile\", \"description_esp\": \"Estudiante en programación web\"}');

-- --------------------------------------------------------

--
-- Structure de la table `spectacles`
--

CREATE TABLE `spectacles` (
  `id_spectacle` int NOT NULL,
  `titre_spectacle` varchar(25) NOT NULL,
  `description_spectacle` json NOT NULL,
  `site_spectacle` json NOT NULL,
  `info_spectacle` json NOT NULL,
  `affiche_spectacle` varchar(255) NOT NULL,
  `images_spectacle` json NOT NULL,
  `video_spectacle` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `spectacles`
--

INSERT INTO `spectacles` (`id_spectacle`, `titre_spectacle`, `description_spectacle`, `site_spectacle`, `info_spectacle`, `affiche_spectacle`, `images_spectacle`, `video_spectacle`) VALUES
(2, 'Escurial', '{\"description_fr\": \"Un roi fou, enfermé avec son bouffon dans son palais décrépit, attend la mort d\'une reine agonisante. Par jeu, par défi ou par pure cruauté, le roi impose au bouffon un jeu étrange : pour un temps, ils inverseront leurs attributs et leurs fonctions. Bon gré, mal gré, le bouffon s\'exécute, mais il se prend au jeu et, au moment de restituer au roi son sceptre et sa couronne, il les garde et tente de conserver le pouvoir.\", \"description_esp\": \"Un rey loco, enfermo junto a su bufón en su palacio decrépito, espera la muerte de una reina agonizante. Por juego, desafío o pura crueldad, el rey impone al bufón un extraño juego: durante un tiempo intercambiarán sus atributos y funciones. A regañadientes, el bufón cumple, pero se involucra en el juego y, cuando llega el momento de devolver al rey su cetro y corona, se los queda y trata de conservar el poder.\"}', '{\"site_fr\": \"« Ghelderode, c’est le diamant qui ferme le collier de poètes que la Belgique porte autour du cou. Ce diamant noir jette des feux cruels et nobles. Ils ne blessent que les petites âmes. Ils éblouissent les autres » Jean Cocteau\", \"site_esp\": \"\\\"Ghelderode es el diamante que cierra el collar de poetas que Bélgica lleva alrededor del cuello. Este diamante negro emite fuegos crueles y nobles. Solo lastiman a las almas pequeñas. Deslumbran a los demás.\\\" - Jean Cocteau\"}', '{\"1\": {\"contenue_info\": \"Sdasdadsad\", \"titre_info_fr\": \"Titre3 fr\", \"titre_info_esp\": \"Titre3 esp\"}, \"2\": {\"contenue_info\": \"100min\", \"titre_info_fr\": \"Duration\", \"titre_info_esp\": \"Duracion\"}, \"3\": {\"contenue_info\": \"Escurial\", \"titre_info_fr\": \"Titre\", \"titre_info_esp\": \"Titulo\"}}', '../../SRL/affiches/escurial.jpg', '[\"../../SRL/spectacles/Escurial_1.jpg\", \"../../SRL/spectacles/Escurial_2.jpg\", \"../../SRL/spectacles/Escurial_3.jpg\", \"../../SRL/spectacles/Escurial_4.jpg\", \"../../SRL/spectacles/Escurial_5.jpg\", \"../../SRL/spectacles/Escurial_6.jpg\", \"../../SRL/spectacles/Escurial_7.jpg\", \"../../SRL/spectacles/Escurial_8.jpg\", \"../../SRL/spectacles/Escurial_9.jpg\", \"../../SRL/spectacles/Escurial_10.jpg\", \"../../SRL/spectacles/Escurial_11.jpg\"]', 'https://www.youtube.com/watch?v=V_Y0fQHhve8&t=1s');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `user` varchar(25) NOT NULL,
  `pass` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`user`, `pass`) VALUES
('facundo', '$2y$12$78aTPHB/zrbLFMENzAMyfeWbDQkyL3oqOPiq5WUZQn4SX2.y9toka');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `agenda`
--
ALTER TABLE `agenda`
  ADD PRIMARY KEY (`id_event`);

--
-- Index pour la table `collaborateurs`
--
ALTER TABLE `collaborateurs`
  ADD PRIMARY KEY (`id_coll`);

--
-- Index pour la table `membres`
--
ALTER TABLE `membres`
  ADD PRIMARY KEY (`id_membre`);

--
-- Index pour la table `spectacles`
--
ALTER TABLE `spectacles`
  ADD PRIMARY KEY (`id_spectacle`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `agenda`
--
ALTER TABLE `agenda`
  MODIFY `id_event` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `collaborateurs`
--
ALTER TABLE `collaborateurs`
  MODIFY `id_coll` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `membres`
--
ALTER TABLE `membres`
  MODIFY `id_membre` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `spectacles`
--
ALTER TABLE `spectacles`
  MODIFY `id_spectacle` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
