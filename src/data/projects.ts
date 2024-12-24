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
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'Plateforme e-commerce moderne avec panier en temps réel, paiement sécurisé et gestion des commandes',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2664&auto=format&fit=crop',
    link: 'https://github.com/yourusername/ecommerce',
    fullDescription:
      "Une plateforme e-commerce complète construite avec les dernières technologies. Le projet met l'accent sur la performance, la sécurité et l'expérience utilisateur.",
    features: [
      "Panier d'achat en temps réel avec synchronisation multi-appareils",
      'Système de paiement sécurisé intégré avec Stripe',
      'Gestion des stocks en temps réel',
      'Interface administrateur complète',
      'Système de recherche avancé avec filtres',
    ],
    challenges: [
      'Gestion de la concurrence dans les transactions',
      'Optimisation des performances avec un large catalogue',
      'Synchronisation en temps réel des stocks',
    ],
    solutions: [
      'Utilisation de Redis pour la mise en cache',
      'Architecture microservices avec Docker',
      'Implémentation de WebSocket pour les mises à jour en temps réel',
    ],
    results: [
      'Temps de chargement réduit de 60%',
      'Augmentation de 40% du taux de conversion',
      'Réduction de 70% des erreurs de stock',
    ],
  },
  {
    id: 'dashboard-analytics',
    title: 'Dashboard Analytics',
    description: 'Tableau de bord analytique avec visualisations de données en temps réel',
    tech: ['Next.js', 'TypeScript', 'D3.js', 'Supabase', 'TailwindCSS', 'Jest'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    link: 'https://github.com/yourusername/dashboard',
    fullDescription:
      'Un tableau de bord analytique sophistiqué offrant des visualisations de données en temps réel et des rapports personnalisables pour la prise de décision.',
    features: [
      'Visualisations de données interactives avec D3.js',
      'Rapports personnalisables en temps réel',
      'Export de données en plusieurs formats',
      "Système d'alertes intelligent",
      'Analyses prédictives',
    ],
    challenges: [
      'Gestion de grandes quantités de données en temps réel',
      "Création d'interfaces utilisateur intuitives pour l'analyse complexe",
      'Performance des visualisations avec des données volumineuses',
    ],
    solutions: [
      'Architecture serverless avec Next.js',
      'Optimisation des requêtes avec Supabase',
      'Utilisation de Web Workers pour les calculs complexes',
    ],
    results: [
      "Réduction de 50% du temps d'analyse",
      'Augmentation de 80% de la précision des prévisions',
      'Satisfaction utilisateur de 95%',
    ],
  },
  {
    id: 'task-management',
    title: 'Task Management App',
    description: 'Application de gestion de projet collaborative',
    tech: ['React', 'Firebase', 'TailwindCSS', 'Redux', 'WebSocket', 'Jest'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop',
    link: 'https://github.com/yourusername/taskmanager',
    fullDescription:
      "Une application de gestion de projet moderne qui facilite la collaboration d'équipe et le suivi des tâches en temps réel.",
    features: [
      'Interface drag-and-drop intuitive',
      'Collaboration en temps réel',
      'Intégration avec Slack',
      'Système de notifications avancé',
      "Rapports d'activité détaillés",
    ],
    challenges: [
      'Synchronisation en temps réel entre utilisateurs',
      'Gestion des conflits de modification',
      'Performance avec de nombreuses tâches',
    ],
    solutions: [
      'Utilisation de Firebase pour la synchronisation en temps réel',
      "Architecture Redux pour la gestion d'état",
      'Système de résolution de conflits automatique',
    ],
    results: [
      "Productivité d'équipe augmentée de 35%",
      'Réduction de 60% des réunions de suivi',
      'Adoption par plus de 100 équipes',
    ],
  },
];
