import { AuthModel } from "@/database/auth/auth.model"

export class authService {

  public static signInWithEmailAndPassword(email: string, password: string) {
    return new AuthModel().signInEmailAndPassword(email, password);
  }

  public static registerUserWithEmailAndPassword(email: string, password: string) {
    return new AuthModel().registerUserWithEmailAndPassword(email, password);
  }
}