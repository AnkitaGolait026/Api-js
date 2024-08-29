let input = document.querySelector('input');
let btn = document.querySelector('button')
let List = document.getElementById('List')
function fetchData(searchText){
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(function(respones){
        manipulateDOM(respones.data);
    })
    

}
function manipulateDOM(data){
   
    for(let d of data){
        if(d.show.image){
            let img=document.createElement('img')
            img.setAttribute('src',d.show.image.original);
            List.appendChild(img)
        }
    }
}
btn.addEventListener('click',function(){
    let searchText=input.value;
    let data=fetchData(searchText);
})