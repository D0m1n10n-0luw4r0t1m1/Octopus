function mySearch() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.querySelector("#search");
  filter = input.value.toUpperCase();
  ul = document.querySelector(".card-container");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
const searchInput = document.querySelector("#search");
const suggestionsList = document.querySelector("#suggestions");
const sampleSuggestions = ["apple", "banana", "cherry", "grape", "orange"];

searchInput.addEventListener("input", function () {
  const inputValue = searchInput.value.toLowerCase();
  const filteredSuggestions = sampleSuggestions.filter((suggestion) =>
    suggestion.toLowerCase().startsWith(inputValue)
  );
  suggestionsList.innerHTML = "";
  filteredSuggestions.forEach((suggestion) => {
    const li = document.createElement("li");
    li.textContent = suggestion;
    li.addEventListener("click", function () {
      searchInput.value = suggestion;
      suggestionsList.style.display = "none";
    });
    suggestionsList.appendChild(li);
  });
  if (filteredSuggestions.length > 0) {
    suggestionsList.style.display = "block";
  } else {
    suggestionsList.style.display = "none";
  }
});
