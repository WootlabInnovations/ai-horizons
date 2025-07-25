"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  User,
  Target,
  GraduationCap,
  FileText,
  Loader2,
} from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Progress } from "../ui/progress";
import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Select,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { toast } from "../ui/sonner";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  selectedPath: string;
  motivation: string;
  education: string;
  currentStatus: string;
  experience: string;
  skills: string[];
  availability: string;
  commitment: boolean;
  newsletter: boolean;
}

const steps = [
  { id: 1, title: "Personal Info", icon: User },
  { id: 2, title: "Path Selection", icon: Target },
  { id: 3, title: "Background", icon: GraduationCap },
  { id: 4, title: "Final Details", icon: FileText },
];

const paths = [
  {
    value: "innovators",
    title: "AI Innovators",
    description: "Build cutting-edge AI solutions",
  },
  {
    value: "strategists",
    title: "AI Strategists",
    description: "Shape AI business strategy",
  },
  {
    value: "creatives",
    title: "AI Creatives",
    description: "Merge AI with creative expression",
  },
];

const skillOptions = [
  "Python Programming",
  "Machine Learning",
  "Data Analysis",
  "JavaScript",
  "Project Management",
  "UI/UX Design",
  "Business Strategy",
  "Research",
  "Creative Writing",
  "Digital Marketing",
  "Statistics",
  "Cloud Computing",
];

export function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    selectedPath: "",
    motivation: "",
    education: "",
    currentStatus: "",
    experience: "",
    skills: [],
    availability: "",
    commitment: false,
    newsletter: false,
  });

  const router = useRouter();

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const toggleSkill = (skill: string) => {
    const newSkills = formData.skills.includes(skill)
      ? formData.skills.filter((s) => s !== skill)
      : [...formData.skills, skill];
    updateFormData("skills", newSkills);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.firstName &&
          formData.lastName &&
          formData.email &&
          formData.phone
        );
      case 2:
        return formData.selectedPath && formData.motivation.length > 50;
      case 3:
        return (
          formData.education && formData.currentStatus && formData.experience
        );
      case 4:
        return formData.availability && formData.commitment;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    if (!isStepValid()) {
      toast.error("Incomplete Form: Please fill all required fields.");
      return;
    }

    setIsSubmitting(true);
    localStorage.setItem("user_email", formData.email);

    const { error } = await supabase.from("applications").insert([
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        selected_path: formData.selectedPath,
        motivation: formData.motivation,
        education: formData.education,
        current_status: formData.currentStatus,
        experience: formData.experience,
        skills: formData.skills,
        availability: formData.availability,
        commitment: formData.commitment,
        newsletter: formData.newsletter,
      },
    ]);

    setIsSubmitting(false);

    if (error) {
      toast.error("Submission Failed");
      return;
    }

    toast.success("Application Submitted!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      selectedPath: "",
      motivation: "",
      education: "",
      currentStatus: "",
      experience: "",
      skills: [],
      availability: "",
      commitment: false,
      newsletter: false,
    });
    setCurrentStep(1);
    setTimeout(() => {
      router.push("/pages/dashboard");
    }, 1000);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => updateFormData("firstName", e.target.value)}
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => updateFormData("lastName", e.target.value)}
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                placeholder="+(234) 123-456-7890"
              />
            </div>

            <div className="space-y-2 cursor-pointer">
              <Label htmlFor="country">Country</Label>
              <Select
                value={formData.country}
                onValueChange={(value) => updateFormData("country", value)}
              >
                <SelectTrigger className="bg-background border-border z-50 cursor-pointer">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border z-50 cursor-pointer">
                  <SelectItem value="nigeria">Nigeria</SelectItem>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                  <SelectItem value="fr">France</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <Label>Choose Your AI Path *</Label>
              <RadioGroup
                value={formData.selectedPath}
                onValueChange={(value) => updateFormData("selectedPath", value)}
                className="space-y-3"
              >
                {paths.map((path) => (
                  <div
                    key={path.value}
                    className="flex items-start space-x-3 p-4 border border-border rounded-lg hover:border-primary/20 transition-colors cursor-pointer"
                  >
                    <RadioGroupItem
                      value={path.value}
                      id={path.value}
                      className="mt-1 cursor-pointer"
                    />
                    <div className="flex-1">
                      <Label
                        htmlFor={path.value}
                        className="text-base font-medium cursor-pointer"
                      >
                        {path.title}
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        {path.description}
                      </p>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="motivation">
                Why are you interested in this program? *
              </Label>
              <Textarea
                id="motivation"
                value={formData.motivation}
                onChange={(e) => updateFormData("motivation", e.target.value)}
                placeholder="Tell us about your interest in AI and what you hope to achieve... (minimum 50 characters)"
                rows={4}
                className="resize-none"
              />
              <p className="text-sm text-muted-foreground">
                {formData.motivation.length}/50 characters minimum
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="education">Education Level *</Label>
              <Select
                value={formData.education}
                onValueChange={(value) => updateFormData("education", value)}
              >
                <SelectTrigger className="bg-background border-border z-50 cursor-pointer">
                  <SelectValue placeholder="Select your education level" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border z-50 cursor-pointer">
                  <SelectItem value="high-school" className="cursor-pointer">
                    High School
                  </SelectItem>
                  <SelectItem value="some-college" className="cursor-pointer">
                    Some College
                  </SelectItem>
                  <SelectItem value="bachelors" className="cursor-pointer">
                    Bachelors Degree
                  </SelectItem>
                  <SelectItem value="masters" className="cursor-pointer">
                    Masters Degree
                  </SelectItem>
                  <SelectItem value="phd" className="cursor-pointer">
                    PhD
                  </SelectItem>
                  <SelectItem value="other" className="cursor-pointer">
                    Other
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentStatus">Current Status *</Label>
              <Select
                value={formData.currentStatus}
                onValueChange={(value) =>
                  updateFormData("currentStatus", value)
                }
              >
                <SelectTrigger className="bg-background border-border z-50 cursor-pointer">
                  <SelectValue placeholder="Select your current status" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border z-50 cursor-pointer">
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="recent-graduate">
                    Recent Graduate
                  </SelectItem>
                  <SelectItem value="career-change">Career Changer</SelectItem>
                  <SelectItem value="professional">
                    Working Professional
                  </SelectItem>
                  <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Relevant Experience *</Label>
              <Textarea
                id="experience"
                value={formData.experience}
                onChange={(e) => updateFormData("experience", e.target.value)}
                placeholder="Describe any relevant experience in AI, technology, business, or creative fields..."
                rows={3}
                className="resize-none"
              />
            </div>

            <div className="space-y-3">
              <Label>Skills & Interests (select all that apply)</Label>
              <div className="grid grid-cols-2 gap-3">
                {skillOptions.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-2 cursor-pointer"
                  >
                    <Checkbox
                      id={skill}
                      checked={formData.skills.includes(skill)}
                      onCheckedChange={() => toggleSkill(skill)}
                      className="cursor-pointer"
                    />
                    <Label htmlFor={skill} className="text-sm cursor-pointer">
                      {skill}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="availability">Time Availability *</Label>
              <Select
                value={formData.availability}
                onValueChange={(value) => updateFormData("availability", value)}
              >
                <SelectTrigger className="bg-background border-border z-50">
                  <SelectValue placeholder="How much time can you commit?" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border z-50">
                  <SelectItem value="part-time">
                    Part-time (10-20 hours/week)
                  </SelectItem>
                  <SelectItem value="full-time">
                    Full-time (30-40 hours/week)
                  </SelectItem>
                  <SelectItem value="flexible">Flexible schedule</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="commitment"
                  checked={formData.commitment}
                  onCheckedChange={(checked) =>
                    updateFormData("commitment", checked)
                  }
                />
                <Label
                  htmlFor="commitment"
                  className="text-sm cursor-pointer leading-relaxed"
                >
                  I commit to actively participating in the full 8-week program
                  and understand that consistent engagement is required for
                  successful completion. *
                </Label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) =>
                    updateFormData("newsletter", checked)
                  }
                />
                <Label
                  htmlFor="newsletter"
                  className="text-sm cursor-pointer leading-relaxed"
                >
                  Subscribe to our newsletter for AI industry updates and future
                  program announcements.
                </Label>
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Application Summary</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>
                  <strong>Name:</strong> {formData.firstName}{" "}
                  {formData.lastName}
                </p>
                <p>
                  <strong>Path:</strong>{" "}
                  {paths.find((p) => p.value === formData.selectedPath)
                    ?.title || "Not selected"}
                </p>
                <p>
                  <strong>Education:</strong> {formData.education}
                </p>
                <p>
                  <strong>Availability:</strong> {formData.availability}
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 bg-background border border-border rounded-lg shadow-sm">
      <div className="bg-muted/30 border-l-4 border-primary text-yellow-900 p-4 rounded-md mb-6 text-sm">
        <strong>Disclaimer:</strong> Once this application form is submitted,
        you will not be allowed to make edits. Please ensure all information is
        accurate before submitting. If you need to make changes, please contact
        us at <strong>engineering@wootlab.ng</strong>
      </div>

      <h1 className="text-2xl font-bold mb-6">
        Apply for AI Summer Internship
      </h1>

      <Progress value={(currentStep / 4) * 100} className="h-2 mb-6" />

      <div className="flex justify-between mb-4">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                currentStep >= step.id
                  ? "bg-primary border-primary text-primary-foreground"
                  : "border-border text-muted-foreground"
              }`}
            >
              {currentStep > step.id ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <step.icon className="w-5 h-5" />
              )}
            </div>
            <span className="text-xs mt-1 text-center">{step.title}</span>
          </div>
        ))}
      </div>

      <div className="py-6">{renderStep()}</div>

      <div className="flex justify-between pt-6 border-t border-border mt-6">
        <Button
          variant="outline"
          className="flex items-center bg-primary/10 text-primary cursor-pointer"
          onClick={prevStep}
          disabled={currentStep === 1 || isSubmitting}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous
        </Button>

        {currentStep < 4 ? (
          <Button
            onClick={nextStep}
            disabled={!isStepValid() || isSubmitting}
            className="flex items-center bg-[#103f67] text-white"
          >
            Next
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={!isStepValid() || isSubmitting}
            className="flex items-center bg-[#103f67] text-white"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                Submitting...
              </>
            ) : (
              <>
                Submit Application
                <CheckCircle className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
