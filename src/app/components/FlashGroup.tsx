"use client";
import { useEffect, useState } from "react";
import Flash from "./Flash";

export default function FlashGroup(props: any) {
  const [data, setData] = useState<any[]>([]);
  const [interacting, setInteractingState] = useState(false);

  useEffect(() => {
    setData(props.data);
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const interval = setInterval(() => {
        if (!interacting) {
          shiftCardSequence();
        }
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [data, interacting]);

  const shiftCardSequence = () => {
    if (data.length > 0) {
      const newData: any[] = [...data];
      let firstItem = newData.shift();
      newData.push(firstItem);
      setData(newData);
    }
  };

  return (
    <div className="w-full h-80 md:h-auto lg:flex-1 rounded-lg">
      <div className="stack h-full w-full">
        {data.map((item: any, index: number) => (
          <Flash
            id={index.toString()}
            onClick={shiftCardSequence}
            key={item.id}
            title={item.attributes.incident}
            type={item.attributes.type}
            location={item.attributes.location}
          />
        ))}
      </div>
    </div>
  );
}
