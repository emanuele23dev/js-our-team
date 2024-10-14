console.log('ciao');


const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

let rowEl = document.querySelector('.row')

for (let i = 0; i < teamMembers.length; i++) {
  const teamMember = teamMembers[i]
  console.log(teamMember);

  let {name, role, email, img} = teamMember;
  
  let markup = `
  <div class="col-4">
    <div class="d-flex">
      <img src="${img}" alt="">
      <div class="bg-dark text-white p-2 text-center">
        <h3 class="mt-4">${name}</h3>
        <p>${role}</p>
        <p class="text-primary">${email}</p>
      </div>
    </div>
  </div>
  `

  rowEl.innerHTML += markup;

}







