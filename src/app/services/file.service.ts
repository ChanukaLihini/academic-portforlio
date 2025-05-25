import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async saveFile(blob: Blob, fileName: string): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      const { saveAs } = await import('file-saver');
      saveAs(blob, fileName);
    } else {
      console.warn('Skipping file download during SSR');
    }
  }
}
