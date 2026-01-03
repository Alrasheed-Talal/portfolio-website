import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Experience } from '@/types/experience';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="pt-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">{experience.position}</h3>
              </div>
              <p className="text-lg font-medium text-primary">{experience.company}</p>
            </div>
            <Badge variant="secondary" className="self-start">
              {experience.type}
            </Badge>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{experience.startDate} - {experience.endDate}</span>
              <span className="text-xs">({experience.duration})</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{experience.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-4">{experience.description}</p>

          {/* Responsibilities */}
          <div className="mb-4">
            <h4 className="font-semibold text-sm mb-2">Key Responsibilities:</h4>
            <ul className="space-y-1">
              {experience.responsibilities.map((resp, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="flex-1">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div className="mb-4">
            <h4 className="font-semibold text-sm mb-2">Achievements:</h4>
            <ul className="space-y-1">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="flex-1">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold text-sm mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
