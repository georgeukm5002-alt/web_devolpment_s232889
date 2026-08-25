// getting the value from a link of takehome
let search = document.getElementById("search");
const url = new URLSearchParams(window.location.search);
const search_data = url.get('query');
if (search_data) {
    document.getElementById('search_data').value = url;
}
function GetInfoToHTML(data) {
    let result = document.getElementById('result');
    result.innerHTML = "";
    let d = data.slice(0, 10);

    d.forEach(function (job) {
        console.log(job);
        result.innerHTML += `
        <h1>${job.title}</h1>
        <div>
            <p>Company ${job.company}</p>
            <p>Location ${job.location.location}</p>
            <p style=" text-align: left;}">Information ${job.summary}</p>
            <p>Link: ${job.link}</p>
        </div>
       `;

    });
}

search.addEventListener('submit', function (event) {
    event.preventDefault();
    let value = document.getElementById('search_data').value;
    v = encodeURIComponent(value);
    let Url = "https:///api.lmiforall.org.uk/api/v1/vacancies/search?limit=10&keywords=";
    let url = Url + v;
    let get = "Get";
    if (get == "Get") {
        console.log("API cal using fetch");
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(responce => responce.json())
            .then(data => {
                GetInfoToHTML(data);
            })
    }
})
