export class Product {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
  ) {}

  updateWith({
    name,
    description,
    price,
  }: {
    name?: string;
    description?: string;
    price?: number;
  }) {
    if (name) this.name = name;
    if (description) this.description = description;
    if (price !== undefined) this.price = price;
  }
}
