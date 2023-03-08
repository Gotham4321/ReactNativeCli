/* eslint-disable prettier/prettier */
import axios from 'axios';
import {endpoint} from './endpoint';

export const getBreedApi = async () => {
  return await axios({
    method: 'GET',
    url: `${endpoint.getBreed.breed}`,
  });
};
