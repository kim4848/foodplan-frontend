export async function getChatMessage(message:string) {
    try {
      const response = await fetch(`http://localhost:5137/Chat?message=${encodeURIComponent(message)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Response from API:', data);
      return data;
    } catch (error) {
      console.error('Error fetching chat message:', error);
    }
  }
  
  
  