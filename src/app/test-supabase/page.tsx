"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function TestSupabasePage() {
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addResult = (message: string) => {
    setResults((prev) => [...prev, message]);
    console.log(message);
  };

  const runTests = async () => {
    setResults([]);
    setIsLoading(true);

    // Test 1: Check environment variables
    addResult("=== TEST 1: Environment Variables ===");
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    addResult(`NEXT_PUBLIC_SUPABASE_URL: ${supabaseUrl ? "✅ Set" : "❌ Missing"}`);
    addResult(`NEXT_PUBLIC_SUPABASE_ANON_KEY: ${supabaseAnonKey ? "✅ Set" : "❌ Missing"}`);

    // Test 2: Check Supabase client
    addResult("\n=== TEST 2: Supabase Client ===");
    if (supabase) {
      addResult("✅ Supabase client initialized");
    } else {
      addResult("❌ Supabase client is NULL");
      setIsLoading(false);
      return;
    }

    // Test 3: Try to query chat_leads table
    addResult("\n=== TEST 3: Query chat_leads table ===");
    try {
      const { data, error } = await supabase
        .from("chat_leads")
        .select("count")
        .limit(1);

      if (error) {
        addResult(`❌ Query error: ${error.message}`);
        addResult(`   Code: ${error.code}`);
        addResult(`   Details: ${error.details}`);
      } else {
        addResult("✅ Successfully queried chat_leads table");
        addResult(`   Result: ${JSON.stringify(data)}`);
      }
    } catch (error: any) {
      addResult(`❌ Exception: ${error.message}`);
    }

    // Test 4: Try to insert a test lead
    addResult("\n=== TEST 4: Insert test lead ===");
    try {
      const testLead = {
        name: "Test Lead",
        email: `test-${Date.now()}@example.com`,
        phone: "808-555-0000",
        business_type: "Test",
        monthly_revenue: "5k-10k",
        qualified: false,
      };

      const { data, error } = await supabase
        .from("chat_leads")
        .insert(testLead)
        .select()
        .single();

      if (error) {
        addResult(`❌ Insert error: ${error.message}`);
        addResult(`   Code: ${error.code}`);
        addResult(`   Details: ${error.details}`);
        addResult(`   Hint: ${error.hint}`);
      } else {
        addResult("✅ Successfully inserted test lead");
        addResult(`   ID: ${data?.id}`);
      }
    } catch (error: any) {
      addResult(`❌ Exception: ${error.message}`);
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">
          Supabase Connection Test
        </h1>

        <button
          onClick={runTests}
          disabled={isLoading}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed mb-8"
        >
          {isLoading ? "Running Tests..." : "Run Tests"}
        </button>

        <div className="bg-slate-800 rounded-lg p-6">
          <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
            {results.length === 0
              ? "Click 'Run Tests' to check Supabase connection..."
              : results.join("\n")}
          </pre>
        </div>

        <div className="mt-8 bg-slate-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Instructions:</h2>
          <ul className="text-slate-300 space-y-2">
            <li>1. Click "Run Tests" to diagnose Supabase connection</li>
            <li>2. Check browser console for detailed error messages</li>
            <li>
              3. If environment variables are missing, add them to Vercel:
              <code className="block mt-2 bg-slate-900 p-2 rounded text-green-400">
                vercel env add NEXT_PUBLIC_SUPABASE_URL
                <br />
                vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
              </code>
            </li>
            <li>
              4. If insert fails with permission error, update RLS policies in
              Supabase SQL Editor
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
