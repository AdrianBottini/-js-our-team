const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        profileA: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        profileA: 'angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        profileA: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        profileA: 'angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        profileA: 'scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        profileA: 'barbara-ramos-graphic-designer.jpg'
    }
]

console.table(team);

const album = document.getElementById("album");

for(let i=0; i<team.length; i++){
    album.innerHTML += `<div class="card"> <img src="img/${team[i].profileA}"> <div class="card-info"> <h2>${team[i].name}</h2> <span>${team[i].role}</span> </div> </div>`
}