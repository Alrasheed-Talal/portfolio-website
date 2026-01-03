import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Languages, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { aboutData } from '@/data/about';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {aboutData.availability}
            </p>
          </motion.div>

          {/* Bio Paragraphs */}
          <motion.div variants={itemVariants} className="mb-12 max-w-4xl mx-auto">
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              {aboutData.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Info Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {/* Education */}
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Education</h3>
                      <p className="text-sm text-muted-foreground">
                        {aboutData.education.degree}
                      </p>
                      <p className="text-sm font-medium mt-1">
                        {aboutData.education.university}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Graduated: {aboutData.education.graduationDate}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Location */}
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Location</h3>
                      <p className="text-sm text-muted-foreground">
                        {aboutData.location}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Open to remote and on-site opportunities
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Languages */}
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Languages className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Languages</h3>
                      {aboutData.languages.map((lang, index) => (
                        <div key={index} className="mb-2">
                          <p className="text-sm font-medium">{lang.language}</p>
                          <p className="text-xs text-muted-foreground">
                            {lang.proficiency}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Availability */}
            <motion.div variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Status</h3>
                      <p className="text-sm font-medium text-primary">
                        {aboutData.availability}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        Ready to start immediately
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Key Strengths */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-center">Key Strengths</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aboutData.keyStrengths.map((strength, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                      <p className="text-sm">{strength}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
