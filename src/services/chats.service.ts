import {
  Chats,
  IConnectSuccessRes,
  IPhone,
  ISuccessMessageRes,
  IVerifyCode,
  Messages,
} from '@/types/chats.types';
import HttpService from './http.service';

class ChatsService extends HttpService {
  constructor() {
    super();
  }

  async connect(data: IPhone): Promise<IConnectSuccessRes> {
    const response = await this.post<IConnectSuccessRes, IPhone>({
      url: 'telegram/connect',
      data,
    });

    return response.data;
  }

  async verify(data: IVerifyCode): Promise<ISuccessMessageRes> {
    const response = await this.post<ISuccessMessageRes, IVerifyCode>({
      url: 'telegram/verify',
      data,
    });

    return response.data;
  }

  async getAll(): Promise<Chats> {
    const response = await this.get<Chats>({
      url: 'telegram/chats',
    });

    return response.data;
  }

  async getMessagesByChatId(chatId: string): Promise<Messages> {
    const response = await this.get<Messages>({
      url: `telegram/messages/${chatId}`,
    });

    return response.data;
  }

  async disconnect(): Promise<ISuccessMessageRes> {
    const response = await this.post<ISuccessMessageRes, undefined>({
      url: 'telegram/disconnect',
    });

    return response.data;
  }
}

const chatsService = new ChatsService();

export default chatsService;
