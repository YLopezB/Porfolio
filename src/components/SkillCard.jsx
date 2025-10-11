export default function SkillCard({imgSrc, label, desc}) {
  return (
    <div className="flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group">
        <div className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h12 p-2 group-hover:bg-zinc-900 transition-colors">
            <img src={imgSrc} alt={label} />
        </div>
        <div>
            <h3>
                {label}
            </h3>
            <p className="text-zinc-400 text-sm">
                {desc}
            </p>
        </div>
    </div>
  )
}
