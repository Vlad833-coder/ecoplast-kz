import { Phone } from "lucide-react";

const PRIMARY_PHONE = "+77071062006";
const PRIMARY_PHONE_DISPLAY = "+7 (707) 106-20-06";

interface Props {
  variant?: "header" | "floating" | "inline";
  className?: string;
}

export const CallButton = ({ variant = "inline", className = "" }: Props) => {
  if (variant === "floating") {
    return (
      <a
        href={`tel:${PRIMARY_PHONE}`}
        aria-label="Позвонить нам"
        className="fixed bottom-6 right-6 z-50 lg:hidden"
      >
        <span className="relative flex h-14 w-14 items-center justify-center">
          <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-pulse-ring" />
          <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-accent shadow-cta">
            <Phone className="h-6 w-6 text-accent-foreground" />
          </span>
        </span>
      </a>
    );
  }

  if (variant === "header") {
    return (
      <a
        href={`tel:${PRIMARY_PHONE}`}
        className={`group inline-flex items-center gap-2 font-display font-semibold text-foreground hover:text-primary transition-colors ${className}`}
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
          <Phone className="h-4 w-4" />
        </span>
        <span className="hidden sm:inline tabular-nums">{PRIMARY_PHONE_DISPLAY}</span>
      </a>
    );
  }

  return (
    <a
      href={`tel:${PRIMARY_PHONE}`}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-accent px-6 py-3 font-display font-semibold text-accent-foreground shadow-cta hover:opacity-95 transition ${className}`}
    >
      <Phone className="h-5 w-5" />
      Позвонить сейчас
    </a>
  );
};

export { PRIMARY_PHONE, PRIMARY_PHONE_DISPLAY };
