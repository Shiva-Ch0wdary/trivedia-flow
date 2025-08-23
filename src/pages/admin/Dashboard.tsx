import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { adminAPI } from '@/lib/api';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Users,
  UserCheck,
  UserX,
  TrendingUp,
  Activity,
  Clock,
  Shield,
  Eye,
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const Dashboard: React.FC = () => {
  const { data: stats, isLoading, error } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: () => adminAPI.getStats(),
  });

  const { data: users, isLoading: usersLoading } = useQuery({
    queryKey: ['admin-users'],
    queryFn: () => adminAPI.getUsers({ limit: 5 }),
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

  const statsData = stats?.data || {};

  const statCards = [
    {
      title: 'Total Users',
      value: statsData.totalUsers || 0,
      icon: Users,
      description: 'All registered users',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'Active Users',
      value: statsData.activeUsers || 0,
      icon: UserCheck,
      description: 'Currently active users',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'Recent Users',
      value: statsData.recentUsers || 0,
      icon: TrendingUp,
      description: 'New users this week',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
    },
    {
      title: 'Recent Logins',
      value: statsData.recentLogins || 0,
      icon: Activity,
      description: 'Logins in last 24h',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
    },
  ];

  const roleStats = [
    {
      role: 'Admin',
      count: statsData.adminUsers || 0,
      color: 'bg-red-500',
    },
    {
      role: 'Editor',
      count: statsData.editorUsers || 0,
      color: 'bg-blue-500',
    },
    {
      role: 'Viewer',
      count: statsData.viewerUsers || 0,
      color: 'bg-green-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 mt-2">Welcome to your admin dashboard</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <Card key={stat.title} className="bg-gray-800/50 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <p className="text-xs text-gray-400 mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Role Distribution */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">User Roles</CardTitle>
            <CardDescription className="text-gray-400">
              Distribution of users by role
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {roleStats.map((role) => (
                <div key={role.role} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${role.color}`} />
                    <span className="text-white">{role.role}</span>
                  </div>
                  <Badge variant="secondary" className="bg-gray-700 text-white">
                    {role.count}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

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
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Quick Actions</CardTitle>
          <CardDescription className="text-gray-400">
            Common administrative tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex items-center space-x-3 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
              <Users className="h-5 w-5 text-blue-400" />
              <span className="text-white">Manage Users</span>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
              <Shield className="h-5 w-5 text-green-400" />
              <span className="text-white">Content Management</span>
            </button>
            <button className="flex items-center space-x-3 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
              <Eye className="h-5 w-5 text-purple-400" />
              <span className="text-white">View Analytics</span>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
