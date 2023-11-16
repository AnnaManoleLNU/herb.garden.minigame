import { Herb } from '../src/Herb';

test('a herb should be created with name', () => {
  const herb = new Herb('Thyme')
  expect(herb.name).toEqual('Thyme')
})