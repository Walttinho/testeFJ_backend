import dbClient from "../config/database";

export class CircuitService {
  async calculateShortestCircuit(): Promise<number> {
    const query = "SELECT id, x, y FROM clients";
    const { rows }: { rows: { id: number; x: number; y: number }[] } =
      await dbClient.query(query);
    console.log(rows);

    const clients: { id: number; x: number; y: number }[] = rows.map((row) => ({
      id: row.id,
      x: row.x,
      y: row.y,
    }));
    console.log(clients);

    const calculateDistance = (
      p1: { x: number; y: number },
      p2: { x: number; y: number }
    ): number => {
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const calculateTotalDistance = (route: number[]): number => {
      let totalDistance = 0;
      for (let i = 0; i < route.length - 1; i++) {
        totalDistance += calculateDistance(
          clients[route[i]],
          clients[route[i + 1]]
        );
      }
      return totalDistance;
    };

    const twoOpt = (route: number[]): number[] => {
      let bestRoute = [...route];
      let bestDistance = calculateTotalDistance(route);

      for (let i = 0; i < route.length - 1; i++) {
        for (let j = i + 2; j < route.length; j++) {
          const newRoute = [...route];
          newRoute[i] = route[j];
          newRoute[j] = route[i];
          const newDistance = calculateTotalDistance(newRoute);
          if (newDistance < bestDistance) {
            bestDistance = newDistance;
            bestRoute = newRoute;
          }
        }
      }

      return bestRoute;
    };

    let route = [0];

    for (let i = 1; i < clients.length; i++) {
      route.push(i);
    }

    route = twoOpt(route);

    const totalDistance = calculateTotalDistance(route);

    return totalDistance;
  }
}
