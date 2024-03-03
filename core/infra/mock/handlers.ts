import {http, HttpResponse} from 'msw'
import {categories} from '~/core/infra/mock/categories/import';

export default [
  ...categories(http, HttpResponse),
]
