interface DividerProps {
  colorTop: string;
  colorBottom: string;
}

export function WaveDividerInverted({ colorTop, colorBottom }: DividerProps) {
  return (
    <div
      className="relative w-full overflow-hidden leading-[0] pointer-events-none select-none h-[60px] sm:h-[90px] md:h-[120px]"
      style={{ backgroundColor: colorBottom }}
    >
      <svg
        className="relative block w-full h-full"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
      >
        <path
          d="
            M0,100 
            C90,50 180,40 280,65 
            C380,90 460,150 570,135 
            C690,120 760,35 900,50 
            C1040,65 1110,155 1240,148 
            C1330,144 1390,110 1440,75 
            L1440,0 
            L0,0 
            Z
          "
          fill={colorTop}
        />
      </svg>
    </div>
  );
}

export function WaveDividerNormal({ colorTop, colorBottom }: DividerProps) {
  return (
    <div
      className="relative w-full overflow-hidden leading-[0] pointer-events-none select-none h-[60px] sm:h-[90px] md:h-[120px]"
      style={{ backgroundColor: colorTop }}
    >
      <svg
        className="relative block w-full h-full"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
      >
        <path
          d="
            M0,120 
            C90,170 180,180 280,155 
            C380,130 460,70 570,85 
            C690,100 760,185 900,170 
            C1040,155 1110,65 1240,72 
            C1330,76 1390,110 1440,145 
            L1440,220 
            L0,220 
            Z
          "
          fill={colorBottom}
        />
      </svg>
    </div>
  );
}
