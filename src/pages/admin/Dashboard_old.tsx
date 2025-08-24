import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { adminAPI, portfolioAPI, pricingAPI } from '@/lib/api';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Users,
  UserCheck,
  UserX,
  TrendingUp,
  Activity,
  Clock,
  Shield,
  Eye,
  Plus,
  Settings,
  FileText,
  Upload,
  BarChart3,
  FolderOpen,
  Star,
  DollarSign,
  Briefcase,
  Globe,
  UserPlus,
  Code,
  Palette,
  Smartphone,
  Layers,
  AlertCircle,
  CheckCircle,
  Gamepad2,
  PaintBucket,
  FolderPlus
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { data: stats, isLoading, error } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: () => adminAPI.getStats(),
    refetchInterval: 30000, // Auto-refresh every 30 seconds
  });

  const { data: users, isLoading: usersLoading } = useQuery({
    queryKey: ['admin-users'],
    queryFn: () => adminAPI.getUsers({ limit: 5 }),
  });

  const { data: recentActivity, isLoading: activityLoading } = useQuery({
    queryKey: ['admin-recent-activity'],
    queryFn: () => adminAPI.getRecentActivity({ limit: 8 }),
    refetchInterval: 60000, // Refresh every minute
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="h-8 bg-gray-700 rounded animate-pulse" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-700 rounded animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-400">Failed to load dashboard data</p>
      </div>
    );
  }

  const statsData = stats?.data?.data || {};

  // Enhanced stat cards with project and pricing data
  const statCards = [
    // User Statistics
    {
      title: 'Total Users',
      value: statsData.totalUsers || 0,
      icon: Users,
      description: 'All registered users',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      change: `+${statsData.recentUsers || 0} this week`,
    },
    {
      title: 'Active Users',
      value: statsData.activeUsers || 0,
      icon: UserCheck,
      description: 'Currently active users',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      change: `${statsData.recentLogins || 0} recent logins`,
    },
    
    // Project Statistics
    {
      title: 'Total Projects',
      value: statsData.totalProjects || 0,
      icon: FolderOpen,
      description: 'All projects in system',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      change: `${statsData.publishedProjects || 0} published`,
    },
    {
      title: 'Published Projects',
      value: statsData.publishedProjects || 0,
      icon: Globe,
      description: 'Live projects',
      color: 'text-teal-400',
      bgColor: 'bg-teal-500/10',
      change: `+${statsData.recentProjects || 0} this month`,
    },
    
    // Featured and Draft Projects
    {
      title: 'Featured Projects',
      value: statsData.featuredProjects || 0,
      icon: Star,
      description: 'Highlighted projects',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      change: 'Premium showcase',
    },
    {
      title: 'Draft Projects',
      value: statsData.draftProjects || 0,
      icon: FileText,
      description: 'Projects in progress',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      change: 'Awaiting publication',
    },
    
    // Pricing Statistics
    {
      title: 'Pricing Plans',
      value: statsData.activePricingPlans || 0,
      icon: DollarSign,
      description: 'Active pricing plans',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      change: `Popular: ${statsData.popularPricingPlan}`,
    },
    {
      title: 'Growth Rate',
      value: `${statsData.userGrowthRate || 0}%`,
      icon: TrendingUp,
      description: 'User growth this week',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      change: `${statsData.projectGrowthRate || 0}% projects`,
    },
  ];

  const roleStats = [
    {
      role: 'Admin',
      count: statsData.adminUsers || 0,
      color: 'bg-red-500',
      icon: Shield,
    },
    {
      role: 'Editor',
      count: statsData.editorUsers || 0,
      color: 'bg-blue-500',
      icon: UserCheck,
    },
    {
      role: 'Viewer',
      count: statsData.viewerUsers || 0,
      color: 'bg-green-500',
      icon: Eye,
    },
  ];

  const projectCategoryStats = [
    {
      category: 'Web Design',
      count: statsData.webDesignProjects || 0,
      color: 'bg-pink-500',
      icon: PaintBucket,
    },
    {
      category: 'Web Development',
      count: statsData.webDevProjects || 0,
      color: 'bg-blue-500',
      icon: Code,
    },
    {
      category: 'Mobile Apps',
      count: statsData.mobileAppProjects || 0,
      color: 'bg-green-500',
      icon: Smartphone,
    },
    {
      category: 'Games',
      count: statsData.gameProjects || 0,
      color: 'bg-purple-500',
      icon: Gamepad2,
    },
  ];

  // Helper function to get activity icon
  const getActivityIcon = (iconName: string) => {
    const icons = {
      UserPlus,
      FolderPlus,
      DollarSign,
      Activity,
    };
    return icons[iconName as keyof typeof icons] || Activity;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 mt-2">Welcome to your admin dashboard</p>
      </div>

      {/* Enhanced Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <Card key={stat.title} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <p className="text-xs text-gray-400 mb-1">{stat.description}</p>
              {stat.change && (
                <p className="text-xs text-gray-500 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.change}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Roles Distribution */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Users className="h-5 w-5 mr-2" />
              User Roles
            </CardTitle>
            <CardDescription className="text-gray-400">
              Distribution of users by role
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {roleStats.map((role) => (
                <div key={role.role} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-lg ${role.color} flex items-center justify-center`}>
                      <role.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white font-medium">{role.role}</span>
                  </div>
                  <Badge variant="secondary" className="bg-gray-700 text-white">
                    {role.count}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Project Categories */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Briefcase className="h-5 w-5 mr-2" />
              Project Categories
            </CardTitle>
            <CardDescription className="text-gray-400">
              Published projects by category
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projectCategoryStats.map((category) => (
                <div key={category.category} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-lg ${category.color} flex items-center justify-center`}>
                      <category.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-white font-medium text-sm">{category.category}</span>
                  </div>
                  <Badge variant="secondary" className="bg-gray-700 text-white">
                    {category.count}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Activity className="h-5 w-5 mr-2" />
              Recent Activity
            </CardTitle>
            <CardDescription className="text-gray-400">
              Latest system activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            {activityLoading ? (
              <div className="space-y-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-12 bg-gray-700 rounded animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {recentActivity?.data?.data?.activities?.map((activity: any, index: number) => {
                  const IconComponent = getActivityIcon(activity.icon);
                  return (
                    <div key={index} className="flex items-start space-x-3 py-2">
                      <div className={`w-8 h-8 rounded-lg bg-${activity.color}-500/20 flex items-center justify-center mt-0.5`}>
                        <IconComponent className={`h-4 w-4 text-${activity.color}-400`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium">{activity.action}</p>
                        <p className="text-gray-400 text-xs truncate">{activity.details}</p>
                        <p className="text-gray-500 text-xs">
                          {formatDistanceToNow(new Date(activity.timestamp), { addSuffix: true })}
                        </p>
                      </div>
                    </div>
                  );
                })}
                {recentActivity?.data?.data?.activities?.length === 0 && (
                  <div className="text-center py-6 text-gray-400">
                    <AlertCircle className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">No recent activity</p>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

        {/* Recent Users */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Recent Users</CardTitle>
            <CardDescription className="text-gray-400">
              Latest registered users
            </CardDescription>
          </CardHeader>
          <CardContent>
            {usersLoading ? (
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-12 bg-gray-700 rounded animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {users?.data?.users?.slice(0, 5).map((user: any) => (
                  <div key={user._id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {user.initials}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{user.fullName}</p>
                        <p className="text-gray-400 text-sm">{user.email}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={
                          user.role === 'admin'
                            ? 'destructive'
                            : user.role === 'editor'
                            ? 'default'
                            : 'secondary'
                        }
                        className="text-xs"
                      >
                        {user.role}
                      </Badge>
                      <p className="text-gray-400 text-xs mt-1">
                        {formatDistanceToNow(new Date(user.createdAt), { addSuffix: true })}
                      </p>
                    </div>
                  </div>
                ))}
                {users?.data?.users?.length > 0 && (
                  <div className="pt-3 border-t border-gray-600">
                    <Link to="/admin/users">
                      <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-700">
                        <Users className="h-4 w-4 mr-2" />
                        View All Users
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            Quick Actions
          </CardTitle>
          <CardDescription className="text-gray-400">
            Common administrative tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white h-auto py-4 flex flex-col items-center space-y-2"
              onClick={() => navigate('/admin/users')}
            >
              <Users className="h-6 w-6" />
              <span>Manage Users</span>
            </Button>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white h-auto py-4 flex flex-col items-center space-y-2"
              onClick={() => navigate('/admin/portfolio')}
            >
              <Briefcase className="h-6 w-6" />
              <span>Add Project</span>
            </Button>
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white h-auto py-4 flex flex-col items-center space-y-2"
              onClick={() => navigate('/admin/pricing')}
            >
              <DollarSign className="h-6 w-6" />
              <span>Manage Pricing</span>
            </Button>
            <Button 
              className="bg-orange-600 hover:bg-orange-700 text-white h-auto py-4 flex flex-col items-center space-y-2"
              onClick={() => navigate('/admin/content')}
            >
              <FileText className="h-6 w-6" />
              <span>Site Content</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
