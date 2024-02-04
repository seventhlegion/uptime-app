import ky from 'ky';
import { HttpRequester } from '../HttpRequester';

export type KyHttpRequesterOptions = {
  header?: object;
  hooks?: object;
  options?: object;
  prefixUrl?: string;
  retry?: object;
  timeout?: number;
  throwHttpErrors?: boolean;
  timeoutRetryCount?: number;
  onResponse?: (response: unknown) => void;
};

export default class KyHttpRequester implements HttpRequester {
  private client: typeof ky;
  constructor(private options: KyHttpRequesterOptions) {
    this.options = options;
    this.client = ky.create({
      prefixUrl: this.options.prefixUrl,
    });
  }

  get<T extends object>(url: string): Promise<T> {
    return this.client.get(url).json();
  }

  post<T extends object, E extends object>(url: string, data?: T): Promise<E> {
    return this.client.post(url, { json: data }).json();
  }

  put<T extends object, E extends object>(url: string, data?: T): Promise<E> {
    return this.client.put(url, { json: data }).json();
  }

  patch<T extends object, E extends object>(url: string, data?: T): Promise<E> {
    return this.client.patch(url, { json: data }).json();
  }

  delete<T extends object, E extends object>(url: string, data?: T | undefined): Promise<E> {
    return this.client.delete(url, { json: data }).json();
  }

  head<T extends object>(url: string): Promise<T> {
    return this.client.head(url).json();
  }
}
