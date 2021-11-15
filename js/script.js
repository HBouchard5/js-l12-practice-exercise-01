const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("select");

const getData = async function(numUsers) {
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();
    console.log(data);

    const usersResults = data.results;
    console.log(usersResults);

    displayUsers(usersResults);
};

//initial call to populate user profiles
getData(1);


const displayUsers = function (usersResults) {
    randomFolks.innerHTML = "";
    for (let user of usersResults) {
        let country = user.location.country;
        let name = `${user.name.title}. ${user.name.first} ${user.name.last}`;
        let imageURL = user.picture.medium;
        
        let userDiv = document.createElement("div");
        userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</p>
            <img src=${imageURL} alt="User Avatar" />
            `;
        randomFolks.appendChild(userDiv);
        console.log(user);
    }
};

//update user profiles on change of select list
selectUserNumber.addEventListener("change", function(e){
    const numUsers = e.target.value;
    getData(numUsers);
});


