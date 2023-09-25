import presentation_sep_20 from '../assets/LEI_Presentation_September_20.pdf'

export const DATE =  'Date',
            TITLE = 'Presentation Title',
            SPEAKER = 'Speaker',
            AFFILIATION = 'Affiliation',
            PAPERS =  'Relevant Papers',
            SLIDES = 'Slides';

export const TABLE_HEADERS = [
    DATE, TITLE, SPEAKER, AFFILIATION, PAPERS, SLIDES
];

export const ENTRIES = [
    {
         "Date" : '27th September 2023',
         "Presentation Title": "To Be filled",
         "Speaker": "Weili Cao",
         "Affiliation": "UCSD LEI Research",
         "Relevant Papers": [
             ['Sample Paper', "https://ieeexplore.ieee.org/abstract/document/4061472?casa_token=GIzC5gY9jPMAAAAA:hvYmgkmdmvdLpoDYlfmInq-7XpvxereCwP4-N7B5-6jMC-4rjLfTNwryjZAabiLcJCSXxLmFBw"],
             ['Sample Paper 2', "https://bmcmedinformdecismak.biomedcentral.com/articles/10.1186/1472-6947-6-23"]
         ],
         "Slides": presentation_sep_20
    }
];
