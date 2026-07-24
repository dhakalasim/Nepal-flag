import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { FlagStory } from './story.model';

const API_URL = 'http://localhost:8001/api/story';

@Injectable({ providedIn: 'root' })
export class FlagStoryService {
  private readonly http = inject(HttpClient);

  getStory(): Observable<FlagStory> {
    return this.http.get<FlagStory>(API_URL);
  }
}
