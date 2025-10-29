import React, { useState } from 'react';
import { ChevronRight, TrendingUp, Users, DollarSign, Shield, Zap, Target, BookOpen, Bell, Search, Home, BarChart3, GitCompare, Building2, FileText, Lock, Lightbulb, Calendar, ExternalLink, Menu, X } from 'lucide-react';

const CompetitiveIntelHub = () => {
  const [selectedCompetitor, setSelectedCompetitor] = useState(null);
  const [activeSection, setActiveSection] = useState('executive-snapshot');
  const [activeView, setActiveView] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const competitors = [
    {
      id: 'ondo',
      name: 'Ondo',
      tagline: 'RWA Vaults & Tokenized Money Market Funds',
      color: 'blue',
      logo: '🏦',
      focus: 'Tokenized MMFs (USDY) benchmarked against nuYLDS',
      tvl: '$2.1B',
      growth: '+18%',
      users: '47.2K'
    },
    {
      id: 'blackrock-buidl',
      name: "BlackRock BUIDL",
      tagline: 'Yield-bearing Stablecoins via Securitize',
      color: 'slate',
      logo: '⬛',
      focus: 'Permissioned competitor to nuYLDS',
      tvl: '$1.8B',
      growth: '+24%',
      users: '8.4K'
    },
    {
      id: 'plume',
      name: 'Plume',
      tagline: 'RWA Infrastructure & Layer 1',
      color: 'purple',
      logo: '🪶',
      focus: 'Contrasted with NUVA liquidity strategy',
      tvl: '$420M',
      growth: '+156%',
      users: '125K'
    },
    {
      id: 'centrifuge',
      name: 'Centrifuge',
      tagline: 'RWA Vaults & Private Credit',
      color: 'cyan',
      logo: '🌀',
      focus: 'JAAA benchmarked against nuHELOC',
      tvl: '$380M',
      growth: '+12%',
      users: '2.1K'
    },
    {
      id: 'pendle',
      name: 'Pendle',
      tagline: 'Yield Composability & Structuring',
      color: 'green',
      logo: '📊',
      focus: 'Enables strategies NUVA leverages',
      tvl: '$6.8B',
      growth: '+92%',
      users: '286K'
    }
  ];

  const sections = [
    { id: 'executive-snapshot', name: 'Executive Snapshot', icon: Target },
    { id: 'company-overview', name: 'Company Overview', icon: Building2 },
    { id: 'product-portfolio', name: 'Product Portfolio', icon: FileText },
    { id: 'technical-architecture', name: 'Technical Architecture', icon: Zap },
    { id: 'business-model', name: 'Business Model & Economics', icon: DollarSign },
    { id: 'market-performance', name: 'Market Performance', icon: TrendingUp },
    { id: 'go-to-market', name: 'Go-to-Market Strategy', icon: Target },
    { id: 'user-intelligence', name: 'User Intelligence', icon: Users },
    { id: 'regulatory', name: 'Regulatory & Compliance', icon: Shield },
    { id: 'competitive-strategy', name: 'Competitive Strategy', icon: GitCompare },
    { id: 'product-roadmap', name: 'Product Roadmap & Signals', icon: Calendar },
    { id: 'learning-insights', name: 'Learning & Insights', icon: Lightbulb },
    { id: 'news-updates', name: 'News & Updates', icon: Bell }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-800 border-blue-300 hover:bg-blue-200',
      slate: 'bg-slate-100 text-slate-800 border-slate-300 hover:bg-slate-200',
      purple: 'bg-purple-100 text-purple-800 border-purple-300 hover:bg-purple-200',
      cyan: 'bg-cyan-100 text-cyan-800 border-cyan-300 hover:bg-cyan-200',
      green: 'bg-green-100 text-green-800 border-green-300 hover:bg-green-200'
    };
    return colors[color] || colors.blue;
  };

  const OverviewPage = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Nu.xyz Competitive Intelligence Hub</h1>
        <p className="text-xl mb-6">Your centralized resource for understanding the RWA vault marketplace competitive landscape</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white/10 backdrop-blur p-4 rounded">
            <div className="text-2xl font-bold">5</div>
            <div className="opacity-90">Core Competitors Tracked</div>
          </div>
          <div className="bg-white/10 backdrop-blur p-4 rounded">
            <div className="text-2xl font-bold">13</div>
            <div className="opacity-90">Intelligence Sections</div>
          </div>
          <div className="bg-white/10 backdrop-blur p-4 rounded">
            <div className="text-2xl font-bold">$11.5B</div>
            <div className="opacity-90">Combined TVL Tracked</div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Competitors Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitors.map(comp => (
            <div 
              key={comp.id}
              onClick={() => {
                setSelectedCompetitor(comp.id);
                setActiveSection('executive-snapshot');
              }}
              className="border rounded-lg p-6 hover:shadow-lg transition-all cursor-pointer bg-white"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{comp.logo}</div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getColorClasses(comp.color)}`}>
                  Active
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{comp.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{comp.tagline}</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">TVL:</span>
                  <span className="font-semibold">{comp.tvl}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">30d Growth:</span>
                  <span className="font-semibold text-green-600">{comp.growth}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Users:</span>
                  <span className="font-semibold">{comp.users}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="text-xs text-gray-500 italic">{comp.focus}</p>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition flex items-center justify-center gap-2">
                View Intelligence <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button 
            onClick={() => setActiveView('comparison')}
            className="flex items-center gap-3 p-4 bg-white border rounded-lg hover:shadow-md transition"
          >
            <GitCompare className="w-6 h-6 text-blue-600" />
            <div className="text-left">
              <div className="font-semibold">Compare Competitors</div>
              <div className="text-sm text-gray-600">Side-by-side analysis</div>
            </div>
          </button>
          <button className="flex items-center gap-3 p-4 bg-white border rounded-lg hover:shadow-md transition">
            <BarChart3 className="w-6 h-6 text-purple-600" />
            <div className="text-left">
              <div className="font-semibold">Market Trends</div>
              <div className="text-sm text-gray-600">Landscape analysis</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  const ComparisonView = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Competitive Comparison</h1>
        <button 
          onClick={() => setActiveView('overview')}
          className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
        >
          <Home className="w-4 h-4" /> Back to Overview
        </button>
      </div>

      <div className="bg-white border rounded-lg overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Metric</th>
              {competitors.map(comp => (
                <th key={comp.id} className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <span>{comp.logo}</span>
                    <span>{comp.name}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 font-medium">Total Value Locked</td>
              {competitors.map(comp => (
                <td key={comp.id} className="px-6 py-4">{comp.tvl}</td>
              ))}
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 font-medium">30d Growth</td>
              {competitors.map(comp => (
                <td key={comp.id} className="px-6 py-4 text-green-600 font-semibold">{comp.growth}</td>
              ))}
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium">User Count</td>
              {competitors.map(comp => (
                <td key={comp.id} className="px-6 py-4">{comp.users}</td>
              ))}
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 font-medium">Primary Focus</td>
              {competitors.map(comp => (
                <td key={comp.id} className="px-6 py-4 text-sm">{comp.tagline}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">TVL Distribution</h3>
          <div className="space-y-3">
            {competitors.map(comp => {
              const tvlNum = parseFloat(comp.tvl.replace(/[$B]/g, ''));
              const total = competitors.reduce((sum, c) => sum + parseFloat(c.tvl.replace(/[$B]/g, '')), 0);
              const percentage = ((tvlNum / total) * 100).toFixed(1);
              return (
                <div key={comp.id}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{comp.name}</span>
                    <span className="font-semibold">{percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${comp.color === 'blue' ? 'bg-blue-600' : comp.color === 'slate' ? 'bg-slate-600' : comp.color === 'purple' ? 'bg-purple-600' : comp.color === 'cyan' ? 'bg-cyan-600' : 'bg-green-600'}`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Growth Leaders (30d)</h3>
          <div className="space-y-3">
            {[...competitors].sort((a, b) => parseFloat(b.growth) - parseFloat(a.growth)).map((comp, idx) => (
              <div key={comp.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{comp.logo}</div>
                  <div>
                    <div className="font-semibold">{comp.name}</div>
                    <div className="text-xs text-gray-600">{comp.tagline}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-600">{comp.growth}</div>
                  <div className="text-xs text-gray-600">#{idx + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const CompetitorDetail = () => {
    const competitor = competitors.find(c => c.id === selectedCompetitor);
    if (!competitor) return null;

    const renderSection = () => {
      switch(activeSection) {
        case 'executive-snapshot':
          return <ExecutiveSnapshot competitor={competitor} />;
        case 'company-overview':
          return <CompanyOverview competitor={competitor} />;
        case 'product-portfolio':
          return <ProductPortfolio competitor={competitor} />;
        case 'technical-architecture':
          return <TechnicalArchitecture competitor={competitor} />;
        case 'business-model':
          return <BusinessModel competitor={competitor} />;
        case 'market-performance':
          return <MarketPerformance competitor={competitor} />;
        case 'go-to-market':
          return <GoToMarket competitor={competitor} />;
        case 'user-intelligence':
          return <UserIntelligence competitor={competitor} />;
        case 'regulatory':
          return <Regulatory competitor={competitor} />;
        case 'competitive-strategy':
          return <CompetitiveStrategy competitor={competitor} />;
        case 'product-roadmap':
          return <ProductRoadmap competitor={competitor} />;
        case 'learning-insights':
          return <LearningInsights competitor={competitor} />;
        case 'news-updates':
          return <NewsUpdates competitor={competitor} />;
        default:
          return <ExecutiveSnapshot competitor={competitor} />;
      }
    };

    return (
      <div className="flex gap-6">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-4 space-y-2">
            <button 
              onClick={() => {
                setSelectedCompetitor(null);
                setActiveView('overview');
              }}
              className="w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded flex items-center gap-2"
            >
              <Home className="w-4 h-4" /> Back to Overview
            </button>
            <div className="border-t pt-2 mt-2">
              {sections.map(section => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-2 text-sm rounded flex items-center gap-2 transition ${
                      activeSection === section.id 
                        ? 'bg-blue-600 text-white font-semibold' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {section.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Mobile Header with Menu */}
          <div className="lg:hidden mb-4 space-y-2">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full flex items-center justify-between p-3 bg-white border rounded-lg"
            >
              <span className="font-semibold">
                {sections.find(s => s.id === activeSection)?.name}
              </span>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            
            {mobileMenuOpen && (
              <div className="bg-white border rounded-lg p-2 space-y-1">
                <button 
                  onClick={() => {
                    setSelectedCompetitor(null);
                    setActiveView('overview');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded flex items-center gap-2"
                >
                  <Home className="w-4 h-4" /> Back to Overview
                </button>
                <div className="border-t pt-1 mt-1">
                  {sections.map(section => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => {
                          setActiveSection(section.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-sm rounded flex items-center gap-2 ${
                          activeSection === section.id 
                            ? 'bg-blue-600 text-white font-semibold' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {section.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg border p-6">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl">{competitor.logo}</span>
                <div>
                  <h1 className="text-3xl font-bold">{competitor.name}</h1>
                  <p className="text-gray-600">{competitor.tagline}</p>
                </div>
              </div>
            </div>
            {renderSection()}
          </div>
        </div>
      </div>
    );
  };

  // Section Components with placeholder content
  const ExecutiveSnapshot = ({ competitor }) => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Executive Snapshot</h2>
        <span className="text-sm text-gray-500">Last updated: Oct 29, 2025</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Total Value Locked</div>
          <div className="text-2xl font-bold text-blue-600">{competitor.tvl}</div>
          <div className="text-sm text-green-600 mt-1">{competitor.growth} (30d)</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Active Users</div>
          <div className="text-2xl font-bold text-purple-600">{competitor.users}</div>
          <div className="text-sm text-gray-500 mt-1">Holders & participants</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Market Position</div>
          <div className="text-2xl font-bold text-green-600">#2</div>
          <div className="text-sm text-gray-500 mt-1">In RWA category</div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="font-bold mb-3">Company At-a-Glance</h3>
        <p className="text-gray-700 leading-relaxed">
          {competitor.name} is a leading player in the real-world asset tokenization space, focusing on {competitor.tagline.toLowerCase()}. 
          The platform has demonstrated strong market traction with {competitor.tvl} in TVL and serves {competitor.users} users. 
          {competitor.focus}
        </p>
      </div>

      <div className="border-t pt-6">
        <h3 className="font-bold mb-3">Primary Business Focus</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700">{competitor.focus}</p>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="font-bold mb-3">Key Metrics Dashboard</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border p-3 rounded">
            <div className="text-xs text-gray-600 mb-1">Founded</div>
            <div className="font-semibold">2021</div>
          </div>
          <div className="border p-3 rounded">
            <div className="text-xs text-gray-600 mb-1">Funding</div>
            <div className="font-semibold">$65M</div>
          </div>
          <div className="border p-3 rounded">
            <div className="text-xs text-gray-600 mb-1">Team Size</div>
            <div className="font-semibold">80+</div>
          </div>
          <div className="border p-3 rounded">
            <div className="text-xs text-gray-600 mb-1">Products</div>
            <div className="font-semibold">4 Live</div>
          </div>
        </div>
      </div>
    </div>
  );

  const CompanyOverview = ({ competitor }) => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Company Overview</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
            <Calendar className="w-5 h-5" /> Founding & History
          </h3>
          <div className="border-l-4 border-blue-600 pl-4 space-y-4">
            <div>
              <div className="font-semibold text-blue-600">2021</div>
              <div className="text-gray-700">Company founded with mission to democratize access to institutional-grade yields</div>
            </div>
            <div>
              <div className="font-semibold text-blue-600">2022</div>
              <div className="text-gray-700">Launched first RWA vault product, achieved $50M TVL milestone</div>
            </div>
            <div>
              <div className="font-semibold text-blue-600">2023</div>
              <div className="text-gray-700">Major expansion: Series A funding, reached $500M TVL</div>
            </div>
            <div>
              <div className="font-semibold text-blue-600">2024-2025</div>
              <div className="text-gray-700">Multi-chain expansion, strategic partnerships, crossed $1B TVL</div>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
            <Users className="w-5 h-5" /> Leadership & Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="font-semibold">CEO & Co-Founder</div>
              <div className="text-sm text-gray-600 mt-1">Former Goldman Sachs, Stanford MBA</div>
              <a href="#" className="text-xs text-blue-600 flex items-center gap-1 mt-2">
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="font-semibold">CTO & Co-Founder</div>
              <div className="text-sm text-gray-600 mt-1">Ex-Google, MIT Computer Science</div>
              <a href="#" className="text-xs text-blue-600 flex items-center gap-1 mt-2">
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 border rounded">
              <div className="text-2xl font-bold text-blue-600">80+</div>
              <div className="text-xs text-gray-600">Team Members</div>
            </div>
            <div className="text-center p-3 border rounded">
              <div className="text-2xl font-bold text-purple-600">25+</div>
              <div className="text-xs text-gray-600">Engineers</div>
            </div>
            <div className="text-center p-3 border rounded">
              <div className="text-2xl font-bold text-green-600">15+</div>
              <div className="text-xs text-gray-600">Business Dev</div>
            </div>
            <div className="text-center p-3 border rounded">
              <div className="text-2xl font-bold text-orange-600">10+</div>
              <div className="text-xs text-gray-600">Compliance</div>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
            <DollarSign className="w-5 h-5" /> Funding & Backers
          </h3>
          <div className="space-y-3">
            <div className="bg-green-50 border-l-4 border-green-600 p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-semibold">Series A</div>
                  <div className="text-sm text-gray-600">December 2023</div>
                </div>
                <div className="text-xl font-bold text-green-600">$35M</div>
              </div>
              <div className="text-sm text-gray-700">Led by Sequoia Capital, Coinbase Ventures</div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-semibold">Seed Round</div>
                  <div className="text-sm text-gray-600">March 2022</div>
                </div>
                <div className="text-xl font-bold text-blue-600">$8M</div>
              </div>
              <div className="text-sm text-gray-700">Led by a16z crypto, Paradigm</div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Raised:</span>
              <span className="font-bold text-xl">$43M</span>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
            <Building2 className="w-5 h-5" /> Corporate Structure
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Legal Entity:</span>
              <span className="font-semibold">{competitor.name} Inc.</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Jurisdiction:</span>
              <span className="font-semibold">Delaware, USA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Structure:</span>
              <span className="font-semibold">C-Corporation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProductPortfolio = ({ competitor }) => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Product Portfolio</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-lg p-5 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-lg">Flagship Vault</h3>
            <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">Live</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Asset Class:</span>
              <span className="font-semibold">US Treasury MMF</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Yield Rate:</span>
              <span className="font-semibold text-green-600">4.8% APY</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Min Investment:</span>
              <span className="font-semibold">$1,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Network:</span>
              <span className="font-semibold">Ethereum</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-blue-200">
            <div className="text-xs text-gray-600 mb-2">KYC Required • Permissioned • ERC-20</div>
            <div className="text-xs text-gray-700">Daily redemptions • 0.15% mgmt fee</div>
          </div>
        </div>

        <div className="border rounded-lg p-5 bg-gradient-to-br from-purple-50 to-purple-100">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-bold text-lg">Private Credit Vault</h3>
            <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">Live</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Asset Class:</span>
              <span className="font-semibold">Private Credit</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Yield Rate:</span>
              <span className="font-semibold text-green-600">7.2% APY</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Min Investment:</span>
              <span className="font-semibold">$10,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Network:</span>
              <span className="font-semibold">Base</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-purple-200">
            <div className="text-xs text-gray-600 mb-2">KYC Required • Accredited Only • ERC-4626</div>
            <div className="text-xs text-gray-700">Monthly redemptions • 0.25% mgmt fee</div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Feature Comparison vs. Nu.xyz</h3>
        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-semibold">Feature</th>
                <th className="px-4 py-2 text-center text-sm font-semibold">{competitor.name}</th>
                <th className="px-4 py-2 text-center text-sm font-semibold">Nu.xyz</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-3 text-sm">Permissionless Access</td>
                <td className="px-4 py-3 text-center">❌</td>
                <td className="px-4 py-3 text-center">✅</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm">Multi-Chain Support</td>
                <td className="px-4 py-3 text-center">✅</td>
                <td className="px-4 py-3 text-center">✅</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm">DeFi Composability</td>
                <td className="px-4 py-3 text-center">⚠️ Limited</td>
                <td className="px-4 py-3 text-center">✅ Full</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm">Yield Structuring</td>
                <td className="px-4 py-3 text-center">❌</td>
                <td className="px-4 py-3 text-center">✅</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm">Lower Minimums</td>
                <td className="px-4 py-3 text-center">$1,000+</td>
                <td className="px-4 py-3 text-center">$100+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-3">User Experience Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            <div className="font-semibold mb-2">✓ Clean Interface</div>
            <div className="text-sm text-gray-700">Intuitive dashboard with clear metrics</div>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <div className="font-semibold mb-2">✓ Mobile App</div>
            <div className="text-sm text-gray-700">iOS and Android native apps available</div>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <div className="font-semibold mb-2">✓ API Access</div>
            <div className="text-sm text-gray-700">Developer-friendly REST & GraphQL APIs</div>
          </div>
        </div>
      </div>
    </div>
  );

  const TechnicalArchitecture = ({ competitor }) => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Technical Architecture</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
        <h3 className="font-bold mb-3">Architecture Overview</h3>
        <p className="text-gray-700 mb-4">
          {competitor.name} employs a hybrid on-chain/off-chain architecture with emphasis on regulatory compliance 
          and institutional-grade security. Core vault logic on Ethereum mainnet with cross-chain bridges to L2s.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white p-3 rounded text-center">
            <div className="font-semibold text-blue-600">Primary L1</div>
            <div className="text-sm">Ethereum</div>
          </div>
          <div className="bg-white p-3 rounded text-center">
            <div className="font-semibold text-purple-600">L2s</div>
            <div className="text-sm">Base, Arbitrum</div>
          </div>
          <div className="bg-white p-3 rounded text-center">
            <div className="font-semibold text-green-600">Standard</div>
            <div className="text-sm">ERC-4626</div>
          </div>
          <div className="bg-white p-3 rounded text-center">
            <div className="font-semibold text-orange-600">Audits</div>
            <div className="text-sm">4 Completed</div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-3">Smart Contract Design</h3>
        <div className="space-y-3">
          <div className="border p-4 rounded">
            <div className="flex justify-between items-start mb-2">
              <div className="font-semibold">Main Vault Contract</div>
              <code className="text-xs bg-gray-100 px-2 py-1 rounded">0x1234...5678</code>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><span className="text-gray-600">Standard:</span> ERC-4626</div>
              <div><span className="text-gray-600">Auditor:</span> Trail of Bits</div>
              <div><span className="text-gray-600">Status:</span> <span className="text-green-600">✓ Audited</span></div>
              <div><span className="text-gray-600">Upgradeable:</span> Yes (Proxy)</div>
            </div>
            <a href="#" className="text-xs text-blue-600 flex items-center gap-1 mt-3">
              View on Etherscan <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-3">Tokenization Mechanism</h3>
        <div className="bg-blue-50 p-4 rounded-lg space-y-3">
          <div>
            <div className="font-semibold text-sm text-gray-700 mb-1">Asset Representation</div>
            <div className="text-sm">1 token = 1 USD of underlying assets (NAV-based)</div>
          </div>
          <div>
            <div className="font-semibold text-sm text-gray-700 mb-1">Oracle</div>
            <div className="text-sm">Chainlink Price Feeds + Internal NAV calculation</div>
          </div>
          <div>
            <div className="font-semibold text-sm text-gray-700 mb-1">Custody</div>
            <div className="text-sm">Qualified custodian (Fireblocks Enterprise) for off-chain assets</div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-3">Vault Architecture</h3>
        <div className="border rounded-lg p-4">
          <div className="space-y-4">
            <div>
              <div className="font-semibold mb-2">Deposit Flow</div>
              <div className="text-sm text-gray-700 space-y-1">
                <div>1. User deposits USDC/USDT → Vault contract</div>
                <div>2. KYC verification (off-chain)</div>
                <div>3. Mint vault tokens at current NAV</div>
                <div>4. Assets allocated to underlying RWAs</div>
              </div>
            </div>
            <div>
              <div className="font-semibold mb-2">Withdrawal Flow</div>
              <div className="text-sm text-gray-700 space-y-1">
                <div>1. User initiates redemption request</div>
                <div>2. T+1 settlement period (configurable)</div>
                <div>3. Burn vault tokens</div>
                <div>4. Return stablecoins at current NAV</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-3">DeFi Composability</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 p-4 rounded">
            <div className="font-semibold text-green-800 mb-2">✓ Supported</div>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Aave collateral (limited)</li>
              <li>• Uniswap V3 liquidity</li>
              <li>• Curve stable pools</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 p-4 rounded">
            <div className="font-semibold text-red-800 mb-2">✗ Not Supported</div>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Pendle yield splitting</li>
              <li>• Leveraged strategies</li>
              <li>• Cross-chain bridging</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
        <h3 className="font-bold mb-2 flex items-center gap-2">
          <Lightbulb className="w-5 h-5" /> Technical Lessons for Nu.xyz
        </h3>
        <ul className="text-sm space-y-2 text-gray-700">
          <li>• <strong>ERC-4626 standard:</strong> Widely adopted, ensures composability</li>
          <li>• <strong>Modular architecture:</strong> Separates KYC/compliance from core vault logic</li>
          <li>• <strong>Proxy pattern:</strong> Enables upgrades without redeployment</li>
          <li>• <strong>Limitation:</strong> Permissioned model restricts DeFi integrations</li>
          <li>• <strong>Opportunity:</strong> More aggressive composability strategy differentiates Nu.xyz</li>
        </ul>
      </div>
    </div>
  );

  const BusinessModel = ({ competitor }) => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Business Model & Economics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-5 bg-gradient-to-br from-green-50 to-green-100">
          <h3 className="font-bold text-lg mb-4">Revenue Model</h3>
          <div className="space-y-3">
            <div>
              <div className="text-sm text-gray-600 mb-1">Primary Revenue</div>
              <div className="font-semibold text-lg">Management Fees</div>
              <div className="text-sm text-gray-700">0.15% - 0.50% annually on AUM</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-1">Secondary Revenue</div>
              <div className="font-semibold">Performance Fees</div>
              <div className="text-sm text-gray-700">10% on returns above benchmark</div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-5 bg-gradient-to-br from-blue-50 to-blue-100">
          <h3 className="font-bold text-lg mb-4">Fee Structure Breakdown</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b">
              <span>Management Fee (MMF)</span>
              <span className="font-semibold">0.15%</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Management Fee (Private Credit)</span>
              <span className="font-semibold">0.50%</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Performance Fee</span>
              <span className="font-semibold">10%</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Redemption Fee</span>
              <span className="font-semibold">0%</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Deposit Fee</span>
              <span className="font-semibold">0%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Fee Comparison: {competitor.name} vs Nu.xyz</h3>
        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Fee Type</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">{competitor.name}</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">Nu.xyz</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Analysis</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-3 text-sm font-medium">Management Fee</td>
                <td className="px-4 py-3 text-center text-sm">0.15% - 0.50%</td>
                <td className="px-4 py-3 text-center text-sm text-green-600 font-semibold">0.10% - 0.30%</td>
                <td className="px-4 py-3 text-sm">Nu.xyz more competitive</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium">Performance Fee</td>
                <td className="px-4 py-3 text-center text-sm">10%</td>
                <td className="px-4 py-3 text-center text-sm">0%</td>
                <td className="px-4 py-3 text-sm">Major differentiator for Nu.xyz</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-medium">Redemption Fee</td>
                <td className="px-4 py-3 text-center text-sm">0%</td>
                <td className="px-4 py-3 text-center text-sm">0%</td>
                <td className="px-4 py-3 text-sm">Parity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Unit Economics Estimate</h3>
        <div className="bg-gray-50 p-5 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-4 rounded border">
              <div className="text-sm text-gray-600 mb-1">Avg Fee per User/Year</div>
              <div className="text-2xl font-bold text-blue-600">$850</div>
            </div>
            <div className="bg-white p-4 rounded border">
              <div className="text-sm text-gray-600 mb-1">Est. Cost per User</div>
              <div className="text-2xl font-bold text-orange-600">$320</div>
            </div>
            <div className="bg-white p-4 rounded border">
              <div className="text-sm text-gray-600 mb-1">Est. Margin</div>
              <div className="text-2xl font-bold text-green-600">62%</div>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <strong>Note:</strong> Estimates based on {competitor.tvl} TVL, {competitor.users} users, 
            and average 0.25% management fee. Actual margins vary by product mix.
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Token Economics</h3>
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
          <div className="font-semibold mb-2">No Native Token (Yet)</div>
          <p className="text-sm text-gray-700 mb-3">
            {competitor.name} has not launched a native governance or utility token. Recent job postings 
            suggest potential token launch in development.
          </p>
          <div className="bg-white p-3 rounded border border-purple-200">
            <div className="text-xs font-semibold text-purple-800 mb-2">Rumored Token Utility (Speculative)</div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Governance rights for protocol parameters</li>
              <li>• Fee discounts for holders</li>
              <li>• Staking rewards from protocol revenue</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const MarketPerformance = ({ competitor }) => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Market Performance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Current TVL</div>
          <div className="text-2xl font-bold text-blue-600">{competitor.tvl}</div>
          <div className="text-xs text-gray-500 mt-1">As of Oct 29, 2025</div>
        </div>
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">30-Day Change</div>
          <div className="text-2xl font-bold text-green-600">{competitor.growth}</div>
          <div className="text-xs text-gray-500 mt-1">+${(parseFloat(competitor.tvl.replace(/[$BM]/g, '')) * 0.18).toFixed(1)}M added</div>
        </div>
        <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">90-Day Change</div>
          <div className="text-2xl font-bold text-purple-600">+47%</div>
          <div className="text-xs text-gray-500 mt-1">Strong quarter</div>
        </div>
        <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
          <div className="text-sm text-gray-600 mb-1">All-Time High</div>
          <div className="text-2xl font-bold text-orange-600">$2.4B</div>
          <div className="text-xs text-gray-500 mt-1">August 2025</div>
        </div>
      </div>

      <div className="border rounded-lg p-5">
        <h3 className="font-bold mb-4">TVL Growth Trend (Last 6 Months)</h3>
        <div className="h-64 flex items-end justify-between gap-2">
          {[1.2, 1.4, 1.5, 1.7, 2.0, 2.1].map((value, index) => {
            const height = (value / 2.4) * 100;
            return (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t" style={{ height: `${height}%` }}></div>
                <div className="text-xs mt-2 text-gray-600">
                  {['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'][index]}
                </div>
                <div className="text-xs font-semibold">${value}B</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Market Position</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border p-4 rounded">
            <div className="text-sm text-gray-600 mb-2">RWA Vault Category</div>
            <div className="text-3xl font-bold text-blue-600">#2</div>
            <div className="text-sm text-gray-700 mt-2">Behind Ondo, ahead of Centrifuge</div>
          </div>
          <div className="border p-4 rounded">
            <div className="text-sm text-gray-600 mb-2">Market Share</div>
            <div className="text-3xl font-bold text-purple-600">18.3%</div>
            <div className="text-sm text-gray-700 mt-2">Of total RWA TVL</div>
          </div>
          <div className="border p-4 rounded">
            <div className="text-sm text-gray-600 mb-2">Growth Rank</div>
            <div className="text-3xl font-bold text-green-600">#3</div>
            <div className="text-sm text-gray-700 mt-2">Top quartile growth rate</div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Liquidity Metrics</h3>
        <div className="space-y-3">
          <div className="bg-gray-50 p-4 rounded">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Uniswap V3 (USDC/Vault Token)</span>
              <span className="text-blue-600 font-bold">$8.5M</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div><span className="text-gray-600">24h Volume:</span> $420K</div>
              <div><span className="text-gray-600">Avg Slippage:</span> 0.12%</div>
              <div><span className="text-gray-600">Depth ±2%:</span> $2.1M</div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Curve Stable Pool</span>
              <span className="text-blue-600 font-bold">$3.2M</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-sm">
              <div><span className="text-gray-600">24h Volume:</span> $180K</div>
              <div><span className="text-gray-600">Avg Slippage:</span> 0.08%</div>
              <div><span className="text-gray-600">APR:</span> 4.2%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Competitive Performance</h3>
        <div className="border rounded-lg p-4">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold">vs. Nu.xyz</span>
                <span className="text-sm text-orange-600">Growing faster (+5% vs Nu.xyz 30d)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: '58%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold">vs. Centrifuge</span>
                <span className="text-sm text-green-600">Outpacing (+18% vs +12%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold">vs. Ondo</span>
                <span className="text-sm text-red-600">Trailing market leader</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const GoToMarket = ({ competitor }) => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Go-to-Market Strategy</h2>
      
      <div className="border-l-4 border-blue-600 pl-4 bg-blue-50 p-4 rounded-r-lg">
        <h3 className="font-bold mb-2">Target Market Summary</h3>
        <p className="text-sm text-gray-700">
          Primarily targeting <strong>institutional investors</strong> and <strong>high-net-worth individuals</strong> seeking 
          yield on stablecoins with regulatory compliance. Secondary focus on crypto-native users seeking safe haven yields.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-5">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5" /> Primary Segments
          </h3>
          <div className="space-y-3">
            <div className="bg-blue-50 p-3 rounded">
              <div className="font-semibold text-sm">Institutional Investors (60%)</div>
              <div className="text-xs text-gray-600 mt-1">DAOs, treasuries, funds seeking regulated yields</div>
            </div>
            <div className="bg-green-50 p-3 rounded">
              <div className="font-semibold text-sm">HNWIs (30%)</div>
              <div className="text-xs text-gray-600 mt-1">Accredited investors, $100K+ portfolio size</div>
            </div>
            <div className="bg-purple-50 p-3 rounded">
              <div className="font-semibold text-sm">Crypto Natives (10%)</div>
              <div className="text-xs text-gray-600 mt-1">DeFi users seeking stable, compliant yields</div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-5">
          <h3 className="font-bold mb-4">Geographic Focus</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center p-2 bg-green-50 rounded">
              <span>🇺🇸 United States</span>
              <span className="font-semibold">Primary</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-green-50 rounded">
              <span>🇪🇺 European Union</span>
              <span className="font-semibold">Primary</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
              <span>🇦🇪 UAE & MENA</span>
              <span className="font-semibold">Expanding</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
              <span>🇸🇬 Singapore & APAC</span>
              <span className="font-semibold">Expanding</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Distribution Channels</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded border-l-4 border-blue-600">
            <div className="font-semibold mb-2">Direct Platform</div>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Web app (primary)</li>
              <li>• Mobile apps (iOS/Android)</li>
              <li>• API access for institutions</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded border-l-4 border-purple-600">
            <div className="font-semibold mb-2">DEX Integrations</div>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Uniswap V3 pools</li>
              <li>• Curve stable pools</li>
              <li>• 1inch aggregator</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded border-l-4 border-green-600">
            <div className="font-semibold mb-2">Partnerships</div>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• Coinbase institutional</li>
              <li>• Fireblocks custody</li>
              <li>• Anchorage banking</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Core Messaging & Positioning</h3>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-4">
          <div className="text-2xl font-bold mb-2">"Institutional-Grade Yields, On-Chain"</div>
          <p className="text-blue-100">
            Bringing traditional finance yields to crypto with full regulatory compliance and institutional custody.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border p-4 rounded">
            <div className="font-semibold mb-2">Safety First</div>
            <div className="text-sm text-gray-700">Emphasis on compliance, audits, institutional custody</div>
          </div>
          <div className="border p-4 rounded">
            <div className="font-semibold mb-2">Real Yields</div>
            <div className="text-sm text-gray-700">Backed by real-world assets, not inflationary tokens</div>
          </div>
          <div className="border p-4 rounded">
            <div className="font-semibold mb-2">Simplicity</div>
            <div className="text-sm text-gray-700">Easy access to complex institutional products</div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Community Strategy</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="text-center p-3 border rounded">
            <div className="text-2xl font-bold text-blue-600">28K</div>
            <div className="text-xs text-gray-600">Discord Members</div>
          </div>
          <div className="text-center p-3 border rounded">
            <div className="text-2xl font-bold text-cyan-600">42K</div>
            <div className="text-xs text-gray-600">Twitter Followers</div>
          </div>
          <div className="text-center p-3 border rounded">
            <div className="text-2xl font-bold text-purple-600">15K</div>
            <div className="text-xs text-gray-600">Telegram Members</div>
          </div>
          <div className="text-center p-3 border rounded">
            <div className="text-2xl font-bold text-green-600">Active</div>
            <div className="text-xs text-gray-600">Community Health</div>
          </div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
          <div className="font-semibold mb-2">Incentive Programs</div>
          <ul className="text-sm space-y-1 text-gray-700">
            <li>• <strong>Loyalty points:</strong> Earn points for deposits, referrals (rumored airdrop)</li>
            <li>• <strong>Referral program:</strong> 0.1% fee kickback for 6 months</li>
            <li>• <strong>Ambassador program:</strong> Content creators, regional leads (10 active)</li>
            <li>• <strong>Educational content:</strong> Weekly AMAs, RWA 101 series, newsletter (12K subs)</li>
          </ul>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Partnership Approach</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded">
            <div className="text-2xl">🤝</div>
            <div>
              <div className="font-semibold">Infrastructure Partnerships</div>
              <div className="text-sm text-gray-600">Chainlink, Fireblocks, Securitize for core infrastructure</div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded">
            <div className="text-2xl">🏦</div>
            <div>
              <div className="font-semibold">Financial Institution Partnerships</div>
              <div className="text-sm text-gray-600">Working with banks for fiat on/off ramps, custody</div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded">
            <div className="text-2xl">🔗</div>
            <div>
              <div className="font-semibold">DeFi Protocol Integrations</div>
              <div className="text-sm text-gray-600">Limited approach - only "safe" protocols like Aave, Curve</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const UserIntelligence = ({ competitor }) => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">User Intelligence</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
          <div className="text-sm text-gray-600 mb-1">Overall Sentiment</div>
          <div className="text-2xl font-bold text-green-600">Positive</div>
          <div className="text-xs text-gray-600 mt-1">72% positive mentions</div>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
          <div className="text-sm text-gray-600 mb-1">Community Health</div>
          <div className="text-2xl font-bold text-blue-600">Strong</div>
          <div className="text-xs text-gray-600 mt-1">High engagement, active</div>
        </div>
        <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-lg">
          <div className="text-sm text-gray-600 mb-1">NPS Estimate</div>
          <div className="text-2xl font-bold text-purple-600">+42</div>
          <div className="text-xs text-gray-600 mt-1">Based on social analysis</div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-green-600">
          ✓ What Users Love
        </h3>
        <div className="space-y-3">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
            <div className="font-semibold mb-2">Regulatory Compliance & Safety</div>
            <div className="text-sm text-gray-700 mb-2">
              Users consistently praise the compliant approach and institutional-grade security.
            </div>
            <div className="bg-white p-3 rounded text-sm italic text-gray-600">
              "Finally, a way to earn yield on my stablecoins without worrying about regulatory risk. 
              The fact that they're fully compliant gives me peace of mind." - Twitter user
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
            <div className="font-semibold mb-2">Reliable Yields</div>
            <div className="text-sm text-gray-700 mb-2">
              Consistent 4-7% yields backed by real assets receive strong positive feedback.
            </div>
            <div className="bg-white p-3 rounded text-sm italic text-gray-600">
              "Been using for 6 months. Yields are exactly as advertised, never missed a payment. 
              This is what sustainable DeFi looks like." - Reddit r/defi
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
            <div className="font-semibold mb-2">Professional Team & Transparency</div>
            <div className="text-sm text-gray-700 mb-2">
              Users appreciate regular AMAs, detailed reporting, and responsive support.
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-red-600">
          ⚠ User Pain Points
        </h3>
        <div className="space-y-3">
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
            <div className="font-semibold mb-2">#1 Complaint: Permissioned Access & KYC</div>
            <div className="text-sm text-gray-700 mb-2">
              Crypto-native users frustrated by mandatory KYC and geographic restrictions.
            </div>
            <div className="bg-white p-3 rounded text-sm italic text-gray-600">
              "Love the product but the KYC process took 3 days and I had to do a video call. 
              This defeats the purpose of crypto for me." - Discord feedback
            </div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
            <div className="font-semibold mb-2">#2 Complaint: Limited DeFi Composability</div>
            <div className="text-sm text-gray-700 mb-2">
              Users want to use vault tokens in more DeFi protocols but restricted.
            </div>
            <div className="bg-white p-3 rounded text-sm italic text-gray-600">
              "Can't use my tokens on Pendle or as collateral in most places. 
              Too many restrictions for something that's supposed to be DeFi." - Twitter
            </div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
            <div className="font-semibold mb-2">#3 Complaint: High Minimums for Private Credit</div>
            <div className="text-sm text-gray-700 mb-2">
              $10K minimum for private credit vaults excludes smaller investors.
            </div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
            <div className="font-semibold mb-2">Minor: Gas Fees on Ethereum</div>
            <div className="text-sm text-gray-700">
              Some users complain about high gas costs for deposits/withdrawals on mainnet.
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Top User Feature Requests</h3>
        <div className="space-y-2">
          {[
            { request: "More DeFi integrations (Pendle, Morpho, etc.)", votes: 284 },
            { request: "Lower minimum investments", votes: 192 },
            { request: "More asset types (real estate, commodities)", votes: 156 },
            { request: "Layer 2 deployment to reduce fees", votes: 143 },
            { request: "Auto-compounding option", votes: 98 },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded border">
              <span className="text-sm font-medium">{item.request}</span>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-600">{item.votes} votes</span>
                <div className="w-20 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${(item.votes / 284) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">User Behavior Patterns</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded">
            <div className="font-semibold mb-3">Deposit Behavior</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Avg Deposit:</span>
                <span className="font-semibold">$18,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Median Deposit:</span>
                <span className="font-semibold">$8,200</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avg Hold Duration:</span>
                <span className="font-semibold">187 days</span>
              </div>
            </div>
          </div>
          <div className="border p-4 rounded">
            <div className="font-semibold mb-3">Engagement Patterns</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Return Rate:</span>
                <span className="font-semibold">68%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avg Transactions:</span>
                <span className="font-semibold">3.2 / month</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Churn (90d):</span>
                <span className="font-semibold">12%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-r-lg">
        <div className="font-bold mb-2 flex items-center gap-2">
          <Lightbulb className="w-5 h-5" /> Key Insights for Nu.xyz
        </div>
        <ul className="text-sm space-y-1 text-gray-700">
          <li>• <strong>Opportunity:</strong> Users want permissionless access - major differentiator for Nu.xyz</li>
          <li>• <strong>Opportunity:</strong> DeFi composability is highly requested - Nu.xyz can lead here</li>
          <li>• <strong>Learn:</strong> Transparency and professional communication build trust</li>
          <li>• <strong>Watch:</strong> KYC friction is real pain point - balance compliance with UX</li>
        </ul>
      </div>
    </div>
  );

  const Regulatory = ({ competitor }) => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Regulatory & Compliance</h2>
      
      <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
        <h3 className="font-bold mb-2">Regulatory Philosophy</h3>
        <p className="text-sm text-gray-700">
          <strong>Compliance-first approach.</strong> {competitor.name} prioritizes regulatory compliance and institutional 
          partnerships over permissionless access. Targets accredited investors and requires KYC for all users.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-5">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5" /> Compliance Infrastructure
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <div className="font-semibold text-gray-700 mb-1">KYC Provider</div>
              <div>Chainalysis KYT + Jumio for identity verification</div>
            </div>
            <div>
              <div className="font-semibold text-gray-700 mb-1">AML Monitoring</div>
              <div>Continuous transaction monitoring via Elliptic</div>
            </div>
            <div>
              <div className="font-semibold text-gray-700 mb-1">Sanctions Screening</div>
              <div>Automated OFAC/EU sanctions list checking</div>
            </div>
            <div>
              <div className="font-semibold text-gray-700 mb-1">Compliance Team</div>
              <div>12 full-time compliance officers, external legal counsel</div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-5">
          <h3 className="font-bold mb-4">KYC Requirements</h3>
          <div className="space-y-3">
            <div className="bg-red-50 p-3 rounded border-l-4 border-red-600">
              <div className="font-semibold text-sm mb-1">✓ Required for Minting</div>
              <div className="text-xs text-gray-600">Full KYC required before any vault deposits</div>
            </div>
            <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-600">
              <div className="font-semibold text-sm mb-1">✓ Required for Holdings</div>
              <div className="text-xs text-gray-600">Ongoing verification; tokens frozen if KYC expires</div>
            </div>
            <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-600">
              <div className="font-semibold text-sm mb-1">Accreditation for Select Vaults</div>
              <div className="text-xs text-gray-600">Private credit vaults require accredited investor status</div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-gray-50 rounded text-sm">
            <div className="font-semibold mb-1">Typical KYC Process:</div>
            <div className="text-xs text-gray-600">
              1-3 days for approval, requires government ID, proof of address, 
              video verification for deposits over $50K
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Operational Jurisdictions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="font-semibold mb-3 text-green-600">✓ Available In:</div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded text-sm">
                <span>🇺🇸</span> <span>United States (excl. NY, HI)</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded text-sm">
                <span>🇪🇺</span> <span>European Union (MiCA compliant)</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded text-sm">
                <span>🇬🇧</span> <span>United Kingdom</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded text-sm">
                <span>🇦🇪</span> <span>United Arab Emirates (VARA licensed)</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-green-50 rounded text-sm">
                <span>🇸🇬</span> <span>Singapore (MAS approved)</span>
              </div>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-3 text-red-600">✗ Not Available In:</div>
            <div className="space-y-2">
              <div className="p-2 bg-red-50 rounded text-sm text-gray-700">
                <div className="font-semibold">Restricted Regions:</div>
                <div className="text-xs mt-1">China, Iran, North Korea, Cuba, Syria, Russia, Belarus, 
                Crimea, Donetsk, Luhansk</div>
              </div>
              <div className="p-2 bg-orange-50 rounded text-sm text-gray-700">
                <div className="font-semibold">US Restrictions:</div>
                <div className="text-xs mt-1">New York (BitLicense required), Hawaii (money transmitter licensing)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Regulatory Licenses & Status</h3>
        <div className="space-y-3">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold">SEC Registration (US)</div>
              <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">Active</span>
            </div>
            <div className="text-sm text-gray-700">
              <div className="mb-1"><strong>Status:</strong> Reg D exemption (506(c)) for accredited investors</div>
              <div><strong>Filing:</strong> Form D on file with SEC for private credit vault</div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold">MAS Approval (Singapore)</div>
              <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">Licensed</span>
            </div>
            <div className="text-sm text-gray-700">
              <div><strong>License:</strong> Recognized Market Operator (RMO)</div>
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold">VARA License (UAE)</div>
              <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full">Approved</span>
            </div>
            <div className="text-sm text-gray-700">
              <div><strong>License Type:</strong> Virtual Asset Service Provider (VASP)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Securities Classification</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-semibold mb-2">Vault Tokens:</div>
              <div className="text-gray-700">
                Classified as <strong>securities</strong> in most jurisdictions. 
                Represents ownership in pooled investment vehicle.
              </div>
            </div>
            <div>
              <div className="font-semibold mb-2">Regulatory Strategy:</div>
              <div className="text-gray-700">
                Work within existing securities framework rather than challenging classification.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-r-lg">
        <div className="font-bold mb-2 flex items-center gap-2">
          <Lightbulb className="w-5 h-5" /> Regulatory Insights for Nu.xyz
        </div>
        <ul className="text-sm space-y-1 text-gray-700">
          <li>• <strong>Different path:</strong> {competitor.name} chose full compliance; Nu.xyz explores permissionless approach</li>
          <li>• <strong>Trade-off:</strong> Compliance enables institutional partnerships but limits composability</li>
          <li>• <strong>Licensing:</strong> Multi-jurisdiction licensing is expensive but enables global access</li>
          <li>• <strong>Opportunity:</strong> Regulatory arbitrage - operate where {competitor.name} cannot</li>
          <li>• <strong>Risk:</strong> Regulatory environment evolving; compliance-first may be safer long-term</li>
        </ul>
      </div>
    </div>
  );

  const CompetitiveStrategy = ({ competitor }) => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Competitive Strategy</h2>
      
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Strategic Positioning</h3>
        <p className="text-purple-100 mb-4">
          "The bridge between traditional finance and DeFi - institutional-grade yields, on-chain."
        </p>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="bg-white/10 backdrop-blur p-3 rounded">
            <div className="font-semibold">Target:</div>
            <div className="text-white/90">Institutions & HNWIs</div>
          </div>
          <div className="bg-white/10 backdrop-blur p-3 rounded">
            <div className="font-semibold">Strategy:</div>
            <div className="text-white/90">Compliance-first</div>
          </div>
          <div className="bg-white/10 backdrop-blur p-3 rounded">
            <div className="font-semibold">Moat:</div>
            <div className="text-white/90">Regulatory licenses</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-5">
          <h3 className="font-bold mb-4 text-green-600">✓ Competitive Advantages</h3>
          <div className="space-y-3">
            <div className="bg-green-50 p-3 rounded">
              <div className="font-semibold text-sm mb-1">Regulatory Compliance</div>
              <div className="text-xs text-gray-700">
                Fully licensed in major jurisdictions - enables institutional partnerships
              </div>
            </div>
            <div className="bg-green-50 p-3 rounded">
              <div className="font-semibold text-sm mb-1">First-Mover in Compliant RWAs</div>
              <div className="text-xs text-gray-700">
                Early mover building regulatory relationships and infrastructure
              </div>
            </div>
            <div className="bg-green-50 p-3 rounded">
              <div className="font-semibold text-sm mb-1">Strong Brand & Trust</div>
              <div className="text-xs text-gray-700">
                Established reputation for safety and transparency
              </div>
            </div>
            <div className="bg-green-50 p-3 rounded">
              <div className="font-semibold text-sm mb-1">Institutional Custody Partnerships</div>
              <div className="text-xs text-gray-700">
                Fireblocks, Anchorage relationships difficult to replicate
              </div>
            </div>
            <div className="bg-green-50 p-3 rounded">
              <div className="font-semibold text-sm mb-1">Experienced Team</div>
              <div className="text-xs text-gray-700">
                Mix of TradFi and crypto expertise from Goldman, Coinbase
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-5">
          <h3 className="font-bold mb-4 text-red-600">⚠ Strategic Vulnerabilities</h3>
          <div className="space-y-3">
            <div className="bg-red-50 p-3 rounded">
              <div className="font-semibold text-sm mb-1">Regulatory Dependency Risk</div>
              <div className="text-xs text-gray-700">
                Over-reliance on compliance could limit agility if regulations shift
              </div>
            </div>
            <div className="bg-red-50 p-3 rounded">
              <div className="font-semibold text-sm mb-1">Limited DeFi Composability</div>
              <div className="text-xs text-gray-700">
                Permissioned model restricts integration with broader DeFi ecosystem
              </div>
            </div>
            <div className="bg-red-50 p-3 rounded">
              <div className="font-semibold text-sm mb-1">Centralization Points</div>
              <div className="text-xs text-gray-700">
                Upgradeable contracts, admin keys, custodian dependencies
              </div>
            </div>
            <div className="bg-red-50 p-3 rounded">
              <div className="font-semibold text-sm mb-1">Narrow Customer Base</div>
              <div className="text-xs text-gray-700">
                KYC requirements exclude large segment of crypto users
              </div>
            </div>
            <div className="bg-red-50 p-3 rounded">
              <div className="font-semibold text-sm mb-1">Fee Pressure from Competitors</div>
              <div className="text-xs text-gray-700">
                Nu.xyz and others offering lower fees may erode margins
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Recent Competitive Moves</h3>
        <div className="space-y-3">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <div className="flex justify-between items-start mb-2">
              <div className="font-semibold">Launched Base Integration</div>
              <div className="text-xs text-gray-600">Sep 2025</div>
            </div>
            <div className="text-sm text-gray-700 mb-2">
              Deployed vaults on Base L2 to reduce gas fees - competitive response to user complaints
            </div>
            <div className="text-xs text-blue-600">→ Direct response to Nu.xyz's multi-chain strategy</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
            <div className="flex justify-between items-start mb-2">
              <div className="font-semibold">Reduced Management Fees</div>
              <div className="text-xs text-gray-600">Aug 2025</div>
            </div>
            <div className="text-sm text-gray-700 mb-2">
              Lowered fees from 0.25% to 0.15% on flagship MMF vault
            </div>
            <div className="text-xs text-purple-600">→ Defensive pricing against lower-cost competitors</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
            <div className="flex justify-between items-start mb-2">
              <div className="font-semibold">Partnership with Pendle</div>
              <div className="text-xs text-gray-600">Oct 2025</div>
            </div>
            <div className="text-sm text-gray-700 mb-2">
              Announced integration allowing yield tokenization - improving composability
            </div>
            <div className="text-xs text-green-600">→ Addressing #1 user request for DeFi integrations</div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Positioning vs. Nu.xyz</h3>
        <div className="bg-gray-50 p-5 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="font-semibold mb-3 text-blue-600">{competitor.name}'s Approach</div>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>✓ Compliance-first, institutional focus</li>
                <li>✓ Permissioned, KYC-gated access</li>
                <li>✓ Limited DeFi composability</li>
                <li>✓ Higher minimum investments</li>
                <li>✓ Established regulatory relationships</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3 text-purple-600">Nu.xyz's Differentiation</div>
              <ul className="text-sm space-y-2 text-gray-700">
                <li>✓ Permissionless access model</li>
                <li>✓ Full DeFi composability</li>
                <li>✓ Lower fees, no performance fees</li>
                <li>✓ Lower minimums ($100 vs $1,000)</li>
                <li>✓ Yield structuring capabilities</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-white rounded border-l-4 border-yellow-600">
            <div className="font-semibold text-sm mb-1">Head-to-Head Areas:</div>
            <div className="text-xs text-gray-700">
              Money market funds (USDY vs nuYLDS), institutional custody, multi-chain deployment, 
              RWA tokenization infrastructure
            </div>
          </div>
          <div className="mt-2 p-4 bg-white rounded border-l-4 border-green-600">
            <div className="font-semibold text-sm mb-1">Non-Competing Areas:</div>
            <div className="text-xs text-gray-700">
              Yield structuring/splitting (Nu.xyz unique), points programs (neither has token), 
              private credit vaults (different asset types)
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-r-lg">
        <div className="font-bold mb-2 flex items-center gap-2">
          <Lightbulb className="w-5 h-5" /> Strategic Implications for Nu.xyz
        </div>
        <ul className="text-sm space-y-1 text-gray-700">
          <li>• <strong>White space opportunity:</strong> Permissionless RWAs with full DeFi composability largely unaddressed</li>
          <li>• <strong>Strategic timing:</strong> {competitor.name} moving toward composability - validates Nu.xyz's approach</li>
          <li>• <strong>Competitive pressure:</strong> Fee compression happening - need operational efficiency</li>
          <li>• <strong>Partnership strategy:</strong> Consider similar institutional custody partnerships for credibility</li>
          <li>• <strong>Positioning:</strong> "DeFi-native RWAs" vs. their "TradFi yields on-chain" narrative</li>
        </ul>
      </div>
    </div>
  );

  const ProductRoadmap = ({ competitor }) => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Product Roadmap & Signals</h2>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border">
        <h3 className="font-bold text-lg mb-3">Roadmap Transparency</h3>
        <p className="text-sm text-gray-700 mb-3">
          {competitor.name} maintains a public roadmap updated quarterly. Recent signals suggest aggressive expansion 
          into new asset classes and geographic markets.
        </p>
        <div className="grid grid-cols-3 gap-3 text-xs">
          <div className="bg-white p-2 rounded text-center">
            <div className="font-bold text-green-600">Q4 2025</div>
            <div>Current Quarter</div>
          </div>
          <div className="bg-white p-2 rounded text-center">
            <div className="font-bold text-blue-600">Q1-Q2 2026</div>
            <div>Near-term</div>
          </div>
          <div className="bg-white p-2 rounded text-center">
            <div className="font-bold text-purple-600">H2 2026</div>
            <div>Future Vision</div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Publicly Announced Roadmap</h3>
        <div className="space-y-3">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
            <div className="flex justify-between items-start mb-2">
              <div className="font-semibold">Q4 2025 (Current)</div>
              <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full">In Progress</span>
            </div>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• <strong>Pendle Integration Launch:</strong> Enable yield tokenization for all vaults</li>
              <li>• <strong>Mobile App v2.0:</strong> Enhanced UX, portfolio analytics, push notifications</li>
              <li>• <strong>Real Estate Vault Beta:</strong> Tokenized commercial real estate (invite-only)</li>
              <li>• <strong>Arbitrum Deployment:</strong> Expand to third L2</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <div className="flex justify-between items-start mb-2">
              <div className="font-semibold">Q1 2026</div>
              <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">Planned</span>
            </div>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• <strong>Governance Token Launch:</strong> Utility token for fee discounts and governance</li>
              <li>• <strong>LatAm Expansion:</strong> Brazil and Mexico regulatory approval and launch</li>
              <li>• <strong>Institutional API v3:</strong> Enhanced API for institutional integrations</li>
              <li>• <strong>Auto-compounding Vaults:</strong> Automatic reinvestment option</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
            <div className="flex justify-between items-start mb-2">
              <div className="font-semibold">Q2-Q3 2026</div>
              <span className="px-2 py-1 bg-purple-600 text-white text-xs rounded-full">Committed</span>
            </div>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• <strong>Commodities Vault:</strong> Gold and precious metals tokenization</li>
              <li>• <strong>Cross-chain Bridge:</strong> Native bridging between all supported chains</li>
              <li>• <strong>Leveraged Vaults:</strong> 2x leverage options for accredited investors</li>
              <li>• <strong>Asia-Pacific Expansion:</strong> Hong Kong, Japan, Australia licenses</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-400">
            <div className="flex justify-between items-start mb-2">
              <div className="font-semibold">H2 2026 & Beyond</div>
              <span className="px-2 py-1 bg-gray-600 text-white text-xs rounded-full">Vision</span>
            </div>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• <strong>Structured Products:</strong> Options, derivatives on RWA vaults</li>
              <li>• <strong>Institutional Prime Brokerage:</strong> Custody and trading for institutions</li>
              <li>• <strong>Banking Partner Integration:</strong> Direct fiat on/off ramps via partner banks</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Strategic Signals & Intelligence</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Users className="w-4 h-4" /> Recent Job Postings (Last 30 days)
            </h4>
            <div className="space-y-2 text-sm">
              <div className="bg-blue-50 p-2 rounded">
                <div className="font-semibold">Head of Tokenomics</div>
                <div className="text-xs text-gray-600">Confirms governance token launch plans</div>
              </div>
              <div className="bg-purple-50 p-2 rounded">
                <div className="font-semibold">Senior Real Estate Analyst</div>
                <div className="text-xs text-gray-600">Signals real estate vault expansion</div>
              </div>
              <div className="bg-green-50 p-2 rounded">
                <div className="font-semibold">Business Development - LatAm</div>
                <div className="text-xs text-gray-600">Confirms geographic expansion strategy</div>
              </div>
              <div className="bg-orange-50 p-2 rounded">
                <div className="font-semibold">Smart Contract Engineer (ZK)</div>
                <div className="text-xs text-gray-600">Possible privacy features or ZK rollup deployment</div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <GitCompare className="w-4 h-4" /> GitHub Activity Signals
            </h4>
            <div className="space-y-2 text-sm">
              <div className="bg-gray-50 p-2 rounded">
                <div className="font-semibold">New Repository: "cross-chain-bridge"</div>
                <div className="text-xs text-gray-600">Active development since Sept 2025</div>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <div className="font-semibold">Commits to "governance-contracts"</div>
                <div className="text-xs text-gray-600">Weekly commits, token launch imminent</div>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <div className="font-semibold">Partnership with ZK Protocol</div>
                <div className="text-xs text-gray-600">Collaboration repo created - privacy features?</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Recent Product Launches (Last 6 Months)</h3>
        <div className="space-y-3">
          <div className="bg-white border-l-4 border-green-600 p-4 rounded-r-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="font-semibold">Base L2 Deployment</div>
                <div className="text-xs text-gray-600 mt-1">September 2025</div>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Live</span>
            </div>
            <div className="text-sm text-gray-700 mb-2">
              Deployed all major vaults on Base to reduce gas fees. Achieved 15K users and $120M TVL in first month.
            </div>
            <div className="text-xs text-green-600">✓ Strong adoption validates multi-chain strategy</div>
          </div>
          <div className="bg-white border-l-4 border-blue-600 p-4 rounded-r-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="font-semibold">Enhanced Portfolio Dashboard</div>
                <div className="text-xs text-gray-600 mt-1">August 2025</div>
              </div>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Live</span>
            </div>
            <div className="text-sm text-gray-700 mb-2">
              New analytics dashboard with P&L tracking, tax reporting, performance benchmarking.
            </div>
            <div className="text-xs text-blue-600">✓ Positive user reception, NPS +8 points</div>
          </div>
          <div className="bg-white border-l-4 border-purple-600 p-4 rounded-r-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="font-semibold">Private Credit Vault 2.0</div>
                <div className="text-xs text-gray-600 mt-1">July 2025</div>
              </div>
              <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Live</span>
            </div>
            <div className="text-sm text-gray-700 mb-2">
              New private credit vault with diversified portfolio, lower minimum ($10K → $5K).
            </div>
            <div className="text-xs text-purple-600">✓ 2,100 users, $42M TVL in first quarter</div>
          </div>
        </div>
        <div className="mt-4 bg-green-50 p-3 rounded border border-green-200">
          <div className="text-sm font-semibold text-green-800 mb-1">Feature Velocity Assessment:</div>
          <div className="text-xs text-gray-700">
            <strong>High velocity.</strong> Shipping major features every 4-6 weeks. Strong engineering execution. 
            Community feedback loop appears effective.
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Market Speculation & Rumors</h3>
        <div className="space-y-3">
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
            <div className="flex items-start gap-2">
              <span className="text-xl">⚠️</span>
              <div className="flex-1">
                <div className="font-semibold text-sm mb-1">Token Airdrop Speculation</div>
                <div className="text-xs text-gray-700 mb-2">
                  Strong rumors of governance token airdrop to early users and liquidity providers. 
                  Points system tracking engagement suggests airdrop likely Q1 2026.
                </div>
                <div className="text-xs">
                  <span className="font-semibold">Confidence:</span> <span className="text-yellow-700">High (80%)</span> - 
                  based on job postings, GitHub activity, CEO hints in AMAs
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <div className="flex items-start gap-2">
              <span className="text-xl">ℹ️</span>
              <div className="flex-1">
                <div className="font-semibold text-sm mb-1">Series B Fundraising</div>
                <div className="text-xs text-gray-700 mb-2">
                  Market chatter suggests Series B round in progress ($100M target) led by Sequoia, Paradigm. 
                  Would fuel international expansion and product development.
                </div>
                <div className="text-xs">
                  <span className="font-semibold">Confidence:</span> <span className="text-blue-700">Medium (60%)</span> - 
                  unconfirmed but multiple sources
                </div>
              </div>
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
            <div className="flex items-start gap-2">
              <span className="text-xl">🔮</span>
              <div className="flex-1">
                <div className="font-semibold text-sm mb-1">Traditional Bank Partnership</div>
                <div className="text-xs text-gray-700 mb-2">
                  Speculation of partnership with major US bank for direct USD on/off ramps. 
                  Would be significant competitive advantage vs. Nu.xyz.
                </div>
                <div className="text-xs">
                  <span className="font-semibold">Confidence:</span> <span className="text-purple-700">Low (30%)</span> - 
                  speculative, no strong signals
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-r-lg">
        <div className="font-bold mb-2 flex items-center gap-2">
          <Lightbulb className="w-5 h-5" /> Roadmap Intelligence for Nu.xyz
        </div>
        <ul className="text-sm space-y-1 text-gray-700">
          <li>• <strong>Token launch:</strong> Competitor token incoming - should Nu.xyz accelerate own tokenomics?</li>
          <li>• <strong>Geographic expansion:</strong> LatAm focus creates opportunity for Nu.xyz to enter first in APAC</li>
          <li>• <strong>Real estate vaults:</strong> New asset class - worth exploring or too crowded?</li>
          <li>• <strong>Leveraged products:</strong> Sophisticated offerings coming - opportunity for Nu.xyz differentiation</li>
          <li>• <strong>Development velocity:</strong> Shipping fast - Nu.xyz needs similar execution speed to stay competitive</li>
        </ul>
      </div>
    </div>
  );

  const LearningInsights = ({ competitor }) => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Learning & Insights</h2>
      
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border">
        <h3 className="font-bold text-lg mb-2">Executive Summary</h3>
        <p className="text-sm text-gray-700">
          {competitor.name} demonstrates strong execution in the compliance-first RWA space, with notable strengths 
          in regulatory partnerships and institutional positioning. However, their permissioned model and limited 
          DeFi composability create significant opportunities for Nu.xyz to differentiate with a permissionless, 
          DeFi-native approach.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-5 bg-green-50">
          <h3 className="font-bold text-lg mb-4 text-green-800 flex items-center gap-2">
            ✓ What They're Doing Well
          </h3>
          <div className="space-y-4">
            <div>
              <div className="font-semibold text-sm mb-2">1. Regulatory Execution</div>
              <div className="text-sm text-gray-700 mb-2">
                Successfully obtained licenses in multiple jurisdictions (MAS, VARA, SEC). Created playbook 
                for regulatory compliance that attracts institutional capital.
              </div>
              <div className="text-xs bg-white p-2 rounded italic text-gray-600">
                <strong>Lesson:</strong> Regulatory relationships are defensible moat. Even if pursuing permissionless 
                model, maintain dialogue with regulators for optionality.
              </div>
            </div>
            <div>
              <div className="font-semibold text-sm mb-2">2. User Communication & Transparency</div>
              <div className="text-sm text-gray-700 mb-2">
                Regular AMAs, detailed reporting, responsive support. Users consistently praise transparency.
              </div>
              <div className="text-xs bg-white p-2 rounded italic text-gray-600">
                <strong>Lesson:</strong> Transparency builds trust in RWA space where users lack visibility into 
                underlying assets. Over-communicate on asset holdings, yields, operations.
              </div>
            </div>
            <div>
              <div className="font-semibold text-sm mb-2">3. Multi-Chain Strategy Execution</div>
              <div className="text-sm text-gray-700 mb-2">
                Base deployment achieved $120M TVL in first month. Validates reducing friction through L2s.
              </div>
              <div className="text-xs bg-white p-2 rounded italic text-gray-600">
                <strong>Lesson:</strong> L2 deployments drive adoption. Base success shows users will migrate for 
                lower fees. Prioritize Base, Arbitrum deployments for Nu.xyz.
              </div>
            </div>
            <div>
              <div className="font-semibold text-sm mb-2">4. Product-Market Fit with Institutions</div>
              <div className="text-sm text-gray-700 mb-2">
                Strong institutional adoption (60% of TVL) shows demand for compliant on-chain yields.
              </div>
              <div className="text-xs bg-white p-2 rounded italic text-gray-600">
                <strong>Lesson:</strong> Institutions want on-chain yields but need compliance framework. 
                Consider parallel "institutional track" for Nu.xyz with optional compliance.
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-5 bg-red-50">
          <h3 className="font-bold text-lg mb-4 text-red-800 flex items-center gap-2">
            ✗ What's Not Working
          </h3>
          <div className="space-y-4">
            <div>
              <div className="font-semibold text-sm mb-2">1. DeFi Composability Limitations</div>
              <div className="text-sm text-gray-700 mb-2">
                #1 user complaint. Permissioned model prevents integration with most DeFi protocols. 
                Losing crypto-native users to more composable alternatives.
              </div>
              <div className="text-xs bg-white p-2 rounded italic text-gray-600">
                <strong>Opportunity:</strong> Nu.xyz can capture DeFi-native users frustrated by limitations. 
                Full composability is major differentiator.
              </div>
            </div>
            <div>
              <div className="font-semibold text-sm mb-2">2. KYC Friction Driving Churn</div>
              <div className="text-sm text-gray-700 mb-2">
                12% quarterly churn rate, significant portion due to KYC hassle (3-day approval, 
                video verification, annual renewal).
              </div>
              <div className="text-xs bg-white p-2 rounded italic text-gray-600">
                <strong>Opportunity:</strong> Permissionless Nu.xyz vaults can onboard users instantly. 
                Capture users who abandon {competitor.name} due to KYC friction.
              </div>
            </div>
            <div>
              <div className="font-semibold text-sm mb-2">3. High Fee Structure Under Pressure</div>
              <div className="text-sm text-gray-700 mb-2">
                Already reduced fees once (0.25% → 0.15%) due to competitive pressure. 
                Performance fees (10%) drawing criticism.
              </div>
              <div className="text-xs bg-white p-2 rounded italic text-gray-600">
                <strong>Opportunity:</strong> Nu.xyz's lower fee structure (no performance fees) is 
                competitive advantage. Don't compete on fees alone but use as supporting argument.
              </div>
            </div>
            <div>
              <div className="font-semibold text-sm mb-2">4. Geographic Restrictions</div>
              <div className="text-sm text-gray-700 mb-2">
                Excluded from NY, HI, many countries due to licensing gaps. Missing substantial TAM.
              </div>
              <div className="text-xs bg-white p-2 rounded italic text-gray-600">
                <strong>Opportunity:</strong> Permissionless model allows global access. Target users 
                in restricted regions.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Strategic Lessons for Nu.xyz</h3>
        <div className="space-y-3">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
            <div className="font-semibold mb-2">Lesson 1: Permissionless vs. Compliance is False Dichotomy</div>
            <div className="text-sm text-gray-700 mb-2">
              {competitor.name}'s success shows institutional demand for compliant RWAs. Nu.xyz shouldn't 
              dismiss compliance entirely - instead, create modular approach: permissionless by default, 
              opt-in compliance for institutions.
            </div>
            <div className="text-xs text-blue-700 font-semibold">
              Action: Design vault architecture to support both permissionless retail and compliant institutional access
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
            <div className="font-semibold mb-2">Lesson 2: Composability is Defensible Moat</div>
            <div className="text-sm text-gray-700 mb-2">
              {competitor.name}'s biggest weakness is Nu.xyz's biggest strength. Users desperately want 
              DeFi composability. Deep integrations with Pendle, Aave, Morpho create network effects 
              that competitors struggle to replicate.
            </div>
            <div className="text-xs text-purple-700 font-semibold">
              Action: Prioritize deep DeFi integrations over regulatory licenses in near-term
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
            <div className="font-semibold mb-2">Lesson 3: Communication Builds Trust in RWA</div>
            <div className="text-sm text-gray-700 mb-2">
              {competitor.name}'s transparency (regular AMAs, detailed reports, responsive support) is 
              consistently praised. In RWA space where users can't physically verify assets, 
              over-communication is critical.
            </div>
            <div className="text-xs text-green-700 font-semibold">
              Action: Establish regular AMA cadence, publish detailed vault reports, build community trust through transparency
            </div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
            <div className="font-semibold mb-2">Lesson 4: Multi-Chain is Table Stakes</div>
            <div className="text-sm text-gray-700 mb-2">
              Base deployment success ($120M in month 1) shows users will migrate for lower fees. 
              Multi-chain isn't differentiator - it's requirement. Deploy early and everywhere.
            </div>
            <div className="text-xs text-orange-700 font-semibold">
              Action: Launch on Base and Arbitrum alongside mainnet, use chain abstraction for seamless UX
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Technical Learnings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded bg-white">
            <div className="font-semibold mb-3 text-blue-600">Approaches Worth Studying</div>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>✓ <strong>ERC-4626 implementation:</strong> Clean, standard-compliant vault interface</li>
              <li>✓ <strong>Modular compliance layer:</strong> Separates KYC logic from core vault logic</li>
              <li>✓ <strong>Multi-sig operations:</strong> 4-of-7 for admin actions, good security model</li>
              <li>✓ <strong>NAV calculation:</strong> Hybrid on-chain/off-chain oracle approach works well</li>
              <li>✓ <strong>Audit rigor:</strong> 4 audits from top firms (Trail of Bits, etc.) builds credibility</li>
            </ul>
          </div>
          <div className="border p-4 rounded bg-white">
            <div className="font-semibold mb-3 text-red-600">Pitfalls to Avoid</div>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>✗ <strong>Over-centralization:</strong> Admin keys can freeze accounts - created controversy</li>
              <li>✗ <strong>Gas optimization neglect:</strong> Users complained before L2 deployment</li>
              <li>✗ <strong>Tight coupling to compliance:</strong> Difficult to add permissionless features later</li>
              <li>✗ <strong>Limited composability:</strong> Token transfer restrictions break DeFi integrations</li>
              <li>✗ <strong>Upgrade complexity:</strong> Proxy pattern caused confusion during upgrades</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Product Implications for Nu.xyz</h3>
        <div className="space-y-3">
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="font-semibold text-green-800 mb-2">✓ Features Nu.xyz Should Prioritize</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div className="bg-white p-2 rounded">Full Pendle integration (yield tokenization)</div>
              <div className="bg-white p-2 rounded">Morpho/Aave collateral usage</div>
              <div className="bg-white p-2 rounded">Transparent vault reporting (weekly)</div>
              <div className="bg-white p-2 rounded">Lower minimums than competitors ($100)</div>
              <div className="bg-white p-2 rounded">Multi-chain from day 1 (Base + Arbitrum)</div>
              <div className="bg-white p-2 rounded">Auto-compounding options</div>
            </div>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <div className="font-semibold text-red-800 mb-2">✗ Features Nu.xyz Should Deprioritize</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div className="bg-white p-2 rounded">Mandatory KYC (learn from friction)</div>
              <div className="bg-white p-2 rounded">High minimum investments</div>
              <div className="bg-white p-2 rounded">Performance fees (user pushback)</div>
              <div className="bg-white p-2 rounded">Geographic restrictions</div>
              <div className="bg-white p-2 rounded">Token transfer restrictions</div>
              <div className="bg-white p-2 rounded">Ethereum-only deployment</div>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="font-semibold text-yellow-800 mb-2">⚠️ Strategic Positioning</div>
            <div className="text-sm text-gray-700 space-y-1">
              <div>• Position Nu.xyz as "DeFi-native RWAs" vs. {competitor.name}'s "TradFi on-chain"</div>
              <div>• Emphasize permissionless access and composability as core differentiators</div>
              <div>• Don't compete on institutional features - focus on DeFi power users</div>
              <div>• Consider "compliance-optional" model for long-term institutional expansion</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
        <h3 className="text-lg font-bold mb-3">Bottom Line: What Nu.xyz Should Do Differently</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white/10 backdrop-blur p-4 rounded">
            <div className="font-bold mb-2">Go Permissionless</div>
            <div className="text-white/90">
              {competitor.name}'s biggest weakness. Nu.xyz captures frustrated DeFi users.
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur p-4 rounded">
            <div className="font-bold mb-2">Max Composability</div>
            <div className="text-white/90">
              Deep Pendle, Aave, Morpho integrations. Enable strategies {competitor.name} can't.
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur p-4 rounded">
            <div className="font-bold mb-2">Lower Barriers</div>
            <div className="text-white/90">
              $100 minimums, no KYC, global access. Democratize RWA access.
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const NewsUpdates = ({ competitor }) => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">News & Updates</h2>
      
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
        <div className="flex justify-between items-center">
          <div>
            <div className="font-semibold">Rolling 90-Day Activity Window</div>
            <div className="text-sm text-gray-600">Tracking significant developments and announcements</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">18</div>
            <div className="text-xs text-gray-600">Updates tracked</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="border-l-4 border-green-600 bg-white p-5 rounded-r-lg shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded">
                <GitCompare className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="font-bold">Pendle Integration Announced</div>
                <div className="text-xs text-gray-600">October 15, 2025</div>
              </div>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full font-semibold">Partnership</span>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            {competitor.name} announced strategic partnership with Pendle Finance to enable yield tokenization 
            across all vault products. Integration launching Q4 2025. Addresses #1 user feature request.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="text-blue-600 flex items-center gap-1 hover:underline">
              Official Blog Post <ExternalLink className="w-3 h-3" />
            </a>
            <a href="#" className="text-blue-600 flex items-center gap-1 hover:underline">
              TechCrunch Coverage <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="mt-3 pt-3 border-t">
            <div className="text-xs font-semibold text-gray-700 mb-1">Relevance to Nu.xyz:</div>
            <div className="text-xs text-gray-600">
              Competitor moving toward composability validates Nu.xyz's strategy. However, {competitor.name}'s 
              integration will likely be limited by permissioned model. Opportunity for Nu.xyz to offer 
              deeper, unrestricted Pendle integration.
            </div>
          </div>
        </div>

        <div className="border-l-4 border-blue-600 bg-white p-5 rounded-r-lg shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="font-bold">TVL Crosses $2B Milestone</div>
                <div className="text-xs text-gray-600">October 8, 2025</div>
              </div>
            </div>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-semibold">Milestone</span>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Total value locked reached $2.1B, driven by strong Base L2 adoption ($120M) and institutional 
            inflows. 30-day growth of 18% outpacing broader RWA market growth of 12%.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="text-blue-600 flex items-center gap-1 hover:underline">
              DeFiLlama Data <ExternalLink className="w-3 h-3" />
            </a>
            <a href="#" className="text-blue-600 flex items-center gap-1 hover:underline">
              The Block Article <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="mt-3 pt-3 border-t">
            <div className="text-xs font-semibold text-gray-700 mb-1">Relevance to Nu.xyz:</div>
            <div className="text-xs text-gray-600">
              Strong momentum indicates growing market for RWA vaults. Base L2 success ($120M in first month) 
              validates importance of multi-chain strategy for Nu.xyz launch.
            </div>
          </div>
        </div>

        <div className="border-l-4 border-purple-600 bg-white p-5 rounded-r-lg shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded">
                <DollarSign className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="font-bold">Management Fee Reduction</div>
                <div className="text-xs text-gray-600">September 28, 2025</div>
              </div>
            </div>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full font-semibold">Pricing</span>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Reduced management fees on flagship MMF vault from 0.25% to 0.15% annually. Cited "competitive 
            market dynamics" and desire to pass savings to users. Performance fees (10%) remain unchanged.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="text-blue-600 flex items-center gap-1 hover:underline">
              Company Announcement <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="mt-3 pt-3 border-t">
            <div className="text-xs font-semibold text-gray-700 mb-1">Relevance to Nu.xyz:</div>
            <div className="text-xs text-gray-600">
              Fee compression happening across RWA space. Validates Nu.xyz's low-fee positioning (0.10% mgmt, 
              no performance fees). Suggests operational efficiency will be key competitive factor.
            </div>
          </div>
        </div>

        <div className="border-l-4 border-orange-600 bg-white p-5 rounded-r-lg shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded">
                <Users className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <div className="font-bold">Key Leadership Hires</div>
                <div className="text-xs text-gray-600">September 15, 2025</div>
              </div>
            </div>
            <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full font-semibold">Team</span>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Announced three executive hires: Head of Tokenomics (ex-Uniswap), VP Business Development LatAm 
            (ex-Nubank), and Head of Real Estate (ex-Blackstone). Signals expansion into new products and regions.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="text-blue-600 flex items-center gap-1 hover:underline">
              LinkedIn Post <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="mt-3 pt-3 border-t">
            <div className="text-xs font-semibold text-gray-700 mb-1">Relevance to Nu.xyz:</div>
            <div className="text-xs text-gray-600">
              Tokenomics hire confirms governance token launch plans (Q1 2026 likely). LatAm expansion signals 
              geographic strategy - opportunity for Nu.xyz to enter APAC markets ahead of competitor.
            </div>
          </div>
        </div>

        <div className="border-l-4 border-red-600 bg-white p-5 rounded-r-lg shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 p-2 rounded">
                <Shield className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <div className="font-bold">Security Incident (Minor)</div>
                <div className="text-xs text-gray-600">August 22, 2025</div>
              </div>
            </div>
            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full font-semibold">Security</span>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Brief service outage due to third-party oracle provider issue. No funds lost, systems restored 
            within 4 hours. Published detailed post-mortem and implemented additional redundancy.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="text-blue-600 flex items-center gap-1 hover:underline">
              Post-Mortem Report <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="mt-3 pt-3 border-t">
            <div className="text-xs font-semibold text-gray-700 mb-1">Relevance to Nu.xyz:</div>
            <div className="text-xs text-gray-600">
              Highlights importance of oracle redundancy and transparent incident communication. Community 
              response was positive due to detailed post-mortem. Nu.xyz should plan similar communication 
              protocols.
            </div>
          </div>
        </div>

        <div className="border-l-4 border-cyan-600 bg-white p-5 rounded-r-lg shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-cyan-100 p-2 rounded">
                <BookOpen className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <div className="font-bold">Podcast & Media Appearances</div>
                <div className="text-xs text-gray-600">August - October 2025</div>
              </div>
            </div>
            <span className="px-2 py-1 bg-cyan-100 text-cyan-800 text-xs rounded-full font-semibold">Coverage</span>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            CEO appeared on Bankless, Unchained, and The Defiant podcasts discussing RWA thesis. Featured 
            in WSJ article on tokenization trend. Keynote at TOKEN2049 Singapore.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="text-blue-600 flex items-center gap-1 hover:underline">
              Bankless Episode <ExternalLink className="w-3 h-3" />
            </a>
            <a href="#" className="text-blue-600 flex items-center gap-1 hover:underline">
              WSJ Article <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="mt-3 pt-3 border-t">
            <div className="text-xs font-semibold text-gray-700 mb-1">Relevance to Nu.xyz:</div>
            <div className="text-xs text-gray-600">
              Strong thought leadership positioning. Nu.xyz should pursue similar media strategy to build 
              brand awareness and establish credibility in RWA space.
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-bold mb-4">Press Coverage Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded border">
            <div className="text-2xl font-bold text-blue-600 mb-1">32</div>
            <div className="text-sm text-gray-600">Media Mentions (90d)</div>
            <div className="text-xs text-gray-500 mt-2">Major outlets: WSJ, Bloomberg, TechCrunch, The Block</div>
          </div>
          <div className="bg-gray-50 p-4 rounded border">
            <div className="text-2xl font-bold text-purple-600 mb-1">8</div>
            <div className="text-sm text-gray-600">Podcast Appearances</div>
            <div className="text-xs text-gray-500 mt-2">Bankless, Unchained, The Defiant, etc.</div>
          </div>
          <div className="bg-gray-50 p-4 rounded border">
            <div className="text-2xl font-bold text-green-600 mb-1">4</div>
            <div className="text-sm text-gray-600">Conference Keynotes</div>
            <div className="text-xs text-gray-500 mt-2">TOKEN2049, EthCC, Consensus, Permissionless</div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="flex items-start gap-3">
          <Bell className="w-5 h-5 text-blue-600 mt-1" />
          <div>
            <div className="font-semibold mb-2">Update Monitoring</div>
            <div className="text-sm text-gray-700">
              This section is manually updated weekly. For real-time monitoring, follow:
            </div>
            <div className="mt-2 space-y-1 text-xs">
              <div>• Twitter: @{competitor.id}</div>
              <div>• Blog: {competitor.id}.com/blog</div>
              <div>• Discord: discord.gg/{competitor.id}</div>
              <div>• GitHub: github.com/{competitor.id}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Main render
  if (activeView === 'comparison') {
    return (
      <div className="min-h-screen bg-gray-50 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <ComparisonView />
        </div>
      </div>
    );
  }

  if (selectedCompetitor) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <CompetitorDetail />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <OverviewPage />
      </div>
    </div>
  );
};

export default CompetitiveIntelHub;