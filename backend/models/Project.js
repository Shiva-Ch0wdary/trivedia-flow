import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  subtitle: {
    type: String,
    trim: true,
    maxlength: [200, 'Subtitle cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true,
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  category: {
    type: String,
    required: [true, 'Project category is required'],
    enum: ['Web Design', 'Web Development', 'Mobile Apps', 'Games', 'Maintenance', 'Featured'],
    default: 'Web Development'
  },
  client: {
    type: String,
    required: [true, 'Client name is required'],
    trim: true,
    maxlength: [100, 'Client name cannot exceed 100 characters']
  },
  image: {
    type: String,
    required: [true, 'Project image is required']
  },
  images: [{
    type: String
  }],
  tags: [{
    type: String,
    trim: true,
    maxlength: [50, 'Tag cannot exceed 50 characters']
  }],
  results: [{
    type: String,
    trim: true,
    maxlength: [200, 'Result cannot exceed 200 characters']
  }],
  link: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        if (!v) return true; // Allow empty
        return /^https?:\/\/.+/.test(v) || v.startsWith('/');
      },
      message: 'Link must be a valid URL or internal path'
    }
  },
  externalLink: {
    type: String,
    trim: true,
    validate: {
      validator: function(v) {
        if (!v) return true; // Allow empty
        return /^https?:\/\/.+/.test(v);
      },
      message: 'External link must be a valid URL'
    }
  },
  featured: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  order: {
    type: Number,
    default: 0
  },
  technologies: [{
    type: String,
    trim: true,
    maxlength: [50, 'Technology name cannot exceed 50 characters']
  }],
  duration: {
    type: String,
    trim: true,
    maxlength: [50, 'Duration cannot exceed 50 characters']
  },
  teamSize: {
    type: Number,
    min: [1, 'Team size must be at least 1']
  },
  budget: {
    type: String,
    trim: true,
    maxlength: [50, 'Budget cannot exceed 50 characters']
  },
  challenges: [{
    type: String,
    trim: true,
    maxlength: [300, 'Challenge cannot exceed 300 characters']
  }],
  solutions: [{
    type: String,
    trim: true,
    maxlength: [300, 'Solution cannot exceed 300 characters']
  }],
  metrics: {
    type: Map,
    of: String
  },
  testimonials: [{
    quote: {
      type: String,
      trim: true,
      maxlength: [500, 'Testimonial quote cannot exceed 500 characters']
    },
    author: {
      type: String,
      trim: true,
      maxlength: [100, 'Author name cannot exceed 100 characters']
    },
    position: {
      type: String,
      trim: true,
      maxlength: [100, 'Position cannot exceed 100 characters']
    },
    company: {
      type: String,
      trim: true,
      maxlength: [100, 'Company name cannot exceed 100 characters']
    }
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better query performance
projectSchema.index({ category: 1, status: 1 });
projectSchema.index({ featured: 1, status: 1 });
projectSchema.index({ status: 1, order: 1 });
projectSchema.index({ title: 'text', description: 'text' });

// Virtual for full project URL
projectSchema.virtual('fullImageUrl').get(function() {
  if (!this.image) return null;
  if (this.image.startsWith('http')) return this.image;
  return `${process.env.BASE_URL || 'http://localhost:5000'}${this.image}`;
});

// Virtual for full image URLs array
projectSchema.virtual('fullImageUrls').get(function() {
  if (!this.images || this.images.length === 0) return [];
  return this.images.map(img => {
    if (img.startsWith('http')) return img;
    return `${process.env.BASE_URL || 'http://localhost:5000'}${img}`;
  });
});

// Pre-save middleware to update updatedBy
projectSchema.pre('save', function(next) {
  if (this.isModified() && !this.isNew) {
    this.updatedBy = this.createdBy; // In a real app, you'd get this from the request context
  }
  next();
});

// Static method to get published projects
projectSchema.statics.getPublished = function(filters = {}) {
  const query = { status: 'published', ...filters };
  return this.find(query).sort({ order: 1, createdAt: -1 });
};

// Static method to get featured projects
projectSchema.statics.getFeatured = function() {
  return this.find({ featured: true, status: 'published' }).sort({ order: 1, createdAt: -1 });
};

// Static method to get projects by category
projectSchema.statics.getByCategory = function(category) {
  return this.find({ category, status: 'published' }).sort({ order: 1, createdAt: -1 });
};

const Project = mongoose.model('Project', projectSchema);

export default Project;
