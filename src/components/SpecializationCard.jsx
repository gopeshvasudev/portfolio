const SpecializationCard = ({ title, description, icon }) => {
  const Icon = icon;
  return (
    <div className="specialization-card w-full p-5 border-2 border-zinc-600 hover:border-green-400 duration-300 rounded-3xl flex flex-col gap-5">
      <div className="w-full flex items-center justify-between">
        <h3 className="text-2xl">{title}</h3>

        <span className="text-3xl text-green-400">
          <Icon />
        </span>
      </div>

      <p className="font-light text-zinc-300 w-full md:w-10/12">{description}</p>
    </div>
  );
};

export default SpecializationCard;
