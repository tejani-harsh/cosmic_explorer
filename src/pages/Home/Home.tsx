import { useEffect, useState } from "react";

export default function Home() {
  const [response, setResponse] = useState();
  useEffect(() => {
    getApiDate();
  }, []);

  async function getApiDate() {
    await fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=wKxsqvALK0fsmlLKwiJbcCMkZJG1vS8erbX3dgqf"
    )
      .then((responseData) => responseData.json())
      .then((response) => setResponse(response.photos));
  }

  const photos: [
    {
      id: number;
      camera: {
        id: number;
        name: string;
        rover_id: number;
        full_name: string;
      };
      img_src: string;
      earth_date: Date;
      rover: {
        id: number;
        name: string;
        landing_date: Date;
        launch_date: Date;
        status: string;
        max_sol: number;
        max_date: Date;
        total_photos: number;
        cameras: [
          {
            name: string;
            full_name: string;
          },
          {
            name: string;
            full_name: string;
          },
          {
            name: string;
            full_name: string;
          },
          {
            name: string;
            full_name: string;
          },
          {
            name: string;
            full_name: string;
          },
          {
            name: string;
            full_name: string;
          },
          {
            name: string;
            full_name: string;
          }
        ];
      };
    }
  ] = response?.map((a) => {
    return a;
  });

  return <>{JSON.stringify(photos)}</>;
}
