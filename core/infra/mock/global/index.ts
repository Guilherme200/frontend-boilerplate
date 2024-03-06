import {delay} from 'msw';

export default(http: any) => [
  http.all('*', async () => {
    await delay(0)
  }),
]
