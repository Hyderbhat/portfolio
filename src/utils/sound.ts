// Web Audio API Synthesizer for subtle UI sound feedback

class SoundFX {
  private ctx: AudioContext | null = null;
  private enabled: boolean = false;

  constructor() {
    // Lazy init on first user interaction
  }

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setEnabled(enable: boolean) {
    this.enabled = enable;
    if (enable) {
      this.initCtx();
      this.playTick(600, 0.02, 0.02);
    }
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  public toggle(): boolean {
    this.setEnabled(!this.enabled);
    return this.enabled;
  }

  public playHover() {
    if (!this.enabled) return;
    this.playTick(440, 0.015, 0.015);
  }

  public playClick() {
    if (!this.enabled) return;
    this.playTick(880, 0.03, 0.03);
  }

  public playSuccess() {
    if (!this.enabled) return;
    this.playArpeggio([523.25, 659.25, 783.99, 1046.50]);
  }

  private playTick(freq: number, duration: number, gainVal: number) {
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Audio fallback silent
    }
  }

  private playArpeggio(notes: number[]) {
    notes.forEach((freq, index) => {
      setTimeout(() => {
        this.playTick(freq, 0.08, 0.04);
      }, index * 60);
    });
  }
}

export const soundFX = new SoundFX();
