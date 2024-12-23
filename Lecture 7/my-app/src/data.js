export const events = [
  {
    id: 1,
    img: "/images/img1.jfif",
    title: "Event 1",
    date: "2022-01-01",
    subTitle: "This is a subtitle for event 1",
    description: "This is a description for event 1",
  },
  {
    id: 2,
    img: "/images/img2.jfif",
    title: "Event 2",
    date: "2022-01-01",
    subTitle: "This is a subtitle for event 2",
    description: "This is a description for event 2",
  },
  {
    id: 3,
    img: "/images/img3.jfif",
    title: "Event 3",
    date: "2022-01-01",
    subTitle: "This is a subtitle for event 3",
    description: "This is a description3 for event 3",
  },
];
export const getEvents = ()=>{
  return events;
}
export const getEventById= (id)=>{
  return events.find(event=>event.id===id);
}
