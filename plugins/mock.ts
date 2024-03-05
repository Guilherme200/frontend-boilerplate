import {setupWorker} from 'msw/browser';
import handlers from '~/core/infra/mock/handlers';

export default defineNuxtPlugin(async(nuxtApp) => {
  const config = useRuntimeConfig()
  const mockActive = Boolean(config?.public?.mockActive === 'true')
  if (mockActive) {
    const worker = setupWorker(...handlers)
    await worker.start({onUnhandledRequest: 'bypass'})
  }
})
