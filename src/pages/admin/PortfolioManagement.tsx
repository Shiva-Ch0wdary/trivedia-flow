import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { portfolioAPI, uploadAPI } from '@/lib/api';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Plus, Edit, Trash2, Search, Eye, EyeOff, Upload, Star } from 'lucide-react';

interface Project {
  _id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: string;
  client: string;
  image: string;
  fullImageUrl?: string;
  tags: string[];
  link?: string;
  externalLink?: string;
  featured: boolean;
  status: 'draft' | 'published' | 'archived';
  order: number;
  createdBy: {
    firstName: string;
    lastName: string;
  };
  createdAt: string;
  updatedAt: string;
}

const PortfolioManagement: React.FC = () => {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    category: 'Web Development',
    client: '',
    image: '',
    tags: [] as string[],
    link: '',
    externalLink: '',
    featured: false,
    status: 'published' as 'draft' | 'published' | 'archived',
    order: 0
  });

  // Image upload state
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  // Fetch projects
  const { data: projectsData, isLoading, error } = useQuery({
    queryKey: ['portfolio-admin', searchTerm, statusFilter, categoryFilter],
    queryFn: async () => {
      console.log('🔐 Making admin portfolio API call');
      console.log('Search:', searchTerm, 'Status:', statusFilter, 'Category:', categoryFilter);
      try {
        const response = await portfolioAPI.getAllAdmin({
          search: searchTerm,
          status: statusFilter === 'all' ? undefined : statusFilter,
          category: categoryFilter === 'all' ? undefined : categoryFilter
        });
        console.log('📦 Admin Portfolio API Success:', response.status, response.data);
        return response;
      } catch (err) {
        console.error('❌ Admin Portfolio API Error:', err);
        throw err;
      }
    },
    staleTime: 30000, // 30 seconds
    gcTime: 300000, // 5 minutes
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  // Handle fetch errors
  useEffect(() => {
    if (error) {
      console.error('Portfolio fetch error:', error);
      if ((error as any).response?.status === 401) {
        toast.error('Authentication required. Please login again.');
      } else {
        toast.error('Failed to fetch projects: ' + ((error as any).response?.data?.message || (error as any).message));
      }
    }
  }, [error]);

  // Mutations
  const createProjectMutation = useMutation({
    mutationFn: (data: any) => portfolioAPI.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolio-admin'] });
      queryClient.invalidateQueries({ queryKey: ['portfolio'] });
      toast.success('Project created successfully');
      setIsCreateDialogOpen(false);
      resetForm();
    },
    onError: (error: any) => {
      const msg = error.response?.data?.message;
      const firstDetail = error.response?.data?.errors?.[0]?.msg;
      toast.error(firstDetail || msg || 'Failed to create project');
    }
  });

  const updateProjectMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => portfolioAPI.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolio-admin'] });
      queryClient.invalidateQueries({ queryKey: ['portfolio'] });
      toast.success('Project updated successfully');
      setIsEditDialogOpen(false);
      setEditingProject(null);
      resetForm();
    },
    onError: (error: any) => {
      const msg = error.response?.data?.message;
      const firstDetail = error.response?.data?.errors?.[0]?.msg;
      toast.error(firstDetail || msg || 'Failed to update project');
    }
  });

  const deleteProjectMutation = useMutation({
    mutationFn: (id: string) => portfolioAPI.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolio-admin'] });
      queryClient.invalidateQueries({ queryKey: ['portfolio'] });
      toast.success('Project deleted successfully');
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || 'Failed to delete project');
    }
  });

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      description: '',
      category: 'Web Development',
      client: '',
      image: '',
      tags: [],
      link: '',
      externalLink: '',
      featured: false,
      status: 'published',
      order: 0
    });
    setImagePreview(null);
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      subtitle: project.subtitle || '',
      description: project.description,
      category: project.category,
      client: project.client,
      image: project.image,
      tags: project.tags || [],
      link: project.link || '',
      externalLink: project.externalLink || '',
      featured: project.featured,
      status: project.status,
      order: project.order
    });
    setImagePreview(null); // Reset preview when editing
    setIsEditDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingProject) {
      updateProjectMutation.mutate({
        id: editingProject._id,
        data: formData
      });
    } else {
      createProjectMutation.mutate(formData);
    }
  };

  // Extract projects with multiple fallback paths
  const projects = projectsData?.data?.data?.projects || projectsData?.data?.projects || [];

  // Debug logging only
  useEffect(() => {
    if (projectsData) {
      console.log('✅ Admin projects loaded:', projects.length, 'projects');
    }
  }, [projectsData, projects]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-green-500';
      case 'draft': return 'bg-yellow-500';
      case 'archived': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Portfolio Management</h1>
          <p className="text-gray-400 mt-2">Manage your portfolio projects</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-teal-600 hover:bg-teal-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Project</DialogTitle>
              <DialogDescription>
                Create a new portfolio project with all the details.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Project title"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subtitle">Subtitle</Label>
                  <Input
                    id="subtitle"
                    value={formData.subtitle}
                    onChange={(e) => setFormData(prev => ({ ...prev, subtitle: e.target.value }))}
                    placeholder="Project subtitle"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Project description"
                  rows={4}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {['Web Design', 'Web Development', 'Mobile Apps', 'Games', 'Maintenance', 'Featured'].map(cat => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="client">Client *</Label>
                  <Input
                    id="client"
                    value={formData.client}
                    onChange={(e) => setFormData(prev => ({ ...prev, client: e.target.value }))}
                    placeholder="Client name"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Project Image *</Label>
                <div className="space-y-4">
                  {/* Image Upload Area */}
                  <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-gray-500 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="image-upload"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        
                        // Show preview immediately
                        const reader = new FileReader();
                        reader.onload = (e) => {
                          setImagePreview(e.target?.result as string);
                        };
                        reader.readAsDataURL(file);
                        
                        // Upload to Cloudinary
                        setIsUploading(true);
                        try {
                          const res = await uploadAPI.uploadImage(file);
                          const url = res.data?.data?.url;
                          if (url) {
                            setFormData(prev => ({ ...prev, image: url }));
                            toast.success('Image uploaded successfully');
                          } else {
                            toast.error('Upload succeeded but no URL returned');
                            setImagePreview(null);
                          }
                        } catch (err: any) {
                          toast.error(err.response?.data?.message || 'Image upload failed');
                          setImagePreview(null);
                        } finally {
                          setIsUploading(false);
                          if (e.currentTarget) {
                            e.currentTarget.value = '';
                          }
                        }
                      }}
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      {imagePreview ? (
                        <div className="space-y-2">
                          <img 
                            src={imagePreview} 
                            alt="Preview" 
                            className="w-32 h-32 object-cover rounded-lg mx-auto"
                          />
                          <p className="text-sm text-gray-400">Click to change image</p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Upload className="h-8 w-8 mx-auto text-gray-400" />
                          <p className="text-sm text-gray-400">
                            {isUploading ? 'Uploading...' : 'Click to upload image'}
                          </p>
                        </div>
                      )}
                    </label>
                  </div>
                  
                  {/* Upload Status */}
                  {isUploading && (
                    <div className="text-center text-sm text-blue-400">
                      Uploading image to Cloudinary...
                    </div>
                  )}
                  
                  {/* Current Image Display */}
                  {formData.image && !imagePreview && (
                    <div className="text-center">
                      <img 
                        src={formData.image} 
                        alt="Current" 
                        className="w-32 h-32 object-cover rounded-lg mx-auto"
                      />
                      <p className="text-xs text-gray-500 mt-1">Current project image</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="link">Internal Link</Label>
                  <Input
                    id="link"
                    value={formData.link}
                    onChange={(e) => setFormData(prev => ({ ...prev, link: e.target.value }))}
                    placeholder="/portfolio/project-slug"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="externalLink">External Link</Label>
                  <Input
                    id="externalLink"
                    value={formData.externalLink}
                    onChange={(e) => setFormData(prev => ({ ...prev, externalLink: e.target.value }))}
                    placeholder="https://example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="status">Status *</Label>
                  <Select value={formData.status} onValueChange={(value) => setFormData(prev => ({ ...prev, status: value as 'draft' | 'published' | 'archived' }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="featured"
                    checked={formData.featured}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, featured: checked as boolean }))}
                  />
                  <Label htmlFor="featured">Featured Project</Label>
                </div>
              </div>

              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={createProjectMutation.isPending || !formData.title || !formData.description || !formData.client || !formData.image}>
                  {createProjectMutation.isPending ? 'Creating...' : 'Create Project'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Search</Label>
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Category</Label>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All categories</SelectItem>
                  {['Web Design', 'Web Development', 'Mobile Apps', 'Games', 'Maintenance', 'Featured'].map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects List */}
      {isLoading ? (
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <Card key={i} className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="h-6 bg-gray-700 rounded animate-pulse mb-2" />
                <div className="h-4 bg-gray-700 rounded animate-pulse w-2/3" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {projects.map((project: Project) => (
            <Card key={project._id} className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="w-20 h-20 bg-gray-700 rounded overflow-hidden flex-shrink-0">
                      {(project.fullImageUrl || project.image) && (
                        <img
                          src={project.fullImageUrl || project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-white truncate">{project.title}</h3>
                        {project.featured && <Star className="h-4 w-4 text-yellow-400" />}
                      </div>
                      <p className="text-gray-400 text-sm mb-2 line-clamp-2">{project.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>Client: {project.client}</span>
                        <span>Category: {project.category}</span>
                        <span>Created: {new Date(project.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className={`${getStatusColor(project.status)} text-white`}>
                      {project.status}
                    </Badge>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleEdit(project)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button size="sm" variant="outline" className="text-red-400 hover:text-red-300">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Project</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete "{project.title}"? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => deleteProjectMutation.mutate(project._id)}
                            className="bg-red-600 hover:bg-red-700"
                          >
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {projects.length === 0 && !isLoading && (
        <Card className="bg-gray-800/50 border-gray-700">
          <CardContent className="p-12 text-center">
            <h3 className="text-lg font-semibold text-white mb-2">No projects found</h3>
            <p className="text-gray-400 mb-4">
              {searchTerm || statusFilter || categoryFilter 
                ? 'Try adjusting your filters to see more projects.'
                : 'Get started by creating your first portfolio project.'
              }
            </p>
            {!searchTerm && !statusFilter && !categoryFilter && (
              <Button onClick={() => setIsCreateDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Your First Project
              </Button>
            )}
          </CardContent>
        </Card>
      )}

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Project</DialogTitle>
            <DialogDescription>
              Update project details and settings.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-title">Title *</Label>
                <Input
                  id="edit-title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Project title"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-subtitle">Subtitle</Label>
                <Input
                  id="edit-subtitle"
                  value={formData.subtitle}
                  onChange={(e) => setFormData(prev => ({ ...prev, subtitle: e.target.value }))}
                  placeholder="Project subtitle"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-description">Description *</Label>
              <Textarea
                id="edit-description"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Project description"
                rows={4}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-category">Category *</Label>
                <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {['Web Design', 'Web Development', 'Mobile Apps', 'Games', 'Maintenance', 'Featured'].map(cat => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-client">Client *</Label>
                <Input
                  id="edit-client"
                  value={formData.client}
                  onChange={(e) => setFormData(prev => ({ ...prev, client: e.target.value }))}
                  placeholder="Client name"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="edit-image">Project Image *</Label>
              <div className="space-y-4">
                {/* Image Upload Area */}
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-gray-500 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="edit-image-upload"
                    onChange={async (e) => {
                      const file = e.target.files?.[0];
                      if (!file) return;
                      
                      // Show preview immediately
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        setImagePreview(e.target?.result as string);
                      };
                      reader.readAsDataURL(file);
                      
                      // Upload to Cloudinary
                      setIsUploading(true);
                      try {
                        const res = await uploadAPI.uploadImage(file);
                        const url = res.data?.data?.url;
                        if (url) {
                          setFormData(prev => ({ ...prev, image: url }));
                          toast.success('Image uploaded successfully');
                        } else {
                          toast.error('Upload succeeded but no URL returned');
                          setImagePreview(null);
                        }
                      } catch (err: any) {
                        toast.error(err.response?.data?.message || 'Image upload failed');
                        setImagePreview(null);
                                              } finally {
                          setIsUploading(false);
                          if (e.currentTarget) {
                            e.currentTarget.value = '';
                          }
                        }
                    }}
                  />
                  <label htmlFor="edit-image-upload" className="cursor-pointer">
                    {imagePreview ? (
                      <div className="space-y-2">
                        <img 
                          src={imagePreview} 
                          alt="Preview" 
                          className="w-32 h-32 object-cover rounded-lg mx-auto"
                        />
                        <p className="text-sm text-gray-400">Click to change image</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Upload className="h-8 w-8 mx-auto text-gray-400" />
                        <p className="text-sm text-gray-400">
                          {isUploading ? 'Uploading...' : 'Click to upload image'}
                        </p>
                      </div>
                    )}
                  </label>
                </div>
                
                {/* Upload Status */}
                {isUploading && (
                  <div className="text-center text-sm text-blue-400">
                    Uploading image to Cloudinary...
                  </div>
                )}
                
                {/* Current Image Display */}
                {formData.image && !imagePreview && (
                  <div className="text-center">
                    <img 
                      src={formData.image} 
                      alt="Current" 
                      className="w-32 h-32 object-cover rounded-lg mx-auto"
                    />
                    <p className="text-xs text-gray-500 mt-1">Current project image</p>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-link">Internal Link</Label>
                <Input
                  id="edit-link"
                  value={formData.link}
                  onChange={(e) => setFormData(prev => ({ ...prev, link: e.target.value }))}
                  placeholder="/portfolio/project-slug"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-externalLink">External Link</Label>
                <Input
                  id="edit-externalLink"
                  value={formData.externalLink}
                  onChange={(e) => setFormData(prev => ({ ...prev, externalLink: e.target.value }))}
                  placeholder="https://example.com"
                />
              </div>
            </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="space-y-2">
                 <Label htmlFor="edit-status">Status *</Label>
                 <Select value={formData.status} onValueChange={(value) => setFormData(prev => ({ ...prev, status: value as 'draft' | 'published' | 'archived' }))}>
                   <SelectTrigger>
                     <SelectValue />
                   </SelectTrigger>
                   <SelectContent>
                     <SelectItem value="draft">Draft</SelectItem>
                     <SelectItem value="published">Published</SelectItem>
                     <SelectItem value="archived">Archived</SelectItem>
                   </SelectContent>
                 </Select>
               </div>
               <div className="flex items-center space-x-2">
                 <Checkbox
                   id="edit-featured"
                   checked={formData.featured}
                   onCheckedChange={(checked) => setFormData(prev => ({ ...prev, featured: checked as boolean }))}
                 />
                 <Label htmlFor="edit-featured">Featured Project</Label>
               </div>
             </div>

            <div className="flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={updateProjectMutation.isPending}>
                {updateProjectMutation.isPending ? 'Updating...' : 'Update Project'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PortfolioManagement;
