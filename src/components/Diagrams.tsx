// Ganchos para que Reveal dibuje cada trazo
const draw = {
  pathLength: 1,
  strokeDasharray: 1,
  "data-draw": "",
} as const;

const svgProps = {
  viewBox: "0 0 400 240",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  className: "h-auto w-full text-smoke",
  "aria-hidden": true,
  focusable: false,
} as const;

function Label({
  x,
  y,
  children,
}: {
  x: number;
  y: number;
  children: string;
}) {
  return (
    <text
      data-fade
      x={x}
      y={y}
      textAnchor="middle"
      fill="currentColor"
      stroke="none"
      fontSize="10"
      letterSpacing="1.8"
      className="font-mono"
    >
      {children}
    </text>
  );
}

/* 01 · Sitio web: ventana de navegador con titular y botón */
export function DiagramWeb() {
  return (
    <svg {...svgProps}>
      <rect {...draw} x="20" y="20" width="360" height="200" />
      <path {...draw} d="M20 56H380" />
      <path {...draw} d="M40 38H48M58 38H66M76 38H84" />
      <path {...draw} d="M44 96H260M44 120H190" strokeWidth={3} />
      <path {...draw} d="M44 148H240M44 164H210" />
      <rect
        {...draw}
        className="text-signal"
        x="44"
        y="182"
        width="112"
        height="26"
      />
      <rect {...draw} x="290" y="84" width="70" height="124" />
      <path {...draw} d="M290 84L360 208M360 84L290 208" />
    </svg>
  );
}

/* 02 · Automatización: disparo → acción → listo, con regreso */
export function DiagramAutomation() {
  return (
    <svg {...svgProps}>
      <rect {...draw} x="16" y="70" width="96" height="60" />
      <rect
        {...draw}
        className="text-signal"
        x="152"
        y="70"
        width="96"
        height="60"
      />
      <rect {...draw} x="288" y="70" width="96" height="60" />

      <path {...draw} d="M112 100H152M144 94L152 100L144 106" />
      <path {...draw} d="M248 100H288M280 94L288 100L280 106" />

      <path {...draw} d="M336 130V190H64V130M58 138L64 130L70 138" />

      <Label x={64} y={104}>
        DISPARO
      </Label>
      <Label x={200} y={104}>
        ACCIÓN
      </Label>
      <Label x={336} y={104}>
        LISTO
      </Label>
      <Label x={200} y={216}>
        SE REPITE SOLO
      </Label>
    </svg>
  );
}

/* 03 · Software a la medida: panel con gráfica, indicador y tabla */
export function DiagramSoftware() {
  return (
    <svg {...svgProps}>
      <rect {...draw} x="20" y="24" width="170" height="96" />
      <path
        {...draw}
        d="M44 104V84M68 104V60M92 104V76M116 104V44M140 104V68M164 104V54"
        strokeWidth={3}
      />

      <rect
        {...draw}
        className="text-signal"
        x="210"
        y="24"
        width="170"
        height="44"
      />
      <rect {...draw} x="210" y="76" width="170" height="44" />

      <rect {...draw} x="20" y="140" width="360" height="76" />
      <path {...draw} d="M20 166H380M20 190H380M140 140V216" />
    </svg>
  );
}

/* 04 · Inteligencia artificial: entradas → modelo → respuesta */
export function DiagramAI() {
  return (
    <svg {...svgProps}>
      <path {...draw} d="M24 60H110M24 120H110M24 180H110" />
      <path {...draw} d="M110 60L172 108M110 120H164M110 180L172 132" />

      <circle
        {...draw}
        className="text-signal"
        cx="200"
        cy="120"
        r="36"
      />
      <circle {...draw} cx="200" cy="120" r="12" />

      <path {...draw} d="M236 120H300" />
      <rect {...draw} x="300" y="96" width="76" height="48" />
      <path {...draw} d="M318 120L328 130L350 108" />

      <Label x={67} y={44}>
        MENSAJES
      </Label>
      <Label x={338} y={84}>
        RESPUESTA
      </Label>
    </svg>
  );
}