export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface ChatState {
  messages: ChatMessage[];
  isOpen: boolean;
  isLoading: boolean;
  messageCount: number;
  error: string | null;
}

export interface ApiChatRequest {
  messages: Omit<ChatMessage, 'id' | 'timestamp'>[];
}

export interface ApiChatResponse {
  message: string;
  error?: string;
}
