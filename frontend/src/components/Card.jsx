const Card = ({ children, imgSrc, ...props }) => {
  return (
    <div {...props} className="max-w-2xl mx-auto bg-white rounded-lg overflow-hidden shadow-md">
      <img
        src={imgSrc}
        alt=""
        className="w-full h-auto object-cover"
      />
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default Card;
