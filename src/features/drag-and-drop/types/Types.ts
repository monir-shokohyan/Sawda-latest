export interface ImageFile {
  file: File;
  preview: string;
  id: string;
  originalSize: number;
  compressedSize: number;
  status: 'uploading' | 'completed';
}

export interface DragAndDropProps {
  images: ImageFile[];
  setImages: React.Dispatch<React.SetStateAction<ImageFile[]>>;
  maxFiles?: number;
  maxSize?: number;
}