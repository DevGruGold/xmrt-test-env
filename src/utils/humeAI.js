import axios from 'axios';

// Hume AI API key
const HUME_API_KEY = 'tZ3HmPpSCUo0LIZY5KS2IGuRj7idUeiU1uWsGmrcE0gehx4b29pjqWue6YNbXGtn';

// Hume AI API base URL
const HUME_API_BASE_URL = 'https://api.hume.ai/v0';

// Create axios instance with Hume AI API key
const humeClient = axios.create({
  baseURL: HUME_API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${HUME_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

/**
 * Analyze text for sentiment and emotions
 * @param {string} text - Text to analyze
 * @returns {Promise} - Promise resolving to analysis results
 */
const analyzeText = async (text) => {
  try {
    const response = await humeClient.post('/sentiment', {
      text
    });
    return response.data;
  } catch (error) {
    console.error('Error analyzing text with Hume AI:', error);
    throw error;
  }
};

/**
 * Generate AI response for DAO decision making
 * @param {string} prompt - Prompt for the AI
 * @returns {Promise} - Promise resolving to AI response
 */
const generateDAOResponse = async (prompt) => {
  try {
    const response = await humeClient.post('/generate', {
      prompt,
      max_tokens: 200,
      temperature: 0.7
    });
    return response.data;
  } catch (error) {
    console.error('Error generating DAO response with Hume AI:', error);
    throw error;
  }
};

/**
 * Analyze community feedback for sentiment and urgency
 * @param {string} feedback - Feedback text to analyze
 * @returns {Promise} - Promise resolving to analysis results with sentiment and urgency scores
 */
const analyzeFeedback = async (feedback) => {
  try {
    const response = await humeClient.post('/analyze', {
      text: feedback,
      models: ['sentiment', 'emotion']
    });
    
    // Extract sentiment and calculate urgency based on emotion intensities
    const sentiment = response.data.sentiment.score;
    
    // Calculate urgency based on negative emotions (anger, fear, sadness)
    const emotions = response.data.emotion.scores;
    const urgency = (
      (emotions.anger || 0) * 0.4 + 
      (emotions.fear || 0) * 0.3 + 
      (emotions.sadness || 0) * 0.2 + 
      (1 - (emotions.joy || 0)) * 0.1
    );
    
    return {
      sentiment,
      urgency,
      emotions
    };
  } catch (error) {
    console.error('Error analyzing feedback with Hume AI:', error);
    // Return default values if API fails
    return {
      sentiment: 0.5,
      urgency: 0.5,
      emotions: {
        anger: 0,
        fear: 0,
        joy: 0,
        sadness: 0
      }
    };
  }
};

export {
  analyzeText,
  generateDAOResponse,
  analyzeFeedback
};

