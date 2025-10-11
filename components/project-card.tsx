import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <Card className="hover:shadow-lg transition">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-2 text-muted-foreground">{description}</p>
        <a href={link} target="_blank" className="text-primary underline">
          View Project →
        </a>
      </CardContent>
    </Card>
  );
}
