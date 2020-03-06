const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
let insertY =['the soup kitchen','Disneyland','the White House'];
let inseryZ =['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

storyText = storyText.replace(':insertx:', insertX);
storyText = storyText.replace(':inserty:', insertY);
storyText = storyText.replace(':insertz:', inseryZ);


randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(inseryZ);

  if(customName.value !== '') {
    let name = customName.value;
    storyText = storyText.replace('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(21.428571) + ' stone';
    let temperature =  Math.round(34.4444444) + ' centigrade';
    storyText = storyText.replace('94 fahrenheit', temperature);
    storyText = storyText.replace('300 pounds', weight);

  }

  story.textContent = ;
  story.style.visibility = 'visible';
}