import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all duration-300 group">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold text-primary/20 group-hover:scale-110 transition-transform duration-300">
              {project.title.charAt(0)}
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="shadow-md">
              {project.category}
            </Badge>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="line-clamp-1 group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1">
          {/* Technologies */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>
          </div>

          {/* Key Highlights */}
          <div>
            <h4 className="text-sm font-semibold mb-2">Key Highlights:</h4>
            <ul className="space-y-1">
              {project.highlights.slice(0, 3).map((highlight, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="flex-1">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>

        <CardFooter className="flex gap-2 pt-4 border-t">
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild className="flex-1">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button variant="default" size="sm" asChild className="flex-1">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
