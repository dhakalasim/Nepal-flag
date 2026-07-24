import { Component, OnInit, inject, signal } from '@angular/core';

import { FlagStoryService } from './flag-story.service';
import { FlagStory } from './story.model';

@Component({
  selector: 'app-flag-story',
  standalone: true,
  templateUrl: './flag-story.component.html',
  styleUrl: './flag-story.component.scss'
})
export class FlagStoryComponent implements OnInit {
  private readonly flagStoryService = inject(FlagStoryService);

  readonly story = signal<FlagStory | null>(null);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  ngOnInit(): void {
    this.flagStoryService.getStory().subscribe({
      next: (story) => {
        this.story.set(story);
        this.loading.set(false);
      },
      error: () => {
        this.error.set(
          'Could not reach the story API. Make sure the FastAPI backend is running on http://localhost:8001.'
        );
        this.loading.set(false);
      }
    });
  }
}
