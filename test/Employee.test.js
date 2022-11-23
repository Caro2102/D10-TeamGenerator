const Employee=require('../lib/Employee');
const employee= new Employee('Carolina Cruz','01','caro32_crz@hotmail.com');

test('Hacer una instancia de la clase employee',()=>{
expect(employee.name).toEqual('Carolina Cruz');
expect(employee.id).toEqual('01');
expect(employee.email).toEqual('caro32_crz@hotmail.com');
})

test('Obtener nombre del metodo getName',()=>{
    expect(employee.getName()).toEqual('Carolina Cruz')
});

test('Mandar error si el campo de nombre no cumple con la expresion regular',()=>{
    const nameval=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
    const notval=()=>(employee.name).notToMatch(nameval)
    expect (notval).toThrowError();
});  

test('Obtener id del metodo getId',()=>{
    expect(employee.getId()).toEqual('01')
});

test ('Mandar error si el campo id esta vacio',()=>{
    const employee2 = () => new Employee('Carolina Cruz','', 'caro32_crz@hotmail.com');
    expect(employee2.id).toBeFalsy();
});

test('Mandar error si el campo de id no cumple con la expresion regular',()=>{
    const idval=/[1-9]/;
    const notvalId=()=>(employee.id).notToMatch(idval)
    expect (notvalId).toThrowError();
});  

test('Obtener correo del metodo getEmail',()=>{
    expect(employee.getEmail()).toEqual('caro32_crz@hotmail.com');
});

test ('Mandar error si el campo de correo electronico esta vacio',()=>{
    const employee2 = () => new Employee('Carolina Cruz','01', '');
    expect(employee2.email).toBeFalsy();
});

test('Mandar error si el campo de correo electronico no cumple con la expresion regular',()=>{
    const emailval=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    const notvalEmail=()=>(employee.id).notToMatch(emailval);
    expect (notvalEmail).toThrowError();
});  
test('Obtener rol del metodo getRole',()=>{
    expect(employee.getRole()).toEqual('Employee');

});