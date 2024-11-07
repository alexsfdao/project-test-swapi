const request = require('supertest');

test('Deve retornar erro 404 ao buscar por portais estelares, um recurso inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/stellar_portals/');
   
    expect(resposta.status).toBe(404);
});
