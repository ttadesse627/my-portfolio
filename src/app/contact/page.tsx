"use client";

import { createClient } from '@supabase/supabase-js';
import { useState } from 'react';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;


export default function ContactPage(){

  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables');
  }
  
  console.log("The Supabase environment variable values: ", supabaseUrl, supabaseKey);
  const supabase = createClient(supabaseUrl, supabaseKey);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const { error } = await supabase
    .from('contact')
    .insert([{ email , phone}]);

  if(error) alert (new Error('An error occurred while submitting your contact information'));
  if (!error) alert('Thanks for subscribing!');
  setEmail('');
  setPhone('');
};

  
  return(
    <div>
      <section id="contact" className="py-16">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow- text-gray-800">
          <h2 className="text-2xl font-bold text-black mb-4">Get in Touch With Me</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full p-2 border rounded mb-4"
              required
            />
            <input
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your phone number"
              className="w-full p-2 border rounded mb-4"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}