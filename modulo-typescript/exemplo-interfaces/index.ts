interface ICustomer {
    name: string;
    age: number;
}

interface IAddress {
    street: string;
}

interface ICustomerProfile extends ICustomer, IAddress {}

const newProfile: ICustomerProfile = {
    name: 'John',
    age: 33,
    street: 'Rua XYZ'
}

type TCustomer = {
    name: string;
    age: number;
}

type TAddress = {
    street: string;
}

type TCustomerProfile = TCustomer & TAddress;

const newProfileTwo: TCustomerProfile = {
    name: 'John',
    age: 33,
    street: 'Rua XYZ'
}