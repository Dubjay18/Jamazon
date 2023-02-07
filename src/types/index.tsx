export interface IProduct {
  id?: number;
  title: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
  rating?: IRating;
}
export interface IRating {
  rate?: number;
  count?: number;
}
export interface IChildren {
  children: JSX.Element[] | JSX.Element;
}
export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
  phoneNumber: string;
}
export interface IUser {
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address?: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
}
export interface ILoginUser {
  username?: string;
  password?: string;
}
