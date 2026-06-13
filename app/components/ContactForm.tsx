'use client';

import { useState, useRef } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [mode, setMode] = useState<'telegram' | 'mock' | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const resetForm = () => {
    setStatus('idle');
    setMode(null);
    setErrorMsg('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const form = e.target as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setMode(json.mode);
        setStatus('sent');
        form.reset();
        setTimeout(resetForm, 5000);
      } else {
        setErrorMsg(json.error || json.errors?.email || json.errors?.name || json.errors?.message || 'Failed to send');
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setErrorMsg('Network error — check your connection');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <form
      id="contact-form"
      ref={formRef}
      onSubmit={handleSubmit}
      className="p-5 sm:p-6"
    >
      <div className="space-y-4">
        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-text-dark mb-2">
            <span className="text-acid-green">$</span>
            <span>name</span>
            <span className="text-text-dark/20 text-xs font-normal">= string</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="&apos;Your name&apos;"
            required
            disabled={status === 'sending'}
            className="w-full px-4 py-3 border-[3px] border-text-dark bg-white shadow-neo-sm text-sm text-text-dark placeholder:text-text-dark/30 disabled:opacity-50 disabled:cursor-not-allowed outline-none focus:border-acid-green transition-colors"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-text-dark mb-2">
            <span className="text-acid-green">$</span>
            <span>email</span>
            <span className="text-text-dark/20 text-xs font-normal">= string</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="&apos;your@email.com&apos;"
            required
            suppressHydrationWarning
            disabled={status === 'sending'}
            className="w-full px-4 py-3 border-[3px] border-text-dark bg-white shadow-neo-sm text-sm text-text-dark placeholder:text-text-dark/30 disabled:opacity-50 disabled:cursor-not-allowed outline-none focus:border-acid-green transition-colors"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-bold text-text-dark mb-2">
            <span className="text-acid-green">$</span>
            <span>message</span>
            <span className="text-text-dark/20 text-xs font-normal">= string</span>
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="&apos;Hi! I&apos;d like to discuss a project...&apos;"
            required
            disabled={status === 'sending'}
            className="w-full px-4 py-3 border-[3px] border-text-dark bg-white shadow-neo-sm text-sm text-text-dark placeholder:text-text-dark/30 disabled:opacity-50 disabled:cursor-not-allowed outline-none focus:border-acid-green transition-colors resize-none"
          />
        </div>

        <div className="flex flex-col items-center pt-3 gap-3">
          <button
            type="submit"
            disabled={status === 'sending'}
            className={[
              'neo-btn inline-flex items-center gap-2 px-10 py-3 border-4 border-text-dark font-bold shadow-neo text-sm transition-all duration-200',
              status === 'idle' && 'bg-acid-green text-text-dark hover:bg-acid-green/80',
              status === 'sending' && 'bg-acid-yellow text-text-dark cursor-wait',
              status === 'sent' && 'bg-acid-green text-text-dark',
              status === 'error' && 'bg-acid-pink text-white',
            ].filter(Boolean).join(' ')}
          >
            {status === 'idle' && (
              <><i className="fas fa-paper-plane"></i> send_message()</>
            )}
            {status === 'sending' && (
              <><i className="fas fa-spinner fa-spin"></i> sending...</>
            )}
            {status === 'sent' && (
              <><i className="fas fa-check-circle"></i> sent!</>
            )}
            {status === 'error' && (
              <><i className="fas fa-times-circle"></i> error!</>
            )}
          </button>

          {status === 'sending' && (
            <span className="text-xs text-text-dark/40 font-mono animate-pulse">
              <i className="fas fa-circle text-[6px] text-acid-green mr-1.5 align-middle"></i>
              transmitting...
            </span>
          )}

          {status === 'sent' && (
            <div className="text-center space-y-1" style={{ animation: 'fadeIn 0.3s ease' }}>
              <p className="text-xs font-bold text-acid-green flex items-center gap-1.5 justify-center">
                <i className="fas fa-check-circle"></i>
                200 OK — message sent
              </p>
              <p className="text-[11px] text-text-dark/40">
                via {mode === 'telegram' ? 'Telegram' : 'local mock'}
                <span className="mx-1.5">·</span>
                self-destruct in 5s
              </p>
            </div>
          )}

          {status === 'error' && (
            <p className="text-xs text-acid-pink flex items-center gap-1.5">
              <i className="fas fa-times-circle"></i>
              {errorMsg}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
