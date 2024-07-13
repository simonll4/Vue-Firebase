import { AuthRepository } from "@/domain/repository/auth/auth.repository";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, type UserCredential } from "firebase/auth";
import { auth } from "@/config/firebase.config"

export class AuthModel extends AuthRepository {
  async signInEmailAndPassword(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password)
  }

  async registerUserWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password);
  }

}