import { INasaPhoto } from "../../types";

export default function Card({ data }: { data: INasaPhoto }) {
  return (
    <div
      key={data.id ?? Math.random() * 891}
      className="flex-1 rounded-md overflow-hidden bg-zinc-200 mt-1 w-full hover:cursor-pointer"
      onClick={() => window.open(data.img_src, "_blank")}
    >
      <img
        src={data.img_src}
        alt="mars image"
        className="max-h-[300px] w-full"
        style={{ width: "100%", minHeight: "300px", objectFit: "cover" }}
      />
      <div className="p-3">
        <h4>{data.rover.name} Rover</h4>
        <p className="text-sm">Camera: {data.camera.full_name}</p>
        <p className="text-sm">
          Earth Date: {new Date(data.earth_date).toLocaleString()}
        </p>
      </div>
    </div>
  );
}
