import { motion } from 'motion/react';
import { Mail, Send, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Let's build something <span className="text-blue-600 font-extrabold not-italic uppercase">legendary</span> together.</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-12 max-w-lg">
              Have a project in mind or just want to chat? Reach out and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mail size={20} />, label: 'Email', value: 'mohamedihshan170@gmail.com' },
                { icon: <MapPin size={20} />, label: 'Location', value: 'Sri Lanka' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-blue-600">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-widest">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Name</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold ml-1">Email</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold ml-1">Message</label>
                <textarea 
                  required 
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={formState !== 'idle'}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50"
              >
                {formState === 'idle' ? (
                  <><Send size={20} /> Send Message</>
                ) : formState === 'sending' ? (
                  'Sending...'
                ) : (
                  'Message Sent!'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
