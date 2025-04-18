type TService = {
    id: number
    image: string
    title: string;
    description: string
}

const ServicesList: TService[] = [
    {
        id: 1,
        image: '/images/service/1.png',
        title: 'VR Development',
        description: "From concept to creation, our team of VR developers will bring your vision to life."
    },

    {
        id: 2,
        image: '/images/service/2.png',
        title: 'VR Design',
        description: "Our talented VR designers will create immersive and engaging environments that will captivate your audience."
    },
   
    {
        id: 3,
        image: '/images/service/3.png',
        title: 'VR Consulting',
        description: "Our VR consultants will work with you to ensure that your VR experience meets your goals and exceeds your expectations."
    },
    
    {
        id: 4,
        image: '/images/service/4.png',
        title: 'VR Games',
        description: "We offer a wide selection of VR games that are suitable for players of all ages and skill levels."
    },

    {
        id: 5,
        image: '/images/service/5.png',
        title: 'VR Events',
        description: "Make your next event unforgettable with our VR event services."
    },

    {
        id: 6,
        image: '/images/service/6.png',
        title: 'VR Entertainment',
        description: "reate a VR escape room, or offer VR experiences at a theme park, we have the expertise and experience to make it happen."
    }
]

export default ServicesList