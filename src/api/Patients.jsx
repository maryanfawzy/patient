export const fetchJessicaData = async () => {
  try {
    const res = await fetch('https://api-coalition.tech/v1/patients');
    const data = await res.json();
    const jessica = data.find((p) => p.name === 'Jessica Taylor');
    return jessica;
  } catch (error) {
    console.error('Error fetching Jessica data:', error);
    return null;
  }
};

