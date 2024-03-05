import {http, HttpResponse} from 'msw'
import global from '~/core/infra/mock/global'
import categories from '~/core/infra/mock/categories'

export default [
  ...global(http),
  ...categories(http, HttpResponse),
]
