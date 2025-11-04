-- Fix RLS Policies to Allow Chatbot Inserts
-- Run this in Supabase SQL Editor: https://app.supabase.com/project/mzowcdikituelbzxuvvd/sql

-- ============================
-- CHAT_LEADS TABLE
-- ============================

-- Drop existing policies
DROP POLICY IF EXISTS "Allow anon to insert chat_leads" ON chat_leads;
DROP POLICY IF EXISTS "Service role full access to chat_leads" ON chat_leads;

-- Allow anon role to INSERT leads
CREATE POLICY "Allow anon to insert chat_leads"
  ON chat_leads FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow service role full access for analytics
CREATE POLICY "Service role full access to chat_leads"
  ON chat_leads FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- ============================
-- CHAT_SESSIONS TABLE
-- ============================

-- Drop existing policies
DROP POLICY IF EXISTS "Allow anon to insert chat_sessions" ON chat_sessions;
DROP POLICY IF EXISTS "Service role full access to chat_sessions" ON chat_sessions;

-- Allow anon role to INSERT sessions
CREATE POLICY "Allow anon to insert chat_sessions"
  ON chat_sessions FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anon role to UPDATE sessions (for last_activity, total_messages)
CREATE POLICY "Allow anon to update chat_sessions"
  ON chat_sessions FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

-- Allow service role full access
CREATE POLICY "Service role full access to chat_sessions"
  ON chat_sessions FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- ============================
-- CHAT_MESSAGES TABLE
-- ============================

-- Drop existing policies
DROP POLICY IF EXISTS "Allow anon to insert chat_messages" ON chat_messages;
DROP POLICY IF EXISTS "Service role full access to chat_messages" ON chat_messages;

-- Allow anon role to INSERT messages
CREATE POLICY "Allow anon to insert chat_messages"
  ON chat_messages FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow service role full access
CREATE POLICY "Service role full access to chat_messages"
  ON chat_messages FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- ============================
-- VERIFY POLICIES
-- ============================

-- Check all policies are created
SELECT schemaname, tablename, policyname, roles, cmd
FROM pg_policies
WHERE tablename IN ('chat_leads', 'chat_sessions', 'chat_messages')
ORDER BY tablename, policyname;
