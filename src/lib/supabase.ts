import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Client for browser-side operations
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null as any;

// Admin client for server-side operations (has elevated permissions)
export const supabaseAdmin = supabaseUrl && supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null as any;

// Types for our database tables
export interface ChatLead {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  business_type: string;
  monthly_revenue: string;
  qualified: boolean;
  session_id?: string;
}

export interface ChatMessage {
  id: string;
  created_at: string;
  lead_id: string;
  session_id: string;
  role: 'user' | 'assistant';
  content: string;
  message_number: number;
}

export interface ChatSession {
  id: string;
  created_at: string;
  lead_id: string;
  total_messages: number;
  completed: boolean;
  converted: boolean;
  last_activity: string;
}
