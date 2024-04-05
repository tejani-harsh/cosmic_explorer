export interface INasa {
  photos: INasaPhoto[];
}

export interface INasaPhoto {
  id: number;
  sol: number;
  camera: INasaCamera;
  img_src: string;
  earth_date: Date;
  rover: Rover;
}

export interface INasaCamera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

export interface Rover {
  id: number;
  name: string;
  landing_date: Date;
  launch_date: Date;
  status: string;
  max_sol: number;
  max_date: Date;
  total_photos: number;
  cameras: CameraElement[];
}

export interface CameraElement {
  name: string;
  full_name: string;
}
