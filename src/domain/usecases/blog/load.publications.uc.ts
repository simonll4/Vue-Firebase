import { PublicationsService } from "../../../services/publications.service";
import { PublicationModel } from "../../../database/blog/publication.model";

export class LoadPublicationsUsecase {
  static execute() {
    return new PublicationsService(new PublicationModel()).findAll();
  }
}