export type ChatType = 'Chat' | 'Channel' | 'User';

export interface IChat {
  id: number;
  name: string;
  type: ChatType;
}

export type Chats = IChat[];

export type ChatsOrNull = Chats | null;

export type ChatDetailsOrNull = IChat | null;

export interface IPhone {
  phone: string;
}

export interface IConnectSuccessRes {
  status: string;
}

export interface ICode {
  code: string;
}

export interface IVerifyCode extends ICode, IPhone {}

export interface ISuccessMessageRes {
  success: boolean;
}

export interface IMessage {
  date: string;
  id: number;
  sender_id: number;
  text: string;
}

export type Messages = IMessage[];

export type MessagesOrNull = Messages | null;
