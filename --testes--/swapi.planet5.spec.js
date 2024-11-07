const request = require('supertest');

test('Deve retornar informações básicas do planeta Dagobah', async () => {
    const resposta = await request('https://swapi.dev/api').get('/planets/5/');
    
    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Dagobah');
    expect(resposta.body.climate).toBe('murky');
    expect(resposta.body.terrain).toBe('swamp, jungles');
    expect(resposta.body.films.length).toBeGreaterThan(0);
});
