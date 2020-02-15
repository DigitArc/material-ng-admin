export interface ICheckIn {
  id: string;
  name: string;
  surname: string;
  roomType: string;
  checkInDate: Date;
  passportPhotos: {
    url: string;
  }[];
  identityCardPhotos: {
    url: string;
  }[];
  status: "Approved" | "Pending" | "Declined";
  reservationId: string;
}

export const AllCheckInData: ICheckIn[] = [
  {
    id: "123",
    name: "Berk",
    surname: "Elmas",
    roomType: "King Suite",
    checkInDate: new Date(),
    passportPhotos: [
      {
        url:
          "https://eurasianet.org/sites/default/files/styles/article/public/2019-12/kyrgiz.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/6/6d/Indonesian_passport_data_page.jpg"
      }
    ],
    identityCardPhotos: [
      {
        url:
          "https://i1.wp.com/www.expatincroatia.com/wp-content/uploads/2019/09/osobna-iskaznica-croatian-national-ID-card.jpg"
      }
    ],
    status: "Pending",
    reservationId: "1234343"
  },
  {
    id: "1223",
    name: "Ali",
    surname: "Yilmaz",
    roomType: "Family Room",
    checkInDate: new Date(),
    passportPhotos: [
      {
        url:
          "https://eurasianet.org/sites/default/files/styles/article/public/2019-12/kyrgiz.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/6/6d/Indonesian_passport_data_page.jpg"
      }
    ],
    identityCardPhotos: [
      {
        url:
          "https://i1.wp.com/www.expatincroatia.com/wp-content/uploads/2019/09/osobna-iskaznica-croatian-national-ID-card.jpg"
      }
    ],
    status: "Approved",
    reservationId: "1234343"
  },
  {
    id: "3221",
    name: "Osman",
    surname: "Yildirim",
    roomType: "Single Room",
    checkInDate: new Date(),
    passportPhotos: [
      {
        url:
          "https://eurasianet.org/sites/default/files/styles/article/public/2019-12/kyrgiz.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/6/6d/Indonesian_passport_data_page.jpg"
      }
    ],
    identityCardPhotos: [
      {
        url:
          "https://i1.wp.com/www.expatincroatia.com/wp-content/uploads/2019/09/osobna-iskaznica-croatian-national-ID-card.jpg"
      }
    ],
    status: "Pending",
    reservationId: "1234343"
  },
  {
    id: "12003",
    name: "Emre",
    surname: "Kara",
    roomType: "Double Room",
    checkInDate: new Date(),
    passportPhotos: [
      {
        url:
          "https://eurasianet.org/sites/default/files/styles/article/public/2019-12/kyrgiz.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/6/6d/Indonesian_passport_data_page.jpg"
      }
    ],
    identityCardPhotos: [
      {
        url:
          "https://i1.wp.com/www.expatincroatia.com/wp-content/uploads/2019/09/osobna-iskaznica-croatian-national-ID-card.jpg"
      }
    ],
    status: "Pending",
    reservationId: "1234343"
  },
  {
    id: "1823",
    name: "Ahmet",
    surname: "Kara",
    roomType: "Single Room",
    checkInDate: new Date(),
    passportPhotos: [
      {
        url:
          "https://eurasianet.org/sites/default/files/styles/article/public/2019-12/kyrgiz.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/6/6d/Indonesian_passport_data_page.jpg"
      }
    ],
    identityCardPhotos: [
      {
        url:
          "https://i1.wp.com/www.expatincroatia.com/wp-content/uploads/2019/09/osobna-iskaznica-croatian-national-ID-card.jpg"
      }
    ],
    status: "Declined",
    reservationId: "1234343"
  },
  {
    id: "1293",
    name: "Yildirim",
    surname: "Ozturk",
    roomType: "King Suite",
    checkInDate: new Date(),
    passportPhotos: [
      {
        url:
          "https://eurasianet.org/sites/default/files/styles/article/public/2019-12/kyrgiz.jpg"
      },
      {
        url:
          "https://upload.wikimedia.org/wikipedia/commons/6/6d/Indonesian_passport_data_page.jpg"
      }
    ],
    identityCardPhotos: [
      {
        url:
          "https://i1.wp.com/www.expatincroatia.com/wp-content/uploads/2019/09/osobna-iskaznica-croatian-national-ID-card.jpg"
      }
    ],
    status: "Approved",
    reservationId: "1234343"
  }
];
