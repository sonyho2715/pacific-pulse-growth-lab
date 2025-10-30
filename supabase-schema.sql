-- Pacific Pulse Chatbot Analytics Database Schema
-- Run this SQL in your Supabase SQL Editor: https://app.supabase.com/project/_/sql

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Chat Leads Table
-- Stores lead information captured before chat access
CREATE TABLE IF NOT EXISTS chat_leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  business_type TEXT NOT NULL,
  monthly_revenue TEXT NOT NULL,
  qualified BOOLEAN NOT NULL DEFAULT false,
  session_id TEXT,

  -- Indexes for fast queries
  CONSTRAINT unique_email UNIQUE(email)
);

CREATE INDEX idx_chat_leads_created_at ON chat_leads(created_at DESC);
CREATE INDEX idx_chat_leads_qualified ON chat_leads(qualified);
CREATE INDEX idx_chat_leads_business_type ON chat_leads(business_type);

-- Chat Sessions Table
-- Tracks individual chat sessions
CREATE TABLE IF NOT EXISTS chat_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  lead_id UUID REFERENCES chat_leads(id) ON DELETE CASCADE,
  session_id TEXT NOT NULL,
  total_messages INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT false,
  converted BOOLEAN DEFAULT false,
  last_activity TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  CONSTRAINT unique_session_id UNIQUE(session_id)
);

CREATE INDEX idx_chat_sessions_created_at ON chat_sessions(created_at DESC);
CREATE INDEX idx_chat_sessions_lead_id ON chat_sessions(lead_id);
CREATE INDEX idx_chat_sessions_converted ON chat_sessions(converted);

-- Chat Messages Table
-- Stores all chatbot messages for analysis
CREATE TABLE IF NOT EXISTS chat_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  lead_id UUID REFERENCES chat_leads(id) ON DELETE CASCADE,
  session_id UUID REFERENCES chat_sessions(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  content TEXT NOT NULL,
  message_number INTEGER NOT NULL,

  -- Track sentiment/analysis (optional, can be added later)
  sentiment TEXT,
  objection_detected BOOLEAN DEFAULT false
);

CREATE INDEX idx_chat_messages_created_at ON chat_messages(created_at DESC);
CREATE INDEX idx_chat_messages_session_id ON chat_messages(session_id);
CREATE INDEX idx_chat_messages_lead_id ON chat_messages(lead_id);

-- Analytics Views for Dashboard

-- Daily Lead Metrics
CREATE OR REPLACE VIEW daily_lead_metrics AS
SELECT
  DATE(created_at) as date,
  COUNT(*) as total_leads,
  COUNT(*) FILTER (WHERE qualified = true) as qualified_leads,
  COUNT(*) FILTER (WHERE qualified = false) as disqualified_leads,
  ROUND(COUNT(*) FILTER (WHERE qualified = true)::NUMERIC / NULLIF(COUNT(*), 0) * 100, 2) as qualification_rate
FROM chat_leads
GROUP BY DATE(created_at)
ORDER BY date DESC;

-- Business Type Distribution
CREATE OR REPLACE VIEW business_type_distribution AS
SELECT
  business_type,
  COUNT(*) as count,
  ROUND(COUNT(*)::NUMERIC / (SELECT COUNT(*) FROM chat_leads) * 100, 2) as percentage
FROM chat_leads
WHERE qualified = true
GROUP BY business_type
ORDER BY count DESC;

-- Conversion Funnel
CREATE OR REPLACE VIEW conversion_funnel AS
SELECT
  COUNT(DISTINCT cl.id) as total_leads,
  COUNT(DISTINCT cl.id) FILTER (WHERE cl.qualified = true) as qualified_leads,
  COUNT(DISTINCT cs.id) as chat_sessions_started,
  COUNT(DISTINCT cs.id) FILTER (WHERE cs.completed = true) as chats_completed,
  COUNT(DISTINCT cs.id) FILTER (WHERE cs.converted = true) as conversions,
  ROUND(COUNT(DISTINCT cs.id) FILTER (WHERE cs.converted = true)::NUMERIC / NULLIF(COUNT(DISTINCT cl.id), 0) * 100, 2) as conversion_rate
FROM chat_leads cl
LEFT JOIN chat_sessions cs ON cl.id = cs.lead_id;

-- Recent Activity (last 100 leads)
CREATE OR REPLACE VIEW recent_activity AS
SELECT
  cl.id,
  cl.created_at,
  cl.name,
  cl.email,
  cl.business_type,
  cl.monthly_revenue,
  cl.qualified,
  cs.total_messages,
  cs.converted,
  cs.last_activity
FROM chat_leads cl
LEFT JOIN chat_sessions cs ON cl.id = cs.lead_id
ORDER BY cl.created_at DESC
LIMIT 100;

-- Peak Hours Analysis
CREATE OR REPLACE VIEW peak_hours_analysis AS
SELECT
  EXTRACT(HOUR FROM created_at) as hour,
  COUNT(*) as lead_count,
  COUNT(*) FILTER (WHERE qualified = true) as qualified_count
FROM chat_leads
GROUP BY EXTRACT(HOUR FROM created_at)
ORDER BY hour;

-- Enable Row Level Security (RLS)
ALTER TABLE chat_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

-- Create policies (allow service role full access, no public access)
CREATE POLICY "Service role full access to chat_leads" ON chat_leads
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role full access to chat_sessions" ON chat_sessions
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role full access to chat_messages" ON chat_messages
  FOR ALL USING (auth.role() = 'service_role');

-- Success message
DO $$
BEGIN
  RAISE NOTICE '✅ Pacific Pulse Chatbot Analytics schema created successfully!';
  RAISE NOTICE '📊 Tables: chat_leads, chat_sessions, chat_messages';
  RAISE NOTICE '📈 Views: daily_lead_metrics, business_type_distribution, conversion_funnel, recent_activity, peak_hours_analysis';
END $$;
