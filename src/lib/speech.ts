/**
 * Utility for word pronunciation
 */

export const playAudio = (url: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const audio = new Audio(url);
    audio.onended = () => resolve();
    audio.onerror = (e) => reject(e);
    audio.play().catch(reject);
  });
};

export const speakWithRate = (
  text: string,
  rate = 0.7,
  lang: string = "en-US"
): void => {
  if (typeof window !== "undefined" && window.speechSynthesis) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = rate;
    window.speechSynthesis.speak(utterance);
  }
};

export const speakText = (text: string, lang: string = "en-US"): void =>
  speakWithRate(text, 0.7, lang);

export const speakSlow = (text: string, lang: string = "en-US"): void =>
  speakWithRate(text, 0.2, lang);

export const speakFast = (text: string, lang: string = "en-US"): void =>
  speakWithRate(text, 1.2, lang);

/**
 * Pronounce a word, trying the audio URL first, falling back to Web Speech API
 */
export const pronounceWord = async (
  word: string,
  audioUrl?: string
): Promise<void> => {
  if (audioUrl) {
    try {
      await playAudio(audioUrl);
      return;
    } catch (error) {
      console.error("Audio playback failed, falling back to synthesis:", error);
    }
  }

  // Fallback to Web Speech API
  speakText(word);
};

export const pronounceWordSlow = async (
  word: string,
  audioUrl?: string
): Promise<void> => {
  if (audioUrl) {
    try {
      await playAudio(audioUrl);
      return;
    } catch (error) {
      console.error(
        "Audio playback failed, falling back to synthesis (slow):",
        error
      );
    }
  }

  speakSlow(word);
};

export const pronounceWordFast = async (
  word: string,
  audioUrl?: string
): Promise<void> => {
  if (audioUrl) {
    try {
      await playAudio(audioUrl);
      return;
    } catch (error) {
      console.error(
        "Audio playback failed, falling back to synthesis (fast):",
        error
      );
    }
  }

  speakFast(word);
};
