export type WeatherData = {
    name: string;
    sys: {
      country: string;
    };
    main: {
      temp: number;
    };
    weather: {
      description: string;
    }[];
  };
  
  export const fetchWeather = async (city: string): Promise<WeatherData | null> => {
    try {
      const apiKey = ''; 
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data: WeatherData = await response.json();
      if (response.ok) {
        return data;
      }
      return null;
    } catch (error) {
      return null;
    }
  };
  