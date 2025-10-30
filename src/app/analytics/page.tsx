"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabaseAdmin } from "@/lib/supabase";

interface DashboardStats {
  totalLeads: number;
  qualifiedLeads: number;
  totalSessions: number;
  conversions: number;
  conversionRate: number;
  avgMessagesPerSession: number;
}

interface RecentLead {
  id: string;
  created_at: string;
  name: string;
  email: string;
  business_type: string;
  monthly_revenue: string;
  qualified: boolean;
  total_messages?: number;
  converted?: boolean;
}

interface BusinessTypeData {
  business_type: string;
  count: number;
  percentage: number;
}

export default function AnalyticsPage() {
  const [stats, setStats] = useState<DashboardStats>({
    totalLeads: 0,
    qualifiedLeads: 0,
    totalSessions: 0,
    conversions: 0,
    conversionRate: 0,
    avgMessagesPerSession: 0,
  });
  const [recentLeads, setRecentLeads] = useState<RecentLead[]>([]);
  const [businessTypes, setBusinessTypes] = useState<BusinessTypeData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loadAnalytics = async () => {
    try {
      setIsLoading(true);

      // Fetch overview stats
      const { data: leads } = await supabaseAdmin.from("chat_leads").select("*");
      const { data: sessions } = await supabaseAdmin.from("chat_sessions").select("*");

      const totalLeads = leads?.length || 0;
      const qualifiedLeads = leads?.filter((l: any) => l.qualified).length || 0;
      const totalSessions = sessions?.length || 0;
      const conversions = sessions?.filter((s: any) => s.converted).length || 0;
      const conversionRate = totalSessions > 0 ? (conversions / totalSessions) * 100 : 0;
      const avgMessages = totalSessions > 0 && sessions
        ? sessions.reduce((acc: number, s: any) => acc + (s.total_messages || 0), 0) / totalSessions
        : 0;

      setStats({
        totalLeads,
        qualifiedLeads,
        totalSessions,
        conversions,
        conversionRate,
        avgMessagesPerSession: Math.round(avgMessages * 10) / 10,
      });

      // Fetch recent leads with session data
      const { data: recentData } = await supabaseAdmin
        .from("recent_activity")
        .select("*")
        .limit(50);

      setRecentLeads(recentData || []);

      // Fetch business type distribution
      const { data: businessData } = await supabaseAdmin
        .from("business_type_distribution")
        .select("*");

      setBusinessTypes(businessData || []);
    } catch (error) {
      console.error("Failed to load analytics:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password protection (use proper auth in production)
    if (password === "pacificpulse2024") {
      setIsAuthenticated(true);
      loadAnalytics();
    } else {
      alert("Incorrect password");
    }
  };

  // Auto-refresh every 30 seconds
  useEffect(() => {
    if (isAuthenticated) {
      const interval = setInterval(() => {
        loadAnalytics();
      }, 30000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Analytics Dashboard</CardTitle>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 text-center">
              Enter password to access Pacific Pulse analytics
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-950"
                  placeholder="Enter analytics password"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Access Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
      {/* Navigation */}
      <nav className="border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                PP
              </div>
              <span className="font-bold text-lg">Pacific Pulse Analytics</span>
            </div>
          </Link>
          <Button onClick={() => loadAnalytics()} size="sm" variant="outline">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Chatbot Analytics Dashboard</h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Real-time insights into lead generation and chatbot performance
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-20">
            <div className="animate-spin w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-zinc-600 dark:text-zinc-400">Loading analytics...</p>
          </div>
        ) : (
          <>
            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    Total Leads
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stats.totalLeads}</div>
                  <p className="text-xs text-zinc-500 mt-1">All chatbot interactions</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    Qualified Leads
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">{stats.qualifiedLeads}</div>
                  <p className="text-xs text-zinc-500 mt-1">$5K+/month businesses</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    Chat Sessions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stats.totalSessions}</div>
                  <p className="text-xs text-zinc-500 mt-1">
                    Avg {stats.avgMessagesPerSession} msgs/session
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    Conversion Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">
                    {stats.conversionRate.toFixed(1)}%
                  </div>
                  <p className="text-xs text-zinc-500 mt-1">{stats.conversions} conversions</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Business Type Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Business Type Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  {businessTypes.length > 0 ? (
                    <div className="space-y-3">
                      {businessTypes.map((bt) => (
                        <div key={bt.business_type}>
                          <div className="flex justify-between text-sm mb-1">
                            <span>{bt.business_type}</span>
                            <span className="font-semibold">{bt.count} ({bt.percentage.toFixed(1)}%)</span>
                          </div>
                          <div className="h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                              style={{ width: `${bt.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-zinc-500 text-center py-8">No data yet</p>
                  )}
                </CardContent>
              </Card>

              {/* Conversion Funnel */}
              <Card>
                <CardHeader>
                  <CardTitle>Conversion Funnel</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <span className="font-medium">Total Leads</span>
                      <span className="text-2xl font-bold">{stats.totalLeads}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <span className="font-medium">Qualified Leads</span>
                      <span className="text-2xl font-bold text-green-600">{stats.qualifiedLeads}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <span className="font-medium">Chat Sessions Started</span>
                      <span className="text-2xl font-bold text-purple-600">{stats.totalSessions}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <svg className="w-6 h-6 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
                      <span className="font-medium">Conversions</span>
                      <span className="text-2xl font-bold text-amber-600">{stats.conversions}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity Table */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Lead Activity</CardTitle>
              </CardHeader>
              <CardContent>
                {recentLeads.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-zinc-200 dark:border-zinc-800 text-left text-sm">
                          <th className="pb-3 font-semibold">Date</th>
                          <th className="pb-3 font-semibold">Name</th>
                          <th className="pb-3 font-semibold">Email</th>
                          <th className="pb-3 font-semibold">Business</th>
                          <th className="pb-3 font-semibold">Revenue</th>
                          <th className="pb-3 font-semibold">Qualified</th>
                          <th className="pb-3 font-semibold">Messages</th>
                          <th className="pb-3 font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentLeads.map((lead) => (
                          <tr key={lead.id} className="border-b border-zinc-100 dark:border-zinc-900 text-sm">
                            <td className="py-3">
                              {new Date(lead.created_at).toLocaleDateString()}
                            </td>
                            <td className="py-3">{lead.name}</td>
                            <td className="py-3">{lead.email}</td>
                            <td className="py-3">{lead.business_type}</td>
                            <td className="py-3">{lead.monthly_revenue}</td>
                            <td className="py-3">
                              {lead.qualified ? (
                                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-xs font-medium">
                                  Yes
                                </span>
                              ) : (
                                <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded text-xs font-medium">
                                  No
                                </span>
                              )}
                            </td>
                            <td className="py-3">{lead.total_messages || 0}</td>
                            <td className="py-3">
                              {lead.converted ? (
                                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium">
                                  Converted
                                </span>
                              ) : (
                                <span className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-xs font-medium">
                                  Active
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-zinc-500 text-center py-8">No leads yet</p>
                )}
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
