// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['I have three siblings!', 'Paris is on the top of my travel bucketlist', 'I love cats', 'I am South Asian'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

/** Fetches  a hardcoded string from the server and adds it to the page. */
async function showString() {
    const responseFromServer = await fetch('/hello');
    const textFromResponse = await responseFromServer.text();
  
    const stringContainer = document.getElementById('string-container');
    stringContainer.innerText = textFromResponse;
}

function createMap() {
    const map = new google.maps.Map(
        document.getElementById('map'),
        {center: {lat: 40.76060063892388, lng:-73.98365302868159}, zoom: 12});
  }
