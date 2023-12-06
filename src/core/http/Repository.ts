import Http from '.';

export default class Repository extends Http {
  protected isStatusOK(status: number): boolean {
    return status >= 200 && status < 300;
  }

  protected setHeader(name: string, value: string): void {
    const headers = this.client.defaults.headers as any;
    headers[name] = value;
  }
}
