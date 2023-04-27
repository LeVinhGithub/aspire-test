
import { faker } from '@faker-js/faker';
import { sample } from 'lodash';


export function testingFactory(rest = {}) {
  return {
                                  email: faker.internet.email(),
                                                                                                                ...rest,
  };
}
