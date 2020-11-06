import { Project } from "./project-card";

export const projects: Project[] = [
    {
        text:"Full-stack project with full MERN stack of technologies!\nIt can be customized for storing lots of videos, photos; its structure is suitable for the majority of situations. Moreover, after the completion of the project I successfully deployed and configured all of its parts to remote server!!!😎😎😎",
        image:'/pictures/web-storage.png',
        title:'Web Storage',
        src: ['https://github.com/MedvedMichael/web-storage-client', 'https://github.com/MedvedMichael/web-storage']
    },
    {
        text:"Telegram Bot that is created for people who want to learn English or other languages!\nIt's based on the famous method of using flash cards - cards bearing information on both sides, which is intended to be used as an aid in memorization",
        image:'/pictures/flash-cards.png',
        title:'Flash Cards Bot',
        src: ['https://github.com/MedvedMichael/flash-cards-bot']
    },
    {
        text:"Yeah, this site is completely created by me!)))\nI used Next.js as a framework for frontend using SSR (Server-Side Rendering) and Firebase from Google to store my data.\nAlso I didn't use any CSS-libraries like Bootstrap on MaterialUI, and I implemented the dark-mode feature using styled components (that was my dream😉)!!!",
        image:'/pictures/nextjs.jpg',
        title:'My web-site',
        src: ['https://github.com/MedvedMichael/mph-web-site']
    },
    // {
    //     text:"Full-stack project with full MERN stack of technologies! It can be customized for storing lots of videos, photos; its structure is suitable for the majority of situations",
    //     image:'/pictures/web-storage.png',
    //     title:'Web Storage'
    // }
]