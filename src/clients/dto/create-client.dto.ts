export class CreateClientDto {
  name: string;
  email: string;
  phone: string;
  x?: number;
  y?: number;

  constructor(
    name: string,
    email: string,
    phone: string,
    x?: number,
    y?: number
  ) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.x = x;
    this.y = y;
  }
}
