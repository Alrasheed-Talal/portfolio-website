import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RefreshCw, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { QuickQuestions } from './QuickQuestions';
import { ChatState } from '@/types/chat';

interface ChatWindowProps {
  state: ChatState;
  onClose: () => void;
  onSend: (message: string) => void;
  onClear: () => void;
}

export function ChatWindow({ state, onClose, onSend, onClear }: ChatWindowProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [state.messages]);

  const showQuickQuestions = state.messages.length === 0 && !state.isLoading;
  const messageCount = state.messageCount;
  const maxMessages = 10;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed bottom-24 right-6 z-50 w-[380px] max-h-[600px] sm:max-h-[700px]"
    >
      <Card className="shadow-2xl flex flex-col h-full max-h-[600px]">
        {/* Header */}
        <CardHeader className="border-b flex-shrink-0">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Chat with Talal's AI</CardTitle>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={onClear}
                disabled={state.messages.length === 0}
                title="Clear chat"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Ask me anything about Talal's experience, skills, or projects!
          </p>
          {messageCount > 0 && (
            <div className="text-xs text-muted-foreground mt-1">
              {messageCount}/{maxMessages} messages used
            </div>
          )}
        </CardHeader>

        {/* Messages */}
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
          {showQuickQuestions ? (
            <QuickQuestions onQuestionClick={onSend} />
          ) : (
            <>
              {state.messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}

              {/* Loading Indicator */}
              {state.isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                  </div>
                  <div className="flex-1 rounded-lg px-4 py-2 bg-muted">
                    <p className="text-sm text-muted-foreground">Thinking...</p>
                  </div>
                </motion.div>
              )}

              {/* Error Display */}
              <AnimatePresence>
                {state.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg"
                  >
                    <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                    <p className="text-sm text-destructive">{state.error}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </>
          )}
        </CardContent>

        {/* Input */}
        <div className="border-t p-4 flex-shrink-0">
          <ChatInput
            onSend={onSend}
            disabled={state.isLoading || messageCount >= maxMessages}
          />
          {messageCount >= maxMessages && (
            <p className="text-xs text-destructive mt-2">
              Message limit reached. Refresh the page to continue chatting.
            </p>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
