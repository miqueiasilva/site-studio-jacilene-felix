
export interface Service {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    duration: string;
    price: string;
    installments?: string;
    extra?: string;
}

export interface TeamMember {
    image: string;
    name: string;
    role: string;
    bio: string;
    tags: string[];
    experience: string;
}

export interface ChatMessage {
    role: 'user' | 'model' | 'system';
    content: string;
}

export interface CareTip {
    title: string;
    description: string;
    details: string[];
}

export interface FAQItem {
    question: string;
    answer: string;
}
