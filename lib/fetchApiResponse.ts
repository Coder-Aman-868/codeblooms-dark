const CMS_HOST_URL = process.env.API_HOST_URL;
const CMS_TOKEN = process.env.API_TOKEN;
// Define HTTP methods for requests
export const GET_METHOD = "GET";
export const POST_METHOD = "POST";
export const DELETE_METHOD = "DELETE";
export const PUT_METHOD = "PUT";

// Fetch directly from Strapi Server
export async function fetchApiResponse(
    method: string,
    url: string,
    authorize: boolean = false,
    data: Record<string, unknown> | null = null,
) {
    const SERVER_URL = `${CMS_HOST_URL}/api`;
    console.log(`${SERVER_URL}/${url}`, 'URL')
    // Always 
    // define headers object
    const headers: Record<string, string> = {};

    // Add Bearer token if authorized
    if (authorize) {
        headers["Authorization"] = `Bearer ${CMS_TOKEN}`;
    }

    // If sending data, always set content type
    if (data) {
        headers["Content-Type"] = "application/json";
    }
    try {
        const requestOptions: RequestInit = {
            method,
            headers,
        };
        // requestOptions.mode = "no-cors";

        if (data) {
            requestOptions.body = JSON.stringify(data);
        }

        const response = await fetch(`${SERVER_URL}/${url}`, requestOptions);
        const result = await response.json();

        if (result.data == null && result.error) {
            throw new Error(
                result.error?.message ||
                "An error occurred while fetching the data from the server."
            );
        }

        return result;
    } catch (error: unknown) {
        throw new Error(
            error instanceof Error ? error.message : "Unknown fetch error"
        );
    }
}
