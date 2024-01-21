import { countriesAndCities } from '../storage/parthener/cities';
import { alphabet } from '../storage/constant/alphabet';
interface CountryAndCities {
  country: string,
  isCountryActive: boolean,
  cities: string[][]
};

const alphabetLenght = alphabet.length;
const citiesToLowerCaseAndSort: CountryAndCities[] = [];

countriesAndCities.forEach(el => {
  const citiesToLowerCase: string[] = [];
  let citiesSeparatedByLetters: string[][] = [];
 
  el.cities.forEach( city => {citiesToLowerCase.push(city.toLocaleLowerCase());}); //привожу города к нижнему регистру
  for (let i = 0; i < alphabetLenght; i++) {
    citiesSeparatedByLetters.push(citiesToLowerCase.filter((el) => el[0].toLowerCase() === alphabet[i]));
  }; //преобразую массив городов в массив массивов - для каждой буквы массив с городами

  citiesSeparatedByLetters = citiesSeparatedByLetters.filter( el => el.length > 0); //убираю пустые массивы городов (на эту букву нет городов)
  citiesToLowerCaseAndSort.push(
   {
    country: el.country,
    isCountryActive: el.isCountryActive,
    cities: citiesSeparatedByLetters,
   }
  )
});

  export const countriesAndCitiesArray = citiesToLowerCaseAndSort.filter( el => el.cities.length > 0);//убираю страны без городов