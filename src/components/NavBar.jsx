import React, { useState, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "../lib/utils"

import { motion } from "framer-motion"

const products = [
    { name: "Product 1", href: "#" },
    { name: "Product 2", href: "#" },
    { name: "Product 3", href: "#" },
]

import logo from "../assets/zysk-logo.png"
import profile from "../assets/profile_img.png"

const resources = [
    { name: "Documentation", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Support", href: "#" },
]

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const navRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setActiveDropdown(null)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <nav className="relative bg-white border-b" ref={navRef}>
            <div className="mx-auto h-16 max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between">
                <div className="flex gap-10 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center">
                            <img
                                src={logo} // Update with your logo path
                                alt="Logo"
                                className="h-8 w-auto"
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:gap-x-8">
                        <a href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                            Home
                        </a>

                        {/* Products Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === "products" ? null : "products")}
                                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900"
                            >
                                Products
                                <ChevronDown
                                    className={cn(
                                        "h-4 w-4 transition-transform duration-200",
                                        activeDropdown === "products" ? "rotate-180" : ""
                                    )}
                                />
                            </button>
                            {activeDropdown === "products" && (
                                <motion.div 
                                
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: activeDropdown === "products" ? 1 : 0, y: activeDropdown === "products" ? 0 : -20 }}
                                transition={{ duration: 0.2 }}
                                 className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                                    {products.map((product) => (

                                        <a
                                            key={product.name}
                                            href={product.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            {product.name}
                                        </a>
                                    ))}
                                </motion.div>
                            )}
                        </div>

                        {/* Resources Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setActiveDropdown(activeDropdown === "resources" ? null : "resources")}
                                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900"
                            >
                                Resources
                                <ChevronDown
                                    className={cn(
                                        "h-4 w-4 transition-transform duration-200",
                                        activeDropdown === "resources" ? "rotate-180" : ""
                                    )}
                                />
                            </button>
                            {activeDropdown === "resources" && (
                                
                                <motion.div 
                                
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: activeDropdown === "resources" ? 1 : 0, y: activeDropdown === "resources" ? 0 : -20 }}
                                transition={{ duration: 0.2 }}

                                className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                                    {resources.map((resource) => (
                                        <a
                                            key={resource.name}
                                            href={resource.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                            {resource.name}
                                        </a>
                                    ))}
                                </motion.div>
                            )}
                        </div>

                        <a href="/pricing" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                            Pricing
                        </a>
                    </div>
                </div>

                {/* Right side items */}
                <div className="flex items-center gap-4">
                    {/* Profile */}
                    <div className="md:flex hidden items-center">
                        <img
                            src={profile} // Update with your placeholder image
                            alt="Profile"
                            className="h-8 w-8 rounded-full"
                        />
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: isOpen ? 0 : 1, y: isOpen ? 10 : 0 }}
                            transition={{ duration: 0.2 }}

                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                            <svg
                                className={cn("h-6 w-6", isOpen ? "hidden" : "block")}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg
                                className={cn("h-6 w-6", isOpen ? "block" : "hidden")}
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </motion.button>
                    </div>
                </div>

            </div>

            {/* Mobile menu */}
            <div


                className={cn(
                    "fixed inset-0 z-50 lg:hidden",
                    isOpen ? "block" : "hidden"
                )}
            >
                {/* Background overlay */}
                <div
                    className="fixed inset-0 bg-black/20"
                    onClick={() => setIsOpen(false)}
                />

                {/* Menu content */}
                <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white px-4 py-3">
                    <div className="flex items-center justify-between">
                        <a href="/" className="flex items-center">
                            <img
                                src={logo} // Update with your logo path
                                alt="Logo"
                                className="h-8 w-auto"
                            />
                        </a>
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
                            transition={{ duration: 0.2 }}
                            
                            onClick={() => setIsOpen(false)}
                            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </motion.button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
                        transition={{ duration: 0.2 }} div className=" flow-root">
                        <div className="space-y-2 py-6">
                            <a
                                href="/"
                                className="block rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                            >
                                Home
                            </a>

                            {/* Mobile Products Dropdown */}
                            <div>
                                <button
                                    onClick={() => setActiveDropdown(activeDropdown === "products" ? null : "products")}
                                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                                >
                                    Products
                                    <ChevronDown
                                        className={cn(
                                            "h-5 w-5 transition-transform duration-200",
                                            activeDropdown === "products" ? "rotate-180" : ""
                                        )}
                                    />
                                </button>
                                {activeDropdown === "products" && (
                                    <div className="mt-2 space-y-2 pl-6">
                                        {products.map((product) => (
                                            <a
                                                key={product.name}
                                                href={product.href}
                                                className="block rounded-lg px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                            >
                                                {product.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Mobile Resources Dropdown */}
                            <div>
                                <button
                                    onClick={() => setActiveDropdown(activeDropdown === "resources" ? null : "resources")}
                                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                                >
                                    Resources
                                    <ChevronDown
                                        className={cn(
                                            "h-5 w-5 transition-transform duration-200",
                                            activeDropdown === "resources" ? "rotate-180" : ""
                                        )}
                                    />
                                </button>
                                {activeDropdown === "resources" && (
                                    <div className="mt-2 space-y-2 pl-6">
                                        {resources.map((resource) => (
                                            <a
                                                key={resource.name}
                                                href={resource.href}
                                                className="block rounded-lg px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                            >
                                                {resource.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <a
                                href="/pricing"
                                className="block rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                            >
                                Pricing
                            </a>
                        </div>
                </motion.div>
            </div>
        </div>
        </nav >
    )
}

export default Navbar