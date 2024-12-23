// components/Card.js

import { Button } from "../ui/button";


export default function Card({ title, description, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-xs">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 text-sm mb-4">{description}</p>
      <div className="flex justify-between">
        <Button variant="secondary" onClick={onEdit}>
          Edit
        </Button>
        <Button variant="destructive" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}
