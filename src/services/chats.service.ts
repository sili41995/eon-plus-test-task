import HttpService from './http.service';
import { Chats } from '@/types/chats.types';

class ChatsService extends HttpService {
  constructor() {
    super();
  }

  async getAll(): Promise<Chats> {
    const response = await this.get<Chats>({
      url: 'chats',
    });

    return response.data;
  }
}

const chatsService = new ChatsService();

export default chatsService;
