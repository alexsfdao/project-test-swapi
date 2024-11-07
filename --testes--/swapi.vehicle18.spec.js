const request = require('supertest');

test('Deve retornar informações básicas do veículo AT-AT', async () => {
    const resposta = await request('https://swapi.dev/api').get('/vehicles/18/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('AT-AT');
    expect(resposta.body.model).toBe('All Terrain Armored Transport');
    expect(resposta.body.manufacturer).toBe('Kuat Drive Yards, Imperial Department of Military Research');
    expect(resposta.body.cost_in_credits).toBe('unknown');
    expect(resposta.body.length).toBe('20');
    expect(resposta.body.max_atmosphering_speed).toBe('60');
    expect(resposta.body.crew).toBe('5');
    expect(resposta.body.passengers).toBe('40');
    expect(resposta.body.cargo_capacity).toBe('1000');
    expect(resposta.body.consumables).toBe('unknown');
    expect(resposta.body.vehicle_class).toBe('assault walker');
});

test('Deve verificar a lista de pilotos e filmes associados ao veículo AT-AT', async () => {
    const resposta = await request('https://swapi.dev/api').get('/vehicles/18/');

    expect(resposta.status).toBe(200);

    // Pilotos
    expect(resposta.body.pilots).toBeDefined();
    expect(resposta.body.pilots.length).toBe(0); // O AT-AT não possui pilotos

    // Filmes
    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBe(2);
    expect(resposta.body.films).toContain('https://swapi.dev/api/films/2/');
    expect(resposta.body.films).toContain('https://swapi.dev/api/films/3/');
});
