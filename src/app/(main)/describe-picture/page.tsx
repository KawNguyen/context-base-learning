import { ImageGallery } from "@/components/describe-picture/image-gallery";

export default async function ImageDescriptionPage() {
  return (
    <main className="container py-8 max-w-7xl mx-auto px-4">
      <div className="mb-12 text-center space-y-4">
        <h1 className="text-5xl font-black tracking-tight bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
          Describe the Picture
        </h1>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium">
          Choose a photograph to start your Part 1 practice. Listen carefully
          and select the best description.
        </p>
      </div>

      <ImageGallery />
    </main>
  );
}
