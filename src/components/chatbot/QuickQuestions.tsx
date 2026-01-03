import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { quickQuestions } from '@/data/quickQuestions';

interface QuickQuestionsProps {
  onQuestionClick: (question: string) => void;
}

export function QuickQuestions({ onQuestionClick }: QuickQuestionsProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground text-center mb-4">
        Quick questions you can ask:
      </p>
      {quickQuestions.map((question, index) => (
        <motion.div
          key={question}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Button
            variant="outline"
            className="w-full justify-start text-left h-auto py-3"
            onClick={() => onQuestionClick(question)}
          >
            <span className="text-sm">{question}</span>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
