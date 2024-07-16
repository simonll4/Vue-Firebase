import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { PublicationStorageRepository } from "../../domain/repository/blog/publication.storage.repository";

import { storage } from "../../config/firebase.config";

export class PublicationStorageModel implements PublicationStorageRepository {
  storage(file: File) {
    const storageRef = ref(storage, `publications/${file.name}`);

    return uploadBytes(storageRef, file);
  }

  getDownload(file: File) {
    const storageRef = ref(storage, `publications/${file.name}`);

    return getDownloadURL(storageRef);
  }
}