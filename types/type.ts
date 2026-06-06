export interface Project {
    id: number;
    title: string;
    category: Exclude<Tab, "All">;
    description: string;
    tags: string[];
    image: string;
    metric: string;
    metricLabel: string;
    link: string;
}

export type Tab = "All" | "Web Design" | "E-Commerce" | "SaaS" | "Branding";