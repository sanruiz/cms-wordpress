import Image, { StaticImageData } from "next/image";

interface card {
    title: string;
    text: string;
    img: StaticImageData;
  }

const card = (cardProps:card) => {
  return (
    <div className="card flex-1 dark:bg-slate-700 text-center shadow-lg p-10 rounded-xl">
      <Image src={cardProps.img} width={100} height={100} />
      <h3 className="text-lg text-cyan-700 font-medium pt8 pb-2">
        {cardProps.title}
      </h3>
      <p className="py-2">{cardProps.text}</p>
    </div>
  );
};

export default card;
