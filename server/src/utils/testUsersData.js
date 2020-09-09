module.exports = {
    list_of_users: [
        { name: "Tester Testing", mobile: "4407378113666", city: "New York", country: "US" },
        { name: "Luciano G. Borges", mobile: "12363351668", city: "Vancouver", country: "CA" },
        { name: "Simone R. C. Santy", mobile: "5541988238803", city: "Curitiba", country: "BR" },
        { name: "Rafaella Garcia Barella Petozoto", mobile: "447378113777", city: "Northampton", country: "UK" },
        { name: "Bruno", mobile: "34655352228", city: "Ilhas Canarias", country: "ES" },
        { name: "B. Drummont", mobile: "17866626006", city: "Miami", country: "US" },
        { name: "Rodrigão", mobile: "64211258100", city: "Blablu", country: "NZ" },
        { name: "pc", mobile: "0000000000", city: "EN", country: "UK" },
    ],
    empty_users: [
        { name: "", mobile: "4407378113666", city: "Northampton", country: "UK" },
        { name: "Tester Testing", mobile: "", city: "Northampton", country: "UK" },
        { name: "Tester Testing", mobile: "4407378113666", city: "", country: "UK" },
        { name: "Tester Testing", mobile: "4407378113666", city: "Northampton", country: "" }
    ],
    not_string_users: [
        { name: 15, mobile: "4407378113666", city: "Northampton", country: "UK" },
        { name: 1.5, mobile: "4407378113666", city: "Northampton", country: "UK" },
        { name: null, mobile: "4407378113666", city: "Northampton", country: "UK" },
        { name: false, mobile: "4407378113666", city: "Northampton", country: "UK" },
        { name: true, mobile: "4407378113666", city: "Northampton", country: "UK" },
        { name: "Tester Testing", mobile: 15, city: "Northampton", country: "UK" },
        { name: "Tester Testing", mobile: 1.5, city: "Northampton", country: "UK" },
        { name: "Tester Testing", mobile: null, city: "Northampton", country: "UK" },
        { name: "Tester Testing", mobile: false, city: "Northampton", country: "UK" },
        { name: "Tester Testing", mobile: true, city: "Northampton", country: "UK" },
        { name: "Tester Testing", mobile: "4407378113666", city: 15, country: "UK" },
        { name: "Tester Testing", mobile: "4407378113666", city: 1.5, country: "UK" },
        { name: "Tester Testing", mobile: "4407378113666", city: null, country: "UK" },
        { name: "Tester Testing", mobile: "4407378113666", city: false, country: "UK" },
        { name: "Tester Testing", mobile: "4407378113666", city: true, country: "UK" },
        { name: "Tester Testing", mobile: "4407378113666", city: "Northampton", country: 15 },
        { name: "Tester Testing", mobile: "4407378113666", city: "Northampton", country: 1.5 },
        { name: "Tester Testing", mobile: "4407378113666", city: "Northampton", country: null },
        { name: "Tester Testing", mobile: "4407378113666", city: "Northampton", country: false },
        { name: "Tester Testing", mobile: "4407378113666", city: "Northampton", country: true },
    ],
    wrong_country_users: [
        { name: "Tester Testing", mobile: "4407378113666", city: "Northampton", country: "U" },
        { name: "Tester Testing", mobile: "4407378113666", city: "Northampton", country: "UKD" },
    ],
    mobile_dont_match_user: {
        name: "Tester Testing",
        mobile: "+447378113666",
        city: "Northampton",
        country: "UK"
    },
    short_mobile_user: {
        name: "Tester Testing",
        mobile: "3666",
        city: "Northampton",
        country: "UK"
    },
    big_mobile_user: {
        name: "Tester Testing",
        mobile: "04407378113666",
        city: "Northampton",
        country: "UK"
    },
    single_user: {
        name: "Tester Testing",
        mobile: "4407378113666",
        city: "New York",
        country: "US"
    }
};