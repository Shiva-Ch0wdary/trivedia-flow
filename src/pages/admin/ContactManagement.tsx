import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { contactAPI } from '@/lib/api';
import { useToast } from "@/hooks/use-toast";

interface Contact {
  _id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  message: string;
  status: 'new' | 'contacted' | 'in-progress' | 'completed' | 'archived';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  emailSentToUser: boolean;
  emailSentToAdmin: boolean;
}

const ContactManagement = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    status: 'all',
    priority: 'all',
    search: ''
  });
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const { toast } = useToast();

  const statusColors = {
    new: 'bg-blue-100 text-blue-800',
    contacted: 'bg-yellow-100 text-yellow-800',
    'in-progress': 'bg-purple-100 text-purple-800',
    completed: 'bg-green-100 text-green-800',
    archived: 'bg-gray-100 text-gray-800'
  };

  const priorityColors = {
    low: 'bg-gray-100 text-gray-800',
    medium: 'bg-blue-100 text-blue-800',
    high: 'bg-orange-100 text-orange-800',
    urgent: 'bg-red-100 text-red-800'
  };

  useEffect(() => {
    fetchContacts();
  }, [filters]);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await contactAPI.getAll({
        status: filters.status !== 'all' ? filters.status : undefined,
        priority: filters.priority !== 'all' ? filters.priority : undefined,
        search: filters.search || undefined,
        limit: 50
      });
      
      if (response.data.success) {
        setContacts(response.data.data);
      }
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
      toast({
        title: "Error",
        description: "Failed to load contacts",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateContactStatus = async (contactId: string, status: string) => {
    try {
      const response = await contactAPI.update(contactId, { status });
      if (response.data.success) {
        setContacts(contacts.map(c => 
          c._id === contactId ? { ...c, status: status as any } : c
        ));
        toast({
          title: "Success",
          description: "Contact status updated",
        });
      }
    } catch (error) {
      toast({
        title: "Error", 
        description: "Failed to update status",
        variant: "destructive",
      });
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Contact Management</h1>
        <Badge variant="outline" className="text-lg px-3 py-1">
          {contacts.length} Total Contacts
        </Badge>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Search</label>
              <Input
                placeholder="Search by name, email, or company..."
                value={filters.search}
                onChange={(e) => setFilters({...filters, search: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Status</label>
              <Select value={filters.status} onValueChange={(value) => setFilters({...filters, status: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Priority</label>
              <Select value={filters.priority} onValueChange={(value) => setFilters({...filters, priority: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contacts List */}
      <div className="grid gap-6">
        {contacts.map((contact) => (
          <Card key={contact._id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-blue-600">{contact.name}</CardTitle>
                  <p className="text-gray-600 mt-1">
                    {contact.email} • {contact.company && `${contact.company} • `}
                    {formatDate(contact.createdAt)}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Badge className={statusColors[contact.status]}>
                    {contact.status}
                  </Badge>
                  <Badge className={priorityColors[contact.priority]}>
                    {contact.priority}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Project Type: <span className="font-medium text-gray-900">{contact.projectType || 'Not specified'}</span></p>
                  <p className="text-sm text-gray-600">Budget: <span className="font-medium text-gray-900">{contact.budget || 'Not specified'}</span></p>
                  <p className="text-sm text-gray-600">Timeline: <span className="font-medium text-gray-900">{contact.timeline || 'Not specified'}</span></p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone: <span className="font-medium text-gray-900">{contact.phone || 'Not provided'}</span></p>
                  <p className="text-sm text-gray-600">User Email Sent: <span className={contact.emailSentToUser ? 'text-green-600' : 'text-red-600'}>{contact.emailSentToUser ? 'Yes' : 'No'}</span></p>
                  <p className="text-sm text-gray-600">Admin Email Sent: <span className={contact.emailSentToAdmin ? 'text-green-600' : 'text-red-600'}>{contact.emailSentToAdmin ? 'Yes' : 'No'}</span></p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Message:</p>
                <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">{contact.message}</p>
              </div>

              <div className="flex gap-2 flex-wrap">
                <Select value={contact.status} onValueChange={(value) => updateContactStatus(contact._id, value)}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="outline" size="sm" asChild>
                  <a href={`mailto:${contact.email}?subject=Re: Your Project Inquiry - Trivesha Tech`}>
                    Reply via Email
                  </a>
                </Button>
                
                {contact.phone && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={`tel:${contact.phone}`}>
                      Call
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {contacts.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-gray-500 text-lg">No contacts found matching your filters.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ContactManagement;
