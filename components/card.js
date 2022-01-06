import Image from "next/image";

const Card = ({ image }) => {
  return (
    <div className="card">
      <Image className="img" src={image.url} alt="image.title" width={165} height={165}/>
    </div>
  );
};

export default Card;
