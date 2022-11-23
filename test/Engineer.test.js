const Engineer=require('../lib/Engineer');
const engineer= new Engineer('Carolina Cruz','01','caro32_crz@hotmail.com','Caro2102');

test('Hacer una instancia de la clase employee',()=>{
    expect(engineer.name).toEqual('Carolina Cruz');
    expect(engineer.id).toEqual('01');
    expect(engineer.email).toEqual('caro32_crz@hotmail.com');
    expect(engineer.github).toEqual('Caro2102');

})
test('Obtener nombre del metodo getName',()=>{
    expect(engineer.getName()).toEqual('Carolina Cruz')
});
test('Obtener id del metodo getId',()=>{
    expect(engineer.getId()).toEqual('01')
});
test('Obtener correo del metodo getEmail',()=>{
    expect(engineer.getEmail()).toEqual('caro32_crz@hotmail.com');
});
test('Obtener user de GitHub del metodo getGitHub',()=>{
    expect(engineer.getGithub()).toEqual('Caro2102');
});
test('Obtener rol del metodo getRole',()=>{
    expect(engineer.getRole()).toEqual('Engineer');
});
test('Mandar error si el campo de user de GitHub no cumple con la expresion regular',()=>{
    const userval="^[A-Za-z][A-Za-z0-9_]{4,14}$";
    const notvalUser=()=>(engineer.github).notToMatch(userval);
    expect (notvalUser).toThrowError();
});  