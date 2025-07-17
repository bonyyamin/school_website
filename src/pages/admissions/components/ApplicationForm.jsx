import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    dateOfBirth: '',
    grade: '',
    parentName: '',
    email: '',
    phone: '',
    address: '',
    previousSchool: '',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [savedProgress, setSavedProgress] = useState(false);

  const gradeOptions = [
    { value: 'kindergarten', label: 'Kindergarten' },
    { value: 'grade-1', label: 'Grade 1' },
    { value: 'grade-2', label: 'Grade 2' },
    { value: 'grade-3', label: 'Grade 3' },
    { value: 'grade-4', label: 'Grade 4' },
    { value: 'grade-5', label: 'Grade 5' },
    { value: 'grade-6', label: 'Grade 6' },
    { value: 'grade-7', label: 'Grade 7' },
    { value: 'grade-8', label: 'Grade 8' },
    { value: 'grade-9', label: 'Grade 9' },
    { value: 'grade-10', label: 'Grade 10' },
    { value: 'grade-11', label: 'Grade 11' },
    { value: 'grade-12', label: 'Grade 12' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.studentName.trim()) newErrors.studentName = 'Student name is required';
    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.grade) newErrors.grade = 'Grade selection is required';
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to terms and conditions';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Application submitted successfully! You will receive a confirmation email shortly.');
    }, 2000);
  };

  const handleSaveProgress = () => {
    localStorage.setItem('admissionFormData', JSON.stringify(formData));
    setSavedProgress(true);
    setTimeout(() => setSavedProgress(false), 2000);
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Online Application Form
          </h2>
          <p className="text-lg text-gray-600">
            Complete your application online with real-time validation and save your progress
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Student Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Icon name="User" size={20} className="mr-2" />
                Student Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Student Full Name"
                  type="text"
                  placeholder="Enter student's full name"
                  value={formData.studentName}
                  onChange={(e) => handleInputChange('studentName', e.target.value)}
                  error={errors.studentName}
                  required
                />
                
                <Input
                  label="Date of Birth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  error={errors.dateOfBirth}
                  required
                />
                
                <Select
                  label="Grade Applying For"
                  options={gradeOptions}
                  value={formData.grade}
                  onChange={(value) => handleInputChange('grade', value)}
                  error={errors.grade}
                  placeholder="Select grade level"
                  required
                />
                
                <Input
                  label="Previous School"
                  type="text"
                  placeholder="Enter previous school name"
                  value={formData.previousSchool}
                  onChange={(e) => handleInputChange('previousSchool', e.target.value)}
                  description="Leave blank if applying for Kindergarten"
                />
              </div>
            </div>

            {/* Parent Information */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Icon name="Users" size={20} className="mr-2" />
                Parent/Guardian Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Parent/Guardian Name"
                  type="text"
                  placeholder="Enter parent's full name"
                  value={formData.parentName}
                  onChange={(e) => handleInputChange('parentName', e.target.value)}
                  error={errors.parentName}
                  required
                />
                
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  error={errors.email}
                  required
                />
                
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  error={errors.phone}
                  required
                />
                
                <Input
                  label="Home Address"
                  type="text"
                  placeholder="Enter complete address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  error={errors.address}
                  required
                />
              </div>
            </div>

            {/* Document Upload */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Icon name="Upload" size={20} className="mr-2" />
                Required Documents
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  label="Birth Certificate"
                  type="file"
                  description="Upload scanned copy (PDF, JPG, PNG)"
                />
                
                <Input
                  label="Previous School Transcripts"
                  type="file"
                  description="Upload latest report card or transcripts"
                />
                
                <Input
                  label="Immunization Records"
                  type="file"
                  description="Upload complete vaccination records"
                />
                
                <Input
                  label="Recommendation Letter"
                  type="file"
                  description="Optional: From previous teacher or counselor"
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Checkbox
                label="I agree to the terms and conditions"
                description="By checking this box, you agree to our admission policies and procedures"
                checked={formData.agreeTerms}
                onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                error={errors.agreeTerms}
                required
              />
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={handleSaveProgress}
                iconName="Save"
                iconPosition="left"
                disabled={isSubmitting}
              >
                {savedProgress ? 'Progress Saved!' : 'Save Progress'}
              </Button>
              
              <Button
                type="submit"
                variant="default"
                loading={isSubmitting}
                iconName="Send"
                iconPosition="left"
                className="bg-blue-800 hover:bg-blue-900"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;