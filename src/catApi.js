export function fetchRandomCat(currentImage) {
  let promise = fetch('https://api.thecatapi.com/v1/images/search') // Call the fetch function passing the url of the API as a parameter
    .then((response) => response.json())
    .catch((error) => console.log("Failed to load", error));
  return promise
}
