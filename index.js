
fetch('https://www.jsonkeeper.com/b/CYHX')
.then(response => response.json())
.then( data => console.log(data)
)
.catch(error => {
    console.log(error)});