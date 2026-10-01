// Configuração do Tailwind da home (cores, fontes, tamanhos e espaçamentos).
// Precisa ser carregado DEPOIS do script do Tailwind (cdn.tailwindcss.com).
// As cores usam as variáveis de css/paleta.css.
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "status-success": "rgb(var(--cor-sucesso-rgb) / <alpha-value>)",
                "outline": "#75777e",
                "error": "#ba1a1a",
                "neon-cyan-glow": "rgba(0, 188, 212, 0.35)",
                "on-secondary-fixed-variant": "#004e59",
                "inverse-primary": "#b9c7e6",
                "on-primary-fixed-variant": "#394761",
                "background": "rgb(var(--cor-fundo-rgb) / <alpha-value>)",
                "primary-container": "#0d1b34",
                "on-secondary-fixed": "#001f25",
                "on-error-container": "#93000a",
                "secondary": "rgb(var(--cor-teal-rgb) / <alpha-value>)",
                "brand-cyan-electric": "rgb(var(--cor-ciano-eletrico-rgb) / <alpha-value>)",
                "on-background": "rgb(var(--cor-texto-rgb) / <alpha-value>)",
                "on-secondary-container": "#006573",
                "surface-card": "rgb(var(--cor-superficie-rgb) / <alpha-value>)",
                "primary-fixed-dim": "#b9c7e6",
                "outline-variant": "rgb(var(--cor-borda-rgb) / <alpha-value>)",
                "on-surface-variant": "rgb(var(--cor-texto-secundario-rgb) / <alpha-value>)",
                "surface-variant": "rgb(var(--cor-superficie-variante-rgb) / <alpha-value>)",
                "surface-container-highest": "#e2e8f0",
                "secondary-container": "rgb(var(--cor-ciano-suave-rgb) / <alpha-value>)",
                "surface": "rgb(var(--cor-fundo-rgb) / <alpha-value>)",
                "tertiary": "#000000",
                "surface-dim": "#e2e8f0",
                "border-subtle": "rgba(6, 21, 45, 0.08)",
                "primary-fixed": "#d7e2ff",
                "secondary-fixed-dim": "#44d8f1",
                "on-primary": "rgb(var(--cor-texto-invertido-rgb) / <alpha-value>)",
                "surface-bright": "rgb(var(--cor-superficie-rgb) / <alpha-value>)",
                "brand-navy-light": "rgb(var(--cor-navy-claro-rgb) / <alpha-value>)",
                "surface-tint": "rgb(var(--cor-ciano-eletrico-rgb) / <alpha-value>)",
                "on-tertiary-fixed-variant": "#004b73",
                "on-primary-fixed": "#0d1b34",
                "surface-container-low": "#ffffff",
                "on-surface": "rgb(var(--cor-texto-rgb) / <alpha-value>)",
                "tertiary-container": "#001d31",
                "brand-teal-vibrant": "rgb(var(--cor-teal-vibrante-rgb) / <alpha-value>)",
                "on-primary-container": "#7684a1",
                "on-tertiary": "#ffffff",
                "border-glass": "rgba(255, 255, 255, 0.8)",
                "surface-card-glass": "rgba(255, 255, 255, 0.92)",
                "brand-navy-surface": "rgb(var(--cor-navy-superficie-rgb) / <alpha-value>)",
                "error-container": "#ffdad6",
                "status-danger": "rgb(var(--cor-erro-rgb) / <alpha-value>)",
                "brand-cyan-glow": "rgb(var(--cor-ciano-eletrico-rgb) / <alpha-value>)",
                "inverse-on-surface": "#eaf1ff",
                "surface-container": "rgb(var(--cor-superficie-variante-rgb) / <alpha-value>)",
                "primary": "rgb(var(--cor-navy-profundo-rgb) / <alpha-value>)",
                "surface-container-lowest": "#ffffff",
                "tertiary-fixed-dim": "#93ccff",
                "secondary-fixed": "#a1efff",
                "brand-navy-deep": "rgb(var(--cor-navy-profundo-rgb) / <alpha-value>)",
                "on-error": "#ffffff",
                "status-warning": "rgb(var(--cor-alerta-rgb) / <alpha-value>)",
                "on-tertiary-fixed": "#001d31",
                "on-tertiary-container": "#188ace",
                "surface-container-high": "#e2e8f0",
                "tertiary-fixed": "#cce5ff",
                "inverse-surface": "#213145",
                "surface-canvas": "rgb(var(--cor-superficie-rgb) / <alpha-value>)",
                "on-secondary": "rgb(var(--cor-texto-invertido-rgb) / <alpha-value>)"
            },
            "borderRadius": {
                "DEFAULT": "0.375rem",
                "lg": "0.75rem",
                "xl": "1rem",
                "2xl": "1.5rem",
                "full": "9999px"
            },
            "spacing": {
                "gutter-lg": "2rem",
                "gutter": "1.5rem",
                "margin-lg": "4rem",
                "margin-md": "2.5rem",
                "space-sm": "0.5rem",
                "margin": "1.5rem",
                "space-lg": "1.5rem",
                "space-xl": "2.5rem",
                "gutter-sm": "1rem",
                "space-md": "1rem",
                "space-2xl": "4rem",
                "space-xs": "0.25rem"
            },
            "fontFamily": {
                "label-badge": ["Space Grotesk", "system-ui", "sans-serif"],
                "headline-md": ["Plus Jakarta Sans", "system-ui", "sans-serif"],
                "headline-lg-mobile": ["Plus Jakarta Sans", "system-ui", "sans-serif"],
                "label-tech": ["Space Grotesk", "system-ui", "sans-serif"],
                "body-sm": ["Plus Jakarta Sans", "system-ui", "sans-serif"],
                "display-hero-mobile": ["Plus Jakarta Sans", "system-ui", "sans-serif"],
                "body-lg": ["Plus Jakarta Sans", "system-ui", "sans-serif"],
                "headline-sm": ["Plus Jakarta Sans", "system-ui", "sans-serif"],
                "display-hero": ["Plus Jakarta Sans", "system-ui", "sans-serif"],
                "headline-lg": ["Plus Jakarta Sans", "system-ui", "sans-serif"],
                "metric-display": ["Space Grotesk", "system-ui", "sans-serif"],
                "title-md": ["Plus Jakarta Sans", "system-ui", "sans-serif"],
                "body-md": ["Plus Jakarta Sans", "system-ui", "sans-serif"]
            },
            "fontSize": {
                "label-badge": ["12px", {
                    "lineHeight": "16px",
                    "letterSpacing": "0.04em",
                    "fontWeight": "600"
                }],
                "headline-md": ["28px", {
                    "lineHeight": "36px",
                    "letterSpacing": "-0.02em",
                    "fontWeight": "700"
                }],
                "headline-lg-mobile": ["28px", {
                    "lineHeight": "36px",
                    "letterSpacing": "-0.01em",
                    "fontWeight": "700"
                }],
                "label-tech": ["11px", {
                    "lineHeight": "16px",
                    "letterSpacing": "0.08em",
                    "fontWeight": "700"
                }],
                "body-sm": ["13px", {
                    "lineHeight": "20px",
                    "letterSpacing": "0.01em",
                    "fontWeight": "400"
                }],
                "display-hero-mobile": ["36px", {
                    "lineHeight": "44px",
                    "letterSpacing": "-0.02em",
                    "fontWeight": "800"
                }],
                "body-lg": ["18px", {
                    "lineHeight": "28px",
                    "letterSpacing": "-0.01em",
                    "fontWeight": "400"
                }],
                "headline-sm": ["20px", {
                    "lineHeight": "28px",
                    "letterSpacing": "-0.015em",
                    "fontWeight": "600"
                }],
                "display-hero": ["54px", {
                    "lineHeight": "62px",
                    "letterSpacing": "-0.035em",
                    "fontWeight": "800"
                }],
                "headline-lg": ["38px", {
                    "lineHeight": "46px",
                    "letterSpacing": "-0.025em",
                    "fontWeight": "700"
                }],
                "metric-display": ["32px", {
                    "lineHeight": "36px",
                    "letterSpacing": "-0.02em",
                    "fontWeight": "700"
                }],
                "title-md": ["17px", {
                    "lineHeight": "24px",
                    "letterSpacing": "-0.01em",
                    "fontWeight": "600"
                }],
                "body-md": ["15px", {
                    "lineHeight": "24px",
                    "letterSpacing": "0em",
                    "fontWeight": "400"
                }]
            }
        }
    }
}
