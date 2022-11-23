const Manager=require('../lib/Manager');
const manager= new Manager('Carolina Cruz','01','caro32_crz@hotmail.com','1');

test('Hacer una instancia de la clase employee',()=>{
    expect(manager.name).toEqual('Carolina Cruz');
    expect(manager.id).toEqual('01');
    expect(manager.email).toEqual('caro32_crz@hotmail.com');
    expect(manager.officeNumber).toEqual('1');

})
test('Obtener nombre del metodo getName',()=>{
    expect(manager.getName()).toEqual('Carolina Cruz')
});
test('Obtener id del metodo getId',()=>{
    expect(manager.getId()).toEqual('01')
});
test('Obtener correo del metodo getEmail',()=>{
    expect(manager.getEmail()).toEqual('caro32_crz@hotmail.com');
});
test('Obtener user de GitHub del metodo getGitHub',()=>{
    expect(manager.getOfficeNumber()).toEqual('1');
});
test('Obtener rol del metodo getRole',()=>{
    expect(manager.getRole()).toEqual('Manager');
});
test('Mandar error si el campo de officeNumber no cumple con la expresion regular',()=>{
    let officeval=/[1-9]/;
    const notvalNumber=()=>(manager.officeNumber).notToMatch(officeval);
    expect (notvalNumber).toThrowError();
});  