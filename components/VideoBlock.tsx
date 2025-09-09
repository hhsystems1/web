'use client'

interface VideoBlockProps {
  videoPath?: string
  title?: string
}

export function VideoBlock({ videoPath, title }: VideoBlockProps) {
  return (
    <div className="bg-muted/50 rounded-lg overflow-hidden">
      <div className="aspect-video">
        {videoPath ? (
          <video
            className="w-full h-full object-cover"
            controls
            poster={`${videoPath.replace('.mp4', '-poster.jpg')}`}
          >
            <source src={videoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="w-full h-full bg-muted/20 flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
            <div className="text-center space-y-2">
              <div className="text-4xl">🎥</div>
              <p className="text-muted-foreground font-medium">
                {title ? `${title} Demo Video` : 'Package Demo Video'}
              </p>
              <p className="text-sm text-muted-foreground">
                Coming soon! Video will be added here.
              </p>
              {/* TODO: Replace with actual video file at {videoPath} */}
              <p className="text-xs text-muted-foreground/60 mt-4">
                Video path: {videoPath}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
