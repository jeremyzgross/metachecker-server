import { db } from "../0_Config/config";
import {VideoProfileMetadata } from "../Interfaces/interface";

export const _updateVideoProfile = async (user_id: number, profile_id: number, updates: Partial<VideoProfileMetadata>) => {
  try {
    const rowsAffected = await db('video_metadata')
      .where({ user_id, id: profile_id })
      .update(updates);

    return rowsAffected > 0;
  } catch (error) {
    console.error("Error updating video profile:", error);
    throw error;
  }
};
