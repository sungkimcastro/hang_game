const getPuzzle = async wordCount => {
  const promise = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`);
  if (promise.status === 200) {
    return promise.json();
  } else {
    throw new Error("Oops, there was an error");
  }
};

// Get Location
const getLocation = async () => {
  const location = await fetch("//ipinfo.io/json?token=87a0ca19471bf2");

  if (location.status === 200) {
    return location.json();
  } else {
    throw new Error("Unable to get the current location");
  }
};

const getCountry = async countryCode => {
  const promise = await fetch("//restcountries.eu/rest/v2/all");

  if (promise.status === 200) {
    const countries = await promise.json();
    const country = countries.find(
      country => country.alpha2Code === countryCode.toUpperCase()
    );
    return country.name;
  } else {
    throw new Error("Oops!");
  }
};

const getCurrentCountry = async () => {
  const location = await getLocation();
  return getCountry(location.country);
};

export { getPuzzle as default };
