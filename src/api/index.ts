import axios from "axios";

const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const BASE_URL = "https://api.giphy.com/v1";

export interface SearchResponse {
  title: string;
  images: { fixed_width: { url: string } };
}

export default class GiphyApi {
  private randomId: number;

  constructor() {
    this.randomId = new Date().getTime();
  }

  // https://developers.giphy.com/docs/api/
  async search(
    query: string,
    offset: number = 0
  ): Promise<SearchResponse[] | undefined> {
    if (offset > 4999) {
      throw new Error("Giphy Search API offset is limited to 4999!");
    }

    try {
      const response = await axios.get(`${BASE_URL}/gifs/search`, {
        params: {
          api_key: GIPHY_API_KEY,
          q: query,
          offset: offset,
          random_id: this.randomId,
        },
      });
      return response.data.data;
    } catch (e) {
      console.error(e);
    }
  }
}
