type TMember = {
    id: number
    image: string
    fullName: string
    position: string
}

const TeamMembersList: TMember[] = [
    {
        id: 1,
        image: '/images/team/1.png',
        fullName: 'Bondan Prabowo',
        position: 'CEO'
    },

    {
        id: 2,
        image: '/images/team/2.png',
        fullName: 'Bayu Aji',
        position: 'VR Development'
    },


    {
        id: 3,
        image: '/images/team/3.png',
        fullName: 'Agung Brandon',
        position: 'VR Artist'
    },

    {
        id: 4,
        image: '/images/team/4.png',
        fullName: 'Aldo Boy',
        position: '3D Designer'
    },

    {
        id: 5,
        image: '/images/team/5.png',
        fullName: 'Aril Laso',
        position: 'UI / UX Designer'
    },

    {
        id: 6,
        image: '/images/team/6.png',
        fullName: 'Beni Barak',
        position: '3D Artist'
    },
]

export default TeamMembersList;