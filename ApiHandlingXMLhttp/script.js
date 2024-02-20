let object = new XMLHttpRequest;
object.open("GET","https://api.github.com/users/<add_userID>");

object.onload = function(){
    let data = JSON.parse(object.response);
    console.log(data.followers);
    let name = document.querySelector(".name");
    name.innerHTML = data.name;

    let image = document.querySelector(".avatar");
    image.src = data.avatar_url;
    
    let following = document.querySelector(".following-count");
    following.innerHTML = data.following;

    let followers = document.querySelector(".followers-count");
    followers.innerHTML = data.followers;

    let public_repos = document.querySelector(".publicRepos");
    public_repos.innerHTML = data.public_repos;
}
object.send();