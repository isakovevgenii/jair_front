import {style} from "./index.css";
import { getFlights } from "./api";

const airplaneMOCK = ['boeing787', 'airbusa350'];
const airlineMOCK = ['lufthansa', 'swissair', 'virgin-atlantic'];
const pilotMOCK = ['charles lindbergh', 'charles yeager', 'noel wien', 'james doolittle', 'robert hoover'];
const copilotMOCK = ['charles lindbergh', 'charles yeager', 'noel wien', 'james doolittle', 'robert hoover'];
const flights = getFlights();
let templateFlights = "";

function setFlights() {
    flights.forEach((flight) => {
        templateFlights += getTemplateFlightElem(flight);
    });
    return templateFlights;
}

function getTemplateFlightElem({airplane, airline, pilot, copilot}) {
    return `<div class="flight">
        <img class="airplane" src="${airplane}">
        <img class="airline" src="${airline}">
        <img class="man pilot" src="${pilot}">
        <img class="man copilot" src="${copilot}">
    </div>`
};

function optionsElem(options) {
    let optionsTemplate = '';
    if (options.length > 0) {
        options.forEach(option => {
            optionsTemplate += `<option value="${option}">${option}</option>`;
        });
    }
    return optionsTemplate;
}

const templateFlightsElem = `
    <div class="flights">
        ${setFlights()}
    </div>
`;

const authElem = `
<form>
    <div>
       <span>Airline</span>
       <select name="airline">
            ${optionsElem(airlineMOCK)}
       </select>
    </div>
    <div>
       <span>Airplane</span>
       <select name="airplane">
            ${optionsElem(airplaneMOCK)}
       </select>
    </div>
    <div>
       <span>Pilot</span>
       <select name="pilot">
            ${optionsElem(pilotMOCK)}
       </select>
    </div>
    <div>
       <span>Copilot</span>
       <select name="copilot">
            ${optionsElem(copilotMOCK)}
       </select>
    </div>
    <button>Book now</button>
</form>
`

document.body.innerHTML = authElem + templateFlightsElem;


const formElem = document.querySelector("form");
formElem.addEventListener("submit", function (e) {
    e.preventDefault();
    setAirplane(formElem);
});
