import { PublicationsService } from "@/services/publications.service";
import type { PublicationEntity } from "../../entities/publications.entity";
import { PublicationModel } from "../../../database/blog/publication.model";

export class CreatePublicationUsecase {
  static execute(publication: PublicationEntity) {
    return new PublicationsService(new PublicationModel()).create(publication);
  }
}