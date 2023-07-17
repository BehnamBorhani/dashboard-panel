let xAxisData = [
   {
      name: "Jan",
      Sale: 112_000,
   },
   {
      name: "Feb",
      Sale: 99_000,
   },
   {
      name: "Mar",
      Sale: 12_090,
   },
   {
      name: "Apr",
      Sale: 99_000,
   },
   {
      name: "May",
      Sale: 54_000,
   },
   {
      name: "Jun",
      Sale: 85_000,
   },
   {
      name: "Jul",
      Sale: 34_000,
   },
   {
      name: "Agu",
      Sale: 18_598,
   },
   {
      name: "Sep",
      Sale: 0,
   },
   {
      name: "Oct",
      Sale: 73_078,
   },
   {
      name: "Nov",
      Sale: 12_900,
   },
   {
      name: "Dev",
      Sale: 97_000,
   },
];

const newMembers = [
   {
      id: 1,
      username: "Nasrin Shakeri",
      title: "Frontend Developer",
      img: "images/L1.jpg",
   },
   {
      id: 2,
      username: "Nima Jenabpoor",
      title: "Backend Developer",
      img: "images/M1.jpg",
   },
   {
      id: 3,
      username: "Saba Mokhtari",
      title: "UI/UX Designer",
      img: "images/L2.jpg",
   },
   {
      id: 4,
      username: "Erfan Rezayi",
      title: "Fullstack Developer",
      img: "images/M2.jpg",
   },
   {
      id: 5,
      username: "Fatemeh Chahardoli",
      title: "Software Engineer",
      img: "images/L7.jpg",
   },
   {
      id: 6,
      username: "Arvin Aria",
      title: "Hacker",
      img: "images/M6.jpg",
   },
];

const transactions = [
   {
      id: 1,
      customer: "Behnam Borhani",
      date: "12 Jun 2022",
      amount: 1850,
      status: "Approved",
      img: "images/M3.jpg",
   },
   {
      id: 2,
      customer: "Sheida Jahanbin",
      date: "23 Jul 2022",
      amount: 900,
      status: "Declined",
      img: "images/L3.jpg",
   },
   {
      id: 3,
      customer: "Hossein Saneei",
      date: "28 May 2022",
      amount: 560,
      status: "Pending",
      img: "images/M4.jpg",
   },
   {
      id: 4,
      customer: "Sanaz Vafayi",
      date: "1 Feb 2022",
      amount: 1200,
      status: "Approved",
      img: "images/L4.jpg",
   },
];

let userRows = [
   {
      id: 1,
      username: "Nasrin Shakeri",
      job: "Frontend Developer",
      avatar: "images/L1.jpg",
      status: "active",
      transaction: "$129.52",
      email: "nansii@gmail.com",
   },
   {
      id: 2,
      username: "Nima Jenabpoor",
      job: "Backend Developer",
      avatar: "images/M1.jpg",
      status: "non-active",
      transaction: "$110",
      email: "jenabpoor@gmail.com",
   },
   {
      id: 3,
      username: "Saba Mokhtari",
      job: "UI/UX Designer",
      avatar: "images/L2.jpg",
      status: "active",
      transaction: "$98",
      email: "Mokhtari@gmail.com",
   },
   {
      id: 4,
      username: "Erfan Rezayi",
      job: "Fullstack Developer",
      avatar: "images/M2.jpg",
      status: "active",
      transaction: "$0",
      email: "giga_plus@gmail.com",
   },
   {
      id: 5,
      username: "Fatemeh Chahardoli",
      job: "Software Engineer",
      avatar: "images/L7.jpg",
      status: "active",
      transaction: "$55.98",
      email: "fati4doli@gmail.com",
   },
   {
      id: 6,
      username: "Arvin Aria",
      job: "Hacker",
      avatar: "images/M6.jpg",
      status: "active",
      transaction: "$55.98",
      email: "ariaweb3@gmail.com",
   },
   {
      id: 7,
      username: "Behnam Borhani",
      job: "MERN Stack Developer",
      avatar: "images/avatar.jpg",
      status: "active",
      transaction: "$55.98",
      email: "behnamborhani95@gmail.com",
   },
   {
      id: 8,
      username: "Sheida Jahanbin",
      job: "Frontend Developer",
      avatar: "images/L3.jpg",
      status: "active",
      transaction: "$55.98",
      email: "Sheida@gmail.com",
   },
   {
      id: 9,
      username: "Hossein Saneei",
      job: "SEO Expert",
      avatar: "images/M4.jpg",
      status: "non-active",
      transaction: "$55.98",
      email: "MHSaneei@gmail.com",
   },
   {
      id: 10,
      username: "Sanaz Vafayi",
      job: "Blockchain Developer",
      avatar: "images/L4.jpg",
      status: "non-active",
      transaction: "$55.98",
      email: "Vafayi@gmail.com",
   },
];

export { xAxisData, newMembers, transactions, userRows };
