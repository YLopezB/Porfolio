export default function ReviewCard({ content, name, imgSrc, company }) {
  let ratings = Array(5).fill({
    icon: "star",
    style: { fontVariationsSettings: '"FILL",1' },
  });
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
      <div className="flex items-center gap-1 mb-3">
        {ratings.map(({ icon, style }, key) => (
          <span
            className="material-symbols-rounded text-yellow-300 text-[18px]"
            style={style}
            key={key}
          >
            {icon}
          </span>
        ))}
      </div>
      <p className="text-zinc-400 mb-8">{content}</p>
      <div className="flex items-center gap-2 mt-auto">
        <div className="img-box rounded-lg">
          <img
            src={imgSrc}
            alt={name}
            width={44}
            height={44}
            loading="lazy"
            className="img-cover"
          />
        </div>
        <div>
          <p>{name}</p>
          <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
        </div>
      </div>
    </div>
  );
}
