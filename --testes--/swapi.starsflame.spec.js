const request = require('supertest');

test('Deve retornar erro 404 ao buscar por estrelas cadentes, um recurso inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/falling_stars/');
   
    expect(resposta.status).toBe(404);
});
