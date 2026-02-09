const input=document.getElementById("search");
const btn=document.getElementById("btn");

const details=document.querySelector('.details');

const img=document.getElementById('pic');
const title=document.getElementById('title');
const actors=document.getElementById('actors');
const director=document.getElementById('director');
const writer=document.getElementById('writer');
const genre=document.getElementById('genre');
const plot=document.getElementById('plot');
const runtime=document.getElementById('runtime');
const awards=document.getElementById('awards');
const rating=document.getElementById('rating');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    const movieID=input.value;

    if(movieID) getDetails(movieID);

    input.value=""; 
})

async function getDetails(movieID){

    const apikey="b80bc54f";

    const url=`https://www.omdbapi.com/?i=${movieID}&apikey=${apikey}`

    const res=await fetch(url);
    const data=await res.json();

    details.classList.remove('hidden');

    img.src=data.Poster;
    title.innerHTML=data.Title;
    actors.innerHTML=data.Actors;
    genre.innerHTML=data.Genre;
    director.innerHTML=data.Director;
    writer.innerHTML=data.Writer;
    plot.innerHTML=data.Plot;
    runtime.innerHTML=data.Runtime;
    awards.innerHTML=data.Awards;
    rating.innerHTML=data.imdbRating;
}

