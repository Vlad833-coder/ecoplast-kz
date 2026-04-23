import { useState } from "react";
import { z } from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Введите имя").max(80),
  phone: z.string().trim().min(6, "Введите телефон").max(30),
  message: z.string().trim().max(500).optional(),
});

interface Props { compact?: boolean }

export const QuoteForm = ({ compact = false }: Props) => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      message: fd.get("message") || "",
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    // Simulated submission — connect Lovable Cloud later for real backend.
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setDone(true);
    toast.success("Заявка отправлена! Мы свяжемся в течение 30 минут.");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setDone(false), 4000);
  };

  return (
    <form onSubmit={onSubmit} className={`space-y-3 ${compact ? "" : "p-6 md:p-8 bg-card rounded-2xl shadow-elevated border"}`}>
      {!compact && (
        <div className="mb-4">
          <h3 className="font-display text-2xl font-bold text-foreground">Получить расчёт стоимости</h3>
          <p className="text-sm text-muted-foreground mt-1">Перезвоним в течение 30 минут в рабочее время</p>
        </div>
      )}
      <input
        name="name"
        required
        maxLength={80}
        placeholder="Ваше имя"
        className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <input
        name="phone"
        type="tel"
        required
        maxLength={30}
        placeholder="+7 (___) ___-__-__"
        className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <textarea
        name="message"
        maxLength={500}
        rows={3}
        placeholder="Кратко опишите задачу (необязательно)"
        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button
        type="submit"
        disabled={loading || done}
        className="w-full h-12 rounded-lg bg-gradient-accent text-accent-foreground font-display font-semibold shadow-cta hover:opacity-95 transition disabled:opacity-70 inline-flex items-center justify-center gap-2"
      >
        {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : done ? <CheckCircle2 className="h-5 w-5" /> : null}
        {done ? "Заявка отправлена" : loading ? "Отправляем..." : "Рассчитать стоимость"}
      </button>
      <p className="text-xs text-muted-foreground text-center">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  );
};
