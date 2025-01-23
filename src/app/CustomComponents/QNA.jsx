'use client'
import { TextGenerate } from '@/components/HeroSectionText';
import React, { useState } from 'react';

const QNA = () => {
  const questions = [
    {
      question: "What is KyberBits?",
      answer: "KyberBits is a layer 1 WEB3 aggregated blockchain that will unify all blockchain networks including BTC, focusing on scalability, security and interoperability. KyberBits aims to be the leading blockchain network for financial service, payment solutions and digitization of real-world asset.",
    },
    {
      question: "What makes KyberBits differ from other blockchains?",
      answer: "KyberBits stands out by integrating EVM, Wasm and Bitcoin chain abstraction enabling interoperability with all blockchain networks, a tokenized asset market place, a Decentralized VPN service, a non-custodial open-source wallet with debit and virtual card functionality and KyberBits IDE, enabling financial solutions catering to both individuals and institutions.",
    },
    {
      question: "What is an aggregated blockchain",
      answer: "An aggregated blockchain brings together multiple blockchain networks, enabling them to interact smoothly and operate as a unified system. This integration enhances cross-chain interoperability, scalability, and security, facilitating the seamless exchange and utilization of assets, data, and smart contracts across various platforms.",
    },
    {
      question: "What is the advantage of using a decentralized VPN?",
      answer: "A decentralized VPN (dVPN) offers enhanced privacy, security, and censorship resistance by using a distributed network of nodes instead of centralized servers. This decentralized structure prevents data logging, making it difficult for third parties to monitor or block user activity, fostering resilience against hacking or shutdown attempts.",
    },
    {
      question: "What is KyberBits Tool?",
      answer: "KyberBits Tool is an integrated development environment designed for the KyberBits Network that simplifies blockchain development with a drag-and-drop interface, making it accessible even to those with limited coding experience. Enhanced with AI components, it automates the creation and deployment of smart contracts and decentralized applications (dApps).",
    },
    {
      question: "What is the tokenized asset market place?",
      answer: "It's a platform within the KyberBits Wallet App, where users can buy, sell, or hold various real world assets (RWA)",
    },
    {
      question: "How can I join the KyberBits presale?",
      answer: "Head over to the buy page to join the KyberBits Presa",
    },
    {
      question: "What is the difference between KyberBits and BITS?",
      answer: "KyberBits and BITS are not the same thing. KyberBits refers to the blockchain network itself, a comprehensive platform offering various blockchain services and features. BITS, on the other hand, is the native utility token of the KyberBits Network, used within the ecosystem for transactions, fees, rewards, and other financial activities.",
    },
    {
      question: "How can I Buy KyberBits native token BITS?",
      answer: "To buy BITS tokens, you can do so during the live presale by connecting your crypto wallet through wallet connect. The platform will accept several different cryptocurrencies, including popular ones like Bitcoin, Litecoin, XRP, Dogecoin, and Tron, providing a wide range of options for your purchase.",
    },
    {
      question: "What is the KUSD token?",
      answer: "KUSD is a stable coin within the KyberBits Network, pegged to tether’s USDT which is pegged to the US dollar, ensuring stability and reliability for transactions.",
    },
    {
      question: "What functionalities does the KyberBits wallet offer?",
      answer: "The KyberBits wallets supports multi-platform operations, Debit and virtual card transaction, Feeless transfer within the KyberBits ecosystem, integration with major payment systems like Apple pay and Google pay.",
    },
    {
      question: "Are there any KYC requirements to join KyberBits Network?",
      answer: "KyberBits operates without KYC requirement, emphasizing user privacy and decentralization in line with blockchain ethos.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-8">
          <p className="font-bold text-xl md:text-4xl text-center  text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
          Q&A                 
           </p>
      <div className="space-y-4 max-w-screen-xl mx-auto  w-full px-16">
        {questions.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-600 pb-4 cursor-pointer transition-all duration-300"
          >
            <div
              className="flex justify-between items-center"
              onClick={() => toggleAnswer(index)}
            >
              <h2 className="text-xl font-semibold transition-colors duration-300 ">
                {item.question}
              </h2>
              <span
                className={`text-2xl transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="mt-2 text-gray-400">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QNA;
