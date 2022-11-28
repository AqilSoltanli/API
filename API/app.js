





function Click(){
    fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => {
        let html = ''
        data.results.forEach(user => {
            html +=`
            <div class="col-lg-3">
                <div id=${user.dob.age > 40 ? "old":'gold'} class="card" style="width: 18rem;">
                    <img class="card-img-top" src=${user.picture.large} alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                        <p class="card-text">${user.login.username}</p>
                    </div>
                </div>
            </div>
        `
        })
        document.getElementById('list').innerHTML = html;
    })
    .catch(error => console.log(error))
}
    
  



 
