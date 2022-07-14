function mapCountries(num_id) {
    for (let i = 0; i < getJsonMaxSize(); i++) {
        var x = document.getElementsByClassName("ar-country")[num_id];
        var option = document.createElement("option");
        option.text = getCountryName(i);
        x.add(option, x[i]);//reverse order 0 before--   
    } 
}

function getCountryCode(select) {
    return jsonCountries[select]["code"];
}

function getCountryName(select) {
    return jsonCountries[select]["name"];
}

function getJsonMaxSize() {
    return Object.keys(jsonCountries).length;
}


