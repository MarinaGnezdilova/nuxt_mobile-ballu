import { countriesAndCities } from '../storage/parthener/cities';
import { alphabet } from '../storage/constant/alphabet';

interface CountryAndCities {
  country: string,
  isCountryActive: boolean,
  cities: string[]
};

interface NewCountryAndCities {
  country: string,
  isCountryActive: boolean,
  cities: string[][]
};

const alphabetLenght = alphabet.length;
const newCountryWihCities: NewCountryAndCities[] = [];

const convertCitiesToLowerCase = (cities:string[]) => {
  let newCities = [];
  for(let i = 0; i < cities.length; i++) {
    newCities.push(cities[i].toLowerCase())
  }
  return newCities;
}

const convertCitiesinNewSrtucture = (item:CountryAndCities) => {
  let citiesSeparatedByLetters: string[][] = [];
  let newCitiesArray =[];
  newCitiesArray = convertCitiesToLowerCase(item.cities);
  for (let i = 0; i < alphabetLenght; i++) {
    citiesSeparatedByLetters.push(newCitiesArray.filter((city) => city[0] === alphabet[i]).sort());
  }; 
  return citiesSeparatedByLetters;
}

countriesAndCities.forEach(el => {
let cities = [];
cities = convertCitiesinNewSrtucture(el).filter( el => el.length > 0);
newCountryWihCities.push(
  {
    country: el.country,
    isCountryActive: el.isCountryActive,
    cities: cities,
   }
  )
});

export const countriesAndCitiesArray = newCountryWihCities.filter( el => el.cities.length > 0);
