/* Logo SVG inline — sem depender de arquivo externo */
export default function LogoMM({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      fill="none"
      className={className}
      aria-label="Mauro Monção Advogados"
    >
      {/* Escudo — borda dourada */}
      <path
        d="M150 15 L260 55 L260 155 Q260 235 150 275 Q40 235 40 155 L40 55 Z"
        fill="#DEC078"
      />
      {/* Escudo — fundo azul */}
      <path
        d="M150 28 L248 63 L248 155 Q248 226 150 262 Q52 226 52 155 L52 63 Z"
        fill="#19385C"
      />
      {/* Letra M */}
      <text
        x="150"
        y="200"
        textAnchor="middle"
        fontFamily="'Palatino Linotype','Book Antiqua',Palatino,Georgia,serif"
        fontSize="160"
        fontWeight="700"
        fill="#F5F0E8"
        letterSpacing="-4"
      >
        M
      </text>
    </svg>
  );
}
