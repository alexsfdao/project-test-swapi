const request = require('supertest');

test('Deve retornar erro 404 ao buscar por espécies alienígenas, um recurso inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/alien_species/');
   
    expect(resposta.status).toBe(404);
});
