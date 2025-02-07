import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/zysk-logo.png';

const Footer = () => {
  const footerData = {
    product: {
      title: 'Product',
      items: [
        'Overview',
        'Features',
        { name: 'Solutions', isNew: true },
        'Tutorials',
        'Pricing',
        'Releases'
      ]
    },
    company: {
      title: 'Company',
      items: [
        'About us',
        'Careers',
        'Press',
        'News',
        'Media kit',
        'Contact'
      ]
    },
    resources: {
      title: 'Resources',
      items: [
        'Blog',
        'Newsletter',
        'Events',
        'Help centre',
        'Tutorials',
        'Support'
      ]
    },
    useCases: {
      title: 'Use cases',
      items: [
        'Startups',
        'Enterprise',
        'Government',
        'SaaS centre',
        'Marketplaces',
        'Ecommerce'
      ]
    },
    social: {
      title: 'Social',
      items: [
        'Twitter',
        'LinkedIn',
        'Facebook',
        'GitHub',
        'AngelList',
        'Dribbble'
      ]
    },
    legal: {
      title: 'Legal',
      items: [
        'Terms',
        'Privacy',
        'Cookies',
        'Licenses',
        'Settings',
        'Contact'
      ]
    }
  };

  const FooterColumn = ({ title, items }) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col space-y-3"
    >
      <h3 className="text-sm font-medium text-gray-700">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index}>
            <a 
              href="#" 
              className="text-sm text-gray-600 hover:text-gray-900 flex items-center"
            >
              {typeof item === 'object' ? (
                <div className="flex items-center">
                  {item.name}
                  {item.isNew && (
                    <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">
                      New
                    </span>
                  )}
                </div>
              ) : (
                item
              )}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <footer className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
        {Object.entries(footerData).map(([key, section]) => (
          <FooterColumn key={key} {...section} />
        ))}
      </div>
      
      <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <img src={logo} alt="" className='w-full h-8' />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-sm text-gray-600 mt-4 md:mt-0"
        >
          © 2077 zysktechnologies. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;