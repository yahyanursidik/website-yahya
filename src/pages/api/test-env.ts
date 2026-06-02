export async function GET() {
  const clientId = process.env.KEYSTATIC_GITHUB_CLIENT_ID || "";
  const clientSecret = process.env.KEYSTATIC_GITHUB_CLIENT_SECRET || "";
  const secret = process.env.KEYSTATIC_SECRET || "";

  return new Response(JSON.stringify({
    clientIdPrefix: clientId.substring(0, 4),
    clientIdLength: clientId.length,
    clientSecretPrefix: clientSecret.substring(0, 4),
    clientSecretLength: clientSecret.length,
    secretLength: secret.length,
    nodeEnv: process.env.NODE_ENV,
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
