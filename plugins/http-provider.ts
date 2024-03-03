import AxiosClient from '~/core/infra/http/AxiosClient';
import {apiAxiosInstance} from '~/core/infra/api/config/apiAxiosInstance';
import axios from 'axios';

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig()
  const baseUrl = _get(config, 'public.mockActive', false)
    ? _get(config, 'public.mockBaseUrl', 'http://localhost:3000')
    : _get(config, 'public.apiBaseUrl', 'http://localhost:3000')

  const httpClient: AxiosClient = (typeof baseUrl === 'string')
    ? new AxiosClient(apiAxiosInstance(baseUrl))
    : new AxiosClient(axios)

  nuxtApp.provide('httpClient', httpClient)
})
