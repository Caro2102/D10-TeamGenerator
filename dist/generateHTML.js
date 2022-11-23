
const generateTeam=(team)=>{
    const genManager=(manager)=>{
   return `
    <div class="card">
        <div class="left-column background1-left-column">
            <h6>Manager</h6>
            <h2>${manager.name}</h2>
            <i class="fa-solid fa-mug-saucer"></i>
        </div>

        <div class="right-column">
            <div>
                <h4>ID: ${manager.id}</h4>
            </div>
                <h4>Office Number: ${manager.officeNumber}</h4>
                <a href="mailto:${manager.email}" target="_blank" class="button background1-left-column"><i class="fa-solid fa-envelope"></i></a>
        </div>
     </div>
    `}
    const genEngineer=(engineer)=>{
       return `
        <div class="card">
            <div class="left-column background2-left-column">
                <h6>Engineer</h6>
                <h2>${engineer.name}</h2>
                    <i class="fa-solid fa-glasses" aria-hidden="true"></i>

            </div>

            <div class="right-column">
                <div>
                    <h4>ID: ${engineer.id}</h4>
                </div>
                    <h4>GitHyb User: <a href="https://github.com/${engineer.github}" target="_blank" class="link">${engineer.github}</a></h4>
                    <a href="mailto:${engineer.email}" target="_blank" class="button background2-left-column"><i class="fa-solid fa-envelope"></i></a>

            </div>
        </div>
        `}
    const genIntern=(intern)=>{
    return`
    <div class="card">
        <div class="left-column background3-left-column">
            <h6>Intern</h6>
            <h2>${intern.name}</h2>
            <i class="fa-solid fa-graduation-cap"></i>
        </div>

        <div class="right-column">
            <div>
                <h4>ID: ${intern.id}</h4>
            </div>
                <h4>School: ${intern.school}</h4>
                <a href="mailto:${intern.email}" target="_blank" class="button background3-left-column"><i class="fa-solid fa-envelope"></i></a>
        </div>
    </div>
    `}
const html = [];


// Agregar Manager al array de HTML cards
html.push(team.filter((employee) => employee.getRole() === 'Manager').map((manager) => genManager(manager)));

// Agregar engineer al array de HTML cards
html.push(team.filter((employee) => employee.getRole() === 'Engineer').map((engineer) => genEngineer(engineer)).join(''));

// Agregar Intern al array de HTML cards
html.push(team.filter((employee) => employee.getRole() === 'Intern').map((intern) => genIntern(intern)).join(''));

// Retornar todo al array html
return html.join('');
}




generateHTML=(team)=>{
 return`
<html lang="en">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team Members</title>
        <script src="https://kit.fontawesome.com/9a0f342128.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./style.css">
      </head>
<body>
    <header class="header">
        <h1>My Team</h1>
    </header>
    <div class="container">
    ${generateTeam(team)}
    
    </div>
</body>


`}
module.exports = generateHTML;