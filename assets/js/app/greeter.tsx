import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export interface GreeterProps {
  name: string;
  count: number;
  updateCount(newCount: number): any;
}

export const Greeter: React.FC<GreeterProps> = (props: GreeterProps) => {
  const { name, updateCount } = props;
  const count = props.count || 0;

  const incrementCount = (increment: number) => {
    updateCount(count + increment);
    fetch("http://localhost:4000/test/json/other")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log("data", data); // Log the response data
        toast(data.data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <section className="phx-hero">
      <h1 className="text-red-500">
        Welcome to {name} with TypeScript and React!
      </h1>
      <Button onClick={() => incrementCount(1)}>Increment {name}</Button>
      <br />
      <span>{count}</span>
    </section>
  );
};
