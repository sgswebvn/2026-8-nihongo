export const audioService = {
  isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  },

  speakJapanese(text: string, rate: number = 0.9): Promise<void> {
    return new Promise((resolve) => {
      if (!this.isSupported()) {
        resolve();
        return;
      }

      try {
        window.speechSynthesis.cancel(); // Stop any pending speech

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = rate;
        utterance.pitch = 1.0;

        // Try to pick an authentic Japanese voice if available
        const voices = window.speechSynthesis.getVoices();
        const jaVoice = voices.find(
          (v) => v.lang === 'ja-JP' || v.lang === 'ja' || v.name.toLowerCase().includes('japan')
        );
        if (jaVoice) {
          utterance.voice = jaVoice;
        }

        utterance.onend = () => resolve();
        utterance.onerror = () => resolve();

        window.speechSynthesis.speak(utterance);
      } catch (e) {
        console.warn('Speech error', e);
        resolve();
      }
    });
  },

  stop(): void {
    if (this.isSupported()) {
      window.speechSynthesis.cancel();
    }
  }
};
