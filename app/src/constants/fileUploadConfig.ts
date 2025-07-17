export const FileUploadConfig = {
  maxFiles: 5,
  maxFileSize: 10 * 1024 * 1024,
  acceptedTypes: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/jpeg',
    'image/png',
    'image/webp',
  ],
  previewGeneration: true,
  virusScanning: true,
};