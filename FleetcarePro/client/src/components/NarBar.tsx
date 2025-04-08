import { Link } from "lucide-react";

export default function NarBar() {
  return (
    <nav>
      <p>Logo</p>
      <ul>
        <li>
          <Link to="/">Work Orders</Link>
        </li>
      </ul>
    </nav>
  );
}
