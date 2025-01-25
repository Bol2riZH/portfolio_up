export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  fullDescription: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
}

export const projects: Project[] = [
  {
    id: 'pim-queguiner',
    title: 'PIM (product information management)',
    description: "Développement d'un PIM (Product Information Management) basé sur PIMCORE avec Symfony 4 PHP.",
    tech: ['Symfony', 'PHP', 'PIMCORE', 'Talend', 'Git', 'SQL'],
    image: '/projects/pimcore/1.png',
    link: 'https://github.com/yourusername/pim-queguiner',
    fullDescription:
      "Le lancement d'un site e-commerce pour le groupe Quéguiner a nécessité le développement d'un PIM (Product Information Management) pour gérer les données produits. J'ai développé toutes les features nécessaires à l'import et l'intégration des produits vendu par l'entreprise (ERP M3 - stock, prix, etc.) fusionné avec les données fournisseurs (caractéristiques, images, etc.).",
    features: [
      "Intégration des données produits depuis l'ERP M3",
      'Récupération et intégration des données des fournisseurs',
      'Fusion des données produits et fournisseurs',
      "Mise à jour automatique des produits de l'ERP M3 via Talend",
      "Création des API pour l'envoi des produits, hiérarchies, etc.",
      "Mise en place d'un système de validation des données par les directeurs produits avant publication",
    ],
    challenges: [
      'Délai de mise en production court',
      "Besoin d'évolution rapide et communication étroite avec le métier",
      "Mise en place d'un système de suivi des modifications pour l'envoi des produits modifiés uniquement",
    ],
    solutions: [
      'Echange quotidien avec le métier pour définir les besoins et les priorités',
      "Mise en place du projet et intégration de Git dans l'entreprise",
      "Mise en place d'un système de suivi des modifications pour l'envoi des produits modifiés uniquement",
    ],
    results: [
      'Développement réalisé en 1 an',
      'Plus de 40 000 références intégrées',
      'Référent technique pour la partie web du site E-service Quéguiner',
      'Pilotage du prestataire pour le développement du site E-service',
    ],
  },
  {
    id: 'consultation-compte-client',
    title: 'Consultation compte client',
    description: 'Développement d’une application finance de consultation des transactions clients',
    tech: ['Symfony 7', 'Docker', 'Oracle', 'X3', 'SQL'],
    image: 'https://example.com/image-consultation-compte-client.jpg',
    link: 'https://github.com/yourusername/consultation-compte-client',
    fullDescription:
      'Application permettant la consultation des transactions clients, facilitant la visualisation des transactions (débit - crédit) via une interface claire. Utilisation dans toutes les agences du groupe.',
    features: [
      "Mise en place de Docker pour l'environnement de développement",
      "Encadrement d'alternants pour le développement",
      'Connection et récupération des données depuis Oracle et Iris (SQL)',
      'Gestion des transactions et comptes sur 3 entreprises du groupe',
    ],
    challenges: ['Faciliter la visualisation des transactions clients'],
    solutions: [
      "Développement d'une interface utilisateur intuitive",
      'Optimisation des requêtes pour une meilleure performance',
    ],
    results: [
      'Amélioration de la transparence des transactions',
      'Facilité de la consultation des transactions clients pour les agences',
      'Réduction du temps de traitement des demandes clients',
    ],
  },
  {
    id: 'gestion-retours-mda',
    title: 'Gestion des retours MDA',
    description: 'Application de gestion des retours client pour une entreprise de menuiserie',
    tech: ['AppScript', 'JavaScript', 'Suite Google'],
    image: '/projects/mda/2.png',
    link: 'https://github.com/yourusername/gestion-retours-mda',
    fullDescription:
      'Application permettant de gérer les retours clients, établissant un workflow clair avec le métier et gérant les interactions entre l’entreprise, le transport et les agences.',
    features: [
      'Établir le workflow des retours avec le métier',
      'Gérer les interactions et échanges entre l’entreprise, le transport et les agences',
      'Définir les étapes de validation d’un retour produit',
    ],
    challenges: ['Pas de suivi de gestion des retours (pas de validation, problème de transport)'],
    solutions: ["Mise en place d'un système de suivi des retours", 'Automatisation des notifications pour les retours'],
    results: ['Amélioration de la gestion des retours', 'Réduction des problèmes de transport'],
  },
  // {
  //   id: 'reprise-sites-ecommerce',
  //   title: 'Reprise en interne des sites e-commerce Quéguiner Matériaux et Leader Mat',
  //   description: 'Reprise en interne des sites e-commerce développés avec Drupal et Alpine.js.',
  //   tech: ['Drupal', 'Alpine.js', 'Symfony 4', 'PHP', 'PIMCORE'],
  //   image: 'https://example.com/image-reprise-sites-ecommerce.jpg',
  //   link: 'https://github.com/yourusername/reprise-sites-ecommerce',
  //   fullDescription:
  //     "Ce projet consiste à reprendre en interne les sites e-commerce de Quéguiner Matériaux et Leader Mat, initialement développés par un prestataire. L'objectif est d'améliorer la gestion des contenus et d'assurer une évolution continue des sites en intégrant les retours des utilisateurs.",
  //   features: [
  //     'Migration des sites vers une gestion interne pour une meilleure réactivité',
  //     'Intégration des retours utilisateurs pour des évolutions continues',
  //     "Mise en place d'un système de gestion de contenu optimisé avec Drupal",
  //     "Utilisation d'Alpine.js pour des interactions dynamiques et réactives",
  //   ],
  //   challenges: [
  //     'Assurer la continuité des services pendant la migration',
  //     'Former les équipes internes à la gestion des nouveaux outils',
  //     'Gérer les attentes des utilisateurs pendant la transition',
  //   ],
  //   solutions: [
  //     'Planification minutieuse de la migration pour minimiser les interruptions',
  //     'Sessions de formation pour les équipes sur Drupal et Alpine.js',
  //     "Mise en place d'un support technique pour accompagner les utilisateurs",
  //   ],
  //   results: [
  //     'Amélioration de la gestion des contenus des sites e-commerce',
  //     "Réduction des délais de mise à jour et d'évolution des sites",
  //     'Augmentation de la satisfaction des utilisateurs grâce à des améliorations continues',
  //   ],
  // },
  // {
  //   id: 'catalogue-produit-interne',
  //   title: 'Catalogue produit interne',
  //   description:
  //     "Développement d'un catalogue produit interne en React avec un serveur proxy (Node - Express) entre le PIM et le catalogue.",
  //   tech: ['React', 'Node.js', 'Express', 'PIMCORE', 'PHP 7.3'],
  //   image: 'https://example.com/image-catalogue-produit-interne.jpg',
  //   link: 'https://github.com/yourusername/catalogue-produit-interne',
  //   fullDescription:
  //     "Ce projet consiste à développer un catalogue produit interne en React, en mettant en place un serveur proxy avec Node.js et Express pour interagir avec le PIM. Ce système vise à résoudre des problèmes de sécurité liés à l'accès direct aux données du PIM.",
  //   features: [
  //     "Création d'un catalogue produit dynamique en React",
  //     "Mise en place d'un serveur proxy pour sécuriser les échanges avec le PIM",
  //     'Gestion des données produits via le PIMCORE',
  //   ],
  //   challenges: [
  //     "Problèmes de sécurité liés à l'accès direct aux données du PIM",
  //     'Intégration fluide entre le catalogue et le PIM',
  //   ],
  //   solutions: [
  //     "Utilisation d'un serveur proxy pour sécuriser les communications",
  //     "Mise en place de contrôles d'accès et de validation des données",
  //   ],
  //   results: [
  //     'Amélioration de la sécurité des données produits',
  //     "Facilitation de l'accès aux informations produits pour les utilisateurs internes",
  //   ],
  // },
];
