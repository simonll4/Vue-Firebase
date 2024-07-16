import type { UserCredential } from "firebase/auth";
import { AuthService } from "../../../services/auth.service";
import { AuthModel } from "../../../database/auth/auth.model";

export class LoginEmailAndPasswordUsecase {
  static execute(email: string, password: string): Promise<UserCredential> {
    return new AuthService(new AuthModel()).signInWithEmailAndPassword(
      email,
      password
    );
  }
}