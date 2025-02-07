import React from 'react'


import heroImage from './assets/image 1.png'

import clogo1 from './assets/Fictional company logo.png'
import clogo2 from './assets/Fictional company logo (1).png'
import clogo3 from './assets/Fictional company logo (2).png'
import clogo4 from './assets/Fictional company logo (3).png'
import clogo5 from './assets/Fictional company logo (4).png'
import clogo6 from './assets/Fictional company logo (5).png'
import clogo7 from './assets/Fictional company logo (6).png'

import avatar from './assets/avatar.png'
import profile from './assets/profile_img.png'

import { Headphones, Zap, Share2, MessageCircle, Grid, Users } from "lucide-react"


import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"

import { ArrowUpRight } from 'lucide-react';

import post1 from './assets/product1.png'
import post2 from './assets/product2.png'
import post3 from './assets/product3.png'




const faqData = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can change your plan at any time. Pro-rated charges will be applied to your next billing cycle.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. You'll continue to have access until the end of your billing period.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer: "Yes, you can add additional information to your invoices, including custom fields and notes.",
  },
  {
    question: "How does billing work?",
    answer: "We bill monthly or annually, depending on your preference. All plans are billed in advance.",
  },
  {
    question: "How do I change my account email?",
    answer: "You can change your account email through your account settings page.",
  },
]

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button className="w-full py-6 flex justify-between items-center text-left" onClick={onClick}>
        <span className="text-lg font-medium">{question}</span>
        <motion.div initial={false} animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          {isOpen ? <Minus className="w-5 h-5 text-gray-500" /> : <Plus className="w-5 h-5 text-gray-500" />}
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


function HomePage() {


  const companies = [
    {
      name: "Boltshift",
      logo: clogo1,
      className: "h-8 w-auto",
    },
    {
      name: "Lightbox",
      logo: clogo2,
      className: "h-8 w-auto",
    },
    {
      name: "FeatherDev",
      logo: clogo3,
      className: "h-7 w-auto",
    },
    {
      name: "Spherule",
      logo: clogo4,
      className: "h-8 w-auto",
    },
    {
      name: "GlobalBank",
      logo: clogo5,
      className: "h-8 w-auto",
    },
    {
      name: "Nietzsche",
      logo: clogo6,
      className: "h-8 w-auto",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }


  const features = [
    {
      icon: Headphones,
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: Zap,
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: Share2,
      title: "Manage your team with reports",
      description:
        "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },
    {
      icon: MessageCircle,
      title: "Connect with customers",
      description:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
    },
    {
      icon: Grid,
      title: "Connect the tools you already use",
      description:
        "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
    },
    {
      icon: Users,
      title: "Our people make the difference",
      description:
        "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
    },
  ]


  const [openIndex, setOpenIndex] = useState(null)


  const posts = [
    {
      category: 'Design',
      title: 'UX review presentations',
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
      author: 'Olivia Rhye',
      date: '20 Jan 2024',
      image: post1,
      authorImg: profile,
    },
    {
      category: 'Product',
      title: 'Migrating to Linear 101',
      description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here how to get started.',
      author: 'Phoenix Baker',
      date: '19 Jan 2024',
      image: post2,
      authorImg: avatar,
    },
    {
      category: 'Software Engineering',
      title: 'Building your API stack',
      description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
      author: 'Lana Steiner',
      date: '18 Jan 2024',
      image: post3,
      authorImg: profile,
    },
  ];




  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="text-center space-y-8 mb-12">
          {/* New Feature Badge */}
          <motion.div
          
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}


          className="inline-flex items-center border border-red-200 hover:shadow-md transition-all cursor-pointer duration-300 rounded-full px-2 py-0.5 space-x-2">
            <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs text-red-500">
              New feature
            </span>
            <span className="inline-flex items-center text-sm text-gray-600">Check out the team dashboard →</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
          
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}


          className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Beautiful analytics to grow smarter
          </motion.h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted
            by over 4,000 startups.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4">
            <button className="inline-flex items-center px-4 py-2 rounded-full bg-white text-gray-900 border border-gray-300 hover:bg-gray-50">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 mr-2" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
              </svg>
              Demo
            </button>
            <button className="inline-flex items-center px-4 py-2 rounded-full transition-all duration-300 bg-red-500 text-white hover:bg-red-600">
              Sign up
            </button>
          </div>
        </div>

        {/* TestMySkills Image Section */}
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img
            src={heroImage}
            alt="TestMySkills Interface"
            className="w-full h-auto"
          />
        </div>
      </div>
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg font-medium text-gray-900 mb-12">Join 4,000+ companies already growing</h2>
          </motion.div>

          <motion.div
            className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {companies.map((company) => (
              <motion.div
                key={company.name}
                className="col-span-1 cursor-pointer flex justify-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  className={`${company.className} object-contain grayscale hover:grayscale-0 transition-all duration-300`}
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="min-h-screen p-10 bg-gray-100 text-gray-800">

        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Features Header */}
          <div className="text-center mb-16">
            <motion.p
              className="text-sm font-semibold text-red-600 tracking-wide uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Features
            </motion.p>
            <motion.h2
              className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Analytics that feels like it's from the future
            </motion.h2>
            <motion.p
              className="mt-4 max-w-2xl mx-auto text-xl text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted
              by over 4,000 startups.
            </motion.p>
          </div>

          {/* Features Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {features.map((feature, index) => (
              <motion.div key={index} className="relative flex flex-col justify-center items-center p-6" variants={itemVariants}>
                <div className="h-12 w-12 rounded-lg bg-[#ffffff] border-[1px] flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <img
              src={clogo7}
              alt="Sisyphus"
              className="h-8 mx-auto mb-8"
            />
            <p className="text-2xl font-medium text-gray-900 max-w-4xl mx-auto">
              We've been using Untitled to kick start every new project and can't imagine working without it.
            </p>
            <div className="mt-6">
              <img src={avatar} alt="Candice Wu" className="h-12 w-12 bg-slate-200 rounded-full mx-auto mb-2" />
              <p className="font-medium text-gray-900">Candice Wu</p>
              <p className="text-gray-500">Product Manager, Sisyphus</p>
            </div>
          </motion.div>
        </section>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
        <p className="text-gray-600">Everything you need to know about the product and billing.</p>
      </div>

      <div className="space-y-0">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>

      <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
        <div className="flex justify-center -space-x-2 mb-4">
          <img
            src={profile}
            alt="Team member"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <img
            src={avatar}
            alt="Team member"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <img
            src={profile}
            alt="Team member"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
        <p className="text-gray-600 mb-6">
          Can't find the answer you're looking for? Please chat to our friendly team.
        </p>
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors">
          Get in touch
        </button>
      </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-red-500 font-medium mb-2">Our blog</p>
          <h2 className="text-2xl font-semibold">Latest blog posts</h2>
          <p className="text-gray-600 mt-2">
            Tool and strategies modern teams need to help their companies grow.
          </p>
        </div>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md">
          View all posts
        </button>
      </div>

      <div className="grid grid-cols-1 mt-20 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-3">
              <p className="text-red-500 font-medium">{post.category}</p>
              <div className="flex items-start justify-between group">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <p className="text-gray-600">{post.description}</p>
              
              <div className="flex items-center space-x-2">
                <img
                  src={post.authorImg}
                  alt={post.author}
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="font-medium">{post.author}</p>
                  <p className="text-gray-600 text-sm">{post.date}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-44 text-center">
        <h2 className="text-3xl font-semibold mb-4">Start your free trial</h2>
        <p className="text-gray-600 mb-8">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="space-x-4">
          <button className="px-4 py-2 border border-gray-300 rounded-md">
            Learn more
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md">
            Get started
          </button>
        </div>
      </div>
    </div>

    </div>
  )
}

export default HomePage