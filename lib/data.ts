import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  CloudSun,
  Droplets,
  Leaf,
  MapPin,
  Box,
  Compass,
  Hammer,
  Layers,
  MessageCircle,
  Palette,
  Sparkles,
  Sprout,
  Trees,
  Wallet,
  Wind,
  Wrench,
} from "lucide-react";

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/approach", label: "Approach" },
  { href: "/collections", label: "Collections" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const heroFeatures: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Smart Irrigation",
    text: "Water, only when the soil asks",
    icon: Droplets,
  },
  {
    title: "Eco Systems",
    text: "Planting that belongs to its place",
    icon: Sprout,
  },
  {
    title: "Premium Foliage",
    text: "Specimens chosen for form and light",
    icon: Trees,
  },
  {
    title: "Turnkey Architecture",
    text: "From first plan to finished ground",
    icon: Building2,
  },
];

export const metrics = [
  { value: "15", label: "Years" },
  { value: "120+", label: "Projects" },
  { value: "98%", label: "Satisfaction" },
];

export const capabilities = [
  "Landscape design shaped around how a space should feel.",
  "Irrigation systems planned for efficient coverage.",
  "Interior and exterior greenery, pergolas, and outdoor living.",
  "From concept to execution, with precision and quality.",
];

export const outdoorValues: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Plants that shift with seasons",
    text: "A garden or balcony that feels alive through the year.",
    icon: Sprout,
  },
  {
    title: "Lighting that transforms mood",
    text: "Evening light for coffee corners, play, and quiet hours.",
    icon: CloudSun,
  },
  {
    title: "Natural textures that bring warmth",
    text: "Materials and planting that make the space feel personal.",
    icon: Sparkles,
  },
  {
    title: "Pathways that guide movement",
    text: "Corners and routes designed for the moments you spend outside.",
    icon: Wind,
  },
];

export const reasons: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Excellent Maintenance",
    text: "Delivering excellence in landscape maintenance through sustainable practices, efficient irrigation systems, and expert nutrient and fertilizer management to ensure healthy and thriving landscapes.",
    icon: Wrench,
  },
  {
    title: "Budget-Friendly Pricing",
    text: "Our cost-efficient approach helps clients achieve high-standard project delivery while staying within planned budgets.",
    icon: Wallet,
  },
  {
    title: "Timely Project Completion",
    text: "We ensure careful planning and execution to deliver projects within the committed timelines without compromising quality.",
    icon: CalendarCheck,
  },
  {
    title: "150+ Checklist",
    text: "Every project follows a detailed 150+ point checklist to ensure precision, quality, and perfection in every detail.",
    icon: ClipboardCheck,
  },
  {
    title: "United Arab Emirates",
    text: "Green Mirage Technical Services is recognized for delivering reliable and high-quality landscape and technical solutions across the UAE.",
    icon: MapPin,
  },
  {
    title: "Authentic Brands",
    text: "We partner only with certified, trusted brands to ensure every product in your home is genuine and high-quality.",
    icon: Award,
  },
  {
    title: "2 Stage Assembly",
    text: "Every installation goes through two rounds of assembly checks for flawless finish and long-lasting durability.",
    icon: BadgeCheck,
  },
  {
    title: "Daily Updates",
    text: "Stay informed at every step with daily progress updates straight from your project site.",
    icon: MessageCircle,
  },
  {
    title: "Skilled Irrigation Designers",
    text: "We design fully automated and smart irrigation systems that reduce water consumption while ensuring efficient coverage for both large and small projects.",
    icon: Droplets,
  },
  {
    title: "Expert Horticulturist",
    text: "Highly skilled horticulturist with expertise in plant selection, soil health, irrigation needs, and landscape sustainability.",
    icon: Leaf,
  },
];

export const steps: { number: string; title: string; text: string; icon: LucideIcon }[] = [
  {
    number: "01",
    title: "Consultation",
    text: "We start by understanding your space, lifestyle, and aspirations, then plan an outdoor design aligned with your vision.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Vision Mapping",
    text: "Together we define the purpose, flow, and feeling of the space, so every corner reflects how you live outdoors.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Concept & Moodboard",
    text: "Visual themes that blend nature, comfort, and sophistication, so you can see the environment take shape.",
    icon: Palette,
  },
  {
    number: "04",
    title: "3D Visualization",
    text: "Detailed 3D renders so you can visualize every element before a single plant is placed.",
    icon: Box,
  },
  {
    number: "05",
    title: "Material & Vendor Selection",
    text: "Materials and plants handpicked, with reliable vendors for quality and value that match your style.",
    icon: Layers,
  },
  {
    number: "06",
    title: "Execution Support",
    text: "Our experts stay involved through execution, coordinating vendors so the design is realized as planned.",
    icon: Hammer,
  },
];

export const services = [
  {
    slug: "villa-landscaping",
    title: "Villa Landscaping",
    text: "Complete villa grounds, designed and delivered from concept to execution.",
    image: "/images/service-villa.jpg",
    points: [
      "Complete villa grounds, from the first concept through execution.",
      "Arrival court, garden, and outdoor rooms planned as one landscape.",
      "Planting, paths, and shade composed for everyday life at home.",
    ],
  },
  {
    slug: "terrace-balcony-gardens",
    title: "Terrace & Balcony Gardens",
    text: "Terrace and balcony gardens shaped for shade, views, and everyday use.",
    image: "/images/service-terrace.jpg",
    points: [
      "Gardens shaped for shade, views, and everyday use.",
      "Lounge planting and green walls for a city terrace.",
      "A balcony that stays alive through the year.",
    ],
  },
  {
    slug: "poolside-deck-design",
    title: "Poolside & Deck Design",
    text: "Poolside decks and planting composed as one outdoor room.",
    image: "/images/service-pool.jpg",
    points: [
      "Poolside decks and planting composed as one outdoor room.",
      "Color and palms held to the edge of the water.",
      "Seating and paths planned around the pool.",
    ],
  },
  {
    slug: "outdoor-lounges",
    title: "Outdoor Lounges",
    text: "Outdoor lounges for morning coffee, gatherings, and evening rest.",
    image: "/images/service-lounge.jpg",
    points: [
      "Lounges for morning coffee, gatherings, and evening rest.",
      "Seating, lighting, and planting composed for night use.",
      "A shaded place to pause outdoors.",
    ],
  },
  {
    slug: "backyard-landscaping",
    title: "Backyard Landscaping",
    text: "Backyard landscapes for play, paths, and everyday family life.",
    image: "/images/service-backyard.jpg",
    points: [
      "Landscapes for play, paths, and everyday family life.",
      "Lawn, terrace, and shade composed for everyday use.",
      "Pathways that guide movement through the garden.",
    ],
  },
  {
    slug: "interior-landscaping",
    title: "Interior Landscaping",
    text: "Interior greenery for rooms, courtyards, and indoor spaces.",
    image: "/images/service-interior.jpg",
    points: [
      "Greenery for rooms, courtyards, and indoor spaces.",
      "Specimens chosen for form and light.",
      "Planting for atriums, entries, and sheltered courts.",
    ],
  },
  {
    slug: "outdoor-lights",
    title: "Outdoor Lights",
    text: "Lighting that transforms the mood of paths, gardens, and lounges.",
    image: "/images/service-lighting.jpg",
    points: [
      "Lighting that transforms the mood of paths, gardens, and lounges.",
      "Evening light for coffee corners, play, and quiet hours.",
      "Light planned together with the planting.",
    ],
  },
  {
    slug: "pergolas",
    title: "Pergolas",
    text: "Pergolas and shaded outdoor rooms, built with the landscape.",
    image: "/images/service-pergola.jpg",
    points: [
      "Pergolas and shaded outdoor rooms, built with the landscape.",
      "Shade for terraces, lounges, and garden edges.",
      "Structure and planting designed as one outdoor room.",
    ],
  },
  {
    slug: "civil-work",
    title: "Civil Work",
    text: "Plaster, carpentry, wood flooring, and the built work that supports the landscape.",
    image: "/images/service-villa.jpg",
    points: [
      "Plaster works for walls, courts, and garden edges.",
      "Carpentry and wood flooring for outdoor rooms and interiors.",
      "Fitting, repair, and maintenance of the finished built work.",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export type Plant = {
  name: string;
  latin: string;
  note: string;
  light: string;
  image: string;
  badge?: string;
};

export const collections: {
  title: string;
  text: string;
  layout: "pill" | "card" | "project";
  plants: Plant[];
}[] = [
  {
    title: "Natural Plant Collection",
    text: "Specimens from the Green Mirage palette, chosen for UAE villas, courts, and shaded rooms.",
    layout: "pill",
    plants: [
      {
        name: "Bonsai",
        latin: "Styled specimen",
        note: "A trained form for courtyards, entries, and quiet interior corners.",
        light: "Bright filtered",
        image: "/images/natural-plant-bonsai.jpg",
      },
      {
        name: "Ficus Lyrata",
        latin: "Ficus lyrata",
        note: "Broad foliage for galleries, atriums, and sheltered courts.",
        light: "Bright indirect",
        image: "/images/natural-plant-ficus.jpg",
      },
      {
        name: "Areca Palm",
        latin: "Dypsis lutescens",
        note: "A familiar palm for terraces and bright interior rooms.",
        light: "Soft sun",
        image: "/images/natural-plant-areca.jpg",
      },
      {
        name: "Bamboo Palm",
        latin: "Chamaedorea",
        note: "Slender canes that screen a wall without closing the view.",
        light: "Part shade",
        image: "/images/natural-plant-bamboo.jpg",
      },
      {
        name: "Bougainvillea",
        latin: "Bougainvillea",
        note: "Color for pergolas, boundaries, and full-sun villa walls.",
        light: "Full sun",
        image: "/images/natural-plant-bougainvillea.jpg",
      },
      {
        name: "Frangipani Plant",
        latin: "Plumeria",
        note: "A fragrant courtyard tree for warm, open gardens.",
        light: "Full sun",
        image: "/images/natural-plant-frangipani.jpg",
      },
      {
        name: "Succulents",
        latin: "Mixed succulents",
        note: "Low, sculptural planting for roofs, bowls, and dry beds.",
        light: "Bright light",
        image: "/images/natural-plant-succulents.jpg",
      },
      {
        name: "Desert Plants",
        latin: "Arid palette",
        note: "Sun-hardy forms for exposed courts and gravel gardens.",
        light: "Full sun",
        image: "/images/natural-plant-desert.jpg",
      },
    ],
  },
  {
    title: "Artificial Plant Collection",
    text: "Finished trees and palms for interiors and covered outdoor rooms that need greenery without the upkeep.",
    layout: "card",
    plants: [
      {
        name: "Statement Tree",
        latin: "Interior specimen",
        note: "A full canopy for lounges, lobbies, and majlis corners.",
        light: "Any interior",
        image: "/images/artificial-plant-tree.jpg",
      },
      {
        name: "Crimson Canopy",
        latin: "Accent tree",
        note: "Seasonal color held in a single, contained form.",
        light: "Covered rooms",
        image: "/images/artificial-plant-crimson.jpg",
      },
      {
        name: "White Blossom",
        latin: "Flowering tree",
        note: "A white flowering crown for entries and reception spaces.",
        light: "Bright interior",
        image: "/images/artificial-plant-blossom.jpg",
      },
      {
        name: "Showroom Palm",
        latin: "Artificial palm",
        note: "Height and shade-like cover for atriums and terraces.",
        light: "Indoor or covered",
        image: "/images/artificial-plant-palm.jpg",
      },
      {
        name: "Olive Tree",
        latin: "Interior olive",
        note: "A slender olive form for covered rooms and terraces.",
        light: "Indoor or covered",
        image: "/images/artificial-plant-05.jpg",
      },
      {
        name: "Showroom Collection",
        latin: "Display trees",
        note: "Finished trees grouped for lobbies and showrooms.",
        light: "Indoor",
        image: "/images/artificial-plant-06.jpg",
      },
      {
        name: "Hanging Color",
        latin: "Flowering display",
        note: "A hanging burst of color for balconies and covered walls.",
        light: "Covered",
        image: "/images/artificial-plant-07.jpg",
      },
      {
        name: "Pink Blossom",
        latin: "Flowering tree",
        note: "A pink flowering tree for bright interior corners.",
        light: "Bright interior",
        image: "/images/artificial-plant-08.jpg",
      },
    ],
  },
  {
    title: "Inspiration Gallery",
    text: "Villas, terraces, lounges, and pool courts from Green Mirage projects.",
    layout: "project",
    plants: [
      {
        name: "Palm Entry",
        latin: "Arrival garden",
        note: "Palms and low planting for the drive and front court.",
        light: "Full sun",
        badge: "Entry",
        image: "/images/gallery-entry.jpg",
      },
      {
        name: "Backyard Lawn",
        latin: "Family garden",
        note: "Lawn, terrace, and shade composed for everyday use.",
        light: "Open aspect",
        badge: "Garden",
        image: "/images/gallery-backyard.jpg",
      },
      {
        name: "Rooftop Terrace",
        latin: "Elevated garden",
        note: "Lounge planting and green walls for a city terrace.",
        light: "Exposed sun",
        badge: "Terrace",
        image: "/images/gallery-terrace.jpg",
      },
      {
        name: "Pool Court",
        latin: "Waterside planting",
        note: "Color and palms held to the edge of the water.",
        light: "Full sun",
        badge: "Pool",
        image: "/images/gallery-pool.jpg",
      },
      {
        name: "Villa Grounds",
        latin: "Residence",
        note: "Complete grounds from the arrival court to the garden edge.",
        light: "Full sun",
        badge: "Villa",
        image: "/images/service-villa.jpg",
      },
      {
        name: "Evening Lounge",
        latin: "Outdoor room",
        note: "Seating, lighting, and planting composed for night use.",
        light: "Covered",
        badge: "Lounge",
        image: "/images/service-lounge.jpg",
      },
      {
        name: "Landscape Maintenance",
        latin: "Site care",
        note: "Crews in Green Mirage colors, caring for planted courts.",
        light: "On site",
        badge: "Care",
        image: "/images/maintenance-crew.jpg",
      },
      {
        name: "Garden Care",
        latin: "Bed maintenance",
        note: "Seasonal bed work, soil, and planting kept in condition.",
        light: "On site",
        badge: "Care",
        image: "/images/maintenance-beds.jpg",
      },
    ],
  },
];

export const projectTypes = [
  "Private Residence",
  "Estate & Grounds",
  "Hospitality",
  "Interior Garden",
  "Commercial Court",
];
