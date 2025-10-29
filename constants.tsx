
import React from 'react';
import { Service, TeamMember, CareTip, FAQItem } from './types';

export const services: Service[] = [
    {
        image: 'https://i.ibb.co/RTHrL8fc/IMG-4158-1.jpg',
        title: 'Micropigmentação de Sobrancelhas',
        subtitle: 'Técnica Fio a Fio',
        description: 'Técnica que desenha fios realistas, criando sobrancelhas naturais e simétricas.',
        tags: ['Fio a Fio', 'Magic Shadow', 'Técnica Híbrida'],
        duration: '2-3 horas',
        price: '549,90',
        installments: '12x de R$ 49,90',
    },
    {
        image: 'https://i.ibb.co/WW5282HM/camera-Roll-Temp-Image-6.jpg',
        title: 'Micropigmentação de Lábios',
        subtitle: 'Realce Natural',
        description: 'Realça a cor natural dos lábios com neutralização e implantação de cor.',
        tags: ['Neutralização', 'Implantação de Cor', 'Retoque Incluído'],
        duration: '2-3 horas',
        price: '599,90',
        installments: '12x de R$ 54,16',
    },
    {
        image: 'https://i.ibb.co/WLRjLzN/ee4544495cd8267c.png',
        title: 'Brow Lamination',
        subtitle: 'Sobrancelhas Alinhadas',
        description: 'Alinha e fixa os fios das sobrancelhas para um look mais definido.',
        tags: ['Alinhamento', 'Fixação', 'Durabilidade'],
        duration: '1 hora',
        price: '99,90',
        extra: 'Com tintura R$ 130,00',
    },
    {
        image: 'https://i.ibb.co/5WqdHtF4/Tratamento-de-estria-1024x642.png',
        title: 'Evolution Skin',
        subtitle: 'Pele Renovada',
        description: 'Tratamento avançado para vasos e rejuvenescimento da pele com tecnologia de ponta.',
        tags: ['Rejuvenescimento', 'Tecnologia'],
        duration: '1-2 horas',
        price: '280,00',
    },
    {
        image: 'https://i.ibb.co/cXQYx1f6/20240928-213503.jpg',
        title: 'Remoção',
        subtitle: 'Correção Segura',
        description: 'Remoção a laser segura e eficaz de micropigmentação e tatuagens com Jéssica Félix, nossa especialista em correções.',
        tags: ['Laser', 'Segurança', 'Tatuagem'],
        duration: '1 hora',
        price: '200,00',
    },
];

export const teamMembers: TeamMember[] = [
    {
        image: 'https://i.ibb.co/XrtcD83R/Untitled-design-1.png',
        name: 'Jacilene Félix',
        role: 'Proprietária & Especialista em Micropigmentação',
        bio: 'Especialista em micropigmentação com mais de 8 anos de experiência, dedicada a realçar a beleza natural de cada cliente.',
        tags: ['Micropigmentação', 'Sobrancelhas', 'Lábios'],
        experience: '8+ anos',
    },
    {
        image: 'https://i.ibb.co/3mX5cFqd/Imagem-do-Whats-App-de-2023-08-24-s-14-29-18.jpg',
        name: 'Jéssica Félix',
        role: 'Lash Designer & Expert em Remoção a Laser',
        bio: 'Especialista em design de cílios e remoção segura de tatuagens e micropigmentação com técnicas avançadas a laser.',
        tags: ['Lash Designer', 'Remoção de Tatuagem a Laser', 'Remoção de Micropigmentação'],
        experience: '5+ anos',
    },
    {
        image: 'https://i.ibb.co/9Hyyq2xZ/46f4b01373ad67cd28c4d18de7671b9d.webp',
        name: 'Elda Priscila',
        role: 'Farmacêutica Esteta & Cosmetóloga',
        bio: 'Farmacêutica especializada em estética e cosmetologia, oferecendo tratamentos faciais e corporais personalizados.',
        tags: ['Limpeza de Pele', 'Peelings', 'Massagem'],
        experience: '6+ anos',
    },
    {
        image: 'https://i.ibb.co/hRG0ZQyt/2f43093c085b29f55aedd936f13156f7.webp',
        name: 'Graziela Oliveira',
        role: 'Designer de Sobrancelhas & Secretária',
        bio: 'Especialista em design de sobrancelhas com olhar atento aos detalhes e excelente atendimento ao cliente.',
        tags: ['Design de Sobrancelhas', 'Atendimento ao Cliente', 'Agendamentos'],
        experience: '4+ anos',
    },
    {
        image: 'https://i.ibb.co/YFTb6NB6/herlon.png',
        name: 'Herlon Gonçalves',
        role: 'Fisioterapeuta & Massoterapeuta',
        bio: 'Profissional com formação nacional e internacional em massoterapia, também atuando na fisioterapia com foco em reabilitação, traumatologia, ortopedia e saúde de diferentes faixas etárias, do infantil ao idoso. Especialista em coluna e com experiência na área desportiva, atuando tanto na prevenção quanto no pós-lesão.',
        tags: ['Quiropraxia', 'Ventosaterapia', 'Liberação Miofascial', 'Massagem Desportiva', 'Massagem Terapêutica', 'Massagem Quick', 'Massagem Tui Na', 'Massagem Thai', 'Drenagem Linfática', 'Reflexologia Podal'],
        experience: '6+ anos',
    },
    {
        image: 'https://i.ibb.co/SDzNLs99/Gemini-Generated-Image-xdimjrxdimjrxdim.png',
        name: 'Gleizia Santos',
        role: 'Técnica em Epilação',
        bio: 'Técnica especializada em epilação com foco no conforto e satisfação do cliente.',
        tags: ['Epilação Feminina', 'Epilação Masculina', 'Cuidados Especiais'],
        experience: '4+ anos',
    },
];

export const results = [
    { image: 'https://i.ibb.co/1fMpFR4m/Imagem-do-Whats-App-de-2024-01-26-s-17-06-51-65d1cea3-Copia.jpg', title: 'Micropigmentação Natural', description: 'Resultado natural e harmonioso que realça a beleza única de cada cliente.' },
    { image: 'https://i.ibb.co/8HGFZ61/Whats-App-Image-2025-10-25-at-17-54-32.jpg', title: 'Limpeza de Pele Profunda', description: 'Pele limpa, renovada e livre de impurezas.' },
    { image: 'https://i.ibb.co/1fGw8xsq/Whats-App-Image-2025-10-25-at-18-13-53-1.jpg', title: 'Lábios Revitalizados', description: 'Cor e contorno definidos para um sorriso mais confiante.' },
    { image: 'https://i.ibb.co/yBPPSNFp/Whats-App-Image-2025-10-25-at-18-10-02.jpg', title: 'Sobrancelhas Perfeitas', description: 'Design que valoriza o olhar e a expressão facial.' },
    { image: 'https://i.ibb.co/cXQYx1f6/20240928-213503.jpg', title: 'Remoção Bem-sucedida', description: 'Pele renovada e pronta para um novo procedimento.' },
];

export const careTips: CareTip[] = [
    { 
        title: 'Cuidados Pré-Procedimento', 
        description: 'Saiba como se preparar adequadamente para sua sessão de micropigmentação.',
        details: [
            'Evite o consumo de cafeína, álcool e medicamentos anticoagulantes 24 horas antes do procedimento.',
            'Venha com a pele limpa e sem maquiagem na área a ser tratada.',
            'Hidrate bem a pele nos dias que antecedem a sessão para garantir melhor fixação do pigmento.',
            'Não realize procedimentos estéticos agressivos na região, como peelings, uma semana antes.'
        ]
    },
    { 
        title: 'Pós-Cuidados Essenciais', 
        description: 'Dicas importantes para garantir a melhor cicatrização e durabilidade.',
        details: [
            'Não molhe a área micropigmentada nas primeiras 24 horas.',
            'Aplique a pomada cicatrizante recomendada pela profissional de 2 a 3 vezes ao dia.',
            'Evite exposição solar direta, piscinas, saunas e mar por pelo menos 15 dias.',
            'Não coce, esfregue ou remova as casquinhas que se formarem. Deixe que elas caiam naturalmente.',
            'Evite o uso de maquiagem e ácidos na área tratada durante o período de cicatrização.'
        ]
    },
    { 
        title: 'Manutenção e Retoque', 
        description: 'Como manter seus resultados sempre perfeitos com os cuidados adequados.',
        details: [
            'Use protetor solar com alto FPS na área micropigmentada diariamente para evitar o desbotamento.',
            'Evite o uso de ácidos e produtos clareadores diretamente sobre as sobrancelhas ou lábios.',
            'Mantenha a pele sempre bem hidratada para preservar a vivacidade da cor.',
            'Agende seu retoque, geralmente recomendado entre 30 e 45 dias após o procedimento inicial, e depois anualmente.'
        ]
    },
];

export const faqData: FAQItem[] = [
    {
        question: 'Qual a durabilidade da micropigmentação de sobrancelhas?',
        answer: 'A durabilidade varia de 8 a 18 meses, dependendo do tipo de pele, cuidados pós-procedimento e estilo de vida. Peles oleosas tendem a ter uma durabilidade menor. Recomendamos um retoque anual para manter a cor e o design sempre vibrantes.'
    },
    {
        question: 'O procedimento de micropigmentação dói?',
        answer: 'Utilizamos anestésicos tópicos de alta qualidade para minimizar qualquer desconforto. A maioria das nossas clientes relata sentir uma sensação leve e totalmente suportável durante o procedimento.'
    },
    {
        question: 'Quais são os cuidados necessários após a micropigmentação labial?',
        answer: 'É crucial manter os lábios hidratados com a pomada recomendada, evitar exposição solar, alimentos muito quentes ou ácidos e não remover as casquinhas que se formam. Todos os cuidados detalhados serão explicados pela profissional no dia do procedimento.'
    },
    {
        question: 'O Brow Lamination estraga os fios da sobrancelha?',
        answer: 'Não, quando realizado por um profissional qualificado e com produtos de qualidade, o Brow Lamination é seguro. O procedimento inclui uma etapa de hidratação e nutrição para garantir que os fios permaneçam saudáveis.'
    },
    {
        question: 'Como funciona a remoção a laser?',
        answer: 'A remoção a laser utiliza pulsos de luz para quebrar o pigmento da tatuagem ou micropigmentação em partículas menores, que são então eliminadas pelo sistema imunológico do corpo. O número de sessões varia dependendo do pigmento, profundidade e cor.'
    },
    {
        question: 'Como posso agendar um horário?',
        answer: 'Você pode agendar facilmente através do nosso botão "Agendar Agora", que te levará para o nosso sistema de agendamento online. Você também pode entrar em contato pelo WhatsApp para tirar dúvidas ou falar com nossa assistente virtual.'
    },
];
