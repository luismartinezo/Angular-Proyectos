export class Proyecto {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public category: string,
    public year: number,
    public langs: string,
    public image: string
  ){}
}
