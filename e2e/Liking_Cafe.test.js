Feature('Favoriting and Unfavoriting a Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('favoriting and unfavoriting a restaurant', async ({ I }) => {
  // Memastikan halaman memiliki setidaknya satu restoran
  I.seeElement('.restaurant-item');

  // Mengklik link menuju halaman detail restoran
  I.click('a[href="/#/detail/rqdv5juczeskfw1e867"]');

  // Memastikan halaman detail restoran telah dimuat
  I.seeElement('#likeButton');

  // Menyukai restoran
  I.click('#likeButton');

  // Memastikan tombol Like telah berubah menjadi tombol Unlike
  I.seeElement('#likedButton');

  // Ke halaman favorite
  I.click('a[href="#/like"]');

  I.seeElement('a[href="/#/detail/rqdv5juczeskfw1e867"]');

  I.click('a[href="/#/detail/rqdv5juczeskfw1e867"]');

  // Tidak menyukai restoran
  I.click('#likedButton');

  // Memastikan tombol Unlike telah berubah menjadi tombol Like
  I.seeElement('#likeButton');

  I.click('a[href="#/like"]');

  I.dontSeeElement('a[href="/#/detail/rqdv5juczeskfw1e867"]');

  I.click('a[href="#/home"]');
});
