export interface VideoProfileMetadata {
    id?: number; // optional because it will be auto-generated
    user_id: number; // NEED TO GET THIS FROM SESSION DATA LATER!!!
    profile_name: string;
    codec_name?: string;
    // profile?: string;
    width?: number;
    height?: number;
    field_order?: string;
    r_frame_rate?: string;
    duration?: number;
    bitrate?: [number, number] | null; // TypeScript doesn't have a direct NUMRANGE type, so we use a tuple
    audio_codec_name?: string;
    sample_rate?: number;
    channels?: number;
    channel_layout?: string;
    audio_bitrate?: [number, number] | null; // TypeScript doesn't have a direct NUMRANGE type, so we use a tuple
}

export interface userData{
  first_name: string
  last_name: string
  username: string
  email: string
  password: string
}
export interface User {
  id: number;
  first_name: string
  last_name: string
}

export interface userLogin{
  username: string
  password: string
}

export interface VideoMetadataResolve {
  video: any; 
}

export interface AudioMetadataResolve {
  audio: any; 
}

// Modify the VideoMetadata type
export interface VideoMetadata {
    [key: string]: any; // Add index signature
}

// Modify the AudioMetadata type
export interface AudioMetadata {
    [key: string]: any; // Add index signature
}
export interface ResJSON {
  uploadedVideo: string;
  allVideoData: {
    video: VideoMetadata;
    audio: AudioMetadata;
  };
}

export interface videoProfileInterface {
  codec_name: string;
  // profile: string;
  width: number;
  height: number;
  field_order: string;
  r_frame_rate: string;
  duration: number;
  bitrate: string;
  audio_codec_name: string;
  sample_rate: number;
  channels: number;
  channel_layout: string;
  audio_bitrate: string;
}
