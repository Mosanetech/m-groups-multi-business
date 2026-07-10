import { Project } from "@/types/project";

export const PROJECTS: Project[] = [

{
    slug:"mgroups",

    title:"M Groups Website",

    shortDescription:
        "Corporate website for M Groups.",

    description:
        "Professional multi-service company website built with Next.js.",

    image:"/images/projects/project1.jpg",

    gallery:[
        "/images/projects/project1.jpg",
        "/images/projects/project2.jpg",
    ],

    category:"Website",

    featured:true,

    technologies:[
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma"
    ],

    client:"M Groups",

    completed:"July 2026",

    website:"https://mgroupsmw.com",
},

{
    slug:"campus-network",

    title:"Campus Network Installation",

    shortDescription:
        "Enterprise campus network.",

    description:
        "Cisco based LAN with VLANs, routing, DHCP and wireless access.",

    image:"/images/projects/project3.jpg",

    gallery:[
        "/images/projects/project3.jpg"
    ],

    category:"Networking",

    featured:true,

    technologies:[
        "Cisco",
        "Packet Tracer",
        "VLAN",
        "OSPF"
    ],

    client:"University",

    completed:"June 2026",
}

];