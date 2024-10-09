const formatDestination = (destination: string) =>
  destination.split(" ").join("+");

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

export const getDirections = async (origin: string, destination: string) => {
  if (!origin || !destination)
    return { error: "Please provide both origin and destination" };

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

  try {
    const response = await fetch(newRequest.toString());
    if (!response.ok) {
      return { error: "Failed to fetch directions" };
    }
    return { success: await response.json() };
  } catch (error) {
    return { error: "Failed to call API" };
  }
};

export const exportForTesting = {
  calculateArrivalDateTime,
};
