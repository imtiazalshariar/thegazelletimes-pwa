"use client";
import { useEffect, useState } from "react";
import Flash from "./Flash";

export default function FlashGroup(props: any) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setData(props.data);
  }, []);

  const shiftCardSequence = () => {
    if (data.length > 0) {
      const newData: any[] = [...data];
      let firstItem = newData.shift();
      newData.push(firstItem);
      setData(newData);
    }
  };

  return (
    <div className="w-full h-80 lg:h-auto rounded-lg">
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
