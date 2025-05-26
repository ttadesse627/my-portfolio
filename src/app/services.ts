export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string | undefined;
    githubUrl: string | undefined;
    liveUrl: string | undefined;
    technologies: string[];
    features: string[];
    featured: boolean;
}

export const formatDate = (year: number, month: number) => {
  const date = new Date(year, month);
  const monthName = date.toLocaleString("default", { month: "long" });
  return `${monthName} ${year}`;
};