
import { useEffect, useRef } from 'react';

type Task = () => void;

class RenderQueue {
  private queue: Task[] = [];
  private isProcessing = false;
  private frameId: number | null = null;

  add(task: Task) {
    this.queue.push(task);
    this.process();
  }

  private process() {
    if (this.isProcessing || this.queue.length === 0) return;
    this.isProcessing = true;

    const run = () => {
      if (this.queue.length === 0) {
        this.isProcessing = false;
        this.frameId = null;
        return;
      }

      // Run one task per frame to keep input latency low
      const task = this.queue.shift();
      if (task) task();

      this.frameId = requestAnimationFrame(run);
    };

    this.frameId = requestAnimationFrame(run);
  }

  cancelAll() {
    this.queue = [];
    if (this.frameId) cancelAnimationFrame(this.frameId);
    this.isProcessing = false;
  }
}

export const renderQueue = new RenderQueue();

export function useRenderTask(task: Task, dependencies: any[]) {
  useEffect(() => {
    renderQueue.add(task);
    return () => {
      // In a real app, we might want to cancel the specific task, 
      // but for simple mounting, we just let it run or clear the queue on major transitions
    };
  }, dependencies);
}
