const API_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:8000";

export async function api(endpoint, options = {}) {
    const response = await fetch(`${API_URL}${endpoint}`, {
        cache: "no-store",
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
    });

    if (!response.ok) {
        let message = "Request failed";

        try {
            const error = await response.json();
            message = error.detail || message;
        } catch {}

        throw new Error(message);
    }

    return response.json();
}