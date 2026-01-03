import { AnimatePresence } from 'framer-motion';
import { ChatButton } from './ChatButton';
import { ChatWindow } from './ChatWindow';
import { useChat } from '@/hooks/useChat';

export function ChatWidget() {
  const { state, toggleChat, sendMessage, clearChat } = useChat();

  return (
    <>
      <ChatButton isOpen={state.isOpen} onClick={toggleChat} />

      <AnimatePresence>
        {state.isOpen && (
          <ChatWindow
            state={state}
            onClose={toggleChat}
            onSend={sendMessage}
            onClear={clearChat}
          />
        )}
      </AnimatePresence>
    </>
  );
}
