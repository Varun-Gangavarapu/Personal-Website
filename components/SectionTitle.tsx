interface Props {
    title: string;
    titleNum: string;
}

const SectionTitle = ({title, titleNum}: Props) => {
  return (
    <h2 className="font-titlefont text-2xl font-semibold flex items-center">
      <span className=" text-textGreen mr-2">{titleNum}</span>{title}
      <span className= "hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"></span>
    </h2>
  );
};

export default SectionTitle;
