//antes
function newUser(name, age, country){
    var name = name || 'adri';
    var age = age || 30;
    var country = country || 'CO';
    console.log (name,age,country);
}

newUser();
newUser('Evens', 34, 'CO');

//Después - mas amigable:
function newAdmin(name = 'Adriana', age=34, country='CL')
{
    console.log(name,age,country);
}

newAdmin();
newAdmin('Ana',28,'Pe');