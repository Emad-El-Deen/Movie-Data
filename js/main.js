let data = [];
async function allData() {
  try {
    let myHttp = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=ee20f2961cc56f9f28a60f6238672a0a`
    );
    let finalData = await myHttp.json();
    data = finalData.results;
    display();
  } catch (error) {
    document.getElementById(
      "rowData"
    ).innerHTML = ` <div class="alert alert-danger"><h2 class="h6 py-3 text-center">${error}</h2>`;
  }
}
// https://api.themoviedb.org/3/trending/all/day?api_key=c9fac173689f5f01ba1b0420f66d7093
allData();

function display() {
  let table = ``;
  for (let i = 0; i < data.length; i++) {
    table += `
       <div class="g-5 text-white col-md-3">
         <div class="border border-light   py-3 rounded">
         <h2 class="h6 py-3 text-center">${data[i].original_title}</h2>
         <img class="img-fluid rounded" src="https://image.tmdb.org/t/p/w500${data[i].poster_path}" alt="">
         <a class="text-decoration-none  text-dark" href="${data[i].popularity}"> <h4 class="h6 text-white py-3 text-center">${data[i].media_type}</h4> </a>
         <a class="text-decoration-none   text-dark" href="${data[i].vote_average}"> <h4 class="h6 py-3 bg-light mx-5 text-center opacity-25">See Trailer</h4> </a>
         </div>

       </div>

   `;
  }
  document.getElementById("rowData").innerHTML = table;
}
// /------------------------------------------/
let d2 = [];
async function allData2() {
  try {
    let myHttp = await fetch(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=ee20f2961cc56f9f28a60f6238672a0a`
    );
    let finalData = await myHttp.json();
    d2 = finalData.results;
    display2();
  } catch (error) {
    document.getElementById(
      "rowDataTv"
    ).innerHTML = ` <div class="alert alert-danger"><h2 class="h6 py-3 text-center">${error}</h2>`;
  }
}
// https://api.themoviedb.org/3/trending/all/day?api_key=c9fac173689f5f01ba1b0420f66d7093
allData2();

function display2() {
  let table = ``;
  for (let i = 0; i < d2.length; i++) {
    table += `
       <div class="g-5 text-white col-md-3">
         <div class="border border-light   py-3 rounded">
         <h2 class="h6 py-3 text-center">${d2[i].name}</h2>
         <img class="img-fluid rounded" src="https://image.tmdb.org/t/p/w500${d2[i].poster_path}" alt="">
         <a class="text-decoration-none  text-dark" href="${d2[i].popularity}"> <h4 class="h6 text-white py-3 text-center">${d2[i].media_type}</h4> </a>
         <a class="text-decoration-none   text-dark" href="${d2[i].vote_average}"> <h4 class="h6 py-3 bg-light mx-5 text-center opacity-25">See Trailer</h4> </a>
         </div>

       </div>

   `;
  }
  document.getElementById("rowDataTv").innerHTML = table;
}
