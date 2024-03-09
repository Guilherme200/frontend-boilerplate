export const listCategories = (http: any, HttpResponse:any) => {
  return http.get('/api/categories', async(): Promise<any> => {
    return HttpResponse.json({
      'data': [
        {
          'id': 1,
          'name': 'Cabelo',
          'description': 'Todo tipo de corte de cabelo',
          'createdAt': '2024-02-22T03:01:59+00:00',
          'updatedAt': '2024-02-22T03:01:59+00:00',
        },
      ],
      'meta': {
        'current_page': 1,
        'from': 1,
        'last_page': 2,
        'per_page': 10,
        'to': 1,
        'total': 1,
      },
    }, {status: 200})
  })
}
