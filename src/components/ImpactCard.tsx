interface ImpactCardProps {
  stat: {
    number: string;
    label: string;
  };
}

const ImpactCard = ({ stat }: ImpactCardProps) => {
  return (
    <div
      className="
        w-[180px] md:w-[220px]    /* ⬅ shorter horizontally */
        shrink-0

        rounded-xl
        border border-white/10

        bg-[hsl(var(--card))]
        p-4 md:p-5                /* ⬅ reduced height */

        transition-all duration-300

        hover:border-[hsl(var(--accent))]
        hover:shadow-[0_0_30px_hsl(var(--accent)/0.4)]
      "
    >
        <div
          className="font-black text-[hsl(var(--accent))]"
          style={{
            fontSize: "clamp(1.25rem, 2vw, 1.6rem)",
            lineHeight: "1.1",
          }}
        >
          {stat.number}
        </div>


      <div className="mt-1 text-xs md:text-sm text-white/70">
        {stat.label}
      </div>
    </div>
  );
};

export default ImpactCard;
