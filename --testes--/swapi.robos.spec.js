const request = require('supertest');

test('Deve retornar erro 404 ao buscar por robôs espaciais, um recurso inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/space_robots/');
   
    expect(resposta.status).toBe(404);
});
