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

export type ServicePoint = { label: string; text: string };

export type ServiceArea = {
  title: string;
  text: string;
  image: string;
  alt: string;
  points: ServicePoint[];
};

export type ServiceReference = {
  type: string;
  name: string;
  place: string;
  image: string;
};

export const services: {
  slug: string;
  title: string;
  menu?: string;
  text: string;
  image: string;
  areas: ServiceArea[];
  reference?: ServiceReference[];
}[] = [
  {
    slug: "hardscape",
    title: "Hardscape",
    menu: "All Civil Works & Paving",
    text: "The structural framework and hardscaping components serve as the foundational architecture for all Green Mirage luxury landscape designs, ensuring long-term structural integrity and seamless functional zoning.",
    image: "/images/gallery-backyard.jpg",
    areas: [
      {
        title: "Civil Work, Masonry & Structures",
        text: "Precision masonry works, site grading, structural reinforcement, and concrete framing engineered to anchor expansive residential gardens and commercial facilities safely.",
        image: "/images/service-villa.jpg",
        alt: "Modern villa with a stone terrace, lawn, and pool court",
        points: [
          {
            label: "Plaster Works",
            text: "High-quality plastering solutions for internal and external walls, providing smooth, durable, and weather-proof perimeter boundary finishes.",
          },
          {
            label: "Retaining & Boundary Walls",
            text: "Engineering resilient retaining blocks and boundary feature backdrops built to withstand heavy landscape mass and seasonal shifts.",
          },
          {
            label: "Concrete Framing",
            text: "Forming accurate structural layouts for modern water feature reservoirs, fountain basins, and custom architectural geometric borders.",
          },
        ],
      },
      {
        title: "Interlocking, Paving & Walkways",
        text: "Artistic high-durability circulation footpaths, premium driveways, and courtyard multi-level platforms that naturally guide foot movement across the estate landscape.",
        image: "/images/service-backyard.jpg",
        alt: "Paved courtyard with grass joints, a fire bowl, and a clipped hedge",
        points: [
          {
            label: "Interlocking Paving",
            text: "Premium interlocking stone installations and cobblestone driveway layouts engineered to easily withstand continuous heavy vehicular loads.",
          },
          {
            label: "Stepping Stones & Pathways",
            text: "Strategic geometric configurations utilizing large natural flags, premium granite slate tiles, or elegant stepping stones set in lawn grids.",
          },
        ],
      },
      {
        title: "Pergolas & Shaded Structural Elements",
        text: "Premium engineered structures providing active architectural microclimate shelter, dynamic outdoor shade control, and luxury visual framing.",
        image: "/images/service-pergola.jpg",
        alt: "Shaded pergola beside a pool, with stepping stones and an outdoor counter",
        points: [
          {
            label: "Timber Carpentry Pergolas",
            text: "Custom CNC-routed wooden shade frameworks, traditional treated timber cladding, and premium high-performance softwood accent installations.",
          },
          {
            label: "Premium Aluminum Systems",
            text: "Modern minimalist structures built with integrated powder-coated aluminum, motorized louvers, canvas awnings, and active weather automation loops.",
          },
          {
            label: "Utilities & Media Integration",
            text: "Dedicated internal wiring conduits mapped seamlessly into structural beams to power flush downlights, sound zones, and automated cooling mist loops safely.",
          },
        ],
      },
      {
        title: "Luxury Outdoor Social Lounges",
        text: "Fully functional, weather-proof living environments custom crafted to bring the full sophistication and plush comfort of indoor living spaces directly into the open air.",
        image: "/images/service-lounge.jpg",
        alt: "Timber outdoor lounge with sofas, lanterns, and a shaded deck",
        points: [
          {
            label: "Custom Built-in Seating",
            text: "Bespoke masonry layout couches, permanent architectural stone perimeter benches, and premium water-resistant upholstery frameworks.",
          },
          {
            label: "Specialized Outdoor Kitchens",
            text: "Sophisticated external culinary spaces featuring robust premium barbecue counters, clean weatherized bar hubs, integrated outdoor sinks, and storage lines.",
          },
        ],
      },
    ],
  },
  {
    slug: "landscape",
    title: "Landscape",
    menu: "Planting, Soil & Horticulture Curation",
    text: "Combining advanced scientific soil engineering with high-impact botanical choices to deliver lively, visually spectacular green spaces optimized for the distinct Middle Eastern climate.",
    image: "/images/gallery-entry.jpg",
    areas: [
      {
        title: "Full-Scale Villa & Backyard Landscaping",
        text: "Developing holistic residential landscape themes from initial concept sketching and detailed 3D visualization right through to strict physical execution across the entire property.",
        image: "/images/gallery-backyard.jpg",
        alt: "Backyard lawn, planted beds, and a raised terrace under trees",
        points: [
          {
            label: "Strategic Space Zoning",
            text: "Comprehensive microclimate evaluations to establish thermal protection zones, maximize property privacy, and establish pleasant family gathering hubs.",
          },
          {
            label: "Premium Turf Management",
            text: "Installation of high-durability, kid-safe synthetic turf or premium natural grass lawns optimized for intense regular activity and everyday play.",
          },
        ],
      },
      {
        title: "Specialized Terrace & Balcony Sky Gardens",
        text: "Intimate, space-maximized vertical retreats engineered to seamlessly resolve high-altitude wind currents, structural load constraints, and intense solar exposure.",
        image: "/images/service-terrace.jpg",
        alt: "Rooftop terrace with a planted pergola, palms, and city views",
        points: [
          {
            label: "Weight-Optimized Hardware",
            text: "High-performance, ultra-lightweight modular planters and engineered multi-layer drainage matrices that safeguard underlying structural slabs from moisture.",
          },
          {
            label: "Vertical Green Walls",
            text: "Dynamic custom green walls and cascading flower structures featuring built-in internal automated root-level watering pipelines.",
          },
        ],
      },
      {
        title: "Biophilic Interior Landscapes & Curation",
        text: "Integrating natural flora inside high-ceiling residential atriums, double-height entrances, indoor lightwells, commercial reception hubs, and office common areas.",
        image: "/images/atrium.jpg",
        alt: "Interior courtyard with moss, a timber wall, and planted green screens",
        points: [
          {
            label: "Live Indoor Highlights",
            text: "Deploying magnificent live accent trees (such as Ficus Lyrata or elegant Palms) precisely calibrated to match interior ambient light settings.",
          },
          {
            label: "Artificial Premium Curation",
            text: "High-fidelity, premium artificial botanical green walls and faux tree sets designed for low-maintenance indoor zones.",
          },
        ],
      },
      {
        title: "Professional Horticulture & Long-term Garden Care",
        text: "Consistent, systematic maintenance services managed by specialized experts to protect botanical wellness, soil biome health, and overall aesthetic perfection.",
        image: "/images/maintenance-beds.jpg",
        alt: "Garden crew working soil and planted beds beside a lawn",
        points: [
          {
            label: "Nutrient & Soil Stewardship",
            text: "Complete soil remediation, customized organic fertilizer plans, micro-nutrient conditioning, and proactive pest control cycles.",
          },
          {
            label: "Botanical Care & Pruning",
            text: "Precision structural pruning, systematic seasonal flower bed replanting, and continuous structural hedging to preserve clean architectural lines.",
          },
        ],
      },
    ],
    reference: [
      {
        type: "Natural Collection",
        name: "Bonsai / Olive Trees",
        place: "Premium architectural focal points for central courtyards, entry walkways, and premium planters.",
        image: "/images/natural-plant-bonsai.jpg",
      },
      {
        type: "Natural Collection",
        name: "Ficus Lyrata",
        place: "Excellent indoor biophilic accent; thrives in bright, indirect sunlight within residential lobbies and atriums.",
        image: "/images/natural-plant-ficus.jpg",
      },
      {
        type: "Natural Collection",
        name: "Areca & Bamboo Palms",
        place: "Perfect for creating soft, dense privacy screens along boundary walls, pool boundaries, and side pathways.",
        image: "/images/natural-plant-areca.jpg",
      },
      {
        type: "Natural Collection",
        name: "Bougainvillea",
        place: "Provides vibrant bursts of seasonal color; ideal for climbing pergolas, boundary walls, and sunny balconies.",
        image: "/images/natural-plant-bougainvillea.jpg",
      },
      {
        type: "Natural Collection",
        name: "Frangipani (Plumeria)",
        place: "Signature luxury statement tree; planted as standalone specimens near pool decks and sunlit corners.",
        image: "/images/natural-plant-frangipani.jpg",
      },
      {
        type: "Natural Collection",
        name: "Succulents & Desert Plants",
        place: "Xeriscaping essentials; maximum heat tolerance with minimal water needs, perfect for rock gardens.",
        image: "/images/natural-plant-succulents.jpg",
      },
      {
        type: "Artificial Collection",
        name: "Statement Canopy / Olive",
        place: "Full-canopy fake trees designed for indoor majlis corners, high-ceiling office lobbies, and deep covered alcoves.",
        image: "/images/artificial-plant-tree.jpg",
      },
      {
        type: "Artificial Collection",
        name: "Crimson / White Blossom",
        place: "Adds consistent floral accents to interior receptions, commercial storefronts, and shaded entry vestibules.",
        image: "/images/artificial-plant-crimson.jpg",
      },
      {
        type: "Artificial Collection",
        name: "Showroom Palm / Hanging Color",
        place: "Instant vertical height and vibrant cascading colors for interior walls or balconies with zero maintenance needs.",
        image: "/images/artificial-plant-palm.jpg",
      },
    ],
  },
  {
    slug: "irrigation",
    title: "Irrigation",
    menu: "Automatic Smart Systems & New Technology",
    text: "Pioneering highly automated, conservation-centric irrigation networks that maximize water delivery precision while significantly lowering overall environmental consumption across the UAE.",
    image: "/images/spaces-seasons.jpg",
    areas: [
      {
        title: "Smart Irrigation Network Design & Layout",
        text: "Developing detailed hydraulic system designs that guarantee perfectly balanced water distribution, eliminating dry patches and over-saturated soil zones completely.",
        image: "/images/gallery-entry.jpg",
        alt: "Planted villa court with palms, beds, and a paved drive",
        points: [
          {
            label: "High-Efficiency Distribution",
            text: "Advanced sub-surface smart drip lines and pressure-compensating spray nozzles that keep water evaporation losses down to an absolute minimum.",
          },
          {
            label: "Precision Hydro-Zoning",
            text: "Dividing the property landscape into distinct water-use zones based on specific plant species, sun exposure levels, and soil absorption rates.",
          },
        ],
      },
      {
        title: "Next-Generation Automation & IoT Integration",
        text: "Deploying intelligent, internet-connected control frameworks that autonomously regulate estate watering schedules based on real-time environmental input data.",
        image: "/images/service-terrace.jpg",
        alt: "Planted rooftop terrace with layered planters under a pergola",
        points: [
          {
            label: "Weather-Adaptive Controllers",
            text: "Weather-tracking smart controllers that automatically pause irrigation routines whenever rainfall or unexpected humidity changes occur.",
          },
          {
            label: "Soil Sensors & Leak Detection",
            text: "Digital soil moisture monitors and smart flow sensors that immediately flag system pipeline leaks, protecting properties from unexpected water bills.",
          },
        ],
      },
      {
        title: "Technical System Upkeep & Diagnostics",
        text: "Routine technical assessments and equipment checkups executed by seasoned irrigation technicians to maintain peak system operation all year round.",
        image: "/images/maintenance-beds.jpg",
        alt: "Crew tending soil and planted beds on a maintained garden",
        points: [
          {
            label: "Maintenance & Electro-Flushing",
            text: "Systematic chemical flushing of drip line networks to remove mineral scaling, routine nozzle realignments, and seasonal electronic calibration updates.",
          },
        ],
      },
    ],
  },
  {
    slug: "mep-swimming-pools",
    title: "MEP & Swimming Pools",
    menu: "Mechanical, Electrical, Plumbing",
    text: "Integrating critical engineering utilities, luxury aquatic construction, and advanced electromechanical climate systems seamlessly into modern properties.",
    image: "/images/gallery-pool.jpg",
    areas: [
      {
        title: "Luxury Swimming Pool Construction & Integration",
        text: "Complete turnkey installation and design of custom residential pools, structural decks, and adjacent planting zones, brought together into one fluid space.",
        image: "/images/service-pool.jpg",
        alt: "Long swimming pool beside a pavilion, palms, and a timber deck",
        points: [
          {
            label: "Civil Pool Engineering",
            text: "Custom structural concrete pouring, high-grade waterproofing membranes, premium porcelain tile layouts, and non-slip natural stone coping finishes.",
          },
          {
            label: "Architectural Pool Features",
            text: "Designing modern sunken pool lounges, dynamic swim-up bars, integrated fire-pits, and elegant, soothing waterfall stone features.",
          },
        ],
      },
      {
        title: "Electromechanical & Custom Plumbing Installations",
        text: "Deploying top-tier plumbing setups and commercial-grade mechanical pumps to ensure optimal, long-lasting performance for all water systems.",
        image: "/images/gallery-pool.jpg",
        alt: "Pool edge with waterfall spouts, underwater lights, and a stone water wall",
        points: [
          {
            label: "Pool Pumps & Filtration Systems",
            text: "High-efficiency variable-speed circulation pumps, sand filters, and automated eco-friendly saltwater chlorination systems.",
          },
          {
            label: "Core Plumbing & Sanitary Works",
            text: "Professional water supply pipe mapping, reliable drainage networks, high-pressure booster pumps, and comprehensive sanitary hardware management.",
          },
        ],
      },
      {
        title: "HVAC, Ventilation & Air Filtration Systems",
        text: "Comprehensive design, installation, and regular servicing of heavy-duty HVAC components to ensure excellent climate control and pristine air quality.",
        image: "/images/service-interior.jpg",
        alt: "Finished interior with a planted wall, stone, and warm lighting",
        points: [
          {
            label: "System Engineering & Setup",
            text: "Precision installation of energy-efficient central air conditioning units, clean air duct routing, and advanced ventilation exhaust layouts.",
          },
          {
            label: "Air Quality Maintenance & Repairs",
            text: "Routine filter cleanings, refrigerant top-ups, electrical system checkups, and precise duct disinfection for premium indoor air quality.",
          },
        ],
      },
      {
        title: "Advanced Landscape Illumination & Electrical Works",
        text: "Bespoke low-voltage landscape lighting schemes engineered to completely transform paths, highlight signature plants, and enhance property safety after dark.",
        image: "/images/service-lighting.jpg",
        alt: "Low garden lights lining a wet path at dusk",
        points: [
          {
            label: "Fine Architectural Lighting",
            text: "Energy-efficient, low-voltage solid brass and copper LED fixtures utilizing sophisticated uplighting and moonlighting techniques.",
          },
          {
            label: "Automation & App Controls",
            text: "Smart lighting hubs connected to mobile apps and astronomical timers to set tailored evening lighting themes easily.",
          },
          {
            label: "Safe Electrical System Maintenance",
            text: "Routine electrical safety tests, main breaker inspections, secure wire burial, and replacement of outdated outdoor light fixtures.",
          },
        ],
      },
    ],
  },
  {
    slug: "cleaning-interior-finishes",
    title: "Cleaning & Interior Finishes",
    text: "Premium structural finishing, interior surface transformations, and comprehensive deep cleaning services for luxury residential estates and commercial buildings.",
    image: "/images/service-interior.jpg",
    areas: [
      {
        title: "Custom Carpentry & Premium Wood Flooring",
        text: "High-end interior woodwork, bespoke wooden features, and flawless flooring layouts designed with outstanding style and durability.",
        image: "/images/atrium.jpg",
        alt: "Interior court with a timber slat wall, stone floor, and planting",
        points: [
          {
            label: "Wood Flooring Installations",
            text: "Flawless installation of premium solid hardwood planks, high-durability composite wood tiles, and engineered indoor wood flooring layouts.",
          },
          {
            label: "Fine Finished Carpentry",
            text: "Custom interior wood paneling, fine structural baseboards, unique timber feature walls, and bespoke cabinetry solutions.",
          },
        ],
      },
      {
        title: "Professional Wallpaper & Wall Finish Fixing",
        text: "Expert wallpaper installations utilizing a diverse range of high-end materials, unique textures, and sophisticated modern patterns.",
        image: "/images/service-interior.jpg",
        alt: "Stone and planted interior wall with wood paneling and pendant lights",
        points: [
          {
            label: "Premium Pattern Application",
            text: "Flawless wall leveling, pattern matching, clean edge trimming, and the seamless application of heavy fabric or delicate vinyl wallpaper sets.",
          },
        ],
      },
      {
        title: "Comprehensive Building Cleaning Services",
        text: "All-inclusive, high-standard sanitation and deep cleaning solutions tailored for modern residential properties, large corporate offices, and industrial hubs.",
        image: "/images/maintenance-crew.jpg",
        alt: "Green Mirage crew member clearing a stone entrance beside clipped shrubs",
        points: [
          {
            label: "Deep Site Transformation",
            text: "Thorough post-construction site cleanup, deep pressure washing for external tiles, detailed window washing, and full sanitization of multi-story buildings.",
          },
        ],
      },
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
