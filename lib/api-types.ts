export interface BgRemoverOptions {
    image: Blob;
    refine?: string;
    strength?: string;
}

export interface BgBlurOptions {
    image: Blob;
    intensity: number;
    refine?: string;
    strength?: string;
}
