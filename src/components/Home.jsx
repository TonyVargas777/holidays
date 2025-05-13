import { Link } from "react-router-dom";

const dummyAttractions = [
  { id: "1", name: "Alhambra de Granada" },
  { id: "2", name: "Museo del Prado" },
];

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Atracciones turísticas</h1>
      <ul className="space-y-4">
        {dummyAttractions.map((attraction) => (
          <li key={attraction.id}>
            <Link to={`/attraction/${attraction.id}`} className="text-blue-600 underline">
              {attraction.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
