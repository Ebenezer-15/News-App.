
const reddit = {
    search: function(searchTerm){
      const Key = "fa0f1ff7d9ec48fdbc1bbeb24388b0f2";
      let url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${Key}`;
      
      fetch (`${url}`)  
      .then(res => res.json())
        .then((data) => {
          console.log(data)
          renderData(data.articles);
        })
        .catch(err => console.log(err));

    }
};
console.log(reddit);

const isValidUrl = (url) => {
    try {
      new URL(url);
    } catch (e) {
      console.error(e);
      return false;
    }
    return true;
  };


   function renderData (data) {
    let output = '<div class = "row mb-3 row-cols-1 row-cols-md-3 g-4">';
console.log(output)

    data.forEach(data => {

      // CHECK FOR IMAGE
        if (data.urlToImage === null){
          data.urlToImage = "https://techcrunch.com/wp-content/uploads/2022/07/scooter.jpg?w=533";
        }

        if (data.author === null){
          data.author = data.title;
        }

      output += `
      <div class="col">
        <div class="card  mb-4" style = "width:18rem;">
          <img src = ${data.urlToImage} class="card-img-top">
          <div class="card-body">
            <h5 class="card-title text-success">${data.author}</h5>
            <p class="card-text">${truncateText(data.description, 100)}</p>
            <br>
            <a href = "${data.url}" target= "_blank" class = "btn btn-primary">Read More</a>
           
          </div>
        </div>
      </div>
    
      `;
      });
  output += '</div>';
  document.getElementById('results').innerHTML = output;
}

 

 