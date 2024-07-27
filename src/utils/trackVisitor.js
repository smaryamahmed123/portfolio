import axios from 'axios';

const trackVisitor = async () => {
  try {
    const response = await axios.get('https://api.ipgeolocation.io/ipgeo', {
      params: {
        apiKey: 'a29b63851dd8495e985698bb7158e7bd', // Replace with your ipgeolocation.io API key
      },
    });
    const { ip, city, country_name } = response.data;
    const location = `${city}, ${country_name}`;

    // Send this data to your backend
    await axios.post('http://localhost:5000/api/visit', { ip, location });
  } catch (error) {
    console.error('Error tracking visitor:', error);
  }
};

export default trackVisitor;
