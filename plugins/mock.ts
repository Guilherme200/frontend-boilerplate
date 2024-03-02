import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {apiMock} from '~/core/infra/mock';

export default defineNuxtPlugin(() => {
  const mock = new MockAdapter(axios);
  apiMock(mock)
})
