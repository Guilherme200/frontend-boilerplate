import {listCategories} from '~/core/infra/mock/categories/list';

export const categories = (http: any, HttpResponse:any) => [
  listCategories(http, HttpResponse),
]
