export interface EmailTemplate {
  subject: string;
  heading: string;
  content: {
    greeting?: string;
    mainText: string[];
    sections?: {
      title: string;
      items: string[];
    }[];
    closing?: string;
    signature?: string;
  };
  variables: string[]; // List of variable names that can be used in the template
}

export interface EmailVariables {
  [key: string]: string | number;
}

export type EmailTemplateType = 'waitlist' | 'agentSubmission' | 'welcome' | 'notification';
