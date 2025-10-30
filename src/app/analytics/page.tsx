"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AnalyticsPage() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [viewMode, setViewMode] = useState<"overview" | "leads" | "sessions" | "messages">("overview");

  const loadAnalytics = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/analytics");
      if (!response.ok) throw new Error("Failed to fetch");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Failed to load analytics:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "pacificpulse2024") {
      setIsAuthenticated(true);
      loadAnalytics();
    } else {
      alert("Incorrect password");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      const interval = setInterval(loadAnalytics, 30000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-purple-500/20 bg-slate-900/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-white">Pacific Pulse Analytics</CardTitle>
            <p className="text-sm text-slate-400 text-center mt-2">
              Secure access to chatbot performance metrics
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-purple-500/30 rounded-md bg-slate-800 text-white placeholder-slate-500"
                  placeholder="Enter analytics password"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600">
                Access Dashboard
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading analytics...</p>
        </div>
      </div>
    );
  }

  const stats = data?.stats || {};
  const leads = data?.leads || [];
  const sessions = data?.sessions || [];
  const messages = data?.messages || [];
  const businessTypeData = data?.businessTypeData || [];
  const revenueData = data?.revenueData || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-purple-500/20 bg-slate-900/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                PP
              </div>
              <div>
                <span className="font-bold text-lg text-white">Pacific Pulse Analytics</span>
                <p className="text-xs text-slate-400">Real-time Chatbot Performance</p>
              </div>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Button onClick={() => loadAnalytics()} size="sm" variant="outline" className="border-purple-500/30 text-white hover:bg-purple-500/20">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </Button>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Live
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* View Mode Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {["overview", "leads", "sessions", "messages"].map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode as any)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                viewMode === mode
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "bg-slate-800/50 text-slate-400 hover:bg-slate-800"
              }`}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {viewMode === "overview" && (
          <>
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Total Leads</p>
                      <p className="text-4xl font-bold text-white">{stats.totalLeads}</p>
                      <p className="text-xs text-green-400 mt-2">+{stats.leadsToday} today</p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Qualified Leads</p>
                      <p className="text-4xl font-bold text-white">{stats.qualifiedLeads}</p>
                      <p className="text-xs text-slate-400 mt-2">
                        {stats.totalLeads > 0 ? Math.round((stats.qualifiedLeads / stats.totalLeads) * 100) : 0}% qualification rate
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Chat Sessions</p>
                      <p className="text-4xl font-bold text-white">{stats.totalSessions}</p>
                      <p className="text-xs text-slate-400 mt-2">
                        {stats.avgMessagesPerSession} avg msgs/session
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border-orange-500/20">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Conversion Rate</p>
                      <p className="text-4xl font-bold text-white">{stats.conversionRate.toFixed(1)}%</p>
                      <p className="text-xs text-slate-400 mt-2">{stats.conversions} conversions</p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Secondary Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className="bg-slate-800/50 border-slate-700/50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">This Week</p>
                      <p className="text-2xl font-bold text-white">{stats.leadsThisWeek}</p>
                    </div>
                    <div className="text-green-400 text-sm">+{stats.leadsToday}</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700/50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">This Month</p>
                      <p className="text-2xl font-bold text-white">{stats.leadsThisMonth}</p>
                    </div>
                    <div className="text-blue-400 text-sm">+{stats.leadsThisWeek}</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700/50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">Avg Session Duration</p>
                      <p className="text-2xl font-bold text-white">{stats.avgSessionDuration} min</p>
                    </div>
                    <div className="text-purple-400 text-sm">{stats.activeSessions} active</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Business Type Distribution */}
              <Card className="bg-slate-800/50 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Business Types
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {businessTypeData.length > 0 ? (
                    <div className="space-y-3">
                      {businessTypeData.map((bt: any, idx: number) => (
                        <div key={idx}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-slate-300">{bt.business_type}</span>
                            <span className="text-white font-semibold">{bt.count} ({bt.percentage.toFixed(1)}%)</span>
                          </div>
                          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-purple-600 to-blue-600"
                              style={{ width: `${bt.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-500 text-center py-8">No data yet</p>
                  )}
                </CardContent>
              </Card>

              {/* Revenue Distribution */}
              <Card className="bg-slate-800/50 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Revenue Ranges
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {revenueData.length > 0 ? (
                    <div className="space-y-3">
                      {revenueData.map((rd: any, idx: number) => (
                        <div key={idx}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-slate-300">{rd.range}</span>
                            <span className="text-white font-semibold">{rd.count} ({rd.percentage.toFixed(1)}%)</span>
                          </div>
                          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-green-600 to-emerald-600"
                              style={{ width: `${rd.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-500 text-center py-8">No data yet</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </>
        )}

        {/* Leads Tab */}
        {viewMode === "leads" && (
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white">All Leads ({leads.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {leads.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-700 text-left text-sm text-slate-400">
                        <th className="pb-3 font-semibold">Date</th>
                        <th className="pb-3 font-semibold">Name</th>
                        <th className="pb-3 font-semibold">Email</th>
                        <th className="pb-3 font-semibold">Phone</th>
                        <th className="pb-3 font-semibold">Business</th>
                        <th className="pb-3 font-semibold">Revenue</th>
                        <th className="pb-3 font-semibold">Status</th>
                        <th className="pb-3 font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leads.map((lead: any) => (
                        <tr key={lead.id} className="border-b border-slate-700/50 text-sm text-slate-300">
                          <td className="py-3">{new Date(lead.created_at).toLocaleString()}</td>
                          <td className="py-3 font-medium text-white">{lead.name}</td>
                          <td className="py-3">{lead.email}</td>
                          <td className="py-3">{lead.phone}</td>
                          <td className="py-3">{lead.business_type}</td>
                          <td className="py-3">{lead.monthly_revenue}</td>
                          <td className="py-3">
                            {lead.qualified ? (
                              <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-medium">
                                Qualified
                              </span>
                            ) : (
                              <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs font-medium">
                                Disqualified
                              </span>
                            )}
                          </td>
                          <td className="py-3">
                            <button
                              onClick={() => setSelectedLead(lead)}
                              className="text-purple-400 hover:text-purple-300 text-xs"
                            >
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-slate-500 text-center py-8">No leads yet</p>
              )}
            </CardContent>
          </Card>
        )}

        {/* Sessions Tab */}
        {viewMode === "sessions" && (
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white">Chat Sessions ({sessions.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {sessions.length > 0 ? (
                <div className="space-y-3">
                  {sessions.map((session: any) => {
                    const lead = leads.find((l: any) => l.id === session.lead_id);
                    return (
                      <div key={session.id} className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="text-white font-medium">{lead?.name || "Unknown"}</p>
                            <p className="text-xs text-slate-400">{lead?.email}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-slate-400">{new Date(session.created_at).toLocaleString()}</p>
                            <p className="text-xs text-purple-400">Session ID: {session.session_id.slice(0, 8)}...</p>
                          </div>
                        </div>
                        <div className="flex gap-4 mt-3 text-sm">
                          <div>
                            <span className="text-slate-400">Messages:</span>
                            <span className="text-white ml-2 font-medium">{session.total_messages}</span>
                          </div>
                          <div>
                            <span className="text-slate-400">Status:</span>
                            <span className={`ml-2 font-medium ${session.completed ? "text-green-400" : "text-yellow-400"}`}>
                              {session.completed ? "Completed" : "Active"}
                            </span>
                          </div>
                          {session.converted && (
                            <div>
                              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs font-medium">
                                Converted
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-slate-500 text-center py-8">No sessions yet</p>
              )}
            </CardContent>
          </Card>
        )}

        {/* Messages Tab */}
        {viewMode === "messages" && (
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-white">Recent Messages ({messages.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {messages.length > 0 ? (
                <div className="space-y-3 max-h-[600px] overflow-y-auto">
                  {messages.map((msg: any) => {
                    const lead = leads.find((l: any) => l.id === msg.lead_id);
                    return (
                      <div key={msg.id} className={`p-3 rounded-lg ${msg.role === "user" ? "bg-blue-500/10 border-l-2 border-blue-500" : "bg-purple-500/10 border-l-2 border-purple-500"}`}>
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-xs font-medium text-white">
                            {msg.role === "user" ? lead?.name || "User" : "AI Assistant"}
                          </span>
                          <span className="text-xs text-slate-400">{new Date(msg.created_at).toLocaleTimeString()}</span>
                        </div>
                        <p className="text-sm text-slate-300">{msg.content}</p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-slate-500 text-center py-8">No messages yet</p>
              )}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedLead(null)}>
          <Card className="bg-slate-800 border-slate-700 max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <CardHeader className="border-b border-slate-700">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-white text-xl">{selectedLead.name}</CardTitle>
                  <p className="text-sm text-slate-400 mt-1">{selectedLead.email}</p>
                </div>
                <button onClick={() => setSelectedLead(null)} className="text-slate-400 hover:text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-400 mb-1">Phone</p>
                  <p className="text-white">{selectedLead.phone}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Business Type</p>
                  <p className="text-white">{selectedLead.business_type}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Monthly Revenue</p>
                  <p className="text-white">{selectedLead.monthly_revenue}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Created</p>
                  <p className="text-white">{new Date(selectedLead.created_at).toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Status</p>
                  <p className={selectedLead.qualified ? "text-green-400" : "text-red-400"}>
                    {selectedLead.qualified ? "Qualified" : "Disqualified"}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Lead ID</p>
                  <p className="text-white text-xs font-mono">{selectedLead.id}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
