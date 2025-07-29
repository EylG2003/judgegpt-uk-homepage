import React from "react";
import { ArrowRightIcon } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Was Your Judgment Unfair?
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          JudgeGPT UK scans your case using our AI-powered legal tools:
          Justice Scanner™, Miscarriage Monitor™, and Petition Engine™.
        </p>
        <button className="text-lg px-6 py-3 rounded-2xl shadow-md bg-black text-white inline-flex items-center">
          Start Free Justice Scan <ArrowRightIcon className="ml-2 w-5 h-5" />
        </button>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Justice Scanner™</h3>
            <p>We detect judicial errors, bias, and unfair rulings based on precedent.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Miscarriage Monitor™</h3>
            <p>We flag violations of fair trial rights and court misconduct using Article 6 standards.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">Petition Engine™</h3>
            <p>Draft legal letters, complaints, and appeals instantly — all grounded in UK law.</p>
          </div>
        </div>
      </section>

      {/* Rights Awareness Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Know Your Legal Rights</h2>
        <p className="text-lg max-w-3xl mx-auto">
          JudgeGPT UK checks for violations of your human rights — including your right to an interpreter, a fair trial, and proper legal advice. If something went wrong, we’ll help you spot it.
        </p>
      </section>

      {/* Final Call-to-Action */}
      <section className="bg-black text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Start Your Justice Scan</h2>
        <p className="text-lg mb-6">It takes 2 minutes to find out what went wrong — and what to do next.</p>
        <button className="bg-white text-black text-lg px-6 py-3 rounded-2xl">
          Get Started Now
        </button>
      </section>
    </div>
  );
}

export default App;