export interface IChat {
  id: number;
  name: string;
  type: 'Chat' | 'Channel';
}

export type Chats = IChat[];

export type ChatsOrNull = Chats | null;

export interface IPhone {
  phone: string;
}
