import { IAppointment, Status } from "../models/appointment";
import { IBloodRequest } from "../models/bloodRequest";
import { Family, IBloodSupply } from "../models/bloodSupply";
import { ICenter } from "../models/center";
import { IDonation } from "../models/donation";
import { IEvent } from "../models/event";
import { IRecalamtion } from "../models/reclamation";
import { IResponsable, IUser } from "../models/user";


const amal_toumi = "../../assets/img/users/amal_toumi.jpg";
 const ahlem_sellami = "../../assets/img/users/ahlem_sellami.jpg";
 const mourad_ennour = "../../assets/img/users/mourad_ennour.jpg";
const kamal_ghanmi = "../../assets/img/users/kamal_ghanmi.jpg";

export const userLogo = "../../assets/img/users/avatar.png";

export const users: IUser[] = [
  {
    id: 1,
    cin: 12121525,
    firstName: "Mourad",
    lastName: "Ennour",
    phone: 25151573,
    email: "mourad.ennour@gmail.com",
    password: "123456",
    username: "Maskot",
    role: "citoyen",
    avatar: mourad_ennour,
    age: 25,
    city: "Ariana",
    gender: "male",
    blood: "O+",
  },
  {
    id: 2,
    cin: 12121526,
    firstName: "Amal",
    lastName: "Chebbi",
    username: "Mindra",
    phone: 55427821,
    email: "amal.1.tmm@yahoo.fr",
    password: "123456",
    role: "responsable",
    center: "Barrett Arnold",
    avatar: amal_toumi,
    age: 20,
    city: "Kasserine",
    gender: "female",
    blood: "O-",
  },
  {
    id: 3,
    cin: 12121527,
    firstName: "Ahlem",
    lastName: "sellami",
    username: "SellM",
    phone: 47721092,
    email: "sellami.ahlem.99@gmail.com",
    password: "123456",
    role: "responsable",
    center: "Bradley Webster",
    avatar: ahlem_sellami,
    age: 31,
    city: "Gafsa",
    gender: "female",
    blood: "B+",
  },
  {
    id: 4,
    cin: 12121528,
    firstName: "Kamal",
    lastName: "Ghanmi",
    username: "Kim",
    phone: 29089742,
    email: "kamal.gm@gmail.com",
    password: "123456",
    role: "admin",
    avatar: kamal_ghanmi,
    age: 17,
    city: "Beja",
    gender: "male",
    blood: "AB+",
  },
];





export const centers: ICenter[] = [
  {
    name: "Bradley Webster",
    phone: "1-347-351-6623",
    email: "eleifend.cras@aol.org",
    address: "4002 Quisque Rd.",
    id: 1,
  },
  {
    name: "Barrett Arnold",
    phone: "(373) 503-6318",
    email: "molestie.sed.id@yahoo.net",
    address: "728-726 Urna Avenue",
    id: 2,
  },
  {
    name: "Reagan Watson",
    phone: "1-131-454-5165",
    email: "porta.elit.a@yahoo.net",
    address: "729-8614 Congue Rd.",
    id: 3,
  },
  {
    name: "Gary Herrera",
    phone: "(654) 537-5168",
    email: "blandit.at@icloud.couk",
    address: "Ap #499-6492 Amet St.",
    id: 4,
  },
  {
    name: "Cruz Erickson",
    phone: "(771) 477-1292",
    email: "amet.lorem@google.com",
    address: "8885 Nonummy Avenue",
    id: 5,
  },
];
export const donations: IDonation[] = [
  {
    id: 1,
    date: "Jan 7, 2022",
    user_id: 2,
    user: "Amal Chebbi",
    center: "Barrett Arnold",
  },
  {
    id: 2,
    date: "Nov 22, 2021",
    user_id: 3,
    user: "Ahlem Sellami",
    center: "Barrett Arnold",
  },
  {
    id: 3,
    date: "Jun 17, 2021",
    user_id: 1,
    user: "Mourad Ennour",
    center: "Barrett Arnold",
  },
  {
    id: 4,
    date: "Aug 3, 2021",
    user_id: 4,
    user: "Kamal Ghanmi",
    center: "Barrett Arnold",
  },
  {
    id: 5,
    date: "Mar 1, 2022",
    user_id: 4,
    user: "Kamal Ghanmi",
    center: "Barrett Arnold",
  },
  {
    id: 6,
    date: "Aug 9, 2021",
    user_id: 4,
    user: "Kamal Ghanmi",
    center: "Barrett Arnold",
  },
  {
    id: 7,
    date: "Apr 16, 2021",
    user_id: 4,
    user: "Kamal Ghanmi",
    center: "Barrett Arnold",
  },
];

export const responsables: IResponsable[] = [
  {
    id: 1,
    firstName: "Kim",
    lastName: "Reid",
    phone: 81737751,
    email: "lacus.cras@outlook.couk",
    cin: 14930069,
    center: "Bradley Webster",
  },
  {
    id: 2,
    firstName: "Vaughan",
    lastName: "Ratliff",
    phone: 44173068,
    email: "nunc@aol.com",
    cin: 16440554,
    center: "Barrett Arnold",
  },
  {
    id: 3,
    firstName: "Joel",
    lastName: "Hodge",
    phone: 21081076,
    email: "natoque@aol.ca",
    cin: 17470831,
    center: "Reagan Watson",
  },
  {
    id: 4,
    firstName: "Peter",
    lastName: "Stewart",
    phone: 60664363,
    email: "ipsum@google.ca",
    cin: 16775016,
    center: "Reagan Watson",
  },
  {
    id: 5,
    firstName: "Jada",
    lastName: "Whitaker",
    phone: 35558571,
    email: "sit.amet@aol.com",
    cin: 17831581,
    center: "Gary Herrera",
  },
];

export const appointments: IAppointment[] = [
  {
    id: 1,
    firstName: "Isabella",
    lastName: "Lowe",
    date: "21-08-21",
    center: "Barrett Arnold",
    status: Status.pending,
  },
  {
    id: 2,
    firstName: "Serena",
    lastName: "Mcgee",
    date: "07-02-22",
    center: "Reagan Watson",
    status: Status.pending,
  },
  {
    id: 3,
    firstName: "Cherokee",
    lastName: "Hewitt",
    date: "28-04-21",
    center: "Gary Herrera",
    status: Status.declined,
  },
  {
    id: 4,
    firstName: "Benjamin",
    lastName: "Parker",
    date: "01-08-21",
    center: "Gary Herrera",
    status: Status.accepted,
  },
  {
    id: 5,
    firstName: "Zenaida",
    lastName: "Murray",
    date: "13-11-22",
    center: "Bradley Webster",
    status: Status.pending,
  },
];

export const reclamations: IRecalamtion[] = [
  {
    id: 1,
    email: "nullam@icloud.com",
    date: "Apr 29, 2022",
    message:
      "euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc",
  },
  {
    id: 2,
    email: "aliquam.vulputate.ullamcorper@outlook.ca",
    date: "Nov 25, 2021",
    message:
      "Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum",
  },
  {
    id: 3,
    email: "placerat.velit@protonmail.edu",
    date: "Sep 30, 2022",
    message:
      "lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu,",
  },
  {
    id: 4,
    email: "suscipit@yahoo.org",
    date: "Aug 11, 2021",
    message:
      "quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
  },
  {
    id: 5,
    email: "ligula.nullam@protonmail.couk",
    date: "May 27, 2022",
    message:
      "semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget",
  },
];

export const bloodSupply: IBloodSupply[] = [
  {
    id: 1,
    family: Family.aNeg,
    supply: 0,
  },
  {
    id: 2,
    family: Family.aPos,
    supply: 0,
  },
  {
    id: 3,
    family: Family.bNeg,
    supply: 0,
  },
  {
    id: 4,
    family: Family.bPos,
    supply: 0,
  },
  {
    id: 5,
    family: Family.abNeg,
    supply: 0,
  },
  {
    id: 6,
    family: Family.abPos,
    supply: 0,
  },
];

export const bloodRequests: IBloodRequest[] = [
  {
    id: 1,
    firstName: "Matthew",
    lastName: "Hyde",
    date: "Apr 8, 2022",
    center: "Barrett Arnold",
  },
  {
    id: 2,
    firstName: "Travis",
    lastName: "Tyson",
    date: "Jun 22, 2022",
    center: "Bradley Webster",
  },
  {
    id: 3,
    firstName: "Addison",
    lastName: "Holland",
    date: "May 27, 2022",
    center: "Reagan Watson",
  },
  {
    id: 4,
    firstName: "Rhea",
    lastName: "Barton",
    date: "Sep 5, 2022",
    center: "Reagan Watson",
  },
  {
    id: 5,
    firstName: "Sylvia",
    lastName: "Fowler",
    date: "Jan 6, 2023",
    center: "Gary Herrera",
  },
];

export const events: IEvent[] = [
  {
    id: 1,
    name: "lectus pede, ultrices a,",
    date: "Apr 8, 2022",
    center: "Gary Herrera",
    isParticipated: false,
  },
  {
    id: 2,
    name: "molestie in, tempus eu,",
    date: "Jun 22, 2022",
    center: "Reagan Watson",
    isParticipated: false,
  },
  {
    id: 3,
    name: "adipiscing fringilla, porttitor vulputate,",
    date: "May 27, 2022",
    center: "Reagan Watson",
    isParticipated: false,
  },
  {
    id: 4,
    name: "ut, nulla. Cras eu",
    date: "Sep 5, 2022",
    center: "Barrett Arnold",
    isParticipated: false,
  },
  {
    id: 5,
    name: "amet diam eu dolor",
    date: "Jan 6, 2023",
    center: "Bradley Webster",
    isParticipated: false,
  },
];
