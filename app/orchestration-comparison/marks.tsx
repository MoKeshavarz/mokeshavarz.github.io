export const orchestrationVariants = [
  "orchestration-wheel",
  "layered-architecture",
  "layered-orchestration",
] as const;

export type OrchestrationVariant = (typeof orchestrationVariants)[number];

function PortraitFade({ id }: { id: string }) {
  return <defs>
    <radialGradient id={`${id}-gradient`} cx="68%" cy="25%" r="29%">
      <stop offset="0" stopColor="black" stopOpacity=".86" />
      <stop offset=".48" stopColor="white" stopOpacity=".48" />
      <stop offset="1" stopColor="white" />
    </radialGradient>
    <mask id={id}>
      <rect width="640" height="640" fill="white" />
      <rect width="640" height="640" fill={`url(#${id}-gradient)`} />
    </mask>
  </defs>;
}

function OrchestrationWheel() {
  return <>
    <g className="mark-connections">
      <path d="M253 369L170 264" />
      <path d="M248 380L99 391" />
      <path d="M254 388L177 526" />
      <path d="M270 386L340 526" />
    </g>
    <g className="mark-route">
      <path d="M350 540C321 491 292 430 260 378C211 384 150 390 84 392C57 393 34 387 12 378" />
    </g>
    <g className="mark-core"><circle cx="260" cy="378" r="7" /></g>
    <g className="mark-nodes">
      <circle cx="160" cy="250" r="8" />
      <circle className="mark-active-node" cx="84" cy="392" r="8" />
      <circle cx="170" cy="540" r="8" />
      <circle className="mark-active-node" cx="350" cy="540" r="8" />
      <circle cx="440" cy="392" r="8" />
      <circle cx="372" cy="255" r="8" />
    </g>
  </>;
}

function LayeredArchitecture() {
  return <>
    <g className="mark-boundaries">
      <path d="M175 299A116 116 0 1 1 146 419" />
      <path d="M102 221A228 218 0 1 1 40 432" />
    </g>
    <g className="mark-connections">
      <path d="M117 247L102 254" />
      <path d="M48 412L63 424" />
      <path d="M207 579L194 587" />
    </g>
    <g className="mark-core"><circle cx="260" cy="378" r="7" /></g>
    <g className="mark-nodes">
      <circle cx="102" cy="254" r="8" />
      <circle cx="63" cy="424" r="8" />
      <circle cx="194" cy="587" r="8" />
    </g>
  </>;
}

function LayeredOrchestration() {
  return <>
    <g className="mark-boundaries">
      <path d="M175 299A116 116 0 1 1 146 419" />
      <path d="M102 221A228 218 0 1 1 40 432" />
    </g>
    <g className="mark-connections">
      <path d="M117 247L102 254" />
      <path d="M48 412L63 424" />
      <path d="M207 579L194 587" />
    </g>
    <g className="mark-route">
      <path d="M260 378C230 374 207 365 180 360C146 354 126 346 100 342C69 337 45 333 20 330" />
    </g>
    <g className="mark-core"><circle cx="260" cy="378" r="7" /></g>
    <g className="mark-nodes">
      <circle cx="102" cy="254" r="8" />
      <circle cx="63" cy="424" r="8" />
      <circle cx="194" cy="587" r="8" />
      <circle className="mark-active-node" cx="180" cy="360" r="8" />
      <circle className="mark-active-node" cx="100" cy="342" r="8" />
    </g>
  </>;
}

export function LayeredOrchestrationMark({ variant }: { variant: OrchestrationVariant }) {
  const maskId = `portrait-fade-${variant}`;
  return <svg className={`layered-orchestration-mark mark-${variant}`} viewBox="0 0 640 640" aria-hidden="true" focusable="false">
    <PortraitFade id={maskId} />
    <g mask={`url(#${maskId})`}>
      {variant === "orchestration-wheel" && <OrchestrationWheel />}
      {variant === "layered-architecture" && <LayeredArchitecture />}
      {variant === "layered-orchestration" && <LayeredOrchestration />}
    </g>
  </svg>;
}
