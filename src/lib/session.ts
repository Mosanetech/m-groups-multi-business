import { SignJWT, jwtVerify, type JWTPayload } from "jose";

const secret = new TextEncoder().encode(
  process.env.BETTER_AUTH_SECRET
);

export interface SessionPayload extends JWTPayload {
  userId: string;
  username: string;
  role: "SUPER_ADMIN" | "ADMIN";
}

export async function createSession(
  payload: SessionPayload
) {
  return new SignJWT(payload)
    .setProtectedHeader({
      alg: "HS256",
    })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifySession(
  token: string
): Promise<SessionPayload> {
  const { payload } = await jwtVerify(token, secret);

  return {
    userId: payload.userId as string,
    username: payload.username as string,
    role: payload.role as "SUPER_ADMIN" | "ADMIN",
  };
}