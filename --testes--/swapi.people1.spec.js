const request = require('supertest');

test('Deve retornar informações básicas do personagem Luke Skywalker', async () => {
    const resposta = await request('https://swapi.dev/api').get('/people/1/');

    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Luke Skywalker');
    expect(resposta.body.height).toBe('172');
    expect(resposta.body.mass).toBe('77');
    expect(resposta.body.hair_color).toBe('blond');
    expect(resposta.body.skin_color).toBe('fair');
    expect(resposta.body.eye_color).toBe('blue');
    expect(resposta.body.birth_year).toBe('19BBY');
    expect(resposta.body.gender).toBe('male');
    expect(resposta.body.homeworld).toBe('https://swapi.dev/api/planets/1/');
});

test('Deve verificar os filmes, veículos e naves associados ao personagem Luke Skywalker', async () => {
    const resposta = await request('https://swapi.dev/api').get('/people/1/');

    expect(resposta.status).toBe(200);
    
    // Filmes
    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.films.length).toBe(4);
    expect(resposta.body.films).toContain('https://swapi.dev/api/films/1/');
    expect(resposta.body.films).toContain('https://swapi.dev/api/films/2/');
    expect(resposta.body.films).toContain('https://swapi.dev/api/films/3/');
    expect(resposta.body.films).toContain('https://swapi.dev/api/films/6/');

    // Veículos
    expect(resposta.body.vehicles).toBeDefined();
    expect(resposta.body.vehicles.length).toBe(2);
    expect(resposta.body.vehicles).toContain('https://swapi.dev/api/vehicles/14/');
    expect(resposta.body.vehicles).toContain('https://swapi.dev/api/vehicles/30/');

    // Naves
    expect(resposta.body.starships).toBeDefined();
    expect(resposta.body.starships.length).toBe(2);
    expect(resposta.body.starships).toContain('https://swapi.dev/api/starships/12/');
    expect(resposta.body.starships).toContain('https://swapi.dev/api/starships/22/');
});
