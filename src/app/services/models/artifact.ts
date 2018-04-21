import { SafeUrl } from '@angular/platform-browser';

export class ArtifactItem {
    Title: string;
    Url: string;
}

export class Artifact {
    Title: string;
    Url: string;
    Items: ArtifactItem[];
}
