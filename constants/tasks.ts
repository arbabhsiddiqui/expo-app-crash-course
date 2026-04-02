export type TaskStatus = "All" | "Completed" | "In Progress" | "To-do";

export type TaskIcon = {
    name: string;
    backgroundColor: string;
};

export type Task = {
    id: string;
    category: string;
    title: string;
    time: string;
    status: TaskStatus;
    icon: TaskIcon;
};

export const TASKS: Task[] = [
    {
        id: "1",
        category: "Grocery shopping app design",
        title: "Market Research",
        time: "10:00 AM",
        status: "Completed",
        icon: { name: "grid", backgroundColor: "#FF6B8A" },
    },
    {
        id: "2",
        category: "Grocery shopping app design",
        title: "Competitive Analysis",
        time: "12:00 PM",
        status: "In Progress",
        icon: { name: "grid", backgroundColor: "#FF6B8A" },
    },
    {
        id: "3",
        category: "Uber Eats redesign challenge",
        title: "Create Low-fidelity Wireframe",
        time: "07:00 PM",
        status: "To-do",
        icon: { name: "arrow-down-circle", backgroundColor: "#4ADE80" },
    },
    {
        id: "4",
        category: "About design sprint",
        title: "How to pitch a Design Sprint",
        time: "09:00 PM",
        status: "To-do",
        icon: { name: "bookmark", backgroundColor: "#FBBF24" },
    },
    {
        id: "5",
        category: "Mobile App Redesign",
        title: "User Testing Session",
        time: "11:00 AM",
        status: "In Progress",
        icon: { name: "users", backgroundColor: "#8B5CF6" },
    },
    {
        id: "6",
        category: "Mobile App Redesign",
        title: "Prototype Development",
        time: "02:30 PM",
        status: "In Progress",
        icon: { name: "layers", backgroundColor: "#8B5CF6" },
    },
    {
        id: "7",
        category: "Website Modernization",
        title: "Design System Setup",
        time: "08:00 AM",
        status: "Completed",
        icon: { name: "palette", backgroundColor: "#06B6D4" },
    },
    {
        id: "8",
        category: "Website Modernization",
        title: "Frontend Development",
        time: "04:00 PM",
        status: "To-do",
        icon: { name: "code", backgroundColor: "#06B6D4" },
    },
    {
        id: "9",
        category: "Branding Project",
        title: "Logo Variations",
        time: "10:30 AM",
        status: "Completed",
        icon: { name: "star", backgroundColor: "#EC4899" },
    },
    {
        id: "10",
        category: "Branding Project",
        title: "Brand Guidelines Documentation",
        time: "03:00 PM",
        status: "In Progress",
        icon: { name: "file-text", backgroundColor: "#EC4899" },
    },
];

export const FILTER_OPTIONS = [
    "All",
    "To-do",
    "In Progress",
    "Completed",
] as const;

export type FilterOptions = (typeof FILTER_OPTIONS)[number];