import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "section-alt": "hsl(var(--section-alt))",
        gold: "hsl(var(--gold))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { 
            opacity: "0", 
            transform: "translate3d(0, 30px, 0)"
          },
          "100%": { 
            opacity: "1", 
            transform: "translate3d(0, 0, 0)"
          },
        },
        "fade-down": {
          "0%": { 
            opacity: "0", 
            transform: "translate3d(0, -30px, 0)"
          },
          "100%": { 
            opacity: "1", 
            transform: "translate3d(0, 0, 0)"
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-left": {
          "0%": {
            opacity: "0",
            transform: "translate3d(-30px, 0, 0)"
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)"
          },
        },
        "slide-in-right": {
          "0%": {
            opacity: "0",
            transform: "translate3d(30px, 0, 0)"
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)"
          },
        },
        "slide-down": {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, -20px, 0)"
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)"
          },
        },
        "zoom-in": {
          "0%": {
            opacity: "0",
            transform: "scale3d(0.95, 0.95, 1)"
          },
          "100%": {
            opacity: "1",
            transform: "scale3d(1, 1, 1)"
          },
        },
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale3d(0.9, 0.9, 1)"
          },
          "100%": {
            opacity: "1",
            transform: "scale3d(1, 1, 1)"
          },
        },
        "rotate-in": {
          "0%": {
            opacity: "0",
            transform: "rotate(-10deg) scale3d(0.9, 0.9, 1)"
          },
          "100%": {
            opacity: "1",
            transform: "rotate(0deg) scale3d(1, 1, 1)"
          },
        },
        "bounce-in": {
          "0%": {
            opacity: "0",
            transform: "scale3d(0.3, 0.3, 0.3)"
          },
          "50%": {
            opacity: "1",
            transform: "scale3d(1.05, 1.05, 1.05)"
          },
          "70%": {
            transform: "scale3d(0.9, 0.9, 0.9)"
          },
          "100%": {
            opacity: "1",
            transform: "scale3d(1, 1, 1)"
          },
        },
        "flip-in": {
          "0%": {
            opacity: "0",
            transform: "perspective(400px) rotateY(90deg)"
          },
          "100%": {
            opacity: "1",
            transform: "perspective(400px) rotateY(0deg)"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.4s ease-out",
        "accordion-up": "accordion-up 0.4s ease-out",
        "fade-up": "fade-up 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "fade-down": "fade-down 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "fade-in": "fade-in 2s ease-out forwards",
        "slide-in-left": "slide-in-left 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "slide-in-right": "slide-in-right 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "slide-down": "slide-down 2s ease-out forwards",
        "zoom-in": "zoom-in 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "scale-in": "scale-in 2s ease-out forwards",
        "rotate-in": "rotate-in 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "bounce-in": "bounce-in 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards",
        "flip-in": "flip-in 2.5s ease-out forwards",
      },
      transitionDuration: {
        "0": "0ms",
        "75": "75ms",
        "100": "100ms",
        "150": "150ms",
        "200": "200ms",
        "300": "300ms",
        "400": "400ms",
        "500": "500ms",
        "600": "600ms",
        "700": "700ms",
        "800": "800ms",
        "900": "900ms",
        "1000": "1000ms",
      },
      translate: {
        "y-30": "0 30px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
