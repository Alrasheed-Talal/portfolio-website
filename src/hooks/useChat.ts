import { useState, useEffect, useCallback } from 'react';
import { ChatMessage, ChatState } from '@/types/chat';
import { sendChatMessage } from '@/lib/api';

const MAX_MESSAGES = 10;
const STORAGE_KEY = 'portfolio_chat_state';

export function useChat() {
  const [state, setState] = useState<ChatState>(() => {
    // Load from session storage
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        // If parsing fails, return default state
      }
    }
    return {
      messages: [],
      isOpen: false,
      isLoading: false,
      messageCount: 0,
      error: null,
    };
  });

  // Save to session storage whenever state changes
  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const toggleChat = useCallback(() => {
    setState(prev => ({ ...prev, isOpen: !prev.isOpen, error: null }));
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    // Check rate limit
    if (state.messageCount >= MAX_MESSAGES) {
      setState(prev => ({
        ...prev,
        error: `You've reached the maximum of ${MAX_MESSAGES} messages per session. Please refresh the page if you'd like to continue chatting.`,
      }));
      return;
    }

    // Add user message
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content,
      timestamp: Date.now(),
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
      error: null,
      messageCount: prev.messageCount + 1,
    }));

    try {
      // Send to API
      const allMessages = [...state.messages, userMessage];
      const responseText = await sendChatMessage(allMessages);

      // Add assistant response
      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: responseText,
        timestamp: Date.now(),
      };

      setState(prev => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
        isLoading: false,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to send message',
      }));
    }
  }, [state.messages, state.messageCount]);

  const clearChat = useCallback(() => {
    setState({
      messages: [],
      isOpen: false,
      isLoading: false,
      messageCount: 0,
      error: null,
    });
    sessionStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    state,
    toggleChat,
    sendMessage,
    clearChat,
  };
}
