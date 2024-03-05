import {listCategories} from '~/core/infra/mock/categories/list';

export default(http: any, HttpResponse:any) => [
  listCategories(http, HttpResponse),
]
