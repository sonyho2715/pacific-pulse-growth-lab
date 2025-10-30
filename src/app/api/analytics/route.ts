import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET() {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: "Supabase not configured" },
        { status: 500 }
      );
    }

    // Fetch all data
    const { data: leads, error: leadsError } = await supabaseAdmin
      .from("chat_leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (leadsError) {
      console.error("Leads fetch error:", leadsError);
      return NextResponse.json({ error: leadsError.message }, { status: 500 });
    }

    const { data: sessions, error: sessionsError } = await supabaseAdmin
      .from("chat_sessions")
      .select("*")
      .order("created_at", { ascending: false });

    if (sessionsError) {
      console.error("Sessions fetch error:", sessionsError);
    }

    const { data: messages, error: messagesError } = await supabaseAdmin
      .from("chat_messages")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100);

    if (messagesError) {
      console.error("Messages fetch error:", messagesError);
    }

    // Calculate stats
    const totalLeads = leads?.length || 0;
    const qualifiedLeads = leads?.filter((l: any) => l.qualified).length || 0;
    const disqualifiedLeads = totalLeads - qualifiedLeads;
    const totalSessions = sessions?.length || 0;
    const conversions = sessions?.filter((s: any) => s.converted).length || 0;
    const conversionRate = totalLeads > 0 ? (conversions / totalLeads) * 100 : 0;

    const avgMessages = totalSessions > 0 && sessions
      ? sessions.reduce((acc: number, s: any) => acc + (s.total_messages || 0), 0) / totalSessions
      : 0;

    // Business type distribution
    const businessTypes: Record<string, number> = {};
    leads?.filter((l: any) => l.qualified).forEach((lead: any) => {
      businessTypes[lead.business_type] = (businessTypes[lead.business_type] || 0) + 1;
    });

    const businessTypeData = Object.entries(businessTypes).map(([type, count]) => ({
      business_type: type,
      count,
      percentage: qualifiedLeads > 0 ? (count / qualifiedLeads) * 100 : 0,
    })).sort((a, b) => b.count - a.count);

    // Revenue distribution
    const revenueRanges: Record<string, number> = {};
    leads?.filter((l: any) => l.qualified).forEach((lead: any) => {
      revenueRanges[lead.monthly_revenue] = (revenueRanges[lead.monthly_revenue] || 0) + 1;
    });

    const revenueData = Object.entries(revenueRanges).map(([range, count]) => ({
      range,
      count,
      percentage: qualifiedLeads > 0 ? (count / qualifiedLeads) * 100 : 0,
    })).sort((a, b) => b.count - a.count);

    // Time-based metrics
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const thisWeek = new Date(today);
    thisWeek.setDate(thisWeek.getDate() - 7);
    const thisMonth = new Date(today);
    thisMonth.setMonth(thisMonth.getMonth() - 1);

    const leadsToday = leads?.filter((l: any) => new Date(l.created_at) > yesterday).length || 0;
    const leadsThisWeek = leads?.filter((l: any) => new Date(l.created_at) > thisWeek).length || 0;
    const leadsThisMonth = leads?.filter((l: any) => new Date(l.created_at) > thisMonth).length || 0;

    // Engagement metrics
    const activeSessions = sessions?.filter((s: any) => !s.completed && new Date(s.last_activity) > yesterday).length || 0;
    const completedSessions = sessions?.filter((s: any) => s.completed).length || 0;
    const avgSessionDuration = sessions && sessions.length > 0
      ? sessions.reduce((acc: number, s: any) => {
          const start = new Date(s.created_at).getTime();
          const end = new Date(s.last_activity).getTime();
          return acc + (end - start);
        }, 0) / sessions.length / 1000 / 60 // Convert to minutes
      : 0;

    return NextResponse.json({
      stats: {
        totalLeads,
        qualifiedLeads,
        disqualifiedLeads,
        totalSessions,
        conversions,
        conversionRate,
        avgMessagesPerSession: Math.round(avgMessages * 10) / 10,
        leadsToday,
        leadsThisWeek,
        leadsThisMonth,
        activeSessions,
        completedSessions,
        avgSessionDuration: Math.round(avgSessionDuration * 10) / 10,
      },
      leads: leads || [],
      sessions: sessions || [],
      messages: messages || [],
      businessTypeData,
      revenueData,
    });
  } catch (error) {
    console.error("Analytics API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch analytics" },
      { status: 500 }
    );
  }
}
