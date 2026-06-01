export async function GET() {
  return new Response(JSON.stringify({
    hasClientId: !!process.env.KEYSTATIC_GITHUB_CLIENT_ID,
    hasClientSecret: !!process.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
    hasSecret: !!process.env.KEYSTATIC_SECRET,
    nodeEnv: process.env.NODE_ENV,
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
