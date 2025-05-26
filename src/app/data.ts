import { Project } from "./services";

export const data: Project[] =[
    {
      id: 1,
      title: "Employment Agency System",
      imageUrl: "/profile.jpg",
      description: "An API that is built using Asp.Net Core and MySQL database using EF Core.",
      technologies: ['ASP.NET Core', 'EF Core', 'SignalR', 'MySQL'],
      features: [
        "User authentication and permission-based authorization",
        "Real-time search",
        "Flexible Reports Generation",
      ],
      liveUrl: undefined,
      githubUrl: "https://github.com/ttadesse627/smartagency",
      featured: true,
    },
    {
      id: 2,
      title: "Class Scheduling App",
      imageUrl: undefined,
      description: "A class scheduling app that generates a schedule for a sections of institute.",
      technologies: ['ASP.NET Core', 'EF Core', 'MySQL'],
      features: [
        "Minimized conflicts",
        "User authentication and permission-based authorization",
      ],
      liveUrl: undefined,
      githubUrl: "https://github.com/ttadesse627/ClassSchedulerApp",
      featured: false,
    },
];

export const skills = ["Asp.Net Core", "SQL", "React", "Angular", "Git"];

