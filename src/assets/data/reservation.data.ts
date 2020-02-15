export interface IReservation {
  id: string;
  userid: string;
  name: string;
  surname: string;
  guests: number;
  roomType: string;
  checkInDate: Date;
  checkOutDate: Date;
  price: number;
}

export const AllReservationsData: IReservation[] = [
  {
    id: "1234343",
    userid: "12345",
    name: "Berk",
    surname: "Elmas",
    guests: 4,
    roomType: "Family Room",
    checkInDate: new Date(),
    checkOutDate: new Date(),
    price: 300
  },
  {
    id: "1232333",
    userid: "123456",
    name: "Ali",
    surname: "Yilmaz",
    guests: 4,
    roomType: "Family Room",
    checkInDate: new Date(),
    checkOutDate: new Date(),
    price: 300
  },
  {
    id: "123343",
    userid: "2344",
    name: "Mert",
    surname: "Yildirim",
    guests: 4,
    roomType: "King Suite",
    checkInDate: new Date(),
    checkOutDate: new Date(),
    price: 300
  },
  {
    id: "123563",
    userid: "44334",
    name: "Osman",
    surname: "Keser",
    guests: 4,
    roomType: "Family Room",
    checkInDate: new Date(),
    checkOutDate: new Date(),
    price: 100
  },
  {
    id: "128733",
    userid: "79990",
    name: "Ahmet",
    surname: "Elmas",
    guests: 4,
    roomType: "Family Room",
    checkInDate: new Date(),
    checkOutDate: new Date(),
    price: 100
  },
  {
    id: "12393",
    userid: "988",
    name: "Serdar",
    surname: "Orman",
    guests: 4,
    roomType: "Family Room",
    checkInDate: new Date(),
    checkOutDate: new Date(),
    price: 200
  },
  {
    id: "12339",
    userid: "9800",
    name: "Aziz",
    surname: "Yildirim",
    guests: 4,
    roomType: "Family Room",
    checkInDate: new Date(),
    checkOutDate: new Date(),
    price: 150
  },
  {
    id: "12338",
    userid: "9800",
    name: "Aziz",
    surname: "Yildirim",
    guests: 4,
    roomType: "Family Room",
    checkInDate: new Date(),
    checkOutDate: new Date(),
    price: 150
  },
  {
    id: "17233",
    userid: "9800",
    name: "Aziz",
    surname: "Yildirim",
    guests: 4,
    roomType: "Family Room",
    checkInDate: new Date(),
    checkOutDate: new Date(),
    price: 150
  },
  {
    id: "12363",
    userid: "9800",
    name: "Aziz",
    surname: "Yildirim",
    guests: 4,
    roomType: "Family Room",
    checkInDate: new Date(),
    checkOutDate: new Date(),
    price: 150
  },
  {
    id: "12353",
    userid: "9800",
    name: "Aziz",
    surname: "Yildirim",
    guests: 4,
    roomType: "Family Room",
    checkInDate: new Date(),
    checkOutDate: new Date(),
    price: 150
  },
  {
    id: "12343",
    userid: "9800",
    name: "Aziz",
    surname: "Yildirim",
    guests: 4,
    roomType: "Family Room",
    checkInDate: new Date(),
    checkOutDate: new Date(),
    price: 150
  },
  {
    id: "12333",
    userid: "9800",
    name: "Aziz",
    surname: "Yildirim",
    guests: 4,
    roomType: "Family Room",
    checkInDate: new Date(),
    checkOutDate: new Date(),
    price: 150
  },
  {
    id: "12233",
    userid: "9800",
    name: "Aziz",
    surname: "Yildirim",
    guests: 4,
    roomType: "Family Room",
    checkInDate: new Date(),
    checkOutDate: new Date(),
    price: 150
  },
  {
    id: "12313",
    userid: "9800",
    name: "Aziz",
    surname: "Yildirim",
    guests: 4,
    roomType: "Family Room",
    checkInDate: new Date(),
    checkOutDate: new Date(),
    price: 150
  }
];
