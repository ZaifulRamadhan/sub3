import API_ENDPOINT from '../globals/api-endpoint';

class CafeSource {
  static async homeResto() {
    try {
      const response = await fetch(API_ENDPOINT.HOME);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }

  static async detailResto(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return responseJson.restaurant; // Ubah dari `responseJson` ke `responseJson.restaurant`
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }
}

export default CafeSource;
