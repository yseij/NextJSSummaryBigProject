import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://media.gettyimages.com/photos/hallstatt-village-and-hallstatter-see-lake-in-austria-picture-id1150609477?s=612x612"
      title="first meetup"
      address="some street"
      description="this is my first meetup"
    />
  );
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://media.gettyimages.com/photos/hallstatt-village-and-hallstatter-see-lake-in-austria-picture-id1150609477?s=612x612",
        id: meetupId,
        title: "first meetup",
        address: "some street",
        description: "this is my first meetup",
      },
    },
  };
}

export default MeetupDetails;
