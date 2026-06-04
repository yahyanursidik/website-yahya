export async function GET() {
  return new Response(JSON.stringify({
    keystaticGithubClientIdConfigured: Boolean(process.env.KEYSTATIC_GITHUB_CLIENT_ID),
    keystaticGithubClientSecretConfigured: Boolean(process.env.KEYSTATIC_GITHUB_CLIENT_SECRET),
    keystaticSecretConfigured: Boolean(process.env.KEYSTATIC_SECRET),
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
