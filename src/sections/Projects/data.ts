type Project = {
    title: string;
    description: string;
    tech?: string[];
    status?: "Private beta" | "Development" | "Production";
    url?: string;
}

export const FEATURED: Project[] = [
    {
        title: "MRTest",
        description: "An app for creating custom tests with AI-powered explanations, making learning more interactive and complete.",
        tech: ["Astro", "TypeScript", "PostgreSQL", "AI"],
        status: "Private beta",
        url: "https://mrtest.app",
    },
    {
        title: "Ledger",
        description: "A personal finance manager that helps you track expenses, set budgets, and gain insights into your financial health.",
        tech: ["Next.js", "TypeScript", "PostgreSQL"],
        status: "Development",
        url: "https://mony.app",
    },
    {
        title: "VerLaCarta",
        description: "A tool for restaurants to easily build and manage their digital menus, complete with customization and QR code access.",
        tech: ["Astro", "Strapi", "TypeScript", "PostgreSQL", "AI"],
        status: "Development",
        url: "https://verlacarta.com",
    },
]


export const TOOLS: Project[] = [
    {
        title: "astro-utils",
        description: "A set of utilities for Astro",
        url: "https://github.com/barcia/astro-utils",
    },
    {
        title: "corecss",
        description: "A CSS framework",
        url: "https://github.com/barcia/corecss",
    },
    {
        title: "lab",
        description: "A set of experiments and small UI components",
        url: "https://github.com/barcia/lab",
    },
    {
        title: "maptools",
        description: "A set of tools to work with maps",
        url: "https://github.com/barcia/maptools",
    },
    {
        title: "swibe",
        description: "A slide menu",
        url: "https://github.com/barcia/swibe",
    },

]