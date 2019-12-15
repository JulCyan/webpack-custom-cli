export const number = 1111
export class Test {
    private name = 'cyan' // eslint-disable-line
    public getName(): string {
      return this.name
    }
    public setName(name: string) {
      this.name = name
    }
}