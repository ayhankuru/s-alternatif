import { show, search } from '../lib/index'

describe('S-alternatif Test', () => {

  test('Search Snapshot must be equal', async () => {
    const requestList = await search({artist:"Emre Aydın"});
    expect(requestList).toMatchSnapshot();
  });

  test('Show Snapshot must be equal', async () => {
    const requestList = await show("/sarkici/emre-aydin/afili-yalnizlik");
    expect(requestList).toMatchSnapshot();
  })


});