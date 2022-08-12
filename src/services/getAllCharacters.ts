import axios from 'axios';
import { Char } from '../components/types';

export const getAllCharacters = async () => {
  const apiResponse = await fetchAllCharacters();
  return mapFromApiToChars(apiResponse);
}

const fetchAllCharacters = async (): Promise<Array<Char>> => {
  const response = await axios.get('https://rickandmortyapi.com/api/character');

  return response.data.results;
}

const mapFromApiToChars = (apiResponse: Array<Char>) => {
  console.log('apiResponse', apiResponse)
  return apiResponse.map(charFromApi => {
    const { name, image, status, species } = charFromApi;

    return { name, image, status, species }
  })
}