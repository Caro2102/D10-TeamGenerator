const Intern=require('../lib/Intern');
const intern= new Intern('Carolina Cruz','01','caro32_crz@hotmail.com','2University');

test('Hacer una instancia de la clase employee',()=>{
    expect(intern.name).toEqual('Carolina Cruz');
    expect(intern.id).toEqual('01');
    expect(intern.email).toEqual('caro32_crz@hotmail.com');
    expect(intern.school).toEqual('2University');

})
test('Obtener nombre del metodo getName',()=>{
    expect(intern.getName()).toEqual('Carolina Cruz')
});
test('Obtener id del metodo getId',()=>{
    expect(intern.getId()).toEqual('01')
});
test('Obtener correo del metodo getEmail',()=>{
    expect(intern.getEmail()).toEqual('caro32_crz@hotmail.com');
});
test('Obtener user de GitHub del metodo getGitHub',()=>{
    expect(intern.getSchool()).toEqual('2University');
});
test('Obtener rol del metodo getRole',()=>{
    expect(intern.getRole()).toEqual('Intern');
});
test('Mandar error si el campo de officeNumber no cumple con la expresion regular',()=>{
    let schoolval="^[A-Za-z][A-Za-z0-9_]{4,14}$";
    const notvalSchool=()=>(intern.school).notToMatch(schoolval);
    expect (notvalSchool).toThrowError();
});  