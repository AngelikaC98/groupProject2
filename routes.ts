export const somethingDirections = (origin: string, destination: string) => {
  const DIRECTIONS_ENDPOINT =
    "https://maps.googleapis.com/maps/api/directions/json?key=" +
    process.env.GOOGLE_MAPS_API_KEY +
    "&libraries=places";

  const newRequest = new URL(DIRECTIONS_ENDPOINT);
  newRequest.searchParams.append("origin", formatDestination(origin));
  newRequest.searchParams.append("destination", formatDestination(destination));

  newRequest.searchParams.append(
    "arrival_time",
    "" + calculateArrivalDateTime().getTime()
  );

  console.log(newRequest.toString());
};

const calculateArrivalDateTime = (): Date => {
  const date = new Date();
  if (date.getHours() < 9) {
    date.setHours(9, 0, 0, 0);
    return date;
  }

  date.setDate(date.getDate() + 1);
  date.setHours(9, 0, 0, 0);
  return date;
};

const formatDestination = (destination: string) =>
  destination.split(" ").join("+");

export const exportForTesting = {
  calculateArrivalDateTime,
};
