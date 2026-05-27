"use client";

import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/lib/supabase/client";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    const { error } = await supabase
      .from("contact_submissions")
      .insert(parsed.data);
    setSubmitting(false);
    if (error) {
      toast.error("Could not send message. Please try again.");
      return;
    }
    toast.success("Message transmitted. I'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  const inputCls =
    "neo-inset w-full rounded-xl px-4 py-3 text-sm bg-transparent text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-accent/40";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            maxLength={100}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputCls}
            placeholder="Ada Lovelace"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            maxLength={255}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputCls}
            placeholder="you@domain.com"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          Message
        </label>
        <textarea
          id="message"
          required
          maxLength={2000}
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={inputCls + " resize-none"}
          placeholder="Tell me about your project, timeline, and what you're building…"
        />
      </div>
      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="text-[10px] font-medium text-muted-foreground/70 uppercase tracking-widest">
          Encrypted in transit · Replies within 48h
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="neo-button bg-accent text-accent-foreground px-5 py-2.5 rounded-xl text-sm font-medium ring-1 ring-accent/20 inline-flex items-center gap-2 disabled:opacity-60"
        >
          {submitting ? (
            <>
              <Loader2 className="size-4 animate-spin" /> Sending
            </>
          ) : (
            <>
              <Send className="size-4" /> Send Message
            </>
          )}
        </button>
      </div>
    </form>
  );
}
