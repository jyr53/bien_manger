-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mar. 30 août 2022 à 16:03
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `marmiton`
--

-- --------------------------------------------------------

--
-- Structure de la table `etapes`
--

CREATE TABLE `etapes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `number` int(11) NOT NULL,
  `content` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `recette_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `etapes`
--

INSERT INTO `etapes` (`id`, `number`, `content`, `recette_id`, `created_at`, `updated_at`) VALUES
(1, 1, 'laver les tomates et la salade', 1, NULL, NULL),
(2, 2, 'faire une vinaigrette', 1, NULL, NULL),
(3, 3, 'decouper les tomates et la mozzarella ciseler la salade', 1, NULL, NULL),
(4, 4, ' dans une assiette sur le lit de salade\r\nintercaler les rondelles de tomates et de fromage\r\nmettre un peu de vinaigrette', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `images`
--

CREATE TABLE `images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `url` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alternate_text` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `recettes_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `ingredients`
--

CREATE TABLE `ingredients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `unité` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `ingredients`
--

INSERT INTO `ingredients` (`id`, `Name`, `unité`) VALUES
(1, 'carotte', 'kg'),
(2, 'poireaux', 'kg'),
(3, 'Pomme de terre', 'kg'),
(4, 'creme fraiche', 'L'),
(5, 'sel', 'kg'),
(6, 'Poivre', 'kg'),
(7, 'farine', 'kg'),
(8, 'oeufs', 'unité'),
(9, 'sucre', 'kg'),
(10, 'chocolat', 'kg'),
(11, 'levure', 'sachet'),
(12, 'huile a frire', 'L'),
(13, 'Steak de boeuf', 'kg'),
(14, 'beurre', 'kg'),
(15, 'lait', 'L'),
(16, 'riz', 'kg'),
(17, 'corgette', 'kg'),
(18, 'comcombre', 'piece'),
(19, 'orange', 'kg'),
(20, 'fraise', 'kg'),
(21, 'camenbert', 'kg'),
(22, 'gruyere', 'kg'),
(23, 'salade verte', 'piece'),
(24, 'moutarde', 'kg'),
(25, 'porto', 'L'),
(26, 'mozzarela', 'kg'),
(27, 'huile', 'L'),
(28, 'vinaigre', 'L'),
(29, 'tomate', 'kg');

-- --------------------------------------------------------

--
-- Structure de la table `ingredients_recettes`
--

CREATE TABLE `ingredients_recettes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `quantity` double(8,2) NOT NULL,
  `ingredients_id` bigint(20) UNSIGNED NOT NULL,
  `recettes_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `ingredients_recettes`
--

INSERT INTO `ingredients_recettes` (`id`, `quantity`, `ingredients_id`, `recettes_id`, `created_at`, `updated_at`) VALUES
(1, 1.00, 23, 1, '2022-07-28 07:49:42', NULL),
(2, 0.50, 29, 1, NULL, NULL),
(3, 0.30, 26, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_100000_create_password_resets_table', 1),
(2, '2019_08_19_000000_create_failed_jobs_table', 1),
(3, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(4, '2022_07_25_115150_create_saisons', 1),
(5, '2022_07_25_131550_create_permissions', 1),
(6, '2022_07_25_133525_create_ingredients', 1),
(7, '2022_07_25_140041_create_plats', 1),
(8, '2022_07_25_141650_create_utilisateurs_table', 1),
(9, '2022_07_25_141823_create_recettes', 1),
(10, '2022_07_25_142327_create_etapes', 1),
(11, '2022_07_25_142346_create_images', 1),
(12, '2022_07_25_204437_create_ingredients_recettes', 1);

-- --------------------------------------------------------

--
-- Structure de la table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `permission` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `permissions`
--

INSERT INTO `permissions` (`id`, `permission`) VALUES
(1, 'utilisateurSimple'),
(2, 'utilisateurConnecté'),
(3, 'editeur'),
(4, 'administrateur'),
(5, 'superAdministrateur');

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `plats`
--

CREATE TABLE `plats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `menu` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `plats`
--

INSERT INTO `plats` (`id`, `menu`) VALUES
(1, 'Aperitis'),
(2, 'Entre'),
(3, 'Plats'),
(4, 'Desserts'),
(5, 'patisseries');

-- --------------------------------------------------------

--
-- Structure de la table `recettes`
--

CREATE TABLE `recettes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Slug` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(400) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guest` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `plat_id` bigint(20) UNSIGNED NOT NULL,
  `saison_id` bigint(20) UNSIGNED NOT NULL,
  `utilisateur_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `recettes`
--

INSERT INTO `recettes` (`id`, `Name`, `Slug`, `description`, `guest`, `created_at`, `updated_at`, `plat_id`, `saison_id`, `utilisateur_id`) VALUES
(1, 'salade tomate mozzarella', 'tomate mozzarella', 'salade de tomates mozzarella a l\'italienne', 4, '2022-07-28 07:49:42', NULL, 2, 2, 1),
(2, 'oeufs mayonaise', 'oeufs mayonaise', 'oeufs dur mayonaise', 4, '2022-08-18 14:27:40', NULL, 2, 2, 1),
(3, 'boeuf bourguignon', 'boeuf bourguignon', 'saute de boeuf au vin rouge  ', 6, '2022-08-18 16:28:55', NULL, 3, 4, 1),
(4, 'gateau au chocolat', 'gateau chocolat', 'gateau moelleux au chocolat', 4, '2022-08-19 09:05:34', '2022-08-19 09:05:34', 3, 2, 1),
(6, 'tarte au poires', 'tarte au poires', 'tarte amandine aux poires', 4, '2022-08-19 11:20:57', '2022-08-19 11:20:57', 3, 2, 1),
(7, 'tarte a la tomate', 'tarte_tomate', 'tarte a la tomate avec de la moutarde', 4, '2022-08-19 12:43:21', '2022-08-19 12:43:21', 1, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `saisons`
--

CREATE TABLE `saisons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `saisons`
--

INSERT INTO `saisons` (`id`, `Name`) VALUES
(1, 'e Pintemps'),
(2, ' Eté'),
(3, ' Automne'),
(4, ' Hiver');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `name`, `email`, `email_verified_at`, `password`, `permission_id`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'jean-yves', 'jean-yves.rousseau@orange.fr', NULL, '$2y$10$aUFVWS0nrFUggim5sJvDbex3wR22lM4G8MsO9faZmxlyag6262/e.', 5, NULL, NULL, NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `etapes`
--
ALTER TABLE `etapes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `etapes_recette_id_foreign` (`recette_id`);

--
-- Index pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Index pour la table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `images_recettes_id_foreign` (`recettes_id`);

--
-- Index pour la table `ingredients`
--
ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `ingredients_recettes`
--
ALTER TABLE `ingredients_recettes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ingredients_recettes_ingredients_id_foreign` (`ingredients_id`),
  ADD KEY `ingredients_recettes_recettes_id_foreign` (`recettes_id`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Index pour la table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Index pour la table `plats`
--
ALTER TABLE `plats`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `recettes`
--
ALTER TABLE `recettes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `recettes_plat_id_foreign` (`plat_id`),
  ADD KEY `recettes_saison_id_foreign` (`saison_id`),
  ADD KEY `recettes_utilisateur_id_foreign` (`utilisateur_id`);

--
-- Index pour la table `saisons`
--
ALTER TABLE `saisons`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `utilisateurs_email_unique` (`email`),
  ADD KEY `utilisateurs_permission_id_foreign` (`permission_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `etapes`
--
ALTER TABLE `etapes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `images`
--
ALTER TABLE `images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT pour la table `ingredients_recettes`
--
ALTER TABLE `ingredients_recettes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `plats`
--
ALTER TABLE `plats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `recettes`
--
ALTER TABLE `recettes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `saisons`
--
ALTER TABLE `saisons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `etapes`
--
ALTER TABLE `etapes`
  ADD CONSTRAINT `etapes_recette_id_foreign` FOREIGN KEY (`recette_id`) REFERENCES `recettes` (`id`);

--
-- Contraintes pour la table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_recettes_id_foreign` FOREIGN KEY (`recettes_id`) REFERENCES `recettes` (`id`);

--
-- Contraintes pour la table `ingredients_recettes`
--
ALTER TABLE `ingredients_recettes`
  ADD CONSTRAINT `ingredients_recettes_ingredients_id_foreign` FOREIGN KEY (`ingredients_id`) REFERENCES `ingredients` (`id`),
  ADD CONSTRAINT `ingredients_recettes_recettes_id_foreign` FOREIGN KEY (`recettes_id`) REFERENCES `recettes` (`id`);

--
-- Contraintes pour la table `recettes`
--
ALTER TABLE `recettes`
  ADD CONSTRAINT `recettes_plat_id_foreign` FOREIGN KEY (`plat_id`) REFERENCES `plats` (`id`),
  ADD CONSTRAINT `recettes_saison_id_foreign` FOREIGN KEY (`saison_id`) REFERENCES `saisons` (`id`),
  ADD CONSTRAINT `recettes_utilisateur_id_foreign` FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateurs` (`id`);

--
-- Contraintes pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD CONSTRAINT `utilisateurs_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
