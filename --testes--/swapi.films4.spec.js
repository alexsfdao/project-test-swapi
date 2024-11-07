const request = require('supertest');

test('Deve retornar informações básicas do filme The Phantom Menace', async () => {
    const resposta = await request('https://swapi.dev/api').get('/films/4/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.title).toBe('The Phantom Menace');
    expect(resposta.body.episode_id).toBe(1);
    expect(resposta.body.director).toBe('George Lucas');
    expect(resposta.body.producer).toBe('Rick McCallum');
    expect(resposta.body.release_date).toBe('1999-05-19');
});

test('Deve verificar listas de personagens, planetas, naves, veículos e espécies associados ao filme The Phantom Menace', async () => {
    const resposta = await request('https://swapi.dev/api').get('/films/4/');

    expect(resposta.status).toBe(200);

    // Personagens
    expect(resposta.body.characters).toBeDefined();
    expect(resposta.body.characters.length).toBeGreaterThan(0);
    expect(resposta.body.characters).toContain('https://swapi.dev/api/people/2/');

    // Planetas
    expect(resposta.body.planets).toBeDefined();
    expect(resposta.body.planets.length).toBe(3);
    expect(resposta.body.planets).toContain('https://swapi.dev/api/planets/1/');

    // Naves
    expect(resposta.body.starships).toBeDefined();
    expect(resposta.body.starships.length).toBeGreaterThan(0);
    expect(resposta.body.starships).toContain('https://swapi.dev/api/starships/31/');

    // Veículos
    expect(resposta.body.vehicles).toBeDefined();
    expect(resposta.body.vehicles.length).toBeGreaterThan(0);
    expect(resposta.body.vehicles).toContain('https://swapi.dev/api/vehicles/33/');

    // Espécies
    expect(resposta.body.species).toBeDefined();
    expect(resposta.body.species.length).toBeGreaterThan(0);
    expect(resposta.body.species).toContain('https://swapi.dev/api/species/1/');
});
