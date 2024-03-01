export default function SeparatedWord({ sentence, className }) {
  return sentence.split(" ").map((word, i) => {
    return (
      <span className="flex" key={i}>
        {word.split("").map((letter, j) => {
          return (
            <div
              className="hover:scale-110 transition-all"
              key={`${className} ${j}`}
            >
              <div className={`${className}`}>
                <span>{letter}</span>
              </div>
            </div>
          );
        })}
      </span>
    );
  });
}
