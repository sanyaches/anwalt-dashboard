export class ApiService {
  private endpoint: string;
  private headers: Record<string, string>;

  constructor(endpoint: string = '', headers: Record<string, string> = {}) {
    this.endpoint = endpoint;
    this.headers = headers;
  }

  configure(endpoint: string = '', headers: Record<string, string> = {}) {
    this.endpoint = endpoint;
    this.headers = headers;
  }

  async request<T = any>(path: string, requestHeaders?: Record<string, string>): Promise<T> {
    try {
      const response = await fetch(`${this.endpoint}/${path}`, {
        headers: {...this.headers, ...requestHeaders},
      });
      const data = await response.json()

      return data
    } catch (e) {
      throw e;
    }
  }
}

const apiService = new ApiService();

export { apiService };