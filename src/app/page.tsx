"use client";

import { useState, useEffect } from 'react';
import { 
  BookOpenIcon, 
  ClockIcon, 
  ChartBarIcon,
  BellIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  CalendarDaysIcon,
  AcademicCapIcon,
  HeartIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

interface Priority {
  id: string;
  category: 'academic' | 'personal' | 'service';
  title: string;
  progress: number;
  dueTime?: string;
  urgent?: boolean;
}

interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  type: 'academic' | 'work' | 'church' | 'personal';
  location?: string;
  status: 'upcoming' | 'current' | 'completed';
}

interface ProgressMetric {
  label: string;
  current: number;
  target: number;
  unit: string;
  color: string;
}

export default function DailyOverview() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const todaysPriorities: Priority[] = [
    {
      id: '1',
      category: 'academic',
      title: 'Complete Algebra II Chapter 4 Problem Set',
      progress: 65,
      dueTime: '2:00 PM',
      urgent: false
    },
    {
      id: '2',
      category: 'personal',
      title: 'Spanish Conversation with Dad (30 min)',
      progress: 0,
      dueTime: '7:00 PM'
    },
    {
      id: '3',
      category: 'service',
      title: 'Prepare Youth Activity Lesson',
      progress: 80,
      dueTime: 'Tomorrow',
      urgent: true
    }
  ];

  const todaysSchedule: ScheduleItem[] = [
    {
      id: '1',
      time: '6:00 AM',
      title: 'Seminary',
      type: 'church',
      location: 'Church Building',
      status: 'completed'
    },
    {
      id: '2',
      time: '7:15 AM',
      title: 'Exercise & Prep',
      type: 'personal',
      status: 'completed'
    },
    {
      id: '3',
      time: '7:45 AM',
      title: 'Mathematics Study Block',
      type: 'academic',
      status: 'current'
    },
    {
      id: '4',
      time: '9:00 AM',
      title: 'Nannying - Johnson Family',
      type: 'work',
      location: 'Johnson House',
      status: 'upcoming'
    },
    {
      id: '5',
      time: '12:30 PM',
      title: 'Language Arts & Literature',
      type: 'academic',
      status: 'upcoming'
    },
    {
      id: '6',
      time: '7:00 PM',
      title: 'Youth Activities',
      type: 'church',
      location: 'Church Building',
      status: 'upcoming'
    }
  ];

  const weeklyProgress: ProgressMetric[] = [
    { label: 'Study Hours', current: 18, target: 25, unit: 'hrs', color: 'bg-blue-500' },
    { label: 'Spanish Practice', current: 120, target: 180, unit: 'min', color: 'bg-green-500' },
    { label: 'Assignments Done', current: 7, target: 10, unit: '', color: 'bg-purple-500' },
    { label: 'Service Hours', current: 3, target: 4, unit: 'hrs', color: 'bg-orange-500' }
  ];

  const aiAlerts = [
    {
      id: '1',
      type: 'reminder',
      title: 'Chemistry Lab Due Friday',
      message: 'Don\'t forget to complete your lab write-up for the reaction experiment.',
      urgent: false
    },
    {
      id: '2',
      type: 'suggestion',
      title: 'Spanish Fluency Tip',
      message: 'Try watching a Spanish movie tonight to boost your listening comprehension.',
      urgent: false
    },
    {
      id: '3',
      type: 'warning',
      title: 'Math Performance Alert',
      message: 'Consider extra practice on quadratic functions - accuracy below target.',
      urgent: true
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'academic': return <AcademicCapIcon className="w-5 h-5 text-blue-600" />;
      case 'personal': return <HeartIcon className="w-5 h-5 text-pink-500" />;
      case 'service': return <GlobeAltIcon className="w-5 h-5 text-green-500" />;
      default: return <CheckCircleIcon className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-50';
      case 'current': return 'text-blue-600 bg-blue-50';
      case 'upcoming': return 'text-gray-600 bg-gray-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            Good morning, Chloe! ☀️
          </h1>
          <p className="text-lg text-gray-700">
            {formatDate(currentTime)} • {currentTime.toLocaleTimeString('en-US', { 
              hour: 'numeric', 
              minute: '2-digit',
              hour12: true 
            })}
          </p>
        </div>

        {/* Priority Matrix */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-3">
            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6" /></svg>
            Today's Priorities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {todaysPriorities.map((priority) => (
              <div key={priority.id} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(priority.category)}
                    <span className="text-base font-semibold text-gray-500 capitalize">
                      {priority.category}
                    </span>
                  </div>
                  {priority.urgent && (
                    <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  )}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{priority.title}</h3>
                <div className="mb-2">
                  <div className="flex justify-between text-base text-gray-700 mb-1">
                    <span>Progress</span>
                    <span>{priority.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${priority.progress}%` }}
                    ></div>
                  </div>
                </div>
                {priority.dueTime && (
                  <p className="text-base text-gray-500 flex items-center gap-1">
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Due {priority.dueTime}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Today's Schedule */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                Today's Schedule
              </h2>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="divide-y divide-gray-100">
                  {todaysSchedule.map((item) => (
                    <div key={item.id} className="p-4 flex items-center gap-4">
                      <div className="text-base font-medium text-gray-900 w-20">
                        {item.time}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                        {item.location && (
                          <p className="text-base text-gray-500">{item.location}</p>
                        )}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-base font-bold ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Quick Actions</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <button className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors text-center">
                  <BookOpenIcon className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <span className="text-base font-semibold text-gray-900">Submit Assignment</span>
                </button>
                <button className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors text-center">
                  <svg className="w-10 h-10 text-green-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-base font-semibold text-gray-900">Log Nannying</span>
                </button>
                <button className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors text-center">
                  <svg className="w-10 h-10 text-purple-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-5-9-5-9 5 9 5z" /></svg>
                  <span className="text-base font-semibold text-gray-900">Spanish Practice</span>
                </button>
                <button className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors text-center">
                  <svg className="w-10 h-10 text-orange-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6" /></svg>
                  <span className="text-base font-semibold text-gray-900">View Analytics</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Weekly Progress */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Weekly Progress</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 space-y-5">
                {weeklyProgress.map((metric, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-base text-gray-700 mb-1">
                      <span>{metric.label}</span>
                      <span>{metric.current}/{metric.target} {metric.unit}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${metric.color} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${(metric.current / metric.target) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Alerts */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                AI Insights
              </h2>
              <div className="space-y-3">
                {aiAlerts.map((alert) => (
                  <div key={alert.id} className={`p-4 rounded-lg border ${
                    alert.urgent ? 'bg-red-50 border-red-200' : 'bg-blue-50 border-blue-200'
                  }`}>
                    <h3 className={`font-bold text-base mb-2 ${
                      alert.urgent ? 'text-red-800' : 'text-blue-800'
                    }`}>
                      {alert.title}
                    </h3>
                    <p className={`text-base ${
                      alert.urgent ? 'text-red-600' : 'text-blue-600'
                    }`}>
                      {alert.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Achievements */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Recent Wins 🎉</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 space-y-4">
                <div className="flex items-center gap-4">
                  <CheckCircleIcon className="w-6 h-6 text-green-500" />
                  <span className="text-base font-semibold text-gray-900">Completed Chemistry Lab with 95%</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircleIcon className="w-6 h-6 text-green-500" />
                  <span className="text-base font-semibold text-gray-900">7-day Spanish practice streak!</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircleIcon className="w-6 h-6 text-green-500" />
                  <span className="text-base font-semibold text-gray-900">Exceeded weekly study hour goal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}