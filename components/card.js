import Image from "next/image";

const Card = ({ images }) => {
  return (
    <div className="card">
      <Image
        className="img"
        src={images}
        alt="image.title"
        width={165}
        height={165}
      />
    </div>
  );
};

export default Card;
