export const fetchJessicaData = async () => {
  try {
    const username = 'coalition';
    const password = 'skills-test';
    const encoded = btoa(`${username}:${password}`);

    const res = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
      headers: {
        Authorization: `Basic ${encoded}`,
      },
    });

    const data = await res.json();
    const jessica = data.find((p) => p.name === 'Jessica Taylor');
    return jessica;
  } catch (error) {
    console.error('Error fetching Jessica data:', error);
    return null;
  }
};

