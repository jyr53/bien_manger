-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 16 sep. 2022 à 13:50
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
(4, 4, ' dans une assiette sur le lit de salade\r\nintercaler les rondelles de tomates et de fromage\r\nmettre un peu de vinaigrette', 1, NULL, NULL),
(5, 1, 'faire cuire les oeufs  dur (10mins)', 2, NULL, NULL),
(6, 2, 'ecaler les oeufs', 2, NULL, NULL),
(7, 1, 'faire revenir le boeuf', 3, '2022-09-12 11:51:29', '2022-09-12 11:51:29'),
(11, 2, 'ajoutez la garniture aromatique et muiller avec le vin', 3, '2022-09-12 12:26:15', '2022-09-12 12:26:15'),
(12, 1, 'axrtabuiro   tor ', 4, '2022-09-13 10:07:23', '2022-09-13 10:07:23'),
(13, 1, 'gheyejzjf', 34, '2022-09-13 11:52:57', '2022-09-13 11:52:57'),
(14, 2, 'lsksjheyrio', 34, '2022-09-13 11:52:57', '2022-09-13 11:52:57'),
(15, 3, 'dmleoprithnd', 34, '2022-09-13 11:52:57', '2022-09-13 11:52:57'),
(16, 1, 'prechauffer le four', 35, '2022-09-13 11:56:41', '2022-09-13 11:56:41'),
(17, 2, 'enrouler les pruneaux avec du lard ', 35, '2022-09-13 11:56:41', '2022-09-13 11:56:41'),
(18, 3, 'maintenir avec un cure dent', 35, '2022-09-13 11:56:41', '2022-09-13 11:56:41'),
(19, 1, 'melanger les ingredints', 36, '2022-09-13 12:04:52', '2022-09-13 12:04:52'),
(20, 2, 'porter a ebulition le lait', 36, '2022-09-13 12:04:52', '2022-09-13 12:04:52'),
(21, 3, 'ajouter au lait le melanger', 36, '2022-09-13 12:04:52', '2022-09-13 12:04:52'),
(22, 4, 'faire cuire 5 minute a feu moyen', 36, '2022-09-13 12:04:52', '2022-09-13 12:04:52'),
(23, 5, 'sevir tiede', 36, '2022-09-13 12:04:52', '2022-09-13 12:04:52'),
(29, 1, 'vzrjtuirt', 38, '2022-09-13 12:27:21', '2022-09-13 12:27:21'),
(31, 1, 'aller dans votre commerce de proximite', 39, '2022-09-13 12:31:32', '2022-09-13 12:31:32'),
(32, 2, 'ouvrir la barquette', 39, '2022-09-13 12:31:32', '2022-09-13 12:31:32'),
(33, 3, 'servir', 39, '2022-09-13 12:31:32', '2022-09-13 12:31:32'),
(34, 1, 'eplucher les salsifix', 40, '2022-09-13 12:42:18', '2022-09-13 12:42:18'),
(35, 2, 'les couper', 40, '2022-09-13 12:42:18', '2022-09-13 12:42:18'),
(36, 3, 'cuire dans un blanc (melange de farine et d\'eau)', 40, '2022-09-13 12:42:18', '2022-09-13 12:42:18'),
(37, 4, 'faire revenir avec du beurre ail et parsil', 40, '2022-09-13 12:42:18', '2022-09-13 12:42:18'),
(38, 1, 'cuire la viande avec des carottes', 41, '2022-09-13 14:15:27', '2022-09-13 14:15:27'),
(39, 2, 'ajouter des raisins sec', 41, '2022-09-13 14:15:27', '2022-09-13 14:15:27'),
(40, 3, 'ajouter du riz', 41, '2022-09-13 14:15:27', '2022-09-13 14:15:27'),
(43, 1, 'monder le oranges', 48, '2022-09-15 10:37:48', '2022-09-15 10:37:48'),
(44, 2, ' coupez en rondelle', 48, '2022-09-15 10:37:49', '2022-09-15 10:37:49'),
(45, 1, 'faire chauffer le four', 49, '2022-09-15 11:07:04', '2022-09-15 11:07:04'),
(46, 3, 'eplucher les poires', 49, '2022-09-15 11:07:04', '2022-09-15 11:07:04'),
(47, 2, 'faire une pate a tarte avec le beurre la farine le sucre et les oeufs reserver au frais', 49, '2022-09-15 11:07:04', '2022-09-15 11:07:04'),
(48, 5, 'metrre les poires coupez en morceaux', 49, '2022-09-15 11:07:04', '2022-09-15 11:07:04'),
(49, 4, 'ateler la pate et garnir un moule  avec la pate', 49, '2022-09-15 11:07:04', '2022-09-15 11:07:04'),
(50, 6, 'cuire a four chaud 30mins', 49, '2022-09-15 11:07:04', '2022-09-15 11:07:04'),
(51, 1, 'faire chauffer le four', 49, '2022-09-15 11:07:08', '2022-09-15 11:07:08'),
(52, 2, 'faire une pate a tarte avec le beurre la farine le sucre et les oeufs reserver au frais', 49, '2022-09-15 11:07:08', '2022-09-15 11:07:08'),
(53, 3, 'eplucher les poires', 49, '2022-09-15 11:07:08', '2022-09-15 11:07:08'),
(54, 4, 'ateler la pate et garnir un moule  avec la pate', 49, '2022-09-15 11:07:08', '2022-09-15 11:07:08'),
(55, 5, 'metrre les poires coupez en morceaux', 49, '2022-09-15 11:07:08', '2022-09-15 11:07:08'),
(56, 6, 'cuire a four chaud 30mins', 49, '2022-09-15 11:07:08', '2022-09-15 11:07:08'),
(61, 1, 'eplucher les legumes', 73, '2022-09-15 14:13:20', '2022-09-15 14:13:20'),
(62, 2, 'couper les legumes', 73, '2022-09-15 14:13:20', '2022-09-15 14:13:20'),
(63, 3, 'cuirre la soupe', 73, '2022-09-15 14:13:20', '2022-09-15 14:13:20');

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

--
-- Déchargement des données de la table `images`
--

INSERT INTO `images` (`id`, `url`, `alternate_text`, `recettes_id`, `created_at`, `updated_at`) VALUES
(1, '.cours/marmiton/tomatesmozz.jpg', 'tomate mozzarela', 1, NULL, NULL),
(2, './cours/marmiton/boeuf bou.jpg', 'boeuf bourguignon et ces pommes de terre', 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `ingredients`
--

CREATE TABLE `ingredients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `unit` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `ingredients`
--

INSERT INTO `ingredients` (`id`, `Name`, `unit`) VALUES
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
(17, 'courgette', 'kg'),
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
(29, 'tomate', 'kg'),
(30, 'courgette', 'kG'),
(31, 'pate a tarte', 'unité'),
(32, 'poulet', 'Kg'),
(33, 'saumon fumée', 'Kg'),
(34, 'ciboulet', 'botte'),
(35, 'persil', 'botte'),
(36, 'raisin sec', 'Kg'),
(37, 'ortie', 'kg'),
(38, 'taboule', ''),
(39, 'ail', ''),
(40, 'salsifix', ''),
(41, 'raisin sec', ''),
(42, 'cacahuete', 'Kg'),
(43, 'poire', 'Kg'),
(44, 'haricote blanc', 'Kg'),
(45, 'gigot  d\'agneau', 'Kg'),
(46, 'saucisse', 'Kg');

-- --------------------------------------------------------

--
-- Structure de la table `ingredients_recettes`
--

CREATE TABLE `ingredients_recettes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `quantity` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ingredients_id` bigint(20) UNSIGNED NOT NULL,
  `recettes_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `ingredients_recettes`
--

INSERT INTO `ingredients_recettes` (`id`, `quantity`, `ingredients_id`, `recettes_id`, `created_at`, `updated_at`) VALUES
(8, '1 piece', 23, 1, NULL, NULL),
(9, '0.8 kg', 26, 1, NULL, NULL),
(10, '1 kg', 29, 1, NULL, NULL),
(11, 'PM', 27, 1, NULL, NULL),
(12, 'PM', 28, 1, NULL, NULL),
(13, '6 pieces', 8, 2, NULL, NULL),
(14, '2 cuillére', 24, 2, NULL, NULL),
(15, '0.5 L', 27, 2, NULL, NULL),
(16, 'PM', 28, 2, NULL, NULL),
(17, 'PM', 5, 2, NULL, NULL),
(18, 'pm', 6, 2, NULL, NULL),
(19, 'NaN', 23, 3, '2022-09-12 12:50:44', '2022-09-12 12:50:44'),
(20, '6 L', 26, 3, '2022-09-12 12:57:03', '2022-09-12 12:57:03'),
(29, '0.5', 14, 38, '2022-09-13 12:27:21', '2022-09-13 12:27:21'),
(30, '00.5', 9, 38, '2022-09-13 12:27:21', '2022-09-13 12:27:21'),
(31, '5', 8, 38, '2022-09-13 12:27:21', '2022-09-13 12:27:21'),
(32, '0', 38, 39, '2022-09-13 12:31:32', '2022-09-13 12:31:32'),
(33, '0.2 Kg', 14, 40, '2022-09-13 12:42:18', '2022-09-13 12:42:18'),
(34, '0.5 Kg', 7, 40, '2022-09-13 12:42:18', '2022-09-13 12:42:18'),
(35, '1 botte', 35, 40, '2022-09-13 12:42:18', '2022-09-13 12:42:18'),
(36, '1 tete', 39, 40, '2022-09-13 12:42:18', '2022-09-13 12:42:18'),
(37, '1 Kg', 40, 40, '2022-09-13 12:42:18', '2022-09-13 12:42:18'),
(38, '03 kg', 41, 41, '2022-09-13 14:15:27', '2022-09-13 14:15:27'),
(39, '1 kg', 13, 41, '2022-09-13 14:15:27', '2022-09-13 14:15:27'),
(40, '2 kg', 16, 41, '2022-09-13 14:15:27', '2022-09-13 14:15:27'),
(41, '1', 2, 73, '2022-09-15 14:13:20', '2022-09-15 14:13:20'),
(42, '5', 1, 73, '2022-09-15 14:13:20', '2022-09-15 14:13:20'),
(43, '1', 3, 73, '2022-09-15 14:13:20', '2022-09-15 14:13:20');

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
(1, 'Apéritif'),
(2, 'Entrée'),
(3, 'Plat'),
(4, 'Dessert'),
(5, 'Pâtisserie');

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
(6, 'tarte au poires', 'tarte au poires', 'tarte amandine aux poires', 4, '2022-08-19 11:20:57', '2022-08-19 11:20:57', 5, 4, 1),
(7, 'tarte a la tomate', 'tarte_tomate', 'tarte a la tomate avec de la moutarde', 4, '2022-08-19 12:43:21', '2022-08-19 12:43:21', 1, 1, 1),
(8, 'goulash', 'goulash', 'viande de boeuf cuit avec du paprika', 4, NULL, NULL, 3, 2, 1),
(9, 'carotte rapées', 'carotte_rapees', 'carotte rapées de mamy', 8, '2022-07-28 07:49:42', NULL, 2, 1, 1),
(10, 'salade nicoise', 'salade_nicoise trad', 'du vent dan les voiles', 8, NULL, NULL, 2, 3, 1),
(11, 'artichaud vinaigrette', 'artichaud_froid', 'artichaud comme dans mon enfance froid vinaigrette', 8, NULL, NULL, 2, 3, 1),
(12, 'terrine de sanglier', 'terrine_sanglier', 'terrine a l\'ancienne', 8, NULL, NULL, 1, 3, 1),
(13, 'LOUKOUM', 'LOUKOUM', 'qrkczkuszemcnz', 4, NULL, NULL, 4, 2, 1),
(14, 'terrine de foie de volaille', 'terrine_de_foie', 'terrine a l\'ancienne', 8, NULL, NULL, 1, 3, 1),
(15, 'cote de porce', 'cote_de_porc', 'cote de porc sauce charcutiere', 8, NULL, NULL, 3, 2, 1),
(16, 'crepe', 'crepe', 'crepe a base de farine', 2, NULL, NULL, 4, 3, 1),
(17, 'lapin chasseur', 'lapin chasseur', 'lapin avec des champignons', 6, NULL, NULL, 3, 1, 1),
(18, 'lapin chasseur', 'lapin chasseur', 'lapin avec des champignons', 6, NULL, NULL, 3, 1, 1),
(19, 'kouglof', 'kouglof', 'patisserie russe ', 4, NULL, NULL, 5, 3, 1),
(21, 'soupe d\'orties', 'soupe d\'orties', 'soupe de legume avec des ortie', 4, NULL, NULL, 2, 1, 1),
(23, 'soupe de legume', 'soupe de legume', 'zktvnqqzityq', 2, NULL, NULL, 2, 3, 1),
(26, 'rognons', 'rognons', 'acthbytvétéloypm', 8, NULL, NULL, 3, 4, 1),
(27, 'rougai saucisse', 'rougai saucisse', 'Ca yen a etre bon', 2, NULL, NULL, 3, 2, 1),
(28, 'tarte tatin', 'tarte tatin', 'tarte au pomme', 6, NULL, NULL, 5, 3, 1),
(32, 'merguez', 'merguez', 'merguez au barbecue', 4, NULL, NULL, 3, 2, 1),
(33, 'charlotte', 'charlotte', 'ahznctovya\'\'', 6, NULL, NULL, 4, 2, 1),
(34, 'semoule au lait', 'semoule au lait', 'semoule au raisin et vanille', 8, NULL, NULL, 4, 3, 1),
(35, 'pruneau au lard', 'pruneau au lard', 'prunoavec du lard fumée', 6, NULL, NULL, 1, 4, 1),
(36, 'porige', 'porige', 'porige irlandais', 6, NULL, NULL, 4, 3, 1),
(75, 'taboule', 'taboule', 'taboule libanait', 2, NULL, NULL, 2, 2, 1),
(76, 'crudite', 'crudite', 'crudite', 2, NULL, NULL, 2, 1, 1),
(77, 'casoulet', 'casoulet', 'casoulet toulousain', 2, NULL, NULL, 3, 4, 1);

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
(1, 'Printemps'),
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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `images`
--
ALTER TABLE `images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `ingredients`
--
ALTER TABLE `ingredients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT pour la table `ingredients_recettes`
--
ALTER TABLE `ingredients_recettes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

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
-- Contraintes pour la table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_recettes_id_foreign` FOREIGN KEY (`recettes_id`) REFERENCES `recettes` (`id`);

--
-- Contraintes pour la table `ingredients_recettes`
--
ALTER TABLE `ingredients_recettes`
  ADD CONSTRAINT `ingredients_recettes_ingredients_id_foreign` FOREIGN KEY (`ingredients_id`) REFERENCES `ingredients` (`id`);

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
