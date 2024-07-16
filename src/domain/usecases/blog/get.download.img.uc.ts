import { PublicationStorageService } from "@/services/publication.storage.service";
import { PublicationStorageModel } from "../../../database/blog/publication.storage.model";

export class DownloadImageUrlUseCase {
  static execute(file: File) {
    return new PublicationStorageService(
      new PublicationStorageModel()
    ).getDownload(file);
  }
}