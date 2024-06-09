

const HomePageCard = (data: any) => {
  const {  image, name, description } = data.data;
  return (
    <div className="col-span-1 flex flex-col gap-2 b">
      <img src={image} alt="image" sizes="object-cover" />
      <p className="h4-medium truncate">{name}</p>
      <p className="subtle-small">{description}</p>
    </div>
  );
};

export default HomePageCard;
