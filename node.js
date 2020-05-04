
async function getGithubApi() {
    let response = await fetch('https://api.github.com/repos/patjrep/typing_game');
    let data = await response.json()
    return data;
}
getGithubApi().then(data => conssole.log(data));