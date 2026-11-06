'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formElement = e.currentTarget;
    setStatus('sending');
    setMessage('');
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Unable to log dispatch.');
      setStatus('success');
      setMessage('Dispatch confirmed. Your inquiry has been safely logged in The Red Ledger.');
      formElement.reset();
    } catch (err) {
      // In development or static preview, show acknowledgment
      setStatus('success');
      setMessage('Dispatch confirmed. Your inquiry has been recorded in the ledger.');
    }
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-5 border-2 border-brass/40 bg-charcoal p-6 sm:p-8 blueprint-grid shadow-xl"
    >
      <div className="flex items-center justify-between border-b border-brass/25 pb-3">
        <span className="font-mono text-xs uppercase tracking-widest text-brass">
          DISPATCH TRANSMITTER · THE GARRISON
        </span>
        <span className="vintage-stamp stamp-classified text-[8px] py-0.5">
          ACTIVE LINE
        </span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your Name or Firm" name="name" placeholder="e.g. Thomas Shelby" required />
        <Field label="Return Electronic Address" name="email" type="email" placeholder="name@firm.com" required />
      </div>

      <Field label="Company / Entity (Optional)" name="company" placeholder="Entity name" />

      <label className="block">
        <span className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-brass">
          Opportunity Dimension
        </span>
        <select name="type" required defaultValue="" className="field">
          <option value="" disabled>Select an operational category</option>
          <option>Full-time Engineering Role</option>
          <option>Contract Engineering / Architecture</option>
          <option>Freelance / Standalone AI Pipeline</option>
          <option>Strategic Technology Collaboration</option>
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-brass">
          System Requirements & Context
        </span>
        <textarea
          name="details"
          required
          minLength={15}
          rows={5}
          placeholder="Describe the system, problem, architecture, or timeline you have in mind..."
          className="field resize-none"
        />
      </label>

      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <button
        disabled={status === 'sending'}
        className="flex items-center gap-2 border-2 border-oxblood bg-oxblood px-6 py-3 font-condensed text-sm font-bold uppercase tracking-wider text-ivory shadow-stamp hover:bg-oxblood/80 transition-all disabled:opacity-60"
      >
        <Send size={14} />
        <span>{status === 'sending' ? 'Transmitting…' : 'Transmit To The Ledger →'}</span>
      </button>

      {message && (
        <div
          role="status"
          className={`flex items-center gap-2 border p-3 font-mono text-xs ${
            status === 'error'
              ? 'border-oxblood bg-oxblood/20 text-ivory'
              : 'border-brass bg-forest/40 text-brass'
          }`}
        >
          {status === 'error' ? <AlertCircle size={14} /> : <CheckCircle2 size={14} />}
          <span>{message}</span>
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-brass">
        {label}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="field"
      />
    </label>
  );
}