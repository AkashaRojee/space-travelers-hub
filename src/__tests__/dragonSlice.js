import {
  loadDragons,
  reserveDragon,
  unReserveDragon,
} from '../features/dragons/store/dragonsSlice';

import store from '../app/store';

beforeEach(async () => {
  await store.dispatch(loadDragons());
});
describe('dragonSlice', () => {
  it('should handle the reserveDragon Action', () => {
    const { dragons: { list: [firstDragon] } } = store.getState();

    store.dispatch(reserveDragon(firstDragon.id));

    expect(store.getState().dragons.list[0].isReserved).toBe(true);
  });
  it('should handle the unReserveDragon Action', () => {
    const { dragons: { list: [firstDragon] } } = store.getState();

    store.dispatch(reserveDragon(firstDragon.id));
    store.dispatch(unReserveDragon(firstDragon.id));

    expect(store.getState().dragons.list[0].isReserved).toBe(false);
  });
});
