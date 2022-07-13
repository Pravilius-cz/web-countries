import { jsonCountries } from "./src";

let select = 0;

function getCountryCode(select) {
    return jsonCountries[select]["code"];
}

function getCountryName(select) {
    return jsonCountries[select]["name"];
}

function getJsonMaxSize() {
    return Object.keys(jsonCountries).length;
}
