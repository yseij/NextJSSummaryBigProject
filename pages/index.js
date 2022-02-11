import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://media.gettyimages.com/photos/hallstatt-village-and-hallstatter-see-lake-in-austria-picture-id1150609477?s=612x612",
    address: "some address 21, Hamont",
    description: "First meetup yeah",
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://media.gettyimages.com/photos/hallstatt-village-and-hallstatter-see-lake-in-austria-picture-id1150609477?s=612x612",
    address: "some address 22, Hamont",
    description: "Second meetup yeah",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
