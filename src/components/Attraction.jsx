import { useParams } from "react-router-dom";

export default function Attraction() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Atracción {id}</h1>
      <p>Más información o integración con la API aquí.</p>
    </div>
  );
}
