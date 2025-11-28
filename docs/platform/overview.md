# SuperQA Message API Documentation

This document describes the API endpoints available for sending messages to active chat sessions.

## Base URL
When running in development mode, the API is available at:
- **Internal (Docker)**: `http://localhost:3001`
- **Through Vite Proxy**: `http://localhost:8080/api`

## Endpoints

### 1. Health Check
Check if the API server is running.

**Endpoint:** `GET /api/health`

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2025-10-06T10:30:00.000Z"
}
```

---

### 2. Send Message to Session
Send a message to a specific chat session. The message will appear in the chat window in real-time.

**Endpoint:** `POST /api/message`

**Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "session_id": "session_1728210000000_abc123xyz",
  "message": "Test execution completed successfully",
  "role": "assistant",
  "subContent": "All 15 test cases passed"
}
```

**Parameters:**
- `session_id` (required): The unique session identifier for the chat window
- `message` (required): The main message content to display
- `role` (optional): Either "assistant" (default) or "user"
- `subContent` (optional): Additional context or details to show below the main message

**Example using cURL:**
```bash
curl -X POST http://localhost:8080/api/message \
  -H "Content-Type: application/json" \
  -d '{
    "session_id": "session_1728210000000_abc123xyz",
    "message": "✅ Navigation test completed",
    "role": "assistant",
    "subContent": "Found 12 pages, all links working correctly"
  }'
```

**Success Response:**
```json
{
  "success": true,
  "message": "Message added to session",
  "data": {
    "role": "assistant",
    "content": "✅ Navigation test completed",
    "subContent": "Found 12 pages, all links working correctly",
    "timestamp": "2025-10-06T10:30:00.000Z",
    "sessionId": "session_1728210000000_abc123xyz"
  }
}
```

**Error Response:**
```json
{
  "error": "session_id and message are required"
}
```

---

### 3. Get Messages for Session
Retrieve all messages (or messages since a specific timestamp) for a session.

**Endpoint:** `GET /api/messages/:session_id`

**Query Parameters:**
- `since` (optional): ISO timestamp to get only messages after this time

**Example:**
```bash
# Get all messages
curl http://localhost:8080/api/messages/session_1728210000000_abc123xyz

# Get messages since timestamp
curl "http://localhost:8080/api/messages/session_1728210000000_abc123xyz?since=2025-10-06T10:00:00.000Z"
```

**Response:**
```json
{
  "session_id": "session_1728210000000_abc123xyz",
  "messages": [
    {
      "role": "assistant",
      "content": "Test completed",
      "subContent": "All tests passed",
      "timestamp": "2025-10-06T10:30:00.000Z",
      "sessionId": "session_1728210000000_abc123xyz"
    }
  ],
  "count": 1
}
```

---

### 4. List All Active Sessions
Get a list of all active chat sessions (useful for debugging).

**Endpoint:** `GET /api/sessions`

**Example:**
```bash
curl http://localhost:8080/api/sessions
```

**Response:**
```json
{
  "sessions": [
    {
      "sessionId": "session_1728210000000_abc123xyz",
      "messageCount": 5,
      "lastMessage": {
        "role": "assistant",
        "content": "Test completed",
        "timestamp": "2025-10-06T10:30:00.000Z"
      }
    }
  ],
  "count": 1
}
```

---

### 5. Clear Session Messages
Delete all messages for a specific session (cleanup).

**Endpoint:** `DELETE /api/messages/:session_id`

**Example:**
```bash
curl -X DELETE http://localhost:8080/api/messages/session_1728210000000_abc123xyz
```

**Response:**
```json
{
  "success": true,
  "message": "Session messages cleared"
}
```

---

## Integration Example

Here's how you would integrate with the Azure Logic App or external testing service:

```javascript
// After your test completes, send results to the chat session
async function sendTestResults(sessionId, testResults) {
  const response = await fetch('http://localhost:8080/api/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      session_id: sessionId,
      message: `✅ ${testResults.testName} completed`,
      role: 'assistant',
      subContent: `${testResults.passed}/${testResults.total} tests passed`
    })
  });
  
  return await response.json();
}
```

---

### 6. Update Session Live URLs
Send live application URLs to display in the chat interface iframes.

**Endpoint:** `POST /api/session`

**Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "session_id": "session_1728210000000_abc123xyz",
  "liveurl": [
    "https://example.com/page1",
    "https://example.com/page2"
  ]
}
```

**Parameters:**
- `session_id` (required): The unique session identifier for the chat window
- `liveurl` (required): Array of URLs to display in iframes

**Example using cURL:**
```bash
curl -X POST http://localhost:8080/api/session \
  -H "Content-Type: application/json" \
  -d '{
    "session_id": "session_1728210000000_abc123xyz",
    "liveurl": ["https://example.com", "https://example.com/page2"]
  }'
```

**Success Response:**
```json
{
  "success": true,
  "message": "Live URLs updated",
  "session_id": "session_1728210000000_abc123xyz",
  "liveurl": [
    "https://example.com",
    "https://example.com/page2"
  ]
}
```

**Behavior:**
- **Single URL**: Displays in full-screen mode
- **Multiple URLs**: Displays in tiles/grid mode (like Google Meet)
- **Click to expand**: Click any tile to view full-screen
- **Tiles button**: Switch back to tiles view from full-screen

---

### 7. Get Session Live URLs
Retrieve the current live URLs for a session.

**Endpoint:** `GET /api/session/:session_id/liveurl`

**Example:**
```bash
curl http://localhost:8080/api/session/session_1728210000000_abc123xyz/liveurl
```

**Response:**
```json
{
  "session_id": "session_1728210000000_abc123xyz",
  "liveurl": [
    "https://example.com",
    "https://example.com/page2"
  ],
  "count": 2
}
```

---

## Real-Time Updates

The chat interface automatically polls for new messages every 2 seconds. When you send a message via the API:

1. Message is stored in server memory
2. Chat interface polls the `/api/messages/:session_id` endpoint
3. New messages are detected and displayed in the chat window
4. Messages are also saved to localStorage for persistence

---

## Notes

- Session IDs are displayed in the chat window header and can be copied
- Messages are stored in memory only (not persisted to database)
- The API server runs on port 3001 but is proxied through Vite on port 8080
- Use the `/api` prefix when calling from the frontend to use the proxy

