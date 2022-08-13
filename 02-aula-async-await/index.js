import fetch from 'node-fetch';

async function main(){
    const user = 'alopo2';
    const user2 = 'rprrafa';
    const apiUrl = 'https://api.github.com';
    //fetch(`${apiUrl}/users/${user}`)
    //    .then((response)=>{
    //        return response.json();
    //    }).then((user) => {
    //        console.log(user);
    //    });
    //const response = await fetch(`${apiUrl}/users/${user}`);
    //const githubUser = await response.json();
    const promise = fetch(`${apiUrl}/users/${user}`);
    const promise2 = fetch(`${apiUrl}/users/${user2}`);
    const promises = await Promise.all([promise, promise2]);
    const githubUser = await promises[0].json();
    const githubUser2 = await promises[1].json();
    console.log(`Angela ID: ${githubUser.id}`);
    console.log(`Rafael ID: ${githubUser2.id}`);
}

main();