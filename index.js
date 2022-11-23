//npm 
const inquirer = require('inquirer');
const fs=require('fs');
const path = require("path");

//Clases
let Intern = require("./lib/Intern");
let Engineer = require("./lib/Engineer");
let Manager= require("./lib/Manager");
const generateHTML=require('./dist/generateHTML');
let employees=[];
// Expresiones regulares para validar formulario
let emailval=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
let nameval=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
let idval=/[1-9]/;
let userval="^[A-Za-z][A-Za-z0-9_]{4,14}$";

//Validacionde formulario con expresiones regulares
const confirmname=(name)=>{
  return !name.match(nameval)||name==''?'Ingrese su nombre': true

}
const confirmid=(id)=>{
return !id.match(idval)||id==''? 'Ingrese su ID': true;
  
}
const confirmnum=(officeNumber)=>{
  return !officeNumber.match(idval)||officeNumber==''? 'Ingrese el numero de oficina':true;
}

const confirmemail=(email)=>{
  if(!email.match(emailval)){
  return 'Este campo debe contener un correo electrónico válido'
  }else if(email==''){
    return 'Ingrese el correo electronico'
    
  }
  else{
    return true;
  }
}
const confirmuser=(user)=>{
  if(!user.match(userval)){
    return 'El usuario tiene que ser de 4 a 15 digitos y solo puede contener numeros y letras '
  }else if(user==''){
    return 'Ingrese su su username'
  }
  else{
    return true;
  }
}
    
//Formulario Manager, al finalizar se crea un nuevo objeto
 init=()=> {
      return inquirer
      .prompt([
        {
            type: 'input',
            message: 'Ingrese el nombre:',
            name: 'name',
            validate: confirmname,
            
          },
          {
            type: 'input',
            message: 'Ingrese el identificador de empleado:',
            name: 'id',
            validate: confirmid,
          },
          {
            type: 'input',
            message: 'Ingrese la direccion de correo electrónico: ',
            name: 'email',
            validate: confirmemail,
            
          },
          {
            type: 'input',
            message: 'Ingrese el número de oficina del gerente del equipo: ',
            name: 'officeNumber',
            validate: confirmnum,
          },
      ]).then(answer => {
        
        const manager= new Manager(answer.name, answer.id, answer.email, answer.officeNumber)
        employees.push(manager);
        menu();
      
      })
      
    }
   // Menu de opciones
    menu=()=>{
      console.clear();
        return inquirer.prompt({
            type:'rawlist',
            name: 'menu',
            message: '¿Qué desea hacer?',
            choices: ['Agregar un ingeniero','Agregar un pasante','Terminar de formar equipo']
        })
        .then((answer)=>{
            switch(answer.menu) {

                case 'Agregar un ingeniero':
                  addEngeneer();
                break;

                case 'Agregar un pasante':
                  addIntern();
                break;
                case 'Terminar de formar equipo':
                    writeToFile();
                break;
            }
        })
    }
//Formulario de Ingeniero al finalizar se crea un nuevo objeto
    addEngeneer=()=>{
     inquirer
      .prompt([
        {
            type: 'input',
            message: 'Ingrese el nombre del Ingeniero',
            name: 'name',
            validate: confirmname,
            
          },
          {
            type: 'input',
            message: 'Ingrese el identificador',
            name: 'id',
            validate: confirmid,
          },
          {
            type: 'input',
            message: 'Ingrese la direccion de correo electrónico',
            name: 'email',
            validate: confirmemail,
          },
          {
            type: 'input',
            message: 'Ingrese el nombre de usuario de Github del ingeriero.',
            name: 'github',
            validate: confirmuser,
          },
      ]).then(answer => {
        
        const engineer= new Engineer(answer.name, answer.id, answer.email, answer.github)
        employees.push(engineer);
        menu();
      })
    }
//Formulario de interno al finalizarlo se crea un nuevo objeto
    addIntern=()=>{
      
     inquirer
      .prompt([
        {
            type: 'input',
            message: 'Ingrese el nombre del pasante',
            name: 'name',
            validate: confirmname,
            
          },
          {
            type: 'input',
            message: 'Ingrese el identificador',
            name: 'id',
            validate: confirmid,
          },
          {
            type: 'input',
            message: 'Ingrese la direccion de correo electrónico',
            name: 'email',
            validate: confirmemail,
            
          },
          {
            type: 'input',
            message: 'Ingrese la escuela del pasante.',
            name: 'school',
          },
      ]).then(answer => {
        const intern= new Intern(answer.name, answer.id, answer.email, answer.school)
        employees.push(intern);
        menu();
      })
    }
  
  writeToFile=()=> {
    
    const carpeta = path.resolve(__dirname, "dist")
    const archivogen = path.join(carpeta, "team.html");
    !fs.existsSync(carpeta)? fs.mkdirSync(carpeta) : fs.writeFileSync(archivogen, generateHTML(employees),'utf-8');
  }

init();
