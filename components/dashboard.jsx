/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/4l1a9TTsxvN
 */
import { CardHeader, CardContent, Card } from "../components/ui/card"

export function Dashboard() {
  return (
    (<Card className="container flex flex-col w-full">
      <CardHeader className="flex flex-col items-center gap-4">
        <h2 className="text-3xl font-bold tracking-tighter text-center">Your Carbon Emissions Dashboard</h2>
        <p
          className="text-sm font-medium text-gray-500 dark:text-gray-400 text-center">
          You aren't the problem, but you can be part of the solution.
        </p>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div
          className="border p-4 rounded-lg flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold">-15%</h1>
          <p
            className="text-sm font-medium text-gray-500 dark:text-gray-400 text-center">Carbon Footprint</p>
        </div>
        <div className="grid gap-1.5">
          <div className="border p-4 rounded-lg flex flex-col items-center">
            <h1 className="text-4xl font-semibold">2.5K</h1>
            <p
              className="text-sm font-medium text-gray-500 dark:text-gray-400 text-center">
              Olympic-sized swimming pools saved
            </p>
          </div>
          <div className="border p-4 rounded-lg flex flex-col items-center">
            <h1 className="text-4xl font-semibold">+50K</h1>
            <p
              className="text-sm font-medium text-gray-500 dark:text-gray-400 text-center">Equivalent trees planted</p>
          </div>
        </div>
      </CardContent>
    </Card>)
  );
}
