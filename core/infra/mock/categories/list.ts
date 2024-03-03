
export const listCategories = (http: any, HttpResponse:any) => {
  return http.get('/api/categories', () => {
    return HttpResponse.json({
      data: [
        {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
        {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
        {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
        {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
        {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
        {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
        {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
        {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
        {id: '#194556', name: 'Angular', description: 'Start developing', createdAt: '12/12/2023', updatedAt: '12/12/2023'},
      ],
    })
  })
}
