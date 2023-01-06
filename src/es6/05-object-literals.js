//enahaed Object literals
function newUser(user, age, country){
return{
    user: user,
    age:age,
    country:country
}
}

// El nombre qeu va adevolver este objeto tiene le mismo valor se puede hacer caso omisos y pasar de forma directa

function newUser(user, age, country,uId){
    return{
        user,
        age,
        country,
        id:uId
        }
    }

    console.log(newUser("gndx",34,"MX",1));
