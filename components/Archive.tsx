import ArchiveCard from "./ArchiveCard";

const Archive = () => {
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Things I Have Tinkered With
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          Here Is The Archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title={"Huffman Coding"}
          des={
            "Implemented Huffman coding algorithm in Java, optimizing data compression and encoding efficiency for various file types, thereby enhancing understanding of tree data structures and priority queues."
          }
          listItem={["Java", "Trees", "Priority Queues"]}
          link={""}
        />

        <ArchiveCard
          title={"Infinity War"}
          des={
            "Implemented 'Infinity War', a data structures and algorithm project, involving implementation of efficient search and sorting algorithms to simulate solutions to virtual conflicrts."
          }
          listItem={["Java", "Djakstra's Algorithm", "Adjacency Lists"]}
          link={""}
        />

        <ArchiveCard
          title={"Bomb Lab"}
          des={
            "Developed a solution for the Bomb Lab project in a Comp Arch class, by carefully analyzing assembly code commands being sent to the system without triggering the wrong isntructions."
          }
          listItem={["Assembly", "C", "Bit Manipulation"]}
          link={""}
        />
      </div>
    </div>
  );
};

export default Archive;
