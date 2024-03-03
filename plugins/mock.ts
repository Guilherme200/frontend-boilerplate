import { setupWorker } from 'msw/browser'
import handlers from '~/core/infra/mock/handlers';

export default defineNuxtPlugin(async() => {
  const worker = setupWorker(...handlers)
  await worker.start({ onUnhandledRequest: 'bypass' })
})
