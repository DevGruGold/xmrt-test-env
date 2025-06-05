import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Sepolia } from "@thirdweb-dev/chains";

// ThirdWeb Client ID
const THIRDWEB_CLIENT_ID = import.meta.env.VITE_THIRDWEB_CLIENT_ID || "0dcf50123825af0a59b5a3ad2be69639";

// Initialize ThirdWeb SDK
const getSDK = async (signer) => {
  try {
    const sdk = ThirdwebSDK.fromSigner(signer, Sepolia, {
      clientId: THIRDWEB_CLIENT_ID,
    });
    return sdk;
  } catch (error) {
    console.error("Error initializing ThirdWeb SDK:", error);
    return null;
  }
};

// Initialize read-only SDK
const getReadOnlySDK = () => {
  try {
    const rpcUrl = import.meta.env.VITE_SEPOLIA_RPC_URL || 
                  `https://sepolia.infura.io/v3/c843a693bc5d43d1aee471d2491f2414`;
    
    const sdk = new ThirdwebSDK(Sepolia, {
      clientId: THIRDWEB_CLIENT_ID,
      readonlySettings: {
        rpcUrl,
      },
    });
    return sdk;
  } catch (error) {
    console.error("Error initializing read-only ThirdWeb SDK:", error);
    return null;
  }
};

/**
 * Analyze text for sentiment using basic algorithm
 * @param {string} text - Text to analyze
 * @returns {Object} - Analysis results
 */
const analyzeText = async (text) => {
  // Simple sentiment analysis based on positive and negative words
  const positiveWords = ["good", "great", "excellent", "amazing", "wonderful", "positive", "happy", "joy", "love", "like"];
  const negativeWords = ["bad", "terrible", "awful", "horrible", "negative", "sad", "angry", "hate", "dislike", "poor"];
  
  const words = text.toLowerCase().split(/\W+/);
  let positiveCount = 0;
  let negativeCount = 0;
  
  words.forEach(word => {
    if (positiveWords.includes(word)) positiveCount++;
    if (negativeWords.includes(word)) negativeCount++;
  });
  
  const totalWords = words.length;
  const sentiment = totalWords > 0 
    ? (positiveCount - negativeCount) / Math.max(1, positiveCount + negativeCount)
    : 0;
  
  return {
    sentiment: (sentiment + 1) / 2, // Normalize to 0-1 range
    score: sentiment,
    positive: positiveCount,
    negative: negativeCount
  };
};

/**
 * Generate AI response for DAO decision making
 * @param {string} prompt - Prompt for the AI
 * @returns {Object} - AI response
 */
const generateDAOResponse = async (prompt) => {
  // Simple rule-based response generation
  const keywords = {
    "staking": "Recommend increasing staking rewards to incentivize token holders.",
    "mining": "Recommend optimizing mining rewards distribution based on hash rate contribution.",
    "governance": "Recommend implementing a voting mechanism for major protocol changes.",
    "treasury": "Recommend allocating funds to development and marketing initiatives.",
    "fees": "Recommend adjusting fee structure to be more competitive in the market.",
    "security": "Recommend conducting a security audit of smart contracts.",
    "community": "Recommend organizing community events to increase engagement."
  };
  
  const promptLower = prompt.toLowerCase();
  let response = "Based on the current protocol parameters, no changes are recommended at this time.";
  
  Object.keys(keywords).forEach(keyword => {
    if (promptLower.includes(keyword)) {
      response = keywords[keyword];
    }
  });
  
  return {
    response,
    confidence: 0.85,
    generated: new Date().toISOString()
  };
};

/**
 * Analyze community feedback for sentiment and urgency
 * @param {string} feedback - Feedback text to analyze
 * @returns {Object} - Analysis results with sentiment and urgency scores
 */
const analyzeFeedback = async (feedback) => {
  const sentimentResult = await analyzeText(feedback);
  
  // Calculate urgency based on keywords
  const urgentWords = ["urgent", "immediately", "critical", "asap", "emergency", "now", "serious", "important"];
  const words = feedback.toLowerCase().split(/\W+/);
  
  let urgencyScore = 0;
  words.forEach(word => {
    if (urgentWords.includes(word)) urgencyScore += 0.2;
  });
  
  // Cap urgency at 1.0
  urgencyScore = Math.min(1.0, urgencyScore);
  
  // If sentiment is very negative, increase urgency
  if (sentimentResult.sentiment < 0.3) {
    urgencyScore += 0.3;
  }
  
  // Final capping
  urgencyScore = Math.min(1.0, urgencyScore);
  
  return {
    sentiment: sentimentResult.sentiment,
    urgency: urgencyScore,
    emotions: {
      anger: sentimentResult.sentiment < 0.3 ? 0.7 : 0.2,
      fear: sentimentResult.sentiment < 0.4 ? 0.5 : 0.1,
      joy: sentimentResult.sentiment > 0.7 ? 0.8 : 0.2,
      sadness: sentimentResult.sentiment < 0.5 ? 0.6 : 0.1
    }
  };
};

export {
  getSDK,
  getReadOnlySDK,
  analyzeText,
  generateDAOResponse,
  analyzeFeedback
};

