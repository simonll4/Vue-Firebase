import { AuthService } from "@/services/auth.service";
import type { UserCredential } from "firebase/auth";

export class LoginEmailAndPasswordUsecase {
  static execute(email: string, password: string): Promise<UserCredential> {
    return AuthService.signInWithEmailAndPassword(email, password);
  }
}