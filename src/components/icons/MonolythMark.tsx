type IconProps = { size?: number; className?: string };

export function EagleMark({ size = 28, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 190 145"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* crest tuft flicking off the back of the head */}
      <path
        d="M104 22 Q86 4 64 16"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
      />
      {/* head + hooked beak */}
      <path d="M106 26 L172 48 L142 68 L108 52 Z" fill="currentColor" />
      {/* wing (S) flowing into tail/foot (Z) as one continuous stroke */}
      <path
        d="M104 56 Q40 34 18 26 Q8 34 20 40 Q60 54 46 66 Q20 78 30 92 L104 92 L40 134 L118 134 Q132 132 128 118"
        stroke="currentColor"
        strokeWidth={9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* feather notch across the S */}
      <path
        d="M26 58 L54 54"
        stroke="currentColor"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function StencilO({ size = 14, className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M14.7 4.5 A8 8 0 0 1 14.7 19.5"
        stroke="currentColor"
        strokeWidth={2.6}
        strokeLinecap="round"
      />
      <path
        d="M9.3 19.5 A8 8 0 0 1 9.3 4.5"
        stroke="currentColor"
        strokeWidth={2.6}
        strokeLinecap="round"
      />
    </svg>
  );
}

type WordmarkProps = {
  className?: string;
  iconSize?: number;
  textClassName?: string;
};

export function Wordmark({
  className = "",
  iconSize = 26,
  textClassName = "text-xl",
}: WordmarkProps) {
  const oSize = Math.round(iconSize * 0.42);

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className={`font-sans font-bold uppercase leading-none tracking-tighter text-paper ${textClassName}`}
      >
        MONOLYTH{" "}
        <span className="text-cyan">
          Z-R
          <StencilO
            size={oSize}
            className="relative -top-[0.05em] mx-[1px] inline-block align-middle"
          />
        </span>
      </span>
      <span
        aria-hidden="true"
        className="h-[1em] w-px shrink-0 self-stretch bg-fog/40"
      />
      <EagleMark size={iconSize} className="shrink-0 text-cyan" />
    </span>
  );
}
