'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Briefcase, PenTool, ChevronRight, ArrowRight, RotateCcw } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';

type PathWeight = {
  tech: number;
  business: number;
  creative: number;
};

type QuizOption = {
  text: string;
  weight: PathWeight;
};

type QuizQuestion = {
  id: string;
  question: string;
  options: QuizOption[];
};

type PathResult = {
  path: string;
  score: number;
  icon: React.ReactNode;
  color: string;
  description: string;
};

export default function QuizSection() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number | null>(null);
  const [scores, setScores] = useState<PathWeight>({ tech: 0, business: 0, creative: 0 });
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  
  const quizQuestions: QuizQuestion[] = [
    {
      id: 'q1',
      question: 'What best describes your background?',
      options: [
        { text: 'Computer Science/Engineering', weight: { tech: 3, business: 1, creative: 1 } },
        { text: 'Business/Marketing', weight: { tech: 1, business: 3, creative: 1 } },
        { text: 'Design/Creative Arts', weight: { tech: 1, business: 1, creative: 3 } },
        { text: 'Other/Mixed Background', weight: { tech: 1, business: 1, creative: 1 } }
      ]
    },
    {
      id: 'q2',
      question: 'Which AI application excites you most?',
      options: [
        { text: 'Building ML models and algorithms', weight: { tech: 3, business: 0, creative: 0 } },
        { text: 'AI strategy and business transformation', weight: { tech: 0, business: 3, creative: 0 } },
        { text: 'AI-generated art and content', weight: { tech: 0, business: 0, creative: 3 } },
        { text: 'All of the above', weight: { tech: 1, business: 1, creative: 1 } }
      ]
    },
    {
      id: 'q3',
      question: 'How do you prefer to solve problems?',
      options: [
        { text: 'Through coding and technical implementation', weight: { tech: 3, business: 0, creative: 1 } },
        { text: 'By analyzing data and creating strategies', weight: { tech: 1, business: 3, creative: 0 } },
        { text: 'With creative and innovative approaches', weight: { tech: 0, business: 1, creative: 3 } },
        { text: 'Using a combination of methods', weight: { tech: 1, business: 1, creative: 1 } }
      ]
    },
    {
      id: 'q4',
      question: 'What skills are you most interested in developing?',
      options: [
        { text: 'Technical AI and programming skills', weight: { tech: 3, business: 0, creative: 0 } },
        { text: 'Business strategy and leadership', weight: { tech: 0, business: 3, creative: 0 } },
        { text: 'Creative design and content creation', weight: { tech: 0, business: 0, creative: 3 } },
        { text: 'A balanced mix of all skills', weight: { tech: 1, business: 1, creative: 1 } }
      ]
    },
    {
      id: 'q5',
      question: 'Where do you see yourself in 5 years?',
      options: [
        { text: 'Leading technical AI projects or research', weight: { tech: 3, business: 1, creative: 0 } },
        { text: 'Managing AI strategy for a company', weight: { tech: 1, business: 3, creative: 0 } },
        { text: 'Running a creative studio using AI', weight: { tech: 0, business: 1, creative: 3 } },
        { text: 'Not sure yet, exploring options', weight: { tech: 1, business: 1, creative: 1 } }
      ]
    }
  ];
  
  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScores({ tech: 0, business: 0, creative: 0 });
    setShowResults(false);
  };
  
  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };
  
  const handleNextQuestion = () => {
    if (selectedOption === null || currentQuestionIndex === null) return;
    
    // Update scores
    const selectedWeight = quizQuestions[currentQuestionIndex].options[selectedOption].weight;
    setScores(prev => ({
      tech: prev.tech + selectedWeight.tech,
      business: prev.business + selectedWeight.business,
      creative: prev.creative + selectedWeight.creative
    }));
    
    // Move to next question or show results
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      setShowResults(true);
    }
  };
  
  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestionIndex(null);
    setSelectedOption(null);
    setScores({ tech: 0, business: 0, creative: 0 });
    setShowResults(false);
  };
  
  const getResults = (): PathResult[] => {
    const results: PathResult[] = [
      {
        path: 'AI Innovators',
        score: scores.tech,
        icon: <Code className="h-6 w-6" />,
        color: 'text-primary',
        description: 'You have a strong technical aptitude and would excel in building and implementing AI models.'
      },
      {
        path: 'AI Strategists',
        score: scores.business,
        icon: <Briefcase className="h-6 w-6" />,
        color: 'text-secondary',
        description: 'Your business acumen makes you ideal for leading AI strategy and implementation in organizations.'
      },
      {
        path: 'AI Creators',
        score: scores.creative,
        icon: <PenTool className="h-6 w-6" />,
        color: 'text-purple-500',
        description: 'Your creative mindset is perfect for exploring how AI can enhance design and content creation.'
      }
    ];
    
    // Sort by score (highest first)
    return results.sort((a, b) => b.score - a.score);
  };
  
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Find Your AI Path</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take our quick quiz to discover which AI learning path aligns best with your skills and goals.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!quizStarted && !showResults && (
              <motion.div
                key="start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Card className="border-primary/20 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-6 space-x-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <Code className="h-6 w-6" />
                      </div>
                      <div className="p-3 rounded-full bg-secondary/10 text-secondary">
                        <Briefcase className="h-6 w-6" />
                      </div>
                      <div className="p-3 rounded-full bg-purple-500/10 text-purple-500">
                        <PenTool className="h-6 w-6" />
                      </div>
                    </div>
                    <p className="text-lg mb-6">
                      Not sure which learning path is right for you? Answer 5 quick questions to get a personalized recommendation.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center pb-6">
                    <Button size="lg" onClick={startQuiz} className="group">
                      Start Quiz
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )}
            
            {quizStarted && currentQuestionIndex !== null && !showResults && (
              <motion.div
                key={`question-${currentQuestionIndex}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="border-primary/20 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium text-muted-foreground">
                        Question {currentQuestionIndex + 1} of {quizQuestions.length}
                      </span>
                      <span className="text-sm font-medium text-primary">
                        {Math.round(((currentQuestionIndex + 1) / quizQuestions.length) * 100)}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary"
                        initial={{ width: `${(currentQuestionIndex / quizQuestions.length) * 100}%` }}
                        animate={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <CardTitle className="text-xl md:text-2xl mt-6">
                      {quizQuestions[currentQuestionIndex].question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Button
                            variant={selectedOption === index ? "default" : "outline"}
                            className={`w-full justify-start text-left h-auto py-4 px-4 ${selectedOption === index ? '' : 'hover:bg-primary/5'}`}
                            onClick={() => handleOptionSelect(index)}
                          >
                            <span className="flex-1">{option.text}</span>
                            {selectedOption === index && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                              >
                                <ChevronRight className="h-4 w-4" />
                              </motion.div>
                            )}
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" onClick={resetQuiz}>
                      Cancel
                    </Button>
                    <Button 
                      onClick={handleNextQuestion} 
                      disabled={selectedOption === null}
                      className="group"
                    >
                      {currentQuestionIndex === quizQuestions.length - 1 ? 'See Results' : 'Next'}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )}
            
            {showResults && (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-primary/20 shadow-lg bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl text-center">
                      Your Recommended Path
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {getResults().map((result, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.15 }}
                          className={`p-4 rounded-lg border ${index === 0 ? `border-${result.color.split('-')[1]}/30 bg-${result.color.split('-')[1]}/5` : 'border-muted'}`}
                        >
                          <div className="flex items-start gap-4">
                            <div className={`p-2 rounded-full ${result.color.replace('text', 'bg')}/10 ${result.color} shrink-0`}>
                              {result.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-2">
                                <h3 className={`font-semibold text-lg ${index === 0 ? result.color : ''}`}>
                                  {result.path}
                                </h3>
                                <span className="text-sm font-medium">
                                  {Math.round((result.score / (scores.tech + scores.business + scores.creative)) * 100)}%
                                </span>
                              </div>
                              <p className="text-muted-foreground">{result.description}</p>
                              {index === 0 && (
                                <div className="mt-3">
                                  <Button size="sm" className={`bg-${result.color.split('-')[1]} hover:bg-${result.color.split('-')[1]}/90`}>
                                    Learn More About This Path
                                  </Button>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline" onClick={resetQuiz} className="gap-2">
                      <RotateCcw className="h-4 w-4" />
                      Retake Quiz
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}