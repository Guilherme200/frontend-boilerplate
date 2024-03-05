import AxiosClient from '~/core/infra/http/AxiosClient';
import {apiAxiosInstance} from '~/core/infra/api/config/apiAxiosInstance';
import axios from 'axios';

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig()
  const apiBaseUrl = _get(config, 'public.apiBaseUrl', 'http://localhost:3000')

  const httpClient: AxiosClient = (typeof apiBaseUrl === 'string')
    ? new AxiosClient(apiAxiosInstance(apiBaseUrl))
    : new AxiosClient(axios)

  nuxtApp.provide('httpClient', httpClient)
})
