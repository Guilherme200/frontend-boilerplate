import { setupWorker } from 'msw/browser'
import handlers from '~/core/infra/mock/handlers';

export default defineNuxtPlugin(async() => {
  const config = useRuntimeConfig()
  const mockActive = Boolean(config?.public?.mockActive === 'true')

  console.log(mockActive)
  if (mockActive) {
    const worker = setupWorker(...handlers)
    await worker.start({onUnhandledRequest: 'bypass'})
  }
})
