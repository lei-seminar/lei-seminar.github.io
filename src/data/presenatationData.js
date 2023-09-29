import presentation_sep_27 from '../assets/Contrastive_Learning_Talk_from_Beamer.pdf'

export const DATE =  'Date',
            TITLE = 'Presentation Title',
            SPEAKER = 'Speaker',
            AFFILIATION = 'Affiliation',
            PAPERS =  'Relevant Papers'

export const TABLE_HEADERS = [
    DATE, TITLE, SPEAKER, AFFILIATION, PAPERS,
];

export const ENTRIES = [
    {
         "Date" : '09/27/2023',
         "Presentation Title": "Theory of Contrastive Learning",
         "Speaker": "Weili Cao",
         "Affiliation": "UCSD LEI Research",
         "Relevant Papers": [
             ['A Simple Framework for Contrastive Learning of Visual Representations', "https://arxiv.org/abs/2002.05709"],
             ['SimCSE: Simple Contrastive Learning of Sentence Embeddings', "https://arxiv.org/abs/2104.08821"],
             ['Understanding Contrastive Representation Learning through Alignment and Uniformity on the Hypersphere','https://arxiv.org/abs/2005.10242'],
             ['A Theoretical Analysis of Contrastive Unsupervised Representation Learning', 'https://arxiv.org/abs/1902.09229']

         ],
    }
];
