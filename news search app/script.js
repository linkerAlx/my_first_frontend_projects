// const apikey = "d26def2377064e8fb67508f6ee17eb8d";
const bolgcontainer =document.getElementById
("blog-container");
const searchfield =document.getElementById
("search-input");
const searchbutton =document.getElementById
("search-button");

 async function fetchrandomnews(){
try{
    // const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&
    // apiKey=${apikey}`;

     const apiUrl =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d26def2377064e8fb67508f6ee17eb8d`;
    const response  = await fetch(apiUrl);
const data = await response.json();
console.log(data);
return data.articles;


}
catch(error){
    console.error("error fetching random news",error);
return[];
}
}

searchbutton.addEventListener("click", async()=>{
    const query = searchfield.value.trim()
    if(query !==""){
        try{
            const articles = await fetchnewsquery(query);
            displayblogs(articles);

        }catch(error){
            console.log("error fetching news by query",error);
        }
    }
})

async function fetchnewsquery(query){
    try{
        const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=d26def2377064e8fb67508f6ee17eb8d`;
    
        //  const apiUrl =`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d26def2377064e8fb67508f6ee17eb8d`;
        const response  = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    return data.articles;
   
    
    }
    catch(error){
        console.error("error fetching random news",error);
    return[];
    }
}
// to update our news to remove old news and put new one use this function
function displayblogs(articles){
bolgcontainer.innerHTML=""
articles.forEach((article) => {
    const blogcard =document.createElement
    ("div")
    blogcard.classList.add("blog-card");
    const img = document.createElement("img");
    //  img.src = article.urlTOImage;
    // if (article.urlToImage) {
    //     img.src = article.urlToImage;
    // } else {
    //     // Provide a fallback image URL or placeholder image
    //     img.src = 'fallback-image-url.jpg'; // Replace 'fallback-image-url.jpg' with the URL of your fallback image
    // }
    if (article.urlToImage) {
        img.src = article.urlToImage;
    } else {
        // Provide a fallback image URL or placeholder image
        img.src = 'https://example.com/your-fallback-image.jpg'; // Replace this with your actual fallback image URL
    }
    
    
    img.alt=article.title;
    const title = document.createElement("h2");
    title.textContent=article.title;
    const description =document.createElement("p");
    description.textContent=article.description;

    blogcard.appendChild(img);
    blogcard.appendChild(title);
    blogcard.appendChild(description);
    bolgcontainer.appendChild(blogcard);
    
});
}

(async ()=>{
    try{
const articles= await fetchrandomnews();
displayblogs(articles);
// console.log(articles);
    }catch(error){
        console.error("error fetching random news",error);
        return[];
    }

})();