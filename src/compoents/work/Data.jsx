import Work1 from "../../assets/work1.jpg"
import Work2 from "../../assets/work2.jpg"
import Work3 from "../../assets/work3.jpg"
import Work4 from "../../assets/work4.jpg"
import Work5 from "../../assets/work5.jpg"
import Work6 from "../../assets/work5.jpg"

export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: 'TabiNow',
        description: 'A few clicks to generate and customize travel itineraries.',
        link: 'https://tabinow.tours/',
        github: 'https://github.com/joycehwchan/tabinow',
        category: 'web',
        role: 'Front-end Lead',
        used: 'HTML/Sass, Javascript, Ruby on Rails, Devise, Pundit, APIs, Cloudinary, Mapbox, Figma'
    },
    {
        id: 2,
        image: Work2,
        title: 'MinaNoka',
        description: 'Rent a farming field to experience rural Japan.',
        link: 'http://www.minanoka.com/',
        github: 'https://github.com/joycehwchan/minanoka',
        category: 'web',
        role: 'Lead Developer',
        used: 'HTML/CSS, Bootstrap, Ruby on Rails, Devise, Cloudinary, Mapbox, Figma'
    },
    {
        id: 3,
        image: Work3,
        title: 'Portfolio',
        description: 'My first React website. Version 3.0 of my personal portfolio website.',
        link: 'https://github.com/joycehwchan',
        github: 'https://github.com/joycehwchan',
        category: 'design',
        role: 'Front-end Developer, UI Designer',
        used: 'Figma, React, CSS'
    },
    {
        id: 4,
        image: Work4,
        title: 'Longest Word Game',
        description: 'Description',
        link: 'https://github.com/joycehwchan',
        github: 'https://github.com/joycehwchan',
        category: 'fun',
        role: 'Full-stack Developer',
        used: 'HTML, CSS, Bootstrap, Javascript'
    },
    {
        id: 5,
        image: Work5,
        title: 'Wagon Race',
        description: 'Description',
        link: 'https://joycehwchan.github.io/lewagon-wagon-race/',
        github: 'https://github.com/joycehwchan/lewagon-wagon-race',
        category: 'fun',
        role: 'Full-stack developer',
        used: 'HTML, CSS, Javascript'
    },
]

export const projectsNav = [
    {name: 'all'},
    {name: 'web'},
    {name: 'design'},
    {name: 'fun'},
]