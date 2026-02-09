const movieName=document.getElementById('movieID');
const get=document.getElementById('get');

const newID=document.querySelector('.newID');

get.addEventListener('click',async (e)=>{
    e.preventDefault();

    const movieValue=movieName.value;
    const idd=await getmovieId(movieValue);
    newID.innerHTML=`This is your required ID :<span class="iden"> ${idd} </span>`;

    movieName.value="";

})

async function getmovieId(movieValue){

    const keyy="b80bc54f"
    const url=`https://www.omdbapi.com/?t=${movieValue}&apikey=${keyy}`;

    const res=await fetch(url);
    const data=await res.json();

    if(data.Response==="False") return "Moive Not Found"

    return data.imdbID;
}