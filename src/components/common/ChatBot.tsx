"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, ExternalLink } from "lucide-react";
import { products } from "@/lib/data/products";

interface Message {
  id: string;
  text: string | React.ReactNode;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! Welcome to **Federal Parts Philippines**. 👋\n\nI'm your virtual assistant. You can ask me about specific parts, check prices, or ask for our location and contact details.",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Smart Tooltip Logic
  useEffect(() => {
    let tooltipTimer: NodeJS.Timeout;

    if (!isOpen) {
      // Show tooltip after 2 seconds of page load/chat close
      tooltipTimer = setTimeout(() => setShowTooltip(true), 2000);

      // Hide tooltip after 8 seconds (so it shows for a total of 6 seconds)
      const hideTimer = setTimeout(() => setShowTooltip(false), 10000);

      // Hide tooltip on scroll
      const handleScroll = () => setShowTooltip(false);
      window.addEventListener("scroll", handleScroll);

      return () => {
        clearTimeout(tooltipTimer);
        clearTimeout(hideTimer);
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setShowTooltip(false); // Hide if chat is open
    }
  }, [isOpen]);

  // Helper to render markdown-like text with clickable links and bold
  const renderMessageContent = (text: string) => {
    const regex = /(\*\*.*?\*\*|\[.*?\]\(.*?\)|https?:\/\/[^\s]+)/g;
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (!part) return null;

      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-semibold text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }

      if (part.startsWith("[") && part.includes("](")) {
        const match = part.match(/\[(.*?)\]\((.*?)\)/);
        if (match) {
          return (
            <a
              key={index}
              href={match[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 underline font-medium break-all inline-flex items-center gap-1"
            >
              {match[1]} <ExternalLink className="w-3 h-3 flex-shrink-0" />
            </a>
          );
        }
      }

      if (part.match(/^https?:\/\/[^\s]+$/)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-300 underline break-all"
          >
            {part}
          </a>
        );
      }

      return (
        <span key={index} className="break-words">
          {part}
        </span>
      );
    });
  };

  const getBotResponse = (userInput: string): string => {
    const inputLower = userInput.toLowerCase().trim();
    const words = inputLower.split(/\s+/);

    const scoredProducts = products
      .map((p) => {
        let score = 0;
        const searchString =
          `${p.name} ${p.category} ${p.subCategory || ""} ${p.model} ${p.motorcycle.join(" ")} ${p.partNumber} ${p.oemNumber}`.toLowerCase();

        words.forEach((word) => {
          if (word.length > 2 && searchString.includes(word)) {
            score += 1;
          }
        });

        return { product: p, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);

    if (scoredProducts.length > 0) {
      const topMatches = scoredProducts.slice(0, 4);
      let response = `I found **${scoredProducts.length}** matching part(s):\n\n`;

      topMatches.forEach(({ product: p }) => {
        response += `• **${p.name}** (${p.partNumber})\n  ₱${p.price.toLocaleString("en-PH", { minimumFractionDigits: 2 })}\n  _Fits: ${p.motorcycle.join(", ")}_\n\n`;
      });

      if (scoredProducts.length > 4) {
        response += `...and **${scoredProducts.length - 4}** more! Visit our **[Products Page](/products)** to see the full list.`;
      } else {
        response += `Check our **[Products Page](/products)** for more details.`;
      }
      return response;
    }

    if (inputLower.includes("honda")) {
      const count = products.filter((p) => p.brand === "Honda").length;
      return `We have **${count} Honda parts** available. You can browse them in our **[Products Section](/products?brand=Honda)**.`;
    }
    if (inputLower.includes("yamaha")) {
      const count = products.filter((p) => p.brand === "Yamaha").length;
      return `We have **${count} Yamaha parts** available. Check out our **[Products Section](/products?brand=Yamaha)**.`;
    }
    if (inputLower.includes("suzuki")) {
      const count = products.filter((p) => p.brand === "Suzuki").length;
      return `We have **${count} Suzuki parts** available. Visit our **[Products Section](/products?brand=Suzuki)**.`;
    }

    if (
      inputLower.includes("price") ||
      inputLower.includes("cost") ||
      inputLower.includes("how much") ||
      inputLower.includes("magkano") ||
      inputLower.includes("presyo")
    ) {
      return "For specific pricing, please visit our **[Products section](/products)** or contact us directly. We offer competitive prices on all parts!";
    }

    if (
      inputLower.includes("location") ||
      inputLower.includes("address") ||
      inputLower.includes("where") ||
      inputLower.includes("saan") ||
      inputLower.includes("saan kayo")
    ) {
      return "📍 We are located at:\n**Fochun Industrial Compound, Santol, Balagtas, Bulacan, North Luzon, Philippines, 3016.**\n\nYou can also view us on Google Maps!";
    }

    if (
      inputLower.includes("contact") ||
      inputLower.includes("call") ||
      inputLower.includes("phone") ||
      inputLower.includes("number") ||
      inputLower.includes("facebook") ||
      inputLower.includes("message")
    ) {
      return "📞 You can reach us at:\n**09543827627 / 09171440541**\n\n💬 Or send us a message on **[Facebook](https://www.facebook.com/FederalPartsPhilippines)**.\n\n📍 Visit our location in Balagtas, Bulacan.";
    }

    if (
      inputLower === "hi" ||
      inputLower === "hello" ||
      inputLower === "hey" ||
      inputLower.includes("kamusta") ||
      inputLower.includes("good morning") ||
      inputLower.includes("good afternoon")
    ) {
      return "Hello! 👋 How can I help you with your motorcycle parts today? You can ask me about specific parts like 'brake pads' or 'Click 125i'.";
    }

    if (inputLower.includes("thank") || inputLower.includes("salamat")) {
      return "You're welcome! If you need anything else, just ask. Ride safe! 🏍️";
    }

    const defaultResponses = [
      "I'd be happy to help! Could you please be more specific about the part or motorcycle model you're looking for?",
      "I didn't quite catch that. Try asking about 'brake pads', 'belts', 'CVT', or a specific motorcycle like 'Click 125i'.",
      "You can also check our **[Products Page](/products)** or send us a message on **[Facebook](https://www.facebook.com/FederalPartsPhilippines)**.",
      "I'm not sure about that specific part. Try searching for the part name (e.g., 'air filter') or your motorcycle model.",
    ];

    return defaultResponses[
      Math.floor(Math.random() * defaultResponses.length)
    ];
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(input),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button with Tooltip */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <AnimatePresence>
          {!isOpen && showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-gray-900 px-4 py-2 rounded-lg shadow-xl text-sm font-medium hidden md:block relative"
            >
              Need help? Chat with us! 👋
              {/* Tooltip Triangle */}
              <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-white transform rotate-45 -translate-y-1/2"></div>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => {
            setIsOpen(true);
            setShowTooltip(false); // Force hide tooltip on click
          }}
          className={`bg-red-600 hover:bg-red-700 text-white rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-105 ${
            isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
          }`}
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-[380px] bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-800 flex flex-col"
            style={{ height: "600px", maxHeight: "calc(100vh - 48px)" }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-red-700 to-red-600 p-4 flex justify-between items-center shadow-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-red-600 rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">
                    Federal Parts AI
                  </h3>
                  <p className="text-xs text-red-100">
                    Online • Replies instantly
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-all"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4 bg-gradient-to-b from-black to-gray-950">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${
                    message.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === "user"
                        ? "bg-red-600"
                        : "bg-gray-800 border border-gray-700"
                    }`}
                  >
                    {message.sender === "user" ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-red-500" />
                    )}
                  </div>

                  <div className="flex flex-col max-w-[80%] min-w-0">
                    <div
                      className={`p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line break-words ${
                        message.sender === "user"
                          ? "bg-red-600 text-white rounded-tr-sm"
                          : "bg-gray-800 text-gray-200 border border-gray-700 rounded-tl-sm"
                      }`}
                    >
                      {typeof message.text === "string"
                        ? renderMessageContent(message.text)
                        : message.text}
                    </div>
                    <span
                      className={`text-[10px] text-gray-500 mt-1 ${message.sender === "user" ? "text-right" : "text-left"}`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-red-500" />
                  </div>
                  <div className="bg-gray-800 border border-gray-700 p-3 rounded-2xl rounded-tl-sm flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.15s" }}
                    ></div>
                    <div
                      className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.3s" }}
                    ></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-4 bg-gray-900 border-t border-gray-800">
              <div className="flex items-end gap-2 bg-black border border-gray-700 rounded-xl p-1 focus-within:ring-2 focus-within:ring-red-500 focus-within:border-transparent transition-all">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about parts, prices, location..."
                  className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none min-w-0"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 mb-0.5 mr-0.5"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] text-gray-500 text-center mt-2">
                Powered by Federal Parts Philippines
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
