interface FlashProps {
  title: string;
  id: string;
  onClick?: () => void;
  type: string;
}

export default function Flash(props: FlashProps) {
  const randomColors = [
    "#F7B538",
    "#F52F57",
    "#95E06C",
    "#6874E8",
    "#2CF6B3",
    "#F7567C",
    "#05B2DC",
    "#09BC8A",
    "#F05365",
  ];

  return (
    <div
      onClick={props.onClick}
      style={{
        backgroundColor:
          randomColors[Math.floor(Math.random() * randomColors.length)],
      }}
      className={
        "w-full drop-shadow-lg h-full cursor-pointer select-none p-5 text-white rounded-lg transition-all flex flex-col justify-between gap-5"
      }
    >
      <h2 className="text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold">
        {props.title}
      </h2>
      {props.type}
    </div>
  );
}
