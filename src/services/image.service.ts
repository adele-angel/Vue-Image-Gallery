import axios from "axios";

const apiKey = "8e95d9a828d343f2cdf9354dd8038e80";
const apiBaseUrl = "https://www.flickr.com/services/rest/";

axios.defaults.baseURL = apiBaseUrl;

export default class ImageService {
  getImages(search: string, currentPage: number) {
    return axios.get(
      `?method=flickr.photos.search&api_key=${apiKey}&text=${search}&per_page=50&page=${currentPage}&format=json&nojsoncallback=1`
    );
  }
}
