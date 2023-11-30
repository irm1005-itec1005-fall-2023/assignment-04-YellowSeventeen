/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//

// letants
let appID = "app";
let headingText = "To do. To done. ✅";

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  let h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}
let QuestsListed = ["Defeat the band of goblins in the Marrowsville forest"];
let quest = document.querySelector(".quests");
let ObtainedQuest = document.querySelector(".ObtainedQuests");
let Whatquest = document.querySelector("#ThisQuest");
renderList();

function addQuest(event) {
  event.preventDefault();
  let whatquesttext = Whatquest.value;
  console.log(whatquesttext)
  QuestsListed.push(whatquesttext);
  renderList();
  ObtainedQuest.reset();
  console.log("adding quest: " + whatquesttext)
}
function renderList() {
  quest.innerHTML = '';
  if (QuestsListed.length > 0) {
    for (let i = 0; i < QuestsListed.length; i++) {
    let listItem = document.createElement("li");
    let temppara = document.createElement("p");
    temppara.textContent = QuestsListed[i];
    listItem.appendChild(temppara);
    console.log(listItem)
    let scratchmark = document.createElement("input")
    scratchmark.type = "checkbox";
    scratchmark.id = "questCheckbox" + i;
    scratchmark.addEventListener("change", function () {
      markQuestAsDone(i);
    });
    let scratchmarkappear = document.createElement("label");
    scratchmarkappear.htmlFor = "questCheckbox " + i;
    scratchmarkappear.textContent = "Hast our great hero accomplished this quest?";
    let Donequest = document.createElement("button")
    listItem.appendChild(scratchmark);
    listItem.appendChild(scratchmarkappear);
    Donequest.textContent = "This adventure must now be forgotten";
    Donequest.addEventListener("click", function() {
      removeQuest(i);
    });

    listItem.appendChild(Donequest);
    quest.appendChild(listItem);
    console.log(Donequest.id); 
  }
  } 
}
function removeQuest(i) {
  QuestsListed.splice(i, 1);
  renderList();
}
function markQuestAsDone(i) {
  
}

ObtainedQuest.addEventListener("submit", addQuest);
renderList();
//
// Inits & Event Listeners
//
// inititialise();