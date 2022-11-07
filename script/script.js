const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        profilePic: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        profilePic: 'angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        profilePic: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        profilePic: 'angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        profilePic: 'scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        profilePic: 'barbara-ramos-graphic-designer.jpg'
    }
]

console.table(team);

const album = document.getElementById("album");

for(let i=0; i<team.length; i++){
    album.innerHTML += `<div class="card"> <img src="img/${team[i].profilePic}"> <div class="card-info"> <h2>${team[i].name}</h2> <span>${team[i].role}</span> </div> </div>`
}