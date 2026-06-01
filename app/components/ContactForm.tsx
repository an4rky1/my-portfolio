'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [btnText, setBtnText] = useState('<i class="fas fa-paper-plane"></i>send_message()');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setBtnText('<i class="fas fa-spinner fa-spin mr-1"></i>sending...');

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
        setSending(false);
        setSent(true);
        setBtnText('<i class="fas fa-check mr-1"></i>sent!');
        setTimeout(() => {
          setSent(false);
          setBtnText('<i class="fas fa-paper-plane"></i>send_message()');
          form.reset();
        }, 3000);
      } else {
        setSending(false);
        setBtnText('<i class="fas fa-times mr-1"></i>error!');
        setTimeout(() => {
          setBtnText('<i class="fas fa-paper-plane"></i>send_message()');
        }, 3000);
      }
    } catch {
      setSending(false);
      setBtnText('<i class="fas fa-times mr-1"></i>error!');
      setTimeout(() => {
        setBtnText('<i class="fas fa-paper-plane"></i>send_message()');
      }, 3000);
    }
  };

  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit} className="p-5 sm:p-6" suppressHydrationWarning>
        <div className="space-y-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-text-dark mb-2">
              <span className="text-acid-green">$</span>
              <span>name</span>
              <span className="text-text-dark/30 text-xs font-normal">=</span>
              <span className="text-acid-pink text-xs font-normal">string</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="&apos;Your name&apos;"
              required
              className="msg-input w-full px-4 py-3 border-[3px] border-solid border-text-dark bg-white shadow-neo-sm text-sm text-text-dark placeholder:text-text-dark/30"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-text-dark mb-2">
              <span className="text-acid-green">$</span>
              <span>email</span>
              <span className="text-text-dark/30 text-xs font-normal">=</span>
              <span className="text-acid-pink text-xs font-normal">string</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="&apos;your@email.com&apos;"
              required
              className="msg-input w-full px-4 py-3 border-[3px] border-solid border-text-dark bg-white shadow-neo-sm text-sm text-text-dark placeholder:text-text-dark/30"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-bold text-text-dark mb-2">
              <span className="text-acid-green">$</span>
              <span>message</span>
              <span className="text-text-dark/30 text-xs font-normal">=</span>
              <span className="text-acid-pink text-xs font-normal">string</span>
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="&apos;Hi! I&apos;d like to discuss a project...&apos;"
              required
              className="msg-input w-full px-4 py-3 border-[3px] border-solid border-text-dark bg-white shadow-neo-sm text-sm text-text-dark placeholder:text-text-dark/30 resize-none"
            ></textarea>
          </div>
          <div className="flex flex-col items-center justify-center pt-3 gap-2">
            <button
              type="submit"
              disabled={sending}
              className="neo-btn inline-flex items-center gap-2 px-10 py-3 border-4 border-text-dark bg-acid-green text-text-dark font-bold shadow-neo text-sm"
              dangerouslySetInnerHTML={{ __html: btnText }}
            />
            <span className="text-xs text-text-dark/30">
              {sending ? 'transmitting...' : sent ? '200 OK' : ''}
            </span>
          </div>
        </div>
      </form>
      <div id="form-response" className={`px-5 pb-5 ${sent ? '' : 'hidden'}`}>
        <div className="p-4 border-[3px] border-solid border-acid-green bg-acid-green/10 shadow-neo-sm">
          <p className="text-sm font-bold text-acid-green">
            <i className="fas fa-check-circle mr-2"></i>200 OK — message sent!
          </p>
          <p className="text-xs text-text-dark/50 mt-1">Thanks, I&apos;ll get back to you soon 🚀</p>
        </div>
      </div>
    </>
  );
}
