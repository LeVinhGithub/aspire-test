


export type MessageModel = {
      id: number;
      created_at: Date;
      updated_at: Date;
      applicant_id: number;
      text: string;
      attachment: any;
      reply_to_message_id: number;
      company_id: number;
      is_from_applicant: boolean;
      is_read: boolean;
  
}