import { environment } from '../../environments/environment'

export class HttpService {
  static async get(url: string) {
    const response = await fetch(`${environment.apiUrl}${url}`)
    return response.json()
  }
}
