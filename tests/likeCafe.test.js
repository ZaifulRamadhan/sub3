import FavoriteCafeIdb from '../src/scripts/data/favorite-cafe-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Cafe', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the cafe has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({ id: 1 });

    expect(document.querySelector('[aria-label="like this cafe"]')).toBeTruthy();
  });

  it('should not show the unlike button when the cafe has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this cafe"]')).toBeFalsy();
  });

  it('should be able to like the cafe', async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Memastikan cafe berhasil disukai
    const cafe = await FavoriteCafeIdb.getCafe(1);
    expect(cafe).toEqual({ id: 1 });

    await FavoriteCafeIdb.deleteCafe(1);
  });

  it('should not add a cafe again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({ id: 1 });

    // Tambahkan cafe dengan ID 1 ke daftar cafe yang disukai
    await FavoriteCafeIdb.putCafe({ id: 1 });

    // Simulasikan pengguna menekan tombol suka cafe
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Tidak ada cafe yang ganda
    expect(await FavoriteCafeIdb.getAllCafe()).toEqual([{ id: 1 }]);

    await FavoriteCafeIdb.deleteCafe(1);
  });

  xit('should not add a cafe when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithCafe({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteCafeIdb.getAllCafe()).toEqual([]);
  });
});
