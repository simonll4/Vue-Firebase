import { defineStore } from "pinia";
import { reactive } from "vue";
import { onSnapshot } from "firebase/firestore";
import Swal from "sweetalert2";

import { LoadPublicationsUsecase } from "../../domain/usecases/blog/load.publications.uc";
import { CreatePublicationUsecase } from "../../domain/usecases/blog/create.publication.uc";
import { formatPublicationAdapter } from "../../adapters/presenters/format.publication";
import { StorageImageUsecase } from "../../domain/usecases/blog/storage.img.uc";
import { DownloadImageUrlUseCase } from "../../domain/usecases/blog/get.download.img.uc";

import type {
  PublicationEntity,
  PublicationsEntity,
} from "../../domain/entities/publications.entity";

export const usePublications = defineStore("publications", () => {
  const data = reactive<PublicationsEntity>({
    publications: [],
  });

  const findAll = async () => {
    const query = await LoadPublicationsUsecase.execute();

    onSnapshot(query, (docs) => {
      data.publications = [];

      docs.forEach((publication) => {
        if (publication.exists()) {
          const formatPublication: PublicationEntity = formatPublicationAdapter(
            publication.data(),
            publication.id
          );

          data.publications.push(formatPublication);
        }
      });
    });
  };

  const create = async (publicationData: PublicationEntity) => {
    try {
      Swal.showLoading();

      await CreatePublicationUsecase.execute(publicationData);
    } catch (error) {
      console.log(error);
    } finally {
      Swal.hideLoading();
    }
  };

  const uploadImage = async (file: File) => {
    try {
      Swal.showLoading();

      await StorageImageUsecase.execute(file);
    } catch (error) {
      console.log(error);
      Swal.hideLoading();
    }
  };

  const getDownloadURL = async (file: File) => {
    try {
      const res = await DownloadImageUrlUseCase.execute(file);

      return res;
    } catch (error) {
      console.log(error);
    } finally {
      Swal.hideLoading();
    }
  };

  return {
    data,
    findAll,
    create,
    uploadImage,
    getDownloadURL,
  };
});