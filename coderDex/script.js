let codersDiv = document.getElementById('coders');

function getUsername(element) {
  console.log(element.value);
  getData(element.value);
}

async function getData(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const coderData = await response.json();
  console.log(coderData);
  codersDiv.innerHTML += createCard(coderData);
}

function createCard(coderData) {
  const output = `
  <div class="card flexed padded rounded">
    <div class="left">
      <img class="avatar" src="${coderData.avatar_url}" alt="${coderData.login}">
    </div>
    <div class="right">
      <h2>${coderData.name}</h2>
      <p><strong>login: </strong> ${coderData.login}</p>
      <p><strong>location: </strong> ${coderData.location}</p>
      <p><strong>repos: </strong> ${coderData.public_repos}</p>
    </div>
  </div>
  `;
  return output;
}
