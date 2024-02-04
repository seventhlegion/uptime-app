export default abstract class HttpRequester {
  abstract get<T extends object>(url: string): Promise<T>;

  abstract post<T extends object, E extends object>(url: string, data?: T): Promise<E>;

  abstract put<T extends object, E extends object>(url: string, data?: T): Promise<E>;

  abstract patch<T extends object, E extends object>(url: string, data?: T): Promise<E>;

  abstract delete<T extends object, E extends object>(url: string, data?: T): Promise<E>;

  abstract head<T extends object>(url: string): Promise<T>;
}
