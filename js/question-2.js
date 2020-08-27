/* Make a call to the following API endpoint:

https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating
Loop through the results and display the following properties in HTML, but only for the first 8 results:

- name
- rating
- number of tags (not the tag details, just the amount of tags)

The styling for this assingment is not important, but some kind of loading indicator should be displayed while the API call is in progress.

Be sure to handle any potential errors in the code.

You can use either regular promise or async/await syntax to make the call.

Be sure to arrange all file types appropriately, consult the repos from the lessons for examples. */

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const resultsContainer = document.querySelector(".results");

async function getGames() {

    try {

    const response = await fetch(url);

    const result = await response.json();

    const facts = result.results;

    resultsContainer.innerHTML = "";

    for(let i = 0; i < facts.length; i++) {
        console.log(facts[i].name);
        console.log(facts[i].rating);
        console.log(facts[i].tags.length);

        if(i === 8) {
            break;
        }

        resultsContainer.innerHTML += `<div class="result">
        <h2>${facts[i].name}</h2>
        <p>Rating: ${facts[i].rating}</p>
        <p>Number of tags: ${facts[i].tags.length}</p></div>`
    }
    }

    catch(error) {
        console.log("An error occured");
        resultsContainer.innerHTML = "An error occured";
    }
}

getGames();