import { ChatMessage, ApiChatResponse } from '@/types/chat';

export const sendChatMessage = async (
  messages: ChatMessage[]
): Promise<string> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: messages.map(msg => ({
          role: msg.role,
          content: msg.content
        }))
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiChatResponse = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    return data.message;
  } catch (error) {
    console.error('Chat API error:', error);
    throw new Error('Failed to send message. Please try again.');
  }
};
